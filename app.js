const chat = document.getElementById("chat");
const workspaceTabs = document.getElementById("workspaceTabs");
const workspaceSidebarTabs = document.getElementById("workspaceSidebarTabs");
const workspacePanel = document.getElementById("workspacePanel");
const mathPanel = document.getElementById("mathPanel");
const mathChatToggleBtn = document.getElementById("mathChatToggleBtn");
const mathChatDrawer = document.getElementById("mathChatDrawer");
const mathChatCloseBtn = document.getElementById("mathChatCloseBtn");
const mathChatMessages = document.getElementById("mathChatMessages");
const mathChatInput = document.getElementById("mathChatInput");
const mathChatSendBtn = document.getElementById("mathChatSendBtn");
const workspacePanelTitle = document.getElementById("workspacePanelTitle");
const workspaceDocumentShell = document.getElementById("workspaceDocumentShell");
const workspaceEditor = document.getElementById("workspaceEditor");
const workspaceDocWordCount = document.getElementById("workspaceDocWordCount");
const workspaceDocReadTime = document.getElementById("workspaceDocReadTime");
const workspaceDocSaveState = document.getElementById("workspaceDocSaveState");
const workspaceCopyBtn = document.getElementById("workspaceCopyBtn");
const workspaceDownloadBtn = document.getElementById("workspaceDownloadBtn");
const workspaceImproveBtn = document.getElementById("workspaceImproveBtn");
const sandboxPanel = document.getElementById("sandboxPanel");
const sandboxFilesList = document.getElementById("sandboxFilesList");
const sandboxCurrentFileLabel = document.getElementById("sandboxCurrentFileLabel");
const sandboxFileCount = document.getElementById("sandboxFileCount");
const sandboxChangeCount = document.getElementById("sandboxChangeCount");
const sandboxStatusChip = document.getElementById("sandboxStatusChip");
const sandboxUploadBtn = document.getElementById("sandboxUploadBtn");
const sandboxNewFileBtn = document.getElementById("sandboxNewFileBtn");
const sandboxSaveBtn = document.getElementById("sandboxSaveBtn");
const sandboxDeleteBtn = document.getElementById("sandboxDeleteBtn");
const sandboxAnalyzeBtn = document.getElementById("sandboxAnalyzeBtn");
const sandboxApplyBtn = document.getElementById("sandboxApplyBtn");
const sandboxClearAnalysisBtn = document.getElementById("sandboxClearAnalysisBtn");
const sandboxFilePathInput = document.getElementById("sandboxFilePathInput");
const sandboxFileEditor = document.getElementById("sandboxFileEditor");
const sandboxChangeList = document.getElementById("sandboxChangeList");
const sandboxJsonPreview = document.getElementById("sandboxJsonPreview");
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
const toolsToggleBtn = document.getElementById("toolsToggleBtn");
const fileInput = document.getElementById("fileInput");
const sandboxFileInput = document.getElementById("sandboxFileInput");
const attachmentList = document.getElementById("attachmentList");
const brandHomeBtn = document.getElementById("brandHomeBtn");
const homeScreen = document.getElementById("homeScreen");
const homeStartBtn = document.getElementById("homeStartBtn");
const clearBtn = document.getElementById("clearBtn");
const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
const chatSearchBar = document.getElementById("chatSearchBar");
const chatSearchInput = document.getElementById("chatSearchInput");
const chatSearchCount = document.getElementById("chatSearchCount");
const chatSearchPrev = document.getElementById("chatSearchPrev");
const chatSearchNext = document.getElementById("chatSearchNext");
const chatSearchClose = document.getElementById("chatSearchClose");
const composerModelPicker = document.getElementById("composerModelPicker");
const modelPickerBtn = document.getElementById("modelPickerBtn");
const modelPickerIcon = document.getElementById("modelPickerIcon");
const modelPickerBtnText = document.getElementById("modelPickerBtnText");
const modelPickerMenu = document.getElementById("modelPickerMenu");
const newChatBtn = document.getElementById("newChatBtn");
const currentSessionBtn = document.getElementById("currentSessionBtn");
const savedChatsList = document.getElementById("savedChatsList");
const cooldownEl = document.getElementById("cooldown");
const appRoot = document.querySelector(".app");
const banOverlay = document.getElementById("banOverlay");
const thinkingBurnoutModal = document.getElementById("thinkingBurnoutModal");
const burnoutCloseBtn = document.getElementById("burnoutCloseBtn");
const burnoutOkBtn = document.getElementById("burnoutOkBtn");
const burnoutResetLabel = document.getElementById("burnoutResetLabel");
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

// Elixir Network Partnership Modal
const elixirPartnershipModal = document.getElementById("elixirPartnershipModal");
const elixirCloseBtn = document.getElementById("elixirCloseBtn");
const elixirOkBtn = document.getElementById("elixirOkBtn");
const ELIXIR_PARTNERSHIP_SEEN_KEY = "rok_elixir_partnership_seen";
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
const onboardingModal = document.getElementById("onboardingModal");
const onboardingCloseBtn = document.getElementById("onboardingCloseBtn");
const onboardingBackBtn = document.getElementById("onboardingBackBtn");
const onboardingNextBtn = document.getElementById("onboardingNextBtn");
const onboardingSkipBtn = document.getElementById("onboardingSkipBtn");
const onboardingNameInput = document.getElementById("onboardingNameInput");

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
const USER_SETTINGS_KEY = "rok.settings.v1";
const LOCAL_LAST_MODEL_KEY = "rok.lastModelId.v1";
const LOCAL_ONBOARDING_KEY = "rok.onboarding.v1";
const LOCAL_TITAN_LOCK_UNTIL_KEY = "rok.titanLockUntil.v1";
const LOCAL_DAEDALUS_LOCK_UNTIL_KEY = "rok.daedalusLockUntil.v1";
const LOCAL_TOS_ACCEPTED_KEY = "rok.tosAccepted.v1";
const TOS_VERSION = 1;
/** Bump this to force every browser to see the tour one more time after deploy. */
const ONBOARDING_TOUR_VERSION = 2;
const MAX_LOCAL_SESSIONS = 30;
const DEFAULT_CHAT_MODEL = "qwen3.5:9b";
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
  customSystemPrompt: "",
  preferredName: ""
};
// Model IDs are now sourced from the server via /api/models.
// SUPPORTED_MODEL_IDS is kept as an empty set so all server-returned models are accepted.
const SUPPORTED_MODEL_IDS = new Set();
const DEFAULT_MODEL_OPTIONS = [
  { id: "gpt-oss:20b-cloud", label: "ROK Hermes" },
  { id: "gpt-oss:120b-cloud", label: "ROK Titan" },
  { id: "glm-5.1:cloud", label: "ROK Daedalus" }
];
const KNOWN_MODEL_LABELS = {
  "qwen3.5:9b": "ROK Hermes",
  "gpt-oss:20b-cloud": "ROK Hermes",
  "gpt-oss:120b-cloud": "ROK Titan",
  "kimi-k2.5:cloud": "kimi-k2.5:cloud",
  "glm-5.1:cloud": "ROK Daedalus"
};
const MODEL_DESCRIPTIONS = {
  "qwen3.5:9b": "Hermes — swift and sharp. Fast responses for quick questions, experiments, and everyday drafting.",
  "gpt-oss:20b-cloud": "ROK Hermes — fast cloud replies for everyday questions.",
  "gpt-oss:120b-cloud": "ROK Titan — largest cloud model for deeper reasoning.",
  "glm-5.1:cloud": "ROK Daedalus — specialized cloud model with its own daily message limit."
};
const WORKSPACE_TAB_KEYS = ["chat", "workspace", "sandbox", "math"];
/** Text chat models shown in the composer (vision model is server-selected when images are attached). */
const COMPOSER_TEXT_MODEL_ORDER = ["gpt-oss:20b-cloud", "gpt-oss:120b-cloud", "glm-5.1:cloud"];
/** Icons + labels for the composer model control (paths relative to index.html). */
const COMPOSER_MODEL_ASSETS = {
  "gpt-oss:20b-cloud": { label: "ROK Hermes", icon: "rokhermes.png", alt: "ROK Hermes" },
  "gpt-oss:120b-cloud": { label: "ROK Titan", icon: "roktitan.png", alt: "ROK Titan" },
  "glm-5.1:cloud": { label: "ROK Daedalus", icon: "rokdaedalus.png", alt: "ROK Daedalus" }
};
const HERMES_MODEL_ID = "gpt-oss:20b-cloud";
const TITAN_MODEL_ID = "gpt-oss:120b-cloud";
const DAEDALUS_MODEL_ID = "glm-5.1:cloud";
const DEFAULT_TITAN_LOCK_WINDOW_MS = 3 * 60 * 60 * 1000;
const DEFAULT_DAEDALUS_LOCK_WINDOW_MS = 3 * 60 * 60 * 1000;
const SANDBOX_DEFAULT_PROMPT = "Analyze this sandbox and propose the next file-by-file code changes.";
const SANDBOX_MAX_FILES = 48;
const SANDBOX_MAX_FILE_CHARS = 24_000;
let titanLockWindowMs = DEFAULT_TITAN_LOCK_WINDOW_MS;
let daedalusLockWindowMs = DEFAULT_DAEDALUS_LOCK_WINDOW_MS;
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
let sandboxDraftFileId = "";
let sandboxDraftPath = "";
let sandboxDraftContent = "";
let sandboxDraftDirty = false;
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
let toolsEnabled = false;
let modelPickerOpen = false;

const hasMarked = typeof marked !== "undefined";
const hasKaTeX = typeof katex !== "undefined";
const hasDOMPurify = typeof DOMPurify !== "undefined";
if (hasMarked) {
  marked.setOptions({ breaks: true, gfm: true });
}

function sanitizeModelId(rawModel) {
  let value = String(rawModel || "").trim().toLowerCase();
  if (value === "llava:latest") value = "llava-llama3";
  if (!value || value.length > 80) return "";
  if (!/^[a-z0-9._:\-/:]+$/.test(value)) return "";
  return value;
}

function normalizeModelOptions(rawOptions) {
  const candidates = Array.isArray(rawOptions) && rawOptions.length
    ? [...rawOptions, ...DEFAULT_MODEL_OPTIONS]
    : DEFAULT_MODEL_OPTIONS;
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
    if (!id || seen.has(id)) continue;
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

function getMergedSystemPromptForApi() {
  const custom = getCustomSystemPromptHeaderValue();
  let name = "";
  try {
    const rawSettings = localStorage.getItem(USER_SETTINGS_KEY);
    if (rawSettings) {
      const parsed = JSON.parse(rawSettings);
      if (parsed && typeof parsed === "object" && typeof parsed.preferredName === "string") {
        name = parsed.preferredName.trim();
      }
    }
  } catch {
    name = "";
  }
  if (name.length > 64) {
    name = name.slice(0, 64);
  }
  const identity = name
    ? `User context: The user goes by "${name}". Address them by this name when it feels natural in conversation.`
    : "";
  if (custom && identity) {
    return `${custom}\n\n${identity}`;
  }
  return custom || identity;
}

function buildApiHeaders(includeJson) {
  const headers = {};
  if (includeJson) {
    headers["Content-Type"] = "application/json";
    const systemPrompt = getMergedSystemPromptForApi();
    if (systemPrompt) {
      headers["X-Custom-System-Prompt"] = systemPrompt;
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
  const base = options || {};
  // Cross-origin API calls must include cookies so the server session (and thinking quota) survives refresh.
  const requestOptions = { ...base, credentials: base.credentials ?? "include" };
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
    return { token: raw, thinking: "", status: "", done: false, tool_calls: null, assistant_content: "" };
  }

  let parsed = null;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return { token: raw, thinking: "", status: "", done: false, tool_calls: null, assistant_content: "" };
  }
  if (!parsed || typeof parsed !== "object") {
    return { token: "", thinking: "", status: "", done: false, tool_calls: null, assistant_content: "" };
  }

  const done = Boolean(parsed.done);
  const thinking = typeof parsed.thinking === "string" ? parsed.thinking : "";
  const status = typeof parsed.status === "string" ? parsed.status : "";
  const tool_calls = Array.isArray(parsed.tool_calls) ? parsed.tool_calls : null;
  const assistant_content = typeof parsed.assistant_content === "string" ? parsed.assistant_content : "";
  for (const key of ["token", "response", "reply", "text", "message", "content"]) {
    const value = parsed[key];
    if (typeof value === "string") {
      return { token: value, thinking, status, done, tool_calls, assistant_content };
    }
  }

  if (parsed.message && typeof parsed.message === "object" && typeof parsed.message.content === "string") {
    return { token: parsed.message.content, thinking, status, done, tool_calls, assistant_content };
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
      return { token: joined, thinking, status, done: done || choiceDone, tool_calls, assistant_content };
    }
    if (done || choiceDone) {
      return { token: "", thinking: "", status, done: true, tool_calls: null, assistant_content: "" };
    }
  }

  return { token: "", thinking, status, done, tool_calls, assistant_content };
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
        enable_thinking: false
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

function savePreferredNameToStorage(rawName) {
  const name = String(rawName || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 64);
  try {
    const s = { ...loadUserSettingsFromStorage(), preferredName: name };
    localStorage.setItem(USER_SETTINGS_KEY, JSON.stringify(s));
    userSettings = s;
    applyUserSettingsToRuntime({ syncModelDefaults: false });
  } catch {
    // Ignore storage write failures.
  }
}

function loadOnboardingRecord() {
  try {
    const raw = localStorage.getItem(LOCAL_ONBOARDING_KEY);
    if (!raw) return { completed: false, version: 0 };
    const p = JSON.parse(raw);
    if (!p || typeof p !== "object") return { completed: false, version: 0 };
    return {
      completed: p.completed === true,
      version: typeof p.version === "number" ? p.version : 0,
    };
  } catch {
    return { completed: false, version: 0 };
  }
}

function saveOnboardingCompletedRecord() {
  try {
    localStorage.setItem(
      LOCAL_ONBOARDING_KEY,
      JSON.stringify({
        completed: true,
        version: ONBOARDING_TOUR_VERSION,
        completedAt: new Date().toISOString(),
      })
    );
  } catch {
    // Ignore storage write failures.
  }
}

function isOnboardingCompleted() {
  const rec = loadOnboardingRecord();
  return rec.completed === true && rec.version === ONBOARDING_TOUR_VERSION;
}

let onboardingStepIndex = 0;
const ONBOARDING_NAME_SLIDE = 3;

function renderOnboardingStep() {
  for (let i = 0; i <= 3; i += 1) {
    const slide = document.getElementById(`onboardingSlide${i}`);
    if (slide) slide.hidden = i !== onboardingStepIndex;
  }
  document.querySelectorAll("[data-onb-dot]").forEach((dot, i) => {
    dot.classList.toggle("is-active", i === onboardingStepIndex);
  });
  if (onboardingBackBtn) {
    onboardingBackBtn.hidden = onboardingStepIndex === 0;
  }
  if (onboardingNextBtn) {
    onboardingNextBtn.textContent = onboardingStepIndex >= ONBOARDING_NAME_SLIDE ? "Start chatting" : "Next";
  }
  if (onboardingSkipBtn) {
    onboardingSkipBtn.textContent = onboardingStepIndex >= ONBOARDING_NAME_SLIDE ? "Skip name" : "Skip tour";
  }
}

function openOnboardingModal() {
  if (!onboardingModal) return;
  onboardingStepIndex = 0;
  renderOnboardingStep();
  onboardingModal.hidden = false;
  onboardingModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeOnboardingModal() {
  if (!onboardingModal) return;
  onboardingModal.hidden = true;
  onboardingModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function enterAppFromHome() {
  hideHomeScreen();
  checkServerOnBoot();
  renderWorkspaceUI({ focus: true });
}

// --- Terms of Service gate ---
function hasTosBeenAccepted() {
  try {
    const raw = localStorage.getItem(LOCAL_TOS_ACCEPTED_KEY);
    if (!raw) return false;
    const p = JSON.parse(raw);
    return p && p.accepted === true && p.version === TOS_VERSION;
  } catch {
    return false;
  }
}

function saveTosAccepted() {
  try {
    localStorage.setItem(LOCAL_TOS_ACCEPTED_KEY, JSON.stringify({
      accepted: true,
      version: TOS_VERSION,
      acceptedAt: new Date().toISOString(),
    }));
  } catch {}
}

function showTosModal(onAccept) {
  let overlay = document.getElementById("tosModal");
  if (overlay) overlay.remove();
  overlay = document.createElement("div");
  overlay.id = "tosModal";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "tosModalTitle");
  overlay.style.cssText = [
    "position:fixed", "inset:0", "background:rgba(0,0,0,0.82)", "z-index:99999",
    "display:flex", "align-items:center", "justify-content:center", "padding:16px"
  ].join(";");
  overlay.innerHTML = `
    <div style="background:var(--surface-1,#1c1c1e);border:1px solid var(--border,#333);border-radius:14px;max-width:500px;width:100%;padding:32px 28px;color:var(--text-1,#eee);box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <h2 id="tosModalTitle" style="margin:0 0 8px;font-size:20px;font-weight:700;letter-spacing:-0.3px">Welcome to ROK</h2>
      <p style="margin:0 0 6px;font-size:13px;font-weight:600;color:var(--accent,#d14b4b);text-transform:uppercase;letter-spacing:.06em">Terms of Service</p>
      <div style="margin:14px 0 22px;font-size:14px;line-height:1.7;color:var(--text-2,#aaa);max-height:220px;overflow-y:auto;padding-right:4px">
        <p style="margin:0 0 10px">By using ROK you agree to the following:</p>
        <ul style="margin:0 0 10px;padding-left:20px">
          <li style="margin-bottom:6px">ROK is provided as-is by ROKTEAM without warranties of any kind.</li>
          <li style="margin-bottom:6px">You will not use ROK to generate harmful, abusive, or illegal content.</li>
          <li style="margin-bottom:6px">ROK's responses are AI-generated and may be inaccurate. Do not rely on them for medical, legal, or financial decisions.</li>
          <li style="margin-bottom:6px">You take full responsibility for how you use ROK's outputs.</li>
          <li style="margin-bottom:6px">ROK may log anonymized usage data to improve the service.</li>
          <li style="margin-bottom:6px">These terms may be updated. Continued use constitutes acceptance.</li>
        </ul>
        <p style="margin:0">ROK is intended for general-purpose use. Model availability is subject to daily limits and may vary.</p>
      </div>
      <div style="display:flex;gap:10px;justify-content:flex-end">
        <button id="tosDeclineBtn" style="padding:10px 20px;border-radius:8px;border:1px solid var(--border,#444);background:transparent;color:var(--text-2,#aaa);cursor:pointer;font-size:14px;font-weight:500">Decline</button>
        <button id="tosAcceptBtn" style="padding:10px 22px;border-radius:8px;border:none;background:var(--accent,#d14b4b);color:#fff;cursor:pointer;font-size:14px;font-weight:700;letter-spacing:.01em">I Agree</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  document.getElementById("tosAcceptBtn").addEventListener("click", () => {
    saveTosAccepted();
    overlay.remove();
    if (typeof onAccept === "function") onAccept();
  });

  document.getElementById("tosDeclineBtn").addEventListener("click", () => {
    // Replace content with a polite decline message
    const inner = overlay.querySelector("div");
    if (inner) {
      inner.innerHTML = `
        <h2 style="margin:0 0 14px;font-size:18px;font-weight:700;color:var(--text-1,#eee)">Terms not accepted</h2>
        <p style="margin:0;font-size:14px;line-height:1.6;color:var(--text-2,#aaa)">You must accept the Terms of Service to use ROK. Please close this tab or refresh and try again.</p>`;
    }
  });
}

function enterAppWithTosCheck() {
  if (hasTosBeenAccepted()) {
    enterAppFromHome();
  } else {
    showTosModal(() => enterAppFromHome());
  }
}

function finishOnboardingAndEnter() {
  saveOnboardingCompletedRecord();
  closeOnboardingModal();
  enterAppWithTosCheck();
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

// --- Thinking quota helpers ---
// Quota is stored as { count: number, resetAt: timestamp }.
// resetAt is set to now + 24h on the first thinking-enabled message of a window.

// --- Server-side thinking quota (state comes from server, cannot be faked in localStorage) ---
// Updated by refreshClientConfigFromServer() on boot and by applyThinkingQuotaFromHeaders()
// after each chat response. The server enforces the real limit; this is UI-only.
let serverThinkingQuota = { count: 0, limit: 10, exhausted: false, resetSec: 0, updatedAt: 0 };
let titanLockUntil = 0;

// --- Daedalus quota (completely independent of Titan) ---
let serverDaedalusQuota = { count: 0, limit: 20, exhausted: false, resetSec: 0, updatedAt: 0 };
let daedalusLockUntil = 0;

function loadTitanLockUntilFromStorage() {
  try {
    const raw = localStorage.getItem(LOCAL_TITAN_LOCK_UNTIL_KEY);
    if (!raw) return 0;
    const parsed = Number(raw);
    if (!Number.isFinite(parsed) || parsed <= Date.now()) return 0;
    return parsed;
  } catch (_) {
    return 0;
  }
}

function saveTitanLockUntilToStorage(value) {
  try {
    if (value > Date.now()) {
      localStorage.setItem(LOCAL_TITAN_LOCK_UNTIL_KEY, String(Math.floor(value)));
    } else {
      localStorage.removeItem(LOCAL_TITAN_LOCK_UNTIL_KEY);
    }
  } catch (_) {
    // Ignore storage write failures.
  }
}

function setTitanLockUntil(value) {
  titanLockUntil = Math.max(0, Number(value) || 0);
  saveTitanLockUntilToStorage(titanLockUntil);
}

function getTitanLockRemainingMs() {
  return Math.max(0, titanLockUntil - Date.now());
}
titanLockUntil = loadTitanLockUntilFromStorage();

function isTitanQuotaLocked() {
  const remainingMs = getTitanLockRemainingMs();
  if (remainingMs <= 0 && titanLockUntil > 0) {
    setTitanLockUntil(0);
    return false;
  }
  return remainingMs > 0;
}

// --- Daedalus lock helpers (independent of Titan) ---
function loadDaedalusLockUntilFromStorage() {
  try {
    const raw = localStorage.getItem(LOCAL_DAEDALUS_LOCK_UNTIL_KEY);
    if (!raw) return 0;
    const parsed = Number(raw);
    if (!Number.isFinite(parsed) || parsed <= Date.now()) return 0;
    return parsed;
  } catch (_) {
    return 0;
  }
}

function saveDaedalusLockUntilToStorage(value) {
  try {
    if (value > Date.now()) {
      localStorage.setItem(LOCAL_DAEDALUS_LOCK_UNTIL_KEY, String(Math.floor(value)));
    } else {
      localStorage.removeItem(LOCAL_DAEDALUS_LOCK_UNTIL_KEY);
    }
  } catch (_) {}
}

function setDaedalusLockUntil(value) {
  daedalusLockUntil = Math.max(0, Number(value) || 0);
  saveDaedalusLockUntilToStorage(daedalusLockUntil);
}

function getDaedalusLockRemainingMs() {
  return Math.max(0, daedalusLockUntil - Date.now());
}

daedalusLockUntil = loadDaedalusLockUntilFromStorage();

function isDaedalusQuotaLocked() {
  const remainingMs = getDaedalusLockRemainingMs();
  if (remainingMs <= 0 && daedalusLockUntil > 0) {
    setDaedalusLockUntil(0);
    return false;
  }
  return remainingMs > 0;
}

function forceHermesIfDaedalusLocked(notify = false) {
  if (!isDaedalusQuotaLocked()) return;
  if (getCurrentSessionModel() !== DAEDALUS_MODEL_ID) return;
  setCurrentSessionModel(HERMES_MODEL_ID);
  if (notify && !isHomeScreenVisible()) {
    const remainingMs = getDaedalusLockRemainingMs();
    const resetMsg = remainingMs > 0 ? ` Daedalus unlocks in ${formatThinkingResetTime(remainingMs)}.` : "";
    addMessage("system", `ROK Daedalus has reached its daily limit. Switched to ROK Hermes.${resetMsg}`);
  }
}

function applyDaedalusQuota(quota) {
  if (!quota || typeof quota !== "object") return;
  const wasExhausted = Boolean(serverDaedalusQuota.exhausted);
  const limitVal = typeof quota.limit === "number" ? quota.limit : serverDaedalusQuota.limit;
  const unlimited = limitVal <= 0;
  serverDaedalusQuota = {
    count:     typeof quota.count     === "number"  ? quota.count     : serverDaedalusQuota.count,
    limit:     limitVal,
    exhausted: unlimited ? false : (typeof quota.exhausted === "boolean" ? quota.exhausted : serverDaedalusQuota.exhausted),
    resetSec:  typeof quota.reset_sec === "number"  ? quota.reset_sec : serverDaedalusQuota.resetSec,
    updatedAt: Date.now(),
  };
  const isExhausted = Boolean(serverDaedalusQuota.exhausted);
  // Only act on the transition moment, never on repeat config refreshes
  const justExhausted = !wasExhausted && isExhausted && limitVal > 0;
  if (justExhausted) {
    setDaedalusLockUntil(Date.now() + daedalusLockWindowMs);
  }
  refreshSendState();
  // Notify + switch model only on transition, and only when in chat
  forceHermesIfDaedalusLocked(justExhausted);
}

function applyDaedalusQuotaFromHeaders(response) {
  if (!response || !response.headers || response.headers.get("X-Daedalus-Limit") == null) return;
  const count     = parseInt(response.headers.get("X-Daedalus-Count") || "", 10);
  const limit     = parseInt(response.headers.get("X-Daedalus-Limit") || "", 10);
  const exhausted = (response.headers.get("X-Daedalus-Exhausted") || "").toLowerCase() === "true";
  const resetSec  = parseInt(response.headers.get("X-Daedalus-Reset-Sec") || "0", 10);
  const lockSec   = parseInt(response.headers.get("X-Daedalus-Lock-Sec") || "0", 10);
  if (isNaN(count) || isNaN(limit)) return;
  if (lockSec > 0) daedalusLockWindowMs = Math.max(60_000, lockSec * 1000);
  applyDaedalusQuota({ count, limit, exhausted, reset_sec: resetSec });
}

function forceHermesIfTitanLocked(notify = false) {
  if (!isTitanQuotaLocked()) return;
  if (getCurrentSessionModel() !== TITAN_MODEL_ID) return;
  setCurrentSessionModel(HERMES_MODEL_ID);
  if (notify && !isHomeScreenVisible()) {
    const remainingMs = getTitanLockRemainingMs();
    const resetMsg = remainingMs > 0 ? ` Titan unlocks in ${formatThinkingResetTime(remainingMs)}.` : "";
    addMessage("system", `ROK Titan is temporarily locked after reaching its message limit. You can use ROK Hermes until reset.${resetMsg}`);
  }
}

function applyServerThinkingQuota(quota) {
  if (!quota || typeof quota !== "object") return;
  const wasExhausted = Boolean(serverThinkingQuota.exhausted);
  const limitVal = typeof quota.limit === "number" ? quota.limit : serverThinkingQuota.limit;
  const unlimited = limitVal <= 0;
  serverThinkingQuota = {
    count:     typeof quota.count     === "number"  ? quota.count     : serverThinkingQuota.count,
    limit:     limitVal,
    exhausted: unlimited ? false : (typeof quota.exhausted === "boolean" ? quota.exhausted : serverThinkingQuota.exhausted),
    resetSec:  typeof quota.reset_sec === "number"  ? quota.reset_sec : serverThinkingQuota.resetSec,
    updatedAt: Date.now(),
  };
  const isExhausted = Boolean(serverThinkingQuota.exhausted);
  // Only act on the transition (not-exhausted → exhausted), never on repeat calls
  const justExhausted = !wasExhausted && isExhausted && limitVal > 0;
  if (justExhausted) {
    setTitanLockUntil(Date.now() + titanLockWindowMs);
  }
  refreshSendState();
  // Show the burnout modal only on the transition moment, and only when in chat (not home screen)
  if (unlimited || !isTitanQuotaLocked()) {
    hideThinkingBurnoutModal();
  } else if (justExhausted && !isHomeScreenVisible()) {
    showThinkingBurnoutModal();
  }
  // Notify + switch model only on transition
  forceHermesIfTitanLocked(justExhausted);
}

function applyThinkingQuotaFromHeaders(response) {
  // Called after each /api/chat response (requires Access-Control-Expose-Headers on server)
  if (!response || !response.headers || response.headers.get("X-Thinking-Limit") == null) {
    return;
  }
  const count     = parseInt(response.headers.get("X-Thinking-Count") || "", 10);
  const limit     = parseInt(response.headers.get("X-Thinking-Limit") || "", 10);
  const exhausted = (response.headers.get("X-Thinking-Exhausted") || "").toLowerCase() === "true";
  const resetSec  = parseInt(response.headers.get("X-Thinking-Reset-Sec") || "0", 10);
  if (isNaN(count) || isNaN(limit)) {
    return;
  }
  applyServerThinkingQuota({ count, limit, exhausted, reset_sec: resetSec });
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

function showThinkingBurnoutModal() {
  if (!thinkingBurnoutModal) return;
  // Update the reset time label
  const remainingMs = getTitanLockRemainingMs();
  if (burnoutResetLabel) {
    burnoutResetLabel.textContent = remainingMs > 0
      ? `ROK Titan unlocks in ${formatThinkingResetTime(remainingMs)}. During this cooldown, only ROK Hermes is available.`
      : "ROK Titan is temporarily locked. During this cooldown, only ROK Hermes is available.";
  }
  thinkingBurnoutModal.hidden = false;
  thinkingBurnoutModal.setAttribute("aria-hidden", "false");
}

function hideThinkingBurnoutModal() {
  if (!thinkingBurnoutModal) return;
  thinkingBurnoutModal.hidden = true;
  thinkingBurnoutModal.setAttribute("aria-hidden", "true");
}

function showThinkingQuotaToast(message) {
  // For non-limit-hit cases (e.g. click-blocked) — small inline toast
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
    if (payload && typeof payload === "object" && payload.thinking_policy && typeof payload.thinking_policy === "object") {
      const lockSec = Number(payload.thinking_policy.titan_lock_window_sec);
      if (Number.isFinite(lockSec) && lockSec > 0) {
        titanLockWindowMs = Math.max(60_000, Math.floor(lockSec * 1000));
      }
      const daedLockSec = Number(payload.thinking_policy.daedalus_lock_window_sec);
      if (Number.isFinite(daedLockSec) && daedLockSec > 0) {
        daedalusLockWindowMs = Math.max(60_000, Math.floor(daedLockSec * 1000));
      }
    }
    // Apply server-provided thinking quota (authoritative — replaces any stale UI state)
    if (payload && typeof payload === "object" && payload.thinking_quota) {
      applyServerThinkingQuota(payload.thinking_quota);
    }
    // Apply Daedalus quota (completely independent of Titan)
    if (payload && typeof payload === "object" && payload.daedalus_quota) {
      applyDaedalusQuota(payload.daedalus_quota);
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
  const name = String(loadUserSettingsFromStorage().preferredName || "").trim();
  const text = name
    ? `Hi, ${name}. ROK is ready — ask me anything.`
    : "ROK is ready. Ask me anything.";
  addMessage("system", text);
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

var autoScrollPaused = false;

function scrollToBottom() {
  if (!chat) return;
  if (autoScrollPaused) return;
  chat.scrollTo({ top: chat.scrollHeight, behavior: "smooth" });
}

function updateScrollFabVisibility() {
  var fab = document.getElementById("scrollFab");
  if (!fab || !chat) return;
  var atBottom = chat.scrollHeight - chat.scrollTop - chat.clientHeight < 60;
  autoScrollPaused = !atBottom;
  fab.hidden = atBottom;
}

function scrollFabClick() {
  if (!chat) return;
  autoScrollPaused = false;
  chat.scrollTo({ top: chat.scrollHeight, behavior: "smooth" });
  var fab = document.getElementById("scrollFab");
  if (fab) fab.hidden = true;
}

// Create scroll FAB element
(function () {
  var fab = document.createElement("button");
  fab.id = "scrollFab";
  fab.type = "button";
  fab.className = "scroll-fab";
  fab.hidden = true;
  fab.setAttribute("aria-label", "Scroll to bottom");
  fab.title = "Scroll to latest message";
  fab.innerHTML = "&#8595;";
  fab.addEventListener("click", scrollFabClick);
  document.body.appendChild(fab);
})();

if (chat) {
  chat.addEventListener("scroll", function () {
    updateScrollFabVisibility();
  });
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

function makeSandboxFileId() {
  return `f-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function normalizeSandboxFilePath(rawPath) {
  return String(rawPath || "")
    .replace(/\\/g, "/")
    .replace(/^\.\//, "")
    .replace(/^\/+/, "")
    .trim();
}

function createDefaultSandboxAnalysis() {
  return {
    raw: "",
    summary: "",
    setupSteps: [],
    files: [],
    lastPrompt: "",
    model: "",
    createdAt: 0
  };
}

function normalizeSandboxPlanFile(rawFile) {
  if (!rawFile || typeof rawFile !== "object") return null;
  const path = normalizeSandboxFilePath(rawFile.path || rawFile.file || rawFile.name);
  if (!path) return null;
  const rawAction = String(rawFile.action || rawFile.op || rawFile.type || "").trim().toLowerCase();
  let action = rawAction;
  if (action === "remove") action = "delete";
  if (action === "new") action = "create";
  if (!["create", "update", "delete"].includes(action)) {
    action = "update";
  }
  return {
    path,
    action,
    reason: typeof rawFile.reason === "string" && rawFile.reason.trim() ? rawFile.reason.trim() : "AI proposed a file change.",
    language: typeof rawFile.language === "string" && rawFile.language.trim() ? rawFile.language.trim() : "",
    content: action === "delete" ? "" : String(rawFile.content || rawFile.contents || rawFile.code || "")
  };
}

function normalizeSandboxAnalysis(rawAnalysis) {
  const fallback = createDefaultSandboxAnalysis();
  if (!rawAnalysis || typeof rawAnalysis !== "object") {
    return fallback;
  }
  const rawFiles = Array.isArray(rawAnalysis.files)
    ? rawAnalysis.files
    : Array.isArray(rawAnalysis.changes)
    ? rawAnalysis.changes
    : [];
  const files = rawFiles
    .map((item) => normalizeSandboxPlanFile(item))
    .filter(Boolean);
  const rawSetupSteps = Array.isArray(rawAnalysis.setupSteps)
    ? rawAnalysis.setupSteps
    : Array.isArray(rawAnalysis.setup_steps)
    ? rawAnalysis.setup_steps
    : [];
  return {
    raw: typeof rawAnalysis.raw === "string" ? rawAnalysis.raw : fallback.raw,
    summary: typeof rawAnalysis.summary === "string" && rawAnalysis.summary.trim()
      ? rawAnalysis.summary.trim()
      : fallback.summary,
    setupSteps: rawSetupSteps
      .map((item) => String(item || "").trim())
      .filter(Boolean)
      .slice(0, 12),
    files,
    lastPrompt: typeof rawAnalysis.lastPrompt === "string" ? rawAnalysis.lastPrompt : fallback.lastPrompt,
    model: typeof rawAnalysis.model === "string" ? rawAnalysis.model : fallback.model,
    createdAt: Number.isFinite(Number(rawAnalysis.createdAt)) ? Number(rawAnalysis.createdAt) : fallback.createdAt
  };
}

function createSandboxFile(path = "", content = "") {
  return {
    id: makeSandboxFileId(),
    path: normalizeSandboxFilePath(path) || `sandbox/untitled-${Date.now()}.txt`,
    content: String(content || ""),
    updatedAt: Date.now()
  };
}

function normalizeSandboxFile(rawFile, index = 0) {
  const fallback = createSandboxFile(`sandbox/untitled-${index + 1}.txt`, "");
  if (!rawFile || typeof rawFile !== "object") {
    return fallback;
  }
  return {
    id: typeof rawFile.id === "string" && rawFile.id.trim() ? rawFile.id.trim() : fallback.id,
    path: normalizeSandboxFilePath(rawFile.path) || fallback.path,
    content: typeof rawFile.content === "string" ? rawFile.content : String(rawFile.content || ""),
    updatedAt: Number.isFinite(Number(rawFile.updatedAt)) ? Number(rawFile.updatedAt) : fallback.updatedAt
  };
}

function createDefaultSandbox() {
  return {
    files: [],
    selectedFileId: "",
    analysis: createDefaultSandboxAnalysis(),
    statusText: "Idle"
  };
}

function normalizeSandbox(rawSandbox) {
  const fallback = createDefaultSandbox();
  if (!rawSandbox || typeof rawSandbox !== "object") {
    return fallback;
  }
  const seenPaths = new Set();
  const files = Array.isArray(rawSandbox.files)
    ? rawSandbox.files
        .map((item, index) => normalizeSandboxFile(item, index))
        .filter((item) => {
          const key = item.path.toLowerCase();
          if (seenPaths.has(key)) return false;
          seenPaths.add(key);
          return true;
        })
    : [];
  const selectedFileId =
    typeof rawSandbox.selectedFileId === "string" && files.some((item) => item.id === rawSandbox.selectedFileId)
      ? rawSandbox.selectedFileId
      : files[0]?.id || "";
  return {
    files,
    selectedFileId,
    analysis: normalizeSandboxAnalysis(rawSandbox.analysis),
    statusText: typeof rawSandbox.statusText === "string" && rawSandbox.statusText.trim()
      ? rawSandbox.statusText.trim()
      : fallback.statusText
  };
}

function createDefaultWorkspace() {
  return {
    activeTab: "chat",
    content: "",
    assistantMemory: createDefaultWorkspaceAssistantMemory(),
    sandbox: createDefaultSandbox()
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
    assistantMemory: normalizeWorkspaceAssistantMemory(rawWorkspace.assistantMemory),
    sandbox: normalizeSandbox(rawWorkspace.sandbox)
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
    if (COMPOSER_TEXT_MODEL_ORDER.includes(candidate)) {
      return candidate;
    }
    return DEFAULT_MODEL_ID;
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

function isSandboxSessionActive() {
  const current = getWorkspaceCurrentSession();
  if (!current) return false;
  return current.workspace.activeTab === "sandbox";
}

function getCurrentSandboxState() {
  const current = getWorkspaceCurrentSession();
  if (!current) {
    return createDefaultSandbox();
  }
  current.workspace.sandbox = normalizeSandbox(current.workspace.sandbox);
  return current.workspace.sandbox;
}

function getSelectedSandboxFile(sandbox = getCurrentSandboxState()) {
  if (!sandbox || !Array.isArray(sandbox.files)) return null;
  return sandbox.files.find((item) => item.id === sandbox.selectedFileId) || sandbox.files[0] || null;
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
  const current = getWorkspaceCurrentSession();
  if (!current) return;
  if (workspaceEditor) {
    current.workspace.content = workspaceEditor.value || "";
  }
  saveSandboxDraftToState({ silent: true, skipRender: true });
  refreshWorkspaceDocumentToolbarState();
}

function countLines(text = "") {
  if (!text) return 0;
  return String(text).split(/\r?\n/).length;
}

function setSandboxStatus(statusText, tone = "idle", options = {}) {
  const { save = true } = options;
  const sandbox = getCurrentSandboxState();
  sandbox.statusText = String(statusText || "").trim() || "Idle";
  if (sandboxStatusChip) {
    sandboxStatusChip.textContent = sandbox.statusText;
    sandboxStatusChip.dataset.tone = tone;
  }
  if (save) {
    syncCurrentSessionFromHistory();
  }
}

function loadSandboxDraftFromSelectedFile(force = false) {
  const selectedFile = getSelectedSandboxFile();
  const nextId = selectedFile ? selectedFile.id : "";
  if (!force && sandboxDraftDirty && sandboxDraftFileId === nextId) {
    return;
  }
  sandboxDraftFileId = nextId;
  sandboxDraftPath = selectedFile ? selectedFile.path : "";
  sandboxDraftContent = selectedFile ? selectedFile.content : "";
  sandboxDraftDirty = false;
}

function markSandboxDraftDirty() {
  sandboxDraftDirty = true;
  if (sandboxStatusChip) {
    sandboxStatusChip.textContent = "Unsaved";
    sandboxStatusChip.dataset.tone = "idle";
  }
}

function saveSandboxDraftToState(options = {}) {
  const { silent = false, skipRender = false } = options;
  const sandbox = getCurrentSandboxState();
  const selectedFile = getSelectedSandboxFile(sandbox);
  if (!selectedFile) {
    sandboxDraftDirty = false;
    return false;
  }

  const nextPath = normalizeSandboxFilePath(sandboxFilePathInput ? sandboxFilePathInput.value : sandboxDraftPath);
  const nextContent = sandboxFileEditor ? sandboxFileEditor.value : sandboxDraftContent;
  if (!nextPath) {
    if (!silent) {
      setSandboxStatus("A file path is required.", "error");
    }
    return false;
  }
  const duplicate = sandbox.files.find((item) => item.id !== selectedFile.id && item.path.toLowerCase() === nextPath.toLowerCase());
  if (duplicate) {
    if (!silent) {
      setSandboxStatus("That file path already exists.", "error");
    }
    return false;
  }

  selectedFile.path = nextPath;
  selectedFile.content = String(nextContent || "");
  selectedFile.updatedAt = Date.now();
  sandbox.selectedFileId = selectedFile.id;
  sandboxDraftFileId = selectedFile.id;
  sandboxDraftPath = selectedFile.path;
  sandboxDraftContent = selectedFile.content;
  sandboxDraftDirty = false;
  sandbox.statusText = selectedFile.content.trim() ? "Saved" : "Empty";
  syncCurrentSessionFromHistory();
  if (!skipRender) {
    renderSandboxUI();
  }
  return true;
}

function getNextSandboxUntitledPath(files = []) {
  const usedPaths = new Set((files || []).map((item) => String(item.path || "").toLowerCase()));
  for (let i = 1; i <= 999; i += 1) {
    const candidate = `sandbox/untitled-${i}.txt`;
    if (!usedPaths.has(candidate.toLowerCase())) {
      return candidate;
    }
  }
  return `sandbox/untitled-${Date.now()}.txt`;
}

function selectSandboxFile(fileId, options = {}) {
  const { force = false } = options;
  const sandbox = getCurrentSandboxState();
  if (!force && sandboxDraftDirty && !saveSandboxDraftToState({ silent: false })) {
    renderSandboxUI();
    return;
  }
  sandbox.selectedFileId = fileId;
  syncCurrentSessionFromHistory();
  loadSandboxDraftFromSelectedFile(true);
  renderSandboxUI();
}

function createSandboxFileFromEditor(path = "", content = "") {
  if (sandboxDraftDirty && !saveSandboxDraftToState({ silent: false, skipRender: true })) {
    renderSandboxUI();
    return;
  }
  const sandbox = getCurrentSandboxState();
  const file = createSandboxFile(path || getNextSandboxUntitledPath(sandbox.files), content);
  sandbox.files.push(file);
  sandbox.selectedFileId = file.id;
  sandbox.statusText = "New file ready";
  syncCurrentSessionFromHistory();
  loadSandboxDraftFromSelectedFile(true);
  renderSandboxUI();
  if (sandboxFilePathInput) {
    sandboxFilePathInput.focus();
    sandboxFilePathInput.select();
  }
}

function deleteSelectedSandboxFile() {
  const sandbox = getCurrentSandboxState();
  const selectedFile = getSelectedSandboxFile(sandbox);
  if (!selectedFile) return;
  sandbox.files = sandbox.files.filter((item) => item.id !== selectedFile.id);
  sandbox.selectedFileId = sandbox.files[0]?.id || "";
  sandboxDraftFileId = "";
  sandboxDraftPath = "";
  sandboxDraftContent = "";
  sandboxDraftDirty = false;
  sandbox.statusText = sandbox.files.length ? "File deleted" : "Workspace empty";
  syncCurrentSessionFromHistory();
  loadSandboxDraftFromSelectedFile(true);
  renderSandboxUI();
}

function clearSandboxAnalysis() {
  const sandbox = getCurrentSandboxState();
  sandbox.analysis = createDefaultSandboxAnalysis();
  sandbox.statusText = sandbox.files.length ? "Idle" : "Workspace empty";
  syncCurrentSessionFromHistory();
  renderSandboxUI();
}

function applySandboxAnalysis() {
  const sandbox = getCurrentSandboxState();
  const plan = normalizeSandboxAnalysis(sandbox.analysis);
  if (!plan.files.length) {
    setSandboxStatus("No AI file changes to apply.", "idle");
    renderSandboxUI();
    return;
  }

  const fileMap = new Map(sandbox.files.map((item) => [item.path.toLowerCase(), item]));
  for (const change of plan.files) {
    const key = change.path.toLowerCase();
    if (change.action === "delete") {
      fileMap.delete(key);
      continue;
    }
    const existing = fileMap.get(key);
    if (existing) {
      existing.content = change.content;
      existing.updatedAt = Date.now();
    } else {
      fileMap.set(key, createSandboxFile(change.path, change.content));
    }
  }

  sandbox.files = Array.from(fileMap.values());
  sandbox.selectedFileId = sandbox.files.find((item) => plan.files.some((change) => change.action !== "delete" && change.path === item.path))?.id
    || sandbox.files[0]?.id
    || "";
  sandbox.statusText = `Applied ${plan.files.length} AI change${plan.files.length === 1 ? "" : "s"}`;
  syncCurrentSessionFromHistory();
  loadSandboxDraftFromSelectedFile(true);
  renderSandboxUI();
}

function renderSandboxAnalysisUI(analysis) {
  if (!sandboxChangeList || !sandboxJsonPreview) return;
  const files = Array.isArray(analysis.files) ? analysis.files : [];
  const setupSteps = Array.isArray(analysis.setupSteps) ? analysis.setupSteps : [];
  if (!files.length && !analysis.summary && !setupSteps.length) {
    sandboxChangeList.innerHTML = '<div class="sandbox-empty-state">No AI file changes yet. Ask ROK to build or edit something in Sandbox.</div>';
    sandboxJsonPreview.textContent = "No structured JSON yet.";
    return;
  }

  const summaryHtml = analysis.summary
    ? `<div class="sandbox-change-card"><div class="sandbox-change-top"><span class="sandbox-change-path">Summary</span><span class="sandbox-change-action" data-action="update">Plan</span></div><p class="sandbox-change-reason">${escapeHtml(analysis.summary)}</p></div>`
    : "";
  const setupHtml = setupSteps.length
    ? `<div class="sandbox-change-card"><div class="sandbox-change-top"><span class="sandbox-change-path">Setup</span><span class="sandbox-change-action" data-action="create">Steps</span></div><p class="sandbox-change-reason">${setupSteps.map((item) => escapeHtml(item)).join("<br>")}</p></div>`
    : "";
  const fileCards = files
    .map((change) => {
      const content = String(change.content || "");
      const lineCount = countLines(content);
      const charCount = content.length;
      return `<div class="sandbox-change-card"><div class="sandbox-change-top"><span class="sandbox-change-path">${escapeHtml(change.path)}</span><span class="sandbox-change-action" data-action="${escapeHtml(change.action)}">${escapeHtml(change.action)}</span></div><p class="sandbox-change-reason">${escapeHtml(change.reason || "AI proposed a file change.")}</p><p class="sandbox-change-meta">${escapeHtml(change.language || "text")} • ${escapeHtml(lineCount.toLocaleString())} lines • ${escapeHtml(charCount.toLocaleString())} chars</p></div>`;
    })
    .join("");
  sandboxChangeList.innerHTML = `${summaryHtml}${setupHtml}${fileCards}` || '<div class="sandbox-empty-state">No AI file changes yet.</div>';
  sandboxJsonPreview.textContent = analysis.raw || "No structured JSON yet.";
}

function renderSandboxUI() {
  if (!sandboxPanel) return;
  const sandbox = getCurrentSandboxState();
  const selectedFile = getSelectedSandboxFile(sandbox);
  if (!selectedFile) {
    sandbox.selectedFileId = "";
  } else if (sandbox.selectedFileId !== selectedFile.id) {
    sandbox.selectedFileId = selectedFile.id;
  }

  if (!sandboxDraftDirty || sandboxDraftFileId !== (selectedFile ? selectedFile.id : "")) {
    loadSandboxDraftFromSelectedFile(true);
  }

  if (sandboxFilesList) {
    const filesHtml = [...sandbox.files]
      .sort((a, b) => a.path.localeCompare(b.path))
      .map((file) => {
        const isActive = file.id === sandbox.selectedFileId ? " is-active" : "";
        const lineLabel = `${countLines(file.content).toLocaleString()} lines`;
        return `<button type="button" class="sandbox-file-btn${isActive}" data-sandbox-file-id="${escapeHtml(file.id)}"><span class="sandbox-file-path">${escapeHtml(file.path)}</span><span class="sandbox-file-meta">${escapeHtml(lineLabel)}</span></button>`;
      })
      .join("");
    sandboxFilesList.innerHTML = filesHtml || '<div class="sandbox-empty-state">No files yet. Upload files or create a new one to start coding.</div>';
  }

  if (sandboxCurrentFileLabel) {
    sandboxCurrentFileLabel.textContent = selectedFile ? selectedFile.path : "Select a file";
  }
  if (sandboxFileCount) {
    sandboxFileCount.textContent = `${sandbox.files.length.toLocaleString()} file${sandbox.files.length === 1 ? "" : "s"}`;
  }
  if (sandboxChangeCount) {
    const planFiles = sandbox.analysis && Array.isArray(sandbox.analysis.files) ? sandbox.analysis.files.length : 0;
    sandboxChangeCount.textContent = planFiles ? `${planFiles} AI change${planFiles === 1 ? "" : "s"}` : "No AI changes";
  }
  if (sandboxStatusChip) {
    const tone = sandbox.statusText.toLowerCase().includes("error")
      || sandbox.statusText.toLowerCase().includes("required")
      || sandbox.statusText.toLowerCase().includes("exists")
      ? "error"
      : sandbox.statusText === "Saved"
      ? "saved"
      : "idle";
    sandboxStatusChip.textContent = sandbox.statusText || "Idle";
    sandboxStatusChip.dataset.tone = tone;
  }
  if (sandboxFilePathInput) {
    sandboxFilePathInput.value = selectedFile ? sandboxDraftPath : "";
    sandboxFilePathInput.disabled = !selectedFile;
  }
  if (sandboxFileEditor) {
    sandboxFileEditor.value = selectedFile ? sandboxDraftContent : "";
    sandboxFileEditor.disabled = !selectedFile;
  }
  if (sandboxSaveBtn) {
    sandboxSaveBtn.disabled = !selectedFile;
  }
  if (sandboxDeleteBtn) {
    sandboxDeleteBtn.disabled = !selectedFile;
  }
  if (sandboxApplyBtn) {
    sandboxApplyBtn.disabled = !(sandbox.analysis && Array.isArray(sandbox.analysis.files) && sandbox.analysis.files.length);
  }
  renderSandboxAnalysisUI(normalizeSandboxAnalysis(sandbox.analysis));
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

function getComposerSelectableModels() {
  const fromCatalog = MODEL_OPTIONS.filter((item) => COMPOSER_TEXT_MODEL_ORDER.includes(item.id));
  if (fromCatalog.length) {
    return [...fromCatalog].sort(
      (a, b) => COMPOSER_TEXT_MODEL_ORDER.indexOf(a.id) - COMPOSER_TEXT_MODEL_ORDER.indexOf(b.id)
    );
  }
  return COMPOSER_TEXT_MODEL_ORDER.map((id) => ({
    id,
    label: KNOWN_MODEL_LABELS[id] || id
  }));
}

function setModelPickerOpen(nextOpen) {
  modelPickerOpen = Boolean(nextOpen);
  if (modelPickerMenu) {
    modelPickerMenu.hidden = !modelPickerOpen;
  }
  if (modelPickerBtn) {
    modelPickerBtn.setAttribute("aria-expanded", modelPickerOpen ? "true" : "false");
  }
}

function refreshComposerModelPicker() {
  if (!modelPickerMenu || !modelPickerBtn) return;
  const sessionModel = getCurrentSessionModel();
  const rows = getComposerSelectableModels();
  const titanLocked = isTitanQuotaLocked();
  const daedalusLocked = isDaedalusQuotaLocked();
  modelPickerMenu.innerHTML = rows
    .map((item) => {
      const meta = COMPOSER_MODEL_ASSETS[item.id] || { label: item.label, icon: "", alt: "" };
      const safeId = escapeHtml(item.id);
      const active = item.id === sessionModel;
      const locked = (titanLocked && item.id === TITAN_MODEL_ID) || (daedalusLocked && item.id === DAEDALUS_MODEL_ID);
      const lockTitle = titanLocked && item.id === TITAN_MODEL_ID
        ? "Temporarily locked. Use ROK Hermes until reset."
        : daedalusLocked && item.id === DAEDALUS_MODEL_ID
        ? "Daily limit reached. Use ROK Hermes until reset."
        : "";
      const iconHtml = meta.icon
        ? `<img class="composer-model-picker-option-icon" src="${escapeHtml(meta.icon)}" width="28" height="28" alt="${escapeHtml(meta.alt || meta.label)}" />`
        : "";
      const lockBadge = locked ? `<span class="composer-model-picker-option-lock">Locked</span>` : "";
      return `<button type="button" role="option" class="composer-model-picker-option${active ? " is-active" : ""}" data-model-id="${safeId}" aria-selected="${active ? "true" : "false"}"${locked ? ` disabled title="${escapeHtml(lockTitle)}"` : ""}>${iconHtml}<span class="composer-model-picker-option-label">${escapeHtml(meta.label)}</span>${lockBadge}</button>`;
    })
    .join("");

  const item = rows.find((r) => r.id === sessionModel) || rows[0];
  if (item) {
    const meta = COMPOSER_MODEL_ASSETS[item.id] || { label: item.label, icon: "", alt: "" };
    if (modelPickerBtnText) {
      modelPickerBtnText.textContent = meta.label;
    }
    if (modelPickerIcon) {
      if (meta.icon) {
        modelPickerIcon.src = meta.icon;
        modelPickerIcon.alt = meta.alt || meta.label || "";
      }
    }
  }
}

function renderModelSelectOptions() {
  refreshComposerModelPicker();
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
  refreshComposerModelPicker();
}

function syncModelPanelWithCurrentSession() {
  renderModelSelectOptions();
  syncModelSelectorWithCurrentSession();
}

function setCurrentSessionModel(rawModel) {
  if (!currentSessionId) return;
  const current = getSessionById(currentSessionId);
  if (!current) return;

  const requestedModel = normalizeSessionModel(rawModel);
  // Block locked models: redirect to Hermes if Titan or Daedalus is locked
  let nextModel = requestedModel;
  if (isTitanQuotaLocked() && requestedModel === TITAN_MODEL_ID) {
    nextModel = HERMES_MODEL_ID;
    showThinkingBurnoutModal();
    showThinkingQuotaToast("ROK Titan is temporarily locked. Use ROK Hermes until the reset window ends.");
  } else if (isDaedalusQuotaLocked() && requestedModel === DAEDALUS_MODEL_ID) {
    nextModel = HERMES_MODEL_ID;
    const remainingMs = getDaedalusLockRemainingMs();
    const resetMsg = remainingMs > 0 ? ` Unlocks in ${formatThinkingResetTime(remainingMs)}.` : "";
    showThinkingQuotaToast(`ROK Daedalus daily limit reached. Use ROK Hermes.${resetMsg}`);
  }
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
    const res = await fetchWithBanGuard(API_URL, {
      method: "POST",
      headers: buildApiHeaders(true),
      body: JSON.stringify({
        message: prompt,
        history: [],
        model: sessionModel,
        enable_thinking: true
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
  if (workspace.activeTab === "model") {
    workspace.activeTab = "chat";
  }
  const activeTab = WORKSPACE_TAB_KEYS.includes(workspace.activeTab) ? workspace.activeTab : "chat";
  const isWorkspaceTab = activeTab === "workspace";
  const isSandboxTab = activeTab === "sandbox";
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
  composerWrap.hidden = isMathTab;
  workspacePanel.hidden = !(isWorkspaceTab || isSandboxTab);
  if (mathPanel) {
    mathPanel.hidden = !isMathTab;
  }
  workspacePanel.dataset.tab = activeTab || "chat";
  if (workspaceDocumentShell) {
    workspaceDocumentShell.hidden = !isWorkspaceTab;
  }
  if (sandboxPanel) {
    sandboxPanel.hidden = !isSandboxTab;
  }
  if (workspaceAssistantPanel) {
    workspaceAssistantPanel.hidden = !isWorkspaceTab;
  }
  if (isMathTab) {
    initDesmosIfNeeded();
    composerWrap.hidden = true;
    if (workspaceDocumentShell) {
      workspaceDocumentShell.hidden = true;
    }
    if (sandboxPanel) {
      sandboxPanel.hidden = true;
    }
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
  } else if (isSandboxTab) {
    renderSandboxUI();
    if (focus) {
      if (sandboxFileEditor && !sandboxFileEditor.disabled) {
        sandboxFileEditor.focus();
      } else if (sandboxNewFileBtn) {
        sandboxNewFileBtn.focus();
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

function buildSandboxWorkspaceSnapshot(sandbox = getCurrentSandboxState()) {
  if (!sandbox.files.length) {
    return "Workspace is currently empty.";
  }

  const sortedFiles = [...sandbox.files].sort((a, b) => a.path.localeCompare(b.path));
  let totalChars = 0;
  const sections = [];
  for (const file of sortedFiles.slice(0, SANDBOX_MAX_FILES)) {
    const header = `FILE: ${file.path}`;
    const remaining = Math.max(0, SANDBOX_MAX_FILE_CHARS - totalChars);
    if (remaining <= 0) {
      sections.push("... workspace snapshot truncated ...");
      break;
    }
    const content = String(file.content || "");
    const clipped = content.length > remaining ? `${content.slice(0, remaining)}\n... file truncated ...` : content;
    sections.push(`${header}\n${clipped}`);
    totalChars += clipped.length;
  }
  return sections.join("\n\n");
}

function buildSandboxAnalysisPrompt(userPrompt, sandbox = getCurrentSandboxState()) {
  const promptText = String(userPrompt || SANDBOX_DEFAULT_PROMPT).trim() || SANDBOX_DEFAULT_PROMPT;
  const fileList = sandbox.files.length
    ? sandbox.files.map((item) => `- ${item.path}`).join("\n")
    : "- (empty workspace)";
  return [
    "You are ROK Sandbox, an AI coding agent working inside a virtual file workspace.",
    "Analyze the user's request and the current workspace snapshot.",
    "Respond with JSON only. Do not include markdown fences or extra prose.",
    "Use this schema exactly:",
    "{",
    '  "summary": "short summary of the plan",',
    '  "setup_steps": ["step 1", "step 2"],',
    '  "files": [',
    "    {",
    '      "path": "src/app.js",',
    '      "action": "create|update|delete",',
    '      "language": "javascript",',
    '      "reason": "why this file changes",',
    '      "content": "full final file contents for create/update; omit or empty for delete"',
    "    }",
    "  ]",
    "}",
    "Rules:",
    "- Include every file that must change.",
    "- For create and update actions, return the complete final file content.",
    "- For delete actions, leave content empty.",
    "- Keep changes minimal but working.",
    "- Include setup steps when dependencies, build steps, or commands are needed.",
    "",
    "USER REQUEST:",
    promptText,
    "",
    "WORKSPACE FILES:",
    fileList,
    "",
    "WORKSPACE SNAPSHOT:",
    buildSandboxWorkspaceSnapshot(sandbox)
  ].join("\n");
}

function extractJsonObjectFromText(rawText) {
  const text = String(rawText || "").trim();
  if (!text) return "";
  const fencedMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fencedMatch) {
    return fencedMatch[1].trim();
  }
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start >= 0 && end > start) {
    return text.slice(start, end + 1).trim();
  }
  return text;
}

function parseSandboxAnalysisResponse(rawText, promptText, modelId) {
  const jsonText = extractJsonObjectFromText(rawText);
  if (!jsonText) {
    throw new Error("Sandbox response was empty.");
  }
  let parsed;
  try {
    parsed = JSON.parse(jsonText);
  } catch {
    throw new Error("Sandbox response was not valid JSON.");
  }
  if (!parsed || typeof parsed !== "object") {
    throw new Error("Sandbox response was not a JSON object.");
  }
  const normalized = normalizeSandboxAnalysis({
    raw: jsonText,
    summary: parsed.summary,
    setup_steps: parsed.setup_steps,
    setupSteps: parsed.setupSteps,
    files: Array.isArray(parsed.files) ? parsed.files : parsed.changes,
    lastPrompt: promptText,
    model: modelId,
    createdAt: Date.now()
  });
  return normalized;
}

function buildSandboxChatSummary(analysis, modelId = "") {
  const modelLabel = getModelLabelById(modelId || analysis.model || "") || "ROK";
  const fileLines = analysis.files.length
    ? analysis.files.map((item) => `- \`${item.path}\` - ${item.action}`).join("\n")
    : "- No file changes proposed.";
  const setupLines = analysis.setupSteps.length
    ? `\n\nSetup:\n${analysis.setupSteps.map((item) => `- ${item}`).join("\n")}`
    : "";
  return `**Sandbox plan ready with ${modelLabel}.**\n\n${escapeMarkdown(analysis.summary || "Review the proposed file changes in the Sandbox tab.")}\n\nFiles:\n${fileLines}${setupLines}\n\nReview the Sandbox panel to inspect the JSON and apply the changes.`;
}

async function runSandboxAnalysis(promptText, recentHistory, sessionModel) {
  if (!saveSandboxDraftToState({ silent: false, skipRender: true })) {
    throw new Error("Save the current sandbox file before asking ROK to edit it.");
  }
  const sandbox = getCurrentSandboxState();
  sandbox.statusText = "Analyzing workspace...";
  renderSandboxUI();

  try {
    activeRequestController = new AbortController();
    const res = await fetchWithBanGuard(API_URL, {
      method: "POST",
      headers: buildApiHeaders(true),
      signal: activeRequestController.signal,
      body: JSON.stringify({
        message: buildSandboxAnalysisPrompt(promptText, sandbox),
        attachments: buildAttachmentsPayload(),
        history: recentHistory,
        model: sessionModel,
        max_tokens: clientLimits.maxResponseTokens,
        enable_thinking: true
      })
    });
    applyThinkingQuotaFromHeaders(res);
    applyDaedalusQuotaFromHeaders(res);
    const reply = await readChatTextResponse(res);
    const analysis = parseSandboxAnalysisResponse(reply, promptText, sessionModel);
    sandbox.analysis = analysis;
    sandbox.statusText = analysis.files.length
      ? `Plan ready (${analysis.files.length} file change${analysis.files.length === 1 ? "" : "s"})`
      : "Plan ready";
    syncCurrentSessionFromHistory();
    renderSandboxUI();
    return analysis;
  } catch (error) {
    sandbox.statusText = "Sandbox error";
    renderSandboxUI();
    throw error;
  }
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

function escapeMarkdown(value) {
  return String(value || "").replace(/([\\`*_{}[\]()#+\-.!|>])/g, "\\$1");
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
      return `<div class="side-session-row${isActive}" data-session-row-id="${safeId}"><button class="side-item side-session-btn${isActive}" type="button" data-session-id="${safeId}" title="${safeTitle}"><span class="side-session-title" data-session-title-id="${safeId}">${safeTitle}</span><span class="side-session-time">${safeTime}</span></button><button class="session-delete-btn" type="button" data-delete-session-id="${safeId}" aria-label="Delete chat" title="Delete chat"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 3h6l1 2h4v2H4V5h4l1-2Zm1 6h2v9h-2V9Zm4 0h2v9h-2V9ZM7 9h2v9H7V9Z"/></svg></button></div>`;
    })
    .join("");

  // Wire up double-click to rename
  savedChatsList.querySelectorAll(".side-session-title").forEach(function (titleEl) {
    titleEl.addEventListener("dblclick", function (e) {
      e.stopPropagation();
      e.preventDefault();
      var sessionId = titleEl.getAttribute("data-session-title-id");
      if (!sessionId) return;
      startRenameSession(sessionId, titleEl);
    });
  });
}

function startRenameSession(sessionId, titleEl) {
  var session = getSessionById(sessionId);
  if (!session) return;
  var currentTitle = session.title || "Untitled Chat";
  var input = document.createElement("input");
  input.type = "text";
  input.className = "side-session-rename-input";
  input.value = currentTitle;
  input.maxLength = 80;
  titleEl.replaceWith(input);
  input.focus();
  input.select();

  function finishRename() {
    var newTitle = input.value.trim() || currentTitle;
    session.title = newTitle;
    saveSessionsToStorage();
    renderSavedSessions();
    if (sessionId === currentSessionId) {
      updateCurrentSessionButton();
    }
  }

  input.addEventListener("blur", finishRename);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      input.blur();
    } else if (e.key === "Escape") {
      input.value = currentTitle;
      input.blur();
    }
  });
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
        <button class="chat-welcome-chip" type="button" data-chip="write">Write</button>
        <button class="chat-welcome-chip" type="button" data-chip="code">Code</button>
        <button class="chat-welcome-chip" type="button" data-chip="think">Think</button>
        <button class="chat-welcome-chip" type="button" data-chip="summarize">Summarize</button>
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
  // Wire up welcome chip click handlers
  welcome.querySelectorAll(".chat-welcome-chip").forEach(function (chip) {
    if (chip._rokChipWired) return;
    chip._rokChipWired = true;
    chip.addEventListener("click", function () {
      const type = chip.getAttribute("data-chip");
      const prompts = {
        write: "Help me write ",
        code: "Help me code ",
        think: "Help me think through ",
        summarize: "Summarize the following: "
      };
      if (input && prompts[type]) {
        input.value = prompts[type];
        input.focus();
        autoResizeInput();
      }
    });
  });
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
    name.endsWith(".jsx") ||
    name.endsWith(".ts") ||
    name.endsWith(".tsx") ||
    name.endsWith(".py") ||
    name.endsWith(".html") ||
    name.endsWith(".css") ||
    name.endsWith(".java") ||
    name.endsWith(".c") ||
    name.endsWith(".cpp") ||
    name.endsWith(".h") ||
    name.endsWith(".hpp") ||
    name.endsWith(".sh") ||
    name.endsWith(".yml") ||
    name.endsWith(".yaml") ||
    name.endsWith(".toml") ||
    name.endsWith(".xml") ||
    name.endsWith(".svg") ||
    name.endsWith(".sql")
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

async function addSelectedSandboxFiles(fileList) {
  if (isSending) return;
  const sandbox = getCurrentSandboxState();
  const files = Array.from(fileList || []);
  if (!files.length) return;
  if (sandboxDraftDirty) {
    saveSandboxDraftToState({ silent: true, skipRender: true });
  }

  let importedCount = 0;
  let selectedId = sandbox.selectedFileId;
  for (const file of files) {
    if (sandbox.files.length >= SANDBOX_MAX_FILES) {
      setSandboxStatus(`Sandbox limit reached (${SANDBOX_MAX_FILES} files).`, "error");
      break;
    }
    if (!isTextLikeFile(file)) {
      continue;
    }
    try {
      const path = normalizeSandboxFilePath(file.webkitRelativePath || file.name);
      if (!path) {
        continue;
      }
      const content = truncateText(await file.text(), SANDBOX_MAX_FILE_CHARS);
      const existing = sandbox.files.find((item) => item.path.toLowerCase() === path.toLowerCase());
      if (existing) {
        existing.content = content;
        existing.updatedAt = Date.now();
        selectedId = existing.id;
      } else {
        const created = createSandboxFile(path, content);
        sandbox.files.push(created);
        selectedId = created.id;
      }
      importedCount += 1;
    } catch {
      // Ignore unreadable files and keep importing the rest.
    }
  }

  sandbox.selectedFileId = selectedId || sandbox.selectedFileId;
  sandbox.statusText = importedCount ? `Imported ${importedCount} file${importedCount === 1 ? "" : "s"}` : "No readable files imported";
  syncCurrentSessionFromHistory();
  loadSandboxDraftFromSelectedFile(true);
  renderSandboxUI();
  if (sandboxFileInput) {
    sandboxFileInput.value = "";
  }
}

function autoResizeInput() {
  if (!input) return;
  input.style.height = "auto";
  const next = Math.min(input.scrollHeight, 180);
  input.style.height = next + "px";
}

function renderKatexInElement(el) {
  if (!hasKaTeX || !el) return;
  try {
    // Call KaTeX's global renderMathInElement (from auto-render.min.js)
    window.renderMathInElement(el, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false
    });
  } catch (e) {
    // Silently ignore math rendering errors
  }
}

function protectMathForMarked(text) {
  // Replace math delimiters with placeholders so marked doesn't mangle them
  var mathBlocks = [];
  // Protect code blocks first so we don't touch $ inside code
  var codeProtected = text.replace(/```[\s\S]*?```|`[^`]+`/g, function (m) {
    var idx = mathBlocks.length;
    mathBlocks.push(m);
    return "%%MATH_PLACEHOLDER_" + idx + "%%";
  });
  // Protect display math $$...$$
  codeProtected = codeProtected.replace(/\$\$([\s\S]+?)\$\$/g, function (m) {
    var idx = mathBlocks.length;
    mathBlocks.push(m);
    return "%%MATH_PLACEHOLDER_" + idx + "%%";
  });
  // Protect \[...\]
  codeProtected = codeProtected.replace(/\\\[([\s\S]+?)\\\]/g, function (m) {
    var idx = mathBlocks.length;
    mathBlocks.push(m);
    return "%%MATH_PLACEHOLDER_" + idx + "%%";
  });
  // Protect inline math $...$  (not $$)
  codeProtected = codeProtected.replace(/(?<!\$)\$(?!\$)([^\$\n]+?)\$(?!\$)/g, function (m) {
    var idx = mathBlocks.length;
    mathBlocks.push(m);
    return "%%MATH_PLACEHOLDER_" + idx + "%%";
  });
  // Protect \(...\)
  codeProtected = codeProtected.replace(/\\\(([\s\S]+?)\\\)/g, function (m) {
    var idx = mathBlocks.length;
    mathBlocks.push(m);
    return "%%MATH_PLACEHOLDER_" + idx + "%%";
  });
  return { text: codeProtected, mathBlocks: mathBlocks };
}

function restoreMathAfterMarked(html, mathBlocks) {
  if (!mathBlocks.length) return html;
  return html.replace(/%%MATH_PLACEHOLDER_(\d+)%%/g, function (m, idxStr) {
    var idx = parseInt(idxStr, 10);
    if (idx >= 0 && idx < mathBlocks.length) {
      // Escape HTML entities so the math text stays raw for KaTeX
      return mathBlocks[idx].replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    return m;
  });
}

function setBubbleContent(bubble, text, markdown) {
  if (markdown && hasMarked) {
    var wasPlain = bubble.classList.contains("plain");
    bubble.classList.remove("plain");
    bubble.classList.add("markdown");
    // Protect math from marked, then restore after parsing
    var mathProtected = hasKaTeX ? protectMathForMarked(text) : null;
    var rawHtml = marked.parse(mathProtected ? mathProtected.text : text);
    if (mathProtected) {
      rawHtml = restoreMathAfterMarked(rawHtml, mathProtected.mathBlocks);
    }
    // Sanitize HTML to prevent XSS attacks
    var cleanHtml = hasDOMPurify ? DOMPurify.sanitize(rawHtml) : rawHtml;
    bubble.innerHTML = cleanHtml;
    // Render math (KaTeX)
    renderKatexInElement(bubble);
    // Smooth fade-in when transitioning from streaming plain text to final markdown
    if (wasPlain) {
      bubble.classList.add("bubble-reveal");
    }
    // Open external links in new tab with icon
    bubble.querySelectorAll("a[href]").forEach(function (a) {
      var href = a.getAttribute("href") || "";
      if (href.startsWith("http://") || href.startsWith("https://")) {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
        a.classList.add("external-link");
      }
    });
    // Add copy button to each code block
    bubble.querySelectorAll("pre").forEach(function (pre) {
      const wrapper = document.createElement("div");
      wrapper.className = "code-block-wrapper";
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
      // Language label
      const codeEl = pre.querySelector("code");
      const langMatch = codeEl ? (codeEl.className.match(/language-(\S+)/) || []) : [];
      if (langMatch[1]) {
        const langLabel = document.createElement("span");
        langLabel.className = "code-lang-label";
        langLabel.textContent = langMatch[1];
        wrapper.appendChild(langLabel);
      }
      const copyBtn = document.createElement("button");
      copyBtn.className = "code-copy-btn";
      copyBtn.type = "button";
      copyBtn.textContent = "Copy";
      copyBtn.addEventListener("click", function () {
        const code = pre.querySelector("code");
        const textToCopy = code ? code.textContent : pre.textContent;
        navigator.clipboard.writeText(textToCopy).then(function () {
          copyBtn.textContent = "Copied!";
          setTimeout(function () { copyBtn.textContent = "Copy"; }, 1500);
        }).catch(function () {
          copyBtn.textContent = "Failed";
          setTimeout(function () { copyBtn.textContent = "Copy"; }, 1500);
        });
      });
      wrapper.appendChild(copyBtn);
    });
  } else {
    bubble.classList.remove("markdown");
    bubble.classList.add("plain");
    bubble.textContent = text;
  }
  // Add bubble copy button for bot messages
  const msgRow = bubble.closest(".msg.bot");
  if (msgRow && !bubble.querySelector(".bubble-copy-btn")) {
    const copyBtn = document.createElement("button");
    copyBtn.className = "bubble-copy-btn";
    copyBtn.type = "button";
    copyBtn.title = "Copy message";
    copyBtn.textContent = "Copy";
    copyBtn.addEventListener("click", function () {
      const textToCopy = bubble.classList.contains("markdown") ? bubble.innerText : bubble.textContent;
      navigator.clipboard.writeText(textToCopy).then(function () {
        copyBtn.textContent = "Copied!";
        setTimeout(function () { copyBtn.textContent = "Copy"; }, 1500);
      }).catch(function () {
        copyBtn.textContent = "Failed";
        setTimeout(function () { copyBtn.textContent = "Copy"; }, 1500);
      });
    });
    bubble.appendChild(copyBtn);
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

  // Timestamp
  const timeSpan = document.createElement("span");
  timeSpan.className = "msg-time";
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  timeSpan.textContent = h12 + ":" + (m < 10 ? "0" : "") + m + " " + ampm;

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
    row.appendChild(timeSpan);
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
    row.appendChild(timeSpan);
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
  row.appendChild(timeSpan);

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
    sendBtn.classList.remove("send-ready");
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
  var hasText = input && input.value.trim().length > 0;
  sendBtn.classList.toggle("send-ready", hasText && !sendBtn.disabled);
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

function setToolsEnabled(nextEnabled) {
  toolsEnabled = Boolean(nextEnabled);
  if (!toolsToggleBtn) return;
  toolsToggleBtn.setAttribute("aria-pressed", toolsEnabled ? "true" : "false");
  toolsToggleBtn.classList.toggle("is-active", toolsEnabled);
  toolsToggleBtn.textContent = toolsEnabled ? "Tools On" : "Tools";
}

// --- Built-in tool definitions (client-side execution) ---
const BUILTIN_TOOLS = [
  {
    type: "function",
    function: {
      name: "calculator",
      description: "Evaluate a mathematical expression and return the numeric result. Supports basic arithmetic, powers, and common math functions.",
      parameters: {
        type: "object",
        properties: {
          expression: { type: "string", description: "The mathematical expression to evaluate, e.g. '2 + 3 * 4' or 'sqrt(144)'" }
        },
        required: ["expression"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "current_datetime",
      description: "Get the current date, time, and day of the week in the user's local timezone.",
      parameters: {
        type: "object",
        properties: {},
        required: []
      }
    }
  },
  {
    type: "function",
    function: {
      name: "generate_uuid",
      description: "Generate a random UUID (version 4).",
      parameters: {
        type: "object",
        properties: {},
        required: []
      }
    }
  },
  {
    type: "function",
    function: {
      name: "text_transform",
      description: "Transform text: uppercase, lowercase, title case, reverse, or count characters/words.",
      parameters: {
        type: "object",
        properties: {
          text: { type: "string", description: "The input text to transform" },
          operation: { type: "string", enum: ["uppercase", "lowercase", "titlecase", "reverse", "char_count", "word_count"], "description": "The transformation to apply" }
        },
        required: ["text", "operation"]
      }
    }
  }
];

const BUILTIN_TOOL_MAX_LOOP = 5;

function executeBuiltinTool(name, args) {
  const a = args && typeof args === "object" ? args : {};
  try {
    switch (name) {
      case "calculator": {
        const expr = String(a.expression || "").replace(/[^0-9+\-*/().%^\s]|sqrt|abs|ceil|floor|round|sin|cos|tan|log|pi|e/gi, "");
        if (!expr.trim()) return { ok: false, error: "Empty expression." };
        const safeExpr = expr
          .replace(/\^/g, "**")
          .replace(/sqrt\(/gi, "Math.sqrt(")
          .replace(/abs\(/gi, "Math.abs(")
          .replace(/ceil\(/gi, "Math.ceil(")
          .replace(/floor\(/gi, "Math.floor(")
          .replace(/round\(/gi, "Math.round(")
          .replace(/sin\(/gi, "Math.sin(")
          .replace(/cos\(/gi, "Math.cos(")
          .replace(/tan\(/gi, "Math.tan(")
          .replace(/log\(/gi, "Math.log(")
          .replace(/\bpi\b/gi, "Math.PI")
          .replace(/\be\b/g, "Math.E");
        const result = new Function("return (" + safeExpr + ")")();
        if (typeof result !== "number" || !isFinite(result)) return { ok: false, error: "Result is not a finite number." };
        return { ok: true, result: result };
      }
      case "current_datetime": {
        const now = new Date();
        return { ok: true, result: now.toLocaleString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" }) };
      }
      case "generate_uuid": {
        return { ok: true, result: crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16); }) };
      }
      case "text_transform": {
        const text = String(a.text || "");
        const op = String(a.operation || "").toLowerCase();
        switch (op) {
          case "uppercase": return { ok: true, result: text.toUpperCase() };
          case "lowercase": return { ok: true, result: text.toLowerCase() };
          case "titlecase": return { ok: true, result: text.replace(/\w\S*/g, t => t[0].toUpperCase() + t.slice(1).toLowerCase()) };
          case "reverse": return { ok: true, result: text.split("").reverse().join("") };
          case "char_count": return { ok: true, result: text.length };
          case "word_count": return { ok: true, result: text.trim() ? text.trim().split(/\s+/).length : 0 };
          default: return { ok: false, error: `Unknown operation: ${op}` };
        }
      }
      default:
        return { ok: false, error: `Unknown tool: ${name}` };
    }
  } catch (e) {
    return { ok: false, error: String(e.message || e) };
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
  if (toolsToggleBtn) {
    toolsToggleBtn.disabled = uiLocked;
  }
  if (fileInput) {
    fileInput.disabled = uiLocked;
  }
  if (modelPickerBtn) {
    modelPickerBtn.disabled = uiLocked;
  }
  if (uiLocked) {
    setComposerTrayOpen(false);
    setModelPickerOpen(false);
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
  const text = input.value?.trim() || "";
  
  // Handle /imagine command for pixel painting
  if (text && text.startsWith("/imagine")) {
    const prompt = text.slice(8).trim();
    if (prompt) {
      input.value = "";
      autoResizeInput();
      handleImagineCommand(prompt);
      return;
    }
  }
  
  const sessionModel = getCurrentSessionModel();
  const wasWorkspaceActive = isWorkspaceSessionActive();
  const sandboxActive = isSandboxSessionActive();
  const sessionWorkspaceContext = getWorkspaceContextFromSession();
  const sessionSandbox = sandboxActive ? getCurrentSandboxState() : null;
  if (!text && attachments.length === 0 && !sessionWorkspaceContext && !(sessionSandbox && sessionSandbox.files.length)) return;
  if (isSending) return;
  if (isIntentClassificationLoading) return;
  if (isWorkspaceSuggestionLoading) return;
  if (isWorkspaceRouteModalOpen()) return;

  if (Date.now() < nextAllowedAt) {
    startCooldownTimer();
    refreshSendState();
    return;
  }
  if (sessionModel === TITAN_MODEL_ID && isTitanQuotaLocked()) {
    forceHermesIfTitanLocked(false);
    showThinkingBurnoutModal();
    showThinkingQuotaToast("ROK Titan is temporarily locked. Use ROK Hermes during the cooldown.");
    refreshComposerModelPicker();
    return;
  }
  if (sessionModel === DAEDALUS_MODEL_ID && isDaedalusQuotaLocked()) {
    forceHermesIfDaedalusLocked(false);
    const remainingMs = getDaedalusLockRemainingMs();
    const resetMsg = remainingMs > 0 ? ` Unlocks in ${formatThinkingResetTime(remainingMs)}.` : "";
    showThinkingQuotaToast(`ROK Daedalus daily limit reached. Switched to ROK Hermes.${resetMsg}`);
    refreshComposerModelPicker();
    return;
  }

  let displayText = text;
  if (!displayText) {
    if (sandboxActive && sessionSandbox && (sessionSandbox.files.length || attachments.length)) {
      displayText = attachments.length
        ? `Review my sandbox and ${attachments.length} attachment(s).`
        : "Review my sandbox files.";
    } else if (sessionWorkspaceContext && attachments.length) {
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
  let pendingToolCalls = [];
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
    // Render thinking body with markdown + KaTeX
    if (hasMarked) {
      var mathProtected = hasKaTeX ? protectMathForMarked(thinkingText.trim()) : null;
      var html = marked.parse(mathProtected ? mathProtected.text : thinkingText.trim());
      if (mathProtected) html = restoreMathAfterMarked(html, mathProtected.mathBlocks);
      // Sanitize HTML to prevent XSS attacks
      var cleanHtml = hasDOMPurify ? DOMPurify.sanitize(html) : html;
      thinkingPanel.body.innerHTML = cleanHtml;
      renderKatexInElement(thinkingPanel.body);
    } else {
      thinkingPanel.body.textContent = thinkingText.trim();
    }
    scrollToBottom();
  };
  const handleStatusUpdate = (status) => {
    const value = String(status || "").trim();
    if (!value) return;
    if (writeBackToWorkspace) return;
    convertTypingRowToBotMessage();

    // Show retry / status text in the thinking panel label
    if (thinkingPanel) {
      thinkingPanel.shell.hidden = false;
      thinkingPanel.shell.classList.toggle("is-streaming", !answerStarted);
      setThinkingSummaryLabel(value);
    }

    // Also update the bubble so the user always sees the status,
    // even if the thinking panel isn't visible yet
    const isRetryStatus = value.toLowerCase().includes("retrying") ||
                          value.toLowerCase().includes("busy");
    if (bubble && isRetryStatus) {
      bubble.setAttribute("data-retry-status", value);
      // Show a subtle retry indicator inside the bubble
      if (!bubble.querySelector(".retry-status-line")) {
        const retryLine = document.createElement("span");
        retryLine.className = "retry-status-line";
        bubble.appendChild(retryLine);
      }
      const retryLine = bubble.querySelector(".retry-status-line");
      if (retryLine) retryLine.textContent = `⟳ ${value}`;
    } else if (bubble) {
      // Clear retry indicator when a real answer starts
      const existing = bubble.querySelector(".retry-status-line");
      if (existing) existing.remove();
      bubble.removeAttribute("data-retry-status");
    }

    scrollToBottom();
  };
  const handleToolCalls = (toolCalls, assistantContent) => {
    if (!Array.isArray(toolCalls) || !toolCalls.length) return;
    markAssistantStreamStarted();
    // Collect tool calls for auto-execution after stream ends
    for (const tc of toolCalls) {
      pendingToolCalls.push({ ...tc, _assistantContent: assistantContent || "" });
    }
    // Show a status line for each tool call the model wants to make
    const callNames = toolCalls.map(tc => {
      const fn = tc.function || tc;
      return fn.name || "unknown";
    }).join(", ");
    handleStatusUpdate(`Calling tool${toolCalls.length > 1 ? "s" : ""}: ${callNames}`);
    // If the model also produced text content alongside tool calls, show it
    if (assistantContent && typeof assistantContent === "string" && assistantContent.trim()) {
      consumeTaggedTokenChunk(assistantContent);
    }
  };
  const noteAnswerStarted = () => {
    if (answerStarted) return;
    answerStarted = true;
    if (thinkingPanel && !thinkingText.trim()) {
      setThinkingSummaryLabel("Thinking...");
    }
    // Clear any retry status indicator now that a real answer is arriving
    if (bubble) {
      const retryLine = bubble.querySelector(".retry-status-line");
      if (retryLine) retryLine.remove();
      bubble.removeAttribute("data-retry-status");
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
    if (sandboxActive) {
      convertTypingRowToBotMessage();
      if (bubble) {
        setBubbleContent(bubble, "Analyzing sandbox...", false);
      }
      const analysis = await runSandboxAnalysis(text || SANDBOX_DEFAULT_PROMPT, recentHistory, sessionModel);
      const chatSummary = buildSandboxChatSummary(analysis, sessionModel);
      if (bubble) {
        setBubbleContent(bubble, chatSummary, true);
      }
      history.push({ role: "assistant", content: chatSummary });
      trimHistoryToLimit();
      syncCurrentSessionFromHistory();
      clearAttachments();
      return;
    }

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
    const requestBody = {
      message: messageForApi,
      workspace_context: workspaceContext,
      attachments: attachmentsPayload,
      history: recentHistory,
      model: sessionModel,
      max_tokens: clientLimits.maxResponseTokens,
      enable_thinking: true
    };
    if (webSearchEnabled) {
      requestBody.enable_web_search = true;
    }
    if (toolsEnabled) {
      requestBody.tools = BUILTIN_TOOLS;
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
    // Read Daedalus quota headers (independent of Titan — exhausting one doesn't lock the other)
    applyDaedalusQuotaFromHeaders(res);

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

      if (res.status === 429) {
        const retryAfterSec = parseInt(res.headers.get("Retry-After") || "15", 10);
        nextAllowedAt = Date.now() + retryAfterSec * 1000;
        startCooldownTimer();
        refreshSendState();
        throw new Error(errorMessage || `Rate limited — wait ${retryAfterSec}s before sending again.`);
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

      // --- Auto-execute built-in tool calls and loop ---
      if (pendingToolCalls.length > 0 && toolsEnabled) {
        let toolLoopCount = 0;
        let toolHistory = [...recentHistory];
        // Add the original user message to tool history if not already there
        if (!toolHistory.length || toolHistory[toolHistory.length - 1].role !== "user") {
          toolHistory.push({ role: "user", content: messageForApi });
        }

        while (pendingToolCalls.length > 0 && toolLoopCount < BUILTIN_TOOL_MAX_LOOP && !stopRequested) {
          toolLoopCount++;
          const callsToExecute = [...pendingToolCalls];
          pendingToolCalls = [];

          // Build assistant message with tool_calls for history
          const assistantContent = callsToExecute[0]._assistantContent || partialText || "";
          const toolCallsForHistory = callsToExecute.map(tc => ({
            id: tc.id || `call_${toolLoopCount}_${Date.now()}`,
            type: "function",
            function: {
              name: (tc.function && tc.function.name) || tc.name || "unknown",
              arguments: (tc.function && tc.function.arguments) || JSON.stringify(tc.arguments || tc.params || {})
            }
          }));
          toolHistory.push({ role: "assistant", content: assistantContent, tool_calls: toolCallsForHistory });

          // Execute each tool call and add results to history
          for (const tc of callsToExecute) {
            const toolName = (tc.function && tc.function.name) || tc.name || "unknown";
            let args = {};
            try {
              const argsRaw = (tc.function && tc.function.arguments) || JSON.stringify(tc.arguments || tc.params || {});
              args = typeof argsRaw === "string" ? JSON.parse(argsRaw) : (argsRaw || {});
            } catch (_) { args = {}; }

            const toolResult = executeBuiltinTool(toolName, args);
            const callId = tc.id || `call_${toolLoopCount}_${Date.now()}`;
            const resultContent = toolResult.ok
              ? JSON.stringify(toolResult.result)
              : JSON.stringify({ error: toolResult.error });

            // Show tool result in chat
            handleStatusUpdate(`Tool ${toolName}: ${toolResult.ok ? String(toolResult.result) : "Error: " + toolResult.error}`);

            toolHistory.push({
              role: "tool",
              name: toolName,
              tool_call_id: callId,
              content: resultContent
            });
          }

          // Make follow-up request with tool results
          try {
            const followupBody = {
              message: "",
              workspace_context: "",
              attachments: [],
              history: toolHistory,
              model: sessionModel,
              max_tokens: clientLimits.maxResponseTokens,
              enable_thinking: true,
              tools: BUILTIN_TOOLS
            };
            if (webSearchEnabled) {
              followupBody.enable_web_search = true;
            }

            const followupRes = await fetchWithBanGuard(API_URL, {
              method: "POST",
              headers: buildApiHeaders(true),
              signal: activeRequestController ? activeRequestController.signal : undefined,
              body: JSON.stringify(followupBody)
            });

            if (!followupRes.ok) break;

            const followupContentType = (followupRes.headers.get("content-type") || "").toLowerCase();
            applyThinkingQuotaFromHeaders(followupRes);
            applyDaedalusQuotaFromHeaders(followupRes);

            if (followupContentType.includes("text/event-stream") || followupContentType.includes("json") || followupContentType.includes("ndjson")) {
              const followupReader = followupRes.body && followupRes.body.getReader ? followupRes.body.getReader() : null;
              if (!followupReader) break;

              const followupDecoder = new TextDecoder();
              let followupBuffer = "";
              let followupDone = false;

              while (!followupDone && !stopRequested) {
                const { value: fv, done: fd } = await followupReader.read();
                if (fd) { followupDone = true; break; }
                followupBuffer += followupDecoder.decode(fv, { stream: true });

                const fBlocks = followupBuffer.split("\n\n");
                followupBuffer = fBlocks.pop() || "";

                for (const fBlock of fBlocks) {
                  const fLines = fBlock.split("\n");
                  for (const fLine of fLines) {
                    const fTrimmed = fLine.trim();
                    if (!fTrimmed || fTrimmed.startsWith(":")) continue;
                    if (!fTrimmed.startsWith("data:")) continue;
                    const fData = fTrimmed.slice(5);
                    if (fData.trim() === "[DONE]") { followupDone = true; break; }
                    const fParsed = extractTokenFromStreamPayload(fData);
                    if (fParsed.thinking) { handleThinking(fParsed.thinking); }
                    if (fParsed.tool_calls) { handleToolCalls(fParsed.tool_calls, fParsed.assistant_content); }
                    if (fParsed.token) { consumeTaggedTokenChunk(fParsed.token); }
                    if (fParsed.status) { handleStatusUpdate(fParsed.status); }
                  }
                }
              }
              // Process remaining buffer
              if (followupBuffer.trim()) {
                for (const fLine of followupBuffer.split("\n")) {
                  const fTrimmed = fLine.trim();
                  if (!fTrimmed || fTrimmed.startsWith(":") || !fTrimmed.startsWith("data:")) continue;
                  const fData = fTrimmed.slice(5);
                  if (fData.trim() === "[DONE]") break;
                  const fParsed = extractTokenFromStreamPayload(fData);
                  if (fParsed.thinking) { handleThinking(fParsed.thinking); }
                  if (fParsed.tool_calls) { handleToolCalls(fParsed.tool_calls, fParsed.assistant_content); }
                  if (fParsed.token) { consumeTaggedTokenChunk(fParsed.token); }
                  if (fParsed.status) { handleStatusUpdate(fParsed.status); }
                }
              }
            }
          } catch (followupErr) {
            if (followupErr && followupErr.name !== "AbortError") {
              console.log("Tool follow-up error:", followupErr);
            }
            break;
          }

          // If more tool_calls were collected during the follow-up, the loop continues
        }

        // After tool loop, finalize the text
        flushTaggedTokenCarry();
        finalizeThinkingPanel(Boolean(partialText), true);
        if (!partialText && thinkingText && thinkingText.trim()) {
          partialText = thinkingText.trim();
          thinkingText = "";
          if (thinkingPanel) thinkingPanel.shell.hidden = true;
        }
      }

      if (!partialText) {
        // The model may have answered entirely inside <think> tags with no
        // separate answer — surface the thinking content rather than "(No response)".
        if (thinkingText && thinkingText.trim()) {
          partialText = thinkingText.trim();
          thinkingText = "";
          if (thinkingPanel) {
            thinkingPanel.shell.hidden = true;
          }
        } else {
          partialText = "(No response)";
        }
      }
      removeTypingIndicator();

      if (!writeBackToWorkspace) {
        if (storyCanvas) {
          await typeInStoryCanvas(storyCanvas, bubble, partialText);
        } else {
          await typeIn(bubble, partialText);
        }
        if (stopRequested) {
          return;
        }
        if (storyCanvas) {
          bubble.textContent = "Story ready. Use Expand to read.";
          storyCanvas.setStatus("Complete");
        }
        history.push({ role: "assistant", content: partialText });
        trimHistoryToLimit();
        syncCurrentSessionFromHistory();
        addCorrectMeButton(bubble);
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
          if (parsedPayload.tool_calls) {
            handleToolCalls(parsedPayload.tool_calls, parsedPayload.assistant_content);
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
        if (parsedPayload.tool_calls) {
          handleToolCalls(parsedPayload.tool_calls, parsedPayload.assistant_content);
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
      if (parsedPayload.tool_calls) {
        handleToolCalls(parsedPayload.tool_calls, parsedPayload.assistant_content);
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

    // --- Auto-execute built-in tool calls and loop ---
    if (pendingToolCalls.length > 0 && toolsEnabled) {
      let toolLoopCount = 0;
      let toolHistory = [...recentHistory];
      if (!toolHistory.length || toolHistory[toolHistory.length - 1].role !== "user") {
        toolHistory.push({ role: "user", content: messageForApi });
      }

      while (pendingToolCalls.length > 0 && toolLoopCount < BUILTIN_TOOL_MAX_LOOP && !stopRequested) {
        toolLoopCount++;
        const callsToExecute = [...pendingToolCalls];
        pendingToolCalls = [];

        const assistantContent = callsToExecute[0]._assistantContent || partialText || "";
        const toolCallsForHistory = callsToExecute.map(tc => ({
          id: tc.id || `call_${toolLoopCount}_${Date.now()}`,
          type: "function",
          function: {
            name: (tc.function && tc.function.name) || tc.name || "unknown",
            arguments: (tc.function && tc.function.arguments) || JSON.stringify(tc.arguments || tc.params || {})
          }
        }));
        toolHistory.push({ role: "assistant", content: assistantContent, tool_calls: toolCallsForHistory });

        for (const tc of callsToExecute) {
          const toolName = (tc.function && tc.function.name) || tc.name || "unknown";
          let args = {};
          try {
            const argsRaw = (tc.function && tc.function.arguments) || JSON.stringify(tc.arguments || tc.params || {});
            args = typeof argsRaw === "string" ? JSON.parse(argsRaw) : (argsRaw || {});
          } catch (_) { args = {}; }

          const toolResult = executeBuiltinTool(toolName, args);
          const callId = tc.id || `call_${toolLoopCount}_${Date.now()}`;
          const resultContent = toolResult.ok
            ? JSON.stringify(toolResult.result)
            : JSON.stringify({ error: toolResult.error });

          handleStatusUpdate(`Tool ${toolName}: ${toolResult.ok ? String(toolResult.result) : "Error: " + toolResult.error}`);

          toolHistory.push({
            role: "tool",
            name: toolName,
            tool_call_id: callId,
            content: resultContent
          });
        }

        try {
          const followupBody = {
            message: "",
            workspace_context: "",
            attachments: [],
            history: toolHistory,
            model: sessionModel,
            max_tokens: clientLimits.maxResponseTokens,
            enable_thinking: true,
            tools: BUILTIN_TOOLS
          };
          if (webSearchEnabled) followupBody.enable_web_search = true;

          const followupRes = await fetchWithBanGuard(API_URL, {
            method: "POST",
            headers: buildApiHeaders(true),
            signal: activeRequestController ? activeRequestController.signal : undefined,
            body: JSON.stringify(followupBody)
          });
          if (!followupRes.ok) break;

          applyThinkingQuotaFromHeaders(followupRes);
          applyDaedalusQuotaFromHeaders(followupRes);

          const fReader = followupRes.body && followupRes.body.getReader ? followupRes.body.getReader() : null;
          if (!fReader) break;
          const fDecoder = new TextDecoder();
          let fBuf = "";
          let fDone = false;

          while (!fDone && !stopRequested) {
            const { value: fv, done: fd } = await fReader.read();
            if (fd) { fDone = true; break; }
            fBuf += fDecoder.decode(fv, { stream: true });
            const fBlocks = fBuf.split("\n\n");
            fBuf = fBlocks.pop() || "";
            for (const fBlock of fBlocks) {
              for (const fLine of fBlock.split("\n")) {
                const ft = fLine.trim();
                if (!ft || ft.startsWith(":") || !ft.startsWith("data:")) continue;
                const fd2 = ft.slice(5);
                if (fd2.trim() === "[DONE]") { fDone = true; break; }
                const fp = extractTokenFromStreamPayload(fd2);
                if (fp.thinking) handleThinking(fp.thinking);
                if (fp.tool_calls) handleToolCalls(fp.tool_calls, fp.assistant_content);
                if (fp.token) consumeTaggedTokenChunk(fp.token);
                if (fp.status) handleStatusUpdate(fp.status);
              }
            }
          }
          if (fBuf.trim()) {
            for (const fLine of fBuf.split("\n")) {
              const ft = fLine.trim();
              if (!ft || ft.startsWith(":") || !ft.startsWith("data:")) continue;
              const fd2 = ft.slice(5);
              if (fd2.trim() === "[DONE]") break;
              const fp = extractTokenFromStreamPayload(fd2);
              if (fp.thinking) handleThinking(fp.thinking);
              if (fp.tool_calls) handleToolCalls(fp.tool_calls, fp.assistant_content);
              if (fp.token) consumeTaggedTokenChunk(fp.token);
              if (fp.status) handleStatusUpdate(fp.status);
            }
          }
        } catch (fErr) {
          if (fErr && fErr.name !== "AbortError") console.log("Tool follow-up error:", fErr);
          break;
        }
      }

      flushTaggedTokenCarry();
      finalizeThinkingPanel(Boolean(partialText), true);
      if (!partialText && thinkingText && thinkingText.trim()) {
        partialText = thinkingText.trim();
        thinkingText = "";
        if (thinkingPanel) thinkingPanel.shell.hidden = true;
      }
    }

    if (!partialText) {
      // The model may have answered entirely inside <think> tags with no
      // separate answer — surface the thinking content rather than "(No response)".
      if (thinkingText && thinkingText.trim()) {
        partialText = thinkingText.trim();
        thinkingText = "";
        if (thinkingPanel) {
          thinkingPanel.shell.hidden = true;
        }
      } else {
        partialText = "(No response)";
      }
    }
    removeTypingIndicator();

    if (!writeBackToWorkspace) {
      streamRenderState.flush();
      if (storyCanvas) {
        storyCanvas.setStatus("Complete");
        bubble.textContent = "Story ready. Use Expand to read.";
      } else {
        setBubbleContent(bubble, partialText, true);
        addRegenerateButton(bubble);
      }
      history.push({ role: "assistant", content: partialText });
      trimHistoryToLimit();
      syncCurrentSessionFromHistory();
      addCorrectMeButton(bubble);
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
            addRegenerateButton(bubble);
          }
          history.push({ role: "assistant", content: partialText });
          trimHistoryToLimit();
          syncCurrentSessionFromHistory();
          addCorrectMeButton(bubble);
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

function addRegenerateButton(bubble) {
  // Remove any existing regenerate buttons in the chat
  document.querySelectorAll(".regenerate-btn").forEach(function (b) { b.remove(); });
  if (!bubble) return;
  const btn = document.createElement("button");
  btn.className = "regenerate-btn";
  btn.type = "button";
  btn.title = "Regenerate response";
  btn.textContent = "Regenerate";
  btn.addEventListener("click", function () {
    regenerateLastResponse();
  });
  bubble.appendChild(btn);
}

function regenerateLastResponse() {
  if (isSending) return;
  // Find the last bot message row and remove it
  const botRows = chat.querySelectorAll(".msg.bot");
  if (!botRows.length) return;
  const lastBotRow = botRows[botRows.length - 1];
  lastBotRow.remove();
  // Remove last assistant entry from history
  if (history.length && history[history.length - 1].role === "assistant") {
    history.pop();
  }
  // Find the last user message text
  let lastUserText = "";
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i].role === "user") {
      lastUserText = history[i].content;
      break;
    }
  }
  if (!lastUserText) return;
  // Remove last user entry from history (send() will re-add it)
  if (history.length && history[history.length - 1].role === "user") {
    history.pop();
  }
  // Also remove the last user message row from DOM
  const userRows = chat.querySelectorAll(".msg.user");
  if (userRows.length) {
    userRows[userRows.length - 1].remove();
  }
  // Re-send
  input.value = lastUserText;
  send();
}

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

// Drag-and-drop file attach on chat area
if (chat) {
  chat.addEventListener("dragover", function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!e.dataTransfer) return;
    e.dataTransfer.dropEffect = "copy";
    chat.classList.add("chat-drop-active");
  });
  chat.addEventListener("dragleave", function (e) {
    e.preventDefault();
    e.stopPropagation();
    chat.classList.remove("chat-drop-active");
  });
  chat.addEventListener("drop", function (e) {
    e.preventDefault();
    e.stopPropagation();
    chat.classList.remove("chat-drop-active");
    if (isSending) return;
    if (!e.dataTransfer || !e.dataTransfer.files.length) return;
    addSelectedFiles(e.dataTransfer.files);
  });
}

if (sandboxUploadBtn && sandboxFileInput) {
  sandboxUploadBtn.addEventListener("click", () => {
    if (isSending) return;
    sandboxFileInput.click();
  });
  sandboxFileInput.addEventListener("change", (e) => addSelectedSandboxFiles(e.target.files));
}

if (sandboxNewFileBtn) {
  sandboxNewFileBtn.addEventListener("click", () => {
    if (isSending) return;
    createSandboxFileFromEditor();
  });
}

if (sandboxSaveBtn) {
  sandboxSaveBtn.addEventListener("click", () => {
    saveSandboxDraftToState({ silent: false });
  });
}

if (sandboxDeleteBtn) {
  sandboxDeleteBtn.addEventListener("click", () => {
    if (isSending) return;
    deleteSelectedSandboxFile();
  });
}

if (sandboxAnalyzeBtn) {
  sandboxAnalyzeBtn.addEventListener("click", () => {
    if (isSending) {
      stopGeneration();
      return;
    }
    if (!input.value.trim()) {
      input.value = SANDBOX_DEFAULT_PROMPT;
      autoResizeInput();
    }
    send();
  });
}

if (sandboxApplyBtn) {
  sandboxApplyBtn.addEventListener("click", () => {
    if (sandboxDraftDirty) {
      const saved = saveSandboxDraftToState({ silent: false });
      if (!saved) return;
    }
    applySandboxAnalysis();
  });
}

if (sandboxClearAnalysisBtn) {
  sandboxClearAnalysisBtn.addEventListener("click", () => {
    clearSandboxAnalysis();
  });
}

if (sandboxFilesList) {
  sandboxFilesList.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const button = target.closest("[data-sandbox-file-id]");
    if (!(button instanceof HTMLElement)) return;
    const fileId = button.getAttribute("data-sandbox-file-id");
    if (!fileId) return;
    selectSandboxFile(fileId);
  });
}

if (sandboxFilePathInput) {
  sandboxFilePathInput.addEventListener("input", () => {
    sandboxDraftPath = sandboxFilePathInput.value;
    markSandboxDraftDirty();
  });
  sandboxFilePathInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveSandboxDraftToState({ silent: false });
    }
  });
}

if (sandboxFileEditor) {
  sandboxFileEditor.addEventListener("input", () => {
    sandboxDraftContent = sandboxFileEditor.value;
    markSandboxDraftDirty();
  });
  sandboxFileEditor.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
      e.preventDefault();
      saveSandboxDraftToState({ silent: false });
    }
  });
}

if (webToggleBtn) {
  webToggleBtn.addEventListener("click", () => {
    if (isSending || isIntentClassificationLoading) return;
    setWebSearchEnabled(!webSearchEnabled);
  });
}

if (toolsToggleBtn) {
  toolsToggleBtn.addEventListener("click", () => {
    if (isSending || isIntentClassificationLoading) return;
    setToolsEnabled(!toolsEnabled);
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

input.addEventListener("input", function () {
  autoResizeInput();
  refreshSendState();
});
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

if (burnoutCloseBtn) {
  burnoutCloseBtn.addEventListener("click", () => hideThinkingBurnoutModal());
}
if (burnoutOkBtn) {
  burnoutOkBtn.addEventListener("click", () => hideThinkingBurnoutModal());
}
// Close burnout modal on backdrop click
if (thinkingBurnoutModal) {
  thinkingBurnoutModal.addEventListener("click", (e) => {
    if (e.target === thinkingBurnoutModal) hideThinkingBurnoutModal();
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

if (modelPickerBtn && modelPickerMenu) {
  modelPickerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (modelPickerBtn.disabled) return;
    if (composerTrayOpen) {
      setComposerTrayOpen(false);
    }
    setModelPickerOpen(!modelPickerOpen);
  });
  modelPickerMenu.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    const opt = target.closest("[data-model-id]");
    if (!(opt instanceof HTMLElement)) return;
    if (opt.disabled) return;
    const modelId = opt.getAttribute("data-model-id");
    if (!modelId) return;
    setCurrentSessionModel(modelId);
    setModelPickerOpen(false);
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
  if (modelPickerOpen && target instanceof Node && composerModelPicker && !composerModelPicker.contains(target)) {
    setModelPickerOpen(false);
  }

  if (!isMobileLayout || !isMobileSidebarOpen) return;
  if (!(target instanceof Node)) return;
  if (sidebar && sidebar.contains(target)) return;
  if (sidebarToggleBtn && sidebarToggleBtn.contains(target)) return;
  applyMobileSidebarState(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (onboardingModal && !onboardingModal.hidden) {
    savePreferredNameToStorage("");
    finishOnboardingAndEnter();
    return;
  }
  if (composerTrayOpen) {
    setComposerTrayOpen(false);
  }
  if (modelPickerOpen) {
    setModelPickerOpen(false);
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
    if (!isOnboardingCompleted()) {
      openOnboardingModal();
      return;
    }
    enterAppWithTosCheck();
  });
}

if (onboardingNextBtn) {
  onboardingNextBtn.addEventListener("click", () => {
    if (onboardingStepIndex < ONBOARDING_NAME_SLIDE) {
      onboardingStepIndex += 1;
      renderOnboardingStep();
      if (onboardingStepIndex === ONBOARDING_NAME_SLIDE && onboardingNameInput) {
        setTimeout(() => onboardingNameInput.focus(), 40);
      }
      return;
    }
    const raw = onboardingNameInput ? onboardingNameInput.value : "";
    savePreferredNameToStorage(raw);
    finishOnboardingAndEnter();
  });
}

if (onboardingBackBtn) {
  onboardingBackBtn.addEventListener("click", () => {
    if (onboardingStepIndex <= 0) return;
    onboardingStepIndex -= 1;
    renderOnboardingStep();
  });
}

if (onboardingSkipBtn) {
  onboardingSkipBtn.addEventListener("click", () => {
    savePreferredNameToStorage("");
    finishOnboardingAndEnter();
  });
}

if (onboardingCloseBtn) {
  onboardingCloseBtn.addEventListener("click", () => {
    savePreferredNameToStorage("");
    finishOnboardingAndEnter();
  });
}

if (onboardingNameInput) {
  onboardingNameInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    if (onboardingModal && onboardingModal.hidden) return;
    if (onboardingStepIndex !== ONBOARDING_NAME_SLIDE) return;
    event.preventDefault();
    savePreferredNameToStorage(onboardingNameInput.value);
    finishOnboardingAndEnter();
  });
}

autoResizeInput();
setComposerTrayOpen(false);
setWebSearchEnabled(false);
setToolsEnabled(false);
applyUserSettingsToRuntime();
refreshSendState();
setWorkspaceAssistantSuggestButtonLoading(false);

renderModelSelectOptions();
initializeSessions();
refreshWorkspaceDocumentToolbarState();
renderSandboxUI();
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

// --- Chat search ---
var chatSearchMatches = [];
var chatSearchCurrentIdx = -1;

function openChatSearch() {
  if (!chatSearchBar) return;
  chatSearchBar.hidden = false;
  if (chatSearchInput) {
    chatSearchInput.focus();
    chatSearchInput.select();
  }
}

function closeChatSearch() {
  if (!chatSearchBar) return;
  chatSearchBar.hidden = true;
  clearChatSearchHighlights();
  chatSearchMatches = [];
  chatSearchCurrentIdx = -1;
  if (chatSearchInput) chatSearchInput.value = "";
  if (chatSearchCount) chatSearchCount.textContent = "";
}

function clearChatSearchHighlights() {
  if (!chat) return;
  chat.querySelectorAll(".chat-search-highlight").forEach(function (el) {
    var parent = el.parentNode;
    parent.replaceChild(document.createTextNode(el.textContent), el);
    parent.normalize();
  });
}

function performChatSearch(query) {
  clearChatSearchHighlights();
  chatSearchMatches = [];
  chatSearchCurrentIdx = -1;
  if (!chat || !query) {
    if (chatSearchCount) chatSearchCount.textContent = "";
    return;
  }
  var lowerQuery = query.toLowerCase();
  var msgRows = chat.querySelectorAll(".msg.user, .msg.bot");
  msgRows.forEach(function (row) {
    var bubbles = row.querySelectorAll(".bubble");
    bubbles.forEach(function (bubble) {
      var walker = document.createTreeWalker(bubble, NodeFilter.SHOW_TEXT, null, false);
      var textNodes = [];
      while (walker.nextNode()) textNodes.push(walker.currentNode);
      textNodes.forEach(function (textNode) {
        var text = textNode.textContent;
        var lower = text.toLowerCase();
        var idx = lower.indexOf(lowerQuery);
        if (idx === -1) return;
        var parts = [];
        var lastIdx = 0;
        while (idx !== -1) {
          if (idx > lastIdx) parts.push({ text: text.slice(lastIdx, idx), highlight: false });
          parts.push({ text: text.slice(idx, idx + query.length), highlight: true });
          lastIdx = idx + query.length;
          idx = lower.indexOf(lowerQuery, lastIdx);
        }
        if (lastIdx < text.length) parts.push({ text: text.slice(lastIdx), highlight: false });
        var frag = document.createDocumentFragment();
        parts.forEach(function (part) {
          if (part.highlight) {
            var mark = document.createElement("mark");
            mark.className = "chat-search-highlight";
            mark.textContent = part.text;
            frag.appendChild(mark);
            chatSearchMatches.push(mark);
          } else {
            frag.appendChild(document.createTextNode(part.text));
          }
        });
        textNode.parentNode.replaceChild(frag, textNode);
      });
    });
  });
  if (chatSearchMatches.length > 0) {
    chatSearchCurrentIdx = 0;
    chatSearchMatches[0].classList.add("chat-search-current");
    chatSearchMatches[0].scrollIntoView({ block: "center", behavior: "smooth" });
  }
  updateChatSearchCount();
}

function updateChatSearchCount() {
  if (!chatSearchCount) return;
  if (chatSearchMatches.length === 0) {
    chatSearchCount.textContent = "0/0";
  } else {
    chatSearchCount.textContent = (chatSearchCurrentIdx + 1) + "/" + chatSearchMatches.length;
  }
}

function navigateChatSearch(direction) {
  if (!chatSearchMatches.length) return;
  if (chatSearchCurrentIdx >= 0 && chatSearchCurrentIdx < chatSearchMatches.length) {
    chatSearchMatches[chatSearchCurrentIdx].classList.remove("chat-search-current");
  }
  chatSearchCurrentIdx += direction;
  if (chatSearchCurrentIdx < 0) chatSearchCurrentIdx = chatSearchMatches.length - 1;
  if (chatSearchCurrentIdx >= chatSearchMatches.length) chatSearchCurrentIdx = 0;
  chatSearchMatches[chatSearchCurrentIdx].classList.add("chat-search-current");
  chatSearchMatches[chatSearchCurrentIdx].scrollIntoView({ block: "center", behavior: "smooth" });
  updateChatSearchCount();
}

if (chatSearchInput) {
  var searchDebounceTimer = null;
  chatSearchInput.addEventListener("input", function () {
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(function () {
      performChatSearch(chatSearchInput.value.trim());
    }, 200);
  });
  chatSearchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      navigateChatSearch(e.shiftKey ? -1 : 1);
    } else if (e.key === "Escape") {
      closeChatSearch();
    }
  });
}

if (chatSearchPrev) {
  chatSearchPrev.addEventListener("click", function () { navigateChatSearch(-1); });
}
if (chatSearchNext) {
  chatSearchNext.addEventListener("click", function () { navigateChatSearch(1); });
}
if (chatSearchClose) {
  chatSearchClose.addEventListener("click", closeChatSearch);
}

document.addEventListener("keydown", function (e) {
  if ((e.ctrlKey || e.metaKey) && e.key === "f") {
    // Only intercept if not in an input that isn't the search input
    var tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") {
      if (e.target === chatSearchInput) {
        // Already in search, do nothing special
      } else {
        return; // Let native find work in inputs
      }
    }
    e.preventDefault();
    openChatSearch();
  }
});

// --- Cloud Knowledge Learning ---
var KNOWLEDGE_API_URL = API_URL.replace("/chat", "/knowledge");

// --- "Correct Me" button on bot messages ---
var _correctionTargetBubble = null;
var _correctionTargetText = "";

function addCorrectMeButton(bubble) {
  if (!bubble) return;
  // Only add to bot markdown bubbles
  var row = bubble.closest(".msg.bot");
  if (!row) return;
  var btn = document.createElement("button");
  btn.className = "correct-me-btn";
  btn.type = "button";
  btn.textContent = "Correct Me";
  btn.title = "Submit a correction for this response";
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    _correctionTargetBubble = bubble;
    _correctionTargetText = bubble.textContent || "";
    openCorrectionModal();
  });
  bubble.appendChild(btn);
}

// --- Correction Modal ---
function openCorrectionModal() {
  var existing = document.getElementById("correctionModal");
  if (existing) existing.remove();

  var overlay = document.createElement("div");
  overlay.id = "correctionModal";
  overlay.className = "correction-modal-overlay";

  var modal = document.createElement("div");
  modal.className = "correction-modal";

  var title = document.createElement("div");
  title.className = "correction-modal-title";
  title.textContent = "Correct ROK's Response";

  var hint = document.createElement("div");
  hint.className = "correction-modal-hint";
  hint.textContent = "Tell ROK what was wrong and what the correct answer is. Your correction will be reviewed before being added to ROK's knowledge.";

  var textarea = document.createElement("textarea");
  textarea.className = "correction-modal-input";
  textarea.placeholder = "e.g. The seahorse emoji 🪸 does exist, it was added in Unicode 13.0";
  textarea.maxLength = 500;
  textarea.rows = 3;

  var charCount = document.createElement("div");
  charCount.className = "correction-modal-charcount";
  charCount.textContent = "0 / 500";
  textarea.addEventListener("input", function () {
    charCount.textContent = textarea.value.length + " / 500";
  });

  var btnRow = document.createElement("div");
  btnRow.className = "correction-modal-btns";

  var cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.className = "correction-modal-cancel";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", function () {
    overlay.remove();
  });

  var submitBtn = document.createElement("button");
  submitBtn.type = "button";
  submitBtn.className = "correction-modal-submit";
  submitBtn.textContent = "Submit Correction";
  submitBtn.disabled = true;
  textarea.addEventListener("input", function () {
    submitBtn.disabled = textarea.value.trim().length < 5;
  });

  submitBtn.addEventListener("click", function () {
    var correction = textarea.value.trim();
    if (!correction) return;
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    submitCorrection(correction, _correctionTargetText, function (ok, msg) {
      overlay.remove();
      addMessage("system", msg);
    });
  });

  btnRow.appendChild(cancelBtn);
  btnRow.appendChild(submitBtn);

  modal.appendChild(title);
  modal.appendChild(hint);
  modal.appendChild(textarea);
  modal.appendChild(charCount);
  modal.appendChild(btnRow);
  overlay.appendChild(modal);

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) overlay.remove();
  });

  document.body.appendChild(overlay);
  textarea.focus();
}

function submitCorrection(correction, botResponse, callback) {
  try {
    fetch(KNOWLEDGE_API_URL + "/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        correction: correction,
        bot_response: String(botResponse || "").slice(0, 500)
      })
    }).then(function (res) {
      if (res.ok) {
        return res.json();
      }
      return res.json().catch(function () { return {}; }).then(function (d) {
        d._status = res.status;
        return d;
      });
    }).then(function (data) {
      if (data && data.ok) {
        if (callback) callback(true, "Correction submitted successfully! ROK will review it.");
      } else {
        var errMsg = (data && data.error) ? data.error : "Unknown error";
        if (data._status === 429) errMsg = "Rate limit exceeded — try again later.";
        if (callback) callback(false, "Failed to submit: " + errMsg);
      }
    }).catch(function () {
      if (callback) callback(false, "Failed to submit: Network error.");
    });
  } catch (e) {
    if (callback) callback(false, "Failed to submit: " + e.message);
  }
}

// Fetch and render knowledge list in sidebar
var knowledgeListEl = document.getElementById("knowledgeList");
var knowledgeCountEl = document.getElementById("knowledgeCount");

function fetchAndRenderKnowledge() {
  if (!knowledgeListEl) return;
  try {
    fetch(KNOWLEDGE_API_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then(function (res) { return res.json(); }).then(function (data) {
      if (!data || !data.ok) return;
      var entries = data.entries || [];
      if (knowledgeCountEl) knowledgeCountEl.textContent = entries.length;
      if (!entries.length) {
        knowledgeListEl.innerHTML = '<div class="side-empty">No learned facts yet.</div>';
        return;
      }
      knowledgeListEl.innerHTML = entries.slice(-20).reverse().map(function (e) {
        var safeFact = escapeHtml(e.fact || "");
        var safeId = escapeHtml(e.id || "");
        return '<div class="knowledge-item" data-knowledge-id="' + safeId + '">' +
          '<span class="knowledge-fact">' + safeFact + '</span>' +
          '<button class="knowledge-delete-btn" type="button" data-delete-knowledge-id="' + safeId + '" aria-label="Delete fact" title="Delete">&times;</button>' +
          '</div>';
      }).join("");

      // Wire up delete buttons
      knowledgeListEl.querySelectorAll(".knowledge-delete-btn").forEach(function (btn) {
        btn.addEventListener("click", function (ev) {
          ev.stopPropagation();
          var id = btn.getAttribute("data-delete-knowledge-id");
          if (!id) return;
          deleteKnowledgeFact(id);
        });
      });
    }).catch(function () {
      if (knowledgeListEl) knowledgeListEl.innerHTML = '<div class="side-empty">Could not load.</div>';
    });
  } catch (e) {
    // Silently fail
  }
}

function deleteKnowledgeFact(id) {
  try {
    fetch(KNOWLEDGE_API_URL + "/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    }).then(function (res) { return res.json(); }).then(function (data) {
      if (data && data.ok) {
        fetchAndRenderKnowledge();
      }
    }).catch(function () {});
  } catch (e) {}
}

// Load knowledge list on startup and after learning
fetchAndRenderKnowledge();

// Elixir Network Partnership Modal - One time popup
function showElixirPartnershipModal() {
  if (!elixirPartnershipModal) return;
  try {
    const hasSeen = localStorage.getItem(ELIXIR_PARTNERSHIP_SEEN_KEY);
    if (hasSeen) return; // Already shown
    elixirPartnershipModal.hidden = false;
    elixirPartnershipModal.setAttribute("aria-hidden", "false");
  } catch (e) {
    // Ignore storage errors, still show modal
    elixirPartnershipModal.hidden = false;
    elixirPartnershipModal.setAttribute("aria-hidden", "false");
  }
}

function hideElixirPartnershipModal() {
  if (!elixirPartnershipModal) return;
  elixirPartnershipModal.hidden = true;
  elixirPartnershipModal.setAttribute("aria-hidden", "true");
  try {
    localStorage.setItem(ELIXIR_PARTNERSHIP_SEEN_KEY, "1");
  } catch (e) {
    // Ignore storage errors
  }
}

// Elixir modal event listeners
if (elixirCloseBtn) {
  elixirCloseBtn.addEventListener("click", hideElixirPartnershipModal);
}

if (elixirOkBtn) {
  elixirOkBtn.addEventListener("click", hideElixirPartnershipModal);
}

// Show Elixir partnership modal on first visit
showElixirPartnershipModal();

// ── ROK Pixel Painter - VLM-guided image generation ──

const PIXEL_PAINTER_API_URL = buildApiUrl("/api/image/paint");
const PIXEL_PAINTER_STORAGE_KEY = "rok_pixel_paintings";
const PIXEL_PAINTER_CANVAS_SIZE = 100;

// 2-pass generation: rough draft + refinement (only 2 API calls!)
const PIXEL_PAINTER_PASS_1_PIXELS = 100;  // Reduced to avoid rate limits
const PIXEL_PAINTER_PASS_2_PIXELS = 100;  // Reduced to avoid rate limits
const PIXEL_PAINTER_DELAY_MS = 2000;  // 2s delay between passes to avoid rate limits

class PixelCanvas {
  constructor(size = PIXEL_PAINTER_CANVAS_SIZE) {
    this.size = size;
    this.canvas = document.createElement("canvas");
    this.canvas.width = size;
    this.canvas.height = size;
    this.ctx = this.canvas.getContext("2d");
    this.imageData = this.ctx.createImageData(size, size);
    this.data = this.imageData.data;
  }

  // Initialize with random noise
  initWithNoise() {
    for (let i = 0; i < this.data.length; i += 4) {
      this.data[i] = Math.floor(Math.random() * 256);     // R
      this.data[i + 1] = Math.floor(Math.random() * 256); // G
      this.data[i + 2] = Math.floor(Math.random() * 256); // B
      this.data[i + 3] = 255; // Alpha
    }
    this.updateCanvas();
  }

  // Apply pixel changes from VLM response
  applyPixelChanges(changes) {
    for (const change of changes) {
      const x = Math.max(0, Math.min(this.size - 1, change.x));
      const y = Math.max(0, Math.min(this.size - 1, change.y));
      const color = change.color;
      
      // Parse hex color
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      
      // Set pixel
      const idx = (y * this.size + x) * 4;
      this.data[idx] = r;
      this.data[idx + 1] = g;
      this.data[idx + 2] = b;
      this.data[idx + 3] = 255;
    }
    this.updateCanvas();
  }

  // Update canvas from image data
  updateCanvas() {
    this.ctx.putImageData(this.imageData, 0, 0);
  }

  // Get base64 PNG (scaled up for AI vision - each pixel is 4x4 block)
  getBase64(scaleFactor = 4) {
    if (scaleFactor <= 1) {
      return this.canvas.toDataURL("image/png").split(",")[1];
    }
    // Create scaled canvas for AI to see pixels better
    const scaledCanvas = document.createElement("canvas");
    scaledCanvas.width = this.size * scaleFactor;
    scaledCanvas.height = this.size * scaleFactor;
    const scaledCtx = scaledCanvas.getContext("2d");
    // Use nearest-neighbor scaling to preserve pixel blocks
    scaledCtx.imageSmoothingEnabled = false;
    scaledCtx.drawImage(this.canvas, 0, 0, scaledCanvas.width, scaledCanvas.height);
    return scaledCanvas.toDataURL("image/png").split(",")[1];
  }

  // Get display URL (original size)
  getDisplayUrl() {
    return this.canvas.toDataURL("image/png");
  }

  // Get thumbnail (64x64)
  getThumbnail() {
    const thumbCanvas = document.createElement("canvas");
    thumbCanvas.width = 64;
    thumbCanvas.height = 64;
    const thumbCtx = thumbCanvas.getContext("2d");
    thumbCtx.drawImage(this.canvas, 0, 0, 64, 64);
    return thumbCanvas.toDataURL("image/png");
  }
}

// Store for active painting sessions
let activePixelPainting = null;

// Handle /imagine command
async function handleImagineCommand(prompt) {
  // Show user message
  addMessage("user", `/imagine ${prompt}`);
  
  // Build painting UI as DOM elements (not through addMessage which sanitizes HTML)
  const row = document.createElement("div");
  row.className = "msg bot";
  
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.innerHTML = '<img src="rokchatR.png" class="avatar-img" style="width:86%;height:86%;object-fit:contain;border-radius:50%;">';
  
  const bubble = document.createElement("div");
  bubble.className = "bubble plain";
  
  const container = document.createElement("div");
  container.className = "pixel-painting-container";
  
  const header = document.createElement("div");
  header.className = "pixel-painting-header";
  header.innerHTML = `<span class="pixel-painting-icon">🎨</span><span class="pixel-painting-title">Painting: "${escapeHtml(prompt)}"</span>`;
  
  const progressWrap = document.createElement("div");
  progressWrap.className = "pixel-painting-progress";
  progressWrap.innerHTML = `<div class="pixel-painting-bar"><div class="pixel-painting-fill" style="width: 0%"></div></div><span class="pixel-painting-status">Initializing...</span>`;
  
  const previewDiv = document.createElement("div");
  previewDiv.className = "pixel-painting-preview";
  previewDiv.style.display = "none";
  const previewImg = document.createElement("img");
  previewImg.className = "pixel-painting-img";
  previewImg.alt = "Generated image";
  previewDiv.appendChild(previewImg);
  
  const controlsDiv = document.createElement("div");
  controlsDiv.className = "pixel-painting-controls";
  const stopBtn = document.createElement("button");
  stopBtn.className = "pixel-painting-stop";
  stopBtn.type = "button";
  stopBtn.textContent = "Stop";
  controlsDiv.appendChild(stopBtn);
  
  const detailsDiv = document.createElement("div");
  detailsDiv.className = "pixel-painting-details";
  detailsDiv.style.display = "none";
  
  container.appendChild(header);
  container.appendChild(progressWrap);
  container.appendChild(previewDiv);
  container.appendChild(controlsDiv);
  container.appendChild(detailsDiv);
  bubble.appendChild(container);
  
  const timeSpan = document.createElement("span");
  timeSpan.className = "msg-time";
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const ampm = h >= 12 ? "PM" : "AM";
  timeSpan.textContent = (h % 12 || 12) + ":" + (m < 10 ? "0" : "") + m + " " + ampm;
  
  row.appendChild(avatar);
  row.appendChild(bubble);
  row.appendChild(timeSpan);
  chat.appendChild(row);
  scrollToBottom();
  updateChatWelcomeVisibility();
  
  const progressBar = progressWrap.querySelector(".pixel-painting-fill");
  const statusText = progressWrap.querySelector(".pixel-painting-status");
  
  let stopped = false;
  stopBtn.addEventListener("click", () => {
    stopped = true;
    statusText.textContent = "Stopped by user";
    stopBtn.disabled = true;
  });
  
  // Initialize canvas with noise
  const canvas = new PixelCanvas();
  canvas.initWithNoise();
  
  const startTime = Date.now();
  const RATE_LIMIT_DELAY_MS = 3000;
  
  // Helper to make API call with retries
  async function paintPass(passNum, passName) {
    progressBar.style.width = `${passNum === 1 ? 30 : 80}%`;
    statusText.textContent = `${passName}...`;
    
    let retries = 2;  // Reduced - backend has its own retries
    let rateLimitRetries = 1;
    
    while (retries > 0) {
      const response = await fetch(PIXEL_PAINTER_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: prompt,
          canvas_base64: canvas.getBase64(),
          pass_num: passNum,
          max_pixels: 100,  // Capped to reduce GPU time per request
          mode: "json"
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.ok && data.pixel_changes?.length > 0) {
          canvas.applyPixelChanges(data.pixel_changes);
        }
        return data;
      }
      
      if (response.status === 429 && rateLimitRetries > 0) {
        rateLimitRetries--;
        const waitMs = (4 - rateLimitRetries) * RATE_LIMIT_DELAY_MS;
        statusText.textContent = `Rate limit, waiting ${waitMs / 1000}s...`;
        await new Promise(r => setTimeout(r, waitMs));
        continue;
      }
      
      if (response.status < 500) {
        throw new Error(`API error: ${response.status}`);
      }
      
      retries--;
      if (retries > 0) {
        const waitMs = (6 - retries) * 1000;
        statusText.textContent = `Retrying in ${waitMs / 1000}s...`;
        await new Promise(r => setTimeout(r, waitMs));
      }
    }
    
    throw new Error("API retries exhausted");
  }
  
  try {
    // Pass 1: Shape - carve main forms out of noise
    if (!stopped) {
      await paintPass(1, "Shaping from noise...");
      previewImg.src = canvas.getDisplayUrl();
      previewDiv.style.display = "block";
      await new Promise(r => setTimeout(r, PIXEL_PAINTER_DELAY_MS));
    }
    
    // Pass 2: Polish - refine into clear image
    if (!stopped) {
      await paintPass(2, "Polishing details...");
    }
    
    statusText.textContent = "Complete";
  } catch (error) {
    statusText.textContent = `Error: ${error.message}`;
    console.error("Pixel painting error:", error);
  }
  
  // Show final result
  const finalUrl = canvas.getDisplayUrl();
  previewImg.src = finalUrl;
  previewDiv.style.display = "block";
  stopBtn.style.display = "none";
  
  // Build details
  const duration = Math.round((Date.now() - startTime) / 1000);
  const totalPixels = iterationLogs.reduce((sum, log) => sum + log.pixelsChanged, 0);
  const finalConfidence = iterationLogs[iterationLogs.length - 1]?.confidence || 0;
  
  detailsDiv.innerHTML = `
    <div class="pixel-painting-stats">
      <span>⏱️ ${duration}s</span>
      <span>🖌️ ${iterationLogs.length} iterations</span>
      <span>📊 ${totalPixels} pixels changed</span>
      <span>🎯 ${Math.round(finalConfidence * 100)}% confidence</span>
    </div>
    <button class="pixel-painting-save" type="button">💾 Save to Gallery</button>
  `;
  detailsDiv.style.display = "block";
  
  // Save button
  const saveBtn = detailsDiv.querySelector(".pixel-painting-save");
  saveBtn.addEventListener("click", () => {
    savePixelPainting(prompt, finalUrl, iterationLogs, duration);
    saveBtn.textContent = "✅ Saved!";
    saveBtn.disabled = true;
  });
  
  // Auto-save
  savePixelPainting(prompt, finalUrl, iterationLogs, duration);
}

// Save painting to localStorage
function savePixelPainting(prompt, imageUrl, logs, duration) {
  try {
    const paintings = JSON.parse(localStorage.getItem(PIXEL_PAINTER_STORAGE_KEY) || "[]");
    paintings.push({
      id: Date.now(),
      prompt,
      imageUrl,
      thumbnail: imageUrl, // Could optimize to smaller size
      iterations: logs.length,
      duration,
      timestamp: Date.now()
    });
    // Keep only last 20
    while (paintings.length > 20) paintings.shift();
    localStorage.setItem(PIXEL_PAINTER_STORAGE_KEY, JSON.stringify(paintings));
  } catch (e) {
    console.error("Failed to save painting:", e);
  }
}

// escapeHtml already defined above (line ~4584)
