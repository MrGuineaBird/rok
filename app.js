const chat = document.getElementById("chat");
const input = document.getElementById("input");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");
const newChatBtn = document.getElementById("newChatBtn");
const cooldownEl = document.getElementById("cooldown");

const API_URL = "https://chalky-organoleptic-hope.ngrok-free.dev/chat";
const TYPING_SPEED_MS = 12;
const COOLDOWN_MS = 15000;
const HISTORY_LIMIT = 10;

const history = [];
let isSending = false;
let nextAllowedAt = 0;
let cooldownTimer = null;

const hasMarked = typeof marked !== "undefined";
if (hasMarked) {
  marked.setOptions({ breaks: true, gfm: true });
}

function scrollToBottom() {
  chat.scrollTop = chat.scrollHeight;
}

function autoResizeInput() {
  if (!input) return;
  input.style.height = "auto";
  const next = Math.min(input.scrollHeight, 180);
  input.style.height = next + "px";
}

function setBubbleContent(bubble, text, markdown) {
  if (markdown && hasMarked) {
    bubble.classList.remove("plain");
    bubble.classList.add("markdown");
    bubble.innerHTML = marked.parse(text);
  } else {
    bubble.classList.remove("markdown");
    bubble.classList.add("plain");
    bubble.textContent = text;
  }
}

function addMessage(role, text, options = {}) {
  const { markdown = false } = options;

  const row = document.createElement("div");
  row.className = "msg " + role;

  const bubble = document.createElement("div");
  bubble.className = "bubble plain";

  if (role === "system") {
    bubble.textContent = text;
    row.appendChild(bubble);
    chat.appendChild(row);
    scrollToBottom();
    return { row, bubble };
  }

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = role === "user" ? "Y" : "R";

  setBubbleContent(bubble, text, markdown);

  if (role === "user") {
    row.appendChild(bubble);
    row.appendChild(avatar);
  } else {
    row.appendChild(avatar);
    row.appendChild(bubble);
  }

  chat.appendChild(row);
  scrollToBottom();
  return { row, bubble };
}

function updateCooldownUI() {
  if (!cooldownEl) return false;
  const remaining = Math.max(0, nextAllowedAt - Date.now());
  if (remaining <= 0) {
    cooldownEl.textContent = "";
    return false;
  }
  const seconds = Math.ceil(remaining / 1000);
  cooldownEl.textContent = `Wait ${seconds}s before sending again.`;
  return true;
}

function refreshSendState() {
  const cooldownActive = Date.now() < nextAllowedAt;
  sendBtn.disabled = isSending || cooldownActive;
  if (cooldownActive) {
    updateCooldownUI();
  } else if (cooldownEl) {
    cooldownEl.textContent = "";
  }
}

function startCooldownTimer() {
  if (cooldownTimer) {
    clearInterval(cooldownTimer);
  }
  updateCooldownUI();
  cooldownTimer = setInterval(() => {
    if (!updateCooldownUI()) {
      clearInterval(cooldownTimer);
      cooldownTimer = null;
    }
  }, 500);
}

function clearChat(showNotice) {
  chat.innerHTML = "";
  history.length = 0;
  nextAllowedAt = 0;
  if (cooldownTimer) {
    clearInterval(cooldownTimer);
    cooldownTimer = null;
  }
  if (cooldownEl) {
    cooldownEl.textContent = "";
  }
  refreshSendState();
  if (showNotice) {
    addMessage("system", "New chat started.");
  }
}

function typeIn(bubble, fullText) {
  bubble.classList.remove("markdown");
  bubble.classList.add("plain");
  bubble.textContent = "";

  const length = fullText.length;
  const chunk = length > 1200 ? 6 : length > 400 ? 3 : 1;

  return new Promise((resolve) => {
    let i = 0;
    const step = () => {
      if (i >= length) {
        setBubbleContent(bubble, fullText, true);
        scrollToBottom();
        resolve();
        return;
      }
      bubble.textContent = fullText.slice(0, i);
      i += chunk;
      scrollToBottom();
      setTimeout(step, TYPING_SPEED_MS);
    };
    step();
  });
}

async function send() {
  const text = input.value.trim();
  if (!text) return;
  if (isSending) return;

  if (Date.now() < nextAllowedAt) {
    startCooldownTimer();
    refreshSendState();
    return;
  }

  const recentHistory = history.slice(-HISTORY_LIMIT);

  addMessage("user", text);
  history.push({ role: "user", content: text });
  if (history.length > 200) {
    history.splice(0, history.length - 200);
  }

  input.value = "";
  autoResizeInput();
  input.focus();

  isSending = true;
  nextAllowedAt = Date.now() + COOLDOWN_MS;
  startCooldownTimer();
  refreshSendState();

  const typing = addMessage("system", "ROK is thinking...");

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text, history: recentHistory })
    });

    if (!res.ok) {
      let errorMessage = "Request failed.";
      try {
        const data = await res.json();
        errorMessage = data.reply || data.error || errorMessage;
      } catch {
        const textBody = await res.text();
        if (textBody) errorMessage = textBody;
      }
      throw new Error(errorMessage);
    }

    typing.row.remove();

    const botMsg = addMessage("bot", "");
    const bubble = botMsg.bubble;
    bubble.classList.remove("markdown");
    bubble.classList.add("plain");
    bubble.textContent = "";

    let fullText = "";
    const reader = res.body && res.body.getReader ? res.body.getReader() : null;

    if (!reader) {
      const reply = (await res.text()) || "(No response)";
      await typeIn(bubble, reply);
      history.push({ role: "assistant", content: reply });
      return;
    }

    const decoder = new TextDecoder("utf-8");
    let lastFlush = 0;
    const flush = () => {
      bubble.textContent = fullText;
      scrollToBottom();
    };

    const contentType = res.headers.get("content-type") || "";
    const isEventStream = contentType.includes("text/event-stream");
    let buffer = "";
    let streamEnded = false;

    const handleToken = (token) => {
      fullText += token;
      const now = performance.now();
      if (now - lastFlush > 40) {
        flush();
        lastFlush = now;
      }
    };

    const processBuffer = () => {
      let idx;
      while ((idx = buffer.indexOf("\n")) >= 0) {
        let line = buffer.slice(0, idx);
        buffer = buffer.slice(idx + 1);
        if (line.endsWith("\r")) {
          line = line.slice(0, -1);
        }
        if (!line || line.startsWith(":")) {
          continue;
        }
        if (line.startsWith("data:")) {
          const data = line.slice(5);
          if (data === "[DONE]") {
            streamEnded = true;
            return;
          }
          if (!data) {
            continue;
          }
          let token = data;
          if (data[0] === "{") {
            try {
              const parsed = JSON.parse(data);
              if (parsed && typeof parsed.token === "string") {
                token = parsed.token;
              }
            } catch {
              // Fallback to raw data if JSON parsing fails.
            }
          }
          if (token) {
            handleToken(token);
          }
        }
      }
    };

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      if (!chunk) continue;
      if (isEventStream) {
        buffer += chunk;
        processBuffer();
        if (streamEnded) break;
      } else {
        handleToken(chunk);
      }
    }

    const tail = decoder.decode();
    if (tail) {
      if (isEventStream) {
        buffer += tail;
        processBuffer();
      } else {
        fullText += tail;
      }
    }
    if (!fullText) {
      fullText = "(No response)";
    }
    flush();
    setBubbleContent(bubble, fullText, true);
    history.push({ role: "assistant", content: fullText });
    if (history.length > 200) {
      history.splice(0, history.length - 200);
    }
  } catch (err) {
    if (typing.row.isConnected) {
      typing.row.remove();
    }
    addMessage("system", "Error: " + err.message);
  } finally {
    isSending = false;
    refreshSendState();
  }
}

sendBtn.addEventListener("click", send);
input.addEventListener("input", autoResizeInput);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
    e.preventDefault();
    send();
  }
});

if (clearBtn) {
  clearBtn.addEventListener("click", () => clearChat(true));
}

if (newChatBtn) {
  newChatBtn.addEventListener("click", () => clearChat(true));
}

addMessage("system", "ROK is ready. Ask me anything.");
autoResizeInput();
refreshSendState();

