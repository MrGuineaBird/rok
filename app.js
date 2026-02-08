const chat = document.getElementById("chat");
const input = document.getElementById("input");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");
const newChatBtn = document.getElementById("newChatBtn");

const API_URL = "http://localhost:3000/chat";
const TYPING_SPEED_MS = 12;

const hasMarked = typeof marked !== "undefined";
if (hasMarked) {
  marked.setOptions({ breaks: true, gfm: true });
}

function scrollToBottom() {
  chat.scrollTop = chat.scrollHeight;
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
  avatar.textContent = role === "user" ? "You" : "S";

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

function clearChat(showNotice) {
  chat.innerHTML = "";
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

  addMessage("user", text);
  input.value = "";
  input.focus();

  sendBtn.disabled = true;
  const typing = addMessage("system", "SCHOOLGPT is thinking...");

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });

    const data = await res.json();
    typing.row.remove();

    if (!res.ok) {
      throw new Error(data.reply || "Request failed.");
    }

    const reply = data.reply || "(No response)";
    const botMsg = addMessage("bot", "");
    await typeIn(botMsg.bubble, reply);
  } catch (err) {
    if (typing.row.isConnected) {
      typing.row.remove();
    }
    addMessage("system", "Error: " + err.message);
  } finally {
    sendBtn.disabled = false;
  }
}

sendBtn.addEventListener("click", send);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
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

addMessage("system", "SCHOOLGPT is ready. Ask me anything.");
