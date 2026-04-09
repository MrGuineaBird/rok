(function () {
  "use strict";

  var ROUND_SECONDS = 120;

  var canvas = document.getElementById("pictCanvas");
  var ctx = canvas.getContext("2d");
  var promptEl = document.getElementById("pictPrompt");
  var timerEl = document.getElementById("pictTimer");
  var startBtn = document.getElementById("pictStartBtn");
  var clearBtn = document.getElementById("pictClearBtn");
  var toolsPanel = document.getElementById("pictToolsPanel");
  var modeDrawBtn = document.getElementById("pictModeDraw");
  var modeEraseBtn = document.getElementById("pictModeErase");
  var colorPicker = document.getElementById("pictColorPicker");
  var widthRange = document.getElementById("pictWidthRange");
  var widthValueEl = document.getElementById("pictWidthValue");
  var hintEl = document.getElementById("pictCanvasHint");
  var statusEl = document.getElementById("pictStatus");
  var statusText = document.getElementById("pictStatusText");
  var resultsEl = document.getElementById("pictResults");
  var resultGuess = document.getElementById("pictResultGuess");
  var resultScore = document.getElementById("pictResultScore");
  var resultReaction = document.getElementById("pictResultReaction");
  var scoreFill = document.getElementById("pictScoreFill");
  var rawEl = document.getElementById("pictResultRaw");
  var playAgainBtn = document.getElementById("pictPlayAgainBtn");
  var verdictModal = document.getElementById("pictVerdictModal");
  var verdictBackdrop = document.getElementById("pictVerdictBackdrop");
  var modalCloseBtn = document.getElementById("pictModalCloseBtn");

  var roundActive = false;
  var drawingEnabled = false;
  var drawing = false;
  var secondsLeft = ROUND_SECONDS;
  var timerId = null;
  var lastPrompt = "";
  var fetchingPrompt = false;
  var promptRequestId = 0;
  var promptAbortController = null;

  var CANVAS_BG = "#faf6f2";
  /** "draw" | "erase" */
  var brushMode = "draw";

  function showVerdictModal() {
    if (!verdictModal) return;
    verdictModal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function hideVerdictModal() {
    if (!verdictModal) return;
    verdictModal.hidden = true;
    document.body.style.overflow = "";
  }

  function syncWidthLabel() {
    if (widthValueEl && widthRange) {
      widthValueEl.textContent = widthRange.value + " px";
    }
  }

  function setBrushMode(mode) {
    brushMode = mode === "erase" ? "erase" : "draw";
    var isErase = brushMode === "erase";
    if (modeDrawBtn && modeEraseBtn) {
      modeDrawBtn.classList.toggle("pict-tools-mode--active", !isErase);
      modeDrawBtn.setAttribute("aria-pressed", !isErase ? "true" : "false");
      modeEraseBtn.classList.toggle("pict-tools-mode--active", isErase);
      modeEraseBtn.setAttribute("aria-pressed", isErase ? "true" : "false");
    }
    canvas.classList.toggle("pict-canvas--eraser", isErase);
    if (toolsPanel) {
      toolsPanel.classList.toggle("pict-tools--color-muted", isErase);
    }
  }

  function currentStrokeColor() {
    return brushMode === "erase" ? CANVAS_BG : colorPicker.value;
  }

  function currentLineWidth() {
    var n = parseInt(widthRange.value, 10);
    if (isNaN(n) || n < 1) n = 4;
    return Math.max(1, n);
  }

  /**
   * API base (same rules as main ROK app.js / index.html ROK_API_BASE).
   */
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

  function getPromptEndpoint() {
    return getApiBase() + "/api/pictionary/prompt";
  }

  function getJudgeEndpoint() {
    return getApiBase() + "/api/pictionary/judge";
  }

  /** Shrink + JPEG to avoid huge POST bodies (fixes HTTP/2 / proxy errors on Render). */
  function compressCanvasForUpload(sourceCanvas) {
    var maxSide = 768;
    var w = sourceCanvas.width;
    var h = sourceCanvas.height;
    if (w < 1 || h < 1) {
      return sourceCanvas.toDataURL("image/jpeg", 0.88);
    }
    var scale = 1;
    if (w > maxSide || h > maxSide) {
      scale = maxSide / Math.max(w, h);
    }
    var tw = Math.max(1, Math.round(w * scale));
    var th = Math.max(1, Math.round(h * scale));
    var off = document.createElement("canvas");
    off.width = tw;
    off.height = th;
    var octx = off.getContext("2d");
    octx.fillStyle = "#faf6f2";
    octx.fillRect(0, 0, tw, th);
    octx.drawImage(sourceCanvas, 0, 0, tw, th);
    return off.toDataURL("image/jpeg", 0.88);
  }

  function parseJsonResponse(r) {
    return r.text().then(function (text) {
      var j = null;
      try {
        j = text ? JSON.parse(text) : null;
      } catch (e) {
        j = { error: "HTTP " + r.status + " — " + (text ? text.slice(0, 200) : "empty body") };
      }
      return { ok: r.ok, status: r.status, body: j };
    });
  }

  function fetchAiPrompt(signal) {
    return fetch(getPromptEndpoint(), {
      method: "GET",
      headers: { Accept: "application/json" },
      signal: signal,
    }).then(parseJsonResponse).then(function (res) {
      if (!res.ok || !res.body || res.body.ok !== true || !res.body.prompt) {
        var err =
          (res.body && (res.body.error || res.body.message)) ||
          "Could not get a prompt (HTTP " + res.status + ")";
        throw new Error(err);
      }
      return String(res.body.prompt).trim();
    });
  }

  function formatTime(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function setTimerDisplay(sec) {
    timerEl.textContent = formatTime(sec);
    timerEl.classList.toggle("pict-timer--warn", sec <= 20 && sec > 0);
  }

  function clearCanvas() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = CANVAS_BG;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function canvasCoords(e) {
    var rect = canvas.getBoundingClientRect();
    var scaleX = canvas.width / rect.width;
    var scaleY = canvas.height / rect.height;
    var clientX = e.clientX != null ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    var clientY = e.clientY != null ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  }

  function startStroke(e) {
    if (!drawingEnabled) return;
    e.preventDefault();
    drawing = true;
    var p = canvasCoords(e);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
  }

  function moveStroke(e) {
    if (!drawingEnabled || !drawing) return;
    e.preventDefault();
    var p = canvasCoords(e);
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = currentStrokeColor();
    ctx.lineWidth = currentLineWidth();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
  }

  function endStroke() {
    drawing = false;
    ctx.beginPath();
  }

  function setStatus(mode, text) {
    statusEl.hidden = false;
    statusText.textContent = text;
    statusEl.classList.remove("pict-status--idle", "pict-status--busy");
    if (mode === "busy") {
      statusEl.classList.add("pict-status--busy");
    } else {
      statusEl.classList.add("pict-status--idle");
    }
  }

  function endRound() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
    roundActive = false;
    drawingEnabled = false;
    canvas.classList.add("pict-canvas--locked");
    startBtn.disabled = false;
    clearBtn.disabled = true;
    setTimerDisplay(0);

    var dataUrl = compressCanvasForUpload(canvas);
    submitDrawing(dataUrl);
  }

  function submitDrawing(dataUrl) {
    setStatus("busy", "Sending to AI…");
    resultsEl.hidden = true;
    hideVerdictModal();

    var url = getJudgeEndpoint();
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        prompt: lastPrompt,
        image_base64: dataUrl,
      }),
    })
      .then(function (r) {
        return r.text().then(function (text) {
          var j = null;
          try {
            j = text ? JSON.parse(text) : null;
          } catch (e) {
            j = { error: "HTTP " + r.status + " — " + (text ? text.slice(0, 200) : "empty body") };
          }
          return { ok: r.ok, status: r.status, body: j };
        });
      })
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
        resultsEl.hidden = false;
        if (data.parse_error) {
          resultGuess.textContent = "—";
          resultScore.textContent = "?";
          resultReaction.textContent = "The AI replied in an unexpected format.";
          scoreFill.style.width = "0%";
          rawEl.hidden = false;
          rawEl.textContent = data.raw_text || "";
        } else {
          rawEl.hidden = true;
          resultGuess.textContent = data.guess || "—";
          var sc = typeof data.score === "number" ? data.score : parseInt(data.score, 10) || 0;
          resultScore.textContent = sc + " / 10";
          scoreFill.style.width = Math.min(100, Math.max(0, sc * 10)) + "%";
          resultReaction.textContent = data.reaction || "—";
        }
        setStatus("idle", "Done");
        showVerdictModal();
      })
      .catch(function (err) {
        resultsEl.hidden = false;
        rawEl.hidden = false;
        rawEl.textContent = String(err.message || err);
        resultGuess.textContent = "—";
        resultScore.textContent = "—";
        resultReaction.textContent = "Something went wrong.";
        scoreFill.style.width = "0%";
        setStatus("idle", "Error");
        showVerdictModal();
      });
  }

  function beginRoundWithPrompt(promptText) {
    lastPrompt = promptText;
    promptEl.textContent = lastPrompt;

    clearCanvas();
    secondsLeft = ROUND_SECONDS;
    setTimerDisplay(secondsLeft);

    roundActive = true;
    drawingEnabled = true;
    canvas.classList.remove("pict-canvas--locked");
    hintEl.hidden = true;
    startBtn.disabled = true;
    clearBtn.disabled = false;
    setStatus("idle", "Draw!");

    timerId = setInterval(function () {
      secondsLeft -= 1;
      setTimerDisplay(secondsLeft);
      if (secondsLeft <= 0) {
        endRound();
      }
    }, 1000);
  }

  function startRound() {
    if (roundActive || fetchingPrompt) return;
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
    resultsEl.hidden = true;
    hideVerdictModal();
    rawEl.hidden = true;

    startBtn.disabled = true;
    playAgainBtn.disabled = true;
    setStatus("busy", "Asking the AI for a prompt…");
    promptEl.textContent = "…";
    fetchingPrompt = true;
    promptRequestId += 1;
    var activeRequestId = promptRequestId;
    if (promptAbortController && typeof promptAbortController.abort === "function") {
      promptAbortController.abort();
    }
    promptAbortController =
      typeof AbortController !== "undefined" ? new AbortController() : null;

    fetchAiPrompt(promptAbortController ? promptAbortController.signal : undefined)
      .then(function (text) {
        if (activeRequestId !== promptRequestId) return;
        beginRoundWithPrompt(text);
      })
      .catch(function (err) {
        if (activeRequestId !== promptRequestId) return;
        if (err && err.name === "AbortError") return;
        setStatus("idle", String(err && err.message ? err.message : "Could not get a prompt."));
        promptEl.textContent = "Press Start round to try again — the AI will suggest what to draw.";
        startBtn.disabled = false;
      })
      .then(function () {
        if (activeRequestId !== promptRequestId) return;
        fetchingPrompt = false;
        promptAbortController = null;
        playAgainBtn.disabled = false;
      });
  }

  canvas.addEventListener("mousedown", startStroke);
  canvas.addEventListener("mousemove", moveStroke);
  window.addEventListener("mouseup", endStroke);
  canvas.addEventListener("touchstart", startStroke, { passive: false });
  canvas.addEventListener("touchmove", moveStroke, { passive: false });
  window.addEventListener("touchend", endStroke);

  startBtn.addEventListener("click", function () {
    if (roundActive) return;
    startRound();
  });

  clearBtn.addEventListener("click", function () {
    if (!drawingEnabled) return;
    clearCanvas();
  });

  modeDrawBtn.addEventListener("click", function () {
    setBrushMode("draw");
  });

  modeEraseBtn.addEventListener("click", function () {
    setBrushMode("erase");
  });

  colorPicker.addEventListener("input", function () {
    setBrushMode("draw");
  });

  widthRange.addEventListener("input", syncWidthLabel);

  document.querySelectorAll(".pict-swatch").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var c = btn.getAttribute("data-color");
      if (c) {
        colorPicker.value = c;
        setBrushMode("draw");
      }
    });
  });

  playAgainBtn.addEventListener("click", function () {
    if (roundActive) return;
    hideVerdictModal();
    startRound();
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", hideVerdictModal);
  }
  if (verdictBackdrop) {
    verdictBackdrop.addEventListener("click", hideVerdictModal);
  }
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      hideVerdictModal();
    }
  });

  function init() {
    syncWidthLabel();
    setBrushMode("draw");
    clearCanvas();
    hideVerdictModal();
    canvas.classList.add("pict-canvas--locked");
    setTimerDisplay(ROUND_SECONDS);
    setStatus("idle", "Press Start round when ready.");
  }

  init();
})();
