(function () {
  "use strict";

  if (window.ROKEmbed && window.ROKEmbed.loaded) return;

  var script = document.currentScript;
  if (!script) {
    var scripts = document.getElementsByTagName("script");
    for (var i = scripts.length - 1; i >= 0; i -= 1) {
      if (String(scripts[i].src || "").indexOf("embed.js") !== -1) {
        script = scripts[i];
        break;
      }
    }
  }
  if (!script) return;

  var embedKey = String(script.getAttribute("data-rok-embed-key") || "").trim();
  var apiBase = String(script.getAttribute("data-rok-api") || "").trim();
  var titleText = String(script.getAttribute("data-rok-title") || "ROK").trim() || "ROK";
  var welcomeText = String(script.getAttribute("data-rok-welcome") || "Ask ROK anything.").trim();
  var accent = String(script.getAttribute("data-rok-accent") || "#d83b3b").trim();

  try {
    if (!apiBase && script.src) {
      apiBase = new URL(script.src, window.location.href).origin;
    }
  } catch (_) {
    apiBase = "";
  }
  apiBase = (apiBase || "https://rokteam.org").replace(/\/+$/, "");
  var endpoint = apiBase + "/api/embed/chat";

  var host = document.createElement("div");
  host.id = "rok-embed";
  document.body.appendChild(host);
  var root = host.attachShadow ? host.attachShadow({ mode: "open" }) : host;

  var style = document.createElement("style");
  style.textContent = [
    ":host{all:initial;color-scheme:dark;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}",
    ".wrap{position:fixed;right:18px;bottom:18px;z-index:2147483000}",
    ".launcher{width:56px;height:56px;border:1px solid rgba(255,255,255,.16);border-radius:18px;background:#11151d;color:#fff;box-shadow:0 16px 48px rgba(0,0,0,.35);cursor:pointer;font:800 28px/1 system-ui;display:grid;place-items:center}",
    ".launcher span{color:" + accent + ";transform:translateY(-1px)}",
    ".panel{position:absolute;right:0;bottom:70px;width:min(370px,calc(100vw - 28px));height:min(560px,calc(100vh - 105px));border:1px solid rgba(255,255,255,.14);border-radius:14px;background:#0d1017;color:#f8eded;box-shadow:0 24px 70px rgba(0,0,0,.45);overflow:hidden;display:flex;flex-direction:column}",
    ".panel[hidden]{display:none}",
    ".top{height:52px;display:flex;align-items:center;justify-content:space-between;padding:0 14px;border-bottom:1px solid rgba(255,255,255,.1);background:#11151d}",
    ".brand{display:flex;gap:10px;align-items:center;font:800 14px/1 system-ui;letter-spacing:0}",
    ".dot{width:24px;height:24px;border-radius:9px;background:rgba(216,59,59,.16);color:" + accent + ";display:grid;place-items:center;font:900 18px/1 system-ui}",
    ".close{border:0;background:transparent;color:#bcaeae;font:700 22px/1 system-ui;cursor:pointer;padding:4px 8px}",
    ".log{flex:1;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:10px;scrollbar-color:rgba(255,255,255,.24) transparent}",
    ".msg{max-width:88%;white-space:pre-wrap;word-break:break-word;border-radius:12px;padding:10px 11px;font:500 14px/1.42 system-ui}",
    ".user{align-self:flex-end;background:" + accent + ";color:#130808}",
    ".bot{align-self:flex-start;background:#171b24;color:#f3eeee;border:1px solid rgba(255,255,255,.08)}",
    ".status{align-self:flex-start;color:#ac9d9d;font:600 12px/1.3 system-ui;padding:0 2px}",
    ".form{display:flex;gap:8px;padding:12px;border-top:1px solid rgba(255,255,255,.1);background:#10141b}",
    ".input{flex:1;min-width:0;border:1px solid rgba(255,255,255,.14);border-radius:11px;background:#080b10;color:#fff;padding:11px 12px;font:500 14px/1.2 system-ui;outline:none}",
    ".input:focus{border-color:" + accent + ";box-shadow:0 0 0 3px rgba(216,59,59,.18)}",
    ".send{border:0;border-radius:11px;background:" + accent + ";color:#150707;padding:0 14px;font:800 13px/1 system-ui;cursor:pointer}",
    ".send:disabled,.input:disabled{opacity:.62;cursor:not-allowed}",
    ".small{font-size:12px;color:#ae9f9f}"
  ].join("");

  var wrap = document.createElement("div");
  wrap.className = "wrap";
  wrap.innerHTML = [
    '<section class="panel" hidden aria-label="' + escapeAttr(titleText) + ' chat">',
    '<div class="top"><div class="brand"><span class="dot">r</span><span>' + escapeHtml(titleText) + '</span></div><button class="close" type="button" aria-label="Close">x</button></div>',
    '<div class="log" role="log" aria-live="polite"></div>',
    '<form class="form">',
    '<input class="input" type="text" maxlength="2000" autocomplete="off" placeholder="Ask ROK..." />',
    '<button class="send" type="submit">Send</button>',
    "</form>",
    "</section>",
    '<button class="launcher" type="button" aria-label="Open ROK"><span>r</span></button>'
  ].join("");
  root.appendChild(style);
  root.appendChild(wrap);

  var panel = wrap.querySelector(".panel");
  var launcher = wrap.querySelector(".launcher");
  var closeBtn = wrap.querySelector(".close");
  var log = wrap.querySelector(".log");
  var form = wrap.querySelector(".form");
  var input = wrap.querySelector(".input");
  var sendBtn = wrap.querySelector(".send");
  var history = [];
  var busy = false;

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, "&#96;");
  }

  function openPanel() {
    panel.hidden = false;
    launcher.hidden = true;
    setTimeout(function () { input.focus(); }, 0);
    if (!log.childElementCount && welcomeText) {
      appendMessage("bot", welcomeText);
    }
    if (!embedKey) {
      appendStatus("Missing ROK embed key.");
    }
  }

  function closePanel() {
    panel.hidden = true;
    launcher.hidden = false;
  }

  function setBusy(nextBusy) {
    busy = Boolean(nextBusy);
    input.disabled = busy;
    sendBtn.disabled = busy;
    sendBtn.textContent = busy ? "..." : "Send";
  }

  function scrollLog() {
    log.scrollTop = log.scrollHeight;
  }

  function appendMessage(role, text) {
    var node = document.createElement("div");
    node.className = "msg " + (role === "user" ? "user" : "bot");
    node.textContent = String(text || "");
    log.appendChild(node);
    scrollLog();
    return node;
  }

  function appendStatus(text) {
    var node = document.createElement("div");
    node.className = "status";
    node.textContent = String(text || "");
    log.appendChild(node);
    scrollLog();
    return node;
  }

  function appendToMessage(node, text) {
    node.textContent += String(text || "");
    scrollLog();
  }

  function payloadTextFromEvent(dataText) {
    if (!dataText || dataText === "[DONE]") return "";
    try {
      var payload = JSON.parse(dataText);
      if (typeof payload.token === "string") return payload.token;
      if (typeof payload.reply === "string") return payload.reply;
      if (typeof payload.response === "string") return payload.response;
      if (typeof payload.message === "string") return payload.message;
      if (typeof payload.status === "string") return "";
      return "";
    } catch (_) {
      return dataText;
    }
  }

  async function readSse(response, onText) {
    if (!response.body || !response.body.getReader) {
      var fallbackText = await response.text();
      onText(fallbackText);
      return;
    }
    var reader = response.body.getReader();
    var decoder = new TextDecoder();
    var buffer = "";
    while (true) {
      var chunk = await reader.read();
      if (chunk.done) break;
      buffer += decoder.decode(chunk.value, { stream: true });
      var events = buffer.split("\n\n");
      buffer = events.pop() || "";
      events.forEach(function (eventBlock) {
        var dataLines = eventBlock.split(/\r?\n/)
          .filter(function (line) { return line.indexOf("data:") === 0; })
          .map(function (line) { return line.slice(5).trim(); });
        var dataText = dataLines.join("\n").trim();
        var piece = payloadTextFromEvent(dataText);
        if (piece) onText(piece);
      });
    }
  }

  async function sendMessage(rawText) {
    var message = String(rawText || "").trim();
    if (!message || busy) return;
    if (!embedKey) {
      appendStatus("ROK embed key is missing.");
      return;
    }

    appendMessage("user", message);
    input.value = "";
    var answerNode = appendMessage("bot", "");
    setBusy(true);

    try {
      var response = await fetch(endpoint, {
        method: "POST",
        mode: "cors",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json",
          "X-ROK-Embed-Key": embedKey
        },
        body: JSON.stringify({
          message: message,
          history: history.slice(-6),
          site_title: document.title || "",
          site_url: window.location.href || ""
        })
      });

      if (!response.ok) {
        var errorText = "ROK embed failed.";
        try {
          var errorPayload = await response.json();
          errorText = errorPayload.error || errorText;
        } catch (_) {
          errorText = await response.text() || errorText;
        }
        throw new Error(errorText);
      }

      var collected = "";
      await readSse(response, function (piece) {
        collected += piece;
        appendToMessage(answerNode, piece);
      });
      if (!collected.trim()) {
        answerNode.textContent = "ROK did not return a reply.";
      }
      history.push({ role: "user", content: message });
      history.push({ role: "assistant", content: collected || answerNode.textContent || "" });
      history = history.slice(-8);
    } catch (error) {
      answerNode.textContent = error && error.message ? error.message : "ROK embed failed.";
    } finally {
      setBusy(false);
      input.focus();
    }
  }

  launcher.addEventListener("click", openPanel);
  closeBtn.addEventListener("click", closePanel);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    sendMessage(input.value);
  });

  window.ROKEmbed = {
    loaded: true,
    open: openPanel,
    close: closePanel,
    send: sendMessage
  };
}());
