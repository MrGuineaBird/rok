(function () {
  "use strict";

  var caseId = null;
  var suspects = [];
  var selectedId = null;
  var transcripts = {};
  var caseEnded = false;

  var lobby = document.getElementById("detLobby");
  var game = document.getElementById("detGame");
  var busy = document.getElementById("detBusy");
  var newBtn = document.getElementById("detNewBtn");
  var caseTitle = document.getElementById("detCaseTitle");
  var briefingEl = document.getElementById("detBriefing");
  var cluesEl = document.getElementById("detClues");
  var suspectsEl = document.getElementById("detSuspects");
  var chatLabel = document.getElementById("detChatLabel");
  var chatLog = document.getElementById("detChatLog");
  var inputEl = document.getElementById("detInput");
  var sendBtn = document.getElementById("detSendBtn");
  var accuseBtn = document.getElementById("detAccuseBtn");
  var modelNote = document.getElementById("detModelNote");

  var modal = document.getElementById("detModal");
  var modalBackdrop = document.getElementById("detModalBackdrop");
  var modalClose = document.getElementById("detModalClose");
  var modalTitle = document.getElementById("detModalTitle");
  var modalHeadline = document.getElementById("detModalHeadline");
  var modalBody = document.getElementById("detModalBody");
  var modalNewBtn = document.getElementById("detModalNewBtn");

  var accuseModal = document.getElementById("detAccuseConfirm");
  var accuseBackdrop = document.getElementById("detAccuseBackdrop");
  var accuseText = document.getElementById("detAccuseText");
  var accuseCancel = document.getElementById("detAccuseCancel");
  var accuseConfirmBtn = document.getElementById("detAccuseConfirmBtn");

  function getApiBase() {
    var root = "";
    if (typeof window !== "undefined" && typeof window.ROK_API_BASE === "string") {
      root = String(window.ROK_API_BASE).trim().replace(/\/+$/, "");
    }
    if (!root) {
      var meta = document.querySelector('meta[name="rok-api-root"]');
      var m = meta && meta.getAttribute("content");
      root = m && String(m).trim() ? String(m).replace(/\/+$/, "") : "";
    }
    if (!root && typeof window.location !== "undefined") {
      var host = (window.location.hostname || "").toLowerCase();
      if (host === "rok.kyklos.online" || host === "www.rok.kyklos.online") {
        root = "https://rokbackendreal.kyklos.online";
      }
    }
    if (!root && typeof window.location !== "undefined" && window.location.origin) {
      root = window.location.origin;
    }
    return root || "";
  }

  function escHtml(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function renderBriefing(text) {
    var parts = String(text || "").split(/\n\n+/);
    return parts
      .map(function (p) {
        return "<p>" + escHtml(p).replace(/\n/g, "<br>") + "</p>";
      })
      .join("");
  }

  function parseJson(res) {
    return res.text().then(function (text) {
      var j = null;
      try {
        j = text ? JSON.parse(text) : null;
      } catch (e) {
        j = { error: "HTTP " + res.status + " — " + (text ? text.slice(0, 200) : "empty body") };
      }
      return { ok: res.ok, status: res.status, body: j };
    });
  }

  function setBusy(on) {
    busy.hidden = !on;
    newBtn.disabled = on || caseEnded;
  }

  function showModal(title, headline, body) {
    modalTitle.textContent = title;
    modalHeadline.textContent = headline;
    modalBody.textContent = body;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function hideModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  function showAccuseConfirm(name) {
    accuseText.textContent = 'You are about to accuse ' + name + ". If you are wrong, the case ends and the truth is revealed.";
    accuseModal.hidden = false;
  }

  function hideAccuseConfirm() {
    accuseModal.hidden = true;
  }

  function renderSuspectButtons() {
    suspectsEl.innerHTML = "";
    suspects.forEach(function (s) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "det-suspect-btn" + (s.id === selectedId ? " det-suspect-btn--active" : "");
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", s.id === selectedId ? "true" : "false");
      btn.dataset.id = s.id;
      var nm = document.createElement("span");
      nm.className = "det-suspect-name";
      nm.textContent = s.name;
      var rl = document.createElement("span");
      rl.className = "det-suspect-role";
      rl.textContent = s.role || "—";
      btn.appendChild(nm);
      btn.appendChild(rl);
      btn.addEventListener("click", function () {
        selectSuspect(s.id);
      });
      suspectsEl.appendChild(btn);
    });
  }

  function renderChat() {
    chatLog.innerHTML = "";
    if (!selectedId) {
      chatLabel.textContent = "Select a suspect";
      return;
    }
    var s = suspects.find(function (x) {
      return x.id === selectedId;
    });
    chatLabel.textContent = s ? "Interviewing: " + s.name : "Interview";
    var lines = transcripts[selectedId] || [];
    lines.forEach(function (line) {
      var wrap = document.createElement("div");
      wrap.className = "det-msg det-msg--" + (line.role === "user" ? "user" : "bot");
      var role = document.createElement("div");
      role.className = "det-msg-role";
      role.textContent = line.role === "user" ? "You" : (s ? s.name : "Suspect");
      var txt = document.createElement("div");
      txt.textContent = line.text;
      wrap.appendChild(role);
      wrap.appendChild(txt);
      chatLog.appendChild(wrap);
    });
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function selectSuspect(id) {
    if (caseEnded) return;
    selectedId = id;
    renderSuspectButtons();
    renderChat();
    inputEl.disabled = !id;
    sendBtn.disabled = !id;
    accuseBtn.disabled = !id;
    if (id) inputEl.focus();
  }

  function resetAll() {
    caseId = null;
    suspects = [];
    selectedId = null;
    transcripts = {};
    caseEnded = false;
    game.hidden = true;
    lobby.hidden = false;
    cluesEl.innerHTML = "";
    suspectsEl.innerHTML = "";
    chatLog.innerHTML = "";
    inputEl.value = "";
    inputEl.disabled = true;
    sendBtn.disabled = true;
    accuseBtn.disabled = true;
    chatLabel.textContent = "Select a suspect";
    newBtn.disabled = false;
  }

  function startNewCase() {
    if (caseEnded) resetAll();
    setBusy(true);
    fetch(getApiBase() + "/api/games/detective/new", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({}),
    })
      .then(parseJson)
      .then(function (res) {
        if (!res.ok || !res.body || res.body.ok !== true || !res.body.case_id) {
          var err =
            (res.body && (res.body.error || res.body.message)) ||
            "Could not start a case (HTTP " + res.status + ")";
          throw new Error(err);
        }
        return res.body;
      })
      .then(function (data) {
        caseId = data.case_id;
        suspects = Array.isArray(data.suspects) ? data.suspects : [];
        caseTitle.textContent = data.title || "Untitled case";
        briefingEl.innerHTML = renderBriefing(data.briefing || "");
        cluesEl.innerHTML = "";
        (data.clues || []).forEach(function (c) {
          var li = document.createElement("li");
          li.textContent = c;
          cluesEl.appendChild(li);
        });
        transcripts = {};
        lobby.hidden = true;
        game.hidden = false;
        caseEnded = false;
        renderSuspectButtons();
        if (suspects.length) selectSuspect(suspects[0].id);
        else selectSuspect(null);
      })
      .catch(function (err) {
        showModal("Error", "Could not start a case", String(err.message || err));
      })
      .then(function () {
        setBusy(false);
      });
  }

  function sendMessage() {
    if (!caseId || !selectedId || caseEnded) return;
    var text = (inputEl.value || "").trim();
    if (!text) return;
    inputEl.value = "";
    if (!transcripts[selectedId]) transcripts[selectedId] = [];
    transcripts[selectedId].push({ role: "user", text: text });
    renderChat();
    sendBtn.disabled = true;
    setBusy(true);
    fetch(getApiBase() + "/api/games/detective/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ case_id: caseId, suspect_id: selectedId, message: text }),
    })
      .then(parseJson)
      .then(function (res) {
        if (!res.ok || !res.body || res.body.ok !== true) {
          var err =
            (res.body && (res.body.error || res.body.message)) ||
            "Request failed (HTTP " + res.status + ")";
          throw new Error(err);
        }
        return res.body.reply || "…";
      })
      .then(function (reply) {
        if (!transcripts[selectedId]) transcripts[selectedId] = [];
        transcripts[selectedId].push({ role: "assistant", text: reply });
        renderChat();
      })
      .catch(function (err) {
        showModal("Error", "Interview failed", String(err.message || err));
      })
      .then(function () {
        sendBtn.disabled = caseEnded || !selectedId;
        setBusy(false);
      });
  }

  function submitAccuse() {
    if (!caseId || !selectedId) return;
    hideAccuseConfirm();
    setBusy(true);
    fetch(getApiBase() + "/api/games/detective/accuse", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ case_id: caseId, suspect_id: selectedId }),
    })
      .then(parseJson)
      .then(function (res) {
        if (!res.ok || !res.body || res.body.ok !== true) {
          var err =
            (res.body && (res.body.error || res.body.message)) ||
            "Request failed (HTTP " + res.status + ")";
          throw new Error(err);
        }
        return res.body;
      })
      .then(function (data) {
        caseEnded = true;
        caseId = null;
        inputEl.disabled = true;
        sendBtn.disabled = true;
        accuseBtn.disabled = true;
        showModal(
          data.solved ? "Solved" : "Case closed",
          data.headline || "",
          data.reveal || ""
        );
      })
      .catch(function (err) {
        showModal("Error", "Accusation failed", String(err.message || err));
      })
      .then(function () {
        setBusy(false);
      });
  }

  newBtn.addEventListener("click", startNewCase);
  sendBtn.addEventListener("click", sendMessage);
  inputEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  accuseBtn.addEventListener("click", function () {
    if (!selectedId || caseEnded) return;
    var s = suspects.find(function (x) {
      return x.id === selectedId;
    });
    showAccuseConfirm(s ? s.name : "this person");
  });
  accuseCancel.addEventListener("click", hideAccuseConfirm);
  accuseBackdrop.addEventListener("click", hideAccuseConfirm);
  accuseConfirmBtn.addEventListener("click", submitAccuse);

  modalClose.addEventListener("click", hideModal);
  modalBackdrop.addEventListener("click", hideModal);
  modalNewBtn.addEventListener("click", function () {
    hideModal();
    resetAll();
    startNewCase();
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      hideAccuseConfirm();
      hideModal();
    }
  });

  fetch(getApiBase() + "/api/games/detective", { headers: { Accept: "application/json" } })
    .then(parseJson)
    .then(function (res) {
      if (res.body && res.body.model) {
        modelNote.textContent = "AI model: " + res.body.model;
      }
    })
    .catch(function () {});

  resetAll();
})();
