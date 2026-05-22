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

  function getBuiltInFontStack(rawName) {
    var name = String(rawName || "").trim().toLowerCase();
    if (name === "serif" || name === "classic") {
      return 'Georgia, "Times New Roman", Times, serif';
    }
    if (name === "mono" || name === "code") {
      return 'ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace';
    }
    if (name === "rounded" || name === "soft") {
      return '"Arial Rounded MT Bold", "Trebuchet MS", Verdana, Arial, sans-serif';
    }
    if (name === "game" || name === "arcade") {
      return '"Trebuchet MS", Verdana, Arial, sans-serif';
    }
    if (name === "plain" || name === "arial") {
      return 'Arial, Helvetica, sans-serif';
    }
    return 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif';
  }

  function getBuiltInColorTheme(rawName) {
    var name = String(rawName || "").trim().toLowerCase();
    var themes = {
      blue: {
        accent: "#3f55ff",
        background: "linear-gradient(135deg, #4d45ff 0%, #1200a8 48%, #07838e 100%)",
        panel: "#1b1b2d",
        topbar: "rgba(0,0,120,.62)",
        form: "rgba(0,0,130,.7)",
        button: "rgba(0,0,145,.86)",
        link: "#91b8ff"
      },
      red: {
        accent: "#e23b3b",
        background: "linear-gradient(135deg, #ff4a4a 0%, #8f0615 48%, #2b070b 100%)",
        panel: "#211517",
        topbar: "rgba(105,0,14,.72)",
        form: "rgba(125,0,16,.78)",
        button: "linear-gradient(180deg, #f04444, #b81424)",
        link: "#ff9b9b"
      },
      purple: {
        accent: "#8b5cf6",
        background: "linear-gradient(135deg, #7c3cff 0%, #2b0c8f 48%, #080a38 100%)",
        panel: "#1c1930",
        topbar: "rgba(44,14,126,.72)",
        form: "rgba(48,16,139,.78)",
        button: "linear-gradient(180deg, #8b5cf6, #5b21b6)",
        link: "#c4b5fd"
      },
      green: {
        accent: "#22c55e",
        background: "linear-gradient(135deg, #22c55e 0%, #086b3a 48%, #052e24 100%)",
        panel: "#14231c",
        topbar: "rgba(4,91,50,.72)",
        form: "rgba(5,105,57,.78)",
        button: "linear-gradient(180deg, #22c55e, #15803d)",
        link: "#86efac"
      },
      dark: {
        accent: "#d83b3b",
        background: "linear-gradient(135deg, #1a1114 0%, #0b0d12 58%, #121827 100%)",
        panel: "#11151d",
        topbar: "rgba(12,15,22,.86)",
        form: "rgba(10,13,19,.88)",
        button: "linear-gradient(180deg, #d83b3b, #a51f2a)",
        link: "#ff9b9b"
      }
    };
    return themes[name] || themes.blue;
  }

  var embedKey = String(script.getAttribute("data-rok-embed-key") || "").trim();
  var apiBase = String(script.getAttribute("data-rok-api") || "").trim();
  var titleText = String(script.getAttribute("data-rok-title") || "ROK").trim() || "ROK";
  var welcomeText = String(script.getAttribute("data-rok-welcome") || "Ask ROK anything.").trim();
  var embedPrompt = String(
    script.getAttribute("data-rok-prompt")
    || script.getAttribute("data-rok-custom-prompt")
    || script.getAttribute("data-rok-system-prompt")
    || ""
  ).trim().slice(0, 1200);
  var colorTheme = getBuiltInColorTheme(script.getAttribute("data-rok-color") || script.getAttribute("data-rok-colour") || script.getAttribute("data-rok-theme") || "blue");
  var accent = String(script.getAttribute("data-rok-accent") || colorTheme.accent).trim();
  var fontStack = getBuiltInFontStack(script.getAttribute("data-rok-font") || "system");
  var titleFontStack = getBuiltInFontStack(script.getAttribute("data-rok-title-font") || script.getAttribute("data-rok-font") || "system");
  var mode = String(script.getAttribute("data-rok-mode") || script.getAttribute("data-rok-layout") || "widget").trim().toLowerCase();
  var pageMode = /^(?:page|full|fullscreen|app)$/.test(mode);
  var position = String(script.getAttribute("data-rok-position") || "bottom-right").trim().toLowerCase();
  var leftWidget = /left/.test(position);
  var placeholderText = String(script.getAttribute("data-rok-placeholder") || "Ask ROK...").trim() || "Ask ROK...";
  var askText = String(script.getAttribute("data-rok-button") || "Send").trim() || "Send";
  var footerText = String(script.getAttribute("data-rok-footer") || "").trim();
  var pageBackground = String(
    script.getAttribute("data-rok-background")
    || colorTheme.background
  ).trim();
  var panelBackground = String(script.getAttribute("data-rok-panel") || colorTheme.panel).trim();
  var topbarBackground = String(script.getAttribute("data-rok-topbar") || colorTheme.topbar).trim();
  var formBackground = String(script.getAttribute("data-rok-form") || colorTheme.form).trim();
  var buttonBackground = String(script.getAttribute("data-rok-button-color") || script.getAttribute("data-rok-send-color") || colorTheme.button).trim();
  var linkColor = String(script.getAttribute("data-rok-link-color") || colorTheme.link).trim();
  var botBubbleBackground = String(script.getAttribute("data-rok-bot-bubble") || "#171b24").trim();
  var botTextColor = String(script.getAttribute("data-rok-bot-text") || "#f3eeee").trim();
  var userBubbleBackground = String(script.getAttribute("data-rok-user-bubble") || accent).trim();
  var userTextColor = String(script.getAttribute("data-rok-user-text") || "#130808").trim();
  var inputBackground = String(script.getAttribute("data-rok-input") || "#080b10").trim();
  var inputTextColor = String(script.getAttribute("data-rok-input-text") || "#ffffff").trim();
  var widgetWidth = safeCssSize(script.getAttribute("data-rok-width"), "370px");
  var widgetHeight = safeCssSize(script.getAttribute("data-rok-height"), "560px");

  try {
    if (!apiBase && script.src) {
      apiBase = new URL(script.src, window.location.href).origin;
    }
  } catch (_) {
    apiBase = "";
  }
  apiBase = (apiBase || "https://rok.rokteam.org").replace(/\/+$/, "");
  var endpoint = apiBase + "/api/embed/chat";

  function safeCssSize(rawValue, fallback) {
    var value = String(rawValue || "").trim().toLowerCase();
    if (!value) return fallback;
    if (/^\d{2,4}$/.test(value)) return value + "px";
    if (/^\d{2,4}(?:px|rem|vw|vh|%)$/.test(value)) return value;
    return fallback;
  }

  var host = document.createElement("div");
  host.id = "rok-embed";
  host.setAttribute("data-rok-mode", pageMode ? "page" : "widget");
  if (pageMode) {
    document.documentElement.style.margin = "0";
    document.documentElement.style.width = "100%";
    document.documentElement.style.minWidth = "100%";
    document.documentElement.style.height = "100%";
    document.documentElement.style.minHeight = "100%";
    document.documentElement.style.overflow = "hidden";
    document.body.style.margin = "0";
    document.body.style.width = "100%";
    document.body.style.minWidth = "100%";
    document.body.style.height = "100vh";
    document.body.style.minHeight = "100vh";
    document.body.style.overflow = "hidden";
    document.body.style.background = pageBackground;
  }
  document.body.appendChild(host);
  var root = host.attachShadow ? host.attachShadow({ mode: "open" }) : host;

  var style = document.createElement("style");
  style.textContent = [
    ":host{all:initial;color-scheme:dark;font-family:" + fontStack + "}",
    ".wrap{position:fixed;" + (leftWidget ? "left:18px;right:auto;" : "right:18px;left:auto;") + "bottom:18px;z-index:2147483000}",
    ":host([data-rok-mode='page']){position:fixed;inset:0;width:100vw;height:100vh;display:block;overflow:hidden;background:" + pageBackground + ";z-index:2147483000}",
    ".wrap.is-page{position:fixed;inset:0;right:auto;bottom:auto;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;padding:50px 22px;background:" + pageBackground + ";overflow:hidden}",
    ".launcher{width:56px;height:56px;border:1px solid rgba(255,255,255,.16);border-radius:18px;background:#11151d;color:#fff;box-shadow:0 16px 48px rgba(0,0,0,.35);cursor:pointer;font:800 28px/1 " + fontStack + ";display:grid;place-items:center}",
    ".wrap.is-page .launcher{display:none}",
    ".launcher span{color:" + accent + ";transform:translateY(-1px)}",
    ".panel{position:absolute;" + (leftWidget ? "left:0;right:auto;" : "right:0;left:auto;") + "bottom:70px;width:min(" + widgetWidth + ",calc(100vw - 28px));height:min(" + widgetHeight + ",calc(100vh - 105px));border:1px solid rgba(255,255,255,.14);border-radius:14px;background:" + panelBackground + ";color:#f8eded;box-shadow:0 24px 70px rgba(0,0,0,.45);overflow:hidden;display:flex;flex-direction:column}",
    ".wrap.is-page .panel{position:relative;right:auto;bottom:auto;width:min(900px,calc(100vw - 44px));height:min(900px,calc(100vh - 96px));border-radius:10px;background:" + panelBackground + ";box-shadow:0 24px 70px rgba(0,0,0,.38);border-color:rgba(255,255,255,.18)}",
    ".panel[hidden]{display:none}",
    ".top{height:52px;display:flex;align-items:center;justify-content:space-between;padding:0 14px;border-bottom:1px solid rgba(255,255,255,.1);background:" + topbarBackground + "}",
    ".wrap.is-page .top{height:54px;justify-content:center;background:" + topbarBackground + ";border-bottom-color:rgba(255,255,255,.24)}",
    ".brand{display:flex;gap:10px;align-items:center;font:800 14px/1 " + titleFontStack + ";letter-spacing:0}",
    ".wrap.is-page .brand{font-size:23px;font-weight:600;letter-spacing:.04em;text-transform:uppercase}",
    ".dot{width:24px;height:24px;border-radius:9px;background:rgba(216,59,59,.16);color:" + accent + ";display:grid;place-items:center;font:900 18px/1 " + titleFontStack + "}",
    ".wrap.is-page .dot{display:none}",
    ".close{border:0;background:transparent;color:#bcaeae;font:700 22px/1 " + fontStack + ";cursor:pointer;padding:4px 8px}",
    ".wrap.is-page .close{display:none}",
    ".log{flex:1;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:10px;background:" + panelBackground + ";scrollbar-color:rgba(255,255,255,.24) transparent}",
    ".wrap.is-page .log{padding:18px 16px;gap:12px;background:" + panelBackground + "}",
    ".msg{max-width:88%;word-break:break-word;border-radius:12px;padding:10px 11px;font:500 14px/1.42 " + fontStack + "}",
    ".user{align-self:flex-end;background:" + userBubbleBackground + ";color:" + userTextColor + ";white-space:pre-wrap}",
    ".bot{align-self:flex-start;background:" + botBubbleBackground + ";color:" + botTextColor + ";border:1px solid rgba(255,255,255,.08);white-space:normal}",
    ".bot p{margin:0 0 8px}.bot p:last-child{margin-bottom:0}",
    ".bot h1,.bot h2,.bot h3{font-size:15px;line-height:1.25;margin:2px 0 8px;font-weight:850;color:#fff}",
    ".bot strong{font-weight:850;color:#fff}.bot em{font-style:italic}",
    ".bot code{font:600 12px/1.35 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;background:#0a0d13;border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:1px 4px;color:#ffd8d8}",
    ".bot pre{margin:8px 0;max-width:100%;overflow:auto;background:#080b10;border:1px solid rgba(255,255,255,.1);border-radius:9px;padding:10px;white-space:pre}",
    ".bot pre code{display:block;background:transparent;border:0;border-radius:0;padding:0;color:#f4eeee;white-space:pre}",
    ".bot ul,.bot ol{margin:6px 0 9px;padding-left:20px}.bot li{margin:3px 0}",
    ".bot blockquote{margin:7px 0;padding:6px 9px;border-left:3px solid " + accent + ";background:rgba(255,255,255,.04);border-radius:7px}",
    ".bot hr{border:0;height:1px;margin:13px 0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.24),transparent)}",
    ".bot a{color:" + linkColor + ";text-decoration:underline;text-underline-offset:2px}",
    ".status{align-self:flex-start;color:#ac9d9d;font:600 12px/1.3 system-ui;padding:0 2px}",
    ".form{display:flex;gap:8px;padding:12px;border-top:1px solid rgba(255,255,255,.1);background:" + formBackground + "}",
    ".wrap.is-page .form{gap:14px;padding:16px;border-top:1px solid rgba(255,255,255,.24);background:" + formBackground + "}",
    ".input{flex:1;min-width:0;border:1px solid rgba(255,255,255,.14);border-radius:11px;background:" + inputBackground + ";color:" + inputTextColor + ";padding:11px 12px;font:500 14px/1.2 " + fontStack + ";outline:none}",
    ".wrap.is-page .input{height:49px;border-radius:7px;background:#f4f8ff;color:#111827;font-size:17px;padding:0 14px;border-color:rgba(255,255,255,.42)}",
    ".input:focus{border-color:" + accent + ";box-shadow:0 0 0 3px rgba(216,59,59,.18)}",
    ".send{border:0;border-radius:11px;background:" + accent + ";color:#150707;padding:0 14px;font:800 13px/1 " + fontStack + ";cursor:pointer}",
    ".wrap.is-page .send{min-width:105px;height:49px;border-radius:7px;background:" + buttonBackground + ";color:#fff;font-size:18px;letter-spacing:.04em;text-transform:uppercase}",
    ".send:disabled,.input:disabled{opacity:.62;cursor:not-allowed}",
    ".footer{display:none}",
    ".wrap.is-page .footer{display:block;height:18px;padding:0 0 0 0;color:#fff;font:500 16px/18px " + fontStack + ";text-shadow:0 1px 2px rgba(0,0,0,.5)}",
    "@media (max-width:700px){.wrap.is-page{padding:0}.wrap.is-page .panel{width:100vw;height:100vh;border-radius:0;border-left:0;border-right:0}.wrap.is-page .top{height:52px}.wrap.is-page .brand{font-size:18px}.wrap.is-page .form{padding:12px;gap:8px}.wrap.is-page .send{min-width:76px;font-size:14px}.wrap.is-page .footer{display:none}}",
    ".small{font-size:12px;color:#ae9f9f}"
  ].join("");

  var wrap = document.createElement("div");
  wrap.className = pageMode ? "wrap is-page" : "wrap";
  wrap.innerHTML = [
    '<section class="panel"' + (pageMode ? "" : " hidden") + ' aria-label="' + escapeAttr(titleText) + ' chat">',
    '<div class="top"><div class="brand"><span class="dot">r</span><span>' + escapeHtml(titleText) + '</span></div><button class="close" type="button" aria-label="Close">x</button></div>',
    '<div class="log" role="log" aria-live="polite"></div>',
    '<form class="form">',
    '<input class="input" type="text" maxlength="2000" autocomplete="off" placeholder="' + escapeAttr(placeholderText) + '" />',
    '<button class="send" type="submit">' + escapeHtml(askText) + '</button>',
    "</form>",
    footerText ? '<div class="footer">' + escapeHtml(footerText) + "</div>" : "",
    "</section>",
    pageMode ? "" : '<button class="launcher" type="button" aria-label="Open ROK"><span>r</span></button>'
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

  function sanitizeLinkUrl(rawUrl) {
    var value = String(rawUrl || "").trim();
    try {
      var parsed = new URL(value, window.location.href);
      if (parsed.protocol === "http:" || parsed.protocol === "https:") {
        return parsed.href;
      }
    } catch (_) {
      return "";
    }
    return "";
  }

  function renderInlineMarkdown(rawText) {
    var placeholders = [];
    var text = String(rawText || "").replace(/`([^`\n]+)`/g, function (_, code) {
      var index = placeholders.length;
      placeholders.push("<code>" + escapeHtml(code) + "</code>");
      return "@@ROK_INLINE_CODE_" + index + "@@";
    });

    var html = escapeHtml(text);
    html = html.replace(/\[([^\]\n]{1,160})\]\((https?:\/\/[^)\s]{1,600})\)/g, function (_, label, rawUrl) {
      var href = sanitizeLinkUrl(rawUrl.replace(/&amp;/g, "&"));
      if (!href) return label;
      return '<a href="' + escapeAttr(href) + '" target="_blank" rel="noopener noreferrer">' + label + "</a>";
    });
    html = html.replace(/\*\*([^*\n][\s\S]*?[^*\n])\*\*/g, "<strong>$1</strong>");
    html = html.replace(/__([^_\n][\s\S]*?[^_\n])__/g, "<strong>$1</strong>");
    html = html.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
    html = html.replace(/(^|[^_])_([^_\n]+)_/g, "$1<em>$2</em>");
    placeholders.forEach(function (value, index) {
      html = html.replace(new RegExp("@@ROK_INLINE_CODE_" + index + "@@", "g"), value);
    });
    return html;
  }

  function isMarkdownHorizontalRuleLine(line) {
    return /^\s{0,3}(?:-{3,}|\*{3,}|_{3,})\s*$/.test(String(line || ""));
  }

  function renderMarkdown(rawText) {
    var lines = String(rawText || "").replace(/\r\n?/g, "\n").split("\n");
    var html = [];
    var paragraph = [];
    var listItems = [];
    var listType = "ul";
    var inCode = false;
    var codeLines = [];

    function flushParagraph() {
      if (!paragraph.length) return;
      html.push("<p>" + renderInlineMarkdown(paragraph.join(" ")) + "</p>");
      paragraph = [];
    }

    function flushList() {
      if (!listItems.length) return;
      html.push("<" + listType + ">" + listItems.join("") + "</" + listType + ">");
      listItems = [];
      listType = "ul";
    }

    function flushCode() {
      html.push("<pre><code>" + escapeHtml(codeLines.join("\n")) + "</code></pre>");
      codeLines = [];
    }

    lines.forEach(function (line) {
      var fenceMatch = line.match(/^\s*```/);
      if (fenceMatch) {
        flushParagraph();
        flushList();
        if (inCode) {
          flushCode();
          inCode = false;
        } else {
          inCode = true;
          codeLines = [];
        }
        return;
      }

      if (inCode) {
        codeLines.push(line);
        return;
      }

      if (!line.trim()) {
        flushParagraph();
        flushList();
        return;
      }

      if (isMarkdownHorizontalRuleLine(line)) {
        flushParagraph();
        flushList();
        html.push("<hr>");
        return;
      }

      var heading = line.match(/^\s{0,3}(#{1,3})\s+(.+)$/);
      if (heading) {
        flushParagraph();
        flushList();
        var level = Math.min(3, heading[1].length);
        html.push("<h" + level + ">" + renderInlineMarkdown(heading[2]) + "</h" + level + ">");
        return;
      }

      var unordered = line.match(/^\s{0,3}[-*]\s+(.+)$/);
      var ordered = line.match(/^\s{0,3}\d+\.\s+(.+)$/);
      if (unordered || ordered) {
        flushParagraph();
        var nextType = ordered ? "ol" : "ul";
        if (listItems.length && listType !== nextType) {
          flushList();
        }
        listType = nextType;
        listItems.push("<li>" + renderInlineMarkdown((unordered || ordered)[1]) + "</li>");
        return;
      }

      var quote = line.match(/^\s{0,3}>\s?(.+)$/);
      if (quote) {
        flushParagraph();
        flushList();
        html.push("<blockquote>" + renderInlineMarkdown(quote[1]) + "</blockquote>");
        return;
      }

      paragraph.push(line.trim());
    });

    if (inCode) {
      flushCode();
    }
    flushParagraph();
    flushList();
    return html.join("") || escapeHtml(String(rawText || ""));
  }

  function renderBotMarkdownInto(node, rawText) {
    node._rokRawText = String(rawText || "");
    node.innerHTML = renderMarkdown(node._rokRawText);
  }

  function openPanel() {
    panel.hidden = false;
    if (launcher) launcher.hidden = true;
    setTimeout(function () { input.focus(); }, 0);
    if (!log.childElementCount && welcomeText) {
      appendMessage("bot", welcomeText);
    }
    if (!embedKey) {
      appendStatus("Missing ROK embed key.");
    }
  }

  function closePanel() {
    if (pageMode) return;
    panel.hidden = true;
    if (launcher) launcher.hidden = false;
  }

  function setBusy(nextBusy) {
    busy = Boolean(nextBusy);
    input.disabled = busy;
    sendBtn.disabled = busy;
    sendBtn.textContent = busy ? "..." : askText;
  }

  function scrollLog() {
    log.scrollTop = log.scrollHeight;
  }

  function appendMessage(role, text) {
    var node = document.createElement("div");
    node.className = "msg " + (role === "user" ? "user" : "bot");
    node._rokRawText = String(text || "");
    if (role === "user") {
      node.textContent = node._rokRawText;
    } else {
      renderBotMarkdownInto(node, node._rokRawText);
    }
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
    var nextText = String(node._rokRawText || "") + String(text || "");
    if (node.classList && node.classList.contains("bot")) {
      renderBotMarkdownInto(node, nextText);
    } else {
      node._rokRawText = nextText;
      node.textContent = nextText;
    }
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
          site_url: window.location.href || "",
          embed_prompt: embedPrompt
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
        renderBotMarkdownInto(answerNode, "ROK did not return a reply.");
      }
      history.push({ role: "user", content: message });
      history.push({ role: "assistant", content: collected || answerNode._rokRawText || "" });
      history = history.slice(-8);
    } catch (error) {
      renderBotMarkdownInto(answerNode, error && error.message ? error.message : "ROK embed failed.");
    } finally {
      setBusy(false);
      input.focus();
    }
  }

  if (launcher) {
    launcher.addEventListener("click", openPanel);
  }
  closeBtn.addEventListener("click", closePanel);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    sendMessage(input.value);
  });
  if (pageMode) {
    openPanel();
  }

  window.ROKEmbed = {
    loaded: true,
    open: openPanel,
    close: closePanel,
    send: sendMessage
  };
}());
