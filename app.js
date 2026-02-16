const chat = document.getElementById("chat");
const workspaceTabs = document.getElementById("workspaceTabs");
const workspacePanel = document.getElementById("workspacePanel");
const modelPanel = document.getElementById("modelPanel");
const workspacePanelTitle = document.getElementById("workspacePanelTitle");
const workspaceEditor = document.getElementById("workspaceEditor");
const workspaceDocWordCount = document.getElementById("workspaceDocWordCount");
const workspaceDocReadTime = document.getElementById("workspaceDocReadTime");
const workspaceDocSaveState = document.getElementById("workspaceDocSaveState");
const workspaceCopyBtn = document.getElementById("workspaceCopyBtn");
const workspaceDownloadBtn = document.getElementById("workspaceDownloadBtn");
const workspaceImproveBtn = document.getElementById("workspaceImproveBtn");
const modelPanelCurrent = document.getElementById("modelPanelCurrent");
const modelOptionList = document.getElementById("modelOptionList");
const workspaceAssistantPanel = document.getElementById("workspaceAssistantPanel");
const workspaceAssistantToggle = document.getElementById("workspaceAssistantToggle");
const workspaceAssistantBody = document.getElementById("workspaceAssistantBody");
const workspaceAssistantChevron = document.getElementById("workspaceAssistantChevron");
const workspaceAssistantStatusDot = document.getElementById("workspaceAssistantStatusDot");
const workspaceAssistantStatusText = document.getElementById("workspaceAssistantStatusText");
const workspaceAssistantSuggestBtn = document.getElementById("workspaceAssistantSuggestBtn");
const workspaceAssistantIntent = document.getElementById("workspaceAssistantIntent");
const workspaceAssistantOutput = document.getElementById("workspaceAssistantOutput");
const workspaceAssistantWordCount = document.getElementById("workspaceAssistantWordCount");
const workspaceAssistantReadTime = document.getElementById("workspaceAssistantReadTime");
const workspaceAssistantAction = document.getElementById("workspaceAssistantAction");
const workspaceAssistantChangeScope = document.getElementById("workspaceAssistantChangeScope");
const workspaceAssistantLastAction = document.getElementById("workspaceAssistantLastAction");
const workspaceAssistantSummary = document.getElementById("workspaceAssistantSummary");
const workspaceAssistantSuggestions = document.getElementById("workspaceAssistantSuggestions");
const workspaceAssistantClarityList = document.getElementById("workspaceAssistantClarityList");
const workspaceAssistantGrammarList = document.getElementById("workspaceAssistantGrammarList");
const workspaceAssistantStyleList = document.getElementById("workspaceAssistantStyleList");
const mainPanel = document.querySelector(".main");
const input = document.getElementById("input");
const sendBtn = document.getElementById("sendBtn");
const attachBtn = document.getElementById("attachBtn");
const fileInput = document.getElementById("fileInput");
const attachmentList = document.getElementById("attachmentList");
const brandHomeBtn = document.getElementById("brandHomeBtn");
const homeScreen = document.getElementById("homeScreen");
const homeStartBtn = document.getElementById("homeStartBtn");
const clearBtn = document.getElementById("clearBtn");
const modelSelect = document.getElementById("modelSelect");
const newChatBtn = document.getElementById("newChatBtn");
const currentSessionBtn = document.getElementById("currentSessionBtn");
const savedChatsList = document.getElementById("savedChatsList");
const cooldownEl = document.getElementById("cooldown");
const appRoot = document.querySelector(".app");
const serverDownScreen = document.getElementById("serverDownScreen");
const serverDownMessage = document.getElementById("serverDownMessage");
const serverDownMeta = document.getElementById("serverDownMeta");
const serverDownRetryBtn = document.getElementById("serverDownRetryBtn");
const serverDownHomeBtn = document.getElementById("serverDownHomeBtn");
const serverDownWhyBtn = document.getElementById("serverDownWhyBtn");
const serverDownWhyPanel = document.getElementById("serverDownWhyPanel");
const workspaceApplyModal = document.getElementById("workspaceApplyModal");
const workspaceApplyModalIntro = document.getElementById("workspaceApplyModalIntro");
const workspaceApplyModalPreview = document.getElementById("workspaceApplyModalPreview");
const workspaceApplyConfirmBtn = document.getElementById("workspaceApplyConfirmBtn");
const workspaceApplyCancelBtn = document.getElementById("workspaceApplyCancelBtn");
const workspaceApplyCloseBtn = document.getElementById("workspaceApplyCloseBtn");
const composerWrap = document.querySelector(".composer-wrap");
const sidebar = document.querySelector(".sidebar");
const homeDemoChat = document.querySelector(".home-bg-chat");
const homeDemoPrompt = document.getElementById("homeDemoPrompt");
const homeDemoReply = document.getElementById("homeDemoReply");
const homeDemoCards = document.getElementById("homeDemoCards");

const runtimeConfig = (typeof window !== "undefined" && window.ROK_CONFIG) ? window.ROK_CONFIG : {};
const DEFAULT_API_BASE_URL = "https://unevaded-gorbelly-herman.ngrok-free.dev";
const API_BASE_URL = String(runtimeConfig.apiBaseUrl || DEFAULT_API_BASE_URL).trim().replace(/\/+$/, "");
const API_URL = `${API_BASE_URL}/api/chat`;
const HEALTH_URL = `${API_BASE_URL}/api/health`;
const MODELS_URL = `${API_BASE_URL}/api/models`;
const NGROK_SKIP_WARNING_HEADER = { "ngrok-skip-browser-warning": "true" };
const TYPING_SPEED_MS = 12;
const COOLDOWN_MS = 1000;
const HISTORY_LIMIT = 10;
const MAX_ATTACHMENTS = 5;
const MAX_FILE_SIZE_BYTES = 200 * 1024 * 1024; // 209715200
const MAX_FILE_CHARS = 12000;
const LOCAL_SESSIONS_KEY = "rok.localChatSessions.v1";
const LOCAL_CURRENT_SESSION_KEY = "rok.currentSessionId.v1";
const MAX_LOCAL_SESSIONS = 30;
const DEFAULT_CHAT_MODEL = "mistral:latest";
const SUPPORTED_MODEL_IDS = new Set(["qwen2.5:latest", "mistral:latest"]);
const DEFAULT_MODEL_OPTIONS = [
  { id: "qwen2.5:latest", label: "ROK Fast (Qwen 2.5)" },
  { id: "mistral:latest", label: "ROK Balanced (Mistral)" }
];
const KNOWN_MODEL_LABELS = {
  "qwen2.5:latest": "ROK Fast (Qwen 2.5)",
  "mistral:latest": "ROK Balanced (Mistral)"
};
const MODEL_DESCRIPTIONS = {
  "qwen2.5:latest": "Fast responses with strong everyday writing and coding performance.",
  "mistral:latest": "Balanced quality for cleaner long-form drafting and refinement."
};
const WORKSPACE_TAB_KEYS = ["chat", "workspace", "model"];
const WORKSPACE_APPLY_PREVIEW_CHARS = 320;
const WORKSPACE_CHAT_LEADIN_PATTERN =
  /^(?:sure|certainly|absolutely|of course|okay|ok|alright|yep|yes|no problem|got it|sounds good)\b[\s,!.:\-]*/i;
const WORKSPACE_CHAT_OUTRO_PATTERN =
  /^(?:let me know|if you(?:'d| would) like|hope this helps|happy to help|i can (?:also|adjust|revise|refine))\b/i;
const WORKSPACE_GENERATION_PHASES = {
  reviewing: "Reviewing workspace...",
  drafting: "Drafting content...",
  preparing: "Preparing final output..."
};
const WORKSPACE_TONE_PRIORITY = {
  idle: 0,
  applied: 1,
  pending: 2,
  generating: 3
};
const HOME_DEMO_LOOP_MS = 12000;
const STORY_MIN_CANVAS_CHARS = 260;
const STORY_PROMPT_PATTERN =
  /\b(story|chapter|novel|fiction|tale|scene|script|dialogue|fanfic|roleplay|bedtime|fairy\s*tale|poem|lyrics)\b/i;
const LONGFORM_PROMPT_PATTERN =
  /\b(story|chapter|novel|fiction|narrative|screenplay|essay|report|article|blog|memo|proposal|speech|letter|outline|study guide|notes?|summary|summarize|script|draft|rewrite|revise|continue)\b/i;
const CODE_PROMPT_PATTERN =
  /\b(code|debug|bug|stack trace|exception|compile|function|class|algorithm|javascript|typescript|python|java|c\+\+|c#|go|rust|html|css|sql|json|yaml|api|endpoint|regex|refactor|optimize)\b|```/i;
const HOME_DEMO_SCENARIOS = [
  {
    prompt: "Help me study for tomorrow's history quiz and make 5 flashcards.",
    reply: "Absolutely. Here is a quick summary and five flashcards with questions and answers.",
    cards: [
      "What event started WWI?",
      "Which alliances shaped the war?",
      "Define trench warfare.",
      "Why did the U.S. join?",
      "Main outcomes of the Treaty?"
    ]
  },
  {
    prompt: "I have a biology test. Make me 5 flashcards about photosynthesis.",
    reply: "Great idea. I made five quick flashcards you can review in under three minutes.",
    cards: [
      "Where does photosynthesis happen?",
      "What are the reactants?",
      "What are the products?",
      "What is the role of chlorophyll?",
      "Why is sunlight required?"
    ]
  },
  {
    prompt: "Turn this algebra topic into 5 practice flashcards.",
    reply: "Done. Here are focused flashcards for formulas, solving steps, and common mistakes.",
    cards: [
      "What is slope-intercept form?",
      "How do you isolate a variable?",
      "What is distributive property?",
      "How do you check your solution?",
      "When do you flip inequality signs?"
    ]
  },
  {
    prompt: "I need civics review. Give me 5 flashcards on the U.S. Constitution.",
    reply: "Perfect. I generated five cards covering structure, rights, and amendments.",
    cards: [
      "What is the purpose of the Preamble?",
      "Name the three branches.",
      "What does checks and balances mean?",
      "What rights are in the First Amendment?",
      "How can the Constitution be amended?"
    ]
  }
];
const SERVER_DOWN_MESSAGES = [
  // --- Original & General ---
  "Server is currently down. Check back later.",
  "Uh oh, our servers seem to be down!",
  "Looks like ROK is on break. Check back later.",
  "ROK is taking a quick pause. Please try again soon.",
  "Connection lost for now. We'll be back shortly.",
  "ROK is a little sleepy right now. Try again soon.",
  "Looks like ROK wandered off for a moment.",
  "ROK isn't responding at the moment.",
  "Hmm... ROK seems quiet right now.",
  "ROK is having a small nap. Check back soon.",
  "Something's off. ROK isn't here right now.",
  "ROK will be back in just a bit.",
  "Seems like ROK lost connection for now.",
  "ROK is temporarily unavailable.",
  "ROK is taking a short break.",
  "Can't reach ROK right now.",
  "ROK is a bit busy. Try again soon.",
  "ROK stepped away for a moment.",
  "ROK is offline for now.",
  "Looks like ROK is recharging.",
  "ROK is momentarily out of reach.",
  "ROK isn't ready yet. Give it a second.",
  "ROK is restarting quietly in the background.",
  "ROK is on pause for a moment.",
  "ROK will be right back.",
  "ROK went on a quick quest. Back soon!",
  "ROK is exploring the digital wilderness.",
  "ROK is currently out of office.",
  "Looks like ROK took a wrong turn at the last router.",
  "ROK is currently off the grid.",
  "We’re giving ROK a quick tune-up.",
  "ROK is undergoing a little spring cleaning.",
  "ROK’s gears are jammed, but we’re fixing them now.",
  "ROK is installing some fresh batteries.",
  "Just polishing the ROK. Back online momentarily.",
  "ROK is playing hide and seek. (It’s winning).",
  "ROK is currently in ‘Do Not Disturb’ mode.",
  "Waiting for ROK to wake up...",
  "ROK: Gone fishing. Back shortly.",
  "ROK is taking a breather.",
  "ROK hit a snag! We’re working on it.",
  "Something tripped ROK up. Hang tight.",
  "ROK is currently speechless.",
  "ROK ran into a bit of a hiccup.",
  "ROK is currently counting sheep.",
  "It’s not you, it’s ROK. We need a moment.",
  "ROK is playing hard to get. Try again!",
  "ROK is out for a jog. Back soon.",
  "ROK is currently meditating. Namaste.",
  "Even ROK needs a coffee break sometimes.",
  "ROK is chasing its own tail right now.",
  "ROK just stepped out for some fresh air.",
  "ROK is in a meeting that could have been an email.",
  "Looks like ROK hit the snooze button.",
  "ROK is recalibrating its internal compass.",
  "We're giving ROK a quick software hug.",
  "ROK is currently detangling its wires.",
  "ROK is blowing the dust off its circuits.",
  "A quick system refresh is in progress for ROK.",
  "ROK is checking its blind spots.",
  "ROK is tightening a few loose bolts.",
  "ROK is currently unreachable.",
  "Waiting for ROK to check back in.",
  "ROK is temporarily off-duty.",
  "ROK is having a moment of silence.",
  "ROK is currently out of range.",
  "ROK's signal is a bit weak. Retrying...",
  "ROK is standing by. Please wait.",

  // --- Space Theme ---
  "ROK has entered low earth orbit. Stand by.",
  "ROK is floating in a tin can, far above the world.",
  "Houston, we have a problem. ROK is offline.",
  "ROK is currently navigating an asteroid belt.",
  "ROK is refueling at a nearby space station.",
  "Lost contact with ROK. Re-establishing uplink.",
  "ROK is currently witnessing a supernova. Back soon.",

  // --- Construction Theme ---
  "ROK is wearing a hard hat right now. Safety first!",
  "Under construction. ROK is laying new foundations.",
  "ROK is currently being remodeled.",
  "Pardon the dust. ROK is rebuilding.",
  "ROK is currently waiting for the cement to dry.",
  "A few loose bricks. ROK is patching things up.",
  "ROK is currently redirecting traffic. Hold on."
];

const history = [];
const attachments = [];
let sessions = [];
let currentSessionId = null;
let isSending = false;
let nextAllowedAt = 0;
let cooldownTimer = null;
let activeRequestController = null;
let stopRequested = false;
let hasShownReadyMessage = false;
let homeDemoTimer = null;
let homeDemoLastIndex = -1;
let workspaceSaveTimer = null;
let workspaceApplyResolver = null;
let workspaceApplyLastFocusedElement = null;
let workspaceAssistantExpanded = false;
let wasWorkspaceTabActive = false;
let isWorkspaceSuggestionLoading = false;
let workspaceAssistantFadeTimer = null;
let workspaceDocSaveStateTimer = null;

const hasMarked = typeof marked !== "undefined";
if (hasMarked) {
  marked.setOptions({ breaks: true, gfm: true });
}

function sanitizeModelId(rawModel) {
  const value = String(rawModel || "").trim().toLowerCase();
  if (!value || value.length > 80) return "";
  if (!/^[a-z0-9._:-]+$/.test(value)) return "";
  return value;
}

function normalizeModelOptions(rawOptions) {
  const candidates = Array.isArray(rawOptions) && rawOptions.length ? rawOptions : DEFAULT_MODEL_OPTIONS;
  const seen = new Set();
  const normalized = [];

  for (const item of candidates) {
    let id = "";
    let label = "";
    if (typeof item === "string") {
      id = sanitizeModelId(item);
      label = item.trim();
    } else if (item && typeof item === "object") {
      id = sanitizeModelId(item.id || item.model || item.value);
      label = String(item.label || item.name || item.id || item.model || "").trim();
    }
    if (!id || seen.has(id) || !SUPPORTED_MODEL_IDS.has(id)) continue;
    seen.add(id);
    normalized.push({
      id,
      label: label || KNOWN_MODEL_LABELS[id] || id
    });
  }

  if (!normalized.length) {
    normalized.push({
      id: DEFAULT_CHAT_MODEL,
      label: "ROK Balanced (Mistral)"
    });
  }
  return normalized;
}

function resolveDefaultModelId(options, rawDefaultModel) {
  const candidates = Array.isArray(options) && options.length ? options : normalizeModelOptions([]);
  const modelIds = new Set(candidates.map((item) => item.id));
  const requestedDefault = sanitizeModelId(rawDefaultModel);
  if (requestedDefault && modelIds.has(requestedDefault)) {
    return requestedDefault;
  }
  if (modelIds.has(DEFAULT_CHAT_MODEL)) {
    return DEFAULT_CHAT_MODEL;
  }
  return candidates[0].id;
}

let MODEL_OPTIONS = normalizeModelOptions(runtimeConfig.models);
let MODEL_IDS = new Set(MODEL_OPTIONS.map((item) => item.id));
let DEFAULT_MODEL_ID = resolveDefaultModelId(MODEL_OPTIONS, runtimeConfig.defaultModel);

function setModelCatalog(rawOptions, rawDefaultModel) {
  const nextOptions = normalizeModelOptions(rawOptions);
  const nextIds = new Set(nextOptions.map((item) => item.id));
  const nextDefaultModelId = resolveDefaultModelId(nextOptions, rawDefaultModel);
  const didOptionsChange =
    nextOptions.length !== MODEL_OPTIONS.length ||
    nextOptions.some((item, index) => {
      const current = MODEL_OPTIONS[index];
      return !current || current.id !== item.id || current.label !== item.label;
    });
  const didDefaultChange = nextDefaultModelId !== DEFAULT_MODEL_ID;

  MODEL_OPTIONS = nextOptions;
  MODEL_IDS = nextIds;
  DEFAULT_MODEL_ID = nextDefaultModelId;

  renderModelSelectOptions();
  renderModelPanelOptions();

  let didSessionModelsChange = false;
  for (const session of sessions) {
    if (!session || typeof session !== "object") continue;
    const previousModel = typeof session.model === "string" ? session.model : "";
    const normalizedModel = normalizeSessionModel(previousModel);
    if (normalizedModel !== previousModel) {
      session.model = normalizedModel;
      didSessionModelsChange = true;
    }
  }

  if (didSessionModelsChange) {
    saveSessionsToStorage();
    saveCurrentSessionIdToStorage();
  }

  syncModelSelectorWithCurrentSession();
  syncModelPanelWithCurrentSession();
  return didOptionsChange || didDefaultChange || didSessionModelsChange;
}

async function refreshModelCatalogFromServer() {
  try {
    const res = await fetch(MODELS_URL, {
      method: "GET",
      cache: "no-store",
      headers: {
        ...buildApiHeaders(false),
        Accept: "application/json"
      }
    });
    if (!res.ok) {
      return false;
    }

    const contentType = (res.headers.get("content-type") || "").toLowerCase();
    if (!contentType.includes("application/json")) {
      return false;
    }

    const payload = await res.json();
    if (!payload || typeof payload !== "object") {
      return false;
    }

    const models = Array.isArray(payload.models) ? payload.models : [];
    if (!models.length) {
      return false;
    }

    const defaultModel = payload.default_model || payload.defaultModel || "";
    setModelCatalog(models, defaultModel);
    return true;
  } catch {
    return false;
  }
}

function buildApiHeaders(includeJson) {
  const headers = { ...NGROK_SKIP_WARNING_HEADER };
  if (includeJson) {
    headers["Content-Type"] = "application/json";
  }
  return headers;
}

function showServerDownScreen() {
  stopHomeDemoRotation();
  if (serverDownMessage) {
    const randomMessage =
      SERVER_DOWN_MESSAGES[Math.floor(Math.random() * SERVER_DOWN_MESSAGES.length)];
    serverDownMessage.textContent = randomMessage;
  }
  if (serverDownMeta) {
    serverDownMeta.textContent = "We couldn't reach the server, wait a few minutes then try again.";
  }
  if (serverDownRetryBtn) {
    serverDownRetryBtn.disabled = false;
    serverDownRetryBtn.textContent = "Try again";
  }
  if (serverDownWhyPanel) {
    serverDownWhyPanel.hidden = true;
  }
  if (serverDownWhyBtn) {
    serverDownWhyBtn.setAttribute("aria-expanded", "false");
    serverDownWhyBtn.textContent = "Why does this happen?";
  }
  if (appRoot) {
    appRoot.classList.add("is-hidden");
  }
  if (serverDownScreen) {
    serverDownScreen.hidden = false;
  }
}

function hideServerDownScreen() {
  if (serverDownScreen) {
    serverDownScreen.hidden = true;
  }
  if (appRoot) {
    appRoot.classList.remove("is-hidden");
  }
}

function ensureReadyMessage() {
  if (hasShownReadyMessage) return;
  addMessage("system", "ROK is ready. Ask me anything.");
  hasShownReadyMessage = true;
}

function showHomeScreen() {
  storeWorkspaceDraftsFromWindows();
  flushPendingWorkspaceSave();
  wasWorkspaceTabActive = false;
  hideServerDownScreen();
  startHomeDemoRotation();
  if (homeScreen) {
    homeScreen.hidden = false;
  }
  if (appRoot) {
    appRoot.classList.add("home-mode");
  }
  if (mainPanel) {
    mainPanel.classList.remove("workspace-mode");
  }
  if (sidebar) {
    sidebar.hidden = true;
  }
  if (chat) {
    chat.hidden = true;
  }
  if (workspaceTabs) {
    workspaceTabs.hidden = true;
  }
  if (workspacePanel) {
    workspacePanel.hidden = true;
  }
  if (modelPanel) {
    modelPanel.hidden = true;
  }
  if (workspaceAssistantPanel) {
    workspaceAssistantPanel.hidden = true;
  }
  if (composerWrap) {
    composerWrap.hidden = true;
  }
}

function hideHomeScreen() {
  stopHomeDemoRotation();
  if (homeScreen) {
    homeScreen.hidden = true;
  }
  if (appRoot) {
    appRoot.classList.remove("home-mode");
  }
  if (sidebar) {
    sidebar.hidden = false;
  }
  if (chat) {
    chat.hidden = false;
  }
  if (workspaceTabs) {
    workspaceTabs.hidden = false;
  }
  if (composerWrap) {
    composerWrap.hidden = false;
  }
  if (workspacePanel) {
    workspacePanel.hidden = true;
  }
  renderWorkspaceUI({ focus: false });
  ensureReadyMessage();
}

function isLikelyTunnelDownResponse(status, contentType, bodyText) {
  if ([502, 503, 504, 521, 522, 523, 524].includes(status)) {
    return true;
  }

  if (!contentType.includes("text/html")) {
    return false;
  }

  const lowerBody = (bodyText || "").toLowerCase();
  return (
    lowerBody.includes("ngrok") ||
    lowerBody.includes("cloud endpoint") ||
    lowerBody.includes("default endpoint") ||
    lowerBody.includes("trycloudflare") ||
    lowerBody.includes("tunnel")
  );
}

function isLikelyTunnelDownError(err) {
  const message = ((err && err.message) || "").toLowerCase();
  return (
    message.includes("server is currently down") ||
    message.includes("failed to fetch") ||
    message.includes("networkerror") ||
    message.includes("network error") ||
    message.includes("load failed")
  );
}

async function checkServerOnBoot() {
  try {
    const res = await fetch(HEALTH_URL, {
      method: "GET",
      cache: "no-store",
      headers: {
        ...buildApiHeaders(false),
        Accept: "application/json"
      }
    });

    const contentType = (res.headers.get("content-type") || "").toLowerCase();
    const bodyText = await res.text();

    if (!res.ok) {
      showServerDownScreen();
      return false;
    }

    if (isLikelyTunnelDownResponse(res.status, contentType, bodyText)) {
      showServerDownScreen();
      return false;
    }

    if (contentType.includes("application/json")) {
      let healthData = null;
      try {
        healthData = JSON.parse(bodyText);
      } catch {
        showServerDownScreen();
        return false;
      }
      if (!healthData || healthData.ok !== true) {
        showServerDownScreen();
        return false;
      }
    }

    hideServerDownScreen();
    return true;
  } catch (err) {
    if (isLikelyTunnelDownError(err)) {
      showServerDownScreen();
    }
    return false;
  }
}

async function retryServerConnection() {
  if (!serverDownRetryBtn) {
    await checkServerOnBoot();
    return;
  }

  serverDownRetryBtn.disabled = true;
  serverDownRetryBtn.textContent = "Checking...";
  if (serverDownMeta) {
    serverDownMeta.textContent = "Trying to reconnect to your server...";
  }

  const isUp = await checkServerOnBoot();
  if (isUp) {
    if (serverDownMeta) {
      serverDownMeta.textContent = "Connection restored. Reopening chat...";
    }
    await refreshModelCatalogFromServer();
    hideHomeScreen();
    renderWorkspaceUI({ focus: true });
    return;
  }

  if (serverDownMeta) {
    serverDownMeta.textContent = "Still down. Hmm, Server must be busy. Try again in a moment.";
  }
  serverDownRetryBtn.disabled = false;
  serverDownRetryBtn.textContent = "Try again";
}

function toggleServerDownWhyPanel() {
  if (!serverDownWhyBtn || !serverDownWhyPanel) return;
  const willShow = serverDownWhyPanel.hidden;
  serverDownWhyPanel.hidden = !willShow;
  serverDownWhyBtn.setAttribute("aria-expanded", willShow ? "true" : "false");
  serverDownWhyBtn.textContent = willShow ? "Hide details" : "Why does this happen?";
}

function scrollToBottom() {
  chat.scrollTop = chat.scrollHeight;
}

function createDefaultWorkspaceAssistantMemory() {
  return {
    lastAction: "None yet",
    intent: "No document context yet",
    outputType: "Other",
    action: "Not Applied",
    changeScope: "Short",
    summary: "Intent: No document context yet\nOutput Type: Other\nAction: Not Applied\nChange Scope: Short",
    tone: "idle",
    statusText: "Idle",
    suggestions: null
  };
}

function normalizeWorkspaceAssistantMemory(rawMemory) {
  const fallback = createDefaultWorkspaceAssistantMemory();
  if (!rawMemory || typeof rawMemory !== "object") {
    return fallback;
  }
  return {
    lastAction: typeof rawMemory.lastAction === "string" && rawMemory.lastAction.trim()
      ? rawMemory.lastAction.trim()
      : fallback.lastAction,
    intent: typeof rawMemory.intent === "string" && rawMemory.intent.trim()
      ? rawMemory.intent.trim()
      : fallback.intent,
    outputType: typeof rawMemory.outputType === "string" && rawMemory.outputType.trim()
      ? rawMemory.outputType.trim()
      : fallback.outputType,
    action: typeof rawMemory.action === "string" && rawMemory.action.trim()
      ? rawMemory.action.trim()
      : fallback.action,
    changeScope: typeof rawMemory.changeScope === "string" && rawMemory.changeScope.trim()
      ? rawMemory.changeScope.trim()
      : fallback.changeScope,
    summary: typeof rawMemory.summary === "string" && rawMemory.summary.trim()
      ? rawMemory.summary.trim()
      : fallback.summary,
    tone: typeof rawMemory.tone === "string" && rawMemory.tone.trim()
      ? rawMemory.tone.trim()
      : fallback.tone,
    statusText: typeof rawMemory.statusText === "string" && rawMemory.statusText.trim()
      ? rawMemory.statusText.trim()
      : fallback.statusText,
    suggestions:
      rawMemory.suggestions && typeof rawMemory.suggestions === "object"
        ? {
            clarity: Array.isArray(rawMemory.suggestions.clarity) ? rawMemory.suggestions.clarity.slice(0, 5) : [],
            grammar: Array.isArray(rawMemory.suggestions.grammar) ? rawMemory.suggestions.grammar.slice(0, 5) : [],
            style: Array.isArray(rawMemory.suggestions.style) ? rawMemory.suggestions.style.slice(0, 5) : []
          }
        : null
  };
}

function createDefaultWorkspace() {
  return {
    activeTab: "chat",
    content: "",
    assistantMemory: createDefaultWorkspaceAssistantMemory()
  };
}

function normalizeWorkspace(rawWorkspace) {
  const fallback = createDefaultWorkspace();
  if (!rawWorkspace || typeof rawWorkspace !== "object") {
    return fallback;
  }

  const rawActiveTab = String(rawWorkspace.activeTab || "").toLowerCase();
  const activeTab = WORKSPACE_TAB_KEYS.includes(rawActiveTab) ? rawActiveTab : "chat";
  let content = "";

  if (typeof rawWorkspace.content === "string") {
    content = rawWorkspace.content;
  } else if (rawWorkspace.tabs && typeof rawWorkspace.tabs === "object") {
    // Backward-compatible upgrade path from older multi-tab workspace shape.
    const migrated = [];
    const code = typeof rawWorkspace.tabs.code === "string" ? rawWorkspace.tabs.code.trim() : "";
    const documentText = typeof rawWorkspace.tabs.document === "string" ? rawWorkspace.tabs.document.trim() : "";
    const notes = typeof rawWorkspace.tabs.notes === "string" ? rawWorkspace.tabs.notes.trim() : "";
    if (code) migrated.push(`Code:\n${code}`);
    if (documentText) migrated.push(`Document:\n${documentText}`);
    if (notes) migrated.push(`Notes:\n${notes}`);
    content = migrated.join("\n\n");
  }

  return {
    activeTab,
    content: String(content || ""),
    assistantMemory: normalizeWorkspaceAssistantMemory(rawWorkspace.assistantMemory)
  };
}

function ensureSessionWorkspace(session) {
  if (!session) {
    return createDefaultWorkspace();
  }
  session.workspace = normalizeWorkspace(session.workspace);
  return session.workspace;
}

function normalizeSessionModel(rawModel) {
  const candidate = sanitizeModelId(rawModel);
  if (candidate && MODEL_IDS.has(candidate)) {
    return candidate;
  }
  return DEFAULT_MODEL_ID;
}

function ensureSessionModel(session) {
  if (!session || typeof session !== "object") {
    return DEFAULT_MODEL_ID;
  }
  session.model = normalizeSessionModel(session.model);
  return session.model;
}

function getWorkspaceCurrentSession() {
  if (!currentSessionId) return null;
  const current = getSessionById(currentSessionId);
  if (!current) return null;
  ensureSessionWorkspace(current);
  ensureSessionModel(current);
  return current;
}

function isWorkspaceSessionActive() {
  const current = getWorkspaceCurrentSession();
  if (!current) return false;
  return current.workspace.activeTab === "workspace";
}

function getLastAssistantMessageText() {
  for (let i = history.length - 1; i >= 0; i -= 1) {
    const item = history[i];
    if (item && item.role === "assistant" && typeof item.content === "string" && item.content.trim()) {
      return item.content.trim();
    }
  }
  return "";
}

function flushPendingWorkspaceSave() {
  if (workspaceSaveTimer) {
    clearTimeout(workspaceSaveTimer);
    workspaceSaveTimer = null;
  }
  storeWorkspaceDraftsFromWindows();
  syncCurrentSessionFromHistory();
  refreshWorkspaceDocumentToolbarState();
  setWorkspaceDocumentSaveState(getWorkspaceDocumentText().trim() ? "Saved" : "Empty", "idle");
}

function queueWorkspaceSave() {
  if (workspaceSaveTimer) {
    clearTimeout(workspaceSaveTimer);
  }
  workspaceSaveTimer = setTimeout(() => {
    workspaceSaveTimer = null;
    storeWorkspaceDraftsFromWindows();
    syncCurrentSessionFromHistory();
    refreshWorkspaceDocumentToolbarState();
    setWorkspaceDocumentSaveState(getWorkspaceDocumentText().trim() ? "Saved" : "Empty", "idle");
  }, 220);
}

function storeWorkspaceDraftsFromWindows() {
  if (!workspaceEditor) return;
  const current = getWorkspaceCurrentSession();
  if (!current) return;
  current.workspace.content = workspaceEditor.value || "";
  refreshWorkspaceDocumentToolbarState();
}

function updateWorkspaceTabButtons(activeTab) {
  if (!workspaceTabs) return;
  const tabButtons = workspaceTabs.querySelectorAll("[data-workspace-tab]");
  tabButtons.forEach((btn) => {
    const tab = btn.getAttribute("data-workspace-tab");
    const isActive = tab === activeTab;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

function renderModelSelectOptions() {
  if (!modelSelect) return;
  modelSelect.innerHTML = MODEL_OPTIONS.map((item) => {
    const safeValue = escapeHtml(item.id);
    const safeLabel = escapeHtml(item.label);
    return `<option value="${safeValue}">${safeLabel}</option>`;
  }).join("");
}

function renderModelPanelOptions() {
  if (!modelOptionList) return;
  const sessionModel = getCurrentSessionModel();

  modelOptionList.innerHTML = MODEL_OPTIONS.map((item) => {
    const isActive = item.id === sessionModel;
    const safeId = escapeHtml(item.id);
    const safeLabel = escapeHtml(item.label);
    const safeDescription = escapeHtml(MODEL_DESCRIPTIONS[item.id] || "AI model available for this workspace.");
    return `<button class="model-option-btn${isActive ? " is-active" : ""}" type="button" data-model-option="${safeId}" role="radio" aria-checked="${isActive ? "true" : "false"}"><span class="model-option-top"><span class="model-option-name">${safeLabel}</span>${isActive ? '<span class="model-option-badge">Selected</span>' : ""}</span><p class="model-option-desc">${safeDescription}</p></button>`;
  }).join("");

  if (modelPanelCurrent) {
    const active = MODEL_OPTIONS.find((item) => item.id === sessionModel);
    modelPanelCurrent.textContent = `Current model: ${active ? active.label : sessionModel}`;
  }
}

function getModelLabelById(modelId) {
  const normalizedId = normalizeSessionModel(modelId);
  const matched = MODEL_OPTIONS.find((item) => item.id === normalizedId);
  return matched ? matched.label : KNOWN_MODEL_LABELS[normalizedId] || normalizedId;
}

function getCurrentSessionModel() {
  const current = getSessionById(currentSessionId);
  if (!current) return DEFAULT_MODEL_ID;
  return ensureSessionModel(current);
}

function syncModelSelectorWithCurrentSession() {
  if (!modelSelect) return;
  const sessionModel = getCurrentSessionModel();
  if (modelSelect.value !== sessionModel) {
    modelSelect.value = sessionModel;
  }
}

function syncModelPanelWithCurrentSession() {
  renderModelPanelOptions();
}

function setCurrentSessionModel(rawModel) {
  if (!currentSessionId) return;
  const current = getSessionById(currentSessionId);
  if (!current) return;

  const nextModel = normalizeSessionModel(rawModel);
  if (ensureSessionModel(current) === nextModel) {
    syncModelSelectorWithCurrentSession();
    syncModelPanelWithCurrentSession();
    return;
  }

  current.model = nextModel;
  current.updatedAt = Date.now();
  sortSessionsByRecent();
  saveSessionsToStorage();
  saveCurrentSessionIdToStorage();
  updateCurrentSessionButton();
  renderSavedSessions();
  syncModelSelectorWithCurrentSession();
  syncModelPanelWithCurrentSession();
}

function inferWorkspaceOutputType(content = "", promptText = "") {
  const source = `${promptText}\n${content}`.toLowerCase();
  if (/\b(code|function|class|script|javascript|typescript|python|java|c\+\+|html|css|sql|json|yaml|markdown|snippet)\b/.test(source)) {
    return "Code";
  }
  if (/\b(story|chapter|novel|scene|narrative|plot|fiction|poem|lyrics)\b/.test(source)) {
    return "Story";
  }
  if (/\b(summary|summarize|overview|recap|outline)\b/.test(source)) {
    return "Summary";
  }
  if (/\b(essay|thesis|argumentative|persuasive|report|article|research paper|memo|proposal)\b/.test(source)) {
    return "Essay";
  }
  if (/\b(notes?|bullet|checklist|study guide|flashcards?)\b/.test(source)) {
    return "Notes";
  }
  return "Other";
}

function getWorkspaceContextFromSession(limitChars = 18000) {
  const current = getWorkspaceCurrentSession();
  if (!current) return "";
  const content = String(current.workspace.content || "").trim();
  if (!content) return "";
  return content.slice(0, Math.max(200, limitChars));
}

function classifyPromptIntent(promptText = "", workspaceText = "", attachedFiles = []) {
  const prompt = String(promptText || "").trim();
  const source = prompt.toLowerCase();
  const workspaceValue = String(workspaceText || "").trim();
  const hasAttachments = Array.isArray(attachedFiles) && attachedFiles.length > 0;
  const hasCodeAttachments =
    hasAttachments &&
    attachedFiles.some((item) => /\.(?:js|ts|py|java|c|cpp|cs|go|rs|html|css|sql|json|yaml|yml)$/i.test(String(item && item.name || "")));

  if (!prompt && workspaceValue) {
    return {
      type: "document",
      label: "Document",
      routeToWorkspace: true,
      outputType: inferWorkspaceOutputType(workspaceValue, "")
    };
  }

  const storyHint =
    STORY_PROMPT_PATTERN.test(source) ||
    /\b(screenplay|scene|dialogue|plot|character arc|worldbuilding|narrative)\b/.test(source);
  const documentHint =
    LONGFORM_PROMPT_PATTERN.test(source) ||
    /\b(write|draft|compose|revise|rewrite|continue|expand)\b/.test(source);
  const codeHint = CODE_PROMPT_PATTERN.test(source) || hasCodeAttachments;

  if (storyHint && !codeHint) {
    return {
      type: "story",
      label: "Story",
      routeToWorkspace: true,
      outputType: "Story"
    };
  }

  if (documentHint && !codeHint) {
    const inferred = inferWorkspaceOutputType("", prompt);
    return {
      type: "document",
      label: "Document",
      routeToWorkspace: true,
      outputType: inferred === "Code" ? "Essay" : inferred
    };
  }

  if (codeHint) {
    return {
      type: "code",
      label: "Code",
      routeToWorkspace: false,
      outputType: "Code"
    };
  }

  return {
    type: "general_chat",
    label: "General chat",
    routeToWorkspace: false,
    outputType: inferWorkspaceOutputType("", prompt)
  };
}

function countWords(text) {
  const value = String(text || "").trim();
  if (!value) return 0;
  const matches = value.match(/\S+/g);
  return matches ? matches.length : 0;
}

function estimateReadTimeMinutes(words) {
  return Math.max(1, Math.round(words / 200));
}

function getWorkspaceDocumentText() {
  if (workspaceEditor && workspacePanel && !workspacePanel.hidden) {
    return String(workspaceEditor.value || "");
  }
  const current = getWorkspaceCurrentSession();
  if (!current) return "";
  return String(current.workspace.content || "");
}

function getWorkspaceDocumentMetrics(text) {
  const value = String(text || "");
  const wordCount = countWords(value);
  return {
    wordCount,
    readTimeMinutes: estimateReadTimeMinutes(wordCount)
  };
}

function setWorkspaceDocumentSaveState(label, tone = "idle") {
  if (!workspaceDocSaveState) return;
  workspaceDocSaveState.textContent = String(label || "Saved");
  workspaceDocSaveState.dataset.tone = String(tone || "idle");
}

function queueWorkspaceDocumentSavePulse(label, tone = "saved", durationMs = 1400) {
  if (workspaceDocSaveStateTimer) {
    clearTimeout(workspaceDocSaveStateTimer);
    workspaceDocSaveStateTimer = null;
  }
  setWorkspaceDocumentSaveState(label, tone);
  workspaceDocSaveStateTimer = setTimeout(() => {
    workspaceDocSaveStateTimer = null;
    const text = getWorkspaceDocumentText();
    setWorkspaceDocumentSaveState(text.trim() ? "Saved" : "Empty", "idle");
  }, Math.max(500, durationMs));
}

function refreshWorkspaceDocumentToolbarState() {
  const documentText = getWorkspaceDocumentText();
  const metrics = getWorkspaceDocumentMetrics(documentText);
  const hasContent = Boolean(documentText.trim());

  if (workspaceDocWordCount) {
    workspaceDocWordCount.textContent = `${metrics.wordCount.toLocaleString()} words`;
  }
  if (workspaceDocReadTime) {
    workspaceDocReadTime.textContent = `${metrics.readTimeMinutes} min read`;
  }
  if (!workspaceDocSaveStateTimer) {
    setWorkspaceDocumentSaveState(hasContent ? "Saved" : "Empty", "idle");
  }
  if (workspaceCopyBtn) {
    workspaceCopyBtn.disabled = !hasContent;
  }
  if (workspaceDownloadBtn) {
    workspaceDownloadBtn.disabled = !hasContent;
  }
  if (workspaceImproveBtn) {
    workspaceImproveBtn.disabled = !hasContent || isSending || isWorkspaceSuggestionLoading;
  }
}

async function copyWorkspaceDocumentToClipboard() {
  const text = getWorkspaceDocumentText();
  if (!text.trim()) return;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const helper = document.createElement("textarea");
      helper.value = text;
      helper.setAttribute("readonly", "");
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      helper.style.pointerEvents = "none";
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      helper.remove();
    }
    queueWorkspaceDocumentSavePulse("Copied", "saved", 1100);
  } catch {
    queueWorkspaceDocumentSavePulse("Copy failed", "error", 1400);
  }
}

function downloadWorkspaceDocument() {
  const text = getWorkspaceDocumentText();
  if (!text.trim()) return;

  const current = getWorkspaceCurrentSession();
  const base = String((current && current.title) || "rok-workspace")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
  const dateTag = new Date().toISOString().slice(0, 10);
  const filename = `${base || "rok-workspace"}-${dateTag}.txt`;
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  queueWorkspaceDocumentSavePulse("Downloaded", "saved", 1200);
}

function resolveWorkspaceTone(toneInput) {
  const candidates = Array.isArray(toneInput) ? toneInput : [toneInput];
  let selectedTone = "idle";
  let selectedScore = -1;
  for (const candidate of candidates) {
    const tone = typeof candidate === "string" ? candidate.trim().toLowerCase() : "";
    const score = Number.isFinite(WORKSPACE_TONE_PRIORITY[tone]) ? WORKSPACE_TONE_PRIORITY[tone] : -1;
    if (score > selectedScore) {
      selectedScore = score;
      selectedTone = score >= 0 ? tone : selectedTone;
    }
  }
  return selectedTone;
}

function setWorkspaceAssistantSuggestions(suggestions) {
  if (!workspaceAssistantSuggestions || !workspaceAssistantClarityList || !workspaceAssistantGrammarList || !workspaceAssistantStyleList) {
    return;
  }

  const normalized =
    suggestions && typeof suggestions === "object"
      ? {
          clarity: Array.isArray(suggestions.clarity) ? suggestions.clarity.slice(0, 5) : [],
          grammar: Array.isArray(suggestions.grammar) ? suggestions.grammar.slice(0, 5) : [],
          style: Array.isArray(suggestions.style) ? suggestions.style.slice(0, 5) : []
        }
      : null;

  if (!normalized) {
    workspaceAssistantSuggestions.hidden = true;
    workspaceAssistantClarityList.innerHTML = "";
    workspaceAssistantGrammarList.innerHTML = "";
    workspaceAssistantStyleList.innerHTML = "";
    return;
  }

  const renderList = (el, items) => {
    el.innerHTML = "";
    const listItems = items.length ? items : ["No issues detected."];
    for (const item of listItems) {
      const li = document.createElement("li");
      li.textContent = String(item || "").trim() || "No issues detected.";
      el.appendChild(li);
    }
  };

  renderList(workspaceAssistantClarityList, normalized.clarity);
  renderList(workspaceAssistantGrammarList, normalized.grammar);
  renderList(workspaceAssistantStyleList, normalized.style);
  workspaceAssistantSuggestions.hidden = false;
}

function triggerWorkspaceAssistantFadeIn() {
  if (!workspaceAssistantPanel) return;
  if (workspaceAssistantFadeTimer) {
    clearTimeout(workspaceAssistantFadeTimer);
    workspaceAssistantFadeTimer = null;
  }
  workspaceAssistantPanel.classList.remove("is-fade-in");
  void workspaceAssistantPanel.offsetWidth;
  workspaceAssistantPanel.classList.add("is-fade-in");
  workspaceAssistantFadeTimer = setTimeout(() => {
    workspaceAssistantPanel.classList.remove("is-fade-in");
    workspaceAssistantFadeTimer = null;
  }, 190);
}

function setWorkspaceAssistantSuggestButtonLoading(isLoading) {
  if (workspaceAssistantSuggestBtn) {
    workspaceAssistantSuggestBtn.disabled = Boolean(isLoading);
    workspaceAssistantSuggestBtn.textContent = isLoading ? "Analyzing..." : "Suggest Improvements";
  }
  if (workspaceImproveBtn) {
    workspaceImproveBtn.textContent = isLoading ? "Improving..." : "Improve";
  }
  refreshWorkspaceDocumentToolbarState();
}

function buildWorkspaceStructuredSummary(intent, outputType, action, changeScope) {
  return `Intent: ${intent}\nOutput Type: ${outputType}\nAction: ${action}\nChange Scope: ${changeScope}`;
}

function determineWorkspaceChangeScope(cleanText, baseText) {
  const insertedWords = countWords(cleanText);
  const baseWords = countWords(baseText);
  if (insertedWords <= 0) return "Short";

  if (baseWords === 0) {
    if (insertedWords >= 220) return "Full rewrite";
    if (insertedWords >= 90) return "Medium";
    return "Short";
  }

  const ratio = insertedWords / Math.max(1, baseWords);
  if (ratio >= 0.9 || insertedWords >= 400) return "Full rewrite";
  if (ratio >= 0.3 || insertedWords >= 130) return "Medium";
  return "Short";
}

function hasWorkspaceDocumentContext() {
  return Boolean(getWorkspaceDocumentText().trim());
}

function getCurrentWorkspaceAssistantMemory() {
  const current = getWorkspaceCurrentSession();
  if (!current) return createDefaultWorkspaceAssistantMemory();
  current.workspace.assistantMemory = normalizeWorkspaceAssistantMemory(current.workspace.assistantMemory);
  return current.workspace.assistantMemory;
}

function setCurrentWorkspaceAssistantMemory(memoryPatch = {}) {
  const current = getWorkspaceCurrentSession();
  if (!current) return;
  const merged = {
    ...getCurrentWorkspaceAssistantMemory(),
    ...memoryPatch
  };
  current.workspace.assistantMemory = normalizeWorkspaceAssistantMemory(merged);
  syncCurrentSessionFromHistory();
}

function setWorkspaceAssistantExpanded(expanded) {
  workspaceAssistantExpanded = Boolean(expanded);
  if (!workspaceAssistantPanel || !workspaceAssistantToggle || !workspaceAssistantBody) return;

  workspaceAssistantPanel.classList.toggle("is-collapsed", !workspaceAssistantExpanded);
  workspaceAssistantToggle.setAttribute("aria-expanded", workspaceAssistantExpanded ? "true" : "false");
  workspaceAssistantBody.hidden = false;
  workspaceAssistantBody.setAttribute("aria-hidden", workspaceAssistantExpanded ? "false" : "true");
  if (workspaceAssistantChevron) {
    workspaceAssistantChevron.textContent = ">";
  }
}

function updateWorkspaceAssistantPanelState(data = {}) {
  const {
    tone = "idle",
    statusText = "Idle",
    intentText = "No document context yet",
    outputTypeText = "Other",
    wordCountText = "0",
    readTimeText = "1 min",
    actionText = "Not Applied",
    changeScopeText = "Short",
    lastActionText = "None yet",
    summaryText = buildWorkspaceStructuredSummary("No document context yet", "Other", "Not Applied", "Short"),
    suggestions = null,
    triggerFadeIn = false
  } = data;

  if (triggerFadeIn) {
    triggerWorkspaceAssistantFadeIn();
  }

  const resolvedTone = resolveWorkspaceTone(tone);
  if (workspaceAssistantStatusDot) {
    workspaceAssistantStatusDot.className = `workspace-assistant-dot ${resolvedTone}`;
  }
  if (workspaceAssistantStatusText) {
    workspaceAssistantStatusText.textContent = statusText;
  }
  if (workspaceAssistantIntent) {
    workspaceAssistantIntent.textContent = intentText;
  }
  if (workspaceAssistantOutput) {
    workspaceAssistantOutput.textContent = outputTypeText;
  }
  if (workspaceAssistantWordCount) {
    workspaceAssistantWordCount.textContent = wordCountText;
  }
  if (workspaceAssistantReadTime) {
    workspaceAssistantReadTime.textContent = readTimeText;
  }
  if (workspaceAssistantAction) {
    workspaceAssistantAction.textContent = actionText;
  }
  if (workspaceAssistantChangeScope) {
    workspaceAssistantChangeScope.textContent = changeScopeText;
  }
  if (workspaceAssistantLastAction) {
    workspaceAssistantLastAction.textContent = lastActionText;
  }
  if (workspaceAssistantSummary) {
    workspaceAssistantSummary.textContent = summaryText;
  }
  setWorkspaceAssistantSuggestions(suggestions);
}

function setWorkspaceAssistantNoContextState() {
  const fallbackSummary = buildWorkspaceStructuredSummary("No document context yet", "Other", "Not Applied", "Short");
  updateWorkspaceAssistantPanelState({
    tone: "idle",
    statusText: "Idle",
    intentText: "No document context yet",
    outputTypeText: "Other",
    wordCountText: "0",
    readTimeText: "1 min",
    actionText: "Not Applied",
    changeScopeText: "Short",
    lastActionText: "None yet",
    summaryText: fallbackSummary,
    suggestions: null
  });
}

function setWorkspaceAssistantIdleIntelligenceState() {
  const content = getWorkspaceDocumentText();
  if (!content.trim()) {
    setWorkspaceAssistantNoContextState();
    return;
  }

  const metrics = getWorkspaceDocumentMetrics(content);
  const memory = getCurrentWorkspaceAssistantMemory();
  const detectedType = inferWorkspaceOutputType(content, "");
  const summary = memory.summary || buildWorkspaceStructuredSummary(
    "Workspace-aware assistance is ready.",
    detectedType,
    memory.action || "Not Applied",
    memory.changeScope || "Short"
  );

  updateWorkspaceAssistantPanelState({
    tone: memory.tone || "idle",
    statusText: memory.statusText || "Idle",
    intentText: memory.intent || "Workspace-aware assistance is ready.",
    outputTypeText: detectedType,
    wordCountText: `${metrics.wordCount}`,
    readTimeText: `${metrics.readTimeMinutes} min`,
    actionText: memory.action || "Not Applied",
    changeScopeText: memory.changeScope || "Short",
    lastActionText: memory.lastAction || "None yet",
    summaryText: summary,
    suggestions: memory.suggestions || null
  });
}

function syncWorkspaceAssistantContextState() {
  if (!isWorkspaceSessionActive()) return;
  if (isSending || isWorkspaceSuggestionLoading) return;
  setWorkspaceAssistantIdleIntelligenceState();
}

function setWorkspaceAssistantGenerationPhase(phaseText, options = {}) {
  if (!isWorkspaceSessionActive()) return;
  const {
    intentText = "Preparing workspace-aligned output.",
    outputTypeText = "Other",
    sourceText = getWorkspaceDocumentText(),
    summaryText = phaseText,
    triggerFadeIn = false
  } = options;
  const metrics = getWorkspaceDocumentMetrics(sourceText);
  const memory = getCurrentWorkspaceAssistantMemory();
  updateWorkspaceAssistantPanelState({
    tone: "generating",
    statusText: "Generating",
    intentText,
    outputTypeText,
    wordCountText: `${metrics.wordCount}`,
    readTimeText: `${metrics.readTimeMinutes} min`,
    actionText: "In Progress",
    changeScopeText: "Pending",
    lastActionText: memory.lastAction || "None yet",
    summaryText,
    suggestions: null,
    triggerFadeIn
  });
}

function finalizeWorkspaceAssistantGeneration(result, options = {}) {
  if (!isWorkspaceSessionActive()) return;
  const { stopped = false } = options;
  const contentNow = getWorkspaceDocumentText();
  const metrics = getWorkspaceDocumentMetrics(contentNow);
  const outputType = result && result.outputType ? result.outputType : inferWorkspaceOutputType(contentNow, "");

  let intent = "Generated workspace output from the current context.";
  let action = "Not Applied";
  let tone = "pending";
  let statusText = "Pending";
  let changeScope = result && result.changeScope ? result.changeScope : "Short";
  let lastAction = `Generated ${outputType.toLowerCase()} output but did not apply changes.`;

  if (!result || result.reason === "empty") {
    intent = "Generated no insertable content from the current workspace request.";
    action = "Not Applied";
    tone = "pending";
    statusText = "Pending";
    changeScope = "Short";
    lastAction = "Generated output but no document-ready insertion was available.";
  } else if (result.applied) {
    intent = stopped
      ? "Generated partial content and applied clean output to the workspace."
      : "Generated clean content and applied it to the workspace.";
    action = "Applied";
    tone = "applied";
    statusText = "Applied";
    lastAction = `Generated ${outputType.toLowerCase()} content and cleaned formatting.`;
  } else if (result.reason === "declined") {
    intent = "Generated clean content and waited for insertion approval.";
    action = "Not Applied";
    tone = "pending";
    statusText = "Pending";
    lastAction = `Generated ${outputType.toLowerCase()} content but insertion was skipped.`;
  }

  const summary = buildWorkspaceStructuredSummary(intent, outputType, action, changeScope);
  updateWorkspaceAssistantPanelState({
    tone,
    statusText,
    intentText: intent,
    outputTypeText: outputType,
    wordCountText: `${metrics.wordCount}`,
    readTimeText: `${metrics.readTimeMinutes} min`,
    actionText: action,
    changeScopeText: changeScope,
    lastActionText: lastAction,
    summaryText: summary,
    suggestions: null
  });

  setCurrentWorkspaceAssistantMemory({
    lastAction,
    intent,
    outputType,
    action,
    changeScope,
    summary,
    tone: action === "Applied" ? "applied" : "pending",
    statusText,
    suggestions: null
  });
}

function buildWorkspaceSuggestionPrompt(workspaceText, outputType) {
  const content = String(workspaceText || "").trim();
  return [
    "Analyze this workspace document and return only JSON.",
    "Schema: {\"clarity\":[\"...\"],\"grammar\":[\"...\"],\"style\":[\"...\"]}",
    "Each array must contain 1-3 concise suggestions. No markdown, no extra text.",
    `Detected output type: ${outputType}.`,
    "",
    "Document:",
    content
  ].join("\n");
}

function parseWorkspaceSuggestions(rawText) {
  const raw = String(rawText || "").trim();
  if (!raw) return null;

  const jsonBlock = raw.match(/\{[\s\S]*\}/);
  const payload = jsonBlock ? jsonBlock[0] : raw;
  let parsed = null;
  try {
    parsed = JSON.parse(payload);
  } catch {
    return null;
  }
  if (!parsed || typeof parsed !== "object") return null;

  const normalizeList = (value) => {
    if (!Array.isArray(value)) return [];
    return value
      .map((item) => String(item || "").trim())
      .filter(Boolean)
      .slice(0, 3);
  };

  return {
    clarity: normalizeList(parsed.clarity),
    grammar: normalizeList(parsed.grammar),
    style: normalizeList(parsed.style)
  };
}

async function requestWorkspaceSuggestions() {
  if (!isWorkspaceSessionActive()) return;
  const workspaceText = getWorkspaceDocumentText();
  if (!workspaceText.trim()) {
    setWorkspaceAssistantNoContextState();
    return;
  }
  if (isSending || isWorkspaceSuggestionLoading) {
    return;
  }

  isWorkspaceSuggestionLoading = true;
  setWorkspaceAssistantSuggestButtonLoading(true);
  setWorkspaceAssistantExpanded(true);

  const outputType = inferWorkspaceOutputType(workspaceText, "");
  const metrics = getWorkspaceDocumentMetrics(workspaceText);
  const sessionModel = getCurrentSessionModel();

  try {
    setWorkspaceAssistantGenerationPhase(WORKSPACE_GENERATION_PHASES.reviewing, {
      intentText: "Reviewing workspace content to prepare targeted improvements.",
      outputTypeText: outputType,
      sourceText: workspaceText,
      summaryText: WORKSPACE_GENERATION_PHASES.reviewing,
      triggerFadeIn: true
    });

    const prompt = buildWorkspaceSuggestionPrompt(workspaceText, outputType);
    const res = await fetch(API_URL, {
      method: "POST",
      headers: buildApiHeaders(true),
      body: JSON.stringify({ message: prompt, history: [], model: sessionModel })
    });
    if (!res.ok) {
      throw new Error("Failed to generate suggestions.");
    }

    setWorkspaceAssistantGenerationPhase(WORKSPACE_GENERATION_PHASES.drafting, {
      intentText: "Drafting structured suggestions for clarity, grammar, and style.",
      outputTypeText: outputType,
      sourceText: workspaceText,
      summaryText: WORKSPACE_GENERATION_PHASES.drafting
    });

    const contentType = (res.headers.get("content-type") || "").toLowerCase();
    let reply = "";
    if (contentType.includes("application/json")) {
      const parsed = await res.json();
      reply = JSON.stringify(parsed);
    } else {
      reply = await res.text();
    }

    setWorkspaceAssistantGenerationPhase(WORKSPACE_GENERATION_PHASES.preparing, {
      intentText: "Preparing final suggestion output.",
      outputTypeText: outputType,
      sourceText: workspaceText,
      summaryText: WORKSPACE_GENERATION_PHASES.preparing
    });

    const suggestions = parseWorkspaceSuggestions(reply) || {
      clarity: ["Clarify the main point in the opening section."],
      grammar: ["Review sentence punctuation consistency."],
      style: ["Unify tone across the document."]
    };
    const intent = "Generated structured improvement suggestions for the workspace document.";
    const action = "Not Applied";
    const changeScope = "Short";
    const summary = buildWorkspaceStructuredSummary(intent, outputType, action, changeScope);
    const lastAction = "Generated improvement suggestions for clarity, grammar, and style.";

    updateWorkspaceAssistantPanelState({
      tone: "pending",
      statusText: "Pending",
      intentText: intent,
      outputTypeText: outputType,
      wordCountText: `${metrics.wordCount}`,
      readTimeText: `${metrics.readTimeMinutes} min`,
      actionText: action,
      changeScopeText: changeScope,
      lastActionText: lastAction,
      summaryText: summary,
      suggestions
    });

    setCurrentWorkspaceAssistantMemory({
      lastAction,
      intent,
      outputType,
      action,
      changeScope,
      summary,
      tone: "pending",
      statusText: "Pending",
      suggestions
    });
  } catch {
    const summary = buildWorkspaceStructuredSummary(
      "Could not complete suggestion analysis for the workspace document.",
      outputType,
      "Not Applied",
      "Short"
    );
    updateWorkspaceAssistantPanelState({
      tone: "pending",
      statusText: "Pending",
      intentText: "Could not complete suggestion analysis for the workspace document.",
      outputTypeText: outputType,
      wordCountText: `${metrics.wordCount}`,
      readTimeText: `${metrics.readTimeMinutes} min`,
      actionText: "Not Applied",
      changeScopeText: "Short",
      lastActionText: "Suggestion analysis failed.",
      summaryText: summary,
      suggestions: null
    });
    setCurrentWorkspaceAssistantMemory({
      lastAction: "Suggestion analysis failed.",
      intent: "Could not complete suggestion analysis for the workspace document.",
      outputType,
      action: "Not Applied",
      changeScope: "Short",
      summary,
      tone: "pending",
      statusText: "Pending",
      suggestions: null
    });
  } finally {
    isWorkspaceSuggestionLoading = false;
    setWorkspaceAssistantSuggestButtonLoading(false);
  }
}

function renderWorkspaceUI(options = {}) {
  const { focus = false } = options;
  if (!workspaceTabs || !workspacePanel || !chat || !composerWrap) return;

  const current = getWorkspaceCurrentSession();
  if (!current) return;
  syncModelSelectorWithCurrentSession();
  syncModelPanelWithCurrentSession();
  const workspace = current.workspace;
  const activeTab = WORKSPACE_TAB_KEYS.includes(workspace.activeTab) ? workspace.activeTab : "chat";
  const isWorkspaceTab = activeTab === "workspace";
  const isModelTab = activeTab === "model";

  if (mainPanel) {
    mainPanel.classList.toggle("workspace-mode", activeTab !== "chat");
  }

  workspaceTabs.hidden = false;
  chat.hidden = activeTab !== "chat";
  composerWrap.hidden = isModelTab;
  workspacePanel.hidden = !isWorkspaceTab;
  if (modelPanel) {
    modelPanel.hidden = !isModelTab;
  }
  workspacePanel.dataset.tab = activeTab || "chat";
  if (workspaceAssistantPanel) {
    workspaceAssistantPanel.hidden = !isWorkspaceTab;
  }

  updateWorkspaceTabButtons(activeTab);

  if (isWorkspaceTab) {
    if (!wasWorkspaceTabActive) {
      setWorkspaceAssistantExpanded(false);
      syncWorkspaceAssistantContextState();
    } else {
      syncWorkspaceAssistantContextState();
    }
    if (workspacePanelTitle) {
      workspacePanelTitle.textContent = "ROK Workspace";
    }
    if (workspaceEditor && document.activeElement !== workspaceEditor) {
      workspaceEditor.value = workspace.content || "";
    }
    if (focus && workspaceEditor) {
      workspaceEditor.focus();
    }
    refreshWorkspaceDocumentToolbarState();
  } else if (isModelTab) {
    if (focus && modelOptionList) {
      const activeOption = modelOptionList.querySelector(".model-option-btn.is-active");
      const fallbackOption = modelOptionList.querySelector(".model-option-btn");
      const target = activeOption instanceof HTMLElement ? activeOption : fallbackOption;
      if (target instanceof HTMLElement) {
        target.focus();
      }
    }
  } else if (focus && input) {
    input.focus();
  }
  wasWorkspaceTabActive = isWorkspaceTab;
}

function setActiveWorkspaceTab(tab, options = {}) {
  const { focus = true } = options;
  if (!WORKSPACE_TAB_KEYS.includes(tab) || !currentSessionId) return;

  storeWorkspaceDraftsFromWindows();
  const current = getWorkspaceCurrentSession();
  if (!current) return;
  const workspace = current.workspace;
  workspace.activeTab = tab;
  syncCurrentSessionFromHistory();
  renderWorkspaceUI({ focus });
}

function clearActiveWorkspaceTab() {
  if (!currentSessionId) return false;
  const current = getWorkspaceCurrentSession();
  if (!current) return false;
  const workspace = current.workspace;

  if (workspace.activeTab === "model") {
    const nextModel = normalizeSessionModel(DEFAULT_MODEL_ID);
    current.model = nextModel;
    current.updatedAt = Date.now();
    syncCurrentSessionFromHistory();
    if (modelPanelCurrent) {
      modelPanelCurrent.textContent = `Current model: ${getModelLabelById(nextModel)}`;
    }
    renderWorkspaceUI({ focus: true });
    refreshWorkspaceDocumentToolbarState();
    return true;
  }

  if (workspace.activeTab !== "workspace") return false;

  workspace.content = "";
  workspace.assistantMemory = createDefaultWorkspaceAssistantMemory();
  if (workspaceEditor && workspacePanel && !workspacePanel.hidden) {
    workspaceEditor.value = "";
    workspaceEditor.focus();
  }
  syncCurrentSessionFromHistory();
  renderWorkspaceUI({ focus: true });
  refreshWorkspaceDocumentToolbarState();
  return true;
}

function getWorkspaceContextForPrompt() {
  if (!isWorkspaceSessionActive()) return "";
  const current = getWorkspaceCurrentSession();
  if (!current) return "";
  const content = String(current.workspace.content || "").trim();
  if (!content) return "";
  return content.slice(0, 18000);
}

function isWorkspaceChattyLeadLine(line) {
  if (!line) return false;
  const normalized = line
    .replace(/^#{1,6}\s+/, "")
    .replace(/^[-*]\s+/, "")
    .trim();
  if (!normalized || normalized.length > 160) return false;

  if (
    /^(?:here(?:'s| is)|below is|this is)\b/i.test(normalized) &&
    (/:$/.test(normalized) || /\b(?:version|draft|rewrite|updated|improved|cleaned|document|copy|text|output|result)\b/i.test(normalized))
  ) {
    return true;
  }
  if (/^i(?:'ve| have)\s+(?:rewritten|updated|improved|cleaned|polished|revised)\b/i.test(normalized)) return true;
  if (/^(?:revised|updated|improved|cleaned|final)\s+(?:version|draft|document|copy|text)\s*:?$/i.test(normalized)) {
    return true;
  }
  return false;
}

function normalizeWorkspaceWriteBackText(replyText) {
  let value = String(replyText || "").trim();
  if (!value) return "";

  const fencedMatch = value.match(/^\s*```(?:[a-z0-9_-]+)?\s*\r?\n([\s\S]*?)\r?\n```\s*$/i);
  if (fencedMatch) {
    value = fencedMatch[1].trim();
  }

  value = value.replace(/^(?:assistant|rok|ai)\s*[:\-]\s*/i, "").trimStart();

  for (let i = 0; i < 4; i += 1) {
    const before = value;
    value = value
      .replace(WORKSPACE_CHAT_LEADIN_PATTERN, "")
      .replace(/^(?:here(?:'s| is)|below is|this is)\b[^:\n]{0,120}:\s*/i, "")
      .trimStart();

    const firstBreak = value.indexOf("\n");
    const firstLine = (firstBreak === -1 ? value : value.slice(0, firstBreak)).trim();
    if (isWorkspaceChattyLeadLine(firstLine)) {
      value = firstBreak === -1 ? "" : value.slice(firstBreak + 1).trimStart();
    }

    if (value === before) break;
  }

  const lines = value.split(/\r?\n/);
  while (lines.length) {
    const lastLine = lines[lines.length - 1].trim();
    if (!lastLine) {
      lines.pop();
      continue;
    }
    if (lastLine.length <= 160 && WORKSPACE_CHAT_OUTRO_PATTERN.test(lastLine)) {
      lines.pop();
      continue;
    }
    break;
  }

  return lines.join("\n").trim();
}

function isWorkspaceApplyModalOpen() {
  return Boolean(workspaceApplyModal && !workspaceApplyModal.hidden && workspaceApplyResolver);
}

function closeWorkspaceApplyModal(approved) {
  if (!workspaceApplyModal) return;

  const resolve = workspaceApplyResolver;
  workspaceApplyResolver = null;
  workspaceApplyModal.hidden = true;
  workspaceApplyModal.setAttribute("aria-hidden", "true");

  if (
    workspaceApplyLastFocusedElement instanceof HTMLElement &&
    workspaceApplyLastFocusedElement.isConnected &&
    typeof workspaceApplyLastFocusedElement.focus === "function"
  ) {
    workspaceApplyLastFocusedElement.focus();
  }
  workspaceApplyLastFocusedElement = null;

  if (typeof resolve === "function") {
    resolve(Boolean(approved));
  }
}

function getWorkspaceApplyFocusableButtons() {
  if (!workspaceApplyModal) return [];
  const buttons = workspaceApplyModal.querySelectorAll("button");
  return Array.from(buttons).filter((btn) => !btn.disabled && btn.offsetParent !== null);
}

function openWorkspaceApplyModal(replyText, options = {}) {
  if (
    !workspaceApplyModal ||
    !workspaceApplyModalIntro ||
    !workspaceApplyModalPreview ||
    !workspaceApplyConfirmBtn ||
    !workspaceApplyCancelBtn
  ) {
    return Promise.resolve(false);
  }

  const { stopped = false } = options;
  const text = String(replyText || "").trim();
  if (!text) return Promise.resolve(false);

  if (workspaceApplyResolver) {
    closeWorkspaceApplyModal(false);
  }

  const preview =
    text.length > WORKSPACE_APPLY_PREVIEW_CHARS
      ? `${text.slice(0, WORKSPACE_APPLY_PREVIEW_CHARS)}...`
      : text;
  workspaceApplyModalIntro.textContent = stopped
    ? "ROK generated a partial response for the workspace."
    : "ROK generated a response for the workspace.";
  workspaceApplyModalPreview.textContent = preview;

  workspaceApplyLastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  workspaceApplyModal.hidden = false;
  workspaceApplyModal.setAttribute("aria-hidden", "false");

  return new Promise((resolve) => {
    workspaceApplyResolver = resolve;
    requestAnimationFrame(() => {
      if (workspaceApplyConfirmBtn && !workspaceApplyModal.hidden) {
        workspaceApplyConfirmBtn.focus();
      }
    });
  });
}

function handleWorkspaceApplyModalKeydown(e) {
  if (!isWorkspaceApplyModalOpen()) return;

  if (e.key === "Escape") {
    e.preventDefault();
    closeWorkspaceApplyModal(false);
    return;
  }

  if (e.key !== "Tab") return;
  const focusable = getWorkspaceApplyFocusableButtons();
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement;

  if (e.shiftKey && active === first) {
    e.preventDefault();
    last.focus();
    return;
  }

  if (!e.shiftKey && active === last) {
    e.preventDefault();
    first.focus();
  }
}

async function confirmWorkspaceWriteBack(replyText, options = {}) {
  return openWorkspaceApplyModal(replyText, options);
}

async function appendAssistantReplyToWorkspace(replyText, options = {}) {
  const { stopped = false, sourcePrompt = "" } = options;
  if (!isWorkspaceSessionActive()) {
    return { applied: false, reason: "inactive", outputType: "Other", cleanText: "", changeScope: "Short" };
  }

  const current = getWorkspaceCurrentSession();
  if (!current) {
    return { applied: false, reason: "missing-session", outputType: "Other", cleanText: "", changeScope: "Short" };
  }

  if (workspaceEditor && workspacePanel && !workspacePanel.hidden) {
    current.workspace.content = workspaceEditor.value || current.workspace.content || "";
  }
  const base = String(current.workspace.content || "");

  const text = String(replyText || "").trim();
  if (!text) {
    return {
      applied: false,
      reason: "empty",
      outputType: inferWorkspaceOutputType("", sourcePrompt),
      cleanText: "",
      changeScope: "Short"
    };
  }
  const cleanText = normalizeWorkspaceWriteBackText(text);
  const outputType = inferWorkspaceOutputType(cleanText || text, sourcePrompt);
  const changeScope = determineWorkspaceChangeScope(cleanText, base);
  if (!cleanText) {
    return { applied: false, reason: "empty", outputType, cleanText: "", changeScope };
  }
  const approved = await confirmWorkspaceWriteBack(cleanText, { stopped });
  if (!approved) {
    return { applied: false, reason: "declined", outputType, cleanText, changeScope };
  }
  const trimmedBase = base.trimEnd();
  current.workspace.content = trimmedBase ? `${trimmedBase}\n\n${cleanText}` : cleanText;

  if (workspaceEditor && workspacePanel && !workspacePanel.hidden) {
    workspaceEditor.value = current.workspace.content;
    workspaceEditor.scrollTop = workspaceEditor.scrollHeight;
  }

  syncCurrentSessionFromHistory();
  refreshWorkspaceDocumentToolbarState();
  queueWorkspaceDocumentSavePulse("Applied", "saved", 1200);
  return {
    applied: true,
    reason: stopped ? "applied-stopped" : "applied",
    outputType,
    cleanText,
    changeScope
  };
}

function shouldUseStoryCanvasForPrompt(promptText) {
  const text = String(promptText || "").trim();
  if (!text) return false;
  if (!STORY_PROMPT_PATTERN.test(text)) return false;
  return true;
}

function looksLikeStoryText(text) {
  const value = String(text || "").trim();
  if (!value || value.length < STORY_MIN_CANVAS_CHARS) return false;
  if (value.includes("```")) return false;

  const paragraphCount = value.split(/\n\s*\n/).filter((part) => part.trim()).length;
  const dialogueCount = (value.match(/"/g) || []).length;
  const narrativeHint =
    /\b(once|chapter|suddenly|whispered|replied|asked|looked|walked|night|morning|forest|city|door|character|story)\b/i.test(
      value
    );

  return narrativeHint && (paragraphCount >= 2 || dialogueCount >= 2);
}

function createStoryCanvas() {
  const shell = document.createElement("section");
  shell.className = "story-canvas";

  const header = document.createElement("div");
  header.className = "story-canvas-header";

  const meta = document.createElement("div");
  meta.className = "story-canvas-meta";

  const title = document.createElement("span");
  title.className = "story-canvas-title";
  title.textContent = "Story Canvas";

  const status = document.createElement("span");
  status.className = "story-canvas-status";
  status.textContent = "Writing...";

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "story-canvas-toggle";
  toggle.textContent = "Expand";
  toggle.setAttribute("aria-expanded", "false");
  toggle.addEventListener("click", () => {
    const expanded = shell.classList.toggle("expanded");
    toggle.textContent = expanded ? "Collapse" : "Expand";
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    scrollToBottom();
  });

  const body = document.createElement("pre");
  body.className = "story-canvas-body";

  meta.appendChild(title);
  meta.appendChild(status);
  header.appendChild(meta);
  header.appendChild(toggle);
  shell.appendChild(header);
  shell.appendChild(body);

  const setStatus = (value) => {
    status.textContent = value;
  };

  return { shell, body, toggle, setStatus };
}

function updateStoryCanvasOutput(storyCanvas, text) {
  if (!storyCanvas) return;
  storyCanvas.body.textContent = text || "";
  storyCanvas.body.scrollTop = storyCanvas.body.scrollHeight;
}

function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${Math.round(kb)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

function truncateText(text, maxChars) {
  if (!text || text.length <= maxChars) return text || "";
  return text.slice(0, maxChars) + "\n...[truncated]";
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function makeSessionId() {
  return `s-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function sanitizeMessages(messages) {
  if (!Array.isArray(messages)) return [];
  const cleaned = [];
  for (const item of messages) {
    if (!item || typeof item !== "object") continue;
    const role = item.role === "assistant" ? "assistant" : item.role === "user" ? "user" : null;
    if (!role || typeof item.content !== "string") continue;
    const content = item.content.trim();
    if (!content) continue;
    cleaned.push({ role, content: item.content });
  }
  return cleaned;
}

function buildSessionTitle(messages) {
  const firstUser = (messages || []).find((m) => m && m.role === "user" && typeof m.content === "string" && m.content.trim());
  if (!firstUser) return "New Chat";
  const compact = firstUser.content.replace(/\s+/g, " ").trim();
  if (compact.length <= 40) return compact;
  return compact.slice(0, 40) + "...";
}

function createSession(messages = []) {
  const now = Date.now();
  const safeMessages = sanitizeMessages(messages);
  return {
    id: makeSessionId(),
    title: buildSessionTitle(safeMessages),
    createdAt: now,
    updatedAt: now,
    messages: safeMessages,
    model: DEFAULT_MODEL_ID,
    workspace: createDefaultWorkspace()
  };
}

function formatSessionTime(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

function sortSessionsByRecent() {
  sessions.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
}

function getSessionById(id) {
  return sessions.find((session) => session.id === id) || null;
}

function loadSessionsFromStorage() {
  try {
    const raw = localStorage.getItem(LOCAL_SESSIONS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    const seen = new Set();
    const loaded = [];
    for (const item of parsed) {
      if (!item || typeof item !== "object") continue;
      const id = typeof item.id === "string" && item.id ? item.id : makeSessionId();
      if (seen.has(id)) continue;
      seen.add(id);

      const safeMessages = sanitizeMessages(item.messages);
      const createdAt = Number.isFinite(Number(item.createdAt)) ? Number(item.createdAt) : Date.now();
      const updatedAt = Number.isFinite(Number(item.updatedAt)) ? Number(item.updatedAt) : createdAt;
      const title = typeof item.title === "string" && item.title.trim() ? item.title.trim() : buildSessionTitle(safeMessages);
      const workspace = normalizeWorkspace(item.workspace);
      const model = normalizeSessionModel(item.model);

      loaded.push({
        id,
        title: title || "New Chat",
        createdAt,
        updatedAt,
        messages: safeMessages,
        model,
        workspace
      });
    }

    return loaded;
  } catch {
    return [];
  }
}

function saveSessionsToStorage() {
  try {
    localStorage.setItem(LOCAL_SESSIONS_KEY, JSON.stringify(sessions));
  } catch {
    // Ignore storage write failures.
  }
}

function loadCurrentSessionIdFromStorage() {
  try {
    const raw = localStorage.getItem(LOCAL_CURRENT_SESSION_KEY);
    return typeof raw === "string" && raw ? raw : null;
  } catch {
    return null;
  }
}

function saveCurrentSessionIdToStorage() {
  try {
    if (currentSessionId) {
      localStorage.setItem(LOCAL_CURRENT_SESSION_KEY, currentSessionId);
    } else {
      localStorage.removeItem(LOCAL_CURRENT_SESSION_KEY);
    }
  } catch {
    // Ignore storage write failures.
  }
}

function updateCurrentSessionButton() {
  if (!currentSessionBtn) return;
  const current = getSessionById(currentSessionId);
  const label = current && current.title ? current.title : "Current Session";
  currentSessionBtn.textContent = `Current: ${label}`;
  currentSessionBtn.title = label;
}

function renderSavedSessions() {
  if (!savedChatsList) return;

  if (!sessions.length) {
    savedChatsList.innerHTML = '<div class="side-empty">No saved chats yet.</div>';
    return;
  }

  savedChatsList.innerHTML = sessions
    .map((session) => {
      const isActive = session.id === currentSessionId ? " active" : "";
      const safeId = escapeHtml(session.id);
      const safeTitle = escapeHtml(session.title || "Untitled Chat");
      const safeTime = escapeHtml(formatSessionTime(session.updatedAt));
      return `<div class="side-session-row${isActive}" data-session-row-id="${safeId}"><button class="side-item side-session-btn${isActive}" type="button" data-session-id="${safeId}" title="${safeTitle}"><span class="side-session-title">${safeTitle}</span><span class="side-session-time">${safeTime}</span></button><button class="session-delete-btn" type="button" data-delete-session-id="${safeId}" aria-label="Delete chat" title="Delete chat"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 3h6l1 2h4v2H4V5h4l1-2Zm1 6h2v9h-2V9Zm4 0h2v9h-2V9ZM7 9h2v9H7V9Z"/></svg></button></div>`;
    })
    .join("");
}

function syncCurrentSessionFromHistory() {
  const current = getSessionById(currentSessionId);
  if (!current) return;

  ensureSessionWorkspace(current);
  current.messages = history.map((item) => ({ role: item.role, content: item.content }));
  current.title = buildSessionTitle(current.messages);
  current.updatedAt = Date.now();
  sortSessionsByRecent();
  sessions = sessions.slice(0, MAX_LOCAL_SESSIONS);
  saveSessionsToStorage();
  saveCurrentSessionIdToStorage();
  updateCurrentSessionButton();
  renderSavedSessions();
}

function resetChatRuntimeState() {
  clearAttachments();
  nextAllowedAt = 0;
  if (cooldownTimer) {
    clearInterval(cooldownTimer);
    cooldownTimer = null;
  }
  if (cooldownEl) {
    cooldownEl.textContent = "";
  }
  refreshSendState();
}

function renderConversation(messages) {
  chat.innerHTML = "";
  history.length = 0;

  const safeMessages = sanitizeMessages(messages);
  for (const item of safeMessages) {
    history.push({ role: item.role, content: item.content });
    const displayRole = item.role === "assistant" ? "bot" : "user";
    const renderStoryCanvas = item.role === "assistant" && looksLikeStoryText(item.content);
    const rendered = addMessage(displayRole, item.content, {
      markdown: item.role === "assistant" && !renderStoryCanvas,
      storyCanvas: renderStoryCanvas
    });
    if (renderStoryCanvas && rendered.storyCanvas) {
      updateStoryCanvasOutput(rendered.storyCanvas, item.content);
      rendered.storyCanvas.setStatus("Complete");
      rendered.bubble.textContent = "Story ready. Use Expand to read.";
    }
  }

  hasShownReadyMessage = safeMessages.length > 0;
}

function openSession(sessionId, options = {}) {
  const { skipWorkspaceFlush = false } = options;
  if (isSending) {
    addMessage("system", "Stop generation before switching chats.");
    return;
  }

  if (!skipWorkspaceFlush) {
    flushPendingWorkspaceSave();
  }
  const target = getSessionById(sessionId);
  if (!target) return;
  ensureSessionWorkspace(target);

  currentSessionId = target.id;
  target.updatedAt = Date.now();
  sortSessionsByRecent();
  saveSessionsToStorage();
  saveCurrentSessionIdToStorage();

  hideHomeScreen();
  wasWorkspaceTabActive = false;
  resetChatRuntimeState();
  renderConversation(target.messages);
  updateCurrentSessionButton();
  renderSavedSessions();
  renderWorkspaceUI({ focus: true });
}

function deleteSession(sessionId) {
  if (isSending) {
    addMessage("system", "Stop generation before deleting chats.");
    return;
  }

  const index = sessions.findIndex((session) => session.id === sessionId);
  if (index < 0) return;

  const wasCurrent = sessionId === currentSessionId;
  sessions.splice(index, 1);

  if (!sessions.length) {
    const next = createSession([]);
    sessions.push(next);
  }

  let fallbackSessionId = null;
  if (wasCurrent) {
    const fallbackIndex = Math.min(index, sessions.length - 1);
    const fallback = sessions[fallbackIndex];
    fallbackSessionId = fallback ? fallback.id : sessions[0].id;
    currentSessionId = fallbackSessionId;
  }

  saveSessionsToStorage();
  saveCurrentSessionIdToStorage();
  updateCurrentSessionButton();
  renderSavedSessions();

  if (wasCurrent && fallbackSessionId) {
    openSession(fallbackSessionId, { skipWorkspaceFlush: true });
  }
}

function startNewSession(showNotice) {
  if (isSending) {
    addMessage("system", "Stop generation before starting a new chat.");
    return;
  }

  flushPendingWorkspaceSave();
  const next = createSession([]);
  sessions.unshift(next);
  sortSessionsByRecent();
  sessions = sessions.slice(0, MAX_LOCAL_SESSIONS);
  currentSessionId = next.id;
  saveSessionsToStorage();
  saveCurrentSessionIdToStorage();

  hideHomeScreen();
  wasWorkspaceTabActive = false;
  clearChat(showNotice);
  updateCurrentSessionButton();
  renderSavedSessions();
  renderWorkspaceUI({ focus: true });
}

function initializeSessions() {
  sessions = loadSessionsFromStorage();
  sortSessionsByRecent();
  sessions = sessions.slice(0, MAX_LOCAL_SESSIONS);

  if (!sessions.length) {
    sessions = [createSession([])];
  }

  const storedCurrent = loadCurrentSessionIdFromStorage();
  currentSessionId = storedCurrent && getSessionById(storedCurrent) ? storedCurrent : sessions[0].id;

  saveSessionsToStorage();
  saveCurrentSessionIdToStorage();
  updateCurrentSessionButton();
  renderSavedSessions();

  const current = getSessionById(currentSessionId);
  if (current) {
    ensureSessionWorkspace(current);
    renderConversation(current.messages);
    renderWorkspaceUI({ focus: false });
  }
}

function chooseNextHomeDemoIndex() {
  const count = HOME_DEMO_SCENARIOS.length;
  if (count <= 1) return 0;

  let nextIndex = Math.floor(Math.random() * count);
  while (nextIndex === homeDemoLastIndex) {
    nextIndex = Math.floor(Math.random() * count);
  }
  return nextIndex;
}

function renderHomeDemoCards(cards) {
  if (!homeDemoCards) return;
  const items = Array.isArray(cards) ? cards.slice(0, 5) : [];
  homeDemoCards.innerHTML = items
    .map((card, index) => `<div class="home-bg-card"><strong>${index + 1}.</strong> ${escapeHtml(card)}</div>`)
    .join("");
}

function restartHomeDemoAnimation() {
  if (!homeDemoChat) return;
  homeDemoChat.classList.remove("is-animating");
  void homeDemoChat.offsetWidth;
  homeDemoChat.classList.add("is-animating");
}

function rotateHomeDemoScenario() {
  if (!homeDemoChat || !homeDemoPrompt || !homeDemoReply || !homeDemoCards || !HOME_DEMO_SCENARIOS.length) {
    return;
  }

  const nextIndex = chooseNextHomeDemoIndex();
  const scenario = HOME_DEMO_SCENARIOS[nextIndex];
  if (!scenario) return;

  homeDemoPrompt.textContent = scenario.prompt;
  homeDemoReply.textContent = scenario.reply;
  renderHomeDemoCards(scenario.cards);
  homeDemoLastIndex = nextIndex;
  restartHomeDemoAnimation();
}

function startHomeDemoRotation() {
  if (!homeDemoChat) return;
  rotateHomeDemoScenario();
  if (homeDemoTimer) {
    clearInterval(homeDemoTimer);
  }
  homeDemoTimer = setInterval(rotateHomeDemoScenario, HOME_DEMO_LOOP_MS);
}

function stopHomeDemoRotation() {
  if (homeDemoTimer) {
    clearInterval(homeDemoTimer);
    homeDemoTimer = null;
  }
  if (homeDemoChat) {
    homeDemoChat.classList.remove("is-animating");
  }
}

function isTextLikeFile(file) {
  const type = (file.type || "").toLowerCase();
  if (type.startsWith("text/")) return true;

  const name = (file.name || "").toLowerCase();
  return (
    name.endsWith(".txt") ||
    name.endsWith(".md") ||
    name.endsWith(".csv") ||
    name.endsWith(".json") ||
    name.endsWith(".js") ||
    name.endsWith(".ts") ||
    name.endsWith(".py") ||
    name.endsWith(".html") ||
    name.endsWith(".css") ||
    name.endsWith(".java") ||
    name.endsWith(".c") ||
    name.endsWith(".cpp") ||
    name.endsWith(".h") ||
    name.endsWith(".hpp")
  );
}

function renderAttachments() {
  if (!attachmentList) return;

  if (!attachments.length) {
    attachmentList.innerHTML = "";
    return;
  }

  attachmentList.innerHTML = attachments
    .map((item) => {
      const safeName = escapeHtml(item.name);
      return `<div class="attachment-pill"><span class="attachment-name" title="${safeName}">${safeName} (${formatFileSize(item.size)})</span><button class="attachment-remove" type="button" data-id="${item.id}" aria-label="Remove file">x</button></div>`;
    })
    .join("");
}

function clearAttachments() {
  attachments.length = 0;
  if (fileInput) {
    fileInput.value = "";
  }
  renderAttachments();
}

function removeAttachmentById(id) {
  if (isSending) return;

  const index = attachments.findIndex((item) => item.id === id);
  if (index >= 0) {
    attachments.splice(index, 1);
    renderAttachments();
  }
}

function buildMessageWithAttachments(text, workspaceContext = "") {
  const promptText = text || (workspaceContext ? "Please review and improve the workspace content." : "(No text prompt provided)");
  const sections = [promptText];

  if (workspaceContext) {
    sections.push(`ROK Workspace content:\n${workspaceContext}`);
  }

  if (attachments.length) {
    const blocks = attachments
      .map((item) => `File: ${item.name}\n${item.content}`)
      .join("\n\n");
    sections.push(`Attached file contents:\n\n${blocks}`);
  }

  return sections.join("\n\n");
}

async function addSelectedFiles(fileList) {
  if (isSending) return;

  const files = Array.from(fileList || []);
  if (!files.length) return;

  for (const file of files) {
    if (attachments.length >= MAX_ATTACHMENTS) {
      addMessage("system", `Attachment limit reached (${MAX_ATTACHMENTS} files).`);
      break;
    }
    if (file.size > MAX_FILE_SIZE_BYTES) {
      addMessage("system", `${file.name} is too large. Max ${formatFileSize(MAX_FILE_SIZE_BYTES)} per file.`);
      continue;
    }
    if (!isTextLikeFile(file)) {
      addMessage("system", `${file.name} is not a supported text file.`);
      continue;
    }

    try {
      const content = await file.text();
      attachments.push({
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        name: file.name,
        size: file.size,
        content: truncateText(content, MAX_FILE_CHARS)
      });
    } catch {
      addMessage("system", `Could not read ${file.name}.`);
    }
  }

  if (fileInput) {
    fileInput.value = "";
  }
  renderAttachments();
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
  const { markdown = false, storyCanvas = false } = options;

  const row = document.createElement("div");
  row.className = "msg " + role;

  const bubble = document.createElement("div");
  bubble.className = "bubble plain";

  if (role === "system") {
    bubble.textContent = text;
    row.appendChild(bubble);
    chat.appendChild(row);
    scrollToBottom();
    return { row, bubble, storyCanvas: null };
  }

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = role === "user" ? "Y" : "R";

  if (role === "bot" && storyCanvas) {
    bubble.classList.add("story-status");
    bubble.textContent = text || "Writing story in canvas...";

    const stack = document.createElement("div");
    stack.className = "bot-stack";

    const canvas = createStoryCanvas();
    stack.appendChild(bubble);
    stack.appendChild(canvas.shell);

    row.appendChild(avatar);
    row.appendChild(stack);
    chat.appendChild(row);
    scrollToBottom();
    return { row, bubble, storyCanvas: canvas };
  }

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
  return { row, bubble, storyCanvas: null };
}

function updateSendButtonUI(cooldownActive) {
  if (!sendBtn) return;

  if (isSending) {
    sendBtn.disabled = false;
    sendBtn.classList.add("stop-mode");
    sendBtn.textContent = "";
    sendBtn.setAttribute("aria-label", "Stop generation");
    sendBtn.setAttribute("title", "Stop generation");
    return;
  }

  sendBtn.classList.remove("stop-mode");
  sendBtn.textContent = "Send";
  sendBtn.removeAttribute("aria-label");
  sendBtn.removeAttribute("title");
  sendBtn.disabled = cooldownActive;
}

function stopGeneration() {
  if (!isSending) return;
  stopRequested = true;
  if (activeRequestController) {
    activeRequestController.abort();
  }
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
  updateSendButtonUI(cooldownActive);

  if (attachBtn) {
    attachBtn.disabled = isSending;
  }
  if (fileInput) {
    fileInput.disabled = isSending;
  }
  if (modelSelect) {
    modelSelect.disabled = isSending;
  }

  if (cooldownActive) {
    updateCooldownUI();
  } else if (cooldownEl) {
    cooldownEl.textContent = "";
  }

  refreshWorkspaceDocumentToolbarState();
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
  clearAttachments();
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
  syncCurrentSessionFromHistory();
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
      if (stopRequested) {
        const partial = fullText.slice(0, i);
        if (partial) {
          setBubbleContent(bubble, partial, true);
        } else {
          bubble.textContent = "(Stopped)";
        }
        scrollToBottom();
        resolve();
        return;
      }

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

function typeInStoryCanvas(storyCanvas, statusBubble, fullText) {
  updateStoryCanvasOutput(storyCanvas, "");
  if (statusBubble) {
    statusBubble.textContent = "Writing story in canvas...";
  }
  storyCanvas.setStatus("Writing...");

  const length = fullText.length;
  const chunk = length > 2200 ? 14 : length > 1200 ? 8 : length > 500 ? 4 : 2;

  return new Promise((resolve) => {
    let i = 0;
    const step = () => {
      if (stopRequested) {
        const partial = fullText.slice(0, i);
        updateStoryCanvasOutput(storyCanvas, partial);
        if (statusBubble) {
          statusBubble.textContent = partial
            ? `Story stopped at ${partial.length.toLocaleString()} chars.`
            : "(Stopped)";
        }
        storyCanvas.setStatus("Stopped");
        scrollToBottom();
        resolve();
        return;
      }

      if (i >= length) {
        updateStoryCanvasOutput(storyCanvas, fullText);
        if (statusBubble) {
          statusBubble.textContent = "Story ready. Use Expand to read.";
        }
        storyCanvas.setStatus("Complete");
        scrollToBottom();
        resolve();
        return;
      }

      const partial = fullText.slice(0, i);
      updateStoryCanvasOutput(storyCanvas, partial);
      if (statusBubble) {
        statusBubble.textContent = `Writing story... ${partial.length.toLocaleString()} chars`;
      }
      i += chunk;
      scrollToBottom();
      setTimeout(step, TYPING_SPEED_MS);
    };
    step();
  });
}

async function send() {
  hideHomeScreen();
  const text = input.value.trim();
  const sessionModel = getCurrentSessionModel();
  const wasWorkspaceActive = isWorkspaceSessionActive();
  const sessionWorkspaceContext = getWorkspaceContextFromSession();
  const intent = classifyPromptIntent(text, sessionWorkspaceContext, attachments);
  const writeBackToWorkspace = Boolean(intent.routeToWorkspace);
  const useStoryCanvas = !writeBackToWorkspace && shouldUseStoryCanvasForPrompt(text);
  const workspaceContext = writeBackToWorkspace || wasWorkspaceActive ? sessionWorkspaceContext : "";
  const hasWorkspaceContext = Boolean(workspaceContext);
  const requestedOutputType = intent.outputType || inferWorkspaceOutputType("", text);
  if (!text && attachments.length === 0 && !workspaceContext) return;
  if (isSending) return;
  if (isWorkspaceSuggestionLoading) return;

  if (Date.now() < nextAllowedAt) {
    startCooldownTimer();
    refreshSendState();
    return;
  }

  if (writeBackToWorkspace && !isWorkspaceSessionActive()) {
    setActiveWorkspaceTab("workspace", { focus: false });
  } else if (!writeBackToWorkspace && isWorkspaceSessionActive()) {
    setActiveWorkspaceTab("chat", { focus: false });
  }

  const recentHistory = history.slice(-HISTORY_LIMIT);

  let displayText = text;
  if (!displayText) {
    if (workspaceContext && attachments.length) {
      displayText = `Review my workspace and ${attachments.length} file(s).`;
    } else if (workspaceContext) {
      displayText = "Review my workspace content.";
    } else {
      displayText = `Uploaded ${attachments.length} file(s).`;
    }
  }
  const messageForApi = buildMessageWithAttachments(text, workspaceContext);

  addMessage("user", displayText);
  history.push({ role: "user", content: displayText });
  if (history.length > 200) {
    history.splice(0, history.length - 200);
  }
  syncCurrentSessionFromHistory();

  input.value = "";
  autoResizeInput();
  input.focus();

  stopRequested = false;
  activeRequestController = new AbortController();
  isSending = true;
  nextAllowedAt = Date.now() + COOLDOWN_MS;
  startCooldownTimer();
  refreshSendState();
  if (writeBackToWorkspace) {
    setWorkspaceAssistantGenerationPhase(WORKSPACE_GENERATION_PHASES.reviewing, {
      intentText: hasWorkspaceContext
        ? "Reviewing workspace document context to prepare a clean insertion draft."
        : "Preparing document-ready content from your prompt.",
      outputTypeText: requestedOutputType,
      summaryText: WORKSPACE_GENERATION_PHASES.reviewing,
      triggerFadeIn: true
    });
  }

  const typing = addMessage(
    "system",
    writeBackToWorkspace
      ? `ROK classified this as ${intent.label.toLowerCase()} and is drafting in Workspace.`
      : "ROK is thinking..."
  );
  let bubble = null;
  let storyCanvas = null;
  let partialText = "";

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: buildApiHeaders(true),
      signal: activeRequestController.signal,
      body: JSON.stringify({ message: messageForApi, history: recentHistory, model: sessionModel })
    });

    const contentType = (res.headers.get("content-type") || "").toLowerCase();

    if (!res.ok || contentType.includes("text/html")) {
      let errorMessage = "Request failed.";
      let errorBody = "";
      try {
        const data = await res.json();
        errorMessage = data.reply || data.error || errorMessage;
      } catch {
        errorBody = await res.text();
        if (errorBody) errorMessage = errorBody;
      }

      if (isLikelyTunnelDownResponse(res.status, contentType, errorBody)) {
        showServerDownScreen();
        throw new Error("Server is currently down. Check back later.");
      }

      throw new Error(errorMessage);
    }

    hideServerDownScreen();
    typing.row.remove();
    if (writeBackToWorkspace) {
      setWorkspaceAssistantGenerationPhase(WORKSPACE_GENERATION_PHASES.drafting, {
        intentText: hasWorkspaceContext
          ? "Generating a workspace-aware draft aligned to your document."
          : "Generating a document-ready draft from your request.",
        outputTypeText: requestedOutputType,
        summaryText: WORKSPACE_GENERATION_PHASES.drafting
      });
    }

    if (!writeBackToWorkspace) {
      const botMsg = addMessage("bot", useStoryCanvas ? "Writing story in canvas..." : "", {
        storyCanvas: useStoryCanvas
      });
      bubble = botMsg.bubble;
      storyCanvas = botMsg.storyCanvas;
      if (!storyCanvas) {
        bubble.classList.remove("markdown");
        bubble.classList.add("plain");
        bubble.textContent = "";
      }
    }

    const reader = res.body && res.body.getReader ? res.body.getReader() : null;

    if (!reader) {
      const reply = (await res.text()) || "(No response)";
      partialText = reply;
      if (!writeBackToWorkspace) {
        if (storyCanvas) {
          await typeInStoryCanvas(storyCanvas, bubble, reply);
        } else {
          await typeIn(bubble, reply);
        }
        if (stopRequested) {
          return;
        }
        if (storyCanvas) {
          bubble.textContent = "Story ready. Use Expand to read.";
          storyCanvas.setStatus("Complete");
        }
        history.push({ role: "assistant", content: reply });
        if (history.length > 200) {
          history.splice(0, history.length - 200);
        }
        syncCurrentSessionFromHistory();
      }

      if (writeBackToWorkspace) {
        const resolvedOutputType = inferWorkspaceOutputType(reply, text);
        setWorkspaceAssistantGenerationPhase(WORKSPACE_GENERATION_PHASES.preparing, {
          intentText: hasWorkspaceContext
            ? "Finalizing clean workspace-ready output from document context."
            : "Finalizing clean workspace-ready output from prompt context.",
          outputTypeText: resolvedOutputType,
          summaryText: WORKSPACE_GENERATION_PHASES.preparing
        });
        const writeBackResult = await appendAssistantReplyToWorkspace(reply, { sourcePrompt: text });
        finalizeWorkspaceAssistantGeneration(writeBackResult, {
          stopped: false,
          hasWorkspaceContext
        });
      }
      clearAttachments();
      return;
    }

    const decoder = new TextDecoder("utf-8");
    let lastFlush = 0;
    const flush = () => {
      if (writeBackToWorkspace) {
        return;
      }
      if (storyCanvas) {
        updateStoryCanvasOutput(storyCanvas, partialText);
        storyCanvas.setStatus("Writing...");
        bubble.textContent = partialText
          ? `Writing story... ${partialText.length.toLocaleString()} chars`
          : "Writing story in canvas...";
      } else {
        bubble.textContent = partialText;
      }
      scrollToBottom();
    };

    const isEventStream = contentType.includes("text/event-stream");
    let buffer = "";
    let streamEnded = false;

    const handleToken = (token) => {
      partialText += token;
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
      if (stopRequested) {
        throw new DOMException("Generation stopped by user.", "AbortError");
      }
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
        partialText += tail;
      }
    }

    if (!partialText) {
      partialText = "(No response)";
    }

    if (!writeBackToWorkspace) {
      flush();
      if (storyCanvas) {
        storyCanvas.setStatus("Complete");
        bubble.textContent = "Story ready. Use Expand to read.";
      } else {
        setBubbleContent(bubble, partialText, true);
      }
      history.push({ role: "assistant", content: partialText });
      if (history.length > 200) {
        history.splice(0, history.length - 200);
      }
      syncCurrentSessionFromHistory();
    }

    if (writeBackToWorkspace) {
      const resolvedOutputType = inferWorkspaceOutputType(partialText, text);
      setWorkspaceAssistantGenerationPhase(WORKSPACE_GENERATION_PHASES.preparing, {
        intentText: hasWorkspaceContext
          ? "Finalizing clean workspace-ready output from document context."
          : "Finalizing clean workspace-ready output from prompt context.",
        outputTypeText: resolvedOutputType,
        summaryText: WORKSPACE_GENERATION_PHASES.preparing
      });
      const writeBackResult = await appendAssistantReplyToWorkspace(partialText, { sourcePrompt: text });
      finalizeWorkspaceAssistantGeneration(writeBackResult, {
        stopped: false,
        hasWorkspaceContext
      });
    }
    clearAttachments();
  } catch (err) {
    if (typing.row.isConnected) {
      typing.row.remove();
    }

    const errName = err && err.name ? err.name : "";
    if (stopRequested || errName === "AbortError") {
      if (partialText) {
        if (!writeBackToWorkspace && bubble) {
          if (storyCanvas) {
            updateStoryCanvasOutput(storyCanvas, partialText);
            storyCanvas.setStatus("Stopped");
            bubble.textContent = `Story stopped at ${partialText.length.toLocaleString()} chars.`;
          } else {
            setBubbleContent(bubble, partialText, true);
          }
          history.push({ role: "assistant", content: partialText });
          if (history.length > 200) {
            history.splice(0, history.length - 200);
          }
          syncCurrentSessionFromHistory();
        }

        if (writeBackToWorkspace) {
          const resolvedOutputType = inferWorkspaceOutputType(partialText, text);
          setWorkspaceAssistantGenerationPhase(WORKSPACE_GENERATION_PHASES.preparing, {
            intentText: "Finalizing partial output after stop request.",
            outputTypeText: resolvedOutputType,
            summaryText: WORKSPACE_GENERATION_PHASES.preparing
          });
          const writeBackResult = await appendAssistantReplyToWorkspace(partialText, {
            stopped: true,
            sourcePrompt: text
          });
          finalizeWorkspaceAssistantGeneration(writeBackResult, {
            stopped: true,
            hasWorkspaceContext
          });
        }
      } else {
        if (!writeBackToWorkspace && bubble) {
          if (storyCanvas) {
            storyCanvas.setStatus("Stopped");
          }
          bubble.textContent = "(Stopped)";
        }

        if (writeBackToWorkspace) {
          const stoppedSummary = buildWorkspaceStructuredSummary(
            "Generation was stopped before workspace output was produced.",
            requestedOutputType,
            "Not Applied",
            "Short"
          );
          const stoppedMetrics = getWorkspaceDocumentMetrics(getWorkspaceDocumentText());
          updateWorkspaceAssistantPanelState({
            tone: "pending",
            statusText: "Pending",
            intentText: "Generation was stopped before workspace output was produced.",
            outputTypeText: requestedOutputType,
            wordCountText: `${stoppedMetrics.wordCount}`,
            readTimeText: `${stoppedMetrics.readTimeMinutes} min`,
            actionText: "Not Applied",
            changeScopeText: "Short",
            lastActionText: "Generation stopped before document-ready content was available.",
            summaryText: stoppedSummary,
            suggestions: null
          });
          setCurrentWorkspaceAssistantMemory({
            lastAction: "Generation stopped before document-ready content was available.",
            intent: "Generation was stopped before workspace output was produced.",
            outputType: requestedOutputType,
            action: "Not Applied",
            changeScope: "Short",
            summary: stoppedSummary,
            tone: "pending",
            statusText: "Pending",
            suggestions: null
          });
        }
      }
      return;
    }

    if (isLikelyTunnelDownError(err)) {
      if (writeBackToWorkspace) {
        const unavailableSummary = buildWorkspaceStructuredSummary(
          "Could not complete workspace generation due to connectivity issues.",
          requestedOutputType,
          "Not Applied",
          "Short"
        );
        const unavailableMetrics = getWorkspaceDocumentMetrics(getWorkspaceDocumentText());
        updateWorkspaceAssistantPanelState({
          tone: "pending",
          statusText: "Pending",
          intentText: "Could not complete workspace generation due to connectivity issues.",
          outputTypeText: requestedOutputType,
          wordCountText: `${unavailableMetrics.wordCount}`,
          readTimeText: `${unavailableMetrics.readTimeMinutes} min`,
          actionText: "Not Applied",
          changeScopeText: "Short",
          lastActionText: "Generation failed due to connectivity issues.",
          summaryText: unavailableSummary,
          suggestions: null
        });
        setCurrentWorkspaceAssistantMemory({
          lastAction: "Generation failed due to connectivity issues.",
          intent: "Could not complete workspace generation due to connectivity issues.",
          outputType: requestedOutputType,
          action: "Not Applied",
          changeScope: "Short",
          summary: unavailableSummary,
          tone: "pending",
          statusText: "Pending",
          suggestions: null
        });
      }
      showServerDownScreen();
      return;
    }

    if (writeBackToWorkspace) {
      const errorSummary = buildWorkspaceStructuredSummary(
        "Workspace generation ended with an error.",
        requestedOutputType,
        "Not Applied",
        "Short"
      );
      const errorMetrics = getWorkspaceDocumentMetrics(getWorkspaceDocumentText());
      updateWorkspaceAssistantPanelState({
        tone: "pending",
        statusText: "Pending",
        intentText: "Workspace generation ended with an error.",
        outputTypeText: requestedOutputType,
        wordCountText: `${errorMetrics.wordCount}`,
        readTimeText: `${errorMetrics.readTimeMinutes} min`,
        actionText: "Not Applied",
        changeScopeText: "Short",
        lastActionText: "Generation failed before insertion.",
        summaryText: errorSummary,
        suggestions: null
      });
      setCurrentWorkspaceAssistantMemory({
        lastAction: "Generation failed before insertion.",
        intent: "Workspace generation ended with an error.",
        outputType: requestedOutputType,
        action: "Not Applied",
        changeScope: "Short",
        summary: errorSummary,
        tone: "pending",
        statusText: "Pending",
        suggestions: null
      });
    }

    addMessage("system", "Error: " + err.message);
  } finally {
    activeRequestController = null;
    stopRequested = false;
    isSending = false;
    refreshSendState();
  }
}

sendBtn.addEventListener("click", () => {
  if (isSending) {
    stopGeneration();
    return;
  }
  send();
});

if (attachBtn && fileInput) {
  attachBtn.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", (e) => addSelectedFiles(e.target.files));
}

if (attachmentList) {
  attachmentList.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const id = target.getAttribute("data-id");
    if (!id) return;
    removeAttachmentById(id);
  });
}

input.addEventListener("input", autoResizeInput);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
    e.preventDefault();
    send();
  }
});

if (workspaceAssistantToggle) {
  workspaceAssistantToggle.addEventListener("click", () => {
    setWorkspaceAssistantExpanded(!workspaceAssistantExpanded);
  });
}

if (workspaceAssistantSuggestBtn) {
  workspaceAssistantSuggestBtn.addEventListener("click", async () => {
    await requestWorkspaceSuggestions();
  });
}

if (workspaceApplyModal) {
  workspaceApplyModal.addEventListener("click", (e) => {
    if (e.target === workspaceApplyModal) {
      closeWorkspaceApplyModal(false);
    }
  });
}

if (workspaceApplyConfirmBtn) {
  workspaceApplyConfirmBtn.addEventListener("click", () => {
    closeWorkspaceApplyModal(true);
  });
}

if (workspaceApplyCancelBtn) {
  workspaceApplyCancelBtn.addEventListener("click", () => {
    closeWorkspaceApplyModal(false);
  });
}

if (workspaceApplyCloseBtn) {
  workspaceApplyCloseBtn.addEventListener("click", () => {
    closeWorkspaceApplyModal(false);
  });
}

document.addEventListener("keydown", handleWorkspaceApplyModalKeydown);

if (workspaceEditor) {
  workspaceEditor.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey && e.key.toLowerCase() === "s") {
      e.preventDefault();
      flushPendingWorkspaceSave();
      queueWorkspaceDocumentSavePulse("Saved", "saved", 900);
    }
  });

  workspaceEditor.addEventListener("input", () => {
    const current = getWorkspaceCurrentSession();
    if (!current) return;
    current.workspace.content = workspaceEditor.value || "";
    queueWorkspaceSave();
    refreshWorkspaceDocumentToolbarState();
    setWorkspaceDocumentSaveState("Typing...", "idle");
    syncWorkspaceAssistantContextState();
  });
}

if (workspaceCopyBtn) {
  workspaceCopyBtn.addEventListener("click", async () => {
    await copyWorkspaceDocumentToClipboard();
  });
}

if (workspaceDownloadBtn) {
  workspaceDownloadBtn.addEventListener("click", () => {
    downloadWorkspaceDocument();
  });
}

if (workspaceImproveBtn) {
  workspaceImproveBtn.addEventListener("click", async () => {
    if (!isWorkspaceSessionActive()) return;
    await requestWorkspaceSuggestions();
  });
}

if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    if (clearActiveWorkspaceTab()) return;
    clearChat(true);
  });
}

if (newChatBtn) {
  newChatBtn.addEventListener("click", () => startNewSession(true));
}

if (currentSessionBtn) {
  currentSessionBtn.addEventListener("click", () => {
    if (!currentSessionId) return;
    openSession(currentSessionId);
  });
}

if (savedChatsList) {
  savedChatsList.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    const deleteBtn = target.closest("[data-delete-session-id]");
    if (deleteBtn instanceof Element) {
      const deleteId = deleteBtn.getAttribute("data-delete-session-id");
      if (!deleteId) return;
      deleteSession(deleteId);
      return;
    }
    const sessionBtn = target.closest("[data-session-id]");
    if (!(sessionBtn instanceof Element)) return;
    const sessionId = sessionBtn.getAttribute("data-session-id");
    if (!sessionId) return;
    openSession(sessionId);
  });
}

if (modelSelect) {
  modelSelect.addEventListener("change", () => {
    setCurrentSessionModel(modelSelect.value);
  });
}

if (modelOptionList) {
  modelOptionList.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    const optionBtn = target.closest("[data-model-option]");
    if (!(optionBtn instanceof Element)) return;
    const modelId = optionBtn.getAttribute("data-model-option");
    if (!modelId) return;
    setCurrentSessionModel(modelId);
  });
}

if (workspaceTabs) {
  workspaceTabs.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    const tabBtn = target.closest("[data-workspace-tab]");
    if (!(tabBtn instanceof Element)) return;
    const tab = tabBtn.getAttribute("data-workspace-tab");
    if (!tab) return;
    setActiveWorkspaceTab(tab, { focus: true });
  });
}

if (serverDownRetryBtn) {
  serverDownRetryBtn.addEventListener("click", () => {
    retryServerConnection();
  });
}

if (serverDownHomeBtn) {
  serverDownHomeBtn.addEventListener("click", () => {
    hideServerDownScreen();
    showHomeScreen();
  });
}

if (serverDownWhyBtn) {
  serverDownWhyBtn.addEventListener("click", () => {
    toggleServerDownWhyPanel();
  });
}

if (brandHomeBtn) {
  brandHomeBtn.addEventListener("click", () => showHomeScreen());
}

if (homeStartBtn) {
  homeStartBtn.addEventListener("click", () => {
    hideHomeScreen();
    checkServerOnBoot();
    renderWorkspaceUI({ focus: true });
  });
}

autoResizeInput();
refreshSendState();
setWorkspaceAssistantSuggestButtonLoading(false);
renderModelSelectOptions();
renderModelPanelOptions();
initializeSessions();
refreshWorkspaceDocumentToolbarState();
refreshModelCatalogFromServer();
showHomeScreen();
