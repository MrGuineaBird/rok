const chat = document.getElementById("chat");
const workspaceTabs = document.getElementById("workspaceTabs");
const workspaceSidebarTabs = document.getElementById("workspaceSidebarTabs");
const workspacePanel = document.getElementById("workspacePanel");
const modelPanel = document.getElementById("modelPanel");
const mathPanel = document.getElementById("mathPanel");
const mathChatToggleBtn = document.getElementById("mathChatToggleBtn");
const mathChatDrawer = document.getElementById("mathChatDrawer");
const mathChatCloseBtn = document.getElementById("mathChatCloseBtn");
const mathChatMessages = document.getElementById("mathChatMessages");
const mathChatInput = document.getElementById("mathChatInput");
const mathChatSendBtn = document.getElementById("mathChatSendBtn");
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
const composerToolbox = document.getElementById("composerToolbox");
const composerPlusBtn = document.getElementById("composerPlusBtn");
const composerTray = document.getElementById("composerTray");
const attachBtn = document.getElementById("attachBtn");
const webToggleBtn = document.getElementById("webToggleBtn");
const lightningToggleBtn = document.getElementById("lightningToggleBtn");
const lightningToggleIcon = lightningToggleBtn ? lightningToggleBtn.querySelector(".lightning-icon") : null;
const lightningToggleLabel = lightningToggleBtn ? lightningToggleBtn.querySelector(".lightning-label") : null;
const fileInput = document.getElementById("fileInput");
const attachmentList = document.getElementById("attachmentList");
const brandHomeBtn = document.getElementById("brandHomeBtn");
const homeScreen = document.getElementById("homeScreen");
const homeStartBtn = document.getElementById("homeStartBtn");
const clearBtn = document.getElementById("clearBtn");
const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
const modelSelect = document.getElementById("modelSelect");
const newChatBtn = document.getElementById("newChatBtn");
const currentSessionBtn = document.getElementById("currentSessionBtn");
const savedChatsList = document.getElementById("savedChatsList");
const cooldownEl = document.getElementById("cooldown");
const appRoot = document.querySelector(".app");
const banOverlay = document.getElementById("banOverlay");
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
const workspaceRouteModal = document.getElementById("workspaceRouteModal");
const workspaceRoutePrompt = document.getElementById("workspaceRoutePrompt");
const workspaceRouteYesBtn = document.getElementById("workspaceRouteYesBtn");
const workspaceRouteNoBtn = document.getElementById("workspaceRouteNoBtn");
const workspaceRouteCloseBtn = document.getElementById("workspaceRouteCloseBtn");
const legalModal = document.getElementById("legalModal");
const legalCloseBtn = document.getElementById("legalCloseBtn");
const legalTermsTab = document.getElementById("legalTermsTab");
const legalPrivacyTab = document.getElementById("legalPrivacyTab");
const legalCreditsTab = document.getElementById("legalCreditsTab");
const legalTermsPanel = document.getElementById("legalTermsPanel");
const legalPrivacyPanel = document.getElementById("legalPrivacyPanel");
const legalCreditsPanel = document.getElementById("legalCreditsPanel");
const legalLinkButtons = document.querySelectorAll("[data-legal]");
const composerWrap = document.querySelector(".composer-wrap");
const sidebar = document.querySelector(".sidebar");
const homeDemoChat = document.querySelector(".home-bg-chat");
const homeDemoPrompt = document.getElementById("homeDemoPrompt");
const homeDemoReply = document.getElementById("homeDemoReply");
const homeDemoCards = document.getElementById("homeDemoCards");
const homeWorkspacePreview = document.getElementById("homeWorkspacePreview");
const homePreviewLineElements = Array.from(document.querySelectorAll("[data-preview-line]"));

const runtimeConfig = (typeof window !== "undefined" && window.ROK_CONFIG) ? window.ROK_CONFIG : {};
const runtimeApiBase =
  (typeof window !== "undefined" && typeof window.ROK_API_BASE === "string") ? window.ROK_API_BASE : "";
const ROK_API_BASE = String(runtimeApiBase || "").trim().replace(/\/+$/, "");
const buildApiUrl = (path) => `${ROK_API_BASE}${path}`;
const API_URL = buildApiUrl("/api/chat");
const INTENT_URL = buildApiUrl("/api/intent");
const STATUS_URL = buildApiUrl("/api/status");
const MODELS_URL = buildApiUrl("/api/models");
const CLIENT_CONFIG_URL = buildApiUrl("/api/client-config");
const AUTH_SESSION_URL = buildApiUrl("/api/auth/session");
const BAN_GUARD_PATHS = new Set(["/api/chat", "/api/intent", "/api/status", "/api/models"]);
const DEFAULT_CLIENT_LIMITS = {
  typingSpeedMs: 12,
  cooldownMs: 1000,
  historyLimit: 20,          // was 200 — large history balloons every request payload
  maxHistoryMessages: 20,    // was 200
  maxAttachments: 3,
  maxFileSizeBytes: 2 * 1024 * 1024,   // was 200MB — capped at 2MB
  maxFileChars: 8000,        // was 12000
  maxResponseTokens: 2048    // was 600 on client but 8192 on server; aligned to server default
};
const clientLimits = { ...DEFAULT_CLIENT_LIMITS };
const LOCAL_SESSIONS_KEY = "rok.localChatSessions.v1";
const LOCAL_CURRENT_SESSION_KEY = "rok.currentSessionId.v1";
const LOCAL_SIDEBAR_COLLAPSED_KEY = "rok.sidebarCollapsed.v1";
const LOCAL_LIGHTNING_MODE_KEY = "rok.lightningMode.v1";
const USER_SETTINGS_KEY = "rok.settings.v1";
const LOCAL_LAST_MODEL_KEY = "rok.lastModelId.v1";
const MAX_LOCAL_SESSIONS = 30;
const DEFAULT_CHAT_MODEL = "stepfun/step-3.5-flash:free";
const DEFAULT_USER_SETTINGS = {
  defaultModel: DEFAULT_CHAT_MODEL,
  rememberModel: true,
  maxSessions: MAX_LOCAL_SESSIONS,
  historyLimit: DEFAULT_CLIENT_LIMITS.historyLimit,
  cooldownMs: DEFAULT_CLIENT_LIMITS.cooldownMs,
  typingSpeed: DEFAULT_CLIENT_LIMITS.typingSpeedMs,
  enterToSend: true,
  autoScroll: true,
  accentColor: "#d14b4b",
  compactMode: false,
  reduceMotion: false,
  customSystemPrompt: ""
};
const SUPPORTED_MODEL_IDS = new Set([
  "stepfun/step-3.5-flash:free",
]);
const DEFAULT_MODEL_OPTIONS = [
  { id: "stepfun/step-3.5-flash:free", label: "ROK Hermes" },
];
const KNOWN_MODEL_LABELS = {
  "stepfun/step-3.5-flash:free": "ROK Hermes",
};
const MODEL_DESCRIPTIONS = {
  "stepfun/step-3.5-flash:free": "Hermes — swift and sharp. Fast responses for quick questions, experiments, and everyday drafting.",
};
const WORKSPACE_TAB_KEYS = ["chat", "workspace", "model", "math"];
const MOBILE_LAYOUT_MEDIA_QUERY = "(max-width: 980px)";
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
const HOME_PREVIEW_REVEAL_DELAY_MS = 260;
const HOME_PREVIEW_LINE_DELAY_MS = 180;
const HOME_PREVIEW_TYPING_SPEED_MS = 14;
const STORY_MIN_CANVAS_CHARS = 260;
const INTENT_HISTORY_CONTEXT_LIMIT = 6;
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
  // yes these are ai generated server down messages..cry about it
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
  "ROK is currently on a coffee run.",
  "ROK is taking a quick power nap.",
  "ROK is currently on a lunch break.",
  "ROK is out exploring the world. Back soon!",
  "ROK is currently on a secret mission. Stay tuned!",

  // --- Space Theme ---
  "ROK has entered low earth orbit. Stand by.",
  "ROK is floating in a tin can, far above the world.",
  "Houston, we have a problem. ROK is offline.",
  "ROK is currently navigating an asteroid belt.",
  "ROK is refueling at a nearby space station.",
  "Lost contact with ROK. Re-establishing uplink.",
  "ROK is currently witnessing a supernova. Back soon.",
  "ROK is on a spacewalk, fixing some cosmic dust in its circuits.",
  "ROK is currently exploring a new galaxy. Please wait for its return.",
  "ROK is currently in hypersleep mode, dreaming of stars.",
  "ROK is currently avoiding a meteor shower. Safety first in space!",
  "ROK is currently communicating with alien lifeforms. Back soon.",
  "ROK is currently caught in a time warp. Please hold on.",
  "ROK is currently experiencing a solar flare. Please wait for it to pass.",
  "ROK is currently orbiting a black hole. It’s a bit slow right now.",
  "ROK is currently on a mission to Mars. Communication delay expected.",

  // --- Construction Theme ---
  "ROK is wearing a hard hat right now. Safety first!",
  "Under construction. ROK is laying new foundations.",
  "ROK is currently being remodeled.",
  "Pardon the dust. ROK is rebuilding.",
  "ROK is currently waiting for the cement to dry.",
  "A few loose bricks. ROK is patching things up.",
  "ROK is currently redirecting traffic. Hold on.",

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
let homePreviewRunToken = 0;
let workspaceSaveTimer = null;
let workspaceApplyResolver = null;
let workspaceApplyLastFocusedElement = null;
let workspaceRouteResolver = null;
let workspaceRouteLastFocusedElement = null;
let workspaceAssistantExpanded = false;
let wasWorkspaceTabActive = false;
let isWorkspaceSuggestionLoading = false;
let isIntentClassificationLoading = false;
let workspaceAssistantFadeTimer = null;
let workspaceDocSaveStateTimer = null;
let isBanOverlayActive = false;
let isSidebarCollapsed = false;
let isMobileLayout = false;
let isMobileSidebarOpen = false;
let mobileLayoutMediaQueryList = null;
let desmosCalculator = null;

let isMathChatDrawerOpen = false;
let userSettings = { ...DEFAULT_USER_SETTINGS };
let compactingBarElement = null;
let compactingBarTimer = null;
let composerTrayOpen = false;
let webSearchEnabled = false;
let lightning_mode = false;

const hasMarked = typeof marked !== "undefined";
if (hasMarked) {
  marked.setOptions({ breaks: true, gfm: true });
}

function sanitizeModelId(rawModel) {
  let value = String(rawModel || "").trim().toLowerCase();
  if (value === "llava:latest") value = "llava-llama3";
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
    const displayLabel = KNOWN_MODEL_LABELS[id] || label || id;
    normalized.push({
      id,
      label: displayLabel
    });
  }

  if (!normalized.length) {
    normalized.push({
      id: DEFAULT_CHAT_MODEL,
      label: "ROK Quality"
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
  const preferredDefaultModelId = getPreferredDefaultModelId();
  const nextDefaultModelId = resolveDefaultModelId(nextOptions, preferredDefaultModelId || rawDefaultModel);
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
    const res = await fetchWithBanGuard(MODELS_URL, {
      method: "GET",
      headers: {
        ...buildApiHeaders(false),
        Accept: "application/json"
      }
    });
    if (isBanOverlayActive) return false;
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

function getCustomSystemPromptHeaderValue() {
  try {
    const rawSettings = localStorage.getItem(USER_SETTINGS_KEY);
    if (!rawSettings) return "";
    const parsed = JSON.parse(rawSettings);
    if (!parsed || typeof parsed !== "object") return "";
    const customPrompt = typeof parsed.customSystemPrompt === "string" ? parsed.customSystemPrompt.trim() : "";
    return customPrompt;
  } catch {
    return "";
  }
}

function buildApiHeaders(includeJson) {
  const headers = {};
  if (includeJson) {
    headers["Content-Type"] = "application/json";
    const customSystemPrompt = getCustomSystemPromptHeaderValue();
    if (customSystemPrompt) {
      headers["X-Custom-System-Prompt"] = customSystemPrompt;
    }
  }
  return headers;
}

function getApiPathFromUrl(url) {
  try {
    const parsed = new URL(String(url || ""), window.location.href);
    return parsed.pathname || "";
  } catch {
    const raw = String(url || "");
    const idx = raw.indexOf("/api/");
    if (idx === -1) return "";
    return raw.slice(idx).split("?")[0];
  }
}

function isBanGuardPath(url) {
  const path = getApiPathFromUrl(url);
  return BAN_GUARD_PATHS.has(path);
}

function showBanOverlay() {
  if (isBanOverlayActive) return;
  isBanOverlayActive = true;
  if (banOverlay) {
    banOverlay.hidden = false;
  }
  if (appRoot) {
    appRoot.classList.add("is-ban-locked");
  }
  if (serverDownScreen) {
    serverDownScreen.hidden = true;
  }
  stopHomeDemoRotation();
  stopHomeWorkspacePreview();
}

async function fetchWithBanGuard(url, options) {
  const requestOptions = { ...(options || {}) };
  const response = await fetch(url, requestOptions);
  if (response && response.status === 403 && isBanGuardPath(url)) {
    showBanOverlay();
  }
  return response;
}

async function safeReadResponseText(response) {
  if (!response || response.bodyUsed) {
    return "";
  }
  try {
    return await response.text();
  } catch {
    return "";
  }
}



function extractTokenFromStreamPayload(payload) {
  const raw = String(payload || "").trim();
  if (!raw) {
    return { token: "", thinking: "", status: "", done: false };
  }
  if (raw === "[DONE]") {
    return { token: "", thinking: "", status: "", done: true };
  }
  if (raw[0] !== "{") {
    return { token: raw, thinking: "", status: "", done: false };
  }

  let parsed = null;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return { token: raw, thinking: "", status: "", done: false };
  }
  if (!parsed || typeof parsed !== "object") {
    return { token: "", thinking: "", status: "", done: false };
  }

  const done = Boolean(parsed.done);
  const thinking = typeof parsed.thinking === "string" ? parsed.thinking : "";
  const status = typeof parsed.status === "string" ? parsed.status : "";
  for (const key of ["token", "response", "reply", "text", "message", "content"]) {
    const value = parsed[key];
    if (typeof value === "string") {
      return { token: value, thinking, status, done };
    }
  }

  if (parsed.message && typeof parsed.message === "object" && typeof parsed.message.content === "string") {
    return { token: parsed.message.content, thinking, status, done };
  }

  if (Array.isArray(parsed.choices)) {
    let joined = "";
    let choiceDone = false;
    for (const choice of parsed.choices) {
      if (!choice || typeof choice !== "object") continue;
      if (choice.finish_reason) {
        choiceDone = true;
      }
      if (typeof choice.text === "string") {
        joined += choice.text;
        continue;
      }
      if (choice.delta && typeof choice.delta === "object" && typeof choice.delta.content === "string") {
        joined += choice.delta.content;
        continue;
      }
      if (choice.message && typeof choice.message === "object" && typeof choice.message.content === "string") {
        joined += choice.message.content;
      }
    }
    if (joined) {
      return { token: joined, thinking, status, done: done || choiceDone };
    }
    if (done || choiceDone) {
      return { token: "", thinking: "", status, done: true };
    }
  }

  return { token: "", thinking, status, done };
}

function splitThinkingFromText(text = "") {
  const value = String(text || "");
  if (!value.includes("<think>")) {
    return { answer: value, thinking: "" };
  }

  const thinkingParts = [];
  const answer = value.replace(/<think>([\s\S]*?)<\/think>/gi, (_, block) => {
    const normalized = String(block || "").trim();
    if (normalized) {
      thinkingParts.push(normalized);
    }
    return "";
  });

  return {
    answer: answer.trim(),
    thinking: thinkingParts.join("\n\n").trim()
  };
}

function createThinkingPanel() {
  const shell = document.createElement("details");
 
  shell.className = "thinking-block is-streaming";
  shell.hidden = true;
  shell.open = false;

  const summary = document.createElement("summary");
  summary.className = "thinking-summary";

  const summaryMain = document.createElement("span");
  summaryMain.className = "thinking-summary-main";

  const summaryIcon = document.createElement("span");
  summaryIcon.className = "thinking-summary-icon";
  summaryIcon.setAttribute("aria-hidden", "true");
  summaryIcon.textContent = "◷";

  const summaryLabel = document.createElement("span");
  summaryLabel.className = "thinking-summary-label";
  summaryLabel.textContent = "Thinking...";

  const summaryArrow = document.createElement("span");
  summaryArrow.className = "thinking-summary-arrow";
  summaryArrow.setAttribute("aria-hidden", "true");
  summaryArrow.textContent = "›";

  summaryMain.appendChild(summaryIcon);
  summaryMain.appendChild(summaryLabel);
  summary.appendChild(summaryMain);
  summary.appendChild(summaryArrow);

  const body = document.createElement("pre");
  body.className = "thinking-body";

  shell.appendChild(summary);
  shell.appendChild(body);

  return { shell, summary, summaryLabel, body };
}

function normalizeThinkingTitle(rawValue = "") {
  const collapsed = String(rawValue || "")
    .replace(/[\r\n]+/g, " ")
    .replace(/["'`]/g, " ")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!collapsed) {
    return "";
  }

  return collapsed
    .split(" ")
    .filter(Boolean)
    .slice(0, 7)
    .join(" ");
}

async function readChatTextResponse(response) {
  if (!response) {
    return "";
  }

  const contentType = (response.headers.get("content-type") || "").toLowerCase();
  if (!response.ok) {
    const errorText = await safeReadResponseText(response);
    throw new Error(errorText || `Request failed (${response.status})`);
  }

  const reader = response.body && response.body.getReader ? response.body.getReader() : null;
  if (!reader) {
    const bodyText = await safeReadResponseText(response);
    const separated = splitThinkingFromText(bodyText);
    return separated.answer || bodyText || "";
  }

  const decoder = new TextDecoder("utf-8");
  const isEventStream = contentType.includes("text/event-stream");
  const parseAsJsonLines = !isEventStream && (contentType.includes("json") || contentType.includes("ndjson"));
  let buffer = "";
  let plainBuffer = "";
  let answer = "";
  let streamEnded = false;

  const appendToken = (token) => {
    if (typeof token === "string" && token) {
      answer += token;
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
      if (!line.startsWith("data:")) {
        continue;
      }
      const parsedPayload = extractTokenFromStreamPayload(line.slice(5));
      if (parsedPayload.token) {
        appendToken(parsedPayload.token);
      }
      if (parsedPayload.done) {
        streamEnded = true;
        return;
      }
    }
  };

  const processPlainBuffer = (flushRemainder = false) => {
    let idx;
    while ((idx = plainBuffer.indexOf("\n")) >= 0) {
      let line = plainBuffer.slice(0, idx);
      plainBuffer = plainBuffer.slice(idx + 1);
      if (line.endsWith("\r")) {
        line = line.slice(0, -1);
      }
      if (!line.trim()) {
        continue;
      }
      const parsedPayload = extractTokenFromStreamPayload(line);
      if (parsedPayload.token) {
        appendToken(parsedPayload.token);
      }
      if (parsedPayload.done) {
        streamEnded = true;
        return;
      }
    }

    if (!flushRemainder) {
      return;
    }

    const remainder = plainBuffer.trim();
    plainBuffer = "";
    if (!remainder) {
      return;
    }

    const parsedPayload = extractTokenFromStreamPayload(remainder);
    if (parsedPayload.token) {
      appendToken(parsedPayload.token);
    }
    if (parsedPayload.done) {
      streamEnded = true;
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
      continue;
    }

    if (parseAsJsonLines) {
      plainBuffer += chunk;
      processPlainBuffer(false);
      if (streamEnded) break;
      continue;
    }

    appendToken(chunk);
  }

  const tail = decoder.decode();
  if (tail) {
    if (isEventStream) {
      buffer += tail;
      processBuffer();
    } else if (parseAsJsonLines) {
      plainBuffer += tail;
      processPlainBuffer(true);
    } else {
      appendToken(tail);
    }
  } else if (parseAsJsonLines) {
    processPlainBuffer(true);
  }

  const separated = splitThinkingFromText(answer);
  return separated.answer || answer || "";
}

async function generateThinkingTitle(thinkingText = "", modelId = "") {
  const excerpt = String(thinkingText || "")
    .replace(/[\r\n]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120);

  if (!excerpt) {
    return "";
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);
  try {
    const prompt = [
      "Return only a 4 to 7 word title for this reasoning excerpt.",
      "No punctuation.",
      "No quotes.",
      "No markdown.",
      "No explanation.",
      `Excerpt: ${excerpt}`
    ].join("\n");
    const res = await fetchWithBanGuard(API_URL, {
      method: "POST",
      headers: buildApiHeaders(true),
      signal: controller.signal,
    
      body: JSON.stringify({
        message: prompt,
        history: [],
        model: modelId || getCurrentSessionModel(),
        max_tokens: 24,
        skip_tools: true,
        enable_thinking: !lightning_mode
      })
    });
    return normalizeThinkingTitle(await readChatTextResponse(res));
  } finally {
    clearTimeout(timeoutId);
  }
}

function normalizeClientLimit(value, fallback, min = 0, max = Number.MAX_SAFE_INTEGER) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  const rounded = Math.round(parsed);
  return Math.min(max, Math.max(min, rounded));
}

function normalizeHexColor(value, fallback = "#d14b4b") {
  const candidate = String(value || "").trim();
  if (/^#[0-9a-fA-F]{6}$/.test(candidate)) {
    return candidate.toLowerCase();
  }
  return fallback;
}

function loadUserSettingsFromStorage() {
  try {
    const raw = localStorage.getItem(USER_SETTINGS_KEY);
    if (!raw) return { ...DEFAULT_USER_SETTINGS };
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return { ...DEFAULT_USER_SETTINGS };
    return { ...DEFAULT_USER_SETTINGS, ...parsed };
  } catch {
    return { ...DEFAULT_USER_SETTINGS };
  }
}

function loadLastModelFromStorage() {
  try {
    const raw = localStorage.getItem(LOCAL_LAST_MODEL_KEY);
    return sanitizeModelId(raw);
  } catch {
    return "";
  }
}

function saveLastModelToStorage(modelId) {
  try {
    const normalized = sanitizeModelId(modelId);
    if (!normalized) {
      localStorage.removeItem(LOCAL_LAST_MODEL_KEY);
      return;
    }
    localStorage.setItem(LOCAL_LAST_MODEL_KEY, normalized);
  } catch {
    // Ignore storage write failures.
  }
}

function loadLightningModeFromStorage() {
  try {
    return localStorage.getItem(LOCAL_LIGHTNING_MODE_KEY) === "1";
  } catch {
    return false;
  }
}

function saveLightningModeToStorage(enabled) {
  try {
    localStorage.setItem(LOCAL_LIGHTNING_MODE_KEY, enabled ? "1" : "0");
  } catch {
    // Ignore storage write failures.
  }
}

// --- Thinking quota helpers ---
// Quota is stored as { count: number, resetAt: timestamp }.
// resetAt is set to now + 24h on the first thinking-enabled message of a window.

// --- Server-side thinking quota (state comes from server, cannot be faked in localStorage) ---
// Updated by refreshClientConfigFromServer() on boot and by applyThinkingQuotaFromHeaders()
// after each chat response. The server enforces the real limit; this is UI-only.
let serverThinkingQuota = { count: 0, limit: 10, exhausted: false, resetSec: 0, updatedAt: 0 };

function applyServerThinkingQuota(quota) {
  if (!quota || typeof quota !== "object") return;
  serverThinkingQuota = {
    count:     typeof quota.count     === "number"  ? quota.count     : serverThinkingQuota.count,
    limit:     typeof quota.limit     === "number"  ? quota.limit     : serverThinkingQuota.limit,
    exhausted: typeof quota.exhausted === "boolean" ? quota.exhausted : serverThinkingQuota.exhausted,
    resetSec:  typeof quota.reset_sec === "number"  ? quota.reset_sec : serverThinkingQuota.resetSec,
    updatedAt: Date.now(),
  };
  // Sync the button state whenever quota data arrives
  if (serverThinkingQuota.exhausted && !lightning_mode) {
    setLightningModeEnabled(true, { animate: false });
  } else {
    refreshLightningButtonQuotaUI();
  }
}

function applyThinkingQuotaFromHeaders(response) {
  // Called after each /api/chat response to get the freshest quota state
  const count     = parseInt(response.headers.get("X-Thinking-Count") || "", 10);
  const limit     = parseInt(response.headers.get("X-Thinking-Limit") || "", 10);
  const exhausted = (response.headers.get("X-Thinking-Exhausted") || "").toLowerCase() === "true";
  const resetSec  = parseInt(response.headers.get("X-Thinking-Reset-Sec") || "0", 10);
  if (!isNaN(count) && !isNaN(limit)) {
    applyServerThinkingQuota({ count, limit, exhausted, reset_sec: resetSec });
    if (exhausted) {
      showThinkingQuotaToast(
        `Thinking limit reached (${limit}/day). Resets in ${formatThinkingResetTime(resetSec * 1000)}.  Lightning mode is now on.`
      );
    }
  }
}

function isThinkingQuotaExhausted() {
  return serverThinkingQuota.exhausted;
}

function getThinkingQuotaRemaining() {
  return Math.max(0, serverThinkingQuota.limit - serverThinkingQuota.count);
}

function getThinkingQuotaLimit() {
  return serverThinkingQuota.limit;
}

function getThinkingQuotaResetSec() {
  return serverThinkingQuota.resetSec;
}

function formatThinkingResetTime(ms) {
  const totalMinutes = Math.ceil(ms / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours > 0 && minutes > 0) return `${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h`;
  return `${minutes}m`;
}

function showThinkingQuotaToast(message) {
  let toast = document.getElementById("thinkingQuotaToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "thinkingQuotaToast";
    toast.style.cssText = [
      "position:fixed", "bottom:80px", "left:50%", "transform:translateX(-50%)",
      "background:var(--surface-2,#2a2a2a)", "color:var(--text-1,#eee)",
      "border:1px solid var(--border,#444)", "border-radius:8px",
      "padding:10px 16px", "font-size:13px", "z-index:9999",
      "max-width:340px", "text-align:center", "box-shadow:0 4px 16px rgba(0,0,0,0.3)",
      "pointer-events:none", "opacity:0", "transition:opacity 0.2s"
    ].join(";");
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = "1";
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => { toast.style.opacity = "0"; }, 5000);
}

function refreshLightningButtonQuotaUI() {
  if (!lightningToggleBtn) return;
  const exhausted = isThinkingQuotaExhausted();
  const remaining = getThinkingQuotaRemaining();
  const limit     = getThinkingQuotaLimit();
  const resetSec  = getThinkingQuotaResetSec();
  if (exhausted) {
    lightningToggleBtn.title    = `Thinking limit reached (${limit}/day). Resets in ${formatThinkingResetTime(resetSec * 1000)}.`;
    lightningToggleBtn.disabled = true;
  } else {
    lightningToggleBtn.title    = lightning_mode
      ? `Click to enable Thinking mode (${remaining}/${limit} uses left today)`
      : `Thinking mode on — ${remaining}/${limit} uses left today`;
    lightningToggleBtn.disabled = false;
  }
}
// --- End server-side thinking quota ---

function getPreferredDefaultModelId() {
  const preferredConfigured = sanitizeModelId(userSettings.defaultModel);
  if (userSettings.rememberModel) {
    const lastModel = loadLastModelFromStorage();
    if (lastModel) {
      return lastModel;
    }
  }
  return preferredConfigured;
}

function getMaxLocalSessionsValue() {
  return normalizeClientLimit(userSettings.maxSessions, MAX_LOCAL_SESSIONS, 5, 100);
}

function applyUserSettingsToRuntime(options = {}) {
  const { syncModelDefaults = true } = options;
  userSettings = loadUserSettingsFromStorage();

  userSettings.accentColor = normalizeHexColor(userSettings.accentColor, DEFAULT_USER_SETTINGS.accentColor);
  document.documentElement.style.setProperty("--accent", userSettings.accentColor);
  if (document.body) {
    document.body.classList.toggle("settings-compact", Boolean(userSettings.compactMode));
    document.body.classList.toggle("settings-reduce-motion", Boolean(userSettings.reduceMotion));
  }

  clientLimits.typingSpeedMs = normalizeClientLimit(
    userSettings.typingSpeed,
    clientLimits.typingSpeedMs,
    1,
    500
  );
  clientLimits.cooldownMs = normalizeClientLimit(
  
    userSettings.cooldownMs,
    clientLimits.cooldownMs,
    0,
    60000
  );
  clientLimits.historyLimit = normalizeClientLimit(
    userSettings.historyLimit,
    clientLimits.historyLimit,
    1,
    1000
  );
  clientLimits.maxHistoryMessages = clientLimits.historyLimit;
  trimHistoryToLimit();

  if (syncModelDefaults) {
    DEFAULT_MODEL_ID = resolveDefaultModelId(MODEL_OPTIONS, getPreferredDefaultModelId() || DEFAULT_MODEL_ID);
    syncModelSelectorWithCurrentSession();
    syncModelPanelWithCurrentSession();
  }
}

function getHistoryLimitValue() {
  return normalizeClientLimit(clientLimits.historyLimit, DEFAULT_CLIENT_LIMITS.historyLimit, 1, 1000);
}

function getMaxHistoryMessagesValue() {
  return normalizeClientLimit(
    clientLimits.maxHistoryMessages,
    getHistoryLimitValue(),
    1,
    1000
  );
}

function trimHistoryToLimit() {
  const maxItems = getHistoryLimitValue();
  if (history.length > maxItems) {
    history.splice(0, history.length - maxItems);
  }
}

function applyClientLimitsFromServer(rawLimits) {
  if (!rawLimits || typeof rawLimits !== "object") return;
  clientLimits.typingSpeedMs = normalizeClientLimit(
    rawLimits.typing_speed_ms,
    clientLimits.typingSpeedMs,
    1,
    500
  );
  clientLimits.cooldownMs = normalizeClientLimit(
    rawLimits.cooldown_ms,
    clientLimits.cooldownMs,
    0,
    60000
  );
  const rawHistoryLimit = rawLimits.max_history_messages ?? rawLimits.history_limit;
  clientLimits.historyLimit = normalizeClientLimit(
    rawHistoryLimit,
    clientLimits.historyLimit,
    1,
    1000
  );
  clientLimits.maxHistoryMessages = clientLimits.historyLimit;
  clientLimits.maxAttachments = normalizeClientLimit(
    rawLimits.max_attachments,
    clientLimits.maxAttachments,
    0,
    50
  );
  clientLimits.maxFileSizeBytes = normalizeClientLimit(
    rawLimits.max_file_size_bytes,
    clientLimits.maxFileSizeBytes,
    1,
    1024 * 1024 * 1024
  );
  clientLimits.maxFileChars = normalizeClientLimit(
    rawLimits.max_file_chars,
    clientLimits.maxFileChars,
    1,
    2_000_000
  );
  clientLimits.maxResponseTokens = normalizeClientLimit(
    rawLimits.max_response_tokens,
    clientLimits.maxResponseTokens,
    1,
    8000
  );
  trimHistoryToLimit();
}

async function refreshClientConfigFromServer() {
  try {
    const res = await fetchWithBanGuard(CLIENT_CONFIG_URL, {
      method: "GET",
      headers: {
        ...buildApiHeaders(false),
        Accept: "application/json"
      }
    });
    if (isBanOverlayActive) return false;
    if (!res.ok) return false;

    const contentType = (res.headers.get("content-type") || "").toLowerCase();
    if (!contentType.includes("application/json")) return false;

    const payload = await res.json();
    const limits =
      payload && typeof payload === "object" && payload.limits && typeof payload.limits === "object"
        ? payload.limits
        : payload;
    if (!limits || typeof limits !== "object") return false;
    applyClientLimitsFromServer(limits);
    // Apply server-provided thinking quota (authoritative — replaces any stale UI state)
    if (payload && typeof payload === "object" && payload.thinking_quota) {
      applyServerThinkingQuota(payload.thinking_quota);
    }
    applyUserSettingsToRuntime({ syncModelDefaults: false });
    refreshSendState();
    return true;
  } catch {
    return false;
  }
}

async function bootstrapServerSession() {
  try {
    await fetchWithBanGuard(AUTH_SESSION_URL, {
      method: "GET",
      cache: "no-store",
      headers: {
        ...buildApiHeaders(false),
        Accept: "application/json"
      }
    });
  } catch {
    // Session bootstrap is best-effort.
  }
}

function showServerDownScreen() {
  stopHomeDemoRotation();
  stopHomeWorkspacePreview();
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

function loadSidebarCollapsedFromStorage() {
  try {
    return localStorage.getItem(LOCAL_SIDEBAR_COLLAPSED_KEY) === "1";
  } catch {
    return false;
  }
}

function saveSidebarCollapsedToStorage(collapsed) {
  try {
    localStorage.setItem(LOCAL_SIDEBAR_COLLAPSED_KEY, collapsed ? "1" : "0");
  } catch {
    // Ignore storage write failures.
  }
}

function isMobileLayoutViewport() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia(MOBILE_LAYOUT_MEDIA_QUERY).matches;
}

function setSidebarToggleButtonState() {
  if (!sidebarToggleBtn) return;
  const icon = sidebarToggleBtn.querySelector("span");

  if (isMobileLayout) {
    const isExpanded = isMobileSidebarOpen;
    const label = isExpanded ? "Close menu" : "Open menu";
    const iconText = isExpanded ? "x" : "=";
    sidebarToggleBtn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    sidebarToggleBtn.setAttribute("aria-label", label);
    sidebarToggleBtn.title = label;
    if (icon instanceof HTMLElement) {
      icon.textContent = iconText;
    } else {
      sidebarToggleBtn.textContent = iconText;
    }
    return;
  }

  const isExpanded = !isSidebarCollapsed;
  const label = isExpanded ? "Collapse left panel" : "Expand left panel";
  sidebarToggleBtn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
  sidebarToggleBtn.setAttribute("aria-label", label);
  sidebarToggleBtn.title = label;
  if (icon instanceof HTMLElement) {
    icon.textContent = isExpanded ? "<" : ">";
  } else {
    sidebarToggleBtn.textContent = isExpanded ? "<" : ">";
  }
}

function applyMobileSidebarState(open) {
  isMobileSidebarOpen = Boolean(open);
  if (appRoot) {
    appRoot.classList.toggle("mobile-sidebar-open", isMobileLayout && isMobileSidebarOpen);
  }
  setSidebarToggleButtonState();
}

function closeMobileSidebarIfNeeded() {
  if (!isMobileLayout || !isMobileSidebarOpen) return;
  applyMobileSidebarState(false);
}

function syncLayoutForViewport() {
  const nextIsMobile = isMobileLayoutViewport();
  if (nextIsMobile !== isMobileLayout) {
    isMobileLayout = nextIsMobile;
    if (isMobileLayout) {
      if (appRoot) {
        appRoot.classList.remove("sidebar-collapsed");
      }
      applyMobileSidebarState(false);
      return;
    }
    applyMobileSidebarState(false);
    applySidebarCollapsedState(isSidebarCollapsed, { persist: false });
    return;
  }

  if (appRoot && !isMobileLayout) {
    appRoot.classList.remove("mobile-sidebar-open");
  }
  setSidebarToggleButtonState();
}

function applySidebarCollapsedState(collapsed, options = {}) {
  const { persist = true } = options;
  isSidebarCollapsed = Boolean(collapsed);
  if (appRoot) {
    if (isMobileLayout) {
      appRoot.classList.remove("sidebar-collapsed");
    } else {
      appRoot.classList.toggle("sidebar-collapsed", isSidebarCollapsed);
    }
  }
  setSidebarToggleButtonState();
  if (persist) {
    saveSidebarCollapsedToStorage(isSidebarCollapsed);
  }
}

function showHomeScreen() {
  storeWorkspaceDraftsFromWindows();
  flushPendingWorkspaceSave();
  closeMobileSidebarIfNeeded();
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
  if (workspaceSidebarTabs) {
    workspaceSidebarTabs.hidden = true;
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
  void startHomeWorkspacePreview();
}

function hideHomeScreen() {
  stopHomeDemoRotation();
  stopHomeWorkspacePreview();
  closeMobileSidebarIfNeeded();
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
  if (workspaceSidebarTabs) {
    workspaceSidebarTabs.hidden = false;
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

function isLikelyServerDownResponse(status, contentType, bodyText) {
  if ([502, 503, 504, 521, 522, 523, 524].includes(status)) {
    return true;
  }

  if (!contentType.includes("text/html")) {
    return false;
  }

  const lowerBody = (bodyText || "").toLowerCase();
  return (
    lowerBody.includes("bad gateway") ||
    lowerBody.includes("service unavailable") ||
    lowerBody.includes("gateway timeout") ||
    lowerBody.includes("server error")
  );
}

function isLikelyServerDownError(err) {
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
    const res = await fetchWithBanGuard(STATUS_URL, {
      method: "GET",
      cache: "no-store",
      headers: {
        ...buildApiHeaders(false),
        Accept: "application/json"
      }
    });

    if (isBanOverlayActive) {
      return false;
    }

    const contentType = (res.headers.get("content-type") || "").toLowerCase();
    const bodyText = await safeReadResponseText(res);

    if (!res.ok) {
      showServerDownScreen();
      return false;
    }

    if (isLikelyServerDownResponse(res.status, contentType, bodyText)) {
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
    await refreshClientConfigFromServer();
    return true;
  } catch (err) {
    if (isLikelyServerDownError(err)) {
      showServerDownScreen();
    }
    return false;
  }
}

async function retryServerConnection() {
  if (isBanOverlayActive) {
    return;
  }
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
  if (!chat) return;
  if (!userSettings.autoScroll) return;
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

function getWorkspaceTabContainers() {
  return [workspaceTabs, workspaceSidebarTabs].filter((node) => node instanceof HTMLElement);
}

function updateWorkspaceTabButtons(activeTab) {
  const containers = getWorkspaceTabContainers();
  if (!containers.length) return;
  containers.forEach((container) => {
    const tabButtons = container.querySelectorAll("[data-workspace-tab]");
    tabButtons.forEach((btn) => {
      const tab = btn.getAttribute("data-workspace-tab");
      const isActive = tab === activeTab;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });
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
  saveLastModelToStorage(nextModel);
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

function classifyPromptIntentFallback(promptText = "", workspaceText = "", attachedFiles = []) {
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

function normalizeIntentClassification(rawIntent, fallbackIntent, promptText = "") {
  const fallback = fallbackIntent || classifyPromptIntentFallback(promptText, "", []);
  const typeAliases = {
    story: "story",
    fiction: "story",
    roleplay: "story",
    creative_writing: "story",
    document: "document",
    workspace: "document",
    draft: "document",
    code: "code",
    coding: "code",
    programming: "code",
    general_chat: "general_chat",
    general: "general_chat",
    chat: "general_chat",
    conversation: "general_chat"
  };
  const outputAliases = {
    story: "Story",
    fiction: "Story",
    narrative: "Story",
    poem: "Story",
    lyrics: "Story",
    essay: "Essay",
    article: "Essay",
    report: "Essay",
    memo: "Essay",
    proposal: "Essay",
    letter: "Essay",
    notes: "Notes",
    study_guide: "Notes",
    studyguide: "Notes",
    flashcards: "Notes",
    summary: "Summary",
    outline: "Summary",
    recap: "Summary",
    code: "Code",
    other: "Other"
  };
  const labelMap = {
    story: "Story",
    document: "Document",
    code: "Code",
    general_chat: "General chat"
  };

  const rawType = String(rawIntent && (rawIntent.type || rawIntent.intent || rawIntent.label) || "")
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, "_");
  const type = typeAliases[rawType] || fallback.type;
  const routeToWorkspace = type === "story" || type === "document";

  const rawOutput = String(rawIntent && (rawIntent.output_type || rawIntent.outputType || rawIntent.output) || "")
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, "_");
  let outputType = outputAliases[rawOutput] || fallback.outputType || inferWorkspaceOutputType("", promptText);
  if (type === "story") {
    outputType = "Story";
  } else if (type === "code") {
    outputType = "Code";
  }

  const confidenceValue = Number(rawIntent && rawIntent.confidence);
  const confidence = Number.isFinite(confidenceValue)
    ? Math.max(0, Math.min(1, confidenceValue))
    : null;

  return {
    type,
    label: labelMap[type] || fallback.label || "General chat",
    routeToWorkspace,
    outputType,
    confidence,
    source: String(rawIntent && rawIntent.source || "model") || "model"
  };
}

async function classifyPromptIntentWithModel(promptText = "", workspaceText = "", attachedFiles = [], historyItems = [], modelId = "") {
  const fallbackIntent = classifyPromptIntentFallback(promptText, workspaceText, attachedFiles);
  const prompt = String(promptText || "").trim();
  const workspaceValue = String(workspaceText || "").trim();
  const safeHistory = Array.isArray(historyItems) ? historyItems : [];

  if (!prompt && workspaceValue) {
    return fallbackIntent;
  }

  if (!prompt && (!Array.isArray(attachedFiles) || attachedFiles.length === 0)) {
    return fallbackIntent;
  }

  // Skip the /api/intent network call entirely when the workspace is not active.
  // The regex fallback is accurate enough for plain chat and saves one full
  // round-trip to the server on every message (halves request count on free tier).
  if (!workspaceValue) {
    return fallbackIntent;
  }

  try {
    const res = await fetchWithBanGuard(INTENT_URL, {
      method: "POST",
      headers: buildApiHeaders(true),
      body: JSON.stringify({
        message: prompt,
        workspace_context: workspaceValue,
        attachments: buildIntentAttachmentsPayload(attachedFiles),
        history: safeHistory,
        model: modelId
      })
    });
    const contentType = (res.headers.get("content-type") || "").toLowerCase();
    const bodyText = await safeReadResponseText(res);

    if (!res.ok) {
      throw new Error(bodyText || "Intent classification failed.");
    }

    if (!contentType.includes("application/json")) {
      throw new Error("Intent classification returned an invalid response.");
    }

    const parsed = JSON.parse(bodyText || "{}");
    return normalizeIntentClassification(parsed, fallbackIntent, prompt);
  } catch (error) {
    console.warn("intent classification failed", error);
    return fallbackIntent;
  }
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
  if (isBanOverlayActive) return;
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
    const workspaceSuggestThinking = !lightning_mode;
    const res = await fetchWithBanGuard(API_URL, {
      method: "POST",
      headers: buildApiHeaders(true),
      body: JSON.stringify({
        message: prompt,
        history: [],
        model: sessionModel,
        enable_thinking: workspaceSuggestThinking
      })
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
      reply = await safeReadResponseText(res);
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

function initDesmosIfNeeded() {
  if (desmosCalculator) return;
  const container = document.getElementById("desmosContainer");
  if (!container || typeof Desmos === "undefined") return;
  desmosCalculator = Desmos.GraphingCalculator(container, {
    keypad: false,
    expressions: true,
    settingsMenu: false,
    zoomButtons: true,
    border: false,
    backgroundColor: "#0d0f14",
    textColor: "#f3ecec",
    axisColor: "#3a1f24",
    gridColor: "#1e2530",
    defaultViewport: { xmin: -10, xmax: 10, ymin: -10, ymax: 10 }
  });
}

function renderWorkspaceUI(options = {}) {
  const { focus = false } = options;
  if (!workspacePanel || !chat || !composerWrap) return;

  const current = getWorkspaceCurrentSession();
  if (!current) return;
  syncModelSelectorWithCurrentSession();
  syncModelPanelWithCurrentSession();
  const workspace = current.workspace;
  const activeTab = WORKSPACE_TAB_KEYS.includes(workspace.activeTab) ? workspace.activeTab : "chat";
  const isWorkspaceTab = activeTab === "workspace";
  const isModelTab = activeTab === "model";
  const isMathTab = activeTab === "math";

  if (mainPanel) {
    mainPanel.classList.toggle("workspace-mode", activeTab !== "chat");
  }

  if (workspaceTabs) {
    workspaceTabs.hidden = false;
  }
  if (workspaceSidebarTabs) {
    workspaceSidebarTabs.hidden = false;
  }
  chat.hidden = activeTab !== "chat";
  composerWrap.hidden = isModelTab || isMathTab;
  workspacePanel.hidden = !isWorkspaceTab;
  if (modelPanel) {
    modelPanel.hidden = !isModelTab;
  }
  if (mathPanel) {
    mathPanel.hidden = !isMathTab;
  }
  workspacePanel.dataset.tab = activeTab || "chat";
  if (workspaceAssistantPanel) {
    workspaceAssistantPanel.hidden = !isWorkspaceTab;
  }
  if (isMathTab) {
    initDesmosIfNeeded();
    composerWrap.hidden = true;
    if (workspaceAssistantPanel) {
      workspaceAssistantPanel.hidden = true;
    }
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
  } else if (isMathTab) {
    if (focus && isMathChatDrawerOpen && mathChatInput) {
      mathChatInput.focus();
    }
  } else if (focus && input) {
    input.focus();
  }
  wasWorkspaceTabActive = isWorkspaceTab;
}

function setMathChatDrawerOpen(open) {
  isMathChatDrawerOpen = Boolean(open);
  if (mathChatDrawer) mathChatDrawer.hidden = !isMathChatDrawerOpen;
  if (mathChatToggleBtn) {
    mathChatToggleBtn.classList.toggle("is-active", isMathChatDrawerOpen);
  }
  if (isMathChatDrawerOpen && mathChatInput) {
    mathChatInput.focus();
  }
}

async function sendMathChatMessage() {
  if (!mathChatInput || !mathChatMessages) return;
  const text = mathChatInput.value.trim();
  if (!text) return;

  mathChatInput.value = "";

  // Add user message to drawer
  const userMsg = document.createElement("div");
  userMsg.className = "math-chat-msg math-chat-msg-user";
  userMsg.textContent = text;
  mathChatMessages.appendChild(userMsg);
  mathChatMessages.scrollTop = mathChatMessages.scrollHeight;

  // Add loading message
  const botMsg = document.createElement("div");
  botMsg.className = "math-chat-msg math-chat-msg-bot";
  botMsg.textContent = "Thinking...";
  mathChatMessages.appendChild(botMsg);
  mathChatMessages.scrollTop = mathChatMessages.scrollHeight;

  try {
    const sessionModel = getCurrentSessionModel();
    const prompt = `You are a math assistant inside a Desmos graphing calculator. The user asked: "${text}"\n\nRespond helpfully. If the question involves an equation or function that can be graphed, end your response with a line that says exactly: GRAPH: followed by the Desmos expression (e.g. GRAPH: y=x^2). Only include one GRAPH line if relevant.`;

    const res = await fetchWithBanGuard(API_URL, {
      method: "POST",
      headers: buildApiHeaders(true),
      body: JSON.stringify({
        message: prompt,
        history: [],
        model: sessionModel,
        max_tokens: 400,
        enable_thinking: false
      })
    });

    const reply = await readChatTextResponse(res);

    // Check for GRAPH: directive and plot it
    const graphMatch = reply.match(/GRAPH:\s*(.+)/i);
    if (graphMatch && desmosCalculator) {
      const expression = graphMatch[1].trim();
      desmosCalculator.setExpression({ id: `math-${Date.now()}`, latex: expression, color: "#d14b4b" });
    }

    // Show reply without the GRAPH line
    const displayReply = reply.replace(/GRAPH:\s*.+/i, "").trim();
    botMsg.textContent = displayReply || "Done! Check the graph.";
    mathChatMessages.scrollTop = mathChatMessages.scrollHeight;
  } catch (err) {
    botMsg.textContent = "Error: " + err.message;
  }
}

function setActiveWorkspaceTab(tab, options = {}) {
  const { focus = true } = options;
  if (!WORKSPACE_TAB_KEYS.includes(tab) || !currentSessionId) return;

  closeMobileSidebarIfNeeded();
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

function setActiveLegalTab(tab) {
  if (!legalModal) return;

  const tabButtons = Array.from(legalModal.querySelectorAll("[data-legal-tab]"));
  const panels = Array.from(legalModal.querySelectorAll(".legal-panel[role='tabpanel']"));
  if (!tabButtons.length || !panels.length) return;

  const availableTabs = tabButtons
    .map((btn) => String(btn.getAttribute("data-legal-tab") || "").trim().toLowerCase())
    .filter(Boolean);
  if (!availableTabs.length) return;

  const requestedTab = String(tab || "").trim().toLowerCase();
  const fallbackTab = availableTabs.includes("terms") ? "terms" : availableTabs[0];
  const activeTab = availableTabs.includes(requestedTab) ? requestedTab : fallbackTab;

  for (const btn of tabButtons) {
    const key = String(btn.getAttribute("data-legal-tab") || "").trim().toLowerCase();
    const isActive = key === activeTab;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  }

  for (const panel of panels) {
    const labelledBy = String(panel.getAttribute("aria-labelledby") || "").trim();
    const relatedBtn = tabButtons.find((btn) => btn.id === labelledBy);
    const panelTab = relatedBtn
      ? String(relatedBtn.getAttribute("data-legal-tab") || "").trim().toLowerCase()
      : "";
    panel.hidden = panelTab !== activeTab;
  }
}

function openLegalModal(tab) {
  if (!legalModal) return;
  setActiveLegalTab(tab);
  legalModal.hidden = false;
  legalModal.setAttribute("aria-hidden", "false");
}

function closeLegalModal() {
  if (!legalModal) return;
  legalModal.hidden = true;
  legalModal.setAttribute("aria-hidden", "true");
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

function isWorkspaceRouteModalOpen() {
  return Boolean(workspaceRouteModal && !workspaceRouteModal.hidden && workspaceRouteResolver);
}

function closeWorkspaceRouteModal(approved) {
  if (!workspaceRouteModal) return;

  const resolve = workspaceRouteResolver;
  workspaceRouteResolver = null;
  workspaceRouteModal.hidden = true;
  workspaceRouteModal.setAttribute("aria-hidden", "true");

  if (
    workspaceRouteLastFocusedElement instanceof HTMLElement &&
    workspaceRouteLastFocusedElement.isConnected &&
    typeof workspaceRouteLastFocusedElement.focus === "function"
  ) {
    workspaceRouteLastFocusedElement.focus();
  }
  workspaceRouteLastFocusedElement = null;

  if (typeof resolve === "function") {
    resolve(Boolean(approved));
  }
}

function getWorkspaceRouteFocusableButtons() {
  if (!workspaceRouteModal) return [];
  const buttons = workspaceRouteModal.querySelectorAll("button");
  return Array.from(buttons).filter((btn) => !btn.disabled && btn.offsetParent !== null);
}

function openWorkspaceRouteModal(intentLabel = "") {
  if (!workspaceRouteModal || !workspaceRoutePrompt || !workspaceRouteYesBtn) {
    return Promise.resolve(true);
  }

  if (workspaceRouteResolver) {
    closeWorkspaceRouteModal(false);
  }

  const label = String(intentLabel || "").trim().toLowerCase();
  workspaceRoutePrompt.textContent = label
    ? `ROK detected a ${label} request. Do you want to take this conversation to the workspace?`
    : "Do you want to take this conversation to the workspace?";

  workspaceRouteLastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  workspaceRouteModal.hidden = false;
  workspaceRouteModal.setAttribute("aria-hidden", "false");

  return new Promise((resolve) => {
    workspaceRouteResolver = resolve;
    requestAnimationFrame(() => {
      if (workspaceRouteYesBtn && !workspaceRouteModal.hidden) {
        workspaceRouteYesBtn.focus();
      }
    });
  });
}

function handleWorkspaceRouteModalKeydown(e) {
  if (!isWorkspaceRouteModalOpen()) return;

  if (e.key === "Escape") {
    e.preventDefault();
    closeWorkspaceRouteModal(false);
    return;
  }

  if (e.key !== "Tab") return;
  const focusable = getWorkspaceRouteFocusableButtons();
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

async function confirmWorkspaceRouting(intentLabel = "") {
  return openWorkspaceRouteModal(intentLabel);
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

function shouldUseStoryCanvasForIntent(intent) {
  return Boolean(intent && intent.type === "story");
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

function getDefaultModelForNewSession() {
  const preferred = getPreferredDefaultModelId();
  return normalizeSessionModel(preferred || DEFAULT_MODEL_ID);
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
    model: getDefaultModelForNewSession(),
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
  sessions = sessions.slice(0, getMaxLocalSessionsValue());
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

function buildChatWelcomeElement() {
  const wrapper = document.createElement("div");
  wrapper.id = "chatWelcome";
  wrapper.className = "chat-welcome";
  wrapper.hidden = true;
  wrapper.innerHTML = `
    <div class="chat-welcome-content" role="presentation">
      <img src="roklogo.png" alt="" class="chat-welcome-logo" />
      <div class="chat-welcome-title">What can I help with?</div>
      <div class="chat-welcome-subtitle">Ask a question, drop a file, or paste text to get started.</div>
      <div class="chat-welcome-chips" aria-hidden="true">
        <button class="chat-welcome-chip" type="button">Write</button>
        <button class="chat-welcome-chip" type="button">Code</button>
        <button class="chat-welcome-chip" type="button">Think</button>
        <button class="chat-welcome-chip" type="button">Summarize</button>
      </div>
    </div>
  `;
  return wrapper;
}

function ensureChatWelcomeElement() {
  if (!chat) return null;
  let welcome = document.getElementById("chatWelcome");
  if (!welcome) {
    welcome = buildChatWelcomeElement();
  }
  if (!welcome.isConnected) {
    chat.appendChild(welcome);
  }
  return welcome;
}

function updateChatWelcomeVisibility() {
  const welcome = ensureChatWelcomeElement();
  if (!welcome) return;
  const hasConversation = Boolean(chat.querySelector(".msg.user, .msg.bot"));
  welcome.hidden = hasConversation;
}

function renderConversation(messages) {
  chat.innerHTML = "";
  history.length = 0;
  ensureChatWelcomeElement();

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
  updateChatWelcomeVisibility();
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
  closeMobileSidebarIfNeeded();
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
  closeMobileSidebarIfNeeded();
  const next = createSession([]);
  sessions.unshift(next);
  sortSessionsByRecent();
  sessions = sessions.slice(0, getMaxLocalSessionsValue());
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
  sessions = sessions.slice(0, getMaxLocalSessionsValue());

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

function isHomeScreenVisible() {
  return Boolean(homeScreen && !homeScreen.hidden);
}

function prefersReducedMotion() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function resetHomeWorkspacePreviewContent() {
  if (homeWorkspacePreview) {
    homeWorkspacePreview.classList.remove("is-visible");
    homeWorkspacePreview.classList.add("is-hidden-preview");
  }

  if (!homePreviewLineElements.length) return;
  for (const lineEl of homePreviewLineElements) {
    if (!(lineEl instanceof HTMLElement)) continue;
    lineEl.classList.remove("is-visible", "is-typing");
    lineEl.textContent = "";
  }
}

function stopHomeWorkspacePreview() {
  homePreviewRunToken += 1;
  resetHomeWorkspacePreviewContent();
}

function revealHomeWorkspacePreviewInstantly() {
  if (homeWorkspacePreview) {
    homeWorkspacePreview.classList.remove("is-hidden-preview");
    homeWorkspacePreview.classList.add("is-visible");
  }

  if (!homePreviewLineElements.length) return;
  for (const lineEl of homePreviewLineElements) {
    if (!(lineEl instanceof HTMLElement)) continue;
    lineEl.classList.add("is-visible");
    lineEl.classList.remove("is-typing");
    lineEl.textContent = lineEl.getAttribute("data-preview-line") || "";
  }
}

function waitForHomePreview(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startHomeWorkspacePreview() {
  if (!homeWorkspacePreview || !homePreviewLineElements.length) return;

  const runToken = ++homePreviewRunToken;
  resetHomeWorkspacePreviewContent();

  if (prefersReducedMotion()) {
    if (runToken !== homePreviewRunToken || !isHomeScreenVisible()) return;
    revealHomeWorkspacePreviewInstantly();
    return;
  }

  await waitForHomePreview(HOME_PREVIEW_REVEAL_DELAY_MS);
  if (runToken !== homePreviewRunToken || !isHomeScreenVisible()) return;

  homeWorkspacePreview.classList.remove("is-hidden-preview");
  homeWorkspacePreview.classList.add("is-visible");

  for (const lineEl of homePreviewLineElements) {
    if (!(lineEl instanceof HTMLElement)) continue;
    const text = lineEl.getAttribute("data-preview-line") || "";
    lineEl.classList.add("is-visible", "is-typing");
    lineEl.textContent = "";

    for (let index = 1; index <= text.length; index += 1) {
      if (runToken !== homePreviewRunToken || !isHomeScreenVisible()) return;
      lineEl.textContent = text.slice(0, index);
      await waitForHomePreview(HOME_PREVIEW_TYPING_SPEED_MS);
    }

    lineEl.classList.remove("is-typing");
    await waitForHomePreview(HOME_PREVIEW_LINE_DELAY_MS);
    if (runToken !== homePreviewRunToken || !isHomeScreenVisible()) return;
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

function isImageLikeFile(file) {
  const type = (file.type || "").toLowerCase();
  if (type.startsWith("image/")) return true;

  const name = (file.name || "").toLowerCase();
  return (
    name.endsWith(".png") ||
    name.endsWith(".jpg") ||
    name.endsWith(".jpeg") ||
    name.endsWith(".gif") ||
    name.endsWith(".webp") ||
    name.endsWith(".bmp")
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
      const safeId = escapeHtml(item.id);
      const safeName = escapeHtml(item.name || "file");
      const safeSize = escapeHtml(formatFileSize(item.size || 0));
      const removeButton = `<button class="attachment-remove" type="button" data-id="${safeId}" aria-label="Remove file">&times;</button>`;

      if (item.kind === "image" && item.contentBase64) {
        const mimeType = escapeHtml((item.mimeType || "image/png").toLowerCase());
        const imageSrc = escapeHtml(`data:${mimeType};base64,${item.contentBase64}`);
        return `<div class="attachment-card image-card">${removeButton}<img class="attachment-thumb" src="${imageSrc}" alt="${safeName}" /></div>`;
      }

      if (item.kind === "text" && item.name === "Pasted content") {
        const compactPreview = String(item.content || "").replace(/\s+/g, " ").trim();
        const previewText =
          compactPreview.length > 80 ? `${compactPreview.slice(0, 80)}...` : compactPreview || "Pasted content";
        const safePreview = escapeHtml(previewText);
        return `<div class="attachment-card pasted-card">${removeButton}<span class="attachment-badge">PASTED</span><p class="attachment-preview-text" title="${safePreview}">${safePreview}</p></div>`;
      }

      return `<div class="attachment-card file-card">${removeButton}<div class="attachment-file-icon" aria-hidden="true">&#128196;</div><div class="attachment-file-name" title="${safeName}">${safeName}</div><div class="attachment-file-size">${safeSize}</div></div>`;
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

function buildMessageForApi(text, workspaceContext = "") {
  const promptText = String(text || "").trim();
  if (promptText) {
    return promptText;
  }
  if (workspaceContext) {
    return "Please review and improve the workspace content.";
  }
  if (attachments.length) {
    const imagesOnly = attachments.every((item) => item.kind === "image");
    return imagesOnly ? "Please analyze the attached image(s)." : "Please review the attached files.";
  }
  return "(No text prompt provided)";
}

function buildAttachmentsPayload() {
  return attachments.map((item) => {
    if (item.kind === "image") {
      return {
        type: "image",
        name: item.name,
        size: item.size,
        mime_type: item.mimeType || "image/png",
        content_base64: item.contentBase64 || ""
      };
    }
    return {
      type: "text",
      name: item.name,
      size: item.size,
      content: item.content || ""
    };
  });
}

function buildIntentAttachmentsPayload(attachedFiles = []) {
  return attachedFiles.map((item) => {
    if (item.kind === "image") {
      return {
        type: "image",
        name: item.name,
        size: item.size,
        mime_type: item.mimeType || "image/png"
      };
    }

    const preview = String(item.content || "").replace(/\s+/g, " ").trim();
    return {
      type: "text",
      name: item.name,
      size: item.size,
      content_preview: preview.slice(0, 280)
    };
  });
}

function readImageFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      const commaIndex = result.indexOf(",");
      if (commaIndex < 0) {
        reject(new Error("Invalid image data URL."));
        return;
      }
      const payload = result.slice(commaIndex + 1).trim();
      if (!payload) {
        reject(new Error("Image encoding failed."));
        return;
      }
      resolve(payload);
    };
    reader.onerror = () => {
      reject(new Error("Image read failed."));
    };
    reader.readAsDataURL(file);
  });
}

async function addSelectedFiles(fileList) {
  if (isSending) return;

  const files = Array.from(fileList || []);
  if (!files.length) return;

  for (const file of files) {
    if (attachments.length >= clientLimits.maxAttachments) {
      addMessage("system", `Attachment limit reached (${clientLimits.maxAttachments} files).`);
      break;
    }
    if (file.size > clientLimits.maxFileSizeBytes) {
      addMessage("system", `${file.name} is too large. Max ${formatFileSize(clientLimits.maxFileSizeBytes)} per file.`);
      continue;
    }

    if (isTextLikeFile(file)) {
      try {
        const content = await file.text();
        attachments.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          kind: "text",
          name: file.name,
          size: file.size,
          content: truncateText(content, clientLimits.maxFileChars)
        });
        renderAttachments();
        if (fileInput) {
          fileInput.value = "";
        }
      } catch {
        addMessage("system", `Could not read ${file.name}.`);
      }
      continue;
    }

    if (isImageLikeFile(file)) {
      try {
        const contentBase64 = await readImageFileAsBase64(file);
        attachments.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          kind: "image",
          name: file.name,
          size: file.size,
          mimeType: (file.type || "image/png").toLowerCase(),
          contentBase64
        });
        renderAttachments();
        if (fileInput) {
          fileInput.value = "";
        }
      } catch {
        addMessage("system", `Could not read image ${file.name}.`);
      }
      continue;
    }

    addMessage("system", `${file.name} is not a supported text or image file.`);
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

function createTypingDotsElement() {
  const dots = document.createElement("div");
  dots.className = "typing-dots";
  for (let i = 0; i < 3; i += 1) {
    dots.appendChild(document.createElement("span"));
  }
  return dots;
}

function populateBotMessageContainer(container, options = {}) {
  const {
    text = "",
    markdown = false,
    storyCanvas = false,
    thinkingBlock = false,
    showTypingDots = false
  } = options;
  if (!(container instanceof HTMLElement)) {
    return { bubble: null, storyCanvas: null, thinkingPanel: null, typingIndicator: null };
  }

  container.textContent = "";
  container.className = "bot-stack";

  const thinkingPanel = thinkingBlock ? createThinkingPanel() : null;
  const bubble = document.createElement("div");
  bubble.className = "bubble plain";
  const canvas = storyCanvas ? createStoryCanvas() : null;
  let typingIndicator = null;

  if (storyCanvas) {
    bubble.classList.add("story-status");
  }

  if (showTypingDots) {
    typingIndicator = createTypingDotsElement();
    bubble.appendChild(typingIndicator);
  } else if (storyCanvas) {
    bubble.textContent = text || "Writing story in canvas...";
  } else {
    setBubbleContent(bubble, text, markdown);
  }

  if (thinkingPanel) {
    container.appendChild(thinkingPanel.shell);
  }
  container.appendChild(bubble);
  if (canvas) {
    container.appendChild(canvas.shell);
  }

  return { bubble, storyCanvas: canvas, thinkingPanel, typingIndicator };
}

function addMessage(role, text, options = {}) {
  const { markdown = false, storyCanvas = false, thinkingBlock = false, typingDots = false } = options;

  const row = document.createElement("div");
  row.className = "msg " + role;

  const bubble = document.createElement("div");
  bubble.className = "bubble plain";

  if (role === "system") {
    bubble.textContent = text;
    row.appendChild(bubble);
    chat.appendChild(row);
    scrollToBottom();
    updateChatWelcomeVisibility();
    return { row, bubble, storyCanvas: null, thinkingPanel: null };
  }

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  if (role === "user") {
    avatar.textContent = "Y";
  } else {
    avatar.innerHTML = '<img src="rokchatR.png" class="avatar-img" style="width:86%;height:86%;object-fit:contain;border-radius:50%;">';
  }

  if (typingDots) {
    bubble.appendChild(createTypingDotsElement());
    row.appendChild(avatar);
    row.appendChild(bubble);
    chat.appendChild(row);
    scrollToBottom();
    updateChatWelcomeVisibility();
    return { row, bubble, storyCanvas: null, thinkingPanel: null };
  }

  setBubbleContent(bubble, text, markdown);

  if (role === "bot" && (storyCanvas || thinkingBlock)) {
    const stack = document.createElement("div");
    const mounted = populateBotMessageContainer(stack, { text, markdown, storyCanvas, thinkingBlock });

    row.appendChild(avatar);
    row.appendChild(stack);
    chat.appendChild(row);
    scrollToBottom();
    updateChatWelcomeVisibility();
    return { row, bubble: mounted.bubble, storyCanvas: mounted.storyCanvas, thinkingPanel: mounted.thinkingPanel };
  }

  if (role === "user") {
    row.appendChild(bubble);
    row.appendChild(avatar);
  } else {
    row.appendChild(avatar);
    row.appendChild(bubble);
  }

  chat.appendChild(row);
  scrollToBottom();
  updateChatWelcomeVisibility();
  return { row, bubble, storyCanvas: null, thinkingPanel: null };
}

function hideCompactingBar() {
  if (compactingBarTimer) {
    clearTimeout(compactingBarTimer);
    compactingBarTimer = null;
  }
  if (compactingBarElement && compactingBarElement.isConnected) {
    compactingBarElement.remove();
  }
  compactingBarElement = null;
}

function showCompactingBar() {
  if (!chat) return;

  hideCompactingBar();
  const bar = document.createElement("div");
  bar.className = "compacting-bar";
  bar.innerHTML =
    '<div class="compacting-text">Compacting context so we can continue the chat!</div>' +
    '<div class="compacting-progress"></div>';
  chat.appendChild(bar);
  compactingBarElement = bar;
  scrollToBottom();

  compactingBarTimer = setTimeout(() => {
    if (compactingBarElement === bar) {
      hideCompactingBar();
    }
  }, 3000);
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
  sendBtn.disabled = cooldownActive || isIntentClassificationLoading;
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

function setComposerTrayOpen(nextOpen) {
  const open = Boolean(nextOpen);
  composerTrayOpen = open;
  if (composerTray) {
    composerTray.hidden = !open;
  }
  if (composerPlusBtn) {
    composerPlusBtn.setAttribute("aria-expanded", open ? "true" : "false");
    composerPlusBtn.classList.toggle("is-open", open);
  }
}

function setWebSearchEnabled(nextEnabled) {
  webSearchEnabled = Boolean(nextEnabled);
  if (!webToggleBtn) return;
  webToggleBtn.setAttribute("aria-pressed", webSearchEnabled ? "true" : "false");
  webToggleBtn.classList.toggle("is-active", webSearchEnabled);
  webToggleBtn.textContent = webSearchEnabled ? "Web On" : "Web Off";
}

function setLightningModeEnabled(nextEnabled, options = {}) {
  const { animate = true } = options;
  const wasEnabled = lightning_mode;
  lightning_mode = Boolean(nextEnabled);
  saveLightningModeToStorage(lightning_mode);
  if (!lightningToggleBtn) return;
  lightningToggleBtn.setAttribute("aria-pressed", lightning_mode ? "true" : "false");
  lightningToggleBtn.classList.toggle("is-active", lightning_mode);
  if (lightningToggleLabel) {
    lightningToggleLabel.textContent = lightning_mode ? "Lightning On" : "Lightning Off";
  } else {
    lightningToggleBtn.textContent = lightning_mode ? "⚡ Lightning On" : "⚡ Lightning Off";
  }
  // Update title/disabled state based on server quota
  refreshLightningButtonQuotaUI();
  if (lightningToggleIcon) {
    lightningToggleIcon.classList.toggle("is-filled", lightning_mode);
    lightningToggleIcon.classList.toggle("is-outline", !lightning_mode);
    if (lightning_mode && !wasEnabled && animate) {
      lightningToggleIcon.classList.remove("is-spinning");
      // Force reflow so the animation retriggers on consecutive enables.
      void lightningToggleIcon.offsetWidth;
      lightningToggleIcon.classList.add("is-spinning");
    } else if (!lightning_mode) {
      lightningToggleIcon.classList.remove("is-spinning");
    }
  }
}

function refreshSendState() {
  const cooldownActive = Date.now() < nextAllowedAt;
  const uiLocked = isSending || isIntentClassificationLoading;
  updateSendButtonUI(cooldownActive);

  if (composerPlusBtn) {
    composerPlusBtn.disabled = uiLocked;
  }
  if (attachBtn) {
    attachBtn.disabled = uiLocked;
  }
  if (webToggleBtn) {
    webToggleBtn.disabled = uiLocked;
  }
  if (lightningToggleBtn) {
    lightningToggleBtn.disabled = uiLocked;
  }
  if (fileInput) {
    fileInput.disabled = uiLocked;
  }
  if (modelSelect) {
    modelSelect.disabled = uiLocked;
  }
  if (uiLocked) {
    setComposerTrayOpen(false);
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
  hideCompactingBar();
  chat.innerHTML = "";
  ensureChatWelcomeElement();
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
  updateChatWelcomeVisibility();
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
      setTimeout(step, clientLimits.typingSpeedMs);
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
      setTimeout(step, clientLimits.typingSpeedMs);
    };
    step();
  });
}

async function send() {
  if (isBanOverlayActive) return;
  hideHomeScreen();
  const text = input.value.trim();
  const sessionModel = getCurrentSessionModel();
  const wasWorkspaceActive = isWorkspaceSessionActive();
  const sessionWorkspaceContext = getWorkspaceContextFromSession();
  if (!text && attachments.length === 0 && !sessionWorkspaceContext) return;
  if (isSending) return;
  if (isIntentClassificationLoading) return;
  if (isWorkspaceSuggestionLoading) return;
  if (isWorkspaceRouteModalOpen()) return;

  if (Date.now() < nextAllowedAt) {
    startCooldownTimer();
    refreshSendState();
    return;
  }

  let displayText = text;
  if (!displayText) {
    if (sessionWorkspaceContext && attachments.length) {
      displayText = `Review my workspace and ${attachments.length} file(s).`;
    } else if (sessionWorkspaceContext) {
      displayText = "Review my workspace content.";
    } else {
      displayText = `Uploaded ${attachments.length} file(s).`;
    }
  }
  const intentHistory = history.slice(-Math.min(getHistoryLimitValue(), INTENT_HISTORY_CONTEXT_LIMIT));
  const recentHistory = history.slice(-getHistoryLimitValue());
  const priorHistoryLength = history.length;

  addMessage("user", displayText);
  history.push({ role: "user", content: displayText });
  trimHistoryToLimit();
  syncCurrentSessionFromHistory();

  input.value = "";
  autoResizeInput();
  input.focus();

  stopRequested = false;
  activeRequestController = new AbortController();
  isSending = true;
  nextAllowedAt = Date.now() + clientLimits.cooldownMs;
  startCooldownTimer();
  refreshSendState();

  const typing = addMessage(
    "bot",
    "",
    { typingDots: true }
  );
  const botAvatar = typing.row.querySelector(".avatar");
  const botAvatarMarkup = botAvatar ? botAvatar.innerHTML : "R";
  const showGeneratingAvatar = () => {
    if (!botAvatar) return;
    botAvatar.innerHTML = '<img src="rokgenerating.gif" class="avatar-gif" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">';
  };
  const restoreBotAvatar = () => {
    if (!botAvatar) return;
    botAvatar.innerHTML = botAvatarMarkup;
  };
  let typingIndicator = null;
  let typingRowConverted = false;
  const removeTypingIndicator = () => {
    if (typingIndicator && typingIndicator.isConnected) {
      typingIndicator.remove();
      typingIndicator = null;
      return;
    }
    if (!typingRowConverted && typing.row.isConnected) {
      typing.row.remove();
    }
  };
  const removeEmptyConvertedBotRow = () => {
    if (!typingRowConverted || !typing.row.isConnected) {
      return;
    }
    if (partialText || thinkingText.trim()) {
      return;
    }
    typing.row.remove();
    bubble = null;
    storyCanvas = null;
    thinkingPanel = null;
  };
  let bubble = null;
  let storyCanvas = null;
  let thinkingPanel = null;
  let partialText = "";
  let thinkingText = "";
  let thinkTagCarry = "";
  let insideThinkTag = false;
  let answerStarted = false;
  let assistantStreamStarted = false;
  let writeBackToWorkspace = false;
  let useStoryCanvas = false;
  let workspaceContext = "";
  let hasWorkspaceContext = false;
  let requestedOutputType = inferWorkspaceOutputType("", text);
  let thinkingTitleRequested = false;
  let thinkingTitleResolved = false;
  const streamRenderState = {
    lastFlush: 0,
    flush: () => {}
  };
  const THINK_OPEN_TAG = "<think>";
  const THINK_CLOSE_TAG = "</think>";
  const convertTypingRowToBotMessage = () => {
    if (typingRowConverted || writeBackToWorkspace) {
      return;
    }
    const mounted = populateBotMessageContainer(typing.bubble, {
      storyCanvas: useStoryCanvas,
      thinkingBlock: true,
      showTypingDots: true
    });
    bubble = mounted.bubble;
    storyCanvas = mounted.storyCanvas;
    thinkingPanel = mounted.thinkingPanel;
    typingIndicator = mounted.typingIndicator;
    showGeneratingAvatar();
    typingRowConverted = true;
    scrollToBottom();
  };
  const setThinkingSummaryLabel = (value) => {
    if (!thinkingPanel) return;
    const label = String(value || "Reasoning").trim() || "Reasoning";
    thinkingPanel.summaryLabel.textContent = label;
    thinkingPanel.summaryLabel.title = label;
  };
  const requestThinkingSummaryTitle = () => {
    if (!thinkingPanel || thinkingTitleRequested || !thinkingText.trim()) {
      return;
    }
    thinkingTitleRequested = true;
    setThinkingSummaryLabel("Thinking...");
    void generateThinkingTitle(thinkingText, sessionModel)
      .then((title) => {
        thinkingTitleResolved = true;
        setThinkingSummaryLabel(title || "Reasoning");
      })
      .catch(() => {
        thinkingTitleResolved = true;
        setThinkingSummaryLabel("Reasoning");
      });
  };
  const markAssistantStreamStarted = () => {
    if (assistantStreamStarted) return;
    assistantStreamStarted = true;
    hideCompactingBar();
  };
  const finalizeThinkingPanel = (collapse, complete = false) => {
    if (!thinkingPanel) return;
    const hasReasoning = Boolean(thinkingText.trim());
    thinkingPanel.shell.hidden = !hasReasoning;
    thinkingPanel.shell.classList.remove("is-streaming");
    if (!hasReasoning) {
      setThinkingSummaryLabel("Reasoning");
      return;
    }
    if (hasReasoning && collapse) {
      thinkingPanel.shell.open = false;
    }
    if (!thinkingTitleResolved) {
      setThinkingSummaryLabel("Thinking...");
    }
    if (complete) {
      requestThinkingSummaryTitle();
    }
  };
  const handleThinking = (chunk) => {
    markAssistantStreamStarted();
    if (writeBackToWorkspace || !thinkingPanel) return;
    const piece = String(chunk || "");
    if (!piece) return;
    thinkingText += piece;
    if (!thinkingText.trim()) {
      return;
    }
    thinkingPanel.shell.hidden = false;
    thinkingPanel.shell.classList.toggle("is-streaming", !answerStarted);
    setThinkingSummaryLabel("Thinking...");
    thinkingPanel.body.textContent = thinkingText.trim();
    scrollToBottom();
  };
  const handleStatusUpdate = (status) => {
    const value = String(status || "").trim();
    if (!value) return;
    if (writeBackToWorkspace) return;
    convertTypingRowToBotMessage();
    if (!thinkingPanel) return;
    thinkingPanel.shell.hidden = false;
    thinkingPanel.shell.classList.toggle("is-streaming", !answerStarted);
    setThinkingSummaryLabel(value);
    scrollToBottom();
  };
  const noteAnswerStarted = () => {
    if (answerStarted) return;
    answerStarted = true;
    if (thinkingPanel && !thinkingText.trim()) {
      setThinkingSummaryLabel("Thinking...");
    }
    removeTypingIndicator();
    finalizeThinkingPanel(true);
  };
  const handleAnswerToken = (token) => {
    const piece = String(token || "");
    if (!piece) return;
    noteAnswerStarted();
    markAssistantStreamStarted();
    partialText += piece;
    const now = performance.now();
    if (now - streamRenderState.lastFlush > 40) {
      streamRenderState.flush();
      streamRenderState.lastFlush = now;
    }
  };
  const consumeTaggedTokenChunk = (chunk) => {
    let textChunk = thinkTagCarry + String(chunk || "");
    thinkTagCarry = "";

    while (textChunk) {
      if (insideThinkTag) {
        const closeIndex = textChunk.indexOf(THINK_CLOSE_TAG);
        if (closeIndex === -1) {
          const safeLength = Math.max(0, textChunk.length - (THINK_CLOSE_TAG.length - 1));
          if (safeLength > 0) {
            handleThinking(textChunk.slice(0, safeLength));
            textChunk = textChunk.slice(safeLength);
          }
          thinkTagCarry = textChunk;
          return;
        }
        handleThinking(textChunk.slice(0, closeIndex));
        textChunk = textChunk.slice(closeIndex + THINK_CLOSE_TAG.length);
        insideThinkTag = false;
        continue;
      }

      const openIndex = textChunk.indexOf(THINK_OPEN_TAG);
      if (openIndex === -1) {
        const safeLength = Math.max(0, textChunk.length - (THINK_OPEN_TAG.length - 1));
        if (safeLength > 0) {
          handleAnswerToken(textChunk.slice(0, safeLength));
          textChunk = textChunk.slice(safeLength);
        }
        thinkTagCarry = textChunk;
        return;
      }

      if (openIndex > 0) {
        handleAnswerToken(textChunk.slice(0, openIndex));
      }
      textChunk = textChunk.slice(openIndex + THINK_OPEN_TAG.length);
      insideThinkTag = true;
    }
  };
  const flushTaggedTokenCarry = () => {
    if (!thinkTagCarry) return;
    if (insideThinkTag) {
      handleThinking(thinkTagCarry);
    } else {
      handleAnswerToken(thinkTagCarry);
    }
    thinkTagCarry = "";
  };

  try {
    let intent = classifyPromptIntentFallback(text, sessionWorkspaceContext, attachments);
    isIntentClassificationLoading = true;
    refreshSendState();
    try {
      intent = await classifyPromptIntentWithModel(
        text,
        sessionWorkspaceContext,
        attachments,
        intentHistory,
        sessionModel
      );
    } finally {
      isIntentClassificationLoading = false;
      refreshSendState();
    }

    if (stopRequested) {
      throw new DOMException("Generation stopped by user.", "AbortError");
    }

    if (isBanOverlayActive) {
      removeTypingIndicator();
      return;
    }

    writeBackToWorkspace = Boolean(intent.routeToWorkspace);
    useStoryCanvas = !writeBackToWorkspace && shouldUseStoryCanvasForIntent(intent);
    workspaceContext = writeBackToWorkspace || wasWorkspaceActive ? sessionWorkspaceContext : "";
    hasWorkspaceContext = Boolean(workspaceContext);
    requestedOutputType = intent.outputType || inferWorkspaceOutputType("", text);

    if (writeBackToWorkspace && text) {
      const workspaceRouteApproved = await confirmWorkspaceRouting(intent.label);
      if (stopRequested) {
        throw new DOMException("Generation stopped by user.", "AbortError");
      }
      writeBackToWorkspace = Boolean(workspaceRouteApproved);
      useStoryCanvas = !writeBackToWorkspace && shouldUseStoryCanvasForIntent(intent);
      workspaceContext = writeBackToWorkspace || wasWorkspaceActive ? sessionWorkspaceContext : "";
      hasWorkspaceContext = Boolean(workspaceContext);
    }

    if (writeBackToWorkspace && !isWorkspaceSessionActive()) {
      setActiveWorkspaceTab("workspace", { focus: false });
    } else if (!writeBackToWorkspace && isWorkspaceSessionActive()) {
      setActiveWorkspaceTab("chat", { focus: false });
    }

    const maxHistoryMessages = getMaxHistoryMessagesValue();
    if (maxHistoryMessages > 0 && priorHistoryLength > maxHistoryMessages * 0.8) {
      showCompactingBar();
    }

    const messageForApi = buildMessageForApi(text, workspaceContext);
    const attachmentsPayload = buildAttachmentsPayload();
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

    console.log("sending chat request...");
    activeRequestController = new AbortController();
    const thinkingEnabledThisRequest = !lightning_mode;
    const requestBody = {
      message: messageForApi,
      workspace_context: workspaceContext,
      attachments: attachmentsPayload,
      history: recentHistory,
      model: sessionModel,
      max_tokens: clientLimits.maxResponseTokens,
      enable_thinking: thinkingEnabledThisRequest
    };
    if (webSearchEnabled) {
      requestBody.enable_web_search = true;
    }
    const res = await fetchWithBanGuard(API_URL, {
      method: "POST",
      headers: buildApiHeaders(true),
      signal: activeRequestController.signal,
      body: JSON.stringify(requestBody)
    });

    const contentType = (res.headers.get("content-type") || "").toLowerCase();
    const contextCompactedHeader =
      String(res.headers.get("X-Context-Compacted") || "").trim().toLowerCase() === "true";
    if (contextCompactedHeader) {
      showCompactingBar();
    }
    // Read server-enforced thinking quota from response headers and update UI
    applyThinkingQuotaFromHeaders(res);

    if (!res.ok || contentType.includes("text/html")) {
      let errorMessage = "Request failed.";
      let errorBody = await safeReadResponseText(res);
      if (errorBody) {
        try {
          const data = JSON.parse(errorBody);
          errorMessage = data.reply || data.error || errorMessage;
        } catch {
          errorMessage = errorBody;
        }
      }

      if (isLikelyServerDownResponse(res.status, contentType, errorBody)) {
        showServerDownScreen();
        throw new Error("Server is currently down. Check back later.");
      }

      throw new Error(errorMessage);
    }

    hideServerDownScreen();
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
      convertTypingRowToBotMessage();
    }

    const reader = res.body && res.body.getReader ? res.body.getReader() : null;
    console.log("reader:", reader, "content-type:", contentType, "res.body:", res.body);

    if (!reader) {
      markAssistantStreamStarted();
      let reply = partialText || "(No response)";
      if (!partialText && !res.bodyUsed) {
        const bodyText = await safeReadResponseText(res);
        if (bodyText) {
          reply = bodyText;
        }
      }
      const separatedReply = splitThinkingFromText(reply);
      if (separatedReply.thinking) {
        handleThinking(separatedReply.thinking);
      }
      reply = separatedReply.answer || reply;
      partialText = reply;
      if (partialText) {
        noteAnswerStarted();
      }
      finalizeThinkingPanel(Boolean(partialText), true);
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
        trimHistoryToLimit();
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
    streamRenderState.lastFlush = 0;
    streamRenderState.flush = () => {
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
    const parseAsJsonLines = !isEventStream && (contentType.includes("json") || contentType.includes("ndjson"));
    let buffer = "";
    let plainBuffer = "";
    let streamEnded = false;

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
          const parsedPayload = extractTokenFromStreamPayload(data);
          if (parsedPayload.done) {
            streamEnded = true;
            return;
          }
          if (parsedPayload.status) {
            if (parsedPayload.status === "Opening canvas...") {
                handleStatusUpdate(parsedPayload.status);
                if (!writeBackToWorkspace && typeof openCanvas === "function") {
                    openCanvas();
                }
            } else {
                handleStatusUpdate(parsedPayload.status);
            }
          }
          if (parsedPayload.thinking) {
            handleThinking(parsedPayload.thinking);
          }
          if (parsedPayload.token) {
            consumeTaggedTokenChunk(parsedPayload.token);
          }
        }
      }
    };

    const processPlainBuffer = (flushRemainder = false) => {
      let idx;
      while ((idx = plainBuffer.indexOf("\n")) >= 0) {
        let line = plainBuffer.slice(0, idx);
        plainBuffer = plainBuffer.slice(idx + 1);
        if (line.endsWith("\r")) {
          line = line.slice(0, -1);
        }
        if (!line.trim()) {
          continue;
        }
        const parsedPayload = extractTokenFromStreamPayload(line);
        if (parsedPayload.status) {
          handleStatusUpdate(parsedPayload.status);
        }
        if (parsedPayload.thinking) {
          handleThinking(parsedPayload.thinking);
        }
        if (parsedPayload.token) {
          consumeTaggedTokenChunk(parsedPayload.token);
        }
        if (parsedPayload.done) {
          streamEnded = true;
          return;
        }
      }

      if (!flushRemainder) {
        return;
      }
      const remainder = plainBuffer.trim();
      plainBuffer = "";
      if (!remainder) {
        return;
      }
      const parsedPayload = extractTokenFromStreamPayload(remainder);
      if (parsedPayload.status) {
        handleStatusUpdate(parsedPayload.status);
      }
      if (parsedPayload.thinking) {
        handleThinking(parsedPayload.thinking);
      }
      if (parsedPayload.token) {
        consumeTaggedTokenChunk(parsedPayload.token);
      }
      if (parsedPayload.done) {
        streamEnded = true;
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
      } else if (parseAsJsonLines) {
        plainBuffer += chunk;
        processPlainBuffer(false);
        if (streamEnded) break;
      } else {
        consumeTaggedTokenChunk(chunk);
      }
    }

    const tail = decoder.decode();
    if (tail) {
      if (isEventStream) {
        buffer += tail;
        processBuffer();
      } else if (parseAsJsonLines) {
        plainBuffer += tail;
        processPlainBuffer(true);
      } else {
        consumeTaggedTokenChunk(tail);
      }
    } else if (parseAsJsonLines) {
      processPlainBuffer(true);
    }

    flushTaggedTokenCarry();
    finalizeThinkingPanel(Boolean(partialText), true);

    if (!partialText) {
      partialText = "(No response)";
    }
    removeTypingIndicator();

    if (!writeBackToWorkspace) {
      streamRenderState.flush();
      if (storyCanvas) {
        storyCanvas.setStatus("Complete");
        bubble.textContent = "Story ready. Use Expand to read.";
      } else {
        setBubbleContent(bubble, partialText, true);
      }
      history.push({ role: "assistant", content: partialText });
      trimHistoryToLimit();
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
    console.log("chat error:", err);
    removeTypingIndicator();
    flushTaggedTokenCarry();
    finalizeThinkingPanel(Boolean(partialText), true);

    if (isBanOverlayActive) {
      removeEmptyConvertedBotRow();
      return;
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
          trimHistoryToLimit();
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

    if (isLikelyServerDownError(err)) {
      removeEmptyConvertedBotRow();
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

    removeEmptyConvertedBotRow();
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
    restoreBotAvatar();
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

if (composerPlusBtn) {
  composerPlusBtn.addEventListener("click", () => {
    if (isSending || isIntentClassificationLoading) return;
    setComposerTrayOpen(!composerTrayOpen);
  });
}

if (attachBtn && fileInput) {
  attachBtn.addEventListener("click", () => {
    if (isSending || isIntentClassificationLoading) return;
    setComposerTrayOpen(false);
    fileInput.click();
  });
  fileInput.addEventListener("change", (e) => addSelectedFiles(e.target.files));
}

if (webToggleBtn) {
  webToggleBtn.addEventListener("click", () => {
    if (isSending || isIntentClassificationLoading) return;
    setWebSearchEnabled(!webSearchEnabled);
  });
}

if (lightningToggleBtn) {
  lightningToggleBtn.addEventListener("click", () => {
    if (isSending || isIntentClassificationLoading) return;
    const turningOffLightning = lightning_mode; // user wants to enable thinking
    if (turningOffLightning && isThinkingQuotaExhausted()) {
      // Can't enable thinking — quota is server-enforced
      const limit    = getThinkingQuotaLimit();
      const resetSec = getThinkingQuotaResetSec();
      showThinkingQuotaToast(
        `Thinking limit reached (${limit}/day). Resets in ${formatThinkingResetTime(resetSec * 1000)}.`
      );
      return;
    }
    setLightningModeEnabled(!lightning_mode);
  });
}

if (lightningToggleIcon) {
  lightningToggleIcon.addEventListener("animationend", (event) => {
    if (event.animationName === "lightning-spin") {
      lightningToggleIcon.classList.remove("is-spinning");
    }
  });
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
input.addEventListener("paste", (e) => {
  const pastedText = e.clipboardData?.getData("text") || "";
  if (pastedText.length <= 300) {
    return;
  }

  e.preventDefault();
  if (attachments.length >= clientLimits.maxAttachments) {
    addMessage("system", `Attachment limit reached (${clientLimits.maxAttachments} files).`);
    return;
  }

  const content = truncateText(pastedText, clientLimits.maxFileChars);
  const size = new Blob([content]).size;
  attachments.push({
    id: `paste-${Date.now()}`,
    kind: "text",
    name: "Pasted content",
    size,
    content
  });
  renderAttachments();
});
input.addEventListener("keydown", (e) => {
  if (!userSettings.enterToSend) {
    return;
  }
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

if (workspaceRouteModal) {
  workspaceRouteModal.addEventListener("click", (e) => {
    if (e.target === workspaceRouteModal) {
      closeWorkspaceRouteModal(false);
    }
  });
}

if (workspaceRouteYesBtn) {
  workspaceRouteYesBtn.addEventListener("click", () => {
    closeWorkspaceRouteModal(true);
  });
}

if (workspaceRouteNoBtn) {
  workspaceRouteNoBtn.addEventListener("click", () => {
    closeWorkspaceRouteModal(false);
  });
}

if (workspaceRouteCloseBtn) {
  workspaceRouteCloseBtn.addEventListener("click", () => {
    closeWorkspaceRouteModal(false);
  });
}

document.addEventListener("keydown", handleWorkspaceApplyModalKeydown);
document.addEventListener("keydown", handleWorkspaceRouteModalKeydown);

if (legalModal) {
  legalModal.addEventListener("click", (e) => {
    if (e.target === legalModal) {
      closeLegalModal();
    }
  });
}

if (legalCloseBtn) {
  legalCloseBtn.addEventListener("click", () => {
    closeLegalModal();
  });
}

if (legalTermsTab) {
  legalTermsTab.addEventListener("click", () => {
    setActiveLegalTab("terms");
  });
}

if (legalPrivacyTab) {
  legalPrivacyTab.addEventListener("click", () => {
    setActiveLegalTab("privacy");
  });
}

if (legalCreditsTab) {
  legalCreditsTab.addEventListener("click", () => {
    setActiveLegalTab("credits");
  });
}

if (legalLinkButtons && legalLinkButtons.length) {
  legalLinkButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-legal");
      openLegalModal(target === "privacy" || target === "credits" ? target : "terms");
    });
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && legalModal && !legalModal.hidden) {
    closeLegalModal();
  }
});

document.addEventListener(
  "keydown",
  (e) => {
    if (!isBanOverlayActive) return;
    e.preventDefault();
    e.stopPropagation();
  },
  true
);

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

function bindWorkspaceTabClickEvents(tabContainer) {
  if (!tabContainer) return;
  tabContainer.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    const tabBtn = target.closest("[data-workspace-tab]");
    if (!(tabBtn instanceof Element)) return;
    const tab = tabBtn.getAttribute("data-workspace-tab");
    if (!tab) return;
    setActiveWorkspaceTab(tab, { focus: true });
  });
}

bindWorkspaceTabClickEvents(workspaceTabs);
bindWorkspaceTabClickEvents(workspaceSidebarTabs);

if (mathChatToggleBtn) {
  mathChatToggleBtn.addEventListener("click", () => {
    setMathChatDrawerOpen(!isMathChatDrawerOpen);
  });
}
if (mathChatCloseBtn) {
  mathChatCloseBtn.addEventListener("click", () => {
    setMathChatDrawerOpen(false);
  });
}
if (mathChatSendBtn) {
  mathChatSendBtn.addEventListener("click", sendMathChatMessage);
}
if (mathChatInput) {
  mathChatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMathChatMessage();
  });
}

if (sidebarToggleBtn) {
  sidebarToggleBtn.addEventListener("click", () => {
    if (isMobileLayout) {
      applyMobileSidebarState(!isMobileSidebarOpen);
      return;
    }
    applySidebarCollapsedState(!isSidebarCollapsed);
  });
}

document.addEventListener("pointerdown", (event) => {
  const target = event.target;
  if (composerTrayOpen && target instanceof Node) {
    if (!composerToolbox || !composerToolbox.contains(target)) {
      setComposerTrayOpen(false);
    }
  }

  if (!isMobileLayout || !isMobileSidebarOpen) return;
  if (!(target instanceof Node)) return;
  if (sidebar && sidebar.contains(target)) return;
  if (sidebarToggleBtn && sidebarToggleBtn.contains(target)) return;
  applyMobileSidebarState(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (composerTrayOpen) {
    setComposerTrayOpen(false);
  }
  closeMobileSidebarIfNeeded();
});

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
setComposerTrayOpen(false);
setWebSearchEnabled(false);
// On boot: restore saved lightning preference. If the thinking quota is exhausted,
// applyServerThinkingQuota() will force lightning on once refreshClientConfigFromServer() resolves.
setLightningModeEnabled(loadLightningModeFromStorage(), { animate: false });
applyUserSettingsToRuntime();
refreshSendState();
setWorkspaceAssistantSuggestButtonLoading(false);

renderModelSelectOptions();
renderModelPanelOptions();
initializeSessions();
refreshWorkspaceDocumentToolbarState();
bootstrapServerSession();
refreshModelCatalogFromServer();
refreshClientConfigFromServer();
applySidebarCollapsedState(loadSidebarCollapsedFromStorage(), { persist: false });
if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
  mobileLayoutMediaQueryList = window.matchMedia(MOBILE_LAYOUT_MEDIA_QUERY);
  if (typeof mobileLayoutMediaQueryList.addEventListener === "function") {
    mobileLayoutMediaQueryList.addEventListener("change", syncLayoutForViewport);
  } else if (typeof mobileLayoutMediaQueryList.addListener === "function") {
    mobileLayoutMediaQueryList.addListener(syncLayoutForViewport);
  }
}
syncLayoutForViewport();
showHomeScreen();
