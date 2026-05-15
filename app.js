const chat = document.getElementById("chat");
const workspaceTabs = document.getElementById("workspaceTabs");
const workspaceSidebarTabsSection = document.querySelector(".side-tabs-section");
const workspaceSidebarTabs = document.getElementById("workspaceSidebarTabs");
const workspacePanel = document.getElementById("workspacePanel");
const mathPanel = document.getElementById("mathPanel");
const mathChatToggleBtn = document.getElementById("mathChatToggleBtn");
const mathChatDrawer = document.getElementById("mathChatDrawer");
const mathChatCloseBtn = document.getElementById("mathChatCloseBtn");
const mathChatMessages = document.getElementById("mathChatMessages");
const mathChatInput = document.getElementById("mathChatInput");
const mathChatSendBtn = document.getElementById("mathChatSendBtn");
const mathStandaloneLink = document.getElementById("mathStandaloneLink");
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
const sandboxUploadFolderBtn = document.getElementById("sandboxUploadFolderBtn");
const sandboxNewFileBtn = document.getElementById("sandboxNewFileBtn");
const sandboxSaveBtn = document.getElementById("sandboxSaveBtn");
const sandboxDeleteBtn = document.getElementById("sandboxDeleteBtn");
const sandboxAnalyzeBtn = document.getElementById("sandboxAnalyzeBtn");
const sandboxUndoBtn = document.getElementById("sandboxUndoBtn");
const sandboxApplyBtn = document.getElementById("sandboxApplyBtn");
const sandboxClearAnalysisBtn = document.getElementById("sandboxClearAnalysisBtn");
const sandboxFilePathInput = document.getElementById("sandboxFilePathInput");
const sandboxFileEditor = document.getElementById("sandboxFileEditor");
const sandboxChangesSummary = document.getElementById("sandboxChangesSummary");
const sandboxChangesList = document.getElementById("sandboxChangesList");
const sandboxChangesMeta = document.getElementById("sandboxChangesMeta");
const sandboxActivityShell = document.getElementById("sandboxActivityShell");
const sandboxActivityTitle = document.getElementById("sandboxActivityTitle");
const sandboxActivityStatus = document.getElementById("sandboxActivityStatus");
const sandboxActivityElapsed = document.getElementById("sandboxActivityElapsed");
const sandboxActivityList = document.getElementById("sandboxActivityList");
const sandboxChatList = document.getElementById("sandboxChatList");
const sandboxChatInput = document.getElementById("sandboxChatInput");
const sandboxChatSendBtn = document.getElementById("sandboxChatSendBtn");
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
const attachFolderBtn = document.getElementById("attachFolderBtn");
const webToggleBtn = document.getElementById("webToggleBtn");
const memoryToggleBtn = document.getElementById("memoryToggleBtn");
const customizeRokBtn = document.getElementById("customizeRokBtn");
const incognitoToggleBtn = document.getElementById("incognitoToggleBtn");
const toolsToggleBtn = document.getElementById("toolsToggleBtn");
const fileInput = document.getElementById("fileInput");
const folderInput = document.getElementById("folderInput");
const sandboxFileInput = document.getElementById("sandboxFileInput");
const sandboxFolderInput = document.getElementById("sandboxFolderInput");
const attachmentList = document.getElementById("attachmentList");
const brandHomeBtn = document.getElementById("brandHomeBtn");
const homeScreen = document.getElementById("homeScreen");
const homeStartBtn = document.getElementById("homeStartBtn");
const homeStartBtnAlt = document.getElementById("homeStartBtnAlt");
const homePrivacyBtn = document.getElementById("homePrivacyBtn");
const clearBtn = document.getElementById("clearBtn");
const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
const topbarActions = document.querySelector(".topbar-actions");
const layoutEditToggleBtn = document.getElementById("layoutEditToggleBtn");
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
const composerMeta = document.getElementById("composerMeta");
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

// One-time forum survey modal
const forumSurveyModal = document.getElementById("forumSurveyModal");
const forumSurveyCloseBtn = document.getElementById("forumSurveyCloseBtn");
const forumSurveyMaybeLaterBtn = document.getElementById("forumSurveyMaybeLaterBtn");
const forumSurveyTakeBtn = document.getElementById("forumSurveyTakeBtn");
const FORUM_SURVEY_SEEN_KEY = "rok_forum_survey_seen";
const FORUM_SURVEY_URL = "https://forms.gle/1t49ibc594EguxHu5";
const legalTermsTab = document.getElementById("legalTermsTab");
const legalPrivacyTab = document.getElementById("legalPrivacyTab");
const legalCreditsTab = document.getElementById("legalCreditsTab");
const legalTermsPanel = document.getElementById("legalTermsPanel");
const legalPrivacyPanel = document.getElementById("legalPrivacyPanel");
const legalCreditsPanel = document.getElementById("legalCreditsPanel");
const legalLinkButtons = document.querySelectorAll("[data-legal]");
const composerWrap = document.querySelector(".composer-wrap");
const composerShell = document.querySelector(".composer");
const sidebar = document.querySelector(".sidebar");
const homeDemoChat = document.querySelector(".home-bg-chat");
const homeDemoPrompt = document.getElementById("homeDemoPrompt");
const homeDemoReply = document.getElementById("homeDemoReply");
const homeDemoCards = document.getElementById("homeDemoCards");
const homeWorkspacePreview = document.getElementById("homeWorkspacePreview");
const homePreviewLineElements = Array.from(document.querySelectorAll("[data-preview-line]"));
const homeSloganText = document.getElementById("homeSloganText");
const onboardingModal = document.getElementById("onboardingModal");
const onboardingGuide = document.getElementById("onboardingGuide");
const onboardingSpotlight = document.getElementById("onboardingSpotlight");
const onboardingGuideStep = document.getElementById("onboardingGuideStep");
const onboardingGuideHeading = document.getElementById("onboardingGuideHeading");
const onboardingGuideText = document.getElementById("onboardingGuideText");
const onboardingChoiceGrid = document.getElementById("onboardingChoiceGrid");
const onboardingNameField = document.getElementById("onboardingNameField");
const onboardingCloseBtn = document.getElementById("onboardingCloseBtn");
const onboardingBackBtn = document.getElementById("onboardingBackBtn");
const onboardingNextBtn = document.getElementById("onboardingNextBtn");
const onboardingSkipBtn = document.getElementById("onboardingSkipBtn");
const onboardingNameInput =
  document.getElementById("onboardingGuideNameInput") ||
  document.getElementById("onboardingNameInput");

const runtimeConfig = (typeof window !== "undefined" && window.ROK_CONFIG) ? window.ROK_CONFIG : {};
const DEFAULT_REMOTE_API_BASE = "https://rokapi.rokteam.org";
const LEGACY_REMOTE_API_BASES = new Set([
  "https://rokbackendreal.kyklos.online",
  "https://rok.rokteam.org"
]);

function normalizeApiBaseValue(rawValue) {
  const value = String(rawValue || "").trim().replace(/\/+$/, "");
  if (!value) return "";
  const lowered = value.toLowerCase();
  if (LEGACY_REMOTE_API_BASES.has(lowered)) {
    return DEFAULT_REMOTE_API_BASE;
  }
  return value;
}

function isLocalBrowserHost() {
  if (typeof window === "undefined" || !window.location) return false;
  const host = String(window.location.hostname || "").toLowerCase();
  return host === "127.0.0.1" || host === "localhost" || host === "::1";
}

function migrateLegacyApiBaseStorage() {
  if (typeof window === "undefined" || !window.localStorage) return;
  try {
    const legacyKeys = ["rok_api_base", "apiBase"];
    legacyKeys.forEach(function (storageKey) {
      const currentValue = normalizeApiBaseValue(window.localStorage.getItem(storageKey));
      if (!currentValue) return;
      window.localStorage.setItem(storageKey, currentValue);
    });
  } catch {
    
  }
}

migrateLegacyApiBaseStorage();

const runtimeApiBase =
  (typeof window !== "undefined" && typeof window.ROK_API_BASE === "string") ? window.ROK_API_BASE : "";
const ROK_API_BASE = isLocalBrowserHost()
  ? ""
  : (normalizeApiBaseValue(runtimeApiBase) || DEFAULT_REMOTE_API_BASE);
const buildApiUrl = (path) => `${ROK_API_BASE}${path}`;
const API_URL = buildApiUrl("/api/chat");
const SANDBOX_URL = buildApiUrl("/api/sandbox");
const INTENT_URL = buildApiUrl("/api/intent");
const STATUS_URL = buildApiUrl("/api/status");
const MODELS_URL = buildApiUrl("/api/models");
const CLIENT_CONFIG_URL = buildApiUrl("/api/client-config");
const AUTH_SESSION_URL = buildApiUrl("/api/auth/session");
const BAN_GUARD_PATHS = new Set(["/api/chat", "/api/sandbox", "/api/intent", "/api/status", "/api/models"]);
const DEFAULT_CLIENT_LIMITS = {
  typingSpeedMs: 12,
  cooldownMs: 1000,
  historyLimit: 20,          // was 200 â€” large history balloons every request payload
  maxHistoryMessages: 20,    // was 200
  maxAttachments: 20,
  maxImageAttachmentBytes: 8 * 1024 * 1024,
  maxTotalImageBytes: 16 * 1024 * 1024,
  maxFileSizeBytes: 2 * 1024 * 1024,   // was 200MB â€” capped at 2MB
  maxFileChars: 8000,        // was 12000
  maxResponseTokens: 8192
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
const LOCAL_DAEDALUS_OLLAMA_API_KEY = "rok.daedalusOllamaApiKey.v1";
const LOCAL_CUSTOM_OLLAMA_API_KEY = "rok.customOllamaApiKey.v1";
const LOCAL_CUSTOM_OLLAMA_MODEL_ID = "rok.customOllamaModelId.v1";
const LOCAL_TOS_ACCEPTED_KEY = "rok.tosAccepted.v1";
const LOCAL_KNOWLEDGE_KEY = "rok.localKnowledge.v1";
const LOCAL_MEMORY_KEY = "rok.localMemory.v1";
const LOCAL_KNOWLEDGE_MAX_ENTRIES = 24;
const LOCAL_KNOWLEDGE_PROMPT_LIMIT = 8;
const LOCAL_KNOWLEDGE_MAX_FACT_CHARS = 280;
const LOCAL_MEMORY_MAX_ENTRIES = 80;
const LOCAL_MEMORY_PROMPT_LIMIT = 10;
const LOCAL_PROJECT_MEMORY_PROMPT_LIMIT = 8;
const LOCAL_MEMORY_MAX_FACT_CHARS = 320;
const EVIDENCE_HISTORY_PREVIEW_LIMIT = 6;
const EVIDENCE_ENTRY_PREVIEW_LIMIT = 8;
const EVIDENCE_TEXT_PREVIEW_CHARS = 220;
const EVIDENCE_PROMPT_PREVIEW_CHARS = 640;
const EVIDENCE_WORKSPACE_PREVIEW_CHARS = 420;
const TOS_VERSION = 1;
/** Bump this to force every browser to see the tour one more time after deploy. */
const ONBOARDING_TOUR_VERSION = 6;
const CUSTOMIZATION_NAME_MAX_CHARS = 64;
const CUSTOMIZATION_PROMPT_MAX_CHARS = 2400;
const WORKSPACE_TAB_LABEL_MAX_CHARS = 24;
const CUSTOM_WORKSPACE_TAB_URL_MAX_CHARS = 320;
const CUSTOM_WORKSPACE_TAB_LIMIT = 8;
const PRIMARY_USE_CASE_OPTIONS = [
  {
    id: "general",
    label: "General questions",
    description: "Bounce between random questions, ideas, and everyday stuff."
  },
  {
    id: "research",
    label: "Study + research",
    description: "Explain topics, summarize notes, and work through school or research tasks."
  },
  {
    id: "code",
    label: "Coding",
    description: "Debug, plan changes, and move into ROK CODE when you need structure."
  },
  {
    id: "writing",
    label: "Writing",
    description: "Draft, brainstorm, rewrite, and keep the tone you want."
  },
  {
    id: "fun",
    label: "Fun + random stuff",
    description: "Mess around, ask goofy questions, and use ROK like a creative sandbox."
  }
];
const PRIMARY_USE_CASE_IDS = new Set(PRIMARY_USE_CASE_OPTIONS.map((item) => item.id));
const CUSTOMIZATION_ACCENT_PRESETS = [
  "#d14b4b",
  "#e27a3f",
  "#caaf38",
  "#3e8fd3",
  "#3f9d73",
  "#7b66d9"
];
const MAX_LOCAL_SESSIONS = 30;
const CUSTOMIZATION_EXPORT_VERSION = 1;
const DEFAULT_CHAT_MODEL = "gpt-oss:120b-cloud";
const DEFAULT_WORKSPACE_TAB_LABELS = {
  chat: "Chat",
  sandbox: "ROK CODE",
  math: "ROK MATH"
};
const DEFAULT_SIDEBAR_SECTION_ORDER = ["header", "tabs", "chats", "memory"];
const DEFAULT_TOPBAR_ACTION_ORDER = ["customize", "incognito", "clear"];
const DEFAULT_MAIN_SECTION_ORDER = ["tabs", "content", "composer"];
const SIDEBAR_SECTION_LABELS = {
  header: "Brand + new chat",
  tabs: "Views",
  chats: "Chats",
  memory: "Memory"
};
const TOPBAR_ACTION_LABELS = {
  customize: "Customize",
  incognito: "Incognito",
  clear: "Clear"
};
const MAIN_SECTION_LABELS = {
  tabs: "Workspace tabs",
  content: "Conversation / active tool",
  composer: "Composer"
};
const DEFAULT_USER_SETTINGS = {
  defaultModel: DEFAULT_CHAT_MODEL,
  rememberModel: true,
  maxSessions: MAX_LOCAL_SESSIONS,
  historyLimit: DEFAULT_CLIENT_LIMITS.historyLimit,
  cooldownMs: DEFAULT_CLIENT_LIMITS.cooldownMs,
  typingSpeed: DEFAULT_CLIENT_LIMITS.typingSpeedMs,
  enterToSend: true,
  autoScroll: true,
  sidebarStartsCollapsed: true,
  sidebarWidth: 220,
  chatWidth: 760,
  bubbleRadius: 18,
  bubbleTextSize: 14,
  showStarterChips: true,
  showTimestamps: true,
  accentColor: "#d14b4b",
  compactMode: false,
  reduceMotion: false,
  customSystemPrompt: "",
  customIdentityName: "",
  preferredName: "",
  primaryUseCase: "general",
  memoryEnabled: true,
  projectMemoryEnabled: true,
  autoLearn: true,
  incognitoMode: false,
  askBeforeSensitiveSend: true,
  showEvidenceButtons: true,
  workspaceTabLabels: {},
  customWorkspaceTabs: [],
  workspaceTabOrder: ["chat", "sandbox", "math"],
  sidebarSectionOrder: [...DEFAULT_SIDEBAR_SECTION_ORDER],
  topbarActionOrder: [...DEFAULT_TOPBAR_ACTION_ORDER],
  mainSectionOrder: [...DEFAULT_MAIN_SECTION_ORDER],
  showTopWorkspaceTabs: true,
  showSidebarWorkspaceTabs: true
};

function sanitizePrimaryUseCase(value) {
  const normalized = String(value || "").trim().toLowerCase();
  return PRIMARY_USE_CASE_IDS.has(normalized) ? normalized : "general";
}
// Model IDs are now sourced from the server via /api/models.
// SUPPORTED_MODEL_IDS is kept as an empty set so all server-returned models are accepted.
const SUPPORTED_MODEL_IDS = new Set();
const HERMES_MODEL_ID = "gpt-oss:120b-cloud";
const TITAN_MODEL_ID = "qwen3.5:397b-cloud";
const DAEDALUS_MODEL_ID = "glm-4.7:cloud";
const HYPERION_MODEL_ID = "qwen3-coder:480b-cloud";
const DAEDALUS_LEGACY_MODEL_ID = "deepseek-v3.2:cloud";
const DAEDALUS_LEGACY_MODEL_ID_ALT = "glm-5.1:cloud";
const CHEESE_MODEL_ID = "gpt-oss:20b-cheese";
const CHESS_MODEL_ID = "gpt-oss:20b-chess";
const UNOFFICIAL_MODEL_IDS = new Set();
const CUSTOM_OLLAMA_GROUP_LABEL = "Your Ollama Cloud";
const CUSTOM_OLLAMA_CONFIG_ACTION = "configure_custom_ollama_cloud";
const HERMES_LABEL = "Hermes 1.3";
const HERMES_PROVIDER_NAME = "GPT OSS 120B Cloud";
const DAEDALUS_LABEL = "Daedalus 1.0";
const DAEDALUS_PROVIDER_NAME = "GLM 4.7 Cloud";
const HYPERION_LABEL = "Hyperion";
const HYPERION_PROVIDER_NAME = "Qwen3 Coder 480B";
const DEFAULT_MODEL_OPTIONS = [
  { id: HERMES_MODEL_ID, label: HERMES_LABEL },
  { id: DAEDALUS_MODEL_ID, label: DAEDALUS_LABEL }
];
const KNOWN_MODEL_LABELS = {
  [HERMES_MODEL_ID]: HERMES_LABEL,
  [TITAN_MODEL_ID]: HERMES_LABEL,
  [CHEESE_MODEL_ID]: HERMES_LABEL,
  [CHESS_MODEL_ID]: HERMES_LABEL,
  [DAEDALUS_MODEL_ID]: DAEDALUS_LABEL,
  [HYPERION_MODEL_ID]: HYPERION_LABEL,
  [DAEDALUS_LEGACY_MODEL_ID]: DAEDALUS_LABEL,
  [DAEDALUS_LEGACY_MODEL_ID_ALT]: DAEDALUS_LABEL,
  "gemma4:31b-cloud": HERMES_LABEL,
  "qwen3.5:cloud": HERMES_LABEL,
  "qwen3.5:397b-cloud": HERMES_LABEL,
  "gpt-oss:20b-cloud": HERMES_LABEL
};
const MODEL_DESCRIPTIONS = {
  [HERMES_MODEL_ID]: `${HERMES_LABEL} - ${HERMES_PROVIDER_NAME} for chat, coding, and math. Image uploads route through Qwen3-VL vision.`,
  [DAEDALUS_MODEL_ID]: `${DAEDALUS_LABEL} - ${DAEDALUS_PROVIDER_NAME} with a rolling token limit unless you add your own Ollama API key.`,
  [HYPERION_MODEL_ID]: `${HYPERION_LABEL} - ${HYPERION_PROVIDER_NAME} for advanced coding and cybersecurity work using your own Ollama Cloud key.`,
  "gemma4:31b-cloud": `${HERMES_LABEL} - legacy alias now routed to ${HERMES_PROVIDER_NAME}.`,
  "qwen3.5:cloud": `${HERMES_LABEL} - legacy alias now routed to ${HERMES_PROVIDER_NAME}.`,
  "qwen3.5:397b-cloud": `${HERMES_LABEL} - legacy alias now routed to ${HERMES_PROVIDER_NAME}.`,
  "gpt-oss:20b-cloud": `${HERMES_LABEL} - legacy alias now routed to ${HERMES_PROVIDER_NAME}.`,
  [DAEDALUS_LEGACY_MODEL_ID]: `${DAEDALUS_LABEL} - legacy alias now routed to ${DAEDALUS_PROVIDER_NAME}.`,
  [DAEDALUS_LEGACY_MODEL_ID_ALT]: `${DAEDALUS_LABEL} - legacy alias now routed to ${DAEDALUS_PROVIDER_NAME}.`
};
const WORKSPACE_TAB_KEYS = ["chat", "sandbox", "math"];
/** Visible text chat models shown in the composer. Image uploads use the backend vision route. */
const COMPOSER_TEXT_MODEL_ORDER = [HERMES_MODEL_ID, DAEDALUS_MODEL_ID];
const COMPOSER_MODEL_GROUPS = [
  { label: "ROK", modelIds: [HERMES_MODEL_ID, DAEDALUS_MODEL_ID, HYPERION_MODEL_ID] }
];
/** Icons + labels for the composer model control (paths relative to index.html). */
const COMPOSER_MODEL_ASSETS = {
  [HERMES_MODEL_ID]: { label: HERMES_LABEL, icon: "rokhermes.png", alt: HERMES_LABEL },
  [TITAN_MODEL_ID]: { label: HERMES_LABEL, icon: "rokhermes.png", alt: HERMES_LABEL },
  [CHEESE_MODEL_ID]: { label: HERMES_LABEL, icon: "rokhermes.png", alt: HERMES_LABEL },
  [CHESS_MODEL_ID]: { label: HERMES_LABEL, icon: "rokhermes.png", alt: HERMES_LABEL },
  [DAEDALUS_MODEL_ID]: { label: DAEDALUS_LABEL, icon: "rokdaedalus.png", alt: DAEDALUS_LABEL },
  [HYPERION_MODEL_ID]: { label: HYPERION_LABEL, icon: "roklogo.png", alt: HYPERION_LABEL }
};
const DEFAULT_TITAN_LOCK_WINDOW_MS = 3 * 60 * 60 * 1000;
const DEFAULT_DAEDALUS_LOCK_WINDOW_MS = 60 * 60 * 1000;
const SANDBOX_DEFAULT_PROMPT = "Analyze this ROK CODE project and propose the next file-by-file code changes.";
const SANDBOX_MAX_FILES = 48;
const SANDBOX_MAX_FILE_CHARS = 24_000;
const SANDBOX_CHANGE_PREVIEW_CONTEXT_LINES = 2;
const SANDBOX_CHANGE_PREVIEW_MAX_LINES = 24;
const SANDBOX_STARTER_PROMPTS = {
  review: {
    label: "Review workspace",
    prompt: "Review this workspace and suggest the safest high-impact change. Keep the plan small, explain why it matters, and show the file-by-file edits before I apply anything."
  },
  refactor: {
    label: "Safe refactor",
    prompt: "Refactor this code carefully. Keep the same behavior, explain the plan in plain English, and show the requested file changes before I apply anything."
  },
  debug: {
    label: "Find the bug",
    prompt: "Look through these files, find the most likely bug or risky spot, explain it clearly, and propose the smallest safe fix."
  },
  scaffold: {
    label: "Starter scaffold",
    prompt: "Create a small starter project for: [describe the app here]. Keep the structure simple, explain each file, and show the requested changes before I apply them."
  }
};
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
const HOME_SLOGANS = [
  "Keep the work yours.",
  "AI without giving up control.",
  "Switch between ROK and your own runtime.",
  "Local when you want it. Hosted when you choose it.",
  "The user-controlled side of AI."
];
const HOME_SLOGAN_TYPING_SPEED_MS = 34;
const HOME_SLOGAN_HOLD_MS = 1600;
const HOME_SLOGAN_ERASE_SPEED_MS = 18;
const MATH_STANDALONE_VERSION = "3";
const ONBOARDING_TOUR_TEXT_SPEED_MS = 22;
const ONBOARDING_TOUR_STEPS = [
  {
    id: "intro",
    title: "ROK opens ready to work",
    text: "You land in chat first, the sidebar stays tucked away until you want it, and the heavier control stuff stays optional instead of getting dumped on you right away.",
    nextLabel: "What are you using ROK for?"
  },
  {
    id: "use-case",
    title: "What are you mainly here for?",
    text: "Pick the lane that feels closest. This only tunes ROK's first-run suggestions and welcome copy on this device, and you can change it later in Customize.",
    showChoices: true,
    nextLabel: "Set my name"
  },
  {
    id: "name",
    title: "What should ROK call you?",
    text: "Optional, local, and lightweight. ROK will only use your name when it actually sounds natural in the conversation.",
    showNameField: true,
    nextLabel: "Start chatting"
  }
];
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
  "Weâ€™re giving ROK a quick tune-up.",
  "ROK is undergoing a little spring cleaning.",
  "ROKâ€™s gears are jammed, but weâ€™re fixing them now.",
  "ROK is installing some fresh batteries.",
  "Just polishing the ROK. Back online momentarily.",
  "ROK is playing hide and seek. (Itâ€™s winning).",
  "ROK is currently in â€˜Do Not Disturbâ€™ mode.",
  "Waiting for ROK to wake up...",
  "ROK: Gone fishing. Back shortly.",
  "ROK is taking a breather.",
  "ROK hit a snag! Weâ€™re working on it.",
  "Something tripped ROK up. Hang tight.",
  "ROK is currently speechless.",
  "ROK ran into a bit of a hiccup.",
  "ROK is currently counting sheep.",
  "Itâ€™s not you, itâ€™s ROK. We need a moment.",
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
  "ROK is currently orbiting a black hole. Itâ€™s a bit slow right now.",
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
const SERVER_DOWN_MESSAGES_PRIMARY = [
  "ROK is temporarily unavailable.",
  "We could not reach ROK right now.",
  "ROK is taking a short pause. Please try again soon.",
  "Connection to ROK is unavailable at the moment.",
  "ROK is not responding right now.",
  "ROK should be back shortly.",
  "ROK is at capacity right now."
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
let homeSloganRunToken = 0;
let pendingHomeEnterTab = "";
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
let sandboxChatDraft = "";
const sandboxAnalysisMemory = new Map();
const sandboxActivityMemory = new Map();
const sandboxExpandedChangeMemory = new Map();
let sandboxActivityTimer = null;
let isBanOverlayActive = false;
let isSidebarCollapsed = true;
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
const hasMermaid = typeof mermaid !== "undefined";
let mermaidInitialized = false;
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

const MODEL_ID_ALIASES = {
  [DAEDALUS_LEGACY_MODEL_ID]: DAEDALUS_MODEL_ID,
  [DAEDALUS_LEGACY_MODEL_ID_ALT]: DAEDALUS_MODEL_ID
};

function resolveModelAlias(rawModel) {
  const normalized = sanitizeModelId(rawModel);
  return MODEL_ID_ALIASES[normalized] || normalized;
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
      id = resolveModelAlias(item);
      label = item.trim();
    } else if (item && typeof item === "object") {
      id = resolveModelAlias(item.id || item.model || item.value);
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
  const selectableOptions = candidates.filter((item) => COMPOSER_TEXT_MODEL_ORDER.includes(item.id));
  const selectableIds = new Set(selectableOptions.map((item) => item.id));
  const requestedDefault = resolveModelAlias(rawDefaultModel);
  const customModelId = getConfiguredCustomOllamaModelId();
  if (requestedDefault && customModelId && requestedDefault === customModelId) {
    return customModelId;
  }
  if (requestedDefault && selectableIds.has(requestedDefault)) {
    return requestedDefault;
  }
  if (selectableIds.has(DEFAULT_CHAT_MODEL)) {
    return DEFAULT_CHAT_MODEL;
  }
  if (selectableIds.has(HERMES_MODEL_ID)) {
    return HERMES_MODEL_ID;
  }
  for (const item of selectableOptions) {
    if (item && item.id) {
      return item.id;
    }
  }
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
    const parsed = { ...loadUserSettingsFromStorage(), ...userSettings };
    return sanitizeLongUserSettingText(parsed.customSystemPrompt);
  } catch {
    return "";
  }
}

function getCustomIdentityHeaderValue() {
  try {
    const parsed = { ...loadUserSettingsFromStorage(), ...userSettings };
    return sanitizeShortUserSettingText(parsed.customIdentityName);
  } catch {
    return "";
  }
}

function getModelSpecificSystemPrompt() {
  const activeModel = normalizeSessionModel(getCurrentSessionModel());
  if (activeModel !== HYPERION_MODEL_ID) {
    return "";
  }
  return [
    "When the request is about coding, debugging, vulnerabilities, exploit paths, code review, or fixes, include one short Mermaid diagram in a fenced code block that shows the bug flow and the fix boundary.",
    "Prefer a valid Mermaid flowchart starting with flowchart TD, with 3-7 nodes and simple node ids like A, B, C, and D.",
    "The opening fence must be exactly three backticks followed by mermaid, then a newline. Put the closing fence on its own line.",
    "Use triple backticks for code fences. Do not use triple double-quotes or triple single-quotes as fence markers.",
    "After the Mermaid diagram, continue with the normal technical explanation, repro details, and fix notes.",
    "If the request is unrelated to code or security, do not force a diagram."
  ].join(" ");
}

function getMergedSystemPromptForApi() {
  const custom = getCustomSystemPromptHeaderValue();
  const modelSpecific = getModelSpecificSystemPrompt();
  if (isIncognitoModeEnabled()) {
    return [custom, modelSpecific].filter(Boolean).join("\n\n");
  }
  const parsed = { ...loadUserSettingsFromStorage(), ...userSettings };
  const name = sanitizeShortUserSettingText(parsed.preferredName);
  const identity = name
    ? `User context: The user goes by "${name}". Address them by this name when it feels natural in conversation.`
    : "";
  return [custom, modelSpecific, identity].filter(Boolean).join("\n\n");
}

function getCustomPromptOverridesForApi() {
  return {
    customSystemPrompt: sanitizeLongUserSettingText(getMergedSystemPromptForApi()),
    customIdentity: sanitizeShortUserSettingText(getCustomIdentityHeaderValue())
  };
}

function buildApiHeaders(includeJson, options = {}) {
  const headers = {};
  if (includeJson) {
    headers["Content-Type"] = "application/json";
  }
  const requestedModel = resolveModelAlias(options && options.modelId ? options.modelId : "");
  const userKey = getSavedUserOllamaApiKeyForModel(requestedModel);
  if (userKey) {
    headers["X-ROK-Ollama-Key"] = userKey;
  }
  if (isIncognitoModeEnabled()) {
    headers["X-ROK-Incognito"] = "1";
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

const AUTO_MESSAGE_RETRY_LIMIT = 1;
const AUTO_MESSAGE_RETRY_BASE_DELAY_MS = 1100;
const AUTO_MESSAGE_RETRY_MAX_DELAY_MS = 12000;

function sleepMs(ms = 0) {
  const safeMs = Math.max(0, Number(ms) || 0);
  return new Promise((resolve) => setTimeout(resolve, safeMs));
}

function buildRetryableRequestError(response, fallbackMessage = "Request failed.") {
  const status = Number(response && response.status) || 0;
  const retryAfterRaw = response && response.headers ? response.headers.get("Retry-After") : "";
  const retryAfterSec = Number.parseInt(String(retryAfterRaw || "").trim(), 10);
  const error = new Error(fallbackMessage || (status ? `Request failed (${status})` : "Request failed."));
  error.retryStatus = status;
  error.retryAfterSec = Number.isFinite(retryAfterSec) && retryAfterSec > 0 ? retryAfterSec : 0;
  return error;
}

function shouldAutoRetryMessageError(error) {
  if (!error || isBanOverlayActive) return false;
  if (stopRequested) return false;
  if (error.name === "AbortError") return false;
  if (error.disableAutoRetry) return false;
  if (error.code === "daedalus_limit_reached") return false;
  return true;
}

function getAutoRetryDelayMs(error, attemptNumber = 1) {
  const retryAfterSec = Number.parseInt(String(error && error.retryAfterSec ? error.retryAfterSec : "").trim(), 10);
  if (Number.isFinite(retryAfterSec) && retryAfterSec > 0) {
    return Math.min(AUTO_MESSAGE_RETRY_MAX_DELAY_MS, Math.max(1200, retryAfterSec * 1000));
  }
  return Math.min(
    AUTO_MESSAGE_RETRY_MAX_DELAY_MS,
    AUTO_MESSAGE_RETRY_BASE_DELAY_MS * Math.max(1, Number(attemptNumber) || 1)
  );
}

function formatAutoRetryStatusText(error, attemptNumber = 1, totalAttempts = AUTO_MESSAGE_RETRY_LIMIT + 1, label = "ROK") {
  const safeLabel = String(label || "ROK").trim() || "ROK";
  const safeTotal = Math.max(1, Number(totalAttempts) || (AUTO_MESSAGE_RETRY_LIMIT + 1));
  const attemptIndex = Math.min(safeTotal, Math.max(1, Number(attemptNumber) || 1) + 1);
  const attemptSuffix = safeTotal > 1 ? ` (${attemptIndex}/${safeTotal})` : "";
  const retryStatus = Number(error && error.retryStatus) || 0;
  if (retryStatus === 429) {
    const retrySeconds = Math.max(1, Math.ceil(getAutoRetryDelayMs(error, attemptNumber) / 1000));
    return `${safeLabel} is busy. Retrying in ${retrySeconds}s${attemptSuffix}...`;
  }
  if (retryStatus > 0) {
    return `${safeLabel} hit ${retryStatus}. Retrying${attemptSuffix}...`;
  }
  return `${safeLabel} hit an error. Retrying${attemptSuffix}...`;
}

async function runWithAutoMessageRetry(task, options = {}) {
  const runTask = typeof task === "function" ? task : null;
  if (!runTask) {
    throw new Error("Auto-retry task must be a function.");
  }
  const maxRetries = Math.max(0, Number(options.maxRetries) || AUTO_MESSAGE_RETRY_LIMIT);
  const onRetry = typeof options.onRetry === "function" ? options.onRetry : null;
  let attempt = 0;
  while (true) {
    try {
      return await runTask(attempt);
    } catch (error) {
      if (attempt >= maxRetries || !shouldAutoRetryMessageError(error)) {
        throw error;
      }
      attempt += 1;
      const delayMs = getAutoRetryDelayMs(error, attempt);
      if (onRetry) {
        await onRetry({
          attempt,
          delayMs,
          error,
          totalAttempts: maxRetries + 1
        });
      }
      await sleepMs(delayMs);
    }
  }
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
  const raw = String(payload || "");
  const trimmed = raw.trim();
  if (!raw) {
    return { token: "", thinking: "", status: "", done: false };
  }
  if (trimmed === "[DONE]") {
    return { token: "", thinking: "", status: "", done: true };
  }
  if (trimmed[0] !== "{") {
    return { token: raw, thinking: "", status: "", done: false, tool_calls: null, assistant_content: "" };
  }

  let parsed = null;
  try {
    parsed = JSON.parse(trimmed);
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
  const daedalus_quota =
    parsed.daedalus_quota && typeof parsed.daedalus_quota === "object"
      ? parsed.daedalus_quota
      : null;
  for (const key of ["token", "response", "reply", "text", "message", "content"]) {
    const value = parsed[key];
    if (typeof value === "string") {
      return { token: value, thinking, status, done, tool_calls, assistant_content, daedalus_quota };
    }
  }

  if (parsed.message && typeof parsed.message === "object" && typeof parsed.message.content === "string") {
    return { token: parsed.message.content, thinking, status, done, tool_calls, assistant_content, daedalus_quota };
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
      return { token: joined, thinking, status, done: done || choiceDone, tool_calls, assistant_content, daedalus_quota };
    }
    if (done || choiceDone) {
      return { token: "", thinking: "", status, done: true, tool_calls: null, assistant_content: "", daedalus_quota };
    }
  }

  return { token: "", thinking, status, done, tool_calls, assistant_content, daedalus_quota };
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
  summaryIcon.textContent = "AI";

  const summaryLabel = document.createElement("span");
  summaryLabel.className = "thinking-summary-label";
  summaryLabel.textContent = "Thinking...";

  const summaryArrow = document.createElement("span");
  summaryArrow.className = "thinking-summary-arrow";
  summaryArrow.setAttribute("aria-hidden", "true");
  summaryArrow.textContent = ">";

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

async function readChatTextResponse(response, options = {}) {
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
    return separated.answer || (separated.thinking ? "" : bodyText) || "";
  }

  const decoder = new TextDecoder("utf-8");
  const isEventStream = contentType.includes("text/event-stream");
  const parseAsJsonLines = !isEventStream && (contentType.includes("json") || contentType.includes("ndjson"));
  const onToken = options && typeof options.onToken === "function" ? options.onToken : null;
  let buffer = "";
  let plainBuffer = "";
  let answer = "";
  let streamEnded = false;

  const appendToken = (token) => {
    if (typeof token === "string" && token) {
      answer += token;
      if (onToken) {
        onToken(answer, token);
      }
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
      if (parsedPayload.daedalus_quota) {
        applyDaedalusQuota(parsedPayload.daedalus_quota);
      }
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
      if (parsedPayload.daedalus_quota) {
        applyDaedalusQuota(parsedPayload.daedalus_quota);
      }
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
    if (parsedPayload.daedalus_quota) {
      applyDaedalusQuota(parsedPayload.daedalus_quota);
    }
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
  return separated.answer || (separated.thinking ? "" : answer) || "";
}

function buildLocalThinkingTitle(thinkingText = "") {
  const excerpt = String(thinkingText || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/[`*_#>\[\]()]/g, " ")
    .replace(/[\r\n]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!excerpt) {
    return "";
  }

  const lower = excerpt.toLowerCase();
  const keywordTitles = [
    [/\b(debug|bug|error|stack trace|root cause|trace)\b/i, "Tracing the root cause"],
    [/\b(refactor|function|component|api|endpoint|schema|query|code)\b/i, "Planning the code change"],
    [/\b(algebra|geometry|calculus|equation|solve|math|proof)\b/i, "Working through the math"],
    [/\b(compare|trade[- ]?off|option|choose|decision)\b/i, "Comparing the main options"],
    [/\b(search|research|source|evidence|fact check)\b/i, "Gathering the key facts"],
    [/\b(image|photo|screenshot|vision)\b/i, "Reviewing the image details"]
  ];
  for (const [pattern, title] of keywordTitles) {
    if (pattern.test(lower)) {
      return title;
    }
  }

  const cleaned = excerpt
    .replace(/^(?:okay|ok|so|well|right|first|lets|let's|i need to|we need to)\s+/i, "")
    .replace(/[.,;:!?]+/g, " ");
  const words = cleaned.split(/\s+/).filter(Boolean);
  if (!words.length) {
    return "Reasoning";
  }

  let selected = words.slice(0, Math.min(words.length, 6));
  if (selected.length < 4 && words.length > selected.length) {
    selected = words.slice(0, Math.min(words.length, 7));
  }

  const title = selected.join(" ");
  return normalizeThinkingTitle(title || "Reasoning");
}

async function generateThinkingTitle(thinkingText = "", modelId = "") {
  void modelId;
  return buildLocalThinkingTitle(thinkingText);
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

function sanitizeShortUserSettingText(rawValue, maxChars = CUSTOMIZATION_NAME_MAX_CHARS) {
  return String(rawValue || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxChars);
}

function sanitizeLongUserSettingText(rawValue, maxChars = CUSTOMIZATION_PROMPT_MAX_CHARS) {
  return String(rawValue || "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim()
    .slice(0, maxChars);
}

function sanitizeWorkspaceTabLabel(rawValue, fallback = "") {
  const sanitized = sanitizeShortUserSettingText(rawValue, WORKSPACE_TAB_LABEL_MAX_CHARS);
  return sanitized || fallback;
}

function sanitizeCustomWorkspaceTabUrl(rawValue) {
  const trimmed = String(rawValue || "").trim().slice(0, CUSTOM_WORKSPACE_TAB_URL_MAX_CHARS);
  if (!trimmed) return "";
  if (/^(https?:\/\/|mailto:|\/|\.\/|\.\.\/)/i.test(trimmed)) {
    return trimmed;
  }
  if (/^[a-z0-9.-]+\.[a-z]{2,}(?:\/.*)?$/i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return "";
}

function normalizeWorkspaceTabLabels(rawLabels = {}) {
  const source = rawLabels && typeof rawLabels === "object" ? rawLabels : {};
  const next = {};
  WORKSPACE_TAB_KEYS.forEach((tabId) => {
    const label = sanitizeWorkspaceTabLabel(source[tabId], DEFAULT_WORKSPACE_TAB_LABELS[tabId]);
    if (label && label !== DEFAULT_WORKSPACE_TAB_LABELS[tabId]) {
      next[tabId] = label;
    }
  });
  return next;
}

function sanitizeCustomWorkspaceTabs(rawTabs = []) {
  if (!Array.isArray(rawTabs)) return [];
  const seenIds = new Set();
  const sanitized = [];
  rawTabs.forEach((entry, index) => {
    if (!entry || typeof entry !== "object") return;
    const label = sanitizeWorkspaceTabLabel(entry.label, "");
    const url = sanitizeCustomWorkspaceTabUrl(entry.url);
    if (!label || !url) return;
    let id = sanitizeShortUserSettingText(entry.id || `custom-${index + 1}`, 40)
      .toLowerCase()
      .replace(/[^a-z0-9_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
    if (!id) {
      id = `custom-${index + 1}`;
    }
    while (seenIds.has(id) || WORKSPACE_TAB_KEYS.includes(id)) {
      id = `${id}-${sanitized.length + 1}`;
    }
    seenIds.add(id);
    sanitized.push({
      id,
      label,
      url,
      kind: "external"
    });
  });
  return sanitized.slice(0, CUSTOM_WORKSPACE_TAB_LIMIT);
}

function sanitizeOrderedSetting(rawOrder, fallbackOrder, validIds = []) {
  const fallback = Array.isArray(fallbackOrder) ? fallbackOrder.slice() : [];
  const allowed = new Set(validIds);
  const next = [];
  if (Array.isArray(rawOrder)) {
    rawOrder.forEach((rawId) => {
      const id = String(rawId || "").trim();
      if (!id || !allowed.has(id) || next.includes(id)) return;
      next.push(id);
    });
  }
  fallback.forEach((id) => {
    if (allowed.has(id) && !next.includes(id)) {
      next.push(id);
    }
  });
  validIds.forEach((id) => {
    if (!next.includes(id)) {
      next.push(id);
    }
  });
  return next;
}

function sanitizeWorkspaceTabOrder(rawOrder, customTabs = []) {
  const validIds = [...WORKSPACE_TAB_KEYS, ...customTabs.map((item) => item.id)];
  return sanitizeOrderedSetting(rawOrder, WORKSPACE_TAB_KEYS, validIds);
}

function sanitizeSidebarSectionOrder(rawOrder) {
  return sanitizeOrderedSetting(rawOrder, DEFAULT_SIDEBAR_SECTION_ORDER, DEFAULT_SIDEBAR_SECTION_ORDER);
}

function sanitizeTopbarActionOrder(rawOrder) {
  return sanitizeOrderedSetting(rawOrder, DEFAULT_TOPBAR_ACTION_ORDER, DEFAULT_TOPBAR_ACTION_ORDER);
}

function sanitizeMainSectionOrder(rawOrder) {
  return sanitizeOrderedSetting(rawOrder, DEFAULT_MAIN_SECTION_ORDER, DEFAULT_MAIN_SECTION_ORDER);
}

function buildSanitizedUserSettings(sourceSettings = {}) {
  const source = sourceSettings && typeof sourceSettings === "object" ? sourceSettings : {};
  const merged = { ...DEFAULT_USER_SETTINGS, ...source };
  const customWorkspaceTabs = sanitizeCustomWorkspaceTabs(merged.customWorkspaceTabs);
  return {
    preferredName: sanitizeShortUserSettingText(merged.preferredName),
    primaryUseCase: sanitizePrimaryUseCase(merged.primaryUseCase),
    customIdentityName: sanitizeShortUserSettingText(merged.customIdentityName),
    customSystemPrompt: sanitizeLongUserSettingText(merged.customSystemPrompt),
    accentColor: normalizeHexColor(merged.accentColor, DEFAULT_USER_SETTINGS.accentColor),
    compactMode: Boolean(merged.compactMode),
    reduceMotion: Boolean(merged.reduceMotion),
    defaultModel: resolveDefaultModelId(MODEL_OPTIONS, merged.defaultModel || DEFAULT_USER_SETTINGS.defaultModel),
    rememberModel: merged.rememberModel !== false,
    enterToSend: merged.enterToSend !== false,
    autoScroll: merged.autoScroll !== false,
    sidebarStartsCollapsed: true,
    sidebarWidth: normalizeClientLimit(merged.sidebarWidth, DEFAULT_USER_SETTINGS.sidebarWidth, 180, 340),
    chatWidth: normalizeClientLimit(merged.chatWidth, DEFAULT_USER_SETTINGS.chatWidth, 620, 1200),
    bubbleRadius: normalizeClientLimit(merged.bubbleRadius, DEFAULT_USER_SETTINGS.bubbleRadius, 8, 30),
    bubbleTextSize: normalizeClientLimit(merged.bubbleTextSize, DEFAULT_USER_SETTINGS.bubbleTextSize, 12, 18),
    showStarterChips: merged.showStarterChips !== false,
    showTimestamps: merged.showTimestamps !== false,
    maxSessions: normalizeClientLimit(merged.maxSessions, DEFAULT_USER_SETTINGS.maxSessions, 5, 100),
    historyLimit: normalizeClientLimit(merged.historyLimit, DEFAULT_USER_SETTINGS.historyLimit, 1, 1000),
    cooldownMs: normalizeClientLimit(merged.cooldownMs, DEFAULT_USER_SETTINGS.cooldownMs, 0, 60000),
    typingSpeed: normalizeClientLimit(merged.typingSpeed, DEFAULT_USER_SETTINGS.typingSpeed, 0, 500),
    memoryEnabled: merged.memoryEnabled !== false,
    projectMemoryEnabled: merged.projectMemoryEnabled !== false,
    autoLearn: merged.autoLearn !== false,
    incognitoMode: Boolean(merged.incognitoMode),
    askBeforeSensitiveSend: merged.askBeforeSensitiveSend !== false,
    showEvidenceButtons: merged.showEvidenceButtons !== false,
    workspaceTabLabels: normalizeWorkspaceTabLabels(merged.workspaceTabLabels),
    customWorkspaceTabs,
    workspaceTabOrder: sanitizeWorkspaceTabOrder(merged.workspaceTabOrder, customWorkspaceTabs),
    sidebarSectionOrder: sanitizeSidebarSectionOrder(merged.sidebarSectionOrder),
    topbarActionOrder: sanitizeTopbarActionOrder(merged.topbarActionOrder),
    mainSectionOrder: sanitizeMainSectionOrder(merged.mainSectionOrder),
    showTopWorkspaceTabs: merged.showTopWorkspaceTabs !== false,
    showSidebarWorkspaceTabs: merged.showSidebarWorkspaceTabs !== false
  };
}

function loadUserSettingsFromStorage() {
  try {
    const raw = localStorage.getItem(USER_SETTINGS_KEY);
    if (!raw) return buildSanitizedUserSettings(DEFAULT_USER_SETTINGS);
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return buildSanitizedUserSettings(DEFAULT_USER_SETTINGS);
    return buildSanitizedUserSettings(parsed);
  } catch {
    return buildSanitizedUserSettings(DEFAULT_USER_SETTINGS);
  }
}

function buildExportableUserSettings() {
  return buildSanitizedUserSettings({ ...DEFAULT_USER_SETTINGS, ...loadUserSettingsFromStorage(), ...userSettings });
}

function sanitizeImportedUserSettings(rawSettings = {}) {
  return buildSanitizedUserSettings(rawSettings);
}

function downloadJsonFile(filename, payload) {
  if (typeof Blob === "undefined" || typeof URL === "undefined" || typeof URL.createObjectURL !== "function") {
    throw new Error("Downloads are not supported in this browser.");
  }
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const blobUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    URL.revokeObjectURL(blobUrl);
    if (link.parentNode) {
      link.parentNode.removeChild(link);
    }
  }, 0);
}

function exportRokControlSetup() {
  const payload = {
    kind: "rok-control-setup",
    version: CUSTOMIZATION_EXPORT_VERSION,
    exportedAt: new Date().toISOString(),
    settings: buildExportableUserSettings()
  };
  downloadJsonFile(`rok-control-setup-${new Date().toISOString().slice(0, 10)}.json`, payload);
  return payload;
}

function trimSessionsToSettingLimit() {
  if (!Array.isArray(sessions) || !sessions.length) return;
  sortSessionsByRecent();
  const maxSessions = getMaxLocalSessionsValue();
  if (sessions.length <= maxSessions) return;

  const current = getSessionById(currentSessionId);
  if (current) {
    const others = sessions.filter((session) => session.id !== current.id);
    sessions = [current, ...others.slice(0, Math.max(0, maxSessions - 1))];
    sortSessionsByRecent();
  } else {
    sessions = sessions.slice(0, maxSessions);
  }

  if (!sessions.length) {
    sessions = [createSession([])];
  }
  if (!getSessionById(currentSessionId)) {
    currentSessionId = sessions[0].id;
  }

  saveSessionsToStorage();
  saveCurrentSessionIdToStorage();
  updateCurrentSessionButton();
  renderSavedSessions();
}

async function importRokControlSetupFromFile(file) {
  if (!file) return null;
  const rawText = await file.text();
  const parsed = JSON.parse(rawText);
  const source = parsed && typeof parsed === "object" && parsed.settings && typeof parsed.settings === "object"
    ? parsed.settings
    : parsed;
  const nextSettings = sanitizeImportedUserSettings(source);
  persistUserSettingsPatch(nextSettings, { syncModelDefaults: true });
  applySidebarCollapsedState(true, { persist: true });
  trimSessionsToSettingLimit();
  refreshMemoryToggleButtons();
  renderLocalKnowledgeList();
  return nextSettings;
}

function clearRememberedBrowserData() {
  saveLocalMemory([]);
  saveLocalKnowledge([]);
  renderLocalKnowledgeList();
}

function clearCurrentProjectMemoryData() {
  saveCurrentProjectMemoryEntries([]);
  renderLocalKnowledgeList();
}

function resetSavedChatsAndStartFresh() {
  const freshSession = createSession([]);
  sessions = [freshSession];
  currentSessionId = freshSession.id;
  hideHomeScreen({ renderWorkspace: false, showReadyMessage: false });
  wasWorkspaceTabActive = false;
  closeMobileSidebarIfNeeded();
  resetChatRuntimeState();
  renderConversation([]);
  saveSessionsToStorage();
  saveCurrentSessionIdToStorage();
  updateCurrentSessionButton();
  renderSavedSessions();
  renderWorkspaceUI({ focus: true });
}

function savePreferredNameToStorage(rawName) {
  const name = sanitizeShortUserSettingText(rawName);
  if (isIncognitoModeEnabled()) {
    userSettings = { ...userSettings, preferredName: name };
    return;
  }
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
let onboardingTourRunToken = 0;
let onboardingRenderSequence = 0;
let pendingOnboardingTourStart = false;
let onboardingSelectedUseCase = "general";
const ONBOARDING_SLIDE_COUNT = ONBOARDING_TOUR_STEPS.length;
const ONBOARDING_NAME_SLIDE = ONBOARDING_SLIDE_COUNT - 1;

function isOnboardingModalVisible() {
  return Boolean(onboardingModal && !onboardingModal.hidden);
}

function setOnboardingSidebarPreview(expanded) {
  if (isMobileLayout) {
    applyMobileSidebarState(Boolean(expanded));
    return;
  }
  applySidebarCollapsedState(!expanded, { persist: false });
}

function stopOnboardingTyping() {
  onboardingTourRunToken += 1;
  if (onboardingGuideText) {
    onboardingGuideText.textContent = "";
  }
}

function waitForOnboardingTour(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function waitForNextFrame() {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

function buildOnboardingChoiceCards() {
  return PRIMARY_USE_CASE_OPTIONS.map((item) => {
    const selected = item.id === onboardingSelectedUseCase;
    return `
      <button
        class="onboarding-choice-card${selected ? " is-selected" : ""}"
        type="button"
        data-onboarding-use-case="${escapeHtml(item.id)}"
        aria-pressed="${selected ? "true" : "false"}"
      >
        <span class="onboarding-choice-title">${escapeHtml(item.label)}</span>
        <span class="onboarding-choice-desc">${escapeHtml(item.description)}</span>
      </button>
    `;
  }).join("");
}

function renderOnboardingChoiceGrid() {
  if (!(onboardingChoiceGrid instanceof HTMLElement)) return;
  onboardingChoiceGrid.innerHTML = buildOnboardingChoiceCards();
  onboardingChoiceGrid.querySelectorAll("[data-onboarding-use-case]").forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) return;
    button.addEventListener("click", () => {
      onboardingSelectedUseCase = sanitizePrimaryUseCase(button.getAttribute("data-onboarding-use-case") || "general");
      renderOnboardingChoiceGrid();
    });
  });
}

function ensureOnboardingLayoutShell() {
  if (!(onboardingGuide instanceof HTMLElement)) return;
  const shell = onboardingGuide.querySelector(".onboarding-shell");
  const card = onboardingGuide.querySelector(".onboarding-card");
  if (!(shell instanceof HTMLElement) || !(card instanceof HTMLElement)) return;
  if (shell.querySelector(".onboarding-aside")) return;
  const aside = document.createElement("aside");
  aside.className = "onboarding-aside";
  aside.setAttribute("aria-hidden", "true");
  aside.innerHTML = `
    <div class="onboarding-aside-top">
      <span class="onboarding-badge">First run</span>
      <span class="onboarding-step-inline">ROK setup</span>
    </div>
    <div class="onboarding-orb-stage">
      <img class="onboarding-guide-orb" src="rokgenerating.gif" alt="" />
    </div>
    <p class="onboarding-aside-note">
      ROK opens straight into chat. This setup just tunes the first-run feel on this device.
    </p>
  `;
  shell.insertBefore(aside, card);
}

async function typeOnboardingText(text) {
  if (!onboardingGuideText) return;
  const nextText = String(text || "");
  const runToken = ++onboardingTourRunToken;
  onboardingGuideText.textContent = "";

  if (prefersReducedMotion()) {
    onboardingGuideText.textContent = nextText;
    return;
  }

  for (let index = 1; index <= nextText.length; index += 1) {
    if (runToken !== onboardingTourRunToken || !isOnboardingModalVisible()) return;
    onboardingGuideText.textContent = nextText.slice(0, index);
    await waitForOnboardingTour(ONBOARDING_TOUR_TEXT_SPEED_MS);
  }
}

function getOnboardingStepConfig() {
  return ONBOARDING_TOUR_STEPS[onboardingStepIndex] || ONBOARDING_TOUR_STEPS[0];
}

function getOnboardingTargetRect(step) {
  const target = typeof step.target === "function" ? step.target() : step.target;
  if (!(target instanceof Element)) return null;
  if (target instanceof HTMLElement && target.hidden) return null;
  const rect = target.getBoundingClientRect();
  if (!rect.width && !rect.height) return null;
  return rect;
}

function clampOnboardingPosition(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function positionOnboardingGuide(step) {
  if (!onboardingGuide) return;

  const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 0;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
  const guideRect = onboardingGuide.getBoundingClientRect();
  const margin = 18;
  const gap = 20;
  const placement = step.placement || "top";
  const targetRect = getOnboardingTargetRect(step);

  onboardingGuide.classList.toggle("is-centered", placement === "center" || !targetRect);

  if (onboardingSpotlight) {
    if (!targetRect || placement === "center") {
      onboardingSpotlight.hidden = true;
    } else {
      const spotlightPadding = step.spotlightPadding ?? 12;
      onboardingSpotlight.hidden = false;
      onboardingSpotlight.style.width = `${Math.round(targetRect.width + spotlightPadding * 2)}px`;
      onboardingSpotlight.style.height = `${Math.round(targetRect.height + spotlightPadding * 2)}px`;
      onboardingSpotlight.style.transform = `translate3d(${Math.round(targetRect.left - spotlightPadding)}px, ${Math.round(targetRect.top - spotlightPadding)}px, 0)`;
    }
  }

  let left = (viewportWidth - guideRect.width) / 2;
  let top = viewportHeight * 0.58 - guideRect.height / 2;

  if (targetRect && placement !== "center") {
    if (placement === "right") {
      left = targetRect.right + gap;
      top = targetRect.top + targetRect.height / 2 - guideRect.height / 2;
      if (left + guideRect.width > viewportWidth - margin) {
        left = targetRect.left - guideRect.width - gap;
      }
    } else if (placement === "left") {
      left = targetRect.left - guideRect.width - gap;
      top = targetRect.top + targetRect.height / 2 - guideRect.height / 2;
      if (left < margin) {
        left = targetRect.right + gap;
      }
    } else if (placement === "bottom") {
      left = targetRect.left + targetRect.width / 2 - guideRect.width / 2;
      top = targetRect.bottom + gap;
      if (top + guideRect.height > viewportHeight - margin) {
        top = targetRect.top - guideRect.height - gap;
      }
    } else {
      left = targetRect.left + targetRect.width / 2 - guideRect.width / 2;
      top = targetRect.top - guideRect.height - gap;
      if (top < margin) {
        top = targetRect.bottom + gap;
      }
    }
  }

  left = clampOnboardingPosition(left, margin, Math.max(margin, viewportWidth - guideRect.width - margin));
  top = clampOnboardingPosition(top, margin, Math.max(margin, viewportHeight - guideRect.height - margin));
  onboardingGuide.style.transform = `translate3d(${Math.round(left)}px, ${Math.round(top)}px, 0)`;
}

async function renderOnboardingStep() {
  const renderSequence = ++onboardingRenderSequence;
  const step = getOnboardingStepConfig();

  document.querySelectorAll("[data-onb-dot]").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === onboardingStepIndex);
  });

  document.querySelectorAll(".onboarding-slide").forEach((slide) => {
    slide.hidden = true;
  });

  if (onboardingGuideStep) {
    onboardingGuideStep.textContent = `Step ${onboardingStepIndex + 1} of ${ONBOARDING_SLIDE_COUNT}`;
  }
  if (onboardingGuideHeading) {
    onboardingGuideHeading.textContent = step.title;
  }
  if (onboardingBackBtn) {
    onboardingBackBtn.hidden = onboardingStepIndex === 0;
  }
  if (onboardingNextBtn) {
    onboardingNextBtn.textContent = step.nextLabel || (onboardingStepIndex >= ONBOARDING_NAME_SLIDE ? "Start chatting" : "Next");
  }
  if (onboardingSkipBtn) {
    onboardingSkipBtn.textContent = onboardingStepIndex >= ONBOARDING_NAME_SLIDE ? "Skip name" : "Skip";
  }
  if (onboardingNameField) {
    onboardingNameField.hidden = !step.showNameField;
  }
  if (onboardingChoiceGrid) {
    onboardingChoiceGrid.hidden = !step.showChoices;
    if (step.showChoices) {
      renderOnboardingChoiceGrid();
    }
  }

  await waitForNextFrame();
  await waitForNextFrame();
  if (renderSequence !== onboardingRenderSequence || !isOnboardingModalVisible()) return;
  await typeOnboardingText(step.text);
  if (renderSequence !== onboardingRenderSequence || !isOnboardingModalVisible()) return;

  if (step.showNameField && onboardingNameInput) {
    setTimeout(() => onboardingNameInput.focus(), 40);
  }
}

function openOnboardingModal() {
  if (!onboardingModal) return;
  ensureOnboardingLayoutShell();
  if (onboardingCloseBtn) {
    onboardingCloseBtn.textContent = "\u00d7";
  }
  if (onboardingNameInput) {
    onboardingNameInput.value = String(loadUserSettingsFromStorage().preferredName || "");
  }
  onboardingSelectedUseCase = sanitizePrimaryUseCase(loadUserSettingsFromStorage().primaryUseCase);
  if (mainPanel) {
    mainPanel.scrollTop = 0;
  }
  onboardingStepIndex = 0;
  onboardingRenderSequence += 1;
  stopOnboardingTyping();
  setOnboardingSidebarPreview(false);
  onboardingModal.hidden = false;
  onboardingModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  renderOnboardingStep();
}

function closeOnboardingModal() {
  if (!onboardingModal) return;
  onboardingRenderSequence += 1;
  stopOnboardingTyping();
  onboardingModal.hidden = true;
  onboardingModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (onboardingSpotlight) {
    onboardingSpotlight.hidden = true;
  }
}

function enterAppFromHome() {
  hideHomeScreen({ renderWorkspace: true, showReadyMessage: false });
  if (isMobileLayout) {
    applyMobileSidebarState(false);
  } else {
    applySidebarCollapsedState(true, { persist: false });
  }
  checkServerOnBoot();
  renderWorkspaceUI({ focus: true });
  const preferredTab = pendingHomeEnterTab;
  pendingHomeEnterTab = "";
  if (WORKSPACE_TAB_KEYS.includes(preferredTab)) {
    setActiveWorkspaceTab(preferredTab, { focus: true });
  }
  if (pendingOnboardingTourStart) {
    pendingOnboardingTourStart = false;
    setTimeout(() => {
      if (!isOnboardingCompleted() && !isHomeScreenVisible()) {
        openOnboardingModal();
      }
    }, 120);
  }
  if (isOnboardingCompleted()) {
    setTimeout(() => {
      maybeShowForumSurveyModal();
    }, 180);
  }
}

function beginHomeEntry(preferredTab = "") {
  pendingHomeEnterTab = WORKSPACE_TAB_KEYS.includes(preferredTab) ? preferredTab : "";
  if (!isOnboardingCompleted()) {
    pendingOnboardingTourStart = true;
    enterAppWithTosCheck();
    return;
  }
  pendingOnboardingTourStart = false;
  enterAppWithTosCheck();
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
  savePrimaryUseCaseToStorage(onboardingSelectedUseCase);
  applySidebarCollapsedState(true, { persist: false });
  saveOnboardingCompletedRecord();
  closeOnboardingModal();
  if (input) {
    setTimeout(() => input.focus(), 40);
  }
  setTimeout(() => {
    maybeShowForumSurveyModal();
  }, 180);
}

function loadLastModelFromStorage() {
  try {
    const raw = localStorage.getItem(LOCAL_LAST_MODEL_KEY);
    return resolveModelAlias(raw);
  } catch {
    return "";
  }
}

function saveLastModelToStorage(modelId) {
  try {
    const normalized = resolveModelAlias(modelId);
    if (!normalized) {
      localStorage.removeItem(LOCAL_LAST_MODEL_KEY);
      return;
    }
    localStorage.setItem(LOCAL_LAST_MODEL_KEY, normalized);
  } catch {
    // Ignore storage write failures.
  }
}

function savePrimaryUseCaseToStorage(rawUseCase) {
  const nextUseCase = sanitizePrimaryUseCase(rawUseCase);
  if (isIncognitoModeEnabled()) {
    userSettings = { ...userSettings, primaryUseCase: nextUseCase };
    return;
  }
  try {
    const nextSettings = { ...loadUserSettingsFromStorage(), primaryUseCase: nextUseCase };
    localStorage.setItem(USER_SETTINGS_KEY, JSON.stringify(nextSettings));
    userSettings = nextSettings;
    applyUserSettingsToRuntime({ syncModelDefaults: false });
  } catch {
    // Ignore storage write failures.
  }
}

function getDaedalusUserApiKey() {
  try {
    return String(localStorage.getItem(LOCAL_DAEDALUS_OLLAMA_API_KEY) || "").trim();
  } catch {
    return "";
  }
}

function setDaedalusUserApiKey(rawValue) {
  const normalized = String(rawValue || "").trim();
  try {
    if (normalized) {
      localStorage.setItem(LOCAL_DAEDALUS_OLLAMA_API_KEY, normalized);
    } else {
      localStorage.removeItem(LOCAL_DAEDALUS_OLLAMA_API_KEY);
    }
  } catch {
    // Ignore storage write failures.
  }
}

function hasDaedalusUserApiKey() {
  return !!getSavedUserOllamaApiKeyForModel(DAEDALUS_MODEL_ID);
}

function getCustomOllamaApiKey() {
  try {
    return String(localStorage.getItem(LOCAL_CUSTOM_OLLAMA_API_KEY) || "").trim();
  } catch {
    return "";
  }
}

function setCustomOllamaApiKey(rawValue) {
  const normalized = String(rawValue || "").trim();
  try {
    if (normalized) {
      localStorage.setItem(LOCAL_CUSTOM_OLLAMA_API_KEY, normalized);
    } else {
      localStorage.removeItem(LOCAL_CUSTOM_OLLAMA_API_KEY);
    }
  } catch {
    // Ignore storage write failures.
  }
}

function getCustomOllamaModelId() {
  try {
    return resolveModelAlias(localStorage.getItem(LOCAL_CUSTOM_OLLAMA_MODEL_ID) || "");
  } catch {
    return "";
  }
}

function setCustomOllamaModelId(rawValue) {
  const normalized = resolveModelAlias(rawValue);
  try {
    if (normalized) {
      localStorage.setItem(LOCAL_CUSTOM_OLLAMA_MODEL_ID, normalized);
    } else {
      localStorage.removeItem(LOCAL_CUSTOM_OLLAMA_MODEL_ID);
    }
  } catch {
    // Ignore storage write failures.
  }
}

function getCustomOllamaSetup() {
  const apiKey = getCustomOllamaApiKey();
  const modelId = getCustomOllamaModelId();
  if (!apiKey || !modelId) {
    return null;
  }
  return { apiKey, modelId };
}

function getConfiguredCustomOllamaModelId() {
  const setup = getCustomOllamaSetup();
  return setup ? setup.modelId : "";
}

function isCustomOllamaModelId(modelId = "") {
  const customModelId = getConfiguredCustomOllamaModelId();
  return !!customModelId && resolveModelAlias(modelId) === customModelId;
}

function getSavedUserOllamaApiKeyForModel(modelId = "") {
  const normalized = resolveModelAlias(modelId);
  if (!normalized) return "";
  if (normalized === DAEDALUS_MODEL_ID) {
    return getDaedalusUserApiKey() || getCustomOllamaApiKey();
  }
  if (normalized === HYPERION_MODEL_ID) {
    return getCustomOllamaApiKey();
  }
  const setup = getCustomOllamaSetup();
  if (setup && normalized === setup.modelId) {
    return setup.apiKey;
  }
  return "";
}

function getCustomOllamaModelValidationError(rawValue) {
  const normalized = sanitizeModelId(rawValue);
  if (!normalized) {
    return "Enter a valid Ollama model ID.";
  }
  const resolved = resolveModelAlias(normalized);
  if (MODEL_IDS.has(resolved) || KNOWN_MODEL_LABELS[resolved] || KNOWN_MODEL_LABELS[normalized]) {
    return "That model is already available in ROK. Pick it from the ROK models section or enter a different Ollama Cloud model ID.";
  }
  return "";
}

// --- Thinking quota helpers ---
// Quota is stored as { count: number, resetAt: timestamp }.
// resetAt is set to now + 24h on the first thinking-enabled message of a window.

// --- Server-side thinking quota (state comes from server, cannot be faked in localStorage) ---
// Updated by refreshClientConfigFromServer() on boot and by applyThinkingQuotaFromHeaders()
// after each chat response. The server enforces the real limit; this is UI-only.
let serverThinkingQuota = { count: 0, limit: 10, exhausted: false, resetSec: 0, updatedAt: 0 };
let titanLockUntil = 0;

// --- Daedalus quota (rolling tokens/hour; BYOK bypasses the shared limit) ---
let serverDaedalusQuota = {
  count: 0,
  limit: 30000,
  exhausted: false,
  resetSec: 0,
  remaining: 30000,
  nearing: false,
  slowing: false,
  slowdownMs: 0,
  byokActive: false,
  windowSec: 3600,
  updatedAt: 0
};
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
  if (hasDaedalusUserApiKey() || serverDaedalusQuota.byokActive) {
    if (daedalusLockUntil > 0) {
      setDaedalusLockUntil(0);
    }
    return false;
  }
  const remainingMs = getDaedalusLockRemainingMs();
  if (remainingMs <= 0 && daedalusLockUntil > 0) {
    setDaedalusLockUntil(0);
    return false;
  }
  return remainingMs > 0;
}

function forceHermesIfDaedalusLocked(notify = false) {
  if (!isDaedalusQuotaLocked()) return;
  if (notify && !isHomeScreenVisible()) {
    showDaedalusLimitModal();
  }
}

function getDaedalusUsageRatio() {
  if (!serverDaedalusQuota.limit || serverDaedalusQuota.limit <= 0) return 0;
  return Math.max(0, serverDaedalusQuota.count / serverDaedalusQuota.limit);
}

function applyDaedalusQuota(quota) {
  if (!MODEL_IDS.has(DAEDALUS_MODEL_ID) || !COMPOSER_TEXT_MODEL_ORDER.includes(DAEDALUS_MODEL_ID)) {
    setDaedalusLockUntil(0);
    serverDaedalusQuota = {
      count: 0,
      limit: 0,
      exhausted: false,
      resetSec: 0,
      remaining: 0,
      nearing: false,
      slowing: false,
      slowdownMs: 0,
      byokActive: false,
      windowSec: 3600,
      updatedAt: Date.now()
    };
    return;
  }
  if (!quota || typeof quota !== "object") return;
  const previousRatio = getDaedalusUsageRatio();
  const wasExhausted = Boolean(serverDaedalusQuota.exhausted);
  const hasByok = hasDaedalusUserApiKey() || Boolean(quota.byok_active);
  const incomingLimit = typeof quota.limit === "number" ? quota.limit : serverDaedalusQuota.limit;
  const limitVal = hasByok ? 0 : Math.max(0, Number(incomingLimit) || 0);
  const countVal = hasByok
    ? 0
    : Math.max(0, typeof quota.count === "number" ? quota.count : serverDaedalusQuota.count);
  const exhausted = hasByok ? false : (typeof quota.exhausted === "boolean" ? quota.exhausted : countVal >= limitVal && limitVal > 0);
  const resetSec = hasByok ? 0 : Math.max(0, typeof quota.reset_sec === "number" ? quota.reset_sec : serverDaedalusQuota.resetSec);
  const remainingVal = hasByok
    ? 0
    : Math.max(0, typeof quota.remaining === "number" ? quota.remaining : Math.max(0, limitVal - countVal));
  const nearing = hasByok
    ? false
    : (typeof quota.nearing === "boolean" ? quota.nearing : (limitVal > 0 && countVal / limitVal >= 0.8 && !exhausted));
  const slowing = hasByok
    ? false
    : (typeof quota.slowing === "boolean" ? quota.slowing : (limitVal > 0 && countVal / limitVal >= 0.9 && !exhausted));
  serverDaedalusQuota = {
    count: countVal,
    limit: limitVal,
    exhausted,
    resetSec,
    remaining: remainingVal,
    nearing,
    slowing,
    slowdownMs: hasByok ? 0 : Math.max(0, typeof quota.slowdown_ms === "number" ? quota.slowdown_ms : (slowing ? 35 : 0)),
    byokActive: hasByok,
    windowSec: Math.max(60, typeof quota.window_sec === "number" ? quota.window_sec : (serverDaedalusQuota.windowSec || 3600)),
    updatedAt: Date.now(),
  };
  const nextRatio = getDaedalusUsageRatio();
  const justNearing = !hasByok && previousRatio < 0.8 && nextRatio >= 0.8 && !serverDaedalusQuota.exhausted;
  const justExhausted = !wasExhausted && serverDaedalusQuota.exhausted && limitVal > 0;
  if (serverDaedalusQuota.exhausted && serverDaedalusQuota.resetSec > 0) {
    setDaedalusLockUntil(Date.now() + serverDaedalusQuota.resetSec * 1000);
  } else {
    setDaedalusLockUntil(0);
  }
  if (hasByok || !serverDaedalusQuota.exhausted) {
    hideDaedalusLimitModal();
  } else if (justExhausted && !isHomeScreenVisible()) {
    showDaedalusLimitModal();
  }
  if (justNearing && !isHomeScreenVisible()) {
    showThinkingQuotaToast("Shared Daedalus capacity is getting tight.");
  }
  refreshSendState();
  forceHermesIfDaedalusLocked(justExhausted);
  refreshComposerModelPicker();
}

function applyDaedalusQuotaFromHeaders(response) {
  if (!response || !response.headers || response.headers.get("X-Daedalus-Limit") == null) return;
  const count = parseInt(response.headers.get("X-Daedalus-Count") || "", 10);
  const limit = parseInt(response.headers.get("X-Daedalus-Limit") || "", 10);
  const exhausted = (response.headers.get("X-Daedalus-Exhausted") || "").toLowerCase() === "true";
  const resetSec = parseInt(response.headers.get("X-Daedalus-Reset-Sec") || "0", 10);
  const remaining = parseInt(response.headers.get("X-Daedalus-Remaining") || "", 10);
  const windowSec = parseInt(response.headers.get("X-Daedalus-Window-Sec") || "", 10);
  const slowdownMs = parseInt(response.headers.get("X-Daedalus-Slowdown-Ms") || "", 10);
  const byokActive = (response.headers.get("X-Daedalus-BYOK-Active") || "").toLowerCase() === "true";
  const nearing = (response.headers.get("X-Daedalus-Nearing") || "").toLowerCase() === "true";
  const slowing = (response.headers.get("X-Daedalus-Slowing") || "").toLowerCase() === "true";
  if (isNaN(count) || isNaN(limit)) return;
  applyDaedalusQuota({
    count,
    limit,
    exhausted,
    reset_sec: resetSec,
    remaining: isNaN(remaining) ? undefined : remaining,
    window_sec: isNaN(windowSec) ? undefined : windowSec,
    slowdown_ms: isNaN(slowdownMs) ? undefined : slowdownMs,
    byok_active: byokActive,
    nearing,
    slowing
  });
}

function forceHermesIfTitanLocked(notify = false) {
  if (!isTitanQuotaLocked()) return;
  if (getCurrentSessionModel() !== TITAN_MODEL_ID) return;
  setCurrentSessionModel(HERMES_MODEL_ID);
  if (notify && !isHomeScreenVisible()) {
    const remainingMs = getTitanLockRemainingMs();
    const resetMsg = remainingMs > 0 ? ` Unlocks in ${formatThinkingResetTime(remainingMs)}.` : "";
    addMessage("system", `${HERMES_LABEL} is temporarily at capacity.${resetMsg}`);
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
  // Only act on the transition (not-exhausted â†’ exhausted), never on repeat calls
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
      ? `${HERMES_LABEL} unlocks in ${formatThinkingResetTime(remainingMs)}.`
      : `${HERMES_LABEL} is temporarily at capacity.`;
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
  // For non-limit-hit cases (e.g. click-blocked) â€” small inline toast
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

let activeDaedalusLimitModal = null;
let activeDaedalusKeyModal = null;
let activeCustomOllamaSetupModal = null;
let activeCustomizeRokModal = null;
let activeLayoutStudioModal = null;
let isLiveLayoutEditMode = false;
let activeLiveLayoutDrag = null;

function closeLayoutStudioModal(result) {
  if (!activeLayoutStudioModal) return;
  const { overlay, resolve, keydownHandler } = activeLayoutStudioModal;
  activeLayoutStudioModal = null;
  if (keydownHandler) {
    document.removeEventListener("keydown", keydownHandler);
  }
  if (overlay && overlay.parentNode) {
    overlay.parentNode.removeChild(overlay);
  }
  resolve(result || null);
}

function createLayoutStudioDndBoard(board, getOrder, renderItem, onReorder) {
  if (!(board instanceof HTMLElement)) return;
  let draggingId = "";

  const render = () => {
    const order = Array.isArray(getOrder()) ? getOrder() : [];
    board.innerHTML = "";
    order.forEach((itemId) => {
      const item = renderItem(itemId);
      if (!(item instanceof HTMLElement)) return;
      item.setAttribute("draggable", "true");
      item.setAttribute("data-layout-item-id", itemId);
      board.appendChild(item);
    });
  };

  const getDragAfterElement = (container, y) => {
    const elements = [...container.querySelectorAll("[data-layout-item-id]:not(.is-dragging)")];
    return elements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      }
      return closest;
    }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
  };

  board.addEventListener("dragstart", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const item = target.closest("[data-layout-item-id]");
    if (!(item instanceof HTMLElement)) return;
    draggingId = item.getAttribute("data-layout-item-id") || "";
    item.classList.add("is-dragging");
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", draggingId);
    }
  });

  board.addEventListener("dragend", () => {
    draggingId = "";
    board.querySelectorAll(".is-dragging").forEach((node) => node.classList.remove("is-dragging"));
  });

  board.addEventListener("dragover", (event) => {
    if (!draggingId) return;
    event.preventDefault();
    const escapedId = typeof CSS !== "undefined" && typeof CSS.escape === "function"
      ? CSS.escape(draggingId)
      : draggingId.replace(/["\\]/g, "\\$&");
    const draggingEl = board.querySelector(`[data-layout-item-id="${escapedId}"]`);
    if (!(draggingEl instanceof HTMLElement)) return;
    const afterElement = getDragAfterElement(board, event.clientY);
    if (!afterElement) {
      board.appendChild(draggingEl);
      return;
    }
    if (afterElement !== draggingEl) {
      board.insertBefore(draggingEl, afterElement);
    }
  });

  board.addEventListener("drop", (event) => {
    if (!draggingId) return;
    event.preventDefault();
    const nextOrder = Array.from(board.querySelectorAll("[data-layout-item-id]"))
      .map((node) => node.getAttribute("data-layout-item-id") || "")
      .filter(Boolean);
    onReorder(nextOrder);
    render();
  });

  render();
  return { render };
}

function openLayoutStudioModal() {
  if (activeLayoutStudioModal) {
    return activeLayoutStudioModal.promise;
  }

  let resolveModal = null;
  const promise = new Promise((resolve) => {
    resolveModal = resolve;
  });

  const sourceSettings = buildExportableUserSettings();
  let draftTabLabels = {
    ...DEFAULT_WORKSPACE_TAB_LABELS,
    ...(sourceSettings.workspaceTabLabels || {})
  };
  let draftCustomTabs = sanitizeCustomWorkspaceTabs(sourceSettings.customWorkspaceTabs);
  let draftTabOrder = sanitizeWorkspaceTabOrder(sourceSettings.workspaceTabOrder, draftCustomTabs);
  let draftSidebarOrder = sanitizeSidebarSectionOrder(sourceSettings.sidebarSectionOrder);
  let draftTopbarOrder = sanitizeTopbarActionOrder(sourceSettings.topbarActionOrder);
  let draftMainOrder = sanitizeMainSectionOrder(sourceSettings.mainSectionOrder);
  let draftShowTopTabs = sourceSettings.showTopWorkspaceTabs !== false;
  let draftShowSidebarTabs = sourceSettings.showSidebarWorkspaceTabs !== false;

  const overlay = document.createElement("div");
  overlay.className = "correction-modal-overlay";

  const modal = document.createElement("div");
  modal.className = "correction-modal layout-studio-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "layoutStudioTitle");
  modal.innerHTML = `
    <div class="customize-rok-head">
      <div>
        <div class="customize-rok-kicker">Advanced control</div>
        <h2 id="layoutStudioTitle" class="correction-modal-title">Layout Studio</h2>
        <p class="correction-modal-hint">Rename tabs, add your own shortcuts, and drag the shell around if you want a custom layout.</p>
      </div>
    </div>
    <div class="customize-rok-body layout-studio-body">
      <section class="customize-rok-section">
        <div class="customize-rok-section-head">
          <span class="customize-rok-section-kicker">Workspace tabs</span>
          <h3 class="customize-rok-section-title">Rename them and add your own</h3>
        </div>
        <div class="customize-rok-toggle-grid">
          <label class="customize-rok-toggle">
            <input data-layout-field="showTopTabs" type="checkbox" />
            <span class="customize-rok-toggle-copy">
              <strong>Show top workspace tabs</strong>
              <span>Keep the tabs row above the active view.</span>
            </span>
          </label>
          <label class="customize-rok-toggle">
            <input data-layout-field="showSidebarTabs" type="checkbox" />
            <span class="customize-rok-toggle-copy">
              <strong>Show sidebar workspace tabs</strong>
              <span>Keep the Views section visible in the left rail.</span>
            </span>
          </label>
        </div>
        <div class="layout-studio-builder">
          <input class="correction-modal-input" data-layout-field="newTabLabel" type="text" maxlength="${WORKSPACE_TAB_LABEL_MAX_CHARS}" placeholder="New tab name" />
          <input class="correction-modal-input" data-layout-field="newTabUrl" type="text" maxlength="${CUSTOM_WORKSPACE_TAB_URL_MAX_CHARS}" placeholder="https://example.com or /status" />
          <button class="customize-rok-action-btn" type="button" data-layout-action="add-tab">
            <strong>Add link tab</strong>
            <span>Custom tabs open in a new browser tab.</span>
          </button>
        </div>
        <div class="layout-studio-board" data-layout-board="workspace-tabs"></div>
        <div class="customize-rok-help">Drag to reorder. Built-ins switch the active ROK view. Custom tabs can point anywhere you want.</div>
      </section>
      <section class="customize-rok-section">
        <div class="customize-rok-section-head">
          <span class="customize-rok-section-kicker">Shell layout</span>
          <h3 class="customize-rok-section-title">Drag the app chrome around</h3>
        </div>
        <div class="layout-studio-grid">
          <div class="layout-studio-card">
            <div class="layout-studio-card-title">Sidebar sections</div>
            <div class="layout-studio-board" data-layout-board="sidebar"></div>
          </div>
          <div class="layout-studio-card">
            <div class="layout-studio-card-title">Topbar actions</div>
            <div class="layout-studio-board" data-layout-board="topbar"></div>
          </div>
          <div class="layout-studio-card">
            <div class="layout-studio-card-title">Chat stack</div>
            <div class="layout-studio-board" data-layout-board="main"></div>
          </div>
        </div>
      </section>
    </div>
    <div class="correction-modal-btns customize-rok-btns">
      <button class="correction-modal-cancel" type="button" data-layout-action="reset">Reset layout</button>
      <button class="correction-modal-cancel" type="button" data-layout-action="cancel">Cancel</button>
      <button class="correction-modal-submit" type="button" data-layout-action="save">Save layout</button>
    </div>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  const workspaceTabsBoard = modal.querySelector('[data-layout-board="workspace-tabs"]');
  const sidebarBoard = modal.querySelector('[data-layout-board="sidebar"]');
  const topbarBoard = modal.querySelector('[data-layout-board="topbar"]');
  const mainBoard = modal.querySelector('[data-layout-board="main"]');
  const showTopTabsInput = modal.querySelector('[data-layout-field="showTopTabs"]');
  const showSidebarTabsInput = modal.querySelector('[data-layout-field="showSidebarTabs"]');
  const newTabLabelInput = modal.querySelector('[data-layout-field="newTabLabel"]');
  const newTabUrlInput = modal.querySelector('[data-layout-field="newTabUrl"]');
  const addTabBtn = modal.querySelector('[data-layout-action="add-tab"]');
  const resetBtn = modal.querySelector('[data-layout-action="reset"]');
  const cancelBtn = modal.querySelector('[data-layout-action="cancel"]');
  const saveBtn = modal.querySelector('[data-layout-action="save"]');

  const getWorkspaceBoardOrder = () => draftTabOrder;
  const getWorkspaceItemById = (id) => {
    if (WORKSPACE_TAB_KEYS.includes(id)) {
      return {
        id,
        label: draftTabLabels[id] || DEFAULT_WORKSPACE_TAB_LABELS[id],
        kind: "workspace"
      };
    }
    return draftCustomTabs.find((item) => item.id === id) || null;
  };

  const renderWorkspaceTabItem = (id) => {
    const item = getWorkspaceItemById(id);
    if (!item) return null;
    const row = document.createElement("div");
    row.className = "layout-studio-item";
    row.innerHTML = `
      <div class="layout-studio-handle" aria-hidden="true">::</div>
      <div class="layout-studio-item-body">
        <input class="correction-modal-input layout-studio-label-input" type="text" maxlength="${WORKSPACE_TAB_LABEL_MAX_CHARS}" value="${escapeHtml(item.label || "")}" />
        ${item.kind === "workspace"
          ? `<div class="layout-studio-meta">Built-in ROK view</div>`
          : `<input class="correction-modal-input layout-studio-url-input" type="text" maxlength="${CUSTOM_WORKSPACE_TAB_URL_MAX_CHARS}" value="${escapeHtml(item.url || "")}" placeholder="https://example.com" />
             <div class="layout-studio-meta">Custom link tab</div>`}
      </div>
      ${item.kind === "workspace"
        ? `<div class="layout-studio-chip">Built-in</div>`
        : `<button class="correction-modal-cancel layout-studio-remove-btn" type="button" data-layout-remove-tab="${item.id}">Remove</button>`}
    `;
    const labelInput = row.querySelector(".layout-studio-label-input");
    if (labelInput instanceof HTMLInputElement) {
      labelInput.addEventListener("input", () => {
        const nextLabel = sanitizeWorkspaceTabLabel(labelInput.value, item.kind === "workspace" ? DEFAULT_WORKSPACE_TAB_LABELS[id] : "");
        if (item.kind === "workspace") {
          draftTabLabels[id] = nextLabel || DEFAULT_WORKSPACE_TAB_LABELS[id];
        } else {
          draftCustomTabs = draftCustomTabs.map((entry) => entry.id === id ? { ...entry, label: nextLabel || entry.label } : entry);
        }
      });
    }
    const urlInput = row.querySelector(".layout-studio-url-input");
    if (urlInput instanceof HTMLInputElement) {
      urlInput.addEventListener("input", () => {
        draftCustomTabs = draftCustomTabs.map((entry) => entry.id === id ? { ...entry, url: urlInput.value } : entry);
      });
    }
    const removeBtn = row.querySelector(`[data-layout-remove-tab="${id}"]`);
    if (removeBtn instanceof HTMLButtonElement) {
      removeBtn.addEventListener("click", () => {
        draftCustomTabs = draftCustomTabs.filter((entry) => entry.id !== id);
        draftTabOrder = sanitizeWorkspaceTabOrder(draftTabOrder.filter((entryId) => entryId !== id), draftCustomTabs);
        workspaceBoard.render();
      });
    }
    return row;
  };

  const renderSimpleLayoutItem = (label) => {
    const row = document.createElement("div");
    row.className = "layout-studio-item layout-studio-item-simple";
    row.innerHTML = `
      <div class="layout-studio-handle" aria-hidden="true">::</div>
      <div class="layout-studio-item-body">
        <div class="layout-studio-item-title">${escapeHtml(label)}</div>
      </div>
    `;
    return row;
  };

  const workspaceBoard = createLayoutStudioDndBoard(
    workspaceTabsBoard,
    () => draftTabOrder,
    renderWorkspaceTabItem,
    (nextOrder) => {
      draftTabOrder = sanitizeWorkspaceTabOrder(nextOrder, draftCustomTabs);
    }
  );

  const sidebarLayoutBoard = createLayoutStudioDndBoard(
    sidebarBoard,
    () => draftSidebarOrder,
    (id) => renderSimpleLayoutItem(SIDEBAR_SECTION_LABELS[id] || id),
    (nextOrder) => {
      draftSidebarOrder = sanitizeSidebarSectionOrder(nextOrder);
    }
  );

  const topbarLayoutBoard = createLayoutStudioDndBoard(
    topbarBoard,
    () => draftTopbarOrder,
    (id) => renderSimpleLayoutItem(TOPBAR_ACTION_LABELS[id] || id),
    (nextOrder) => {
      draftTopbarOrder = sanitizeTopbarActionOrder(nextOrder);
    }
  );

  const mainLayoutBoard = createLayoutStudioDndBoard(
    mainBoard,
    () => draftMainOrder,
    (id) => renderSimpleLayoutItem(MAIN_SECTION_LABELS[id] || id),
    (nextOrder) => {
      draftMainOrder = sanitizeMainSectionOrder(nextOrder);
    }
  );

  const applyDraftSettingsToFields = () => {
    if (showTopTabsInput instanceof HTMLInputElement) {
      showTopTabsInput.checked = draftShowTopTabs;
    }
    if (showSidebarTabsInput instanceof HTMLInputElement) {
      showSidebarTabsInput.checked = draftShowSidebarTabs;
    }
    if (newTabLabelInput instanceof HTMLInputElement) {
      newTabLabelInput.value = "";
    }
    if (newTabUrlInput instanceof HTMLInputElement) {
      newTabUrlInput.value = "";
    }
    workspaceBoard.render();
    sidebarLayoutBoard.render();
    topbarLayoutBoard.render();
    mainLayoutBoard.render();
  };

  applyDraftSettingsToFields();

  if (showTopTabsInput instanceof HTMLInputElement) {
    showTopTabsInput.addEventListener("change", () => {
      draftShowTopTabs = showTopTabsInput.checked;
    });
  }
  if (showSidebarTabsInput instanceof HTMLInputElement) {
    showSidebarTabsInput.addEventListener("change", () => {
      draftShowSidebarTabs = showSidebarTabsInput.checked;
    });
  }
  if (addTabBtn instanceof HTMLButtonElement) {
    addTabBtn.addEventListener("click", () => {
      const nextLabel = sanitizeWorkspaceTabLabel(newTabLabelInput instanceof HTMLInputElement ? newTabLabelInput.value : "", "");
      const nextUrl = sanitizeCustomWorkspaceTabUrl(newTabUrlInput instanceof HTMLInputElement ? newTabUrlInput.value : "");
      if (!nextLabel || !nextUrl) {
        showThinkingQuotaToast("Give the new tab a name and a URL first.");
        return;
      }
      if (draftCustomTabs.length >= CUSTOM_WORKSPACE_TAB_LIMIT) {
        showThinkingQuotaToast(`ROK currently caps custom tabs at ${CUSTOM_WORKSPACE_TAB_LIMIT}.`);
        return;
      }
      const id = `custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
      draftCustomTabs = sanitizeCustomWorkspaceTabs([
        ...draftCustomTabs,
        { id, label: nextLabel, url: nextUrl }
      ]);
      draftTabOrder = sanitizeWorkspaceTabOrder([...draftTabOrder, id], draftCustomTabs);
      applyDraftSettingsToFields();
    });
  }

  const keydownHandler = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeLayoutStudioModal(null);
    }
  };
  document.addEventListener("keydown", keydownHandler);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeLayoutStudioModal(null);
    }
  });

  if (resetBtn instanceof HTMLButtonElement) {
    resetBtn.addEventListener("click", () => {
      draftTabLabels = { ...DEFAULT_WORKSPACE_TAB_LABELS };
      draftCustomTabs = [];
      draftTabOrder = [...WORKSPACE_TAB_KEYS];
      draftSidebarOrder = [...DEFAULT_SIDEBAR_SECTION_ORDER];
      draftTopbarOrder = [...DEFAULT_TOPBAR_ACTION_ORDER];
      draftMainOrder = [...DEFAULT_MAIN_SECTION_ORDER];
      draftShowTopTabs = true;
      draftShowSidebarTabs = true;
      applyDraftSettingsToFields();
    });
  }
  if (cancelBtn instanceof HTMLButtonElement) {
    cancelBtn.addEventListener("click", () => closeLayoutStudioModal(null));
  }
  if (saveBtn instanceof HTMLButtonElement) {
    saveBtn.addEventListener("click", () => {
      const sanitizedCustomTabs = sanitizeCustomWorkspaceTabs(draftCustomTabs);
      const patch = {
        workspaceTabLabels: normalizeWorkspaceTabLabels(draftTabLabels),
        customWorkspaceTabs: sanitizedCustomTabs,
        workspaceTabOrder: sanitizeWorkspaceTabOrder(draftTabOrder, sanitizedCustomTabs),
        sidebarSectionOrder: sanitizeSidebarSectionOrder(draftSidebarOrder),
        topbarActionOrder: sanitizeTopbarActionOrder(draftTopbarOrder),
        mainSectionOrder: sanitizeMainSectionOrder(draftMainOrder),
        showTopWorkspaceTabs: Boolean(draftShowTopTabs),
        showSidebarWorkspaceTabs: Boolean(draftShowSidebarTabs)
      };
      persistUserSettingsPatch(patch);
      showThinkingQuotaToast("Saved your layout studio control.");
      closeLayoutStudioModal({ saved: true, settings: patch });
    });
  }

  activeLayoutStudioModal = { overlay, resolve: resolveModal, keydownHandler, promise };
  if (newTabLabelInput instanceof HTMLInputElement) {
    newTabLabelInput.focus();
  }
  return promise;
}

function hideDaedalusLimitModal() {
  if (!activeDaedalusLimitModal) return;
  const { overlay, keydownHandler } = activeDaedalusLimitModal;
  activeDaedalusLimitModal = null;
  if (keydownHandler) {
    document.removeEventListener("keydown", keydownHandler);
  }
  if (overlay && overlay.parentNode) {
    overlay.parentNode.removeChild(overlay);
  }
}

function showDaedalusLimitModal() {
  if (hasDaedalusUserApiKey()) return;
  if (activeDaedalusLimitModal) return;
  const remainingMs = getDaedalusLockRemainingMs();

  const overlay = document.createElement("div");
  overlay.className = "correction-modal-overlay";

  const modal = document.createElement("div");
  modal.className = "correction-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "daedalusLimitTitle");

  const title = document.createElement("div");
  title.id = "daedalusLimitTitle";
  title.className = "correction-modal-title";
  title.textContent = "Daedalus 1.0 is at capacity";

  const hint = document.createElement("div");
  hint.className = "correction-modal-hint";
  hint.textContent = "The shared Daedalus workspace is used up for now. Try again later or use your own Ollama API key on this device.";

  const usage = document.createElement("div");
  usage.className = "correction-modal-hint";
  const used = Math.max(0, Number(serverDaedalusQuota.count) || 0);
  const limit = Math.max(0, Number(serverDaedalusQuota.limit) || 0);
  usage.textContent = limit > 0
    ? `${used.toLocaleString()} / ${limit.toLocaleString()} tokens used in the current hour.`
    : "Shared ROK usage is currently blocked.";

  const reset = document.createElement("div");
  reset.className = "correction-modal-hint";
  reset.textContent = remainingMs > 0
    ? `Try again in about ${formatThinkingResetTime(remainingMs)}.`
    : "Try again a little later.";

  const btnRow = document.createElement("div");
  btnRow.className = "correction-modal-btns";

  const laterBtn = document.createElement("button");
  laterBtn.type = "button";
  laterBtn.className = "correction-modal-cancel";
  laterBtn.textContent = "Maybe Later";

  const keyBtn = document.createElement("button");
  keyBtn.type = "button";
  keyBtn.className = "correction-modal-submit";
  keyBtn.textContent = "Use My Ollama Key";

  laterBtn.addEventListener("click", () => hideDaedalusLimitModal());
  keyBtn.addEventListener("click", async () => {
    hideDaedalusLimitModal();
    const result = await requestDaedalusApiKey();
    if (result && result.saved) {
      showThinkingQuotaToast("Daedalus 1.0 will use your Ollama API key on this device.");
      applyDaedalusQuota({ count: 0, limit: 0, exhausted: false, reset_sec: 0, byok_active: true });
    }
  });

  btnRow.appendChild(laterBtn);
  btnRow.appendChild(keyBtn);
  modal.appendChild(title);
  modal.appendChild(hint);
  modal.appendChild(usage);
  modal.appendChild(reset);
  modal.appendChild(btnRow);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  const keydownHandler = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      hideDaedalusLimitModal();
    }
  };
  document.addEventListener("keydown", keydownHandler);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      hideDaedalusLimitModal();
    }
  });

  activeDaedalusLimitModal = { overlay, keydownHandler };
}

function closeDaedalusKeyModal(result) {
  if (!activeDaedalusKeyModal) return;
  const { overlay, resolve, keydownHandler } = activeDaedalusKeyModal;
  activeDaedalusKeyModal = null;
  if (keydownHandler) {
    document.removeEventListener("keydown", keydownHandler);
  }
  if (overlay && overlay.parentNode) {
    overlay.parentNode.removeChild(overlay);
  }
  resolve(result);
}

function requestDaedalusApiKey() {
  if (activeDaedalusKeyModal) {
    return activeDaedalusKeyModal.promise;
  }

  let resolveModal = null;
  const promise = new Promise((resolve) => {
    resolveModal = resolve;
  });
  const existingKey = getDaedalusUserApiKey();

  const overlay = document.createElement("div");
  overlay.className = "correction-modal-overlay";

  const modal = document.createElement("div");
  modal.className = "correction-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "daedalusKeyTitle");

  const title = document.createElement("div");
  title.id = "daedalusKeyTitle";
  title.className = "correction-modal-title";
  title.textContent = "Daedalus 1.0 Key";

  const hint = document.createElement("div");
  hint.className = "correction-modal-hint";
  hint.textContent = "Add your own Ollama API key to keep using Daedalus 1.0 without the shared ROK limit. The key stays only in this browser on this device.";

  const input = document.createElement("input");
  input.className = "correction-modal-input";
  input.type = "password";
  input.placeholder = "Paste your Ollama API key";
  input.value = existingKey;
  input.autocomplete = "off";
  input.autocapitalize = "off";
  input.spellcheck = false;

  const btnRow = document.createElement("div");
  btnRow.className = "correction-modal-btns";

  const forgetBtn = document.createElement("button");
  forgetBtn.type = "button";
  forgetBtn.className = "correction-modal-cancel";
  forgetBtn.textContent = "Forget Saved Key";
  forgetBtn.disabled = !existingKey;

  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.className = "correction-modal-cancel";
  cancelBtn.textContent = "Cancel";

  const saveBtn = document.createElement("button");
  saveBtn.type = "button";
  saveBtn.className = "correction-modal-submit";
  saveBtn.textContent = "Save Key";
  saveBtn.disabled = !existingKey;

  const syncButtons = () => {
    const hasValue = !!String(input.value || "").trim();
    forgetBtn.disabled = !hasValue && !getDaedalusUserApiKey();
    saveBtn.disabled = !hasValue;
  };

  input.addEventListener("input", syncButtons);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !saveBtn.disabled) {
      e.preventDefault();
      const normalized = String(input.value || "").trim();
      if (!normalized) return;
      setDaedalusUserApiKey(normalized);
      setDaedalusLockUntil(0);
      refreshComposerModelPicker();
      closeDaedalusKeyModal({ saved: true, apiKey: normalized });
    }
  });

  forgetBtn.addEventListener("click", () => {
    setDaedalusUserApiKey("");
    input.value = "";
    setDaedalusLockUntil(0);
    void refreshClientConfigFromServer();
    refreshComposerModelPicker();
    syncButtons();
    input.focus();
  });

  cancelBtn.addEventListener("click", () => closeDaedalusKeyModal(null));
  saveBtn.addEventListener("click", () => {
    const normalized = String(input.value || "").trim();
    if (!normalized) return;
    setDaedalusUserApiKey(normalized);
    setDaedalusLockUntil(0);
    refreshComposerModelPicker();
    closeDaedalusKeyModal({ saved: true, apiKey: normalized });
  });

  btnRow.appendChild(forgetBtn);
  btnRow.appendChild(cancelBtn);
  btnRow.appendChild(saveBtn);
  modal.appendChild(title);
  modal.appendChild(hint);
  modal.appendChild(input);
  modal.appendChild(btnRow);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  input.focus();
  input.select();

  const keydownHandler = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      closeDaedalusKeyModal(null);
    }
  };
  document.addEventListener("keydown", keydownHandler);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeDaedalusKeyModal(null);
    }
  });

  activeDaedalusKeyModal = { overlay, resolve: resolveModal, keydownHandler, promise };
  syncButtons();
  return promise;
}

function closeCustomOllamaSetupModal(result) {
  if (!activeCustomOllamaSetupModal) return;
  const { overlay, resolve, keydownHandler } = activeCustomOllamaSetupModal;
  activeCustomOllamaSetupModal = null;
  if (keydownHandler) {
    document.removeEventListener("keydown", keydownHandler);
  }
  if (overlay && overlay.parentNode) {
    overlay.parentNode.removeChild(overlay);
  }
  resolve(result);
}

function syncLocalOllamaSetupToRuntime() {
  setModelCatalog(MODEL_OPTIONS, DEFAULT_MODEL_ID);
  refreshComposerModelPicker();
}

function requestCustomOllamaCloudSetup(options = {}) {
  if (activeCustomOllamaSetupModal) {
    return activeCustomOllamaSetupModal.promise;
  }

  const autoSelect = options && options.autoSelect === true;
  const fixedModelId = resolveModelAlias(options && options.fixedModelId ? options.fixedModelId : "");
  const titleText = String(options && options.titleText ? options.titleText : "").trim() || "Your Ollama Cloud";
  const hintText = String(options && options.hintText ? options.hintText : "").trim()
    || "Save your own Ollama API key and any Ollama Cloud model ID. They stay only in this browser on this device.";
  const modelStatusText = String(options && options.modelStatusText ? options.modelStatusText : "").trim();
  const successLabel = String(options && options.successLabel ? options.successLabel : "").trim();
  const suppressDefaultModelHint = options && options.suppressDefaultModelHint === true;
  let resolveModal = null;
  const promise = new Promise((resolve) => {
    resolveModal = resolve;
  });
  const existingKey = getCustomOllamaApiKey();
  const existingModel = fixedModelId || getCustomOllamaModelId();

  const overlay = document.createElement("div");
  overlay.className = "correction-modal-overlay";

  const modal = document.createElement("div");
  modal.className = "correction-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "customOllamaSetupTitle");

  const title = document.createElement("div");
  title.id = "customOllamaSetupTitle";
  title.className = "correction-modal-title";
  title.textContent = titleText;

  const hint = document.createElement("div");
  hint.className = "correction-modal-hint";
  hint.textContent = hintText;

  const apiKeyLabel = document.createElement("div");
  apiKeyLabel.className = "correction-modal-hint";
  apiKeyLabel.textContent = "Ollama API key";

  const apiKeyInput = document.createElement("input");
  apiKeyInput.className = "correction-modal-input";
  apiKeyInput.type = "password";
  apiKeyInput.placeholder = "Paste your Ollama API key";
  apiKeyInput.value = existingKey;
  apiKeyInput.autocomplete = "off";
  apiKeyInput.autocapitalize = "off";
  apiKeyInput.spellcheck = false;

  const modelLabel = document.createElement("div");
  modelLabel.className = "correction-modal-hint";
  modelLabel.textContent = "Ollama Cloud model ID";

  const modelInput = document.createElement("input");
  modelInput.className = "correction-modal-input";
  modelInput.type = "text";
  modelInput.placeholder = "Example: llama3.3:70b-cloud";
  modelInput.value = existingModel;
  modelInput.autocomplete = "off";
  modelInput.autocapitalize = "off";
  modelInput.spellcheck = false;
  if (fixedModelId) {
    modelInput.readOnly = true;
  }

  const status = document.createElement("div");
  status.className = "correction-modal-hint";
  status.style.minHeight = "1.4em";

  const btnRow = document.createElement("div");
  btnRow.className = "correction-modal-btns";

  const forgetBtn = document.createElement("button");
  forgetBtn.type = "button";
  forgetBtn.className = "correction-modal-cancel";
  forgetBtn.textContent = fixedModelId ? "Forget Saved Key" : "Forget Saved Setup";
  forgetBtn.disabled = !existingKey && !existingModel;

  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.className = "correction-modal-cancel";
  cancelBtn.textContent = "Cancel";

  const saveBtn = document.createElement("button");
  saveBtn.type = "button";
  saveBtn.className = "correction-modal-submit";
  saveBtn.textContent = "Save Setup";

  const syncButtons = () => {
    const rawKey = String(apiKeyInput.value || "").trim();
    const rawModel = String(modelInput.value || "").trim();
    const modelError = fixedModelId ? "" : rawModel ? getCustomOllamaModelValidationError(rawModel) : "";
    const hasSavedSetup = !!getCustomOllamaApiKey() || !!getCustomOllamaModelId();
    forgetBtn.disabled = !hasSavedSetup && !rawKey && !rawModel;
    saveBtn.disabled = !rawKey || (!fixedModelId && !rawModel) || !!modelError;
    status.textContent = modelError
      || modelStatusText
      || (suppressDefaultModelHint ? "" : "Use any Ollama Cloud model ID that is not already one of ROK's built-in hosted models.");
    status.style.display = status.textContent ? "" : "none";
    status.style.color = modelError ? "#f2a2a2" : "";
  };

  const saveSetup = () => {
    const normalizedKey = String(apiKeyInput.value || "").trim();
    const normalizedModel = fixedModelId || resolveModelAlias(modelInput.value || "");
    const modelError = fixedModelId ? "" : getCustomOllamaModelValidationError(normalizedModel);
    if (!normalizedKey || (!fixedModelId && !normalizedModel) || modelError) {
      syncButtons();
      return;
    }
    setCustomOllamaApiKey(normalizedKey);
    if (!fixedModelId) {
      setCustomOllamaModelId(normalizedModel);
    }
    syncLocalOllamaSetupToRuntime();
    if (autoSelect && currentSessionId) {
      setCurrentSessionModel(normalizedModel);
    }
    closeCustomOllamaSetupModal({
      saved: true,
      apiKey: normalizedKey,
      modelId: normalizedModel,
      label: successLabel || normalizedModel
    });
  };

  apiKeyInput.addEventListener("input", syncButtons);
  modelInput.addEventListener("input", syncButtons);
  apiKeyInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !saveBtn.disabled) {
      e.preventDefault();
      saveSetup();
    }
  });
  modelInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !saveBtn.disabled) {
      e.preventDefault();
      saveSetup();
    }
  });

  forgetBtn.addEventListener("click", () => {
    setCustomOllamaApiKey("");
    if (!fixedModelId) {
      setCustomOllamaModelId("");
    }
    apiKeyInput.value = "";
    modelInput.value = fixedModelId || "";
    syncLocalOllamaSetupToRuntime();
    syncButtons();
    apiKeyInput.focus();
  });

  cancelBtn.addEventListener("click", () => closeCustomOllamaSetupModal(null));
  saveBtn.addEventListener("click", saveSetup);

  btnRow.appendChild(forgetBtn);
  btnRow.appendChild(cancelBtn);
  btnRow.appendChild(saveBtn);
  modal.appendChild(title);
  modal.appendChild(hint);
  modal.appendChild(apiKeyLabel);
  modal.appendChild(apiKeyInput);
  if (!fixedModelId) {
    modal.appendChild(modelLabel);
    modal.appendChild(modelInput);
  }
  modal.appendChild(status);
  modal.appendChild(btnRow);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  if (fixedModelId) {
    apiKeyInput.focus();
  } else if (existingModel) {
    modelInput.focus();
    modelInput.select();
  } else if (existingKey) {
    modelInput.focus();
  } else {
    apiKeyInput.focus();
  }

  const keydownHandler = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      closeCustomOllamaSetupModal(null);
    }
  };
  document.addEventListener("keydown", keydownHandler);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeCustomOllamaSetupModal(null);
    }
  });

  activeCustomOllamaSetupModal = { overlay, resolve: resolveModal, keydownHandler, promise };
  syncButtons();
  return promise.then((result) => {
    if (result && result.saved) {
      showThinkingQuotaToast(`Saved ${result.label || result.modelId} for Your Ollama Cloud on this device.`);
    }
    return result;
  });
}

function buildCustomizationModelChoices(currentDefaultModel = "") {
  const seen = new Set();
  const options = [];
  const pushOption = (rawModelId = "") => {
    const modelId = resolveModelAlias(rawModelId);
    if (!modelId || seen.has(modelId)) return;
    seen.add(modelId);
    options.push({
      id: modelId,
      label: getModelLabelById(modelId)
    });
  };

  MODEL_OPTIONS.forEach((item) => {
    if (item && item.id) {
      pushOption(item.id);
    }
  });
  pushOption(getConfiguredCustomOllamaModelId());
  pushOption(currentDefaultModel);
  pushOption(DEFAULT_CHAT_MODEL);
  return options;
}

function closeCustomizeRokModal(result) {
  if (!activeCustomizeRokModal) return;
  const { overlay, resolve, keydownHandler } = activeCustomizeRokModal;
  activeCustomizeRokModal = null;
  if (keydownHandler) {
    document.removeEventListener("keydown", keydownHandler);
  }
  if (overlay && overlay.parentNode) {
    overlay.parentNode.removeChild(overlay);
  }
  if (customizeRokBtn) {
    customizeRokBtn.setAttribute("aria-expanded", "false");
    customizeRokBtn.classList.remove("is-active");
  }
  resolve(result || null);
}

function openCustomizeRokModal() {
  if (activeCustomizeRokModal) {
    return activeCustomizeRokModal.promise;
  }

  let resolveModal = null;
  const promise = new Promise((resolve) => {
    resolveModal = resolve;
  });

  const currentSettings = buildExportableUserSettings();
  const selectedDefaultModel = resolveDefaultModelId(MODEL_OPTIONS, currentSettings.defaultModel);
  const modelChoices = buildCustomizationModelChoices(selectedDefaultModel);

  const overlay = document.createElement("div");
  overlay.className = "correction-modal-overlay";

  const modal = document.createElement("div");
  modal.className = "correction-modal customize-rok-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "customizeRokTitle");
  modal.innerHTML = `
    <div class="customize-rok-head">
      <div>
        <div class="customize-rok-kicker">Make ROK yours</div>
        <h2 id="customizeRokTitle" class="correction-modal-title">Customize ROK</h2>
        <p class="correction-modal-hint">Start with a simple preset, then tweak the parts you actually care about on this browser.</p>
      </div>
    </div>
    <div class="customize-rok-body">
      <section class="customize-rok-section">
        <div class="customize-rok-section-head">
          <span class="customize-rok-section-kicker">Quick setup</span>
          <h3 class="customize-rok-section-title">One click to get close</h3>
        </div>
        <div class="customize-rok-preset-grid">
          <button class="customize-rok-action-btn" type="button" data-customize-preset="calm">
            <strong>Calm</strong>
            <span>Quieter UI, less motion, less clutter.</span>
          </button>
          <button class="customize-rok-action-btn" type="button" data-customize-preset="code">
            <strong>Coding</strong>
            <span>Bias the defaults toward debugging and planning changes.</span>
          </button>
          <button class="customize-rok-action-btn" type="button" data-customize-preset="writing">
            <strong>Writing</strong>
            <span>Make the chat feel better for drafting and rewriting.</span>
          </button>
          <button class="customize-rok-action-btn" type="button" data-customize-preset="private">
            <strong>Privacy first</strong>
            <span>More previewing, less remembering, less background reuse.</span>
          </button>
        </div>
      </section>
      <section class="customize-rok-section">
        <div class="customize-rok-section-head">
          <span class="customize-rok-section-kicker">Identity</span>
          <h3 class="customize-rok-section-title">Make it feel like yours</h3>
        </div>
        <div class="customize-rok-field-grid">
          <label class="customize-rok-field">
            <span class="customize-rok-label">What should ROK call you?</span>
            <input class="correction-modal-input" data-customize-field="preferredName" type="text" maxlength="${CUSTOMIZATION_NAME_MAX_CHARS}" placeholder="Optional display name" />
            <span class="customize-rok-help">Used only when it actually fits the reply.</span>
          </label>
          <label class="customize-rok-field">
            <span class="customize-rok-label">What do you mostly use ROK for?</span>
            <select class="correction-modal-input customize-rok-select" data-customize-field="primaryUseCase">
              ${PRIMARY_USE_CASE_OPTIONS.map((option) => `
                <option value="${escapeHtml(option.id)}">${escapeHtml(option.label)}</option>
              `).join("")}
            </select>
            <span class="customize-rok-help">This mainly tunes the welcome copy and starter suggestions.</span>
          </label>
          <label class="customize-rok-field">
            <span class="customize-rok-label">What should the assistant call itself?</span>
            <input class="correction-modal-input" data-customize-field="customIdentityName" type="text" maxlength="${CUSTOMIZATION_NAME_MAX_CHARS}" placeholder="Leave blank to keep ROK" />
            <span class="customize-rok-help">Changes the assistant identity without swapping the model underneath.</span>
          </label>
        </div>
        <label class="customize-rok-field">
          <span class="customize-rok-label">Custom instructions</span>
          <textarea class="correction-modal-input customize-rok-textarea" data-customize-field="customSystemPrompt" maxlength="${CUSTOMIZATION_PROMPT_MAX_CHARS}" placeholder="Examples: be more concise, answer like a pair programmer, default to bullet points, explain code step-by-step, suggest the safest option first."></textarea>
          <div class="customize-rok-field-footer">
            <span class="customize-rok-help">Extra preferences for future replies. Tone, formatting, and default behavior all go here.</span>
            <span class="correction-modal-charcount" data-customize-prompt-count>0 / ${CUSTOMIZATION_PROMPT_MAX_CHARS}</span>
          </div>
        </label>
      </section>

      <section class="customize-rok-section">
        <div class="customize-rok-section-head">
          <span class="customize-rok-section-kicker">Look</span>
          <h3 class="customize-rok-section-title">Tune the chat feel</h3>
        </div>
        <label class="customize-rok-field">
          <span class="customize-rok-label">Accent color</span>
          <div class="customize-rok-accent-row">
            <input class="customize-rok-color-input" data-customize-field="accentColorPicker" type="color" value="${normalizeHexColor(currentSettings.accentColor, DEFAULT_USER_SETTINGS.accentColor)}" />
            <input class="correction-modal-input customize-rok-accent-text" data-customize-field="accentColorText" type="text" maxlength="7" spellcheck="false" placeholder="#d14b4b" />
          </div>
          <div class="customize-rok-swatches">
            ${CUSTOMIZATION_ACCENT_PRESETS.map((color) => `
              <button
                class="customize-rok-swatch"
                type="button"
                data-accent-swatch="${color}"
                style="--swatch-color:${color};"
                aria-label="Use ${color} as the accent color"
                title="${color}"
              ></button>
            `).join("")}
          </div>
        </label>
        <div class="customize-rok-range-grid">
          <label class="customize-rok-field">
            <div class="customize-rok-label-row">
              <span class="customize-rok-label">Chat width</span>
              <span class="customize-rok-value" data-customize-value="chatWidth"></span>
            </div>
            <input class="customize-rok-range" data-customize-field="chatWidth" type="range" min="620" max="1200" step="20" />
            <span class="customize-rok-help">How wide the conversation column can grow.</span>
          </label>
          <label class="customize-rok-field">
            <div class="customize-rok-label-row">
              <span class="customize-rok-label">Sidebar width</span>
              <span class="customize-rok-value" data-customize-value="sidebarWidth"></span>
            </div>
            <input class="customize-rok-range" data-customize-field="sidebarWidth" type="range" min="180" max="340" step="10" />
            <span class="customize-rok-help">Slim it down or give your saved chats more room.</span>
          </label>
          <label class="customize-rok-field">
            <div class="customize-rok-label-row">
              <span class="customize-rok-label">Bubble roundness</span>
              <span class="customize-rok-value" data-customize-value="bubbleRadius"></span>
            </div>
            <input class="customize-rok-range" data-customize-field="bubbleRadius" type="range" min="8" max="30" step="1" />
            <span class="customize-rok-help">Sharper or softer chat bubbles.</span>
          </label>
          <label class="customize-rok-field">
            <div class="customize-rok-label-row">
              <span class="customize-rok-label">Message text size</span>
              <span class="customize-rok-value" data-customize-value="bubbleTextSize"></span>
            </div>
            <input class="customize-rok-range" data-customize-field="bubbleTextSize" type="range" min="12" max="18" step="1" />
            <span class="customize-rok-help">Increase legibility or fit more on-screen.</span>
          </label>
        </div>
        <div class="customize-rok-toggle-grid">
          <label class="customize-rok-toggle">
            <input data-customize-field="compactMode" type="checkbox" />
            <span class="customize-rok-toggle-copy">
              <strong>Compact spacing</strong>
              <span>Tighten the chat layout.</span>
            </span>
          </label>
          <label class="customize-rok-toggle">
            <input data-customize-field="reduceMotion" type="checkbox" />
            <span class="customize-rok-toggle-copy">
              <strong>Reduce motion</strong>
              <span>Turn off most animations and transitions.</span>
            </span>
          </label>
          <label class="customize-rok-toggle">
            <input data-customize-field="showStarterChips" type="checkbox" />
            <span class="customize-rok-toggle-copy">
              <strong>Show starter chips</strong>
              <span>Keep the empty-chat prompt chips visible.</span>
            </span>
          </label>
          <label class="customize-rok-toggle">
            <input data-customize-field="showTimestamps" type="checkbox" />
            <span class="customize-rok-toggle-copy">
              <strong>Show hover timestamps</strong>
              <span>Keep quick time hints on each message.</span>
            </span>
          </label>
        </div>
      </section>

      <section class="customize-rok-section">
        <div class="customize-rok-section-head">
          <span class="customize-rok-section-kicker">Behavior</span>
          <h3 class="customize-rok-section-title">Pick the defaults you want</h3>
        </div>
        <div class="customize-rok-field-grid">
          <label class="customize-rok-field">
            <span class="customize-rok-label">Default model</span>
            <select class="correction-modal-input customize-rok-select" data-customize-field="defaultModel">
              ${modelChoices.map((option) => `
                <option value="${escapeHtml(option.id)}"${option.id === selectedDefaultModel ? " selected" : ""}>${escapeHtml(option.label)}</option>
              `).join("")}
            </select>
            <span class="customize-rok-help">Used for new chats when you are not reopening a remembered model.</span>
          </label>
          <div class="customize-rok-toggle-stack">
            <label class="customize-rok-toggle">
              <input data-customize-field="rememberModel" type="checkbox" />
              <span class="customize-rok-toggle-copy">
                <strong>Remember my last model</strong>
                <span>Reopen chats with the most recently used model.</span>
              </span>
            </label>
            <label class="customize-rok-toggle">
              <input data-customize-field="enterToSend" type="checkbox" />
              <span class="customize-rok-toggle-copy">
                <strong>Enter sends</strong>
                <span>Press Enter to send and Shift+Enter for a new line.</span>
              </span>
            </label>
          </div>
        </div>
        <div class="customize-rok-range-grid">
          <label class="customize-rok-field">
            <div class="customize-rok-label-row">
              <span class="customize-rok-label">Typing speed</span>
              <span class="customize-rok-value" data-customize-value="typingSpeed"></span>
            </div>
            <input class="customize-rok-range" data-customize-field="typingSpeed" type="range" min="0" max="80" step="1" />
            <span class="customize-rok-help">Lower feels snappier. Zero makes reply reveal instant.</span>
          </label>
          <label class="customize-rok-field">
            <div class="customize-rok-label-row">
              <span class="customize-rok-label">Cooldown</span>
              <span class="customize-rok-value" data-customize-value="cooldownMs"></span>
            </div>
            <input class="customize-rok-range" data-customize-field="cooldownMs" type="range" min="0" max="5000" step="100" />
            <span class="customize-rok-help">How long the composer waits before another send is allowed.</span>
          </label>
          <label class="customize-rok-field">
            <div class="customize-rok-label-row">
              <span class="customize-rok-label">History window</span>
              <span class="customize-rok-value" data-customize-value="historyLimit"></span>
            </div>
            <input class="customize-rok-range" data-customize-field="historyLimit" type="range" min="5" max="120" step="1" />
            <span class="customize-rok-help">How many previous messages ROK keeps sending back as context.</span>
          </label>
          <label class="customize-rok-field">
            <div class="customize-rok-label-row">
              <span class="customize-rok-label">Saved chat limit</span>
              <span class="customize-rok-value" data-customize-value="maxSessions"></span>
            </div>
            <input class="customize-rok-range" data-customize-field="maxSessions" type="range" min="5" max="100" step="1" />
            <span class="customize-rok-help">How many local chats this browser keeps around.</span>
          </label>
        </div>
        <div class="customize-rok-toggle-grid">
          <label class="customize-rok-toggle">
            <input data-customize-field="autoScroll" type="checkbox" />
            <span class="customize-rok-toggle-copy">
              <strong>Auto-scroll to new replies</strong>
              <span>Keep the newest streamed text pinned into view.</span>
            </span>
          </label>
          <label class="customize-rok-toggle">
            <input data-customize-field="memoryEnabled" type="checkbox" />
            <span class="customize-rok-toggle-copy">
              <strong>Browser memory</strong>
              <span>Let ROK reuse important things it has learned on this device.</span>
            </span>
          </label>
          <label class="customize-rok-toggle">
            <input data-customize-field="projectMemoryEnabled" type="checkbox" />
            <span class="customize-rok-toggle-copy">
              <strong>Project memory</strong>
              <span>Keep repo-specific rules and decisions around for ROK CODE work.</span>
            </span>
          </label>
          <label class="customize-rok-toggle">
            <input data-customize-field="autoLearn" type="checkbox" />
            <span class="customize-rok-toggle-copy">
              <strong>Auto-learn useful details</strong>
              <span>Let ROK quietly remember important preferences and constraints.</span>
            </span>
          </label>
          <label class="customize-rok-toggle">
            <input data-customize-field="askBeforeSensitiveSend" type="checkbox" />
            <span class="customize-rok-toggle-copy">
              <strong>Ask before sensitive sends</strong>
              <span>Preview files, memory, and extra context before it leaves this device.</span>
            </span>
          </label>
          <label class="customize-rok-toggle">
            <input data-customize-field="showEvidenceButtons" type="checkbox" />
            <span class="customize-rok-toggle-copy">
              <strong>Show evidence on replies</strong>
              <span>Let every answer expose the context that shaped it.</span>
            </span>
          </label>
        </div>
      </section>
      <section class="customize-rok-section">
        <div class="customize-rok-section-head">
          <span class="customize-rok-section-kicker">Advanced tools</span>
          <h3 class="customize-rok-section-title">Layout editing, import/export, and cleanup</h3>
        </div>
        <div class="customize-rok-action-grid">
          <button class="customize-rok-action-btn" type="button" data-customize-action="layout-studio">
            <strong>Advanced layout editor</strong>
            <span>Rename tabs, add custom ones, and rearrange the shell if you really want to.</span>
          </button>
          <button class="customize-rok-action-btn" type="button" data-customize-action="export">
            <strong>Export setup</strong>
            <span>Download your control settings as JSON.</span>
          </button>
          <button class="customize-rok-action-btn" type="button" data-customize-action="import">
            <strong>Import setup</strong>
            <span>Load a saved ROK control profile onto this browser.</span>
          </button>
          <button class="customize-rok-action-btn danger" type="button" data-customize-action="clear-memory">
            <strong>Clear browser memory</strong>
            <span>Erase remembered facts and correction knowledge on this device.</span>
          </button>
          <button class="customize-rok-action-btn danger" type="button" data-customize-action="clear-project-memory">
            <strong>Clear project memory</strong>
            <span>Forget repo-specific decisions for the current workspace.</span>
          </button>
          <button class="customize-rok-action-btn danger" type="button" data-customize-action="clear-chats">
            <strong>Clear saved chats</strong>
            <span>Wipe local chat history and start fresh with a clean session.</span>
          </button>
        </div>
      </section>
    </div>
    <div class="correction-modal-btns customize-rok-btns">
      <button class="correction-modal-cancel" type="button" data-customize-action="reset">Reset defaults</button>
      <button class="correction-modal-cancel" type="button" data-customize-action="cancel">Cancel</button>
      <button class="correction-modal-submit" type="button" data-customize-action="save">Save changes</button>
    </div>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  const importInput = document.createElement("input");
  importInput.type = "file";
  importInput.accept = ".json,application/json";
  importInput.hidden = true;
  modal.appendChild(importInput);

  const preferredNameInput = modal.querySelector('[data-customize-field="preferredName"]');
  const primaryUseCaseInput = modal.querySelector('[data-customize-field="primaryUseCase"]');
  const customIdentityInput = modal.querySelector('[data-customize-field="customIdentityName"]');
  const customPromptInput = modal.querySelector('[data-customize-field="customSystemPrompt"]');
  const accentColorPicker = modal.querySelector('[data-customize-field="accentColorPicker"]');
  const accentColorText = modal.querySelector('[data-customize-field="accentColorText"]');
  const compactModeInput = modal.querySelector('[data-customize-field="compactMode"]');
  const reduceMotionInput = modal.querySelector('[data-customize-field="reduceMotion"]');
  const showStarterChipsInput = modal.querySelector('[data-customize-field="showStarterChips"]');
  const showTimestampsInput = modal.querySelector('[data-customize-field="showTimestamps"]');
  const defaultModelInput = modal.querySelector('[data-customize-field="defaultModel"]');
  const rememberModelInput = modal.querySelector('[data-customize-field="rememberModel"]');
  const enterToSendInput = modal.querySelector('[data-customize-field="enterToSend"]');
  const autoScrollInput = modal.querySelector('[data-customize-field="autoScroll"]');
  const memoryEnabledInput = modal.querySelector('[data-customize-field="memoryEnabled"]');
  const projectMemoryEnabledInput = modal.querySelector('[data-customize-field="projectMemoryEnabled"]');
  const autoLearnInput = modal.querySelector('[data-customize-field="autoLearn"]');
  const chatWidthInput = modal.querySelector('[data-customize-field="chatWidth"]');
  const sidebarWidthInput = modal.querySelector('[data-customize-field="sidebarWidth"]');
  const bubbleRadiusInput = modal.querySelector('[data-customize-field="bubbleRadius"]');
  const bubbleTextSizeInput = modal.querySelector('[data-customize-field="bubbleTextSize"]');
  const typingSpeedInput = modal.querySelector('[data-customize-field="typingSpeed"]');
  const cooldownMsInput = modal.querySelector('[data-customize-field="cooldownMs"]');
  const historyLimitInput = modal.querySelector('[data-customize-field="historyLimit"]');
  const maxSessionsInput = modal.querySelector('[data-customize-field="maxSessions"]');
  const promptCount = modal.querySelector("[data-customize-prompt-count]");
  const saveBtn = modal.querySelector('[data-customize-action="save"]');
  const cancelBtn = modal.querySelector('[data-customize-action="cancel"]');
  const resetBtn = modal.querySelector('[data-customize-action="reset"]');
  const layoutStudioBtn = modal.querySelector('[data-customize-action="layout-studio"]');
  const exportBtn = modal.querySelector('[data-customize-action="export"]');
  const importBtn = modal.querySelector('[data-customize-action="import"]');
  const clearMemoryBtn = modal.querySelector('[data-customize-action="clear-memory"]');
  const clearProjectMemoryBtn = modal.querySelector('[data-customize-action="clear-project-memory"]');
  const clearChatsBtn = modal.querySelector('[data-customize-action="clear-chats"]');
  const accentSwatches = Array.from(modal.querySelectorAll("[data-accent-swatch]"));
  const presetButtons = Array.from(modal.querySelectorAll("[data-customize-preset]"));
  const rangeValueEls = {
    chatWidth: modal.querySelector('[data-customize-value="chatWidth"]'),
    sidebarWidth: modal.querySelector('[data-customize-value="sidebarWidth"]'),
    bubbleRadius: modal.querySelector('[data-customize-value="bubbleRadius"]'),
    bubbleTextSize: modal.querySelector('[data-customize-value="bubbleTextSize"]'),
    typingSpeed: modal.querySelector('[data-customize-value="typingSpeed"]'),
    cooldownMs: modal.querySelector('[data-customize-value="cooldownMs"]'),
    historyLimit: modal.querySelector('[data-customize-value="historyLimit"]'),
    maxSessions: modal.querySelector('[data-customize-value="maxSessions"]')
  };
  const rangeInputs = {
    chatWidth: chatWidthInput,
    sidebarWidth: sidebarWidthInput,
    bubbleRadius: bubbleRadiusInput,
    bubbleTextSize: bubbleTextSizeInput,
    typingSpeed: typingSpeedInput,
    cooldownMs: cooldownMsInput,
    historyLimit: historyLimitInput,
    maxSessions: maxSessionsInput
  };

  const syncPromptCount = () => {
    if (!customPromptInput || !promptCount) return;
    promptCount.textContent = `${customPromptInput.value.length} / ${CUSTOMIZATION_PROMPT_MAX_CHARS}`;
  };

  const syncAccentInputs = (rawColor) => {
    const normalized = normalizeHexColor(rawColor, DEFAULT_USER_SETTINGS.accentColor);
    if (accentColorPicker) accentColorPicker.value = normalized;
    if (accentColorText) accentColorText.value = normalized;
    accentSwatches.forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-accent-swatch") === normalized);
    });
  };

  const formatRangeValue = (field, rawValue) => {
    const numeric = Number(rawValue);
    if (!Number.isFinite(numeric)) return "";
    switch (field) {
      case "chatWidth":
      case "sidebarWidth":
      case "bubbleRadius":
      case "bubbleTextSize":
        return `${Math.round(numeric)}px`;
      case "typingSpeed":
        return numeric <= 0 ? "Instant" : `${Math.round(numeric)} ms`;
      case "cooldownMs":
        if (numeric <= 0) return "Off";
        return numeric >= 1000 ? `${(numeric / 1000).toFixed(numeric % 1000 === 0 ? 0 : 1)} s` : `${Math.round(numeric)} ms`;
      case "historyLimit":
        return `${Math.round(numeric)} msgs`;
      case "maxSessions":
        return `${Math.round(numeric)} chats`;
      default:
        return String(Math.round(numeric));
    }
  };

  const syncRangeValue = (field) => {
    const inputEl = rangeInputs[field];
    const valueEl = rangeValueEls[field];
    if (!inputEl || !valueEl) return;
    valueEl.textContent = formatRangeValue(field, inputEl.value);
  };

  const syncMemoryDependents = () => {
    const memoryEnabled = Boolean(memoryEnabledInput && memoryEnabledInput.checked);
    if (projectMemoryEnabledInput) {
      projectMemoryEnabledInput.disabled = !memoryEnabled;
    }
    if (autoLearnInput) {
      autoLearnInput.disabled = !memoryEnabled;
    }
  };

  const buildDraftSettingsFromFields = () => ({
    preferredName: sanitizeShortUserSettingText(preferredNameInput ? preferredNameInput.value : ""),
    primaryUseCase: sanitizePrimaryUseCase(primaryUseCaseInput ? primaryUseCaseInput.value : DEFAULT_USER_SETTINGS.primaryUseCase),
    customIdentityName: sanitizeShortUserSettingText(customIdentityInput ? customIdentityInput.value : ""),
    customSystemPrompt: sanitizeLongUserSettingText(customPromptInput ? customPromptInput.value : ""),
    accentColor: normalizeHexColor(accentColorText ? accentColorText.value : "", DEFAULT_USER_SETTINGS.accentColor),
    compactMode: Boolean(compactModeInput && compactModeInput.checked),
    reduceMotion: Boolean(reduceMotionInput && reduceMotionInput.checked),
    showStarterChips: Boolean(showStarterChipsInput && showStarterChipsInput.checked),
    showTimestamps: Boolean(showTimestampsInput && showTimestampsInput.checked),
    defaultModel: resolveDefaultModelId(MODEL_OPTIONS, defaultModelInput ? defaultModelInput.value : DEFAULT_USER_SETTINGS.defaultModel),
    rememberModel: Boolean(rememberModelInput && rememberModelInput.checked),
    enterToSend: Boolean(enterToSendInput && enterToSendInput.checked),
    autoScroll: Boolean(autoScrollInput && autoScrollInput.checked),
    sidebarStartsCollapsed: true,
    sidebarWidth: normalizeClientLimit(sidebarWidthInput ? sidebarWidthInput.value : DEFAULT_USER_SETTINGS.sidebarWidth, DEFAULT_USER_SETTINGS.sidebarWidth, 180, 340),
    chatWidth: normalizeClientLimit(chatWidthInput ? chatWidthInput.value : DEFAULT_USER_SETTINGS.chatWidth, DEFAULT_USER_SETTINGS.chatWidth, 620, 1200),
    bubbleRadius: normalizeClientLimit(bubbleRadiusInput ? bubbleRadiusInput.value : DEFAULT_USER_SETTINGS.bubbleRadius, DEFAULT_USER_SETTINGS.bubbleRadius, 8, 30),
    bubbleTextSize: normalizeClientLimit(bubbleTextSizeInput ? bubbleTextSizeInput.value : DEFAULT_USER_SETTINGS.bubbleTextSize, DEFAULT_USER_SETTINGS.bubbleTextSize, 12, 18),
    typingSpeed: normalizeClientLimit(typingSpeedInput ? typingSpeedInput.value : DEFAULT_USER_SETTINGS.typingSpeed, DEFAULT_USER_SETTINGS.typingSpeed, 0, 500),
    cooldownMs: normalizeClientLimit(cooldownMsInput ? cooldownMsInput.value : DEFAULT_USER_SETTINGS.cooldownMs, DEFAULT_USER_SETTINGS.cooldownMs, 0, 60000),
    historyLimit: normalizeClientLimit(historyLimitInput ? historyLimitInput.value : DEFAULT_USER_SETTINGS.historyLimit, DEFAULT_USER_SETTINGS.historyLimit, 1, 1000),
    maxSessions: normalizeClientLimit(maxSessionsInput ? maxSessionsInput.value : DEFAULT_USER_SETTINGS.maxSessions, DEFAULT_USER_SETTINGS.maxSessions, 5, 100),
    memoryEnabled: Boolean(memoryEnabledInput && memoryEnabledInput.checked),
    projectMemoryEnabled: Boolean(projectMemoryEnabledInput && projectMemoryEnabledInput.checked),
    autoLearn: Boolean(autoLearnInput && autoLearnInput.checked),
    askBeforeSensitiveSend: Boolean(modal.querySelector('[data-customize-field="askBeforeSensitiveSend"]')?.checked),
    showEvidenceButtons: Boolean(modal.querySelector('[data-customize-field="showEvidenceButtons"]')?.checked)
  });

  const applySettingsToFields = (sourceSettings) => {
    if (preferredNameInput) preferredNameInput.value = sanitizeShortUserSettingText(sourceSettings.preferredName);
    if (primaryUseCaseInput) primaryUseCaseInput.value = sanitizePrimaryUseCase(sourceSettings.primaryUseCase);
    if (customIdentityInput) customIdentityInput.value = sanitizeShortUserSettingText(sourceSettings.customIdentityName);
    if (customPromptInput) customPromptInput.value = sanitizeLongUserSettingText(sourceSettings.customSystemPrompt);
    if (compactModeInput) compactModeInput.checked = Boolean(sourceSettings.compactMode);
    if (reduceMotionInput) reduceMotionInput.checked = Boolean(sourceSettings.reduceMotion);
    if (showStarterChipsInput) showStarterChipsInput.checked = Boolean(sourceSettings.showStarterChips);
    if (showTimestampsInput) showTimestampsInput.checked = Boolean(sourceSettings.showTimestamps);
    if (rememberModelInput) rememberModelInput.checked = Boolean(sourceSettings.rememberModel);
    if (enterToSendInput) enterToSendInput.checked = Boolean(sourceSettings.enterToSend);
    if (autoScrollInput) autoScrollInput.checked = Boolean(sourceSettings.autoScroll);
    if (memoryEnabledInput) memoryEnabledInput.checked = Boolean(sourceSettings.memoryEnabled);
    if (projectMemoryEnabledInput) projectMemoryEnabledInput.checked = Boolean(sourceSettings.projectMemoryEnabled);
    if (autoLearnInput) autoLearnInput.checked = Boolean(sourceSettings.autoLearn);
    if (defaultModelInput) {
      defaultModelInput.value = resolveDefaultModelId(MODEL_OPTIONS, sourceSettings.defaultModel);
    }
    if (chatWidthInput) chatWidthInput.value = String(normalizeClientLimit(sourceSettings.chatWidth, DEFAULT_USER_SETTINGS.chatWidth, 620, 1200));
    if (sidebarWidthInput) sidebarWidthInput.value = String(normalizeClientLimit(sourceSettings.sidebarWidth, DEFAULT_USER_SETTINGS.sidebarWidth, 180, 340));
    if (bubbleRadiusInput) bubbleRadiusInput.value = String(normalizeClientLimit(sourceSettings.bubbleRadius, DEFAULT_USER_SETTINGS.bubbleRadius, 8, 30));
    if (bubbleTextSizeInput) bubbleTextSizeInput.value = String(normalizeClientLimit(sourceSettings.bubbleTextSize, DEFAULT_USER_SETTINGS.bubbleTextSize, 12, 18));
    if (typingSpeedInput) typingSpeedInput.value = String(normalizeClientLimit(sourceSettings.typingSpeed, DEFAULT_USER_SETTINGS.typingSpeed, 0, 500));
    if (cooldownMsInput) cooldownMsInput.value = String(normalizeClientLimit(sourceSettings.cooldownMs, DEFAULT_USER_SETTINGS.cooldownMs, 0, 60000));
    if (historyLimitInput) historyLimitInput.value = String(normalizeClientLimit(sourceSettings.historyLimit, DEFAULT_USER_SETTINGS.historyLimit, 1, 1000));
    if (maxSessionsInput) maxSessionsInput.value = String(normalizeClientLimit(sourceSettings.maxSessions, DEFAULT_USER_SETTINGS.maxSessions, 5, 100));
    syncAccentInputs(sourceSettings.accentColor);
    Object.keys(rangeInputs).forEach(syncRangeValue);
    syncPromptCount();
    syncMemoryDependents();
  };

  applySettingsToFields(currentSettings);

  if (customizeRokBtn) {
    customizeRokBtn.setAttribute("aria-expanded", "true");
    customizeRokBtn.classList.add("is-active");
  }

  if (customPromptInput) {
    customPromptInput.addEventListener("input", syncPromptCount);
  }
  if (accentColorPicker) {
    accentColorPicker.addEventListener("input", () => {
      syncAccentInputs(accentColorPicker.value);
    });
  }
  if (accentColorText) {
    accentColorText.addEventListener("input", () => {
      const candidate = String(accentColorText.value || "").trim();
      if (/^#[0-9a-fA-F]{6}$/.test(candidate)) {
        syncAccentInputs(candidate);
      }
    });
    accentColorText.addEventListener("blur", () => {
      syncAccentInputs(accentColorText.value);
    });
  }
  accentSwatches.forEach((btn) => {
    btn.addEventListener("click", () => {
      syncAccentInputs(btn.getAttribute("data-accent-swatch") || DEFAULT_USER_SETTINGS.accentColor);
    });
  });
  Object.entries(rangeInputs).forEach(([field, inputEl]) => {
    if (!inputEl) return;
    inputEl.addEventListener("input", () => {
      syncRangeValue(field);
    });
  });
  if (memoryEnabledInput) {
    memoryEnabledInput.addEventListener("change", syncMemoryDependents);
  }
  const customizationPresets = {
    calm: {
      reduceMotion: true,
      compactMode: false,
      showStarterChips: false,
      showTimestamps: false,
      bubbleRadius: 20,
      chatWidth: 820,
      primaryUseCase: "general"
    },
    code: {
      primaryUseCase: "code",
      typingSpeed: 6,
      historyLimit: 30,
      showStarterChips: true,
      askBeforeSensitiveSend: true
    },
    writing: {
      primaryUseCase: "writing",
      bubbleTextSize: 15,
      chatWidth: 860,
      showStarterChips: true,
      typingSpeed: 10
    },
    private: {
      askBeforeSensitiveSend: true,
      memoryEnabled: false,
      projectMemoryEnabled: false,
      autoLearn: false
    }
  };
  presetButtons.forEach((btn) => {
    if (!(btn instanceof HTMLButtonElement)) return;
    btn.addEventListener("click", () => {
      const presetId = String(btn.getAttribute("data-customize-preset") || "").trim();
      const presetPatch = customizationPresets[presetId];
      if (!presetPatch) return;
      applySettingsToFields({ ...buildDraftSettingsFromFields(), ...presetPatch });
      const presetLabel = btn.querySelector("strong") ? btn.querySelector("strong").textContent.trim() : "selected";
      showThinkingQuotaToast(`Applied the ${presetLabel} preset.`);
    });
  });

  const keydownHandler = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      closeCustomizeRokModal(null);
    }
  };
  document.addEventListener("keydown", keydownHandler);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeCustomizeRokModal(null);
    }
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      applySettingsToFields(DEFAULT_USER_SETTINGS);
    });
  }
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      try {
        exportRokControlSetup();
        showThinkingQuotaToast("Exported your ROK control setup.");
      } catch (error) {
        showThinkingQuotaToast(error && error.message ? error.message : "Could not export your setup.");
      }
    });
  }
  if (layoutStudioBtn) {
    layoutStudioBtn.addEventListener("click", () => {
      closeCustomizeRokModal(null);
      void openLayoutStudioModal();
    });
  }
  if (importBtn) {
    importBtn.addEventListener("click", () => {
      importInput.value = "";
      importInput.click();
    });
  }
  importInput.addEventListener("change", async () => {
    const file = importInput.files && importInput.files[0];
    if (!file) return;
    try {
      const importedSettings = await importRokControlSetupFromFile(file);
      if (!importedSettings) return;
      applySettingsToFields({ ...DEFAULT_USER_SETTINGS, ...importedSettings });
      showThinkingQuotaToast("Imported your ROK control setup.");
    } catch (error) {
      showThinkingQuotaToast(error && error.message ? error.message : "Could not import that setup file.");
    }
  });
  if (clearMemoryBtn) {
    clearMemoryBtn.addEventListener("click", () => {
      if (!window.confirm("Clear remembered browser memory and correction knowledge on this device?")) {
        return;
      }
      clearRememberedBrowserData();
      showThinkingQuotaToast("Cleared browser memory.");
    });
  }
  if (clearProjectMemoryBtn) {
    clearProjectMemoryBtn.addEventListener("click", () => {
      if (!window.confirm("Clear project memory for the current workspace?")) {
        return;
      }
      clearCurrentProjectMemoryData();
      showThinkingQuotaToast("Cleared project memory for this workspace.");
    });
  }
  if (clearChatsBtn) {
    clearChatsBtn.addEventListener("click", () => {
      if (!window.confirm("Clear all saved chats on this browser and start fresh?")) {
        return;
      }
      resetSavedChatsAndStartFresh();
      showThinkingQuotaToast("Cleared saved chats and started a fresh session.");
    });
  }
  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => closeCustomizeRokModal(null));
  }
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const patch = buildDraftSettingsFromFields();
      persistUserSettingsPatch(patch, { syncModelDefaults: true });
      applySidebarCollapsedState(true, { persist: false });
      trimSessionsToSettingLimit();
      if (onboardingNameInput) {
        onboardingNameInput.value = patch.preferredName;
      }
      refreshMemoryToggleButtons();
      renderLocalKnowledgeList();
      showThinkingQuotaToast("Saved your ROK changes.");
      closeCustomizeRokModal({ saved: true, settings: patch });
    });
  }

  activeCustomizeRokModal = { overlay, resolve: resolveModal, keydownHandler, promise };
  if (preferredNameInput) {
    preferredNameInput.focus();
    preferredNameInput.select();
  }
  return promise;
}

// --- End server-side thinking quota ---

function getPreferredDefaultModelId() {
  const preferredConfigured = resolveModelAlias(userSettings.defaultModel);
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
  document.documentElement.style.setProperty("--chat-width", `${normalizeClientLimit(userSettings.chatWidth, DEFAULT_USER_SETTINGS.chatWidth, 620, 1200)}px`);
  document.documentElement.style.setProperty("--sidebar-width", `${normalizeClientLimit(userSettings.sidebarWidth, DEFAULT_USER_SETTINGS.sidebarWidth, 180, 340)}px`);
  document.documentElement.style.setProperty("--bubble-radius", `${normalizeClientLimit(userSettings.bubbleRadius, DEFAULT_USER_SETTINGS.bubbleRadius, 8, 30)}px`);
  document.documentElement.style.setProperty("--bubble-font-size", `${normalizeClientLimit(userSettings.bubbleTextSize, DEFAULT_USER_SETTINGS.bubbleTextSize, 12, 18)}px`);
  if (document.body) {
    document.body.classList.toggle("settings-compact", Boolean(userSettings.compactMode));
    document.body.classList.toggle("settings-reduce-motion", Boolean(userSettings.reduceMotion));
    document.body.classList.toggle("settings-hide-welcome-chips", !Boolean(userSettings.showStarterChips));
    document.body.classList.toggle("settings-hide-timestamps", !Boolean(userSettings.showTimestamps));
    document.querySelectorAll(".msg.bot .bubble").forEach((bubble) => {
      syncAssistantBubbleActionButtons(bubble);
    });
  }
  refreshIncognitoChatTheme();
  renderWorkspaceTabNavigation();
  syncWorkspaceTabVisibility({ forceHide: Boolean(appRoot && appRoot.classList.contains("home-mode")) });
  applySidebarSectionOrder();
  applyTopbarActionOrder();
  applyMainSectionOrder();
  updateChatWelcomeVisibility();
  const currentWorkspaceSession = getWorkspaceCurrentSession();
  if (currentWorkspaceSession && currentWorkspaceSession.workspace) {
    updateWorkspaceTabButtons(currentWorkspaceSession.workspace.activeTab);
  }

  clientLimits.typingSpeedMs = normalizeClientLimit(
    userSettings.typingSpeed,
    clientLimits.typingSpeedMs,
    0,
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
  trimSessionsToSettingLimit();

  if (syncModelDefaults) {
    DEFAULT_MODEL_ID = resolveDefaultModelId(MODEL_OPTIONS, getPreferredDefaultModelId() || DEFAULT_MODEL_ID);
    syncModelSelectorWithCurrentSession();
    syncModelPanelWithCurrentSession();
  }
}

function persistUserSettingsPatch(patch = {}, options = {}) {
  const { syncModelDefaults = false } = options;
  try {
    const nextSettings = buildSanitizedUserSettings({ ...loadUserSettingsFromStorage(), ...patch });
    localStorage.setItem(USER_SETTINGS_KEY, JSON.stringify(nextSettings));
  } catch {
    userSettings = buildSanitizedUserSettings({ ...userSettings, ...patch });
  }
  applyUserSettingsToRuntime({ syncModelDefaults });
}

function isMemoryEnabled() {
  return Boolean(userSettings.memoryEnabled) && !Boolean(userSettings.incognitoMode);
}

function isProjectMemoryEnabled() {
  return Boolean(userSettings.projectMemoryEnabled) && !Boolean(userSettings.incognitoMode);
}

function isAutoLearnEnabled() {
  return Boolean(userSettings.autoLearn) && isMemoryEnabled();
}

function isIncognitoModeEnabled() {
  return Boolean(userSettings.incognitoMode);
}

function isAskBeforeSensitiveSendEnabled() {
  return Boolean(userSettings.askBeforeSensitiveSend);
}

function shouldShowEvidenceButtons() {
  return userSettings.showEvidenceButtons !== false;
}

function refreshIncognitoChatTheme() {
  if (!appRoot) return;
  appRoot.classList.toggle("incognito-chat-theme", isIncognitoModeEnabled());
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
  clientLimits.maxImageAttachmentBytes = normalizeClientLimit(
    rawLimits.max_image_attachment_bytes,
    clientLimits.maxImageAttachmentBytes,
    1,
    64 * 1024 * 1024
  );
  clientLimits.maxTotalImageBytes = normalizeClientLimit(
    rawLimits.max_total_image_bytes,
    clientLimits.maxTotalImageBytes,
    1,
    128 * 1024 * 1024
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
    // Apply server-provided thinking quota (authoritative â€” replaces any stale UI state)
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
      SERVER_DOWN_MESSAGES_PRIMARY[Math.floor(Math.random() * SERVER_DOWN_MESSAGES_PRIMARY.length)];
    serverDownMessage.textContent = randomMessage;
  }
  if (serverDownMeta) {
    serverDownMeta.textContent = "We couldn't reach ROK right now. Give it a minute, then try again.";
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
    ? `Hi, ${name}. ROK is ready - tell me what you are working on.`
    : "ROK is ready - tell me what you are working on.";
  addMessage("system", text);
  hasShownReadyMessage = true;
}

function loadSidebarCollapsedFromStorage() {
  try {
    const raw = localStorage.getItem(LOCAL_SIDEBAR_COLLAPSED_KEY);
    if (raw == null) return true;
    return raw === "1";
  } catch {
    return true;
  }
}

function hasSavedSidebarCollapsedPreference() {
  try {
    return localStorage.getItem(LOCAL_SIDEBAR_COLLAPSED_KEY) != null;
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
    const nextSettings = { ...loadUserSettingsFromStorage(), sidebarStartsCollapsed: isSidebarCollapsed };
    userSettings = { ...userSettings, sidebarStartsCollapsed: isSidebarCollapsed };
    try {
      localStorage.setItem(USER_SETTINGS_KEY, JSON.stringify(nextSettings));
    } catch {
      // Ignore storage write failures.
    }
  }
}

function showHomeScreen() {
  if (isOnboardingModalVisible()) {
    closeOnboardingModal();
  }
  storeWorkspaceDraftsFromWindows();
  flushPendingWorkspaceSave();
  closeMobileSidebarIfNeeded();
  wasWorkspaceTabActive = false;
  hideServerDownScreen();
  if (homeScreen) {
    homeScreen.hidden = false;
    homeScreen.scrollTop = 0;
  }
  if (mainPanel) {
    mainPanel.scrollTop = 0;
  }
  startHomeHeroTyping();
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
  syncWorkspaceTabVisibility({ forceHide: true });
  if (workspacePanel) {
    workspacePanel.hidden = true;
  }
  if (workspaceAssistantPanel) {
    workspaceAssistantPanel.hidden = true;
  }
  if (composerWrap) {
    composerWrap.hidden = true;
  }
  refreshLiveLayoutEditTargets();
}

function hideHomeScreen(options = {}) {
  const { renderWorkspace = true, showReadyMessage = false } = options;
  stopHomeHeroTyping();
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
  syncWorkspaceTabVisibility();
  if (composerWrap) {
    composerWrap.hidden = false;
  }
  if (workspacePanel) {
    workspacePanel.hidden = true;
  }
  if (renderWorkspace) {
    renderWorkspaceUI({ focus: false });
  }
  if (showReadyMessage) {
    ensureReadyMessage();
  }
  refreshLiveLayoutEditTargets();
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
  if (!Boolean(userSettings.autoScroll)) return;
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

function normalizeSandboxMessages(rawMessages) {
  return sanitizeMessages(rawMessages).slice(-32);
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

function cloneSandboxFiles(files = []) {
  return (Array.isArray(files) ? files : [])
    .map((item, index) => normalizeSandboxFile(item, index))
    .filter(Boolean);
}

function normalizeSandboxUndoSnapshot(rawSnapshot) {
  if (!rawSnapshot || typeof rawSnapshot !== "object") {
    return null;
  }

  const files = cloneSandboxFiles(rawSnapshot.files);
  const rawSelectedFileId = typeof rawSnapshot.selectedFileId === "string" ? rawSnapshot.selectedFileId : "";
  const selectedFileId = files.some((item) => item.id === rawSelectedFileId)
    ? rawSelectedFileId
    : files[0]?.id || "";

  return {
    files,
    selectedFileId,
    appliedAt: Number.isFinite(Number(rawSnapshot.appliedAt)) ? Number(rawSnapshot.appliedAt) : 0,
    summary: typeof rawSnapshot.summary === "string" ? rawSnapshot.summary.trim() : "",
    changeCount: Number.isFinite(Number(rawSnapshot.changeCount)) ? Math.max(0, Number(rawSnapshot.changeCount)) : 0
  };
}

function createDefaultSandbox() {
  return {
    files: [],
    selectedFileId: "",
    analysis: createDefaultSandboxAnalysis(),
    messages: [],
    statusText: "Idle",
    lastAppliedSnapshot: null
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
    messages: normalizeSandboxMessages(rawSandbox.messages),
    lastAppliedSnapshot: normalizeSandboxUndoSnapshot(rawSandbox.lastAppliedSnapshot),
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

function sanitizeMemoryText(value, maxLength = LOCAL_MEMORY_MAX_FACT_CHARS) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (!text) return "";
  return text.slice(0, maxLength);
}

function normalizeMemoryKind(rawKind = "fact") {
  const normalized = String(rawKind || "").trim().toLowerCase();
  if (["preference", "rule", "fact", "project", "decision", "correction"].includes(normalized)) {
    return normalized;
  }
  return "fact";
}

function normalizeMemoryEntry(rawEntry, scope = "global") {
  if (!rawEntry || typeof rawEntry !== "object") return null;
  const fact = sanitizeMemoryText(rawEntry.fact, LOCAL_MEMORY_MAX_FACT_CHARS);
  if (!fact) return null;
  const nowIso = new Date().toISOString();
  return {
    id: sanitizeMemoryText(rawEntry.id, 64) || ((window.crypto && window.crypto.randomUUID) ? window.crypto.randomUUID() : (`memory-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`)),
    fact,
    kind: normalizeMemoryKind(rawEntry.kind),
    scope: scope === "project" ? "project" : "global",
    source: sanitizeMemoryText(rawEntry.source, 80) || "manual",
    createdAt: sanitizeMemoryText(rawEntry.createdAt || rawEntry.created_at, 64) || nowIso,
    updatedAt: sanitizeMemoryText(rawEntry.updatedAt || rawEntry.updated_at, 64) || nowIso
  };
}

function createDefaultSessionMemory() {
  return {
    projectEntries: []
  };
}

function normalizeSessionMemory(rawMemory) {
  const fallback = createDefaultSessionMemory();
  if (!rawMemory || typeof rawMemory !== "object") {
    return fallback;
  }
  const entries = Array.isArray(rawMemory.projectEntries)
    ? rawMemory.projectEntries.map((item) => normalizeMemoryEntry(item, "project")).filter(Boolean)
    : Array.isArray(rawMemory.entries)
    ? rawMemory.entries.map((item) => normalizeMemoryEntry(item, "project")).filter(Boolean)
    : [];
  return {
    projectEntries: entries.slice(-LOCAL_MEMORY_MAX_ENTRIES)
  };
}

function ensureSessionWorkspace(session) {
  if (!session) {
    return createDefaultWorkspace();
  }
  const workspace = session.workspace;
  const sandbox = workspace && workspace.sandbox;
  if (
    !workspace
    || typeof workspace !== "object"
    || !WORKSPACE_TAB_KEYS.includes(String(workspace.activeTab || "").toLowerCase())
    || !sandbox
    || typeof sandbox !== "object"
    || !Array.isArray(sandbox.files)
    || !sandbox.analysis
    || !Array.isArray(sandbox.messages)
  ) {
    session.workspace = normalizeWorkspace(session.workspace);
  }
  return session.workspace;
}

function ensureSessionMemory(session) {
  if (!session || !session.memory || typeof session.memory !== "object" || !Array.isArray(session.memory.projectEntries)) {
    session.memory = normalizeSessionMemory(session && session.memory);
  }
  return session ? session.memory : createDefaultSessionMemory();
}

function normalizeSessionModel(rawModel) {
  const candidate = resolveModelAlias(rawModel);
  if (candidate === HYPERION_MODEL_ID) {
    return getCustomOllamaApiKey() ? candidate : DEFAULT_MODEL_ID;
  }
  if (candidate && isCustomOllamaModelId(candidate)) {
    return candidate;
  }
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
  const current = ensureActiveSession();
  if (!current) return null;
  ensureSessionWorkspace(current);
  ensureSessionMemory(current);
  ensureSessionModel(current);
  return current;
}

function isWorkspaceSessionActive() {
  const current = getWorkspaceCurrentSession();
  if (!current) return false;
  return current.workspace.activeTab === "workspace" && WORKSPACE_TAB_KEYS.includes("workspace");
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
  const sandbox = current.workspace && current.workspace.sandbox;
  if (
    !sandbox
    || typeof sandbox !== "object"
    || !Array.isArray(sandbox.files)
    || !sandbox.analysis
    || !Array.isArray(sandbox.messages)
  ) {
    current.workspace.sandbox = normalizeSandbox(current.workspace.sandbox);
  }
  return current.workspace.sandbox;
}

function getSandboxConversationMessages(sandbox = getCurrentSandboxState()) {
  if (!sandbox || !Array.isArray(sandbox.messages)) return [];
  return normalizeSandboxMessages(sandbox.messages);
}

function pushSandboxConversationMessage(role, content) {
  const sandbox = getCurrentSandboxState();
  const normalizedRole = role === "assistant" ? "assistant" : "user";
  const text = typeof content === "string" ? content.trim() : "";
  if (!text) return;
  const nextMessages = getSandboxConversationMessages(sandbox);
  nextMessages.push({ role: normalizedRole, content: text });
  sandbox.messages = nextMessages.slice(-32);
}

function getActiveSandboxAnalysis(sandbox = getCurrentSandboxState()) {
  const sessionId = currentSessionId || "";
  if (sessionId && sandboxAnalysisMemory.has(sessionId)) {
    return normalizeSandboxAnalysis(sandboxAnalysisMemory.get(sessionId));
  }
  return normalizeSandboxAnalysis(sandbox && sandbox.analysis);
}

function setActiveSandboxAnalysis(analysis) {
  const normalized = normalizeSandboxAnalysis(analysis);
  const sandbox = getCurrentSandboxState();
  sandbox.analysis = normalized;
  if (currentSessionId) {
    sandboxAnalysisMemory.set(currentSessionId, normalized);
  }
  return normalized;
}

function clearActiveSandboxAnalysisMemory() {
  if (currentSessionId) {
    sandboxAnalysisMemory.delete(currentSessionId);
  }
}

function getSelectedSandboxFile(sandbox = getCurrentSandboxState()) {
  if (!sandbox || !Array.isArray(sandbox.files)) return null;
  return sandbox.files.find((item) => item.id === sandbox.selectedFileId) || sandbox.files[0] || null;
}

function getUniqueSandboxPaths(paths = []) {
  const seen = new Set();
  const next = [];
  for (const rawPath of paths) {
    const path = normalizeSandboxFilePath(rawPath);
    const key = path.toLowerCase();
    if (!path || seen.has(key)) continue;
    seen.add(key);
    next.push(path);
  }
  return next;
}

function getSandboxFileName(path = "") {
  const normalized = normalizeSandboxFilePath(path);
  if (!normalized) return "";
  const segments = normalized.split("/");
  return segments[segments.length - 1] || normalized;
}

function getSandboxPromptSummary(promptText = "") {
  const normalized = String(promptText || "").replace(/\s+/g, " ").trim();
  if (!normalized) return "Understanding your request.";
  if (normalized.length <= 110) return normalized;
  return `${normalized.slice(0, 107).trim()}...`;
}

function formatSandboxActivityDuration(ms) {
  const safeMs = Math.max(0, Number(ms) || 0);
  const totalSeconds = Math.round(safeMs / 1000);
  if (totalSeconds < 60) return `${totalSeconds}s`;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}m ${seconds}s`;
}

function inferSandboxActivityTargetPaths(promptText, sandbox = getCurrentSandboxState()) {
  const promptLower = String(promptText || "").toLowerCase();
  const targets = [];
  const selectedFile = getSelectedSandboxFile(sandbox);
  const addPath = (rawPath) => {
    const path = normalizeSandboxFilePath(rawPath);
    if (!path) return;
    if (targets.some((item) => item.toLowerCase() === path.toLowerCase())) return;
    targets.push(path);
  };

  if (selectedFile) {
    const selectedPath = selectedFile.path.toLowerCase();
    const selectedName = getSandboxFileName(selectedFile.path).toLowerCase();
    if (
      !promptLower
      || promptLower.includes(selectedPath)
      || (selectedName.length >= 5 && selectedName.includes(".") && promptLower.includes(selectedName))
    ) {
      addPath(selectedFile.path);
    }
  }

  if (sandbox && Array.isArray(sandbox.files) && promptLower) {
    sandbox.files.forEach((file) => {
      const pathLower = String(file.path || "").toLowerCase();
      const fileName = getSandboxFileName(file.path).toLowerCase();
      if (
        promptLower.includes(pathLower)
        || (fileName.length >= 5 && fileName.includes(".") && promptLower.includes(fileName))
      ) {
        addPath(file.path);
      }
    });
  }

  if (!targets.length && selectedFile) {
    addPath(selectedFile.path);
  }
  if (!targets.length && sandbox && Array.isArray(sandbox.files) && sandbox.files.length <= 3) {
    sandbox.files.slice(0, 2).forEach((file) => addPath(file.path));
  }

  return targets.slice(0, 4);
}

function hasRunningSandboxActivities() {
  for (const activity of sandboxActivityMemory.values()) {
    if (activity && activity.state === "running") {
      return true;
    }
  }
  return false;
}

function stopSandboxActivityTicker() {
  if (sandboxActivityTimer) {
    clearInterval(sandboxActivityTimer);
    sandboxActivityTimer = null;
  }
}

function ensureSandboxActivityTicker() {
  if (sandboxActivityTimer) return;
  sandboxActivityTimer = setInterval(() => {
    if (!hasRunningSandboxActivities()) {
      stopSandboxActivityTicker();
      return;
    }
    if (isSandboxSessionActive()) {
      renderSandboxUI();
    }
  }, 900);
}

function getActiveSandboxActivity() {
  if (!currentSessionId) return null;
  const activity = sandboxActivityMemory.get(currentSessionId);
  return activity && typeof activity === "object" ? activity : null;
}

function setActiveSandboxActivity(activity) {
  if (!currentSessionId || !activity || typeof activity !== "object") {
    return activity || null;
  }
  sandboxActivityMemory.set(currentSessionId, activity);
  if (activity.state === "running") {
    ensureSandboxActivityTicker();
  } else if (!hasRunningSandboxActivities()) {
    stopSandboxActivityTicker();
  }
  return activity;
}

function clearActiveSandboxActivity() {
  if (currentSessionId) {
    sandboxActivityMemory.delete(currentSessionId);
  }
  if (!hasRunningSandboxActivities()) {
    stopSandboxActivityTicker();
  }
}

function getSandboxExpandedChangeStorageKey() {
  return currentSessionId || "__sandbox_default__";
}

function getSandboxExpandedChangePaths() {
  const rawPaths = sandboxExpandedChangeMemory.get(getSandboxExpandedChangeStorageKey());
  return Array.isArray(rawPaths) ? rawPaths.slice() : [];
}

function setSandboxExpandedChangePaths(paths = []) {
  const normalized = [];
  const seen = new Set();

  for (const rawPath of paths) {
    const path = normalizeSandboxFilePath(rawPath);
    const key = path.toLowerCase();
    if (!path || seen.has(key)) {
      continue;
    }
    seen.add(key);
    normalized.push(key);
  }

  const storageKey = getSandboxExpandedChangeStorageKey();
  if (normalized.length) {
    sandboxExpandedChangeMemory.set(storageKey, normalized);
  } else {
    sandboxExpandedChangeMemory.delete(storageKey);
  }
  return normalized;
}

function clearSandboxExpandedChangePaths() {
  sandboxExpandedChangeMemory.delete(getSandboxExpandedChangeStorageKey());
}

function toggleSandboxExpandedChangePath(path) {
  const normalizedPath = normalizeSandboxFilePath(path).toLowerCase();
  if (!normalizedPath) {
    return getSandboxExpandedChangePaths();
  }
  const currentPaths = getSandboxExpandedChangePaths();
  if (currentPaths.includes(normalizedPath)) {
    return setSandboxExpandedChangePaths(currentPaths.filter((item) => item !== normalizedPath));
  }
  return setSandboxExpandedChangePaths([...currentPaths, normalizedPath]);
}

function getSandboxUndoSnapshot(sandbox = getCurrentSandboxState()) {
  return normalizeSandboxUndoSnapshot(sandbox && sandbox.lastAppliedSnapshot);
}

function setSandboxUndoSnapshot(snapshot, sandbox = getCurrentSandboxState()) {
  if (!sandbox) {
    return null;
  }
  sandbox.lastAppliedSnapshot = normalizeSandboxUndoSnapshot(snapshot);
  return sandbox.lastAppliedSnapshot;
}

function clearSandboxUndoSnapshot(sandbox = getCurrentSandboxState()) {
  if (sandbox) {
    sandbox.lastAppliedSnapshot = null;
  }
}

function startSandboxActivity(promptText, sandbox = getCurrentSandboxState()) {
  const prompt = String(promptText || SANDBOX_DEFAULT_PROMPT).trim() || SANDBOX_DEFAULT_PROMPT;
  const selectedFile = getSelectedSandboxFile(sandbox);
  return setActiveSandboxActivity({
    state: "running",
    startedAt: Date.now(),
    completedAt: 0,
    prompt,
    promptSummary: getSandboxPromptSummary(prompt),
    fileCount: Array.isArray(sandbox.files) ? sandbox.files.length : 0,
    targetPaths: inferSandboxActivityTargetPaths(prompt, sandbox),
    selectedPath: selectedFile ? selectedFile.path : "",
    summary: "",
    errorMessage: "",
    planFiles: []
  });
}

function completeSandboxActivity(analysis, sandbox = getCurrentSandboxState()) {
  const normalized = normalizeSandboxAnalysis(analysis);
  const current = getActiveSandboxActivity();
  const prompt = (current && current.prompt) || normalized.lastPrompt || SANDBOX_DEFAULT_PROMPT;
  const selectedFile = getSelectedSandboxFile(sandbox);
  return setActiveSandboxActivity({
    state: "success",
    startedAt: current && Number.isFinite(current.startedAt) ? current.startedAt : Date.now(),
    completedAt: Date.now(),
    prompt,
    promptSummary: getSandboxPromptSummary(prompt),
    fileCount: Array.isArray(sandbox.files) ? sandbox.files.length : 0,
    targetPaths: getUniqueSandboxPaths([
      ...((current && Array.isArray(current.targetPaths)) ? current.targetPaths : []),
      ...normalized.files.map((item) => item.path)
    ]),
    selectedPath: (current && current.selectedPath) || (selectedFile ? selectedFile.path : ""),
    summary: normalized.summary || "",
    errorMessage: "",
    planFiles: normalized.files
  });
}

function failSandboxActivity(error, sandbox = getCurrentSandboxState()) {
  const current = getActiveSandboxActivity();
  const stopped = error && error.name === "AbortError";
  const prompt = (current && current.prompt) || SANDBOX_DEFAULT_PROMPT;
  const selectedFile = getSelectedSandboxFile(sandbox);
  return setActiveSandboxActivity({
    state: stopped ? "stopped" : "error",
    startedAt: current && Number.isFinite(current.startedAt) ? current.startedAt : Date.now(),
    completedAt: Date.now(),
    prompt,
    promptSummary: getSandboxPromptSummary(prompt),
    fileCount: current && Number.isFinite(current.fileCount)
      ? current.fileCount
      : Array.isArray(sandbox.files) ? sandbox.files.length : 0,
    targetPaths: getUniqueSandboxPaths(
      (current && Array.isArray(current.targetPaths) && current.targetPaths.length)
        ? current.targetPaths
        : inferSandboxActivityTargetPaths(prompt, sandbox)
    ),
    selectedPath: (current && current.selectedPath) || (selectedFile ? selectedFile.path : ""),
    summary: "",
    errorMessage: stopped
      ? "ROK stopped before the plan finished."
      : String((error && error.message) || "ROK CODE could not finish this request."),
    planFiles: current && Array.isArray(current.planFiles) ? current.planFiles : []
  });
}

function buildSandboxActivitySnapshot(activity = getActiveSandboxActivity(), sandbox = getCurrentSandboxState()) {
  if (!activity || typeof activity !== "object") return null;

  const state = String(activity.state || "running");
  const prompt = String(activity.prompt || SANDBOX_DEFAULT_PROMPT).trim() || SANDBOX_DEFAULT_PROMPT;
  const promptSummary = activity.promptSummary || getSandboxPromptSummary(prompt);
  const fileCount = Number.isFinite(activity.fileCount)
    ? activity.fileCount
    : Array.isArray(sandbox.files) ? sandbox.files.length : 0;
  const planFiles = Array.isArray(activity.planFiles)
    ? activity.planFiles.map((item) => normalizeSandboxPlanFile(item)).filter(Boolean)
    : [];
  const targetPaths = getUniqueSandboxPaths([
    ...(Array.isArray(activity.targetPaths) ? activity.targetPaths : []),
    ...planFiles.map((item) => item.path)
  ]).slice(0, 4);
  const primaryPath = targetPaths[0] || activity.selectedPath || "";
  const createIntent = /\b(create|make|build|scaffold|add|start|new(?:\s+file|\s+component|\s+page)?)\b/i.test(prompt);
  const fileCountLabel = `${fileCount} file${fileCount === 1 ? "" : "s"}`;
  const runningSteps = [
    {
      label: fileCount ? `Reading ${fileCountLabel}` : "Reading your request",
      detail: fileCount
        ? "Loading the current ROK CODE workspace into the planner."
        : "No code files yet, so ROK is using your request and uploads."
    },
    {
      label: primaryPath ? `Inspecting ${primaryPath}` : "Inspecting your request",
      detail: promptSummary
    },
    {
      label: primaryPath
        ? `Drafting changes for ${primaryPath}`
        : createIntent
        ? "Planning new files"
        : "Drafting file changes",
      detail: targetPaths.length > 1
        ? `Likely touching ${targetPaths.length} files in this pass.`
        : "Turning the request into concrete code edits."
    },
    {
      label: "Preparing apply-ready changes",
      detail: "Formatting the plan so you can review it and apply it in ROK CODE."
    }
  ];

  const endTime = state === "running" ? Date.now() : Number(activity.completedAt) || Date.now();
  const elapsedMs = Math.max(0, endTime - (Number(activity.startedAt) || endTime));
  const elapsedText = formatSandboxActivityDuration(elapsedMs);

  if (state === "success") {
    const planCount = planFiles.length;
    const planSummary = planFiles.length
      ? planFiles
          .slice(0, 3)
          .map((item) => `${item.action} ${item.path}`)
          .join(", ")
      : "No file changes were needed.";
    return {
      state,
      title: planCount ? `Plan ready for ${planCount} file${planCount === 1 ? "" : "s"}` : "Plan ready",
      status: "Ready to apply",
      detail: activity.summary || "ROK finished building the file-by-file plan.",
      elapsedText,
      chipText: "Plan ready",
      changeText: planCount ? `${planCount} AI change${planCount === 1 ? "" : "s"}` : "No AI changes",
      targetPaths,
      planFiles,
      steps: [
        {
          label: fileCount ? `Reviewed ${fileCountLabel}` : "Reviewed your request",
          detail: fileCount ? "Used the current ROK CODE workspace as source context." : "Worked from the request and any uploaded context.",
          state: "done"
        },
        {
          label: targetPaths.length ? `Mapped ${targetPaths.length} target file${targetPaths.length === 1 ? "" : "s"}` : "Mapped the request",
          detail: targetPaths.length ? targetPaths.join(", ") : promptSummary,
          state: "done"
        },
        {
          label: planCount ? `Built ${planCount} file change${planCount === 1 ? "" : "s"}` : "Reviewed without code changes",
          detail: planSummary,
          state: "done"
        },
        {
          label: "Ready in ROK CODE",
          detail: planCount
            ? "Use Apply AI Changes to write these edits into the workspace."
            : "Ask for another pass if you want ROK to change specific files.",
          state: "done"
        }
      ]
    };
  }

  if (state === "error" || state === "stopped") {
    const stopped = state === "stopped";
    let failedIndex = 1;
    if (elapsedMs > 3200) failedIndex = 2;
    if (elapsedMs > 5400) failedIndex = 3;
    return {
      state,
      title: stopped ? "ROK stopped" : "ROK hit an error",
      status: stopped ? "Generation stopped" : "Generation failed",
      detail: activity.errorMessage || (stopped ? "ROK stopped before the plan finished." : "ROK CODE could not finish this request."),
      elapsedText,
      chipText: stopped ? "Stopped" : "ROK CODE error",
      changeText: "No AI changes",
      targetPaths,
      planFiles,
      steps: runningSteps.map((step, index) => ({
        ...step,
        state: index < failedIndex ? "done" : index === failedIndex ? state : "pending"
      }))
    };
  }

  let activeIndex = 0;
  if (elapsedMs > 1400) activeIndex = 1;
  if (elapsedMs > 3200) activeIndex = 2;
  if (elapsedMs > 5400) activeIndex = 3;
  const activeStep = runningSteps[activeIndex];

  return {
    state: "running",
    title: primaryPath ? `ROK is working on ${primaryPath}` : "ROK is working in ROK CODE",
    status: activeStep.label,
    detail: activeStep.detail,
    elapsedText,
    chipText: activeStep.label,
    changeText: "ROK working",
    targetPaths,
    planFiles,
    steps: runningSteps.map((step, index) => ({
      ...step,
      state: index < activeIndex ? "done" : index === activeIndex ? "active" : "pending"
    }))
  };
}

function getSandboxFileIndicatorMap(sandbox = getCurrentSandboxState(), analysis = getActiveSandboxAnalysis(sandbox), activitySnapshot = null) {
  const indicators = new Map();
  if (activitySnapshot && activitySnapshot.state === "running") {
    activitySnapshot.targetPaths.forEach((path, index) => {
      indicators.set(path.toLowerCase(), {
        label: index === 0 ? "working" : "queued",
        tone: index === 0 ? "working" : "queued"
      });
    });
    return indicators;
  }

  const normalized = normalizeSandboxAnalysis(analysis);
  normalized.files.forEach((change) => {
    indicators.set(change.path.toLowerCase(), {
      label: change.action === "delete" ? "delete" : change.action === "create" ? "new" : "AI update",
      tone: change.action === "delete" ? "delete" : change.action === "create" ? "create" : "update"
    });
  });
  return indicators;
}

function buildSandboxActivityChatText(activitySnapshot) {
  if (!activitySnapshot) {
    return "Analyzing ROK CODE...";
  }
  const headline = escapeMarkdown(activitySnapshot.title || "ROK is working in ROK CODE");
  const statusLine = [activitySnapshot.status, activitySnapshot.detail].filter(Boolean).map((item) => escapeMarkdown(item)).join(" - ");
  const stepLines = Array.isArray(activitySnapshot.steps) && activitySnapshot.steps.length
    ? activitySnapshot.steps
        .map((step) => {
          const prefix = step.state === "done"
            ? "Done"
            : step.state === "active"
            ? "Now"
            : step.state === "error"
            ? "Issue"
            : step.state === "stopped"
            ? "Stopped"
            : "Next";
          const detail = step.detail ? ` - ${escapeMarkdown(step.detail)}` : "";
          return `- ${prefix}: ${escapeMarkdown(step.label)}${detail}`;
        })
        .join("\n")
    : "- Now: ROK is preparing your file plan.";
  return `**${headline}**\n\n${statusLine || "ROK is preparing your file plan."}\n\n${stepLines}`;
}

function renderSandboxActivityUI(activitySnapshot) {
  if (!sandboxActivityShell || !sandboxActivityTitle || !sandboxActivityStatus || !sandboxActivityElapsed || !sandboxActivityList) {
    return;
  }
  if (!activitySnapshot) {
    sandboxActivityShell.hidden = true;
    sandboxActivityShell.removeAttribute("data-state");
    sandboxActivityList.textContent = "";
    return;
  }

  sandboxActivityShell.hidden = false;
  sandboxActivityShell.dataset.state = activitySnapshot.state || "running";
  sandboxActivityTitle.textContent = activitySnapshot.title || "ROK is working";
  sandboxActivityStatus.textContent = activitySnapshot.status || activitySnapshot.detail || "Preparing your code plan.";
  sandboxActivityElapsed.textContent = activitySnapshot.elapsedText || "0s";
  sandboxActivityList.innerHTML = (activitySnapshot.steps || [])
    .map((step) => {
      const badgeLabel = step.state === "done"
        ? "Done"
        : step.state === "active"
        ? "Now"
        : step.state === "error"
        ? "Issue"
        : step.state === "stopped"
        ? "Stopped"
        : "Next";
      return `
        <div class="sandbox-activity-step" data-state="${escapeHtml(step.state || "pending")}">
          <div class="sandbox-activity-step-head">
            <span class="sandbox-activity-step-dot" aria-hidden="true"></span>
            <span class="sandbox-activity-step-title">${escapeHtml(step.label || "")}</span>
            <span class="sandbox-activity-step-badge">${escapeHtml(badgeLabel)}</span>
          </div>
          <div class="sandbox-activity-step-detail">${escapeHtml(step.detail || "")}</div>
        </div>
      `;
    })
    .join("");
}

function getSandboxStarterPrompt(starterId = "") {
  const key = String(starterId || "").trim().toLowerCase();
  return key && SANDBOX_STARTER_PROMPTS[key] ? SANDBOX_STARTER_PROMPTS[key] : null;
}

function buildSandboxEmptyStateMarkup({ title = "", body = "", actions = [], note = "" } = {}) {
  const buttonsHtml = Array.isArray(actions) && actions.length
    ? `
      <div class="sandbox-empty-actions">
        ${actions.map((action) => {
          const label = escapeHtml(action.label || "Continue");
          const toneAttr = action.tone ? ` data-tone="${escapeHtml(action.tone)}"` : "";
          if (action.kind === "starter") {
            return `<button type="button" class="sandbox-empty-btn"${toneAttr} data-sandbox-starter-id="${escapeHtml(action.id || "")}">${label}</button>`;
          }
          return `<button type="button" class="sandbox-empty-btn"${toneAttr} data-sandbox-empty-action="${escapeHtml(action.id || "")}">${label}</button>`;
        }).join("")}
      </div>
    `
    : "";
  const noteHtml = note ? `<div class="sandbox-empty-note">${escapeHtml(note)}</div>` : "";
  return `
    <div class="sandbox-empty-state sandbox-empty-state-rich">
      <div class="sandbox-empty-title">${escapeHtml(title)}</div>
      <p class="sandbox-empty-copy">${escapeHtml(body)}</p>
      ${buttonsHtml}
      ${noteHtml}
    </div>
  `;
}

function focusSandboxPromptWithStarter(starterId, options = {}) {
  const { submit = false } = options;
  const starter = getSandboxStarterPrompt(starterId);
  if (!starter || !sandboxChatInput) return false;
  sandboxChatDraft = starter.prompt;
  sandboxChatInput.value = starter.prompt;
  autoResizeSandboxChatInput();
  setSandboxStatus(`${starter.label} prompt ready`, "idle", { save: false });
  sandboxChatInput.focus();
  try {
    sandboxChatInput.setSelectionRange(sandboxChatInput.value.length, sandboxChatInput.value.length);
  } catch {}
  if (submit) {
    submitSandboxChatRequest();
  }
  return true;
}

function handleSandboxEmptyStateAction(target) {
  if (!(target instanceof Element)) return false;
  const starterBtn = target.closest("[data-sandbox-starter-id]");
  if (starterBtn instanceof HTMLElement) {
    return focusSandboxPromptWithStarter(starterBtn.getAttribute("data-sandbox-starter-id"));
  }
  const actionBtn = target.closest("[data-sandbox-empty-action]");
  if (!(actionBtn instanceof HTMLElement)) return false;
  const actionId = String(actionBtn.getAttribute("data-sandbox-empty-action") || "").trim().toLowerCase();
  if (!actionId) return false;
  if (actionId === "upload") {
    if (sandboxFileInput) sandboxFileInput.click();
    return true;
  }
  if (actionId === "new-file") {
    createSandboxFileFromEditor();
    return true;
  }
  return false;
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

function getTextLinesForDiff(text = "") {
  const value = String(text || "").replace(/\r\n/g, "\n");
  if (!value) return [];
  const lines = value.split("\n");
  if (lines.length && lines[lines.length - 1] === "") {
    lines.pop();
  }
  return lines;
}

function getSandboxDiffWindow(beforeText = "", afterText = "") {
  const beforeLines = getTextLinesForDiff(beforeText);
  const afterLines = getTextLinesForDiff(afterText);

  let prefix = 0;
  while (
    prefix < beforeLines.length
    && prefix < afterLines.length
    && beforeLines[prefix] === afterLines[prefix]
  ) {
    prefix += 1;
  }

  let beforeEnd = beforeLines.length - 1;
  let afterEnd = afterLines.length - 1;
  while (
    beforeEnd >= prefix
    && afterEnd >= prefix
    && beforeLines[beforeEnd] === afterLines[afterEnd]
  ) {
    beforeEnd -= 1;
    afterEnd -= 1;
  }

  return {
    beforeLines,
    afterLines,
    prefix,
    beforeEnd,
    afterEnd
  };
}

function getLineChangeStats(beforeText = "", afterText = "") {
  const {
    beforeLines,
    afterLines,
    prefix,
    beforeEnd,
    afterEnd
  } = getSandboxDiffWindow(beforeText, afterText);

  const beforeCore = beforeLines.slice(prefix, beforeEnd + 1);
  const afterCore = afterLines.slice(prefix, afterEnd + 1);

  if (!beforeCore.length && !afterCore.length) {
    return { additions: 0, deletions: 0 };
  }
  if (!beforeCore.length) {
    return { additions: afterCore.length, deletions: 0 };
  }
  if (!afterCore.length) {
    return { additions: 0, deletions: beforeCore.length };
  }

  if (beforeCore.length * afterCore.length > 160000) {
    return { additions: afterCore.length, deletions: beforeCore.length };
  }

  const cols = afterCore.length + 1;
  let previous = new Array(cols).fill(0);
  let current = new Array(cols).fill(0);
  for (let i = 1; i <= beforeCore.length; i += 1) {
    current[0] = 0;
    for (let j = 1; j <= afterCore.length; j += 1) {
      current[j] = beforeCore[i - 1] === afterCore[j - 1]
        ? previous[j - 1] + 1
        : Math.max(previous[j], current[j - 1]);
    }
    const swap = previous;
    previous = current;
    current = swap;
  }

  const commonLines = previous[afterCore.length] || 0;
  return {
    additions: Math.max(0, afterCore.length - commonLines),
    deletions: Math.max(0, beforeCore.length - commonLines)
  };
}

function getSandboxLineCountLabel(count = 0) {
  const total = Math.max(0, Number(count) || 0);
  return `${total} line${total === 1 ? "" : "s"}`;
}

function formatSandboxPreviewLines(lines = [], startIndex = 0, maxLines = SANDBOX_CHANGE_PREVIEW_MAX_LINES) {
  const safeLines = Array.isArray(lines) ? lines : [];
  if (!safeLines.length) {
    return {
      text: "(empty file)",
      clipped: false,
      shownLines: 0
    };
  }

  const lineNumberWidth = String(startIndex + safeLines.length).length;
  const formatLine = (line, index) => `${String(startIndex + index + 1).padStart(lineNumberWidth, " ")} | ${line}`;

  if (safeLines.length <= maxLines) {
    return {
      text: safeLines.map((line, index) => formatLine(line, index)).join("\n"),
      clipped: false,
      shownLines: safeLines.length
    };
  }

  const headCount = Math.max(4, Math.ceil(maxLines / 2));
  const tailCount = Math.max(3, maxLines - headCount);
  const omittedCount = Math.max(0, safeLines.length - headCount - tailCount);
  const head = safeLines.slice(0, headCount).map((line, index) => formatLine(line, index));
  const tailStartIndex = safeLines.length - tailCount;
  const tail = safeLines.slice(-tailCount).map((line, index) => formatLine(line, tailStartIndex + index));
  const marker = `${" ".repeat(lineNumberWidth)} | ... ${omittedCount} more lines ...`;

  return {
    text: [...head, marker, ...tail].join("\n"),
    clipped: true,
    shownLines: safeLines.length
  };
}

function getSandboxPreviewRangeText(startIndex = 0, lineCount = 0, totalLineCount = 0) {
  if (!lineCount || !totalLineCount) {
    return getSandboxLineCountLabel(totalLineCount);
  }
  const startLine = startIndex + 1;
  const endLine = startIndex + lineCount;
  return `lines ${startLine}-${endLine} of ${totalLineCount}`;
}

function buildSandboxPreviewPane(label, lines, startIndex, totalLineCount, tone = "current") {
  const preview = formatSandboxPreviewLines(lines, startIndex, SANDBOX_CHANGE_PREVIEW_MAX_LINES);
  return {
    label: `${label} | ${getSandboxPreviewRangeText(startIndex, lines.length, totalLineCount)}`,
    tone,
    text: preview.text,
    clipped: preview.clipped
  };
}

function buildSandboxChangePreviewData(change) {
  const currentContent = String(change.currentContent || "");
  const proposedContent = String(change.proposedContent || "");
  const currentLines = getTextLinesForDiff(currentContent);
  const proposedLines = getTextLinesForDiff(proposedContent);

  if (change.action === "create") {
    const pane = buildSandboxPreviewPane("Proposed file", proposedLines, 0, proposedLines.length, "create");
    return {
      panes: [pane],
      note: pane.clipped
        ? "This preview is shortened for a long new file."
        : "This new file will be created when you apply the plan."
    };
  }

  if (change.action === "delete") {
    const pane = buildSandboxPreviewPane("Current file", currentLines, 0, currentLines.length, "delete");
    return {
      panes: [pane],
      note: pane.clipped
        ? "This preview is shortened for a long file that will be removed."
        : "This file will be removed when you apply the plan."
    };
  }

  const { beforeLines, afterLines, prefix, beforeEnd, afterEnd } = getSandboxDiffWindow(currentContent, proposedContent);
  const beforeStart = Math.max(0, prefix - SANDBOX_CHANGE_PREVIEW_CONTEXT_LINES);
  const afterStart = Math.max(0, prefix - SANDBOX_CHANGE_PREVIEW_CONTEXT_LINES);
  const beforeStop = Math.min(beforeLines.length, Math.max(prefix, beforeEnd + 1) + SANDBOX_CHANGE_PREVIEW_CONTEXT_LINES);
  const afterStop = Math.min(afterLines.length, Math.max(prefix, afterEnd + 1) + SANDBOX_CHANGE_PREVIEW_CONTEXT_LINES);
  const beforeSlice = beforeLines.slice(beforeStart, beforeStop);
  const afterSlice = afterLines.slice(afterStart, afterStop);
  const currentPane = buildSandboxPreviewPane("Current", beforeSlice, beforeStart, beforeLines.length, "current");
  const proposedPane = buildSandboxPreviewPane("Proposed", afterSlice, afterStart, afterLines.length, "proposed");

  const notes = [];
  if (
    beforeStart > 0
    || afterStart > 0
    || beforeStop < beforeLines.length
    || afterStop < afterLines.length
  ) {
    notes.push("Preview focuses on the changed section with nearby context.");
  }
  if (currentPane.clipped || proposedPane.clipped) {
    notes.push("Long sections are shortened inside each preview.");
  }
  if (!notes.length) {
    notes.push("Review the current and proposed code before you apply the plan.");
  }

  return {
    panes: [currentPane, proposedPane],
    note: notes.join(" ")
  };
}

function getSandboxAnalysisChangeRows(analysis, sandbox = getCurrentSandboxState()) {
  const normalized = normalizeSandboxAnalysis(analysis);
  const currentFiles = new Map((sandbox.files || []).map((item) => [String(item.path || "").toLowerCase(), item]));
  const rows = normalized.files.map((change) => {
    const currentFile = currentFiles.get(change.path.toLowerCase()) || null;
    const currentContent = currentFile ? String(currentFile.content || "") : "";
    const proposedContent = change.action === "delete" ? "" : String(change.content || "");
    const currentLineCount = getTextLinesForDiff(currentContent).length;
    const proposedLineCount = getTextLinesForDiff(proposedContent).length;
    let additions = 0;
    let deletions = 0;

    if (change.action === "create" || !currentFile) {
      additions = proposedLineCount;
    } else if (change.action === "delete") {
      deletions = currentLineCount;
    } else {
      const stats = getLineChangeStats(currentContent, proposedContent);
      additions = stats.additions;
      deletions = stats.deletions;
    }

    return {
      path: change.path,
      action: change.action,
      reason: change.reason,
      currentContent,
      proposedContent,
      currentLineCount,
      proposedLineCount,
      canOpenCurrentFile: Boolean(currentFile),
      additions,
      deletions
    };
  });

  return {
    rows,
    additions: rows.reduce((sum, item) => sum + item.additions, 0),
    deletions: rows.reduce((sum, item) => sum + item.deletions, 0),
    setupSteps: normalized.setupSteps
  };
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

  const changed = selectedFile.path !== nextPath || String(selectedFile.content || "") !== nextContent;
  selectedFile.path = nextPath;
  selectedFile.content = String(nextContent || "");
  selectedFile.updatedAt = Date.now();
  sandbox.selectedFileId = selectedFile.id;
  sandboxDraftFileId = selectedFile.id;
  sandboxDraftPath = selectedFile.path;
  sandboxDraftContent = selectedFile.content;
  sandboxDraftDirty = false;
  if (changed) {
    clearSandboxUndoSnapshot(sandbox);
  }
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

function selectSandboxFileByPath(path, options = {}) {
  const sandbox = getCurrentSandboxState();
  const normalizedPath = normalizeSandboxFilePath(path);
  if (!normalizedPath) {
    return false;
  }
  const file = sandbox.files.find((item) => item.path.toLowerCase() === normalizedPath.toLowerCase());
  if (!file) {
    return false;
  }
  selectSandboxFile(file.id, options);
  return true;
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
  clearSandboxUndoSnapshot(sandbox);
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
  clearSandboxUndoSnapshot(sandbox);
  sandbox.statusText = sandbox.files.length ? "File deleted" : "Workspace empty";
  syncCurrentSessionFromHistory();
  loadSandboxDraftFromSelectedFile(true);
  renderSandboxUI();
}

function clearSandboxAnalysis() {
  const sandbox = getCurrentSandboxState();
  sandbox.analysis = createDefaultSandboxAnalysis();
  clearActiveSandboxAnalysisMemory();
  clearActiveSandboxActivity();
  clearSandboxExpandedChangePaths();
  sandbox.statusText = sandbox.files.length ? "Idle" : "Workspace empty";
  syncCurrentSessionFromHistory();
  renderSandboxUI();
}

function clearSandboxConversation() {
  const sandbox = getCurrentSandboxState();
  sandbox.analysis = createDefaultSandboxAnalysis();
  clearActiveSandboxAnalysisMemory();
  clearActiveSandboxActivity();
  clearSandboxExpandedChangePaths();
  sandbox.messages = [];
  sandbox.statusText = sandbox.files.length ? "Idle" : "Workspace empty";
  sandboxChatDraft = "";
  syncCurrentSessionFromHistory();
  renderSandboxUI();
}

function applySandboxAnalysis() {
  const sandbox = getCurrentSandboxState();
  const plan = getActiveSandboxAnalysis(sandbox);
  if (!plan.files.length) {
    setSandboxStatus("No AI file changes to apply.", "idle");
    renderSandboxUI();
    return;
  }

  setSandboxUndoSnapshot(
    {
      files: cloneSandboxFiles(sandbox.files),
      selectedFileId: sandbox.selectedFileId,
      appliedAt: Date.now(),
      summary: plan.summary || "",
      changeCount: plan.files.length
    },
    sandbox
  );

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
  sandbox.analysis = createDefaultSandboxAnalysis();
  clearActiveSandboxAnalysisMemory();
  clearActiveSandboxActivity();
  clearSandboxExpandedChangePaths();
  sandbox.statusText = `Applied ${plan.files.length} AI change${plan.files.length === 1 ? "" : "s"}`;
  syncCurrentSessionFromHistory();
  loadSandboxDraftFromSelectedFile(true);
  renderSandboxUI();
}

function undoLastSandboxApply() {
  const sandbox = getCurrentSandboxState();
  const snapshot = getSandboxUndoSnapshot(sandbox);
  if (!snapshot) {
    setSandboxStatus("No recent AI apply is available to undo.", "idle");
    renderSandboxUI();
    return;
  }

  sandbox.files = cloneSandboxFiles(snapshot.files);
  sandbox.selectedFileId = sandbox.files.some((item) => item.id === snapshot.selectedFileId)
    ? snapshot.selectedFileId
    : sandbox.files[0]?.id || "";
  sandbox.analysis = createDefaultSandboxAnalysis();
  clearActiveSandboxAnalysisMemory();
  clearActiveSandboxActivity();
  clearSandboxExpandedChangePaths();
  clearSandboxUndoSnapshot(sandbox);
  sandbox.statusText = "Restored the workspace from before the last AI apply";
  syncCurrentSessionFromHistory();
  loadSandboxDraftFromSelectedFile(true);
  renderSandboxUI();
}

function renderSandboxAnalysisUI(analysis, activitySnapshot = null) {
  if (!sandboxChangesSummary || !sandboxChangesList || !sandboxChangesMeta) return;
  if (activitySnapshot && activitySnapshot.state === "running") {
    sandboxChangesSummary.textContent = "ROK is preparing the requested file changes...";
    sandboxChangesList.innerHTML = buildSandboxEmptyStateMarkup({
      title: "ROK CODE is building the plan",
      body: "The file-by-file change summary will appear here as soon as the current pass is ready to review.",
      note: "Nothing is written into the workspace until you click Apply AI Changes."
    });
    sandboxChangesMeta.hidden = true;
    sandboxChangesMeta.textContent = "";
    return;
  }

  const changeSet = getSandboxAnalysisChangeRows(analysis);
  const fileCount = changeSet.rows.length;
  if (!fileCount) {
    sandboxChangesSummary.textContent = "No AI file changes yet.";
    sandboxChangesList.innerHTML = buildSandboxEmptyStateMarkup({
      title: "No requested changes yet",
      body: "Ask for one concrete edit and the review cards will show up here before anything gets applied.",
      actions: [
        { kind: "starter", id: "review", label: "Review workspace", tone: "primary" },
        { kind: "starter", id: "refactor", label: "Safe refactor" },
        { kind: "starter", id: "debug", label: "Find the bug" }
      ],
      note: "Best results come from one safe request at a time."
    });
    sandboxChangesMeta.hidden = true;
    sandboxChangesMeta.textContent = "";
    return;
  }

  const currentExpandedPaths = getSandboxExpandedChangePaths();
  const validExpandedPaths = new Set(
    currentExpandedPaths.filter((path) => changeSet.rows.some((change) => change.path.toLowerCase() === path))
  );
  if (validExpandedPaths.size) {
    setSandboxExpandedChangePaths([...validExpandedPaths]);
  } else if (currentExpandedPaths.length) {
    clearSandboxExpandedChangePaths();
  }

  sandboxChangesSummary.textContent = `Plan ready: ${fileCount} file${fileCount === 1 ? "" : "s"} | +${changeSet.additions} -${changeSet.deletions}`;
  sandboxChangesList.innerHTML = changeSet.rows
    .map((change, index) => {
      const changePathKey = change.path.toLowerCase();
      const isExpanded = validExpandedPaths.size
        ? validExpandedPaths.has(changePathKey)
        : index === 0 && fileCount <= 2;
      const actionLabel = change.action === "create" ? "new" : change.action;
      const reason = change.reason ? `<div class="sandbox-change-reason">${escapeHtml(change.reason)}</div>` : "";
      const previewData = isExpanded ? buildSandboxChangePreviewData(change) : null;
      const previewButtonLabel = isExpanded ? "Hide preview" : "Review preview";
      const previewHtml = previewData
        ? `
          <div class="sandbox-change-preview">
            <div class="sandbox-change-preview-grid${previewData.panes.length === 1 ? " is-single" : ""}">
              ${previewData.panes.map((pane) => `
                <section class="sandbox-change-preview-pane" data-tone="${escapeHtml(pane.tone || "current")}">
                  <div class="sandbox-change-preview-label">${escapeHtml(pane.label || "")}</div>
                  <pre class="sandbox-change-preview-code">${escapeHtml(pane.text || "")}</pre>
                </section>
              `).join("")}
            </div>
            ${previewData.note ? `<div class="sandbox-change-preview-note">${escapeHtml(previewData.note)}</div>` : ""}
          </div>
        `
        : "";
      const openFileButton = change.canOpenCurrentFile
        ? `<button type="button" class="sandbox-change-mini-btn" data-sandbox-open-path="${escapeHtml(change.path)}">Open file</button>`
        : "";

      return `
        <div class="sandbox-change-row" data-expanded="${isExpanded ? "true" : "false"}">
          <div class="sandbox-change-head">
            <div class="sandbox-change-main">
              <div class="sandbox-change-path-row">
                <span class="sandbox-change-path">${escapeHtml(change.path)}</span>
                <span class="sandbox-change-action" data-tone="${escapeHtml(change.action)}">${escapeHtml(actionLabel)}</span>
                <span class="sandbox-change-lines">${escapeHtml(getSandboxLineCountLabel(change.proposedLineCount || change.currentLineCount || 0))}</span>
              </div>
              ${reason}
            </div>
            <div class="sandbox-change-side">
              <div class="sandbox-change-stats">
                <span class="sandbox-change-plus">+${change.additions}</span>
                <span class="sandbox-change-minus">-${change.deletions}</span>
              </div>
              <div class="sandbox-change-controls">
                ${openFileButton}
                <button type="button" class="sandbox-change-mini-btn" data-sandbox-preview-path="${escapeHtml(change.path)}">${escapeHtml(previewButtonLabel)}</button>
              </div>
            </div>
          </div>
          ${previewHtml}
        </div>
      `;
    })
    .join("");

  if (changeSet.setupSteps.length) {
    sandboxChangesMeta.hidden = false;
    sandboxChangesMeta.textContent = `Setup: ${changeSet.setupSteps.join(" | ")}`;
  } else {
    sandboxChangesMeta.hidden = true;
    sandboxChangesMeta.textContent = "";
  }
}

function createSandboxChatMessageRow(role, text, options = {}) {
  const { pending = false } = options;
  const row = document.createElement("div");
  row.className = `sandbox-chat-msg ${role === "assistant" ? "assistant" : "user"}`;

  const label = document.createElement("div");
  label.className = "sandbox-chat-label";
  label.textContent = role === "assistant" ? "ROK" : "You";

  const bubble = document.createElement("div");
  bubble.className = "bubble plain sandbox-chat-bubble";
  if (pending) {
    bubble.classList.add("is-pending");
  }
  setBubbleContent(bubble, text, role === "assistant");

  row.appendChild(label);
  row.appendChild(bubble);
  return row;
}

function renderSandboxConversationUI(sandbox, activitySnapshot = null) {
  if (!sandboxChatList) return;
  const messages = getSandboxConversationMessages(sandbox);
  sandboxChatList.textContent = "";

  if (!messages.length && !(isSending && isSandboxSessionActive())) {
    sandboxChatList.innerHTML = buildSandboxEmptyStateMarkup({
      title: "Start with one concrete ROK CODE request",
      body: "Describe one bug, refactor, or scaffold. ROK will plan first, show the requested changes, and wait for your apply.",
      actions: [
        { kind: "starter", id: "review", label: "Review workspace", tone: "primary" },
        { kind: "starter", id: "refactor", label: "Safe refactor" },
        { kind: "starter", id: "debug", label: "Find the bug" },
        { kind: "starter", id: "scaffold", label: "Starter scaffold" }
      ],
      note: "Nothing is written into your files until you click Apply AI Changes."
    });
  } else {
    messages.forEach((item) => {
      sandboxChatList.appendChild(createSandboxChatMessageRow(item.role, item.content));
    });
    if (isSending && isSandboxSessionActive()) {
      sandboxChatList.appendChild(
        createSandboxChatMessageRow("assistant", buildSandboxActivityChatText(activitySnapshot), { pending: true })
      );
    }
  }

  if (sandboxChatInput) {
    if (document.activeElement !== sandboxChatInput) {
      sandboxChatInput.value = sandboxChatDraft;
    }
    sandboxChatInput.disabled = isSending;
    autoResizeSandboxChatInput();
  }
  if (sandboxChatSendBtn) {
    sandboxChatSendBtn.textContent = isSending ? "Stop" : "Send";
    sandboxChatSendBtn.disabled = false;
  }
  sandboxChatList.scrollTop = sandboxChatList.scrollHeight;
}

function renderSandboxUI() {
  if (!sandboxPanel) return;
  const sandbox = getCurrentSandboxState();
  const activeAnalysis = getActiveSandboxAnalysis(sandbox);
  const activitySnapshot = buildSandboxActivitySnapshot(getActiveSandboxActivity(), sandbox);
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
    const fileIndicators = getSandboxFileIndicatorMap(sandbox, activeAnalysis, activitySnapshot);
    const filesHtml = [...sandbox.files]
      .sort((a, b) => a.path.localeCompare(b.path))
      .map((file) => {
        const isActive = file.id === sandbox.selectedFileId ? " is-active" : "";
        const disabledAttr = isSending ? " disabled" : "";
        const lineLabel = `${countLines(file.content).toLocaleString()} lines`;
        const indicator = fileIndicators.get(String(file.path || "").toLowerCase());
        const badgeHtml = indicator
          ? `<span class="sandbox-file-badge" data-tone="${escapeHtml(indicator.tone || "update")}">${escapeHtml(indicator.label || "AI update")}</span>`
          : "";
        return `<button type="button" class="sandbox-file-btn${isActive}" data-sandbox-file-id="${escapeHtml(file.id)}"${disabledAttr}><span class="sandbox-file-row"><span class="sandbox-file-path">${escapeHtml(file.path)}</span>${badgeHtml}</span><span class="sandbox-file-meta">${escapeHtml(lineLabel)}</span></button>`;
      })
      .join("");
    sandboxFilesList.innerHTML = filesHtml || buildSandboxEmptyStateMarkup({
      title: "No files in this workspace yet",
      body: "Upload a project or start with one file, then ask ROK CODE for a safe first pass.",
      actions: [
        { kind: "action", id: "upload", label: "Upload files", tone: "primary" },
        { kind: "action", id: "new-file", label: "New file" },
        { kind: "starter", id: "scaffold", label: "Starter scaffold prompt" }
      ],
      note: "ROK CODE is strongest when it can inspect real files and show the review cards before apply."
    });
  }

  if (sandboxCurrentFileLabel) {
    sandboxCurrentFileLabel.textContent = selectedFile ? selectedFile.path : "Select a file";
  }
  if (sandboxFileCount) {
    sandboxFileCount.textContent = `${sandbox.files.length.toLocaleString()} file${sandbox.files.length === 1 ? "" : "s"}`;
  }
  if (sandboxChangeCount) {
    const planFiles = Array.isArray(activeAnalysis.files) ? activeAnalysis.files.length : 0;
    sandboxChangeCount.textContent = activitySnapshot ? activitySnapshot.changeText : planFiles ? `${planFiles} AI change${planFiles === 1 ? "" : "s"}` : "No AI changes";
  }
  if (sandboxStatusChip) {
    const chipText = activitySnapshot ? activitySnapshot.chipText : sandbox.statusText || "Idle";
    const tone = activitySnapshot && activitySnapshot.state === "running"
      ? "idle"
      : chipText.toLowerCase().includes("error")
      || chipText.toLowerCase().includes("required")
      || chipText.toLowerCase().includes("exists")
      ? "error"
      : chipText === "Saved"
      ? "saved"
      : "idle";
    sandboxStatusChip.textContent = chipText;
    sandboxStatusChip.dataset.tone = tone;
  }
  if (sandboxFilePathInput) {
    sandboxFilePathInput.value = selectedFile ? sandboxDraftPath : "";
    sandboxFilePathInput.disabled = !selectedFile || isSending;
  }
  if (sandboxFileEditor) {
    sandboxFileEditor.value = selectedFile ? sandboxDraftContent : "";
    sandboxFileEditor.disabled = !selectedFile || isSending;
  }
  if (sandboxUploadBtn) {
    sandboxUploadBtn.disabled = isSending;
  }
  if (sandboxUploadFolderBtn) {
    sandboxUploadFolderBtn.disabled = isSending;
  }
  if (sandboxNewFileBtn) {
    sandboxNewFileBtn.disabled = isSending;
  }
  if (sandboxSaveBtn) {
    sandboxSaveBtn.disabled = !selectedFile || isSending;
  }
  if (sandboxDeleteBtn) {
    sandboxDeleteBtn.disabled = !selectedFile || isSending;
  }
  if (sandboxAnalyzeBtn) {
    sandboxAnalyzeBtn.textContent = isSending ? "Stop" : "Analyze";
    sandboxAnalyzeBtn.disabled = false;
  }
  if (sandboxUndoBtn) {
    sandboxUndoBtn.disabled = isSending || !getSandboxUndoSnapshot(sandbox) || sandboxDraftDirty;
  }
  if (sandboxApplyBtn) {
    sandboxApplyBtn.disabled = isSending || !(Array.isArray(activeAnalysis.files) && activeAnalysis.files.length);
  }
  if (sandboxClearAnalysisBtn) {
    sandboxClearAnalysisBtn.disabled = isSending;
  }
  renderSandboxActivityUI(activitySnapshot);
  renderSandboxAnalysisUI(activeAnalysis, activitySnapshot);
  renderSandboxConversationUI(sandbox, activitySnapshot);
}

function getWorkspaceTabContainers() {
  return [workspaceTabs, workspaceSidebarTabs].filter((node) => node instanceof HTMLElement);
}

function getWorkspaceTabLabel(tabId) {
  const customLabel = userSettings && userSettings.workspaceTabLabels && typeof userSettings.workspaceTabLabels === "object"
    ? sanitizeWorkspaceTabLabel(userSettings.workspaceTabLabels[tabId], "")
    : "";
  return customLabel || DEFAULT_WORKSPACE_TAB_LABELS[tabId] || tabId;
}

function getWorkspaceCustomTabs() {
  return sanitizeCustomWorkspaceTabs(userSettings && userSettings.customWorkspaceTabs);
}

function getWorkspaceTabConfigs() {
  const builtIns = WORKSPACE_TAB_KEYS.map((tabId) => ({
    id: tabId,
    label: getWorkspaceTabLabel(tabId),
    kind: "workspace",
    target: tabId
  }));
  const customTabs = getWorkspaceCustomTabs();
  const byId = new Map(
    [...builtIns, ...customTabs].map((item) => [item.id, item])
  );
  const orderedIds = sanitizeWorkspaceTabOrder(userSettings && userSettings.workspaceTabOrder, customTabs);
  const ordered = orderedIds.map((id) => byId.get(id)).filter(Boolean);
  byId.forEach((item, id) => {
    if (!orderedIds.includes(id)) {
      ordered.push(item);
    }
  });
  return ordered;
}

function shouldShowTopWorkspaceTabs() {
  return userSettings.showTopWorkspaceTabs !== false;
}

function shouldShowSidebarWorkspaceTabs() {
  return userSettings.showSidebarWorkspaceTabs !== false;
}

function renderWorkspaceTabNavigation() {
  const configs = getWorkspaceTabConfigs();
  getWorkspaceTabContainers().forEach((container) => {
    container.innerHTML = "";
    configs.forEach((config) => {
      const btn = document.createElement("button");
      btn.className = "workspace-tab";
      btn.type = "button";
      btn.setAttribute("data-workspace-tab-id", config.id);
      btn.setAttribute("data-workspace-tab-kind", config.kind || "workspace");
      if (config.kind === "workspace") {
        btn.setAttribute("data-workspace-tab", config.target);
        btn.setAttribute("role", "tab");
        btn.setAttribute("aria-selected", "false");
      } else {
        btn.setAttribute("data-workspace-tab-url", config.url || "");
        btn.title = config.url || "";
      }
      btn.textContent = config.label;
      container.appendChild(btn);
    });
  });
}

function syncWorkspaceTabVisibility(options = {}) {
  const { forceHide = false } = options;
  const hasTabs = getWorkspaceTabConfigs().length > 0;
  if (workspaceTabs) {
    workspaceTabs.hidden = forceHide || !hasTabs || !shouldShowTopWorkspaceTabs();
  }
  if (workspaceSidebarTabs) {
    workspaceSidebarTabs.hidden = forceHide || !hasTabs || !shouldShowSidebarWorkspaceTabs();
  }
  if (workspaceSidebarTabsSection) {
    workspaceSidebarTabsSection.hidden = forceHide || !hasTabs || !shouldShowSidebarWorkspaceTabs();
  }
}

function openCustomWorkspaceTab(url) {
  const href = sanitizeCustomWorkspaceTabUrl(url);
  if (!href) return;
  window.open(href, "_blank", "noopener,noreferrer");
}

function updateWorkspaceTabButtons(activeTab) {
  const containers = getWorkspaceTabContainers();
  if (!containers.length) return;
  containers.forEach((container) => {
    const tabButtons = container.querySelectorAll("[data-workspace-tab-id]");
    tabButtons.forEach((btn) => {
      const tabId = btn.getAttribute("data-workspace-tab-id");
      const kind = btn.getAttribute("data-workspace-tab-kind");
      const isActive = kind === "workspace" && tabId === activeTab;
      btn.classList.toggle("active", isActive);
      if (kind === "workspace") {
        btn.setAttribute("aria-selected", isActive ? "true" : "false");
      } else {
        btn.setAttribute("aria-selected", "false");
      }
    });
  });
}

function getSidebarLayoutNodes() {
  const chatsSection = savedChatsList instanceof HTMLElement ? savedChatsList.closest(".side-section") : null;
  const memoryListEl = document.getElementById("knowledgeList");
  const memorySection = memoryListEl instanceof HTMLElement ? memoryListEl.closest(".side-section") : null;
  return {
    header: sidebar ? sidebar.querySelector(".side-header") : null,
    tabs: workspaceSidebarTabsSection,
    chats: chatsSection,
    memory: memorySection
  };
}

function applySidebarSectionOrder() {
  const order = sanitizeSidebarSectionOrder(userSettings.sidebarSectionOrder);
  const nodes = getSidebarLayoutNodes();
  order.forEach((key, index) => {
    const node = nodes[key];
    if (node instanceof HTMLElement) {
      node.style.order = String(index + 1);
    }
  });
}

function applyTopbarActionOrder() {
  if (!(topbarActions instanceof HTMLElement)) return;
  const nodes = {
    customize: customizeRokBtn,
    incognito: incognitoToggleBtn,
    clear: clearBtn
  };
  sanitizeTopbarActionOrder(userSettings.topbarActionOrder).forEach((key) => {
    const node = nodes[key];
    if (node instanceof HTMLElement) {
      topbarActions.appendChild(node);
    }
  });
}

function applyMainSectionOrder() {
  const order = sanitizeMainSectionOrder(userSettings.mainSectionOrder);
  const nodes = {
    tabs: [workspaceTabs],
    content: [chat, workspacePanel, mathPanel],
    composer: [composerWrap]
  };
  order.forEach((key, index) => {
    (nodes[key] || []).forEach((node) => {
      if (node instanceof HTMLElement) {
        node.style.order = String(index + 1);
      }
    });
  });
}

function getVisibleWorkspaceContentNode() {
  if (chat instanceof HTMLElement && !chat.hidden) {
    return chat;
  }
  if (workspacePanel instanceof HTMLElement && !workspacePanel.hidden) {
    return workspacePanel;
  }
  if (mathPanel instanceof HTMLElement && !mathPanel.hidden) {
    return mathPanel;
  }
  return chat instanceof HTMLElement ? chat : null;
}

function bindLiveLayoutDropTarget(node) {
  if (!(node instanceof HTMLElement) || node.dataset.liveLayoutBound === "true") return;
  node.dataset.liveLayoutBound = "true";
  node.addEventListener("dragover", (event) => {
    if (!isLiveLayoutEditMode || !activeLiveLayoutDrag) return;
    const targetGroup = node.getAttribute("data-live-layout-group");
    const targetId = node.getAttribute("data-live-layout-id");
    if (!targetGroup || !targetId || targetGroup !== activeLiveLayoutDrag.group || targetId === activeLiveLayoutDrag.id) {
      return;
    }
    event.preventDefault();
    node.classList.add("is-live-layout-drop-target");
  });
  node.addEventListener("dragleave", () => {
    node.classList.remove("is-live-layout-drop-target");
  });
  node.addEventListener("drop", (event) => {
    if (!isLiveLayoutEditMode || !activeLiveLayoutDrag) return;
    const targetGroup = node.getAttribute("data-live-layout-group");
    const targetId = node.getAttribute("data-live-layout-id");
    node.classList.remove("is-live-layout-drop-target");
    if (!targetGroup || !targetId || targetGroup !== activeLiveLayoutDrag.group || targetId === activeLiveLayoutDrag.id) {
      return;
    }
    event.preventDefault();
    const draggedId = activeLiveLayoutDrag.id;
    const rect = node.getBoundingClientRect();
    const insertAfter = event.clientY > rect.top + rect.height / 2;
    const applyReorder = (order, sanitizer) => {
      const filtered = Array.isArray(order) ? order.filter((item) => item !== draggedId) : [];
      const targetIndex = filtered.indexOf(targetId);
      if (targetIndex === -1) return filtered;
      filtered.splice(insertAfter ? targetIndex + 1 : targetIndex, 0, draggedId);
      return sanitizer(filtered);
    };
    if (targetGroup === "main") {
      const nextOrder = applyReorder(userSettings.mainSectionOrder, sanitizeMainSectionOrder);
      persistUserSettingsPatch({ mainSectionOrder: nextOrder });
    } else if (targetGroup === "sidebar") {
      const nextOrder = applyReorder(userSettings.sidebarSectionOrder, sanitizeSidebarSectionOrder);
      persistUserSettingsPatch({ sidebarSectionOrder: nextOrder });
    }
    refreshLiveLayoutEditTargets();
  });
}

function createLiveLayoutHandle(group, id, label) {
  const handle = document.createElement("div");
  handle.className = "live-layout-handle";
  handle.setAttribute("draggable", "true");
  handle.setAttribute("data-live-layout-handle", "true");
  handle.setAttribute("data-live-layout-group", group);
  handle.setAttribute("data-live-layout-id", id);
  handle.innerHTML = `<span class="live-layout-handle-grip" aria-hidden="true">::</span><span>${escapeHtml(label)}</span>`;
  handle.addEventListener("dragstart", (event) => {
    activeLiveLayoutDrag = { group, id };
    handle.classList.add("is-dragging");
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", `${group}:${id}`);
    }
  });
  handle.addEventListener("dragend", () => {
    activeLiveLayoutDrag = null;
    handle.classList.remove("is-dragging");
    document.querySelectorAll(".is-live-layout-drop-target").forEach((item) => item.classList.remove("is-live-layout-drop-target"));
  });
  return handle;
}

function clearLiveLayoutEditTargets() {
  document.querySelectorAll(".live-layout-handle").forEach((handle) => handle.remove());
  document.querySelectorAll(".live-layout-target").forEach((node) => {
    node.classList.remove("live-layout-target", "is-live-layout-drop-target");
    node.removeAttribute("data-live-layout-group");
    node.removeAttribute("data-live-layout-id");
  });
}

function refreshLiveLayoutEditTargets() {
  clearLiveLayoutEditTargets();
  if (!isLiveLayoutEditMode || isHomeScreenVisible()) {
    return;
  }
  const sidebarNodes = getSidebarLayoutNodes();
  const activeContentNode = getVisibleWorkspaceContentNode();
  const targets = [
    { group: "main", id: "tabs", label: "Workspace tabs", node: workspaceTabs instanceof HTMLElement && !workspaceTabs.hidden ? workspaceTabs : null },
    { group: "main", id: "content", label: "Main content", node: activeContentNode },
    { group: "main", id: "composer", label: "Chat bar", node: composerWrap instanceof HTMLElement && !composerWrap.hidden ? composerWrap : null },
    { group: "sidebar", id: "header", label: SIDEBAR_SECTION_LABELS.header, node: sidebarNodes.header },
    { group: "sidebar", id: "tabs", label: SIDEBAR_SECTION_LABELS.tabs, node: sidebarNodes.tabs instanceof HTMLElement && !sidebarNodes.tabs.hidden ? sidebarNodes.tabs : null },
    { group: "sidebar", id: "chats", label: SIDEBAR_SECTION_LABELS.chats, node: sidebarNodes.chats },
    { group: "sidebar", id: "memory", label: SIDEBAR_SECTION_LABELS.memory, node: sidebarNodes.memory }
  ];
  targets.forEach(({ group, id, label, node }) => {
    if (!(node instanceof HTMLElement) || node.hidden) return;
    node.classList.add("live-layout-target");
    node.setAttribute("data-live-layout-group", group);
    node.setAttribute("data-live-layout-id", id);
    node.appendChild(createLiveLayoutHandle(group, id, label));
    bindLiveLayoutDropTarget(node);
  });
}

function setLiveLayoutEditMode(enabled) {
  isLiveLayoutEditMode = Boolean(enabled);
  if (appRoot) {
    appRoot.classList.toggle("layout-edit-mode", isLiveLayoutEditMode);
  }
  if (layoutEditToggleBtn) {
    layoutEditToggleBtn.setAttribute("aria-pressed", isLiveLayoutEditMode ? "true" : "false");
    layoutEditToggleBtn.textContent = isLiveLayoutEditMode ? "Move UI On" : "Move UI Off";
    layoutEditToggleBtn.classList.toggle("is-active", isLiveLayoutEditMode);
  }
  refreshLiveLayoutEditTargets();
  if (isLiveLayoutEditMode) {
    showThinkingQuotaToast("Layout mode is on. Drag the handles to move the chat bar and shell sections.");
  }
}

function getComposerSelectableModels() {
  const fromCatalog = MODEL_OPTIONS.filter((item) => COMPOSER_TEXT_MODEL_ORDER.includes(item.id));
  const rows = fromCatalog.length
    ? [...fromCatalog].sort(
      (a, b) => COMPOSER_TEXT_MODEL_ORDER.indexOf(a.id) - COMPOSER_TEXT_MODEL_ORDER.indexOf(b.id)
    )
    : COMPOSER_TEXT_MODEL_ORDER.map((id) => ({
      id,
      label: KNOWN_MODEL_LABELS[id] || id
    }));
  rows.push({
    id: HYPERION_MODEL_ID,
    label: HYPERION_LABEL,
    icon: "roklogo.png",
    alt: HYPERION_LABEL,
    title: getCustomOllamaApiKey()
      ? `Use ${HYPERION_LABEL} with your saved Ollama Cloud key.`
      : `${HYPERION_LABEL} is BYOK only for now. Add your Ollama Cloud key to unlock it.`,
    isHyperion: true,
    requiresOllamaKey: !getCustomOllamaApiKey()
  });
  const customSetup = getCustomOllamaSetup();
  if (customSetup && resolveModelAlias(customSetup.modelId) !== HYPERION_MODEL_ID) {
    rows.push({
      id: customSetup.modelId,
      label: customSetup.modelId,
      icon: "roklogo.png",
      alt: CUSTOM_OLLAMA_GROUP_LABEL,
      title: `Use ${customSetup.modelId} with your saved Ollama API key.`,
      isCustomOllama: true
    });
  }
  return rows;
}

function getComposerSelectableModelGroups(rows = []) {
  const availableRows = Array.isArray(rows) ? rows : [];
  const rowById = new Map(availableRows.map((item) => [item.id, item]));
  const groupedIds = new Set();
  const groups = [];
  COMPOSER_MODEL_GROUPS.forEach((group) => {
    const items = group.modelIds.map((id) => rowById.get(id)).filter(Boolean);
    if (!items.length) return;
    items.forEach((item) => groupedIds.add(item.id));
    groups.push({ label: group.label, items });
  });
  const remainingItems = availableRows.filter(
    (item) => !groupedIds.has(item.id) && !(item && item.isCustomOllama) && !(item && item.isHyperion)
  );
  if (remainingItems.length) {
    groups.push({ label: groups.length ? "More models" : "", items: remainingItems });
  }
  const customItems = [];
  const customModel = availableRows.find((item) => item && item.isCustomOllama);
  if (customModel) {
    customItems.push(customModel);
  }
  customItems.push({
    kind: "action",
    action: CUSTOM_OLLAMA_CONFIG_ACTION,
    label: customModel ? "Edit key and model" : "Add key and model",
    icon: "roklogo.png",
    alt: CUSTOM_OLLAMA_GROUP_LABEL,
    title: customModel
      ? "Update the saved API key or switch to a different Ollama Cloud model."
      : "Save an Ollama API key and any Ollama Cloud model ID on this device."
  });
  groups.push({ label: CUSTOM_OLLAMA_GROUP_LABEL, items: customItems });
  return groups;
}

function getOperationalModelId(modelId = "") {
  const normalized = normalizeSessionModel(modelId || getCurrentSessionModel());
  if (UNOFFICIAL_MODEL_IDS.has(normalized)) {
    return HERMES_MODEL_ID;
  }
  return normalized;
}

function shouldEnableThinkingForModel(modelId = "") {
  const normalized = normalizeSessionModel(modelId || getCurrentSessionModel());
  return !UNOFFICIAL_MODEL_IDS.has(normalized);
}

function shouldEnableThinkingForRequest(modelId = "", options = {}) {
  if (!shouldEnableThinkingForModel(modelId)) {
    return false;
  }

  const text = String(options.text || options.prompt || "").trim();
  const workspaceContext = String(options.workspaceContext || "").trim();
  const attachments = Array.isArray(options.attachments) ? options.attachments : [];
  const sandboxFiles = Array.isArray(options.sandboxFiles) ? options.sandboxFiles : [];

  if (attachments.length > 0) {
    return true;
  }

  if (sandboxFiles.length > 0) {
    const totalSandboxChars = sandboxFiles.reduce((sum, file) => {
      return sum + String(file && file.content ? file.content : "").length;
    }, 0);
    return sandboxFiles.length > 1 || totalSandboxChars >= 800 || text.length >= 48;
  }

  if (workspaceContext.length >= 1200) {
    return true;
  }

  if (!text) {
    return false;
  }

  const signals = getPromptComplexitySignals(text);
  return signals.codeLike
    || signals.mathLike
    || signals.analysisLike
    || signals.multipart
    || signals.wordCount >= 40
    || text.length >= 240
    || workspaceContext.length >= 400;

  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const lineCount = text.split(/\r?\n/).filter((line) => line.trim()).length;
  const questionCount = (text.match(/\?/g) || []).length;
  const codeLike = /```|<\/?[a-z][^>]*>|=>|[{};]{2,}|^\s*(?:const|let|var|function|class|def|import|from|if|for|while|return)\b/m.test(text);
  const mathLike = /\b(?:prove|derive|equation|integral|differentiat|matrix|probability|algebra|calculus|geometry|solve)\b/i.test(text)
    || /(?:\d+\s*[\+\-*\/^=]\s*\d+)|[∑√π≈≤≥]/u.test(text);
  const analysisLike = /\b(?:debug|diagnos(?:e|is)|analy[sz]e|explain why|reason through|think through|step by step|walk me through|compare|trade[- ]?offs?|plan|strategy|architecture|refactor|optimi[sz]e|investigate|root cause|edge cases?)\b/i.test(text);
  const multipart = lineCount >= 4
    || questionCount >= 2
    || /\b(?:first|second|third)\b/i.test(text)
    || /^\s*(?:[-*]|\d+\.)\s+/m.test(text);

  return codeLike
    || mathLike
    || analysisLike
    || multipart
    || wordCount >= 40
    || text.length >= 240
    || workspaceContext.length >= 400;
}

function getPromptComplexitySignals(rawText = "") {
  const text = String(rawText || "").trim();
  const wordCount = countWords(text);
  const lineCount = text ? text.split(/\r?\n/).filter((line) => line.trim()).length : 0;
  const questionCount = (text.match(/\?/g) || []).length;
  const codeLike = /```|<\/?[a-z][^>]*>|=>|[{};]{2,}|^\s*(?:const|let|var|function|class|def|import|from|if|for|while|return)\b/m.test(text);
  const mathLike = /\b(?:prove|derive|equation|integral|differentiat|matrix|probability|algebra|calculus|geometry|solve)\b/i.test(text)
    || /(?:\d+\s*[\+\-*\/^=]\s*\d+)|[âˆ‘âˆšÏ€â‰ˆâ‰¤â‰¥]/u.test(text);
  const analysisLike = /\b(?:debug|diagnos(?:e|is)|analy[sz]e|explain why|reason through|think through|step by step|walk me through|compare|trade[- ]?offs?|plan|strategy|architecture|refactor|optimi[sz]e|investigate|root cause|edge cases?)\b/i.test(text);
  const multipart = lineCount >= 4
    || questionCount >= 2
    || /\b(?:first|second|third)\b/i.test(text)
    || /^\s*(?:[-*]|\d+\.)\s+/m.test(text);
  return {
    text,
    wordCount,
    lineCount,
    questionCount,
    codeLike,
    mathLike,
    analysisLike,
    multipart
  };
}

function getChatRequestBudget(options = {}) {
  const defaultHistoryLimit = getHistoryLimitValue();
  const defaultMaxTokens = normalizeClientLimit(
    clientLimits.maxResponseTokens,
    DEFAULT_CLIENT_LIMITS.maxResponseTokens,
    32,
    8192
  );

  return {
    historyLimit: defaultHistoryLimit,
    maxTokens: defaultMaxTokens,
    profile: "full"
  };
}

function buildComposerModelPickerOptionMarkup(item, sessionModel, titanLocked, daedalusLocked) {
  const meta = item && (item.icon || item.alt)
    ? { label: item.label, icon: item.icon || "", alt: item.alt || item.label || "" }
    : COMPOSER_MODEL_ASSETS[item.id] || { label: item.label, icon: "", alt: "" };
  if (item && item.kind === "action") {
    const safeAction = escapeHtml(item.action || "");
    const iconHtml = meta.icon
      ? `<img class="composer-model-picker-option-icon" src="${escapeHtml(meta.icon)}" width="28" height="28" alt="${escapeHtml(meta.alt || meta.label)}" />`
      : "";
    const titleAttr = item.title ? ` title="${escapeHtml(item.title)}"` : "";
    return `<button type="button" class="composer-model-picker-option" data-model-action="${safeAction}"${titleAttr}>${iconHtml}<span class="composer-model-picker-option-label">${escapeHtml(meta.label || item.label || "")}</span></button>`;
  }
  const safeId = escapeHtml(item.id);
  const active = item.id === sessionModel;
  const requiresKey = Boolean(item && item.requiresOllamaKey);
  const locked = requiresKey || (titanLocked && item.id === TITAN_MODEL_ID) || (daedalusLocked && item.id === DAEDALUS_MODEL_ID);
  const lockTitle = requiresKey
    ? "Add your own Ollama Cloud key to use Hyperion."
    : titanLocked && item.id === TITAN_MODEL_ID
    ? "Temporarily unavailable."
    : daedalusLocked && item.id === DAEDALUS_MODEL_ID
    ? "Hourly token limit reached."
    : "";
  const iconHtml = meta.icon
    ? `<img class="composer-model-picker-option-icon" src="${escapeHtml(meta.icon)}" width="28" height="28" alt="${escapeHtml(meta.alt || meta.label)}" />`
    : "";
  const lockBadge = item && item.isHyperion
    ? `<span class="composer-model-picker-option-lock">BYOK</span>`
    : locked
    ? `<span class="composer-model-picker-option-lock">${requiresKey ? "BYOK" : "Locked"}</span>`
    : "";
  const titleText = lockTitle || item.title || "";
  const lockAttrs = locked ? ` data-model-locked="true" aria-disabled="true"` : "";
  const requiresKeyAttr = requiresKey ? ` data-model-requires-key="true"` : "";
  const titleAttr = titleText ? ` title="${escapeHtml(titleText)}"` : "";
  return `<button type="button" role="option" class="composer-model-picker-option${active ? " is-active" : ""}" data-model-id="${safeId}" aria-selected="${active ? "true" : "false"}"${lockAttrs}${requiresKeyAttr}${titleAttr}>${iconHtml}<span class="composer-model-picker-option-label">${escapeHtml(meta.label)}</span>${lockBadge}</button>`;
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
  const groups = getComposerSelectableModelGroups(rows);
  const titanLocked = isTitanQuotaLocked();
  const daedalusLocked = isDaedalusQuotaLocked();
  modelPickerMenu.innerHTML = groups
    .map((group) => {
      const labelHtml = group.label
        ? `<div class="composer-model-picker-group-label">${escapeHtml(group.label)}</div>`
        : "";
      const itemsHtml = group.items
        .map((item) => buildComposerModelPickerOptionMarkup(item, sessionModel, titanLocked, daedalusLocked))
        .join("");
      return `<div class="composer-model-picker-group" role="presentation">${labelHtml}${itemsHtml}</div>`;
    })
    .join("");

  const item = rows.find((r) => r.id === sessionModel) || rows[0];
  if (item) {
    const meta = item && (item.icon || item.alt)
      ? { label: item.label, icon: item.icon || "", alt: item.alt || item.label || "" }
      : COMPOSER_MODEL_ASSETS[item.id] || { label: item.label, icon: "", alt: "" };
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
  if (normalizedId === HYPERION_MODEL_ID) {
    return HYPERION_LABEL;
  }
  if (isCustomOllamaModelId(normalizedId)) {
    return getConfiguredCustomOllamaModelId() || normalizedId;
  }
  const matched = MODEL_OPTIONS.find((item) => item.id === normalizedId);
  return matched ? matched.label : KNOWN_MODEL_LABELS[normalizedId] || normalizedId;
}

function getCurrentSessionModel() {
  const current = ensureActiveSession();
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
  // Block locked models from being activated when their shared quota is exhausted.
  let nextModel = requestedModel;
  if (isTitanQuotaLocked() && requestedModel === TITAN_MODEL_ID) {
    nextModel = HERMES_MODEL_ID;
    showThinkingBurnoutModal();
    showThinkingQuotaToast(`${HERMES_LABEL} is temporarily at capacity. Please wait for the reset window.`);
  } else if (isDaedalusQuotaLocked() && requestedModel === DAEDALUS_MODEL_ID) {
    showDaedalusLimitModal();
    syncModelSelectorWithCurrentSession();
    syncModelPanelWithCurrentSession();
    return;
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
      routeToWorkspace: false,
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
      routeToWorkspace: false,
      outputType: "Story"
    };
  }

  if (documentHint && !codeHint) {
    const inferred = inferWorkspaceOutputType("", prompt);
    return {
      type: "document",
      label: "Document",
      routeToWorkspace: false,
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
  const routeToWorkspace = false;

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
      headers: buildApiHeaders(true, { modelId: analysisModel }),
      body: JSON.stringify({
        message: prompt,
        workspace_context: workspaceValue,
        attachments: buildIntentAttachmentsPayload(attachedFiles),
        history: safeHistory,
        model: getOperationalModelId(modelId)
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
    const shouldThink = shouldEnableThinkingForRequest(sessionModel, {
      text: workspaceText,
      workspaceContext: workspaceText
    });
    const res = await fetchWithBanGuard(API_URL, {
      method: "POST",
      headers: buildApiHeaders(true, { modelId: getOperationalModelId(modelId) }),
      body: JSON.stringify(withLocalKnowledge({
        message: prompt,
        history: [],
        model: sessionModel,
        enable_thinking: shouldThink
      }))
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

const DESMOS_PLOT_COLOR = "#2d70b3";
const MATH_GRAPH_REQUEST_PATTERN = /\b(graph|plot|draw|sketch|visuali[sz]e|chart|show(?: me)?(?: the)? graph|put (?:it|this|that) on (?:the )?graph)\b/i;
const MATH_NON_GRAPH_QUESTION_PATTERN = /\b(what|what's|how|why|explain|find|solve|compare|different|difference|intercept|slope|domain|range|factor|simplify|evaluate|calculate|compute|mean|average)\b/i;

function stripMathGraphDirective(reply = "") {
  return String(reply || "").replace(/\n?\s*GRAPH:\s*[^\n]+/i, "").trim();
}

function looksLikeBareGraphExpression(text = "") {
  const value = String(text || "").trim();
  if (!value || value.length > 120 || value.includes("?")) return false;
  if (MATH_NON_GRAPH_QUESTION_PATTERN.test(value)) return false;

  const normalized = value.replace(/\u03b8/gi, "theta");
  const hasVariable = /\b(?:x|y|t|theta)\b/i.test(normalized);
  const hasMathStructure = /[=^]/.test(normalized) || /[+\-*/]/.test(normalized) || /\b(?:sin|cos|tan|log|ln|sqrt|abs)\b/i.test(normalized);
  const strippedKnownTokens = normalized
    .replace(/\b(?:sin|cos|tan|log|ln|sqrt|abs|pi|e|x|y|t|theta)\b/gi, "")
    .replace(/[0-9+\-*/^=().,\s|]/g, "");

  return hasVariable && hasMathStructure && strippedKnownTokens.length === 0;
}

function shouldGraphMathRequest(text = "") {
  const value = String(text || "").trim();
  if (!value) return false;
  return MATH_GRAPH_REQUEST_PATTERN.test(value) || looksLikeBareGraphExpression(value);
}

function extractSimpleMathExpression(text = "") {
  let candidate = String(text || "")
    .trim()
    .replace(/^what(?:'s| is)\s+/i, "")
    .replace(/^(?:please\s+)?(?:calculate|compute|evaluate)\s+/i, "")
    .replace(/\?+$/g, "")
    .replace(/,+/g, "");

  if (!candidate) return "";
  if (shouldGraphMathRequest(candidate)) return "";
  if (/\b(?:x|y|t|theta|\u03b8)\b/i.test(candidate)) return "";
  if (!/[0-9)]/.test(candidate)) return "";
  if (!/^[0-9+\-*/().,%^\sA-Za-z]+$/.test(candidate)) return "";

  const remainingLetters = candidate.replace(/\b(?:sqrt|abs|ceil|floor|round|sin|cos|tan|log|pi|e)\b/gi, "").replace(/[^A-Za-z]/g, "");
  return remainingLetters ? "" : candidate;
}

function formatSimpleMathResult(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return String(value);
  }
  if (Number.isInteger(value)) {
    return String(value);
  }
  return Number(value.toPrecision(12)).toString();
}

function evaluateSimpleMathExpression(expression = "") {
  const safeExpr = String(expression || "")
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

  return new Function(`return (${safeExpr})`)();
}

function tryAnswerSimpleMathLocally(text = "") {
  const expression = extractSimpleMathExpression(text);
  if (!expression) return "";

  let result;
  try {
    result = evaluateSimpleMathExpression(expression);
  } catch (err) {
    return "";
  }

  if (typeof result !== "number" || !Number.isFinite(result)) {
    return "";
  }

  return `${expression} = ${formatSimpleMathResult(result)}`;
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
    backgroundColor: "#ffffff",
    textColor: "#18324f",
    axisColor: "#6b7a8f",
    gridColor: "#d7e0ea",
    defaultViewport: { xmin: -10, xmax: 10, ymin: -10, ymax: 10 }
  });
}

function renderWorkspaceUI(options = {}) {
  const { focus = false } = options;
  if (!workspacePanel || !chat || !composerWrap) return;

  const current = ensureActiveSession();
  if (!current) return;
  ensureSessionWorkspace(current);
  syncModelSelectorWithCurrentSession();
  syncModelPanelWithCurrentSession();
  const workspace = current.workspace;
  if (workspace.activeTab === "model") {
    workspace.activeTab = "chat";
  }
  const activeTab = WORKSPACE_TAB_KEYS.includes(workspace.activeTab) ? workspace.activeTab : "chat";
  const isSandboxTab = activeTab === "sandbox";
  const isMathTab = activeTab === "math";

  if (mainPanel) {
    mainPanel.classList.toggle("workspace-mode", activeTab !== "chat");
  }

  syncWorkspaceTabVisibility();
  chat.hidden = activeTab !== "chat";
  composerWrap.hidden = isMathTab || isSandboxTab;
  workspacePanel.hidden = !isSandboxTab;
  if (mathPanel) {
    mathPanel.hidden = !isMathTab;
  }
  workspacePanel.dataset.tab = activeTab || "chat";
  if (workspaceDocumentShell) {
    workspaceDocumentShell.hidden = true;
  }
  if (sandboxPanel) {
    sandboxPanel.hidden = !isSandboxTab;
  }
  if (workspaceAssistantPanel) {
    workspaceAssistantPanel.hidden = true;
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

  if (isSandboxTab) {
    renderSandboxUI();
    if (focus) {
      if (sandboxChatInput && !sandboxChatInput.disabled && !getCurrentSandboxState().files.length) {
        sandboxChatInput.focus();
      } else if (sandboxFileEditor && !sandboxFileEditor.disabled) {
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
  wasWorkspaceTabActive = false;
  refreshLiveLayoutEditTargets();
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

function openMathStandaloneInCloakedTab() {
  const mathUrl = new URL(`math.html?v=${MATH_STANDALONE_VERSION}`, window.location.href).href;
  const cloakedTab = window.open("about:blank", "_blank");
  const cloakTitle = "Desmos | Graphing Calculator";
  const cloakFavicon = "https://www.desmos.com/favicon.ico";
  if (!cloakedTab) {
    window.open(mathUrl, "_blank", "noopener");
    return;
  }

  try {
    cloakedTab.opener = null;
  } catch {}

  try {
    cloakedTab.document.open();
    cloakedTab.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${cloakTitle}</title>
  <link rel="icon" href="${cloakFavicon}" />
  <style>
    html, body, iframe {
      margin: 0;
      width: 100%;
      height: 100%;
      border: 0;
      overflow: hidden;
      background: #ffffff;
    }
    iframe {
      display: block;
    }
  </style>
</head>
<body>
  <iframe src="${mathUrl}" title="${cloakTitle}" referrerpolicy="no-referrer" allowfullscreen></iframe>
</body>
</html>`);
    cloakedTab.document.close();
  } catch {
    cloakedTab.location.replace(mathUrl);
  }
}

function createMathChatMessage(role, text = "") {
  const message = document.createElement("div");
  message.className = `math-chat-msg ${role === "user" ? "math-chat-msg-user" : "math-chat-msg-bot"}`;
  if (role === "assistant") {
    setBubbleContent(message, text, false);
  } else {
    message.textContent = text;
  }
  return message;
}

function scrollMathChatToBottom() {
  if (mathChatMessages) {
    mathChatMessages.scrollTop = mathChatMessages.scrollHeight;
  }
}

async function sendMathChatMessage() {
  if (!mathChatInput || !mathChatMessages) return;
  const text = mathChatInput.value.trim();
  if (!text) return;
  const graphRequested = shouldGraphMathRequest(text);
  const localMathAnswer = graphRequested ? "" : tryAnswerSimpleMathLocally(text);

  mathChatInput.value = "";

  const userMsg = createMathChatMessage("user", text);
  mathChatMessages.appendChild(userMsg);
  scrollMathChatToBottom();

  const botMsg = createMathChatMessage("assistant", "Thinking...");
  mathChatMessages.appendChild(botMsg);
  scrollMathChatToBottom();

  if (localMathAnswer) {
    setBubbleContent(botMsg, localMathAnswer, false);
    scrollMathChatToBottom();
    return;
  }

  try {
    const sessionModel = getCurrentSessionModel();
    const prompt = `You are a helpful math assistant inside a Desmos graphing calculator.

User request: "${text}"
Graph requested: ${graphRequested ? "yes" : "no"}

Rules:
- Answer the user's question directly and clearly before anything else.
- Only end your response with a line in the exact format GRAPH: <expression> if the user explicitly asked to graph or plot something, or if the user's input is only a bare graph expression.
- Do not include GRAPH for simple arithmetic, explanations, definitions, or questions that can be answered normally without plotting.
- If a graph might help but the user did not ask for one, mention that briefly but do not include a GRAPH line.
- If you include GRAPH, provide exactly one valid Desmos expression and nothing else on that line.`;

    const reply = await runWithAutoMessageRetry(async (attempt) => {
      const res = await fetchWithBanGuard(API_URL, {
        method: "POST",
        headers: buildApiHeaders(true, { modelId: sessionModel }),
        body: JSON.stringify(withLocalKnowledge({
          message: prompt,
          history: [],
          model: sessionModel,
          max_tokens: 400,
          enable_thinking: false
        }))
      });
      if (attempt < AUTO_MESSAGE_RETRY_LIMIT && !res.ok) {
        throw buildRetryableRequestError(res, `ROK Math request failed (${res.status || "unknown"})`);
      }
      return readChatTextResponse(res, {
        onToken(answer) {
          const liveReply = stripMathGraphDirective(answer).trim();
          setBubbleContent(botMsg, liveReply || "Thinking...", false);
          scrollMathChatToBottom();
        }
      });
    }, {
      onRetry({ attempt, delayMs, error, totalAttempts }) {
        setBubbleContent(botMsg, formatAutoRetryStatusText(error, attempt, totalAttempts, "ROK Math"), false);
        scrollMathChatToBottom();
      }
    });

    // Check for GRAPH: directive and plot it
    const graphMatch = graphRequested ? reply.match(/GRAPH:\s*(.+)/i) : null;
    if (graphMatch && desmosCalculator) {
      const expression = graphMatch[1].trim();
      desmosCalculator.setExpression({ id: `math-${Date.now()}`, latex: expression, color: DESMOS_PLOT_COLOR });
    }

    // Show reply without the GRAPH line
    const displayReply = stripMathGraphDirective(reply);
    setBubbleContent(botMsg, displayReply || (graphMatch ? "Graphed it." : "Done."), true);
    scrollMathChatToBottom();
  } catch (err) {
    setBubbleContent(botMsg, "Error: " + err.message, false);
    scrollMathChatToBottom();
  }
}

function setActiveWorkspaceTab(tab, options = {}) {
  const { focus = true } = options;
  if (!WORKSPACE_TAB_KEYS.includes(tab)) return;

  closeMobileSidebarIfNeeded();
  storeWorkspaceDraftsFromWindows();
  const current = ensureActiveSession();
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

function buildSandboxRequestPayload(userPrompt, recentHistory, sessionModel, enableThinking, sandbox = getCurrentSandboxState()) {
  const promptText = String(userPrompt || SANDBOX_DEFAULT_PROMPT).trim() || SANDBOX_DEFAULT_PROMPT;
  return withLocalKnowledge({
    prompt: promptText,
    files: sandbox.files.slice(0, SANDBOX_MAX_FILES).map((item) => ({
      path: item.path,
      content: String(item.content || "").slice(0, SANDBOX_MAX_FILE_CHARS)
    })),
    attachments: buildAttachmentsPayload(),
    history: Array.isArray(recentHistory) ? recentHistory : [],
    model: getOperationalModelId(sessionModel),
    enable_thinking: Boolean(enableThinking)
  });
}

function parseSandboxAnalysisResponse(payload, promptText, modelId) {
  const analysisPayload = payload && typeof payload === "object" && payload.analysis && typeof payload.analysis === "object"
    ? payload.analysis
    : payload;
  if (!analysisPayload || typeof analysisPayload !== "object") {
    throw new Error("ROK CODE response was not valid JSON.");
  }
  const normalized = normalizeSandboxAnalysis({
    raw: typeof analysisPayload.raw === "string" ? analysisPayload.raw : "",
    summary: analysisPayload.summary,
    setup_steps: analysisPayload.setup_steps,
    setupSteps: analysisPayload.setupSteps,
    files: Array.isArray(analysisPayload.files) ? analysisPayload.files : analysisPayload.changes,
    lastPrompt: analysisPayload.lastPrompt || promptText,
    model: analysisPayload.model || modelId,
    createdAt: analysisPayload.createdAt || Date.now()
  });
  if (!normalized.summary && !normalized.files.length && !normalized.setupSteps.length) {
    throw new Error("ROK CODE response did not include a usable plan.");
  }
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
  return `**ROK CODE plan ready with ${modelLabel}.**\n\n${escapeMarkdown(analysis.summary || "Review the proposed file changes in ROK CODE.")}\n\nFiles:\n${fileLines}${setupLines}\n\nReview the previews first, then use **Apply AI Changes** when the plan looks right.`;
}

async function runSandboxAnalysis(promptText, recentHistory, sessionModel) {
  if (!saveSandboxDraftToState({ silent: false, skipRender: true })) {
    throw new Error("Save the current sandbox file before asking ROK to edit it.");
  }
  const sandbox = getCurrentSandboxState();
  const requestShouldThink = shouldEnableThinkingForRequest(sessionModel, {
    text: promptText,
    attachments,
    sandboxFiles: sandbox.files
  });
  clearSandboxExpandedChangePaths();
  setActiveSandboxAnalysis(createDefaultSandboxAnalysis());
  startSandboxActivity(promptText, sandbox);
  sandbox.statusText = "ROK is working...";
  renderSandboxUI();

  try {
    const analysis = await runWithAutoMessageRetry(async (attempt) => {
      const requestBody = buildSandboxRequestPayload(promptText, recentHistory, sessionModel, requestShouldThink, sandbox);
      const analysisModel = requestBody.model;
      activeRequestController = new AbortController();
      const res = await fetchWithBanGuard(SANDBOX_URL, {
        method: "POST",
        headers: buildApiHeaders(true, { modelId: sessionModel }),
        signal: activeRequestController.signal,
        body: JSON.stringify(requestBody)
      });
      applyThinkingQuotaFromHeaders(res);
      applyDaedalusQuotaFromHeaders(res);
      if (attempt < AUTO_MESSAGE_RETRY_LIMIT && !res.ok) {
        throw buildRetryableRequestError(res, `ROK CODE request failed (${res.status || "unknown"})`);
      }
      if (!res.ok) {
        const errorText = await safeReadResponseText(res);
        throw new Error(errorText || `ROK CODE request failed (${res.status})`);
      }
      const payload = await res.json().catch(() => null);
      return setActiveSandboxAnalysis(parseSandboxAnalysisResponse(payload, promptText, analysisModel));
    }, {
      onRetry({ attempt, error, totalAttempts }) {
        sandbox.statusText = formatAutoRetryStatusText(error, attempt, totalAttempts, "ROK CODE");
        renderSandboxUI();
      }
    });
    completeSandboxActivity(analysis, sandbox);
    sandbox.statusText = analysis.files.length
      ? `Plan ready to review (${analysis.files.length} file change${analysis.files.length === 1 ? "" : "s"})`
      : "Plan ready to review";
    syncCurrentSessionFromHistory();
    renderSandboxUI();
    return analysis;
  } catch (error) {
    const activity = failSandboxActivity(error, sandbox);
    sandbox.statusText = activity && activity.state === "stopped" ? "ROK stopped" : "ROK CODE error";
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

function sanitizeEvidenceText(value, maxChars = EVIDENCE_TEXT_PREVIEW_CHARS) {
  const collapsed = String(value || "").replace(/\s+/g, " ").trim();
  if (!collapsed) return "";
  if (!Number.isFinite(maxChars) || maxChars <= 0 || collapsed.length <= maxChars) {
    return collapsed;
  }
  return collapsed.slice(0, Math.max(24, maxChars)).trimEnd() + "...";
}

function buildRequestHistory(messages = []) {
  if (!Array.isArray(messages)) return [];
  return messages
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const role = item.role === "assistant" ? "assistant" : item.role === "user" ? "user" : null;
      const content = typeof item.content === "string" ? item.content : "";
      if (!role || !content.trim()) return null;
      return { role, content };
    })
    .filter(Boolean);
}

function sanitizeEvidenceMessageHistory(messages = []) {
  const safeHistory = buildRequestHistory(messages);
  return safeHistory
    .slice(-EVIDENCE_HISTORY_PREVIEW_LIMIT)
    .map((item) => ({
      role: item.role,
      content: sanitizeEvidenceText(item.content, EVIDENCE_TEXT_PREVIEW_CHARS)
    }));
}

function sanitizeEvidenceMemoryEntries(entries = [], sourceKey = "fact") {
  if (!Array.isArray(entries)) return [];
  return entries
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const fact = sanitizeEvidenceText(item[sourceKey], EVIDENCE_TEXT_PREVIEW_CHARS);
      if (!fact) return null;
      return {
        fact,
        kind: sanitizeEvidenceText(item.kind, 40),
        scope: sanitizeEvidenceText(item.scope, 40),
        source: sanitizeEvidenceText(item.source || item.source_query, 80)
      };
    })
    .filter(Boolean)
    .slice(0, EVIDENCE_ENTRY_PREVIEW_LIMIT);
}

function sanitizeEvidenceAttachments(entries = []) {
  if (!Array.isArray(entries)) return [];
  return entries
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const name = sanitizeEvidenceText(item.name, 120);
      if (!name) return null;
      const type = item.type === "image" ? "image" : "text";
      const size = Number.isFinite(Number(item.size)) ? Number(item.size) : 0;
      return {
        name,
        type,
        size,
        sizeLabel: size > 0 ? formatFileSize(size) : "",
        summary:
          type === "image"
            ? "Image data leaves the device with this request."
            : "File text leaves the device with this request."
      };
    })
    .filter(Boolean)
    .slice(0, EVIDENCE_ENTRY_PREVIEW_LIMIT);
}

function sanitizeEvidenceMetadata(rawEvidence) {
  if (!rawEvidence || typeof rawEvidence !== "object") return null;
  const historyPreview = sanitizeEvidenceMessageHistory(rawEvidence.messageHistory || rawEvidence.history || []);
  const historyCount = Array.isArray(rawEvidence.messageHistory || rawEvidence.history)
    ? (rawEvidence.messageHistory || rawEvidence.history).length
    : Number(rawEvidence.messageHistoryCount) || historyPreview.length;
  const workspaceText = String(rawEvidence.workspaceContext || "").trim();
  const toolNames = Array.isArray(rawEvidence.toolNames)
    ? rawEvidence.toolNames
        .map((item) => sanitizeEvidenceText(item, 60).toLowerCase())
        .filter(Boolean)
        .slice(0, 12)
    : [];
  return {
    mode: rawEvidence.mode === "sandbox" ? "sandbox" : "chat",
    model: sanitizeEvidenceText(rawEvidence.model, 80),
    promptPreview: sanitizeEvidenceText(rawEvidence.promptPreview || rawEvidence.prompt || rawEvidence.message, EVIDENCE_PROMPT_PREVIEW_CHARS),
    promptChars: Number.isFinite(Number(rawEvidence.promptChars))
      ? Number(rawEvidence.promptChars)
      : String(rawEvidence.promptPreview || rawEvidence.prompt || rawEvidence.message || "").trim().length,
    messageHistory: historyPreview,
    messageHistoryCount: historyCount,
    localMemory: sanitizeEvidenceMemoryEntries(rawEvidence.localMemory || rawEvidence.local_memory || []),
    localKnowledge: sanitizeEvidenceMemoryEntries(rawEvidence.localKnowledge || rawEvidence.local_knowledge || [], "fact"),
    attachments: sanitizeEvidenceAttachments(rawEvidence.attachments || []),
    workspaceContext: workspaceText
      ? {
          chars: workspaceText.length,
          preview: sanitizeEvidenceText(workspaceText, EVIDENCE_WORKSPACE_PREVIEW_CHARS)
        }
      : null,
    webSearchEnabled: Boolean(rawEvidence.webSearchEnabled),
    toolsEnabled: Boolean(rawEvidence.toolsEnabled),
    explicitWebToolUsed: Boolean(rawEvidence.explicitWebToolUsed),
    toolNames,
    toolFollowupCount: Math.max(0, Number(rawEvidence.toolFollowupCount) || 0),
    incognito: Boolean(rawEvidence.incognito),
    usingOwnKey: Boolean(rawEvidence.usingOwnKey),
    stopped: Boolean(rawEvidence.stopped),
    createdAt: sanitizeEvidenceText(rawEvidence.createdAt || rawEvidence.sentAt || "", 64)
  };
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
    const nextMessage = { role, content: item.content };
    if (role === "assistant") {
      const safeEvidence = sanitizeEvidenceMetadata(item.evidence);
      if (safeEvidence) {
        nextMessage.evidence = safeEvidence;
      }
    }
    cleaned.push(nextMessage);
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
    workspace: createDefaultWorkspace(),
    memory: createDefaultSessionMemory()
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

function ensureActiveSession() {
  let current = getSessionById(currentSessionId);
  if (current) {
    ensureSessionWorkspace(current);
    return current;
  }

  const next = createSession([]);
  sessions = Array.isArray(sessions) ? sessions.filter(Boolean) : [];
  sessions.unshift(next);
  sortSessionsByRecent();
  sessions = sessions.slice(0, getMaxLocalSessionsValue());
  currentSessionId = next.id;
  ensureSessionWorkspace(next);
  saveSessionsToStorage();
  saveCurrentSessionIdToStorage();
  updateCurrentSessionButton();
  renderSavedSessions();
  return next;
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
        workspace,
        memory: normalizeSessionMemory(item.memory)
      });
    }

    return loaded;
  } catch {
    return [];
  }
}

function saveSessionsToStorage() {
  if (isIncognitoModeEnabled()) {
    return;
  }
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
  if (isIncognitoModeEnabled()) {
    return;
  }
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
  const current = ensureActiveSession();
  if (!current) return;

  ensureSessionWorkspace(current);
  current.messages = sanitizeMessages(history);
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
  syncComposerMetaVisibility();
  refreshSendState();
}

function syncComposerMetaVisibility() {
  if (!composerMeta) return;
  const hasCooldown = Boolean(cooldownEl && String(cooldownEl.textContent || "").trim());
  composerMeta.hidden = !hasCooldown;
}

function buildChatWelcomeElement() {
  const wrapper = document.createElement("div");
  wrapper.id = "chatWelcome";
  wrapper.className = "chat-welcome";
  wrapper.hidden = true;
  wrapper.innerHTML = `
    <div class="chat-welcome-content" role="presentation">
      <img src="roklogo.png" alt="" class="chat-welcome-logo" />
      <div class="chat-welcome-title"></div>
      <div class="chat-welcome-subtitle"></div>
      <div class="chat-welcome-chips" aria-hidden="true"></div>
    </div>
  `;
  return wrapper;
}

function syncChatWelcomeElement(welcome) {
  if (!(welcome instanceof HTMLElement)) return;
  const profile = getChatWelcomeProfile();
  const titleEl = welcome.querySelector(".chat-welcome-title");
  const subtitleEl = welcome.querySelector(".chat-welcome-subtitle");
  const chipsEl = welcome.querySelector(".chat-welcome-chips");
  if (titleEl) titleEl.textContent = profile.title;
  if (subtitleEl) subtitleEl.textContent = profile.subtitle;
  if (chipsEl instanceof HTMLElement) {
    chipsEl.innerHTML = profile.chips.map((chip) => `
      <button
        class="chat-welcome-chip"
        type="button"
        data-chip-prompt="${escapeHtml(chip.prompt || "")}"
        ${chip.tab ? `data-chip-tab="${escapeHtml(chip.tab)}"` : ""}
      >${escapeHtml(chip.label)}</button>
    `).join("");
  }
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
  syncChatWelcomeElement(welcome);
  // Wire up welcome chip click handlers
  welcome.querySelectorAll(".chat-welcome-chip").forEach(function (chip) {
    if (chip._rokChipWired) return;
    chip._rokChipWired = true;
    chip.addEventListener("click", function () {
      const prompt = chip.getAttribute("data-chip-prompt") || "";
      const tab = chip.getAttribute("data-chip-tab") || "";
      if (tab === "sandbox") {
        setActiveWorkspaceTab("sandbox", { focus: false });
        sandboxChatDraft = prompt;
        if (sandboxChatInput) {
          sandboxChatInput.value = sandboxChatDraft;
          autoResizeSandboxChatInput();
          sandboxChatInput.focus();
        }
        return;
      }
      if (input && prompt) {
        input.value = prompt;
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
    const historyEntry = { role: item.role, content: item.content };
    if (item.role === "assistant" && item.evidence) {
      historyEntry.evidence = item.evidence;
    }
    history.push(historyEntry);
    const displayRole = item.role === "assistant" ? "bot" : "user";
    const renderStoryCanvas = item.role === "assistant" && looksLikeStoryText(item.content);
    const rendered = addMessage(displayRole, item.content, {
      markdown: item.role === "assistant" && !renderStoryCanvas,
      storyCanvas: renderStoryCanvas,
      evidence: item.role === "assistant" ? item.evidence || null : null
    });
    if (renderStoryCanvas && rendered.storyCanvas) {
      updateStoryCanvasOutput(rendered.storyCanvas, item.content);
      rendered.storyCanvas.setStatus("Complete");
      rendered.bubble.textContent = "Story ready. Use Expand to read.";
      if (item.evidence) {
        attachEvidenceToAssistantBubble(rendered.bubble, item.evidence);
      }
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

  hideHomeScreen({ renderWorkspace: false, showReadyMessage: false });
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

  hideHomeScreen({ renderWorkspace: false, showReadyMessage: false });
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
  resetAttachmentInputs();
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

function parseLegacyMemoryCommand(rawText = "") {
  const text = String(rawText || "").trim();
  if (!text) return null;

  const rememberMatch = text.match(/^\/remember\s+(.+)/i);
  if (rememberMatch) {
    return {
      normalizedText: rememberMatch[1].trim(),
      memoryOptions: {
        scope: "global",
        kind: "fact",
        source: "legacy-command"
      }
    };
  }

  const projectMatch = text.match(/^\/project\s+(.+)/i);
  if (projectMatch) {
    return {
      normalizedText: projectMatch[1].trim(),
      memoryOptions: {
        scope: "project",
        kind: "project",
        source: "legacy-command"
      }
    };
  }

  return null;
}

function pushAutoMemoryCandidate(candidates, fact, options = {}) {
  if (!Array.isArray(candidates)) return;
  const normalizedFact = sanitizeMemoryText(fact, LOCAL_MEMORY_MAX_FACT_CHARS);
  if (!normalizedFact || normalizedFact.length < 10) return;
  const key = normalizedFact.toLowerCase();
  if (candidates.some((entry) => entry && entry.key === key)) return;
  candidates.push({
    key,
    fact: normalizedFact,
    scope: options.scope === "project" ? "project" : "global",
    kind: normalizeMemoryKind(options.kind || "fact"),
    source: sanitizeMemoryText(options.source, 80) || "auto"
  });
}

function textLooksProjectScoped(text = "", options = {}) {
  if (options.forceProject) return true;
  return /\b(?:project|repo|repository|codebase|app|site|homepage|home ?screen|docs|about|chat|ui|theme|frontend|backend|workspace|sandbox|feature|composer|sidebar|rok)\b/i.test(text);
}

function maybeCaptureMemoryFromUserTurn(rawText = "", options = {}) {
  if (!isAutoLearnEnabled()) return [];
  const text = sanitizeMemoryText(rawText, 600);
  if (!text) return [];

  const candidates = [];
  const forcedMemory = options.forcedMemory && typeof options.forcedMemory === "object" ? options.forcedMemory : null;
  const session = options.session || getWorkspaceCurrentSession();
  const projectScoped = textLooksProjectScoped(text, {
    forceProject:
      Boolean(forcedMemory && forcedMemory.scope === "project")
      || Boolean(session && (isWorkspaceSessionActive() || isSandboxSessionActive()))
  });

  if (forcedMemory) {
    pushAutoMemoryCandidate(candidates, text, forcedMemory);
  }

  const explicitRemember = text.match(/^(?:remember(?: that)?|note(?: this)?|save this|keep in mind)[:\s,-]+(.+)/i);
  if (explicitRemember) {
    pushAutoMemoryCandidate(candidates, explicitRemember[1], {
      scope: projectScoped ? "project" : "global",
      kind: projectScoped ? "project" : "fact",
      source: "natural-memory"
    });
  }

  const identityMatch = text.match(/\b(?:call me|my name is|i go by)\s+([^.,!?\n]+)/i);
  if (identityMatch) {
    const preferredName = sanitizeMemoryText(identityMatch[1], 64);
    if (preferredName) {
      pushAutoMemoryCandidate(candidates, `Call the user ${preferredName}.`, {
        scope: "global",
        kind: "preference",
        source: "identity"
      });
    }
  }

  if (/^(?:i prefer|please use|please keep|keep answers|write in|be more|be less|always|never|don't|do not|avoid)\b/i.test(text)) {
    pushAutoMemoryCandidate(candidates, text, {
      scope: projectScoped ? "project" : "global",
      kind: inferMemoryKindFromText(text, projectScoped ? "rule" : "preference"),
      source: "preference"
    });
  }

  if (/^(?:for this project|in this project|for this repo|in this repo|this project uses|the project uses|this repo uses|the repo uses)\b/i.test(text)) {
    pushAutoMemoryCandidate(candidates, text, {
      scope: "project",
      kind: "project",
      source: "project-context"
    });
  }

  if (projectScoped && /^(?:rok should|this app should|the app should|this site should|the site should|we should|we need to|rok needs to|i want rok to|i want this app to|can we|could we|make it so)\b/i.test(text)) {
    pushAutoMemoryCandidate(candidates, text, {
      scope: "project",
      kind: inferMemoryKindFromText(text, "rule"),
      source: "project-directive"
    });
  }

  if (projectScoped && /\b(?:don't touch|do not touch|leave .* alone|only change|only in)\b/i.test(text)) {
    pushAutoMemoryCandidate(candidates, text, {
      scope: "project",
      kind: "rule",
      source: "project-boundary"
    });
  }

  if (projectScoped && /^(?:the goal is|the issue is|the problem is|the bug is|the blocker is)\b/i.test(text)) {
    pushAutoMemoryCandidate(candidates, text, {
      scope: "project",
      kind: "project",
      source: "project-summary"
    });
  }

  if (/\b(?:we decided|we're using|we are using|let's use|locked in|ship this|final decision)\b/i.test(text)) {
    pushAutoMemoryCandidate(candidates, text, {
      scope: projectScoped ? "project" : "global",
      kind: "decision",
      source: "decision"
    });
  }

  if (!candidates.length) return [];
  const savedEntries = candidates
    .map((candidate) => upsertRememberedFact(candidate.fact, candidate))
    .filter(Boolean);
  if (savedEntries.length) {
    renderLocalKnowledgeList();
  }
  return savedEntries;
}

function estimateBase64ByteSize(base64Text = "") {
  const normalized = String(base64Text || "").replace(/\s+/g, "");
  if (!normalized) return 0;
  const padding = normalized.endsWith("==") ? 2 : (normalized.endsWith("=") ? 1 : 0);
  return Math.max(0, Math.floor((normalized.length * 3) / 4) - padding);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(typeof reader.result === "string" ? reader.result : "");
    };
    reader.onerror = () => {
      reject(new Error("Image read failed."));
    };
    reader.readAsDataURL(file);
  });
}

function parseImageDataUrl(dataUrl, fallbackMimeType = "image/png") {
  const value = String(dataUrl || "").trim();
  const match = value.match(/^data:([^;,]+)?;base64,(.+)$/i);
  if (!match) {
    throw new Error("Invalid image data URL.");
  }

  const mimeType = String(match[1] || fallbackMimeType).trim().toLowerCase() || fallbackMimeType;
  const contentBase64 = String(match[2] || "").trim();
  if (!contentBase64) {
    throw new Error("Image encoding failed.");
  }

  return {
    mimeType,
    contentBase64,
    sizeBytes: estimateBase64ByteSize(contentBase64)
  };
}

function readImageFileAsBase64(file) {
  return readFileAsDataUrl(file).then((dataUrl) => parseImageDataUrl(dataUrl, (file && file.type) || "image/png").contentBase64);
}

function loadImageElementFromDataUrl(dataUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Could not load image preview."));
    img.src = dataUrl;
  });
}

function exportCanvasImage(canvas, mimeType, quality) {
  const safeMimeType = String(mimeType || "image/jpeg").trim().toLowerCase() || "image/jpeg";
  const dataUrl = safeMimeType === "image/png"
    ? canvas.toDataURL(safeMimeType)
    : canvas.toDataURL(safeMimeType, quality);
  return parseImageDataUrl(dataUrl, safeMimeType);
}

async function normalizeImageFileForAttachment(file) {
  const maxImageBytes = normalizeClientLimit(
    clientLimits.maxImageAttachmentBytes,
    DEFAULT_CLIENT_LIMITS.maxImageAttachmentBytes,
    1,
    64 * 1024 * 1024
  );
  const sourceDataUrl = await readFileAsDataUrl(file);
  const original = parseImageDataUrl(sourceDataUrl, (file && file.type) || "image/png");
  if (original.sizeBytes > 0 && original.sizeBytes <= maxImageBytes) {
    return {
      mimeType: original.mimeType,
      contentBase64: original.contentBase64,
      sizeBytes: original.sizeBytes,
      wasCompressed: false
    };
  }

  const img = await loadImageElementFromDataUrl(sourceDataUrl);
  const sourceWidth = Math.max(1, img.naturalWidth || img.width || 1);
  const sourceHeight = Math.max(1, img.naturalHeight || img.height || 1);
  const longestSide = Math.max(sourceWidth, sourceHeight);
  const baseScale = Math.min(1, 2200 / longestSide);
  const dimensionFactors = [1, 0.88, 0.76, 0.64, 0.52, 0.42, 0.34];
  const qualitySteps = [0.9, 0.82, 0.74, 0.66, 0.58, 0.5, 0.42];
  const mimeTypes = ["image/webp", "image/jpeg"];

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) {
    throw new Error("Image upload could not prepare a canvas.");
  }

  let smallestCandidate = null;

  for (const factor of dimensionFactors) {
    const scale = Math.max(0.12, baseScale * factor);
    const width = Math.max(1, Math.round(sourceWidth * scale));
    const height = Math.max(1, Math.round(sourceHeight * scale));
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, width, height);

    for (const mimeType of mimeTypes) {
      for (const quality of qualitySteps) {
        const exported = exportCanvasImage(canvas, mimeType, quality);
        if (!smallestCandidate || exported.sizeBytes < smallestCandidate.sizeBytes) {
          smallestCandidate = exported;
        }
        if (exported.sizeBytes > 0 && exported.sizeBytes <= maxImageBytes) {
          return {
            mimeType: exported.mimeType,
            contentBase64: exported.contentBase64,
            sizeBytes: exported.sizeBytes,
            wasCompressed: true
          };
        }
      }
    }
  }

  if (smallestCandidate && smallestCandidate.sizeBytes > 0) {
    throw new Error(`${file.name} is too large to upload, even after compressing it.`);
  }

  throw new Error(`Could not process image ${file.name}.`);
}

function getCurrentAttachedImageBytes() {
  return attachments.reduce((total, item) => {
    if (!item || item.kind !== "image") {
      return total;
    }
    const size = Number(item.size) || 0;
    return total + Math.max(0, size);
  }, 0);
}

function resetAttachmentInputs() {
  if (fileInput) {
    fileInput.value = "";
  }
  if (folderInput) {
    folderInput.value = "";
  }
}

function resetSandboxUploadInputs() {
  if (sandboxFileInput) {
    sandboxFileInput.value = "";
  }
  if (sandboxFolderInput) {
    sandboxFolderInput.value = "";
  }
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

    if (isTextLikeFile(file)) {
      if (file.size > clientLimits.maxFileSizeBytes) {
        addMessage("system", `${file.name} is too large. Max ${formatFileSize(clientLimits.maxFileSizeBytes)} per file.`);
        continue;
      }
      try {
        const content = await file.text();
        const displayName = String(file.webkitRelativePath || file.name || "file").trim() || file.name;
        attachments.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          kind: "text",
          name: displayName,
          size: file.size,
          content: truncateText(content, clientLimits.maxFileChars)
        });
        renderAttachments();
        resetAttachmentInputs();
      } catch {
        addMessage("system", `Could not read ${file.name}.`);
      }
      continue;
    }

    if (isImageLikeFile(file)) {
      try {
        const normalizedImage = await normalizeImageFileForAttachment(file);
        const displayName = String(file.webkitRelativePath || file.name || "image").trim() || file.name;
        const maxTotalImageBytes = normalizeClientLimit(
          clientLimits.maxTotalImageBytes,
          DEFAULT_CLIENT_LIMITS.maxTotalImageBytes,
          1,
          128 * 1024 * 1024
        );
        if (getCurrentAttachedImageBytes() + normalizedImage.sizeBytes > maxTotalImageBytes) {
          addMessage("system", `Image limit reached. Max ${formatFileSize(maxTotalImageBytes)} total image data per message.`);
          continue;
        }
        attachments.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          kind: "image",
          name: displayName,
          size: normalizedImage.sizeBytes,
          mimeType: normalizedImage.mimeType || (file.type || "image/png").toLowerCase(),
          contentBase64: normalizedImage.contentBase64
        });
        renderAttachments();
        resetAttachmentInputs();
      } catch (error) {
        addMessage("system", error && error.message ? error.message : `Could not read image ${file.name}.`);
      }
      continue;
    }

    addMessage("system", `${file.name} is not a supported text or image file.`);
  }

  renderAttachments();
  resetAttachmentInputs();
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
      setSandboxStatus(`ROK CODE limit reached (${SANDBOX_MAX_FILES} files).`, "error");
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
  if (importedCount) {
    clearSandboxUndoSnapshot(sandbox);
  }
  sandbox.statusText = importedCount ? `Imported ${importedCount} file${importedCount === 1 ? "" : "s"}` : "No readable files imported";
  syncCurrentSessionFromHistory();
  loadSandboxDraftFromSelectedFile(true);
  renderSandboxUI();
  resetSandboxUploadInputs();
}

function autoResizeInput() {
  if (!input) return;
  input.style.height = "auto";
  const next = Math.min(input.scrollHeight, 180);
  input.style.height = next + "px";
}

function autoResizeSandboxChatInput() {
  if (!sandboxChatInput) return;
  sandboxChatInput.style.height = "auto";
  const next = Math.min(Math.max(sandboxChatInput.scrollHeight, 96), 220);
  sandboxChatInput.style.height = next + "px";
}

function submitSandboxChatRequest(options = {}) {
  const { forceDefault = false } = options;
  if (isSending) {
    stopGeneration();
    return;
  }
  const draftText = String(sandboxChatInput ? sandboxChatInput.value : sandboxChatDraft || "").trim();
  const nextText = draftText || (forceDefault ? SANDBOX_DEFAULT_PROMPT : "");
  const sandbox = getCurrentSandboxState();
  if (!nextText && !attachments.length && !(sandbox && sandbox.files.length)) {
    return;
  }
  if (input) {
    input.value = nextText;
    autoResizeInput();
  }
  send();
  if (isSending) {
    sandboxChatDraft = "";
    if (sandboxChatInput) {
      sandboxChatInput.value = "";
      autoResizeSandboxChatInput();
    }
  }
}

function stopHomeHeroTyping() {
  homeSloganRunToken += 1;
  if (homeSloganText) {
    homeSloganText.textContent = "";
  }
}

function waitForHomeSlogan(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startHomeHeroTyping() {
  if (!homeSloganText || !HOME_SLOGANS.length) return;

  const runToken = ++homeSloganRunToken;
  const firstSlogan = HOME_SLOGANS[0] || "";

  if (prefersReducedMotion()) {
    homeSloganText.textContent = firstSlogan;
    return;
  }

  let sloganIndex = 0;
  while (runToken === homeSloganRunToken && isHomeScreenVisible()) {
    const slogan = HOME_SLOGANS[sloganIndex % HOME_SLOGANS.length] || firstSlogan;
    homeSloganText.textContent = "";

    for (let index = 1; index <= slogan.length; index += 1) {
      if (runToken !== homeSloganRunToken || !isHomeScreenVisible()) return;
      homeSloganText.textContent = slogan.slice(0, index);
      await waitForHomeSlogan(HOME_SLOGAN_TYPING_SPEED_MS);
    }

    await waitForHomeSlogan(HOME_SLOGAN_HOLD_MS);
    if (runToken !== homeSloganRunToken || !isHomeScreenVisible()) return;

    for (let index = slogan.length - 1; index >= 0; index -= 1) {
      if (runToken !== homeSloganRunToken || !isHomeScreenVisible()) return;
      homeSloganText.textContent = slogan.slice(0, index);
      await waitForHomeSlogan(HOME_SLOGAN_ERASE_SPEED_MS);
    }

    sloganIndex += 1;
    await waitForHomeSlogan(160);
  }
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
  var mathBlocks = [];
  var value = String(text || "").replace(/\r\n/g, "\n");

  function stashMathBlock(m) {
    var idx = mathBlocks.length;
    mathBlocks.push(m);
    return "%%MATH_PLACEHOLDER_" + idx + "%%";
  }

  function protectMathSegment(segment) {
    return String(segment || "")
      .replace(/\$\$([\s\S]+?)\$\$/g, stashMathBlock)
      .replace(/\\\[([\s\S]+?)\\\]/g, stashMathBlock)
      .replace(/(?<!\$)\$(?!\$)([^\$\n]+?)\$(?!\$)/g, stashMathBlock)
      .replace(/\\\(([\s\S]+?)\\\)/g, stashMathBlock);
  }

  var output = "";
  var lastIndex = 0;
  var codePattern = /```[\s\S]*?```|`[^`\n]+`/g;
  value.replace(codePattern, function (match, offset) {
    output += protectMathSegment(value.slice(lastIndex, offset));
    output += match;
    lastIndex = offset + match.length;
    return match;
  });
  output += protectMathSegment(value.slice(lastIndex));

  return { text: output, mathBlocks: mathBlocks };
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

function normalizeLooseMarkdownCodeFences(text) {
  return String(text || "").replace(/\r\n/g, "\n");
}

function normalizeQuotedFenceBlocks(text) {
  return String(text || "").replace(
    /(^|\n)\s*(?:[`"'\u201c\u201d\u2018\u2019]{3})\s*([a-z0-9_#+-]+)\s*\n([\s\S]*?)\n\s*(?:[`"'\u201c\u201d\u2018\u2019]{3})(?=\n|$)/gi,
    function (match, prefix, language, body) {
      var formatted = formatStructuredLanguageBlock(language, body);
      return formatted ? prefix + formatted : match;
    }
  );
}

function normalizeFenceWrapperQuoteLines(text) {
  return String(text || "")
    .replace(/(^|\n)\s*["'\u201c\u201d\u2018\u2019]\s*\n(?=```)/g, "$1")
    .replace(/(\n```(?:\n|$))\s*["'\u201c\u201d\u2018\u2019]\s*(?=\n|$)/g, "$1");
}

function normalizeMermaidBlockBody(body) {
  var value = String(body || "").replace(/\r\n/g, "\n").trim();
  if (!value) {
    return "";
  }
  value = value.replace(/^((?:flowchart|graph)\s+[a-z0-9_-]+)\s+([\s\S]+)$/i, function (_, directive, remainder) {
    var rest = String(remainder || "").trim();
    return rest ? directive + "\n" + rest : directive;
  });
  return value.replace(/(\]|\)|\})\s+([a-z][a-z0-9_:-]*\s*(?:-->|---|==>|-.->|--x|x--|o--|--o))/gi, "$1\n$2");
}

function looksLikeMermaidContinuation(body) {
  var text = String(body || "").trim();
  if (!text) {
    return false;
  }
  if (/^(?:-->|---|==>|-.->|--x|x--|o--|--o)/.test(text)) {
    return true;
  }
  return /-->|---|==>|-.->|--x|x--|o--|--o/.test(text) &&
    /(?:\[[^\]]+\]|\{[^\}]+\}|\([^)]+\)|\bsubgraph\b|\bend\b)/i.test(text);
}

const STRUCTURED_MARKDOWN_LANGUAGES = [
  "mermaid",
  "python",
  "py",
  "javascript",
  "js",
  "typescript",
  "ts",
  "bash",
  "sh",
  "shell",
  "json",
  "html",
  "css",
  "sql",
  "yaml",
  "yml",
  "c",
  "cpp",
  "c++",
  "csharp",
  "cs",
  "java",
  "go",
  "rust",
  "rs"
];

function formatStructuredLanguageBlock(language, body) {
  var normalizedLanguage = String(language || "").trim().toLowerCase();
  if (!STRUCTURED_MARKDOWN_LANGUAGES.includes(normalizedLanguage)) {
    return "";
  }
  var normalizedBody = String(body || "").trim();
  if (normalizedLanguage !== "mermaid" && looksLikeMermaidContinuation(normalizedBody)) {
    return "";
  }
  if (!looksLikeStructuredLanguageBlock(normalizedLanguage, normalizedBody)) {
    return "";
  }
  if (normalizedLanguage === "mermaid") {
    normalizedBody = normalizeMermaidBlockBody(normalizedBody);
  }
  return "```" + normalizedLanguage + "\n" + normalizedBody + "\n```";
}

function looksLikeStructuredLanguageBlock(language, body) {
  var lang = String(language || "").trim().toLowerCase();
  var text = String(body || "").trim();
  if (!lang || !text) return false;
  if (lang === "mermaid") {
    return /\b(?:graph|flowchart|sequenceDiagram|classDiagram|stateDiagram|erDiagram|journey|mindmap|timeline|quadrantChart|gitGraph)\b/.test(text) ||
      /-->|---|\[[^\]]+\]|\{[^\}]+\}/.test(text);
  }
  return /(?:\bdef\b|\bclass\b|\bimport\b|\breturn\b|\bif\b|\belse\b|\btry\b|\bcatch\b|\bfunction\b|\bconst\b|\blet\b|\bvar\b|\bpackage\b|\bfn\b|=>|==|!=|:=|::|->|\{|\}|;|#|<\w+|SELECT\b|INSERT\b|UPDATE\b|DELETE\b|\b[a-z_][a-z0-9_]*\s*=|\w+\.\w+\(|\w+\()/i.test(text);
}

function normalizeStructuredLanguageLine(line) {
  var raw = String(line || "");
  var trimmed = raw.trim();
  if (!trimmed) {
    return raw;
  }
  var match = trimmed.match(/^(?:[`"]{1,3}\s*)?(?:```+\s*)?([a-z0-9_#+-]+)\s+([\s\S]*?)(?:\s*```+|[`"]{1,3})?$/i);
  if (!match) {
    return raw;
  }
  var formatted = formatStructuredLanguageBlock(match[1], match[2]);
  return formatted || raw;
}

function normalizeStructuredLanguageLines(text) {
  var value = String(text || "").replace(/\r\n/g, "\n");
  return value
    .split("\n")
    .map(normalizeStructuredLanguageLine)
    .join("\n");
}

function normalizeStructuredLanguageParagraph(paragraph) {
  var raw = String(paragraph || "");
  var trimmed = raw.trim();
  if (!trimmed) {
    return raw;
  }
  if (/^```[a-z0-9_#+-]*\s*\n[\s\S]*\n```$/i.test(trimmed)) {
    return trimmed;
  }
  var match = trimmed.match(/^(?:[`"'\u201c\u201d\u2018\u2019]{1,3}\s*)?(?:```+\s*)?([a-z0-9_#+-]+)\s+([\s\S]*?)(?:\s*```+|[`"'\u201c\u201d\u2018\u2019]{1,3})?$/i);
  if (!match) {
    return raw;
  }
  var formatted = formatStructuredLanguageBlock(match[1], match[2]);
  return formatted || raw;
}

function normalizeStructuredLanguageParagraphs(text) {
  var value = String(text || "").replace(/\r\n/g, "\n");
  return value
    .split(/\n{2,}/)
    .map(normalizeStructuredLanguageParagraph)
    .join("\n\n");
}

function normalizeAssistantParagraph(paragraph) {
  var raw = String(paragraph || "");
  var trimmed = raw.trim();
  if (!trimmed) {
    return raw;
  }
  var normalizedParagraph = normalizeStructuredLanguageParagraph(trimmed);
  if (normalizedParagraph !== trimmed) {
    return normalizedParagraph;
  }
  if (/^```[a-z0-9_#+-]*\s*\n[\s\S]*\n```$/i.test(trimmed)) {
    return trimmed;
  }
  var match = trimmed.match(/^(?:[`"'“”‘’]{2,3}\s*)?(?:```+\s*)?([a-z0-9_#+-]+)\s+([\s\S]*?)(?:\s*```+|[`"'“”‘’]{2,3})?$/i);
  if (!match) {
    return raw;
  }
  var formatted = formatStructuredLanguageBlock(match[1], match[2]);
  return formatted || raw;
}

function normalizeBareLanguageParagraphs(text) {
  var value = String(text || "").replace(/\r\n/g, "\n");
  var paragraphs = value.split(/\n{2,}/);
  return paragraphs.map(normalizeAssistantParagraph).join("\n\n");
}

function normalizeAssistantMarkdown(text) {
  return normalizeBareLanguageParagraphs(
    normalizeStructuredLanguageLines(
      normalizeStructuredLanguageParagraphs(
        normalizeFenceWrapperQuoteLines(
          normalizeQuotedFenceBlocks(
            normalizeLooseMarkdownCodeFences(text)
          )
        )
      )
    )
  );
}

function renderInlineMarkdownFallback(text) {
  var placeholders = [];
  var value = escapeHtml(String(text || ""));
  value = value.replace(/`([^`]+)`/g, function (_, code) {
    var idx = placeholders.length;
    placeholders.push("<code>" + code + "</code>");
    return "@@ROKINLINECODE" + idx + "@@";
  });
  value = value.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, function (_, label, href) {
    return '<a href="' + href + '">' + label + "</a>";
  });
  value = value.replace(/\*\*([\s\S]+?)\*\*/g, "<strong>$1</strong>");
  value = value.replace(/__([\s\S]+?)__/g, "<strong>$1</strong>");
  value = value.replace(/\*([^*\n]+)\*/g, "<em>$1</em>");
  value = value.replace(/_([^_\n]+)_/g, "<em>$1</em>");
  value = value.replace(/@@ROKINLINECODE(\d+)@@/g, function (_, idxStr) {
    var idx = parseInt(idxStr, 10);
    return placeholders[idx] || "";
  });
  return value;
}

function renderMarkdownFallback(text) {
  var source = String(text || "").replace(/\r\n/g, "\n");
  var codeBlocks = [];
  var protectedText = source.replace(/```([a-z0-9_#+-]*)\n([\s\S]*?)\n```/gi, function (_, language, body) {
    var idx = codeBlocks.length;
    codeBlocks.push({
      language: String(language || "").trim().toLowerCase(),
      body: String(body || "")
    });
    return "@@ROKCODEBLOCK" + idx + "@@";
  });

  function renderCodeBlock(matchText) {
    return String(matchText || "").replace(/@@ROKCODEBLOCK(\d+)@@/g, function (_, idxStr) {
      var idx = parseInt(idxStr, 10);
      var block = codeBlocks[idx];
      if (!block) return "";
      var classAttr = block.language ? ' class="language-' + escapeHtml(block.language) + '"' : "";
      return "<pre><code" + classAttr + ">" + escapeHtml(block.body) + "</code></pre>";
    });
  }

  var blocks = protectedText
    .split(/\n{2,}/)
    .map(function (block) { return String(block || "").trim(); })
    .filter(Boolean);

  return blocks.map(function (block) {
    if (/^@@ROKCODEBLOCK\d+@@$/.test(block)) {
      return renderCodeBlock(block);
    }

    var lines = block.split("\n");
    if (lines.every(function (line) { return /^\d+\.\s+/.test(line); })) {
      return "<ol>" + lines.map(function (line) {
        return "<li>" + renderInlineMarkdownFallback(line.replace(/^\d+\.\s+/, "")) + "</li>";
      }).join("") + "</ol>";
    }

    if (lines.every(function (line) { return /^[-*]\s+/.test(line); })) {
      return "<ul>" + lines.map(function (line) {
        return "<li>" + renderInlineMarkdownFallback(line.replace(/^[-*]\s+/, "")) + "</li>";
      }).join("") + "</ul>";
    }

    var headingMatch = block.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      var level = Math.max(1, Math.min(6, headingMatch[1].length));
      return "<h" + level + ">" + renderInlineMarkdownFallback(headingMatch[2]) + "</h" + level + ">";
    }

    return "<p>" + renderCodeBlock(renderInlineMarkdownFallback(block).replace(/\n/g, "<br>")) + "</p>";
  }).join("\n");
}

function renderAssistantMarkdownHtml(text) {
  var normalizedMarkdown = normalizeAssistantMarkdown(text);
  if (hasMarked) {
    try {
      var mathProtected = hasKaTeX ? protectMathForMarked(normalizedMarkdown) : null;
      var rawHtml = marked.parse(mathProtected ? mathProtected.text : normalizedMarkdown);
      if (mathProtected) {
        rawHtml = restoreMathAfterMarked(rawHtml, mathProtected.mathBlocks);
      }
      return rawHtml;
    } catch (error) {
      console.warn("Markdown render failed, falling back to local renderer:", error);
    }
  }
  return renderMarkdownFallback(normalizedMarkdown);
}

function ensureMermaidInitialized() {
  if (!hasMermaid || mermaidInitialized) return;
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    theme: "base",
    themeVariables: {
      background: "#12090B",
      primaryColor: "#231214",
      primaryTextColor: "#F7ECE8",
      primaryBorderColor: "#5F2A2D",
      lineColor: "#C14C42",
      secondaryColor: "#1A0D0F",
      tertiaryColor: "#160B0D",
      mainBkg: "#231214",
      secondBkg: "#1A0D0F",
      tertiaryBkg: "#160B0D",
      clusterBkg: "#1A0D0F",
      clusterBorder: "#5F2A2D",
      edgeLabelBackground: "#12090B",
      fontFamily: "Sora, Segoe UI, sans-serif",
      textColor: "#F7ECE8",
      nodeTextColor: "#F7ECE8"
    },
    flowchart: {
      curve: "basis"
    }
  });
  mermaidInitialized = true;
}

async function renderMermaidBlocksInElement(root) {
  if (!hasMermaid || !(root instanceof HTMLElement)) return;
  const mermaidCodeBlocks = Array.from(
    root.querySelectorAll("pre > code.language-mermaid, pre > code.lang-mermaid, pre > code[class*=\"language-mermaid\"]")
  );
  if (!mermaidCodeBlocks.length) return;
  ensureMermaidInitialized();
  for (const codeEl of mermaidCodeBlocks) {
    const pre = codeEl.closest("pre");
    if (!pre || pre.dataset.mermaidRendered === "1") continue;
    const source = String(codeEl.textContent || "").trim();
    if (!source) continue;
    pre.dataset.mermaidRendered = "1";
    const container = document.createElement("div");
    container.className = "mermaid-block";
    container.setAttribute("data-mermaid-source", source);
    try {
      const renderId = "rok-mermaid-" + Math.random().toString(36).slice(2, 10);
      const renderResult = await mermaid.render(renderId, source);
      container.innerHTML = renderResult.svg;
      if (typeof renderResult.bindFunctions === "function") {
        renderResult.bindFunctions(container);
      }
    } catch (error) {
      container.classList.add("mermaid-block-error");
      const errorLabel = document.createElement("div");
      errorLabel.className = "mermaid-block-error-label";
      errorLabel.textContent = "Diagram couldn't render";
      const fallbackPre = document.createElement("pre");
      fallbackPre.textContent = source;
      container.appendChild(errorLabel);
      container.appendChild(fallbackPre);
      console.warn("Mermaid render failed:", error);
    }
    pre.replaceWith(container);
  }
}

function setBubbleContent(bubble, text, markdown) {
  if (markdown) {
    var wasPlain = bubble.classList.contains("plain");
    bubble.classList.remove("plain");
    bubble.classList.add("markdown");
    var rawHtml = renderAssistantMarkdownHtml(text);
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
      const codeEl = pre.querySelector("code");
      if (codeEl && /\blang(?:uage)?-mermaid\b/i.test(codeEl.className || "")) {
        return;
      }
      const wrapper = document.createElement("div");
      wrapper.className = "code-block-wrapper";
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
      // Language label
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
    void renderMermaidBlocksInElement(bubble);
  } else {
    bubble.classList.remove("markdown");
    bubble.classList.add("plain");
    bubble.textContent = text;
  }
  syncAssistantBubbleActionButtons(bubble);
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
  const { markdown = false, storyCanvas = false, thinkingBlock = false, typingDots = false, evidence = null } = options;

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
    attachEvidenceToAssistantBubble(mounted.bubble, evidence);
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
  if (role === "bot") {
    attachEvidenceToAssistantBubble(bubble, evidence);
  }
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
    syncComposerMetaVisibility();
    return false;
  }
  const seconds = Math.ceil(remaining / 1000);
  cooldownEl.textContent = `Wait ${seconds}s before sending again.`;
  syncComposerMetaVisibility();
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

function refreshMemoryToggleButtons() {
  const uiLocked = isSending || isIntentClassificationLoading;
  const incognitoEnabled = isIncognitoModeEnabled();
  const memoryActive = isMemoryEnabled();

  if (memoryToggleBtn) {
    memoryToggleBtn.setAttribute("aria-pressed", memoryActive ? "true" : "false");
    memoryToggleBtn.classList.toggle("is-active", memoryActive);
    memoryToggleBtn.textContent = incognitoEnabled ? "Memory Paused" : (memoryActive ? "Memory On" : "Memory Off");
    memoryToggleBtn.disabled = uiLocked || incognitoEnabled;
  }

  if (incognitoToggleBtn) {
    incognitoToggleBtn.setAttribute("aria-pressed", incognitoEnabled ? "true" : "false");
    incognitoToggleBtn.classList.toggle("is-active", incognitoEnabled);
    incognitoToggleBtn.textContent = incognitoEnabled ? "Incognito On" : "Incognito Off";
    incognitoToggleBtn.disabled = uiLocked;
  }
}

function setMemoryEnabled(nextEnabled) {
  persistUserSettingsPatch({ memoryEnabled: Boolean(nextEnabled) });
  refreshMemoryToggleButtons();
  renderLocalKnowledgeList();
}

function setIncognitoMode(nextEnabled) {
  persistUserSettingsPatch({ incognitoMode: Boolean(nextEnabled) });
  setComposerTrayOpen(false);
  refreshMemoryToggleButtons();
  renderLocalKnowledgeList();
}

function setToolsEnabled(nextEnabled) {
  toolsEnabled = false;
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
  if (attachFolderBtn) {
    attachFolderBtn.disabled = uiLocked;
  }
  if (webToggleBtn) {
    webToggleBtn.disabled = uiLocked;
  }
  if (toolsToggleBtn) {
    toolsToggleBtn.disabled = uiLocked;
  }
  refreshMemoryToggleButtons();
  if (fileInput) {
    fileInput.disabled = uiLocked;
  }
  if (folderInput) {
    folderInput.disabled = uiLocked;
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
    syncComposerMetaVisibility();
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
  syncComposerMetaVisibility();
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
  if (isHomeScreenVisible()) {
    hideHomeScreen({ renderWorkspace: true, showReadyMessage: false });
  }
  ensureActiveSession();
  let text = input.value?.trim() || "";
  const legacyMemoryCommand = parseLegacyMemoryCommand(text);
  if (legacyMemoryCommand && legacyMemoryCommand.normalizedText) {
    text = legacyMemoryCommand.normalizedText;
  }
  
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

  // Handle /pictionary command
  if (text && text.startsWith("/pictionary")) {
    input.value = "";
    autoResizeInput();
    handlePictionaryCommand();
    return;
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
    showThinkingQuotaToast(`${HERMES_LABEL} is temporarily at capacity. Please wait a moment and try again.`);
    refreshComposerModelPicker();
    return;
  }
  if (sessionModel === DAEDALUS_MODEL_ID && isDaedalusQuotaLocked()) {
    showDaedalusLimitModal();
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
  const requestShouldThink = shouldEnableThinkingForRequest(sessionModel, {
    text: text || displayText,
    workspaceContext: sessionWorkspaceContext,
    attachments,
    sandboxFiles: sessionSandbox ? sessionSandbox.files : []
  });
  const requestBudget = getChatRequestBudget({
    text: text || displayText,
    workspaceContext: sessionWorkspaceContext,
    attachments,
    sandboxFiles: sessionSandbox ? sessionSandbox.files : [],
    toolsEnabled,
    webSearchEnabled
  });
  const requestHistoryLimit = Math.max(1, Math.min(getHistoryLimitValue(), requestBudget.historyLimit || getHistoryLimitValue()));
  const intentHistory = buildRequestHistory(history.slice(-Math.min(requestHistoryLimit, INTENT_HISTORY_CONTEXT_LIMIT)));
  const recentHistory = buildRequestHistory(history.slice(-requestHistoryLimit));
  const priorHistoryLength = history.length;
  let baseRequestBody;
  if (sandboxActive) {
    const sandboxPreviewPayload = buildSandboxRequestPayload(
      text || SANDBOX_DEFAULT_PROMPT,
      recentHistory,
      sessionModel,
      requestShouldThink,
      sessionSandbox || getCurrentSandboxState()
    );
    baseRequestBody = {
      message: sandboxPreviewPayload.prompt || text || SANDBOX_DEFAULT_PROMPT,
      attachments: [
        ...(Array.isArray(sandboxPreviewPayload.attachments) ? sandboxPreviewPayload.attachments : []),
        ...(Array.isArray(sandboxPreviewPayload.files)
          ? sandboxPreviewPayload.files.map((item) => ({
              type: "text",
              name: item.path || "sandbox-file",
              size: String(item.content || "").length
            }))
          : [])
      ],
      history: Array.isArray(sandboxPreviewPayload.history) ? sandboxPreviewPayload.history : [],
      model: sandboxPreviewPayload.model || sessionModel,
      local_memory: sandboxPreviewPayload.local_memory || [],
      local_knowledge: sandboxPreviewPayload.local_knowledge || [],
      incognito: Boolean(sandboxPreviewPayload.incognito),
      enable_thinking: Boolean(sandboxPreviewPayload.enable_thinking),
      workspace_context: ""
    };
  } else {
    const messageForApiPreview = buildMessageForApi(text, "");
    const attachmentsPayloadPreview = buildAttachmentsPayload();
    baseRequestBody = withLocalKnowledge({
      message: messageForApiPreview,
      workspace_context: "",
      attachments: attachmentsPayloadPreview,
      history: recentHistory,
      model: sessionModel,
      max_tokens: requestBudget.maxTokens,
      enable_thinking: requestShouldThink
    });
    if (webSearchEnabled) {
      baseRequestBody.enable_web_search = true;
    }
    if (toolsEnabled) {
      baseRequestBody.tools = BUILTIN_TOOLS;
    }
  }
  const sendEvidencePreview = buildAssistantEvidenceSnapshot({
    requestBody: baseRequestBody,
    model: sessionModel
  });
  if (shouldPromptBeforeSendForEvidence(sendEvidencePreview)) {
    const approved = await openAskBeforeSendModal(sendEvidencePreview);
    if (!approved) {
      if (input) {
        input.focus();
      }
      return;
    }
  }

  maybeCaptureMemoryFromUserTurn(text, {
    forcedMemory: legacyMemoryCommand ? legacyMemoryCommand.memoryOptions : null
  });

  addMessage("user", displayText);
  history.push({ role: "user", content: displayText });
  if (sandboxActive) {
    pushSandboxConversationMessage("user", displayText);
  }
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
  if (sandboxActive) {
    renderSandboxUI();
  }

  const typing = addMessage(
    "bot",
    "",
    { typingDots: true }
  );
  const botAvatar = typing.row.querySelector(".avatar");
  const botAvatarMarkup = botAvatar ? botAvatar.innerHTML : "R";
  const setBotAvatarGif = (src, variant = "") => {
    if (!botAvatar) return;
    const variantClass = variant ? ` is-${variant}` : "";
    botAvatar.innerHTML = `<img src="${src}" class="avatar-gif${variantClass}" alt="">`;
  };
  const showThinkingAvatar = () => {
    setBotAvatarGif("rokthinking.gif", "thinking");
  };
  const showGeneratingAvatar = () => {
    setBotAvatarGif("rokgenerating.gif", "generating");
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
  let autoWebRetryAttempted = false;
  let forceWebSearchForRetry = false;
  let assistantEvidence = buildAssistantEvidenceSnapshot({
    requestBody: baseRequestBody,
    model: sessionModel
  });
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
      thinkingBlock: requestShouldThink,
      showTypingDots: true
    });
    bubble = mounted.bubble;
    storyCanvas = mounted.storyCanvas;
    thinkingPanel = mounted.thinkingPanel;
    typingIndicator = mounted.typingIndicator;
    if (requestShouldThink) {
      showThinkingAvatar();
    } else {
      showGeneratingAvatar();
    }
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
    if (!answerStarted) {
      showThinkingAvatar();
    }
    thinkingText += piece;
    if (!thinkingText.trim()) {
      return;
    }
    thinkingPanel.shell.hidden = false;
    thinkingPanel.shell.classList.toggle("is-streaming", !answerStarted);
    setThinkingSummaryLabel("Thinking...");
    var html = renderAssistantMarkdownHtml(thinkingText.trim());
    var cleanHtml = hasDOMPurify ? DOMPurify.sanitize(html) : html;
    thinkingPanel.body.innerHTML = cleanHtml;
    renderKatexInElement(thinkingPanel.body);
    void renderMermaidBlocksInElement(thinkingPanel.body);
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
      if (retryLine) retryLine.textContent = `âŸ³ ${value}`;
    } else if (bubble) {
      // Clear retry indicator when a real answer starts
      const existing = bubble.querySelector(".retry-status-line");
      if (existing) existing.remove();
      bubble.removeAttribute("data-retry-status");
    }

    if (bubble && !isRetryStatus && !answerStarted && !String(partialText || "").trim()) {
      bubble.classList.remove("markdown");
      bubble.classList.add("plain");
      bubble.textContent = value;
    }

    scrollToBottom();
  };
  const getToolCallName = (toolCall) => {
    const fn = toolCall && (toolCall.function || toolCall);
    return String((fn && fn.name) || "").trim().toLowerCase();
  };
  const isSlashToolDraft = (text) => {
    const trimmed = String(text || "").trim().toLowerCase();
    return (
      trimmed.startsWith("/websearch") ||
      trimmed.startsWith("/web_search") ||
      trimmed.startsWith("/webfetch") ||
      trimmed.startsWith("/web_fetch")
    );
  };
  const isJsonToolDraft = (text) => {
    const trimmed = String(text || "").trim();
    return /^\{[\s\S]*\}$/.test(trimmed) && (/"query"\s*:/.test(trimmed) || /"url"\s*:/.test(trimmed));
  };
  const shouldHideAssistantToolDraft = (toolCalls, assistantContent) => {
    const trimmed = String(assistantContent || "").trim();
    if (!trimmed) return false;
    const toolNames = Array.isArray(toolCalls)
      ? toolCalls.map((toolCall) => getToolCallName(toolCall)).filter(Boolean)
      : [];
    if (!toolNames.length) return false;
    const onlyWebTools = toolNames.every((name) => name === "web_search" || name === "web_fetch");
    if (!onlyWebTools) return false;
    return isSlashToolDraft(trimmed) || isJsonToolDraft(trimmed);
  };
  const getToolStatusText = (toolCalls) => {
    const toolNames = Array.isArray(toolCalls)
      ? toolCalls.map((toolCall) => getToolCallName(toolCall)).filter(Boolean)
      : [];
    if (toolNames.length && toolNames.every((name) => name === "web_search" || name === "web_fetch")) {
      return "Searching the web...";
    }
    const callNames = toolNames.length ? toolNames.join(", ") : "unknown";
    return `Calling tool${toolCalls.length > 1 ? "s" : ""}: ${callNames}`;
  };
  const handleToolCalls = (toolCalls, assistantContent) => {
    if (!Array.isArray(toolCalls) || !toolCalls.length) return;
    markAssistantStreamStarted();
    recordToolCallsInEvidence(assistantEvidence, toolCalls);
    const visibleAssistantContent = shouldHideAssistantToolDraft(toolCalls, assistantContent)
      ? ""
      : String(assistantContent || "");
    // Collect tool calls for auto-execution after stream ends
    for (const tc of toolCalls) {
      pendingToolCalls.push({ ...tc, _assistantContent: visibleAssistantContent });
    }
    handleStatusUpdate(getToolStatusText(toolCalls));
    // If the model also produced text content alongside tool calls, show it
    if (visibleAssistantContent.trim()) {
      consumeTaggedTokenChunk(visibleAssistantContent);
    }
  };
  const isWebSearchActiveForRequest = () => webSearchEnabled || forceWebSearchForRetry;
  const shouldAutoRetryWithWebSearch = () => {
    if (writeBackToWorkspace || sandboxActive) return false;
    if (isWebSearchActiveForRequest() || autoWebRetryAttempted || stopRequested) return false;
    return isSlashToolDraft(partialText);
  };
  const resetAssistantUiForAutoWebRetry = () => {
    partialText = "";
    thinkingText = "";
    thinkTagCarry = "";
    insideThinkTag = false;
    answerStarted = false;
    assistantStreamStarted = false;
    pendingToolCalls = [];
    thinkingTitleRequested = false;
    thinkingTitleResolved = false;
    streamRenderState.lastFlush = 0;
    if (writeBackToWorkspace) {
      return;
    }
    const mounted = populateBotMessageContainer(typing.bubble, {
      storyCanvas: useStoryCanvas,
      thinkingBlock: requestShouldThink,
      showTypingDots: true
    });
    bubble = mounted.bubble;
    storyCanvas = mounted.storyCanvas;
    thinkingPanel = mounted.thinkingPanel;
    typingIndicator = mounted.typingIndicator;
    typingRowConverted = true;
    if (requestShouldThink) {
      showThinkingAvatar();
    } else {
      showGeneratingAvatar();
    }
    if (assistantEvidence) {
      assistantEvidence.webSearchEnabled = true;
    }
    handleStatusUpdate("Searching the web...");
  };
  const noteAnswerStarted = () => {
    if (answerStarted) return;
    answerStarted = true;
    showGeneratingAvatar();
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
        setBubbleContent(bubble, "Analyzing ROK CODE...", false);
      }
      const analysis = await runSandboxAnalysis(text || SANDBOX_DEFAULT_PROMPT, recentHistory, sessionModel);
      const chatSummary = buildSandboxChatSummary(analysis);
      const finalEvidence = finalizeAssistantEvidence(assistantEvidence);
      if (bubble) {
        setBubbleContent(bubble, chatSummary, true);
        attachEvidenceToAssistantBubble(bubble, finalEvidence);
      }
      history.push({ role: "assistant", content: chatSummary, evidence: finalEvidence });
      pushSandboxConversationMessage("assistant", chatSummary);
      trimHistoryToLimit();
      syncCurrentSessionFromHistory();
      renderSandboxUI();
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

    writeBackToWorkspace = false;
    useStoryCanvas = shouldUseStoryCanvasForIntent(intent);
    workspaceContext = "";
    hasWorkspaceContext = false;
    requestedOutputType = intent.outputType || inferWorkspaceOutputType("", text);

    const maxHistoryMessages = getMaxHistoryMessagesValue();
    if (maxHistoryMessages > 0 && priorHistoryLength > maxHistoryMessages * 0.8) {
      showCompactingBar();
    }

    const messageForApi = String(baseRequestBody.message || buildMessageForApi(text, workspaceContext));
    const attachmentsPayload = Array.isArray(baseRequestBody.attachments) ? baseRequestBody.attachments : buildAttachmentsPayload();
    const imageAttachmentCount = attachmentsPayload.filter((item) => item && item.type === "image").length;
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

    requestAttemptLoop: while (true) {
      console.log("sending chat request...");
      if (!writeBackToWorkspace) {
        if (imageAttachmentCount > 0) {
          handleStatusUpdate(`Analyzing image${imageAttachmentCount === 1 ? "" : "s"}...`);
        } else if (isWebSearchActiveForRequest()) {
          handleStatusUpdate("Searching the web...");
        }
      }
      const requestBody = JSON.parse(JSON.stringify(baseRequestBody));
      requestBody.workspace_context = workspaceContext;
      if (isWebSearchActiveForRequest()) {
        requestBody.enable_web_search = true;
      }
      const res = await runWithAutoMessageRetry(async (attempt) => {
        activeRequestController = new AbortController();
        const response = await fetchWithBanGuard(API_URL, {
          method: "POST",
          headers: buildApiHeaders(true, { modelId: sessionModel }),
          signal: activeRequestController.signal,
          body: JSON.stringify(requestBody)
        });
        const responseContentType = (response.headers.get("content-type") || "").toLowerCase();
        if (attempt < AUTO_MESSAGE_RETRY_LIMIT && (!response.ok || responseContentType.includes("text/html"))) {
          throw buildRetryableRequestError(response, `ROK request failed (${response.status || "unknown"})`);
        }
        return response;
      }, {
        onRetry({ attempt, delayMs, error, totalAttempts }) {
          if (Number(error && error.retryAfterSec) > 0) {
            nextAllowedAt = Date.now() + delayMs;
            startCooldownTimer();
            refreshSendState();
          }
          const retryStatusText = formatAutoRetryStatusText(error, attempt, totalAttempts, "ROK");
          if (writeBackToWorkspace) {
            setWorkspaceAssistantGenerationPhase(WORKSPACE_GENERATION_PHASES.drafting, {
              intentText: hasWorkspaceContext
                ? "Retrying the workspace-aware draft after a request error."
                : "Retrying the draft after a request error.",
              outputTypeText: requestedOutputType,
              summaryText: retryStatusText
            });
            return;
          }
          handleStatusUpdate(retryStatusText);
        }
      });

    const contentType = (res.headers.get("content-type") || "").toLowerCase();
    const contextCompactedHeader =
      String(res.headers.get("X-Context-Compacted") || "").trim().toLowerCase() === "true";
    if (contextCompactedHeader) {
      showCompactingBar();
    }
    // Read server-enforced thinking quota from response headers and update UI
    applyThinkingQuotaFromHeaders(res);
    // Read Daedalus quota headers (independent of Titan â€” exhausting one doesn't lock the other)
    applyDaedalusQuotaFromHeaders(res);

    if (!res.ok || contentType.includes("text/html")) {
      let errorMessage = "Request failed.";
      let errorBody = await safeReadResponseText(res);
      let errorCode = "";
      if (errorBody) {
        try {
          const data = JSON.parse(errorBody);
          errorMessage = data.reply || data.error || errorMessage;
          errorCode = typeof data.code === "string" ? data.code : "";
          if (data && typeof data === "object" && data.quota && typeof data.quota === "object") {
            applyDaedalusQuota(data.quota);
          }
        } catch {
          errorMessage = errorBody;
        }
      }

      if (res.status === 429) {
        const retryAfterSec = parseInt(res.headers.get("Retry-After") || "15", 10);
        nextAllowedAt = Date.now() + retryAfterSec * 1000;
        startCooldownTimer();
        refreshSendState();
        if (errorCode === "daedalus_limit_reached" || (sessionModel === DAEDALUS_MODEL_ID && isDaedalusQuotaLocked())) {
          showDaedalusLimitModal();
        }
        const rateLimitError = new Error(errorMessage || `Rate limited - wait ${retryAfterSec}s before sending again.`);
        rateLimitError.code = errorCode;
        throw rateLimitError;
      }

      if (isLikelyServerDownResponse(res.status, contentType, errorBody)) {
        showServerDownScreen();
        throw new Error("Server is currently down. Check back later.");
      }

      const requestError = new Error(errorMessage);
      requestError.code = errorCode;
      throw requestError;
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
      reply = separatedReply.answer || (separatedReply.thinking ? "" : reply);
      partialText = reply || "(No response)";
      if (partialText) {
        noteAnswerStarted();
      }
      finalizeThinkingPanel(Boolean(partialText), false);

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
            const followupBody = withLocalKnowledge({
              message: "",
              workspace_context: "",
              attachments: [],
              history: toolHistory,
              model: sessionModel,
              max_tokens: requestBudget.maxTokens,
              enable_thinking: requestShouldThink,
              tools: BUILTIN_TOOLS
            });
            if (isWebSearchActiveForRequest()) {
              followupBody.enable_web_search = true;
            }
            incrementEvidenceFollowupCount(assistantEvidence);

            const followupRes = await runWithAutoMessageRetry(async (attempt) => {
              activeRequestController = new AbortController();
              const response = await fetchWithBanGuard(API_URL, {
                method: "POST",
                headers: buildApiHeaders(true, { modelId: sessionModel }),
                signal: activeRequestController.signal,
                body: JSON.stringify(followupBody)
              });
              if (attempt < AUTO_MESSAGE_RETRY_LIMIT && !response.ok) {
                throw buildRetryableRequestError(response, `Tool follow-up failed (${response.status || "unknown"})`);
              }
              return response;
            }, {
              onRetry({ attempt, error, totalAttempts }) {
                handleStatusUpdate(formatAutoRetryStatusText(error, attempt, totalAttempts, "ROK"));
              }
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
                    if (fParsed.daedalus_quota) { applyDaedalusQuota(fParsed.daedalus_quota); }
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
                  if (fParsed.daedalus_quota) { applyDaedalusQuota(fParsed.daedalus_quota); }
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
        finalizeThinkingPanel(Boolean(partialText), false);
      }

      if (shouldAutoRetryWithWebSearch()) {
        autoWebRetryAttempted = true;
        forceWebSearchForRetry = true;
        resetAssistantUiForAutoWebRetry();
        continue requestAttemptLoop;
      }

      if (!partialText) {
        partialText = "(No response)";
      }
      finalizeThinkingPanel(Boolean(partialText), true);
      removeTypingIndicator();

      if (!writeBackToWorkspace) {
        const finalEvidence = finalizeAssistantEvidence(assistantEvidence);
        if (storyCanvas) {
          updateStoryCanvasOutput(storyCanvas, partialText);
          storyCanvas.setStatus("Complete");
          bubble.textContent = "Story ready. Use Expand to read.";
        } else {
          setBubbleContent(bubble, partialText, true);
          addRegenerateButton(bubble);
        }
        attachEvidenceToAssistantBubble(bubble, finalEvidence);
        history.push({ role: "assistant", content: partialText, evidence: finalEvidence });
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
          if (parsedPayload.daedalus_quota) {
            applyDaedalusQuota(parsedPayload.daedalus_quota);
          }
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
        if (parsedPayload.daedalus_quota) {
          applyDaedalusQuota(parsedPayload.daedalus_quota);
        }
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
      if (parsedPayload.daedalus_quota) {
        applyDaedalusQuota(parsedPayload.daedalus_quota);
      }
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
    finalizeThinkingPanel(Boolean(partialText), false);

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
          const followupBody = withLocalKnowledge({
            message: "",
            workspace_context: "",
            attachments: [],
            history: toolHistory,
            model: sessionModel,
            max_tokens: requestBudget.maxTokens,
            enable_thinking: requestShouldThink,
            tools: BUILTIN_TOOLS
          });
          if (isWebSearchActiveForRequest()) followupBody.enable_web_search = true;
          incrementEvidenceFollowupCount(assistantEvidence);

          const followupRes = await runWithAutoMessageRetry(async (attempt) => {
            activeRequestController = new AbortController();
            const response = await fetchWithBanGuard(API_URL, {
              method: "POST",
              headers: buildApiHeaders(true, { modelId: sessionModel }),
              signal: activeRequestController.signal,
              body: JSON.stringify(followupBody)
            });
            if (attempt < AUTO_MESSAGE_RETRY_LIMIT && !response.ok) {
              throw buildRetryableRequestError(response, `Tool follow-up failed (${response.status || "unknown"})`);
            }
            return response;
          }, {
            onRetry({ attempt, error, totalAttempts }) {
              handleStatusUpdate(formatAutoRetryStatusText(error, attempt, totalAttempts, "ROK"));
            }
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
                if (fp.daedalus_quota) applyDaedalusQuota(fp.daedalus_quota);
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
              if (fp.daedalus_quota) applyDaedalusQuota(fp.daedalus_quota);
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
      finalizeThinkingPanel(Boolean(partialText), false);
    }

    if (shouldAutoRetryWithWebSearch()) {
      autoWebRetryAttempted = true;
      forceWebSearchForRetry = true;
      resetAssistantUiForAutoWebRetry();
      continue requestAttemptLoop;
    }
    finalizeThinkingPanel(Boolean(partialText), true);
    break requestAttemptLoop;
  }

    if (!partialText) {
      partialText = "(No response)";
    }
    removeTypingIndicator();

    if (!writeBackToWorkspace) {
      const finalEvidence = finalizeAssistantEvidence(assistantEvidence);
      streamRenderState.flush();
      if (storyCanvas) {
        storyCanvas.setStatus("Complete");
        bubble.textContent = "Story ready. Use Expand to read.";
      } else {
        setBubbleContent(bubble, partialText, true);
        addRegenerateButton(bubble);
      }
      attachEvidenceToAssistantBubble(bubble, finalEvidence);
      history.push({ role: "assistant", content: partialText, evidence: finalEvidence });
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
          const finalEvidence = finalizeAssistantEvidence(assistantEvidence, { stopped: true });
          if (storyCanvas) {
            updateStoryCanvasOutput(storyCanvas, partialText);
            storyCanvas.setStatus("Stopped");
            bubble.textContent = `Story stopped at ${partialText.length.toLocaleString()} chars.`;
          } else {
            setBubbleContent(bubble, partialText, true);
            addRegenerateButton(bubble);
          }
          attachEvidenceToAssistantBubble(bubble, finalEvidence);
          history.push({ role: "assistant", content: partialText, evidence: finalEvidence });
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

    if (err && err.code === "daedalus_limit_reached") {
      removeEmptyConvertedBotRow();
      showDaedalusLimitModal();
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

    if (sandboxActive) {
      pushSandboxConversationMessage(
        "assistant",
        err && err.name === "AbortError"
          ? "ROK CODE stopped before the new plan finished."
          : `ROK CODE error: ${err.message}`
      );
      renderSandboxUI();
    }
    addMessage("system", "Error: " + err.message);
  } finally {
    restoreBotAvatar();
    activeRequestController = null;
    stopRequested = false;
    isSending = false;
    refreshSendState();
    if (sandboxActive) {
      renderSandboxUI();
    }
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

if (attachFolderBtn && folderInput) {
  attachFolderBtn.addEventListener("click", () => {
    if (isSending || isIntentClassificationLoading) return;
    setComposerTrayOpen(false);
    folderInput.click();
  });
  folderInput.addEventListener("change", (e) => addSelectedFiles(e.target.files));
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

if (sandboxUploadFolderBtn && sandboxFolderInput) {
  sandboxUploadFolderBtn.addEventListener("click", () => {
    if (isSending) return;
    sandboxFolderInput.click();
  });
  sandboxFolderInput.addEventListener("change", (e) => addSelectedSandboxFiles(e.target.files));
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
    submitSandboxChatRequest({ forceDefault: true });
  });
}

if (sandboxUndoBtn) {
  sandboxUndoBtn.addEventListener("click", () => {
    if (isSending) return;
    if (sandboxDraftDirty) {
      setSandboxStatus("Save the current file before undoing the last AI apply.", "error");
      return;
    }
    undoLastSandboxApply();
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
    clearSandboxConversation();
  });
}

if (sandboxFilesList) {
  sandboxFilesList.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (handleSandboxEmptyStateAction(target)) return;
    const button = target.closest("[data-sandbox-file-id]");
    if (!(button instanceof HTMLElement)) return;
    const fileId = button.getAttribute("data-sandbox-file-id");
    if (!fileId) return;
    selectSandboxFile(fileId);
  });
}

if (sandboxChangesList) {
  sandboxChangesList.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (handleSandboxEmptyStateAction(target)) return;

    const previewButton = target.closest("[data-sandbox-preview-path]");
    if (previewButton instanceof HTMLElement) {
      const path = previewButton.getAttribute("data-sandbox-preview-path");
      if (!path) return;
      toggleSandboxExpandedChangePath(path);
      renderSandboxUI();
      return;
    }

    const openFileButton = target.closest("[data-sandbox-open-path]");
    if (openFileButton instanceof HTMLElement) {
      const path = openFileButton.getAttribute("data-sandbox-open-path");
      if (!path) return;
      selectSandboxFileByPath(path);
    }
  });
}

if (sandboxChatList) {
  sandboxChatList.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    handleSandboxEmptyStateAction(target);
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

if (sandboxChatInput) {
  sandboxChatInput.addEventListener("input", () => {
    sandboxChatDraft = sandboxChatInput.value;
    autoResizeSandboxChatInput();
  });
  sandboxChatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitSandboxChatRequest();
    }
  });
}

if (sandboxChatSendBtn) {
  sandboxChatSendBtn.addEventListener("click", () => {
    submitSandboxChatRequest();
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

if (memoryToggleBtn) {
  memoryToggleBtn.addEventListener("click", () => {
    if (isSending || isIntentClassificationLoading || isIncognitoModeEnabled()) return;
    setMemoryEnabled(!Boolean(userSettings.memoryEnabled));
  });
}

if (customizeRokBtn) {
  customizeRokBtn.addEventListener("click", () => {
    if (activeCustomizeRokModal) {
      closeCustomizeRokModal(null);
      return;
    }
    void openCustomizeRokModal();
  });
}

if (layoutEditToggleBtn) {
  layoutEditToggleBtn.addEventListener("click", () => {
    setLiveLayoutEditMode(!isLiveLayoutEditMode);
  });
}

if (incognitoToggleBtn) {
  incognitoToggleBtn.addEventListener("click", () => {
    if (isSending || isIntentClassificationLoading) return;
    setIncognitoMode(!isIncognitoModeEnabled());
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
    const actionBtn = target.closest("[data-model-action]");
    if (actionBtn instanceof HTMLElement) {
      const action = actionBtn.getAttribute("data-model-action");
      setModelPickerOpen(false);
      if (action === CUSTOM_OLLAMA_CONFIG_ACTION) {
        void requestCustomOllamaCloudSetup({
          autoSelect: !getConfiguredCustomOllamaModelId() || isCustomOllamaModelId(getCurrentSessionModel())
        });
      }
      return;
    }
    const opt = target.closest("[data-model-id]");
    if (!(opt instanceof HTMLElement)) return;
    const modelId = opt.getAttribute("data-model-id");
    if (!modelId) return;
    const requiresKey = opt.getAttribute("data-model-requires-key") === "true";
    if (requiresKey && modelId === HYPERION_MODEL_ID) {
      setModelPickerOpen(false);
      void requestCustomOllamaCloudSetup({
        autoSelect: true,
        fixedModelId: HYPERION_MODEL_ID,
        titleText: `Unlock ${HYPERION_LABEL}`,
        hintText: `${HYPERION_LABEL} is a cloud-only BYOK lane for advanced coding and cybersecurity work.`,
        successLabel: HYPERION_LABEL,
        suppressDefaultModelHint: true
      });
      return;
    }
    const isLocked = opt.getAttribute("data-model-locked") === "true";
    if (isLocked && modelId === DAEDALUS_MODEL_ID) {
      setModelPickerOpen(false);
      showDaedalusLimitModal();
      return;
    }
    if (isLocked && modelId === TITAN_MODEL_ID) {
      setModelPickerOpen(false);
      showThinkingBurnoutModal();
      showThinkingQuotaToast(`${HERMES_LABEL} is temporarily at capacity. Please wait for the reset window.`);
      return;
    }
    setCurrentSessionModel(modelId);
    setModelPickerOpen(false);
  });
}

function bindWorkspaceTabClickEvents(tabContainer) {
  if (!tabContainer) return;
  tabContainer.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    const tabBtn = target.closest("[data-workspace-tab-id]");
    if (!(tabBtn instanceof Element)) return;
    const kind = tabBtn.getAttribute("data-workspace-tab-kind");
    if (kind === "external") {
      openCustomWorkspaceTab(tabBtn.getAttribute("data-workspace-tab-url") || "");
      return;
    }
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
if (mathStandaloneLink) {
  mathStandaloneLink.addEventListener("click", (event) => {
    event.preventDefault();
    openMathStandaloneInCloakedTab();
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
  const isAltPress =
    event.key === "Alt" ||
    event.key === "AltGraph" ||
    event.code === "AltLeft" ||
    event.code === "AltRight" ||
    (typeof event.getModifierState === "function" && event.getModifierState("Alt") && event.key !== "Tab");
  if (isAltPress && isMathChatDrawerOpen) {
    event.preventDefault();
    setMathChatDrawerOpen(false);
    return;
  }
  if (event.key !== "Escape") return;
  if (onboardingModal && !onboardingModal.hidden) {
    savePreferredNameToStorage("");
    finishOnboardingAndEnter();
    return;
  }
  if (forumSurveyModal && !forumSurveyModal.hidden) {
    hideForumSurveyModal({ markSeen: true });
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
    beginHomeEntry("chat");
  });
}

if (homeStartBtnAlt) {
  homeStartBtnAlt.addEventListener("click", () => {
    beginHomeEntry("chat");
  });
}

if (homePrivacyBtn) {
  homePrivacyBtn.addEventListener("click", () => {
    window.location.href = "docs.html#privacy";
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
    if (onboardingStepIndex >= ONBOARDING_NAME_SLIDE) {
      savePreferredNameToStorage("");
    }
    finishOnboardingAndEnter();
  });
}

if (onboardingCloseBtn) {
  onboardingCloseBtn.addEventListener("click", () => {
    if (onboardingStepIndex >= ONBOARDING_NAME_SLIDE && onboardingNameInput && String(onboardingNameInput.value || "").trim()) {
      savePreferredNameToStorage(onboardingNameInput.value);
    }
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
autoResizeSandboxChatInput();
setComposerTrayOpen(false);
setWebSearchEnabled(false);
setToolsEnabled(false);
applyUserSettingsToRuntime();
refreshMemoryToggleButtons();
refreshSendState();
syncComposerMetaVisibility();
setWorkspaceAssistantSuggestButtonLoading(false);

renderModelSelectOptions();
initializeSessions();
refreshWorkspaceDocumentToolbarState();
renderSandboxUI();
bootstrapServerSession();
refreshModelCatalogFromServer();
refreshClientConfigFromServer();
applySidebarCollapsedState(true, { persist: false });
if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
  mobileLayoutMediaQueryList = window.matchMedia(MOBILE_LAYOUT_MEDIA_QUERY);
  if (typeof mobileLayoutMediaQueryList.addEventListener === "function") {
    mobileLayoutMediaQueryList.addEventListener("change", syncLayoutForViewport);
  } else if (typeof mobileLayoutMediaQueryList.addListener === "function") {
    mobileLayoutMediaQueryList.addListener(syncLayoutForViewport);
  }
}
if (typeof window !== "undefined") {
  window.addEventListener("resize", () => {
    if (!isOnboardingModalVisible()) return;
    renderOnboardingChoiceGrid();
  });
}
syncLayoutForViewport();
beginHomeEntry("chat");

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

// --- Local knowledge learning ---
var _correctionTargetBubble = null;
var _correctionTargetText = "";
var knowledgeListEl = document.getElementById("knowledgeList");
var knowledgeCountEl = document.getElementById("knowledgeCount");

function sanitizeLocalKnowledgeText(value, maxLength) {
  var text = String(value || "").replace(/\s+/g, " ").trim();
  if (!text) return "";
  return text.slice(0, maxLength || LOCAL_KNOWLEDGE_MAX_FACT_CHARS);
}

function normalizeLocalKnowledgeEntry(rawEntry) {
  if (!rawEntry || typeof rawEntry !== "object") return null;
  var fact = sanitizeLocalKnowledgeText(rawEntry.fact, LOCAL_KNOWLEDGE_MAX_FACT_CHARS);
  if (!fact) return null;
  var sourceQuery = sanitizeLocalKnowledgeText(rawEntry.sourceQuery || rawEntry.source_query, 200);
  var nowIso = new Date().toISOString();
  return {
    id: sanitizeLocalKnowledgeText(rawEntry.id, 64) || ((window.crypto && window.crypto.randomUUID) ? window.crypto.randomUUID() : ("fact-" + Date.now() + "-" + Math.random().toString(16).slice(2, 8))),
    fact: fact,
    sourceQuery: sourceQuery,
    createdAt: sanitizeLocalKnowledgeText(rawEntry.createdAt || rawEntry.created_at, 64) || nowIso,
    updatedAt: sanitizeLocalKnowledgeText(rawEntry.updatedAt || rawEntry.updated_at, 64) || nowIso
  };
}

function loadLocalKnowledge() {
  try {
    var raw = localStorage.getItem(LOCAL_KNOWLEDGE_KEY);
    if (!raw) return [];
    var parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    var normalized = [];
    var seenFacts = new Set();
    parsed.forEach(function (entry) {
      var item = normalizeLocalKnowledgeEntry(entry);
      if (!item) return;
      var lowerFact = item.fact.toLowerCase();
      if (seenFacts.has(lowerFact)) return;
      seenFacts.add(lowerFact);
      normalized.push(item);
    });
    return normalized.slice(-LOCAL_KNOWLEDGE_MAX_ENTRIES);
  } catch {
    return [];
  }
}

function saveLocalKnowledge(entries) {
  if (isIncognitoModeEnabled()) {
    return;
  }
  try {
    var normalized = Array.isArray(entries) ? entries.map(normalizeLocalKnowledgeEntry).filter(Boolean) : [];
    normalized = normalized.slice(-LOCAL_KNOWLEDGE_MAX_ENTRIES);
    localStorage.setItem(LOCAL_KNOWLEDGE_KEY, JSON.stringify(normalized));
  } catch {
    // Ignore storage failures.
  }
}

function loadLocalMemory() {
  if (isIncognitoModeEnabled()) {
    return [];
  }
  try {
    const raw = localStorage.getItem(LOCAL_MEMORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const seen = new Set();
    const normalized = [];
    parsed.forEach((entry) => {
      const item = normalizeMemoryEntry(entry, "global");
      if (!item) return;
      const key = `${item.kind}:${item.fact.toLowerCase()}`;
      if (seen.has(key)) return;
      seen.add(key);
      normalized.push(item);
    });
    return normalized.slice(-LOCAL_MEMORY_MAX_ENTRIES);
  } catch {
    return [];
  }
}

function saveLocalMemory(entries) {
  if (isIncognitoModeEnabled()) {
    return;
  }
  try {
    const normalized = Array.isArray(entries)
      ? entries.map((entry) => normalizeMemoryEntry(entry, "global")).filter(Boolean).slice(-LOCAL_MEMORY_MAX_ENTRIES)
      : [];
    localStorage.setItem(LOCAL_MEMORY_KEY, JSON.stringify(normalized));
  } catch {
    // Ignore storage failures.
  }
}

function getCurrentProjectMemoryEntries(session = getWorkspaceCurrentSession()) {
  if (!session) return [];
  const memory = ensureSessionMemory(session);
  return Array.isArray(memory.projectEntries) ? memory.projectEntries.slice(-LOCAL_MEMORY_MAX_ENTRIES) : [];
}

function saveCurrentProjectMemoryEntries(entries, session = getWorkspaceCurrentSession()) {
  if (!session) return;
  const memory = ensureSessionMemory(session);
  memory.projectEntries = Array.isArray(entries)
    ? entries.map((entry) => normalizeMemoryEntry(entry, "project")).filter(Boolean).slice(-LOCAL_MEMORY_MAX_ENTRIES)
    : [];
  session.updatedAt = Date.now();
  saveSessionsToStorage();
}

function inferMemoryKindFromText(text = "", fallback = "fact") {
  const value = String(text || "").toLowerCase();
  if (/\b(prefer|tone|style|format|concise|shorter|longer|bullet|voice)\b/.test(value)) {
    return "preference";
  }
  if (/\b(always|never|don'?t|do not|must|should|avoid|use)\b/.test(value)) {
    return "rule";
  }
  if (/\b(decided|decision|chosen|we're using|we are using|ship|final)\b/.test(value)) {
    return "decision";
  }
  return normalizeMemoryKind(fallback);
}

function upsertRememberedFact(fact, options = {}) {
  const normalizedFact = sanitizeMemoryText(fact, LOCAL_MEMORY_MAX_FACT_CHARS);
  if (!normalizedFact || !isMemoryEnabled()) return null;

  const scope = options.scope === "project" ? "project" : "global";
  const source = sanitizeMemoryText(options.source, 80) || "manual";
  const kind = inferMemoryKindFromText(normalizedFact, options.kind || (scope === "project" ? "project" : "fact"));
  const nowIso = new Date().toISOString();

  if (scope === "project") {
    const session = options.session || getWorkspaceCurrentSession();
    if (!session) return null;
    const entries = getCurrentProjectMemoryEntries(session);
    const existingIndex = entries.findIndex((entry) => String(entry.fact || "").toLowerCase() === normalizedFact.toLowerCase());
    const nextEntry = {
      id: existingIndex >= 0 ? entries[existingIndex].id : ((window.crypto && window.crypto.randomUUID) ? window.crypto.randomUUID() : (`pmem-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`)),
      fact: normalizedFact,
      kind,
      scope: "project",
      source,
      createdAt: existingIndex >= 0 ? entries[existingIndex].createdAt : nowIso,
      updatedAt: nowIso
    };
    if (existingIndex >= 0) {
      entries.splice(existingIndex, 1);
    }
    entries.push(nextEntry);
    saveCurrentProjectMemoryEntries(entries, session);
    return nextEntry;
  }

  const entries = loadLocalMemory();
  const existingIndex = entries.findIndex((entry) => String(entry.fact || "").toLowerCase() === normalizedFact.toLowerCase());
  const nextEntry = {
    id: existingIndex >= 0 ? entries[existingIndex].id : ((window.crypto && window.crypto.randomUUID) ? window.crypto.randomUUID() : (`gmem-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`)),
    fact: normalizedFact,
    kind,
    scope: "global",
    source,
    createdAt: existingIndex >= 0 ? entries[existingIndex].createdAt : nowIso,
    updatedAt: nowIso
  };
  if (existingIndex >= 0) {
    entries.splice(existingIndex, 1);
  }
  entries.push(nextEntry);
  saveLocalMemory(entries);
  return nextEntry;
}

function buildDerivedProjectMemoryEntries(session = getWorkspaceCurrentSession()) {
  if (!session || !isProjectMemoryEnabled()) return [];
  const derived = [];
  const workspaceText = String(session.workspace && session.workspace.content || "").trim();
  const sandbox = session.workspace && session.workspace.sandbox;
  const sandboxFiles = sandbox && Array.isArray(sandbox.files) ? sandbox.files : [];
  if (workspaceText) {
    derived.push({
      fact: `Workspace draft focus: ${sanitizeMemoryText(workspaceText, 180)}`,
      kind: "project",
      scope: "project",
      source: "workspace"
    });
  }
  if (sandboxFiles.length) {
    const fileList = sandboxFiles.slice(0, 8).map((item) => sanitizeMemoryText(item.path, 80)).filter(Boolean).join(", ");
    if (fileList) {
      derived.push({
        fact: `Current project files include: ${fileList}.`,
        kind: "project",
        scope: "project",
        source: "sandbox"
      });
    }
  }
  const plannedChanges = sandbox && sandbox.analysis && Array.isArray(sandbox.analysis.files)
    ? sandbox.analysis.files.slice(0, 6).map((item) => sanitizeMemoryText(item.path, 80)).filter(Boolean)
    : [];
  if (plannedChanges.length) {
    derived.push({
      fact: `Recent planned changes touched: ${plannedChanges.join(", ")}.`,
      kind: "decision",
      scope: "project",
      source: "sandbox-plan"
    });
  }
  const assistantSummary = sanitizeMemoryText(
    session.workspace && session.workspace.assistantMemory && session.workspace.assistantMemory.summary,
    220
  );
  if (assistantSummary) {
    derived.push({
      fact: `Workspace assistant summary: ${assistantSummary}`,
      kind: "project",
      scope: "project",
      source: "workspace-assistant"
    });
  }
  return derived;
}

function tokenizeMemoryText(text = "") {
  return String(text || "")
    .toLowerCase()
    .split(/[^a-z0-9_]+/i)
    .map((item) => item.trim())
    .filter((item) => item.length >= 3);
}

function scoreMemoryEntry(entry, queryText = "", queryWords = new Set()) {
  const factText = String(entry && entry.fact || "").toLowerCase();
  if (!factText) return 0;
  let score = 0;
  queryWords.forEach((word) => {
    if (factText.includes(word)) score += 2;
  });
  if (queryText && factText.includes(queryText)) {
    score += 6;
  }
  if (entry.kind === "rule") {
    score += 3;
  } else if (entry.kind === "preference") {
    score += 2.4;
  } else if (entry.kind === "decision") {
    score += 1.6;
  } else if (entry.kind === "project") {
    score += 1.4;
  } else if (entry.kind === "correction") {
    score += 1.2;
  }
  if (entry.scope === "project") {
    score += 1;
  }
  const sourceText = String(entry && entry.source || "").toLowerCase();
  if (/(?:boundary|directive|style-preference|project-context|decision|project-summary)/.test(sourceText)) {
    score += 0.8;
  }
  const updatedAtTs = Date.parse(String(entry && entry.updatedAt || ""));
  if (Number.isFinite(updatedAtTs)) {
    const ageHours = Math.max(0, (Date.now() - updatedAtTs) / 36e5);
    if (ageHours <= 24) {
      score += 1.1;
    } else if (ageHours <= 24 * 7) {
      score += 0.5;
    }
  }
  return score;
}

function getRelevantLocalMemory(options = {}) {
  if (!isMemoryEnabled()) return [];
  const session = options.session || getWorkspaceCurrentSession();
  const queryText = sanitizeMemoryText(
    `${options.message || ""} ${options.workspaceContext || ""}`,
    600
  ).toLowerCase();
  const queryWords = new Set(tokenizeMemoryText(queryText));
  const candidateEntries = [
    ...loadLocalMemory(),
    ...(isProjectMemoryEnabled() ? getCurrentProjectMemoryEntries(session) : []),
    ...buildDerivedProjectMemoryEntries(session)
  ];
  if (!candidateEntries.length) return [];

  const scored = candidateEntries
    .map((entry) => ({ entry, score: scoreMemoryEntry(entry, queryText, queryWords) }))
    .filter((item) => item.score > 0 || item.entry.kind === "preference" || item.entry.kind === "rule")
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return String(b.entry.updatedAt || "").localeCompare(String(a.entry.updatedAt || ""));
    });

  const selected = [];
  const seenFacts = new Set();
  scored.forEach((item) => {
    if (selected.length >= LOCAL_MEMORY_PROMPT_LIMIT) return;
    const key = String(item.entry.fact || "").toLowerCase();
    if (!key || seenFacts.has(key)) return;
    seenFacts.add(key);
    selected.push(item.entry);
  });
  return selected;
}

function buildLocalMemoryPayload(options = {}) {
  return getRelevantLocalMemory(options).slice(0, LOCAL_MEMORY_PROMPT_LIMIT).map((entry) => ({
    fact: entry.fact,
    kind: entry.kind,
    scope: entry.scope,
    source: entry.source || ""
  }));
}

function buildLocalKnowledgePayload() {
  if (isIncognitoModeEnabled() || !isMemoryEnabled()) {
    return [];
  }
  return loadLocalKnowledge()
    .slice(-LOCAL_KNOWLEDGE_PROMPT_LIMIT)
    .map(function (entry) {
      return {
        fact: entry.fact,
        source_query: entry.sourceQuery || ""
      };
    });
}

function withLocalKnowledge(payload) {
  if (!payload || typeof payload !== "object") return payload;
  const localKnowledge = buildLocalKnowledgePayload();
  const session = getWorkspaceCurrentSession();
  const promptOverrides = getCustomPromptOverridesForApi();
  const localMemory = buildLocalMemoryPayload({
    message: payload.message || payload.prompt || "",
    workspaceContext: payload.workspace_context || "",
    session
  });
  payload.incognito = isIncognitoModeEnabled();
  if (localKnowledge.length) {
    payload.local_knowledge = localKnowledge;
  } else {
    delete payload.local_knowledge;
  }
  if (localMemory.length) {
    payload.local_memory = localMemory;
  } else {
    delete payload.local_memory;
  }
  if (promptOverrides.customSystemPrompt) {
    payload.custom_system_prompt = promptOverrides.customSystemPrompt;
  } else {
    delete payload.custom_system_prompt;
  }
  if (promptOverrides.customIdentity) {
    payload.custom_identity = promptOverrides.customIdentity;
  } else {
    delete payload.custom_identity;
  }
  return payload;
}

function buildAssistantEvidenceSnapshot(options = {}) {
  const requestBody = options.requestBody && typeof options.requestBody === "object" ? options.requestBody : {};
  return sanitizeEvidenceMetadata({
    mode: options.mode || "chat",
    model: options.model || requestBody.model || "",
    promptPreview: requestBody.message || "",
    promptChars: String(requestBody.message || "").trim().length,
    messageHistory: requestBody.history || [],
    messageHistoryCount: Array.isArray(requestBody.history) ? requestBody.history.length : 0,
    localMemory: requestBody.local_memory || [],
    localKnowledge: requestBody.local_knowledge || [],
    attachments: requestBody.attachments || [],
    workspaceContext: requestBody.workspace_context || "",
    webSearchEnabled: Boolean(requestBody.enable_web_search),
    toolsEnabled: Boolean(Array.isArray(requestBody.tools) ? requestBody.tools.length : requestBody.tools),
    explicitWebToolUsed: false,
    toolNames: [],
    toolFollowupCount: 0,
    incognito: Boolean(requestBody.incognito),
    usingOwnKey: Boolean(getSavedUserOllamaApiKeyForModel(options.model || requestBody.model || "")),
    createdAt: new Date().toISOString()
  });
}

function getCurrentPrimaryUseCase() {
  return sanitizePrimaryUseCase((userSettings && userSettings.primaryUseCase) || loadUserSettingsFromStorage().primaryUseCase);
}

function getChatWelcomeTimeBucket(date = new Date()) {
  const hours = date instanceof Date ? date.getHours() : new Date().getHours();
  if (hours >= 22 || hours < 5) return "late";
  if (hours < 11) return "morning";
  if (hours < 17) return "afternoon";
  return "evening";
}

function hashChatWelcomeSeed(value = "") {
  const source = String(value || "");
  let hash = 0;
  for (let i = 0; i < source.length; i += 1) {
    hash = (hash * 31 + source.charCodeAt(i)) >>> 0;
  }
  return hash >>> 0;
}

function pickChatWelcomeTitleVariant(entry, seed = "") {
  if (Array.isArray(entry)) {
    const variants = entry.map((item) => String(item || "").trim()).filter(Boolean);
    if (!variants.length) return "";
    const index = hashChatWelcomeSeed(seed) % variants.length;
    return variants[index];
  }
  return String(entry || "").trim();
}

function getChatWelcomePresets() {
  return {
    general: {
      titles: {
        late: [
          "Late night thoughts",
          "Still up working",
          "Night shift mode",
          "Burning the midnight oil"
        ],
        morning: [
          "Morning check-in",
          "Starting fresh",
          "Morning momentum",
          "Ready to get into it"
        ],
        afternoon: [
          "What are we working on",
          "What needs moving",
          "What are we getting done",
          "What are we diving into"
        ],
        evening: [
          "Evening catch-up",
          "What are we wrapping up",
          "Evening session",
          "What are we tackling tonight"
        ]
      },
      subtitle: "Ask a question, drop a file, or paste text to get started.",
      chips: [
        { label: "Research", prompt: "Help me research " },
        { label: "Write", prompt: "Help me write " },
        { label: "Think", prompt: "Help me think through " },
        { label: "Summarize", prompt: "Summarize the following: " }
      ]
    },
    research: {
      titles: {
        late: [
          "Late night research",
          "Late night deep dive",
          "Research rabbit hole",
          "Still digging into it"
        ],
        morning: [
          "Morning study session",
          "Morning review block",
          "Ready to study",
          "Starting with research"
        ],
        afternoon: [
          "Research block",
          "What are we looking into",
          "Time to dig through it",
          "What are we figuring out"
        ],
        evening: [
          "Evening review",
          "Study wrap-up",
          "Evening deep dive",
          "Review session"
        ]
      },
      subtitle: "Paste notes, ask for an explanation, or drop a file to study faster.",
      chips: [
        { label: "Explain", prompt: "Explain this clearly: " },
        { label: "Quiz me", prompt: "Quiz me on " },
        { label: "Study guide", prompt: "Make a study guide for " },
        { label: "Summarize notes", prompt: "Summarize these notes: " }
      ]
    },
    code: {
      titles: {
        late: [
          "Late night debugging",
          "Late night ship fix",
          "Night build session",
          "Still chasing the bug"
        ],
        morning: [
          "Ready to build",
          "Morning coding session",
          "What are we building",
          "Fresh build start"
        ],
        afternoon: [
          "What are we shipping",
          "What are we building",
          "What needs fixing",
          "What are we pushing forward"
        ],
        evening: [
          "Evening code session",
          "What are we coding tonight",
          "Evening debug run",
          "What still needs a fix"
        ]
      },
      subtitle: "Debug in chat, or jump straight into ROK CODE when you want structured changes.",
      chips: [
        { label: "Debug", prompt: "Help me debug " },
        { label: "Explain code", prompt: "Explain this code: " },
        { label: "Refactor", prompt: "Help me refactor " },
        { label: "ROK CODE", prompt: "Plan the file changes for ", tab: "sandbox" }
      ]
    },
    writing: {
      titles: {
        late: [
          "Late night writing",
          "Midnight draft energy",
          "Still writing",
          "Late night page work"
        ],
        morning: [
          "Morning draft session",
          "Fresh page start",
          "Morning writing block",
          "What are we drafting"
        ],
        afternoon: [
          "What are we writing",
          "What are we drafting",
          "What needs rewriting",
          "What are we putting into words"
        ],
        evening: [
          "Evening rewrite",
          "Evening draft session",
          "What are we polishing",
          "Time for a better draft"
        ]
      },
      subtitle: "Brainstorm, rewrite, or keep a draft moving without losing the tone.",
      chips: [
        { label: "Brainstorm", prompt: "Brainstorm ideas for " },
        { label: "Outline", prompt: "Create an outline for " },
        { label: "Rewrite", prompt: "Rewrite this while keeping the tone: " },
        { label: "Continue", prompt: "Continue this draft: " }
      ]
    },
    fun: {
      titles: {
        late: [
          "Late night chaos",
          "Midnight nonsense",
          "Late night weirdness",
          "What kind of chaos are we on"
        ],
        morning: [
          "What are we messing with",
          "Starting with something fun",
          "Morning nonsense",
          "What are we playing with"
        ],
        afternoon: [
          "Random idea time",
          "What are we messing with",
          "Let's make something weird",
          "What sounds fun right now"
        ],
        evening: [
          "Evening fun",
          "What kind of nonsense tonight",
          "Time for something random",
          "What are we messing with tonight"
        ]
      },
      subtitle: "Use ROK like a sandbox for stories, weird questions, or whatever else sounds fun.",
      chips: [
        { label: "Story prompt", prompt: "Give me a story prompt about " },
        { label: "Random", prompt: "Give me something random and interesting about " },
        { label: "Debate", prompt: "Argue both sides of " },
        { label: "Surprise me", prompt: "Surprise me with " }
      ]
    }
  };
}

function getChatWelcomeProfile() {
  const useCase = getCurrentPrimaryUseCase();
  const bucket = getChatWelcomeTimeBucket();
  const name = sanitizeShortUserSettingText((userSettings && userSettings.preferredName) || "");
  const presetMap = getChatWelcomePresets();
  const preset = presetMap[useCase] || presetMap.general;
  const dayKey = new Date().toDateString();
  const seed = `${useCase}:${bucket}:${name}:${dayKey}`;
  const phrase = pickChatWelcomeTitleVariant(
    preset.titles[bucket] || preset.titles.afternoon || "What are we working on",
    seed
  ) || "What are we working on";
  return {
    title: name ? `${phrase}, ${name}?` : `${phrase}?`,
    subtitle: preset.subtitle,
    chips: preset.chips
  };
}

function getEvidenceToolCallName(toolCall) {
  const fn = toolCall && (toolCall.function || toolCall);
  return String((fn && fn.name) || "").trim().toLowerCase();
}

function recordToolCallsInEvidence(evidence, toolCalls) {
  if (!evidence || !Array.isArray(toolCalls) || !toolCalls.length) return evidence;
  const existing = new Set(Array.isArray(evidence.toolNames) ? evidence.toolNames : []);
  toolCalls.forEach((toolCall) => {
    const toolName = getEvidenceToolCallName(toolCall);
    if (toolName) {
      existing.add(toolName);
      if (toolName === "web_search" || toolName === "web_fetch") {
        evidence.explicitWebToolUsed = true;
      }
    }
  });
  evidence.toolNames = Array.from(existing).slice(0, 12);
  return evidence;
}

function incrementEvidenceFollowupCount(evidence) {
  if (!evidence) return;
  evidence.toolFollowupCount = Math.max(0, Number(evidence.toolFollowupCount) || 0) + 1;
}

function finalizeAssistantEvidence(evidence, options = {}) {
  if (!evidence) return null;
  return sanitizeEvidenceMetadata({
    ...evidence,
    stopped: options.stopped === true
  });
}

function getSensitiveSendReasons(evidence) {
  if (!evidence) return [];
  const reasons = [];
  const memoryCount =
    (Array.isArray(evidence.localMemory) ? evidence.localMemory.length : 0) +
    (Array.isArray(evidence.localKnowledge) ? evidence.localKnowledge.length : 0);
  if (evidence.incognito) reasons.push("incognito");
  if (Array.isArray(evidence.attachments) && evidence.attachments.length) reasons.push("attachments");
  if (memoryCount >= 3) reasons.push("memory");
  if (evidence.webSearchEnabled) reasons.push("web");
  if (evidence.toolsEnabled) reasons.push("tools");
  if (evidence.workspaceContext && evidence.workspaceContext.chars > 0) reasons.push("workspace");
  if (Number(evidence.messageHistoryCount) >= 12) reasons.push("history");
  return reasons;
}

function shouldPromptBeforeSendForEvidence(evidence) {
  return isAskBeforeSensitiveSendEnabled() && getSensitiveSendReasons(evidence).length > 0;
}

function createEvidenceSection(title, subtitle = "") {
  const section = document.createElement("section");
  section.className = "evidence-section";

  const heading = document.createElement("div");
  heading.className = "evidence-section-title";
  heading.textContent = title;
  section.appendChild(heading);

  if (subtitle) {
    const hint = document.createElement("div");
    hint.className = "evidence-section-hint";
    hint.textContent = subtitle;
    section.appendChild(hint);
  }

  return section;
}

function appendEvidenceEmptyState(section, text) {
  const empty = document.createElement("div");
  empty.className = "evidence-empty";
  empty.textContent = text;
  section.appendChild(empty);
}

function appendEvidenceCardList(section, items, renderer) {
  if (!Array.isArray(items) || !items.length) {
    return false;
  }
  const list = document.createElement("div");
  list.className = "evidence-card-list";
  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "evidence-card";
    const rendered = renderer(item) || {};
    const title = document.createElement("div");
    title.className = "evidence-card-title";
    title.textContent = rendered.title || "Context";
    const body = document.createElement("div");
    body.className = "evidence-card-body";
    body.textContent = rendered.body || "";
    card.appendChild(title);
    if (rendered.meta) {
      const meta = document.createElement("div");
      meta.className = "evidence-card-meta";
      meta.textContent = rendered.meta;
      card.appendChild(meta);
    }
    card.appendChild(body);
    list.appendChild(card);
  });
  section.appendChild(list);
  return true;
}

function formatShadowSendCount(count, singularLabel, pluralLabel = "") {
  const safeCount = Math.max(0, Number(count) || 0);
  const plural = pluralLabel || `${singularLabel}s`;
  return `${safeCount} ${safeCount === 1 ? singularLabel : plural}`;
}

function renderShadowSendComparison(container, evidence) {
  if (!(container instanceof HTMLElement) || !evidence) return;
  const memoryCount =
    (Array.isArray(evidence.localMemory) ? evidence.localMemory.length : 0) +
    (Array.isArray(evidence.localKnowledge) ? evidence.localKnowledge.length : 0);
  const fileCount = Array.isArray(evidence.attachments) ? evidence.attachments.length : 0;
  const historyCount = Math.max(0, Number(evidence.messageHistoryCount) || 0);
  const routeLabel = evidence.usingOwnKey ? "Hosted with your own Ollama key" : "Hosted through ROK";
  const webLabel = evidence.webSearchEnabled
    ? (evidence.toolsEnabled ? "Web search and tools enabled" : "Web search enabled")
    : (evidence.toolsEnabled ? "Tools enabled, web off" : "No web or tools enabled");

  const section = createEvidenceSection(
    "Shadow Send",
    "The left side is a typical cloud-chat blind spot. The right side is exactly what ROK is showing you before send."
  );
  section.classList.add("shadow-send-section");

  const grid = document.createElement("div");
  grid.className = "shadow-send-grid";

  const buildColumn = (title, toneClass, rows) => {
    const column = document.createElement("div");
    column.className = `shadow-send-column ${toneClass}`.trim();

    const header = document.createElement("div");
    header.className = "shadow-send-column-title";
    header.textContent = title;
    column.appendChild(header);

    rows.forEach((row) => {
      const item = document.createElement("div");
      item.className = "shadow-send-item";

      const label = document.createElement("div");
      label.className = "shadow-send-item-label";
      label.textContent = row.label;

      const value = document.createElement("div");
      value.className = "shadow-send-item-value";
      value.textContent = row.value;

      item.appendChild(label);
      item.appendChild(value);
      column.appendChild(item);
    });

    return column;
  };

  grid.appendChild(buildColumn("Typical cloud chat send", "is-opaque", [
    {
      label: "Prompt",
      value: "Your prompt goes out, but the full packaged request is usually hidden."
    },
    {
      label: "History",
      value: "Earlier chat context may be bundled in, but you usually do not get an exact receipt."
    },
    {
      label: "Memory",
      value: "Saved preferences or hidden profile context might be reused without being shown first."
    },
    {
      label: "Files",
      value: "Attachments can be uploaded as full contents once you hit send, with little preview of scope."
    },
    {
      label: "Route",
      value: "Usually just 'sent to the cloud' without a visible data path."
    },
    {
      label: "Web and tools",
      value: "Extra search or tool context can feel black-box unless the product chooses to surface it."
    }
  ]));

  grid.appendChild(buildColumn("What ROK is sending", "is-visible", [
    {
      label: "Prompt",
      value: evidence.promptChars
        ? `${evidence.promptChars.toLocaleString()} prompt chars are visible below before send.`
        : "No text prompt is being sent."
    },
    {
      label: "History",
      value: historyCount
        ? `${formatShadowSendCount(historyCount, "prior message")} are included as context.`
        : "No prior chat messages are being attached."
    },
    {
      label: "Memory",
      value: memoryCount
        ? `${formatShadowSendCount(memoryCount, "memory fact")} are visible before send.`
        : "No saved memory or correction knowledge is being attached."
    },
    {
      label: "Files",
      value: fileCount
        ? `${formatShadowSendCount(fileCount, "attachment")} are listed before send.`
        : "No files or images are being attached."
    },
    {
      label: "Route",
      value: `${routeLabel}${evidence.incognito ? " with incognito on" : ""}.`
    },
    {
      label: "Web and tools",
      value: `${webLabel}.`
    }
  ]));

  section.appendChild(grid);

  const note = document.createElement("div");
  note.className = "shadow-send-note";
  note.textContent = "ROK sends only what is shown in this preview.";
  section.appendChild(note);

  container.appendChild(section);
}

function renderEvidenceBody(container, evidence, options = {}) {
  if (!(container instanceof HTMLElement)) return;
  const previewMode = options.previewMode === true;
  container.textContent = "";

  if (previewMode) {
    renderShadowSendComparison(container, evidence);
  }

  const summaryRow = document.createElement("div");
  summaryRow.className = "evidence-pill-row";
  const summaryPills = [
    `${getModelLabelById(evidence.model || "") || "Unknown model"} selected`,
    evidence.usingOwnKey ? "Your own Ollama key attached" : "ROK hosted route",
    evidence.incognito ? "Incognito on" : "Standard session",
    evidence.webSearchEnabled ? "Web access enabled" : "Web access off",
    evidence.toolsEnabled ? "Tools enabled" : "Tools off"
  ];
  summaryPills.forEach((label) => {
    const pill = document.createElement("span");
    pill.className = "evidence-pill";
    pill.textContent = label;
    summaryRow.appendChild(pill);
  });
  container.appendChild(summaryRow);

  const promptSection = createEvidenceSection(
    previewMode ? "Prompt leaving the device" : "Prompt that shaped this answer",
    evidence.promptChars
      ? `${evidence.promptChars.toLocaleString()} characters were sent with the request.`
      : "No text prompt was included."
  );
  if (evidence.promptPreview) {
    const pre = document.createElement("pre");
    pre.className = "evidence-preview-block";
    pre.textContent = evidence.promptPreview;
    promptSection.appendChild(pre);
  } else {
    appendEvidenceEmptyState(promptSection, "No prompt preview was captured for this reply.");
  }
  container.appendChild(promptSection);

  const historySubtitle = evidence.messageHistoryCount > evidence.messageHistory.length
    ? `Showing the most recent ${evidence.messageHistory.length} of ${evidence.messageHistoryCount} messages that were sent as chat context.`
    : `${evidence.messageHistoryCount} prior message${evidence.messageHistoryCount === 1 ? "" : "s"} were sent as context.`;
  const historySection = createEvidenceSection("Message history used", historySubtitle);
  if (!appendEvidenceCardList(historySection, evidence.messageHistory, (item) => ({
    title: item.role === "assistant" ? "Earlier ROK reply" : "Earlier user message",
    body: item.content
  }))) {
    appendEvidenceEmptyState(historySection, "No previous chat messages were included with this request.");
  }
  container.appendChild(historySection);

  const memorySection = createEvidenceSection("Memory used", "Saved browser memory and correction knowledge included with the request.");
  const memoryEntries = [
    ...(Array.isArray(evidence.localMemory) ? evidence.localMemory : []),
    ...(Array.isArray(evidence.localKnowledge) ? evidence.localKnowledge : [])
  ];
  if (!appendEvidenceCardList(memorySection, memoryEntries, (item) => ({
    title: item.kind ? `${item.kind}${item.scope ? ` • ${item.scope}` : ""}` : (item.source ? `Knowledge • ${item.source}` : "Remembered fact"),
    body: item.fact,
    meta: item.source || ""
  }))) {
    appendEvidenceEmptyState(memorySection, "No saved memory or correction knowledge was attached.");
  }
  container.appendChild(memorySection);

  const filesSection = createEvidenceSection("Files used", "Names and file contents attached to this request.");
  if (!appendEvidenceCardList(filesSection, evidence.attachments, (item) => ({
    title: item.name,
    body: item.summary,
    meta: [item.type === "image" ? "Image" : "Text file", item.sizeLabel].filter(Boolean).join(" • ")
  }))) {
    appendEvidenceEmptyState(filesSection, "No files or images were attached.");
  }
  container.appendChild(filesSection);

  const webSection = createEvidenceSection("Web results used", "Whether web access or built-in tools shaped the answer.");
  const webBody = document.createElement("div");
  webBody.className = "evidence-status-block";
  if (evidence.explicitWebToolUsed) {
    webBody.textContent = "ROK explicitly called a web search/fetch tool while building this answer.";
  } else if (evidence.webSearchEnabled) {
    webBody.textContent = "Web access was enabled for this request, but no explicit built-in web tool call was captured client-side.";
  } else {
    webBody.textContent = "No web access was enabled for this answer.";
  }
  webSection.appendChild(webBody);
  if (Array.isArray(evidence.toolNames) && evidence.toolNames.length) {
    const toolList = document.createElement("div");
    toolList.className = "evidence-inline-list";
    evidence.toolNames.forEach((toolName) => {
      const chip = document.createElement("span");
      chip.className = "evidence-inline-chip";
      chip.textContent = toolName;
      toolList.appendChild(chip);
    });
    webSection.appendChild(toolList);
  }
  if (evidence.toolFollowupCount > 0) {
    const followupMeta = document.createElement("div");
    followupMeta.className = "evidence-section-hint";
    followupMeta.textContent = `${evidence.toolFollowupCount} follow-up request${evidence.toolFollowupCount === 1 ? "" : "s"} were made after tool results came back.`;
    webSection.appendChild(followupMeta);
  }
  container.appendChild(webSection);
}

function openAskBeforeSendModal(evidence) {
  return new Promise((resolve) => {
    const overlay = document.createElement("div");
    overlay.className = "correction-modal-overlay";

    const modal = document.createElement("div");
    modal.className = "correction-modal evidence-modal ask-before-send-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");

    const title = document.createElement("div");
    title.className = "correction-modal-title";
    title.textContent = "Review what will leave this device";

    const hint = document.createElement("div");
    hint.className = "correction-modal-hint";
    hint.textContent = "This looks like a more sensitive request, so ROK is pausing to show the context that is about to be sent.";

    const body = document.createElement("div");
    body.className = "evidence-modal-body";
    renderEvidenceBody(body, evidence, { previewMode: true });

    const btnRow = document.createElement("div");
    btnRow.className = "correction-modal-btns";

    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.className = "correction-modal-cancel";
    cancelBtn.textContent = "Cancel";

    const sendBtn = document.createElement("button");
    sendBtn.type = "button";
    sendBtn.className = "correction-modal-submit";
    sendBtn.textContent = "Send anyway";

    const close = (approved) => {
      overlay.remove();
      resolve(Boolean(approved));
    };

    cancelBtn.addEventListener("click", () => close(false));
    sendBtn.addEventListener("click", () => close(true));
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        close(false);
      }
    });
    overlay.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close(false);
      }
    });

    btnRow.appendChild(cancelBtn);
    btnRow.appendChild(sendBtn);
    modal.appendChild(title);
    modal.appendChild(hint);
    modal.appendChild(body);
    modal.appendChild(btnRow);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    sendBtn.focus();
  });
}

function openEvidenceModal(evidence) {
  const safeEvidence = sanitizeEvidenceMetadata(evidence);
  if (!safeEvidence) return;

  const overlay = document.createElement("div");
  overlay.className = "correction-modal-overlay";

  const modal = document.createElement("div");
  modal.className = "correction-modal evidence-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");

  const title = document.createElement("div");
  title.className = "correction-modal-title";
  title.textContent = "Evidence view";

  const hint = document.createElement("div");
  hint.className = "correction-modal-hint";
  hint.textContent = "This is the client-side context ROK attached or saw while creating this answer.";

  const body = document.createElement("div");
  body.className = "evidence-modal-body";
  renderEvidenceBody(body, safeEvidence, { previewMode: false });

  const btnRow = document.createElement("div");
  btnRow.className = "correction-modal-btns";

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "correction-modal-submit";
  closeBtn.textContent = "Close";

  const close = () => {
    overlay.remove();
  };

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      close();
    }
  });
  overlay.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
    }
  });

  btnRow.appendChild(closeBtn);
  modal.appendChild(title);
  modal.appendChild(hint);
  modal.appendChild(body);
  modal.appendChild(btnRow);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  closeBtn.focus();
}

function getBubbleReadableText(bubble) {
  if (!(bubble instanceof HTMLElement)) return "";
  const clone = bubble.cloneNode(true);
  clone.querySelectorAll(".correct-me-btn, .bubble-copy-btn, .evidence-btn, .regenerate-btn, .code-copy-btn").forEach(function (node) {
    node.remove();
  });
  return String(clone.innerText || clone.textContent || "").replace(/\n{3,}/g, "\n\n").trim();
}

function bindEvidenceClickToBubble(bubble) {
  if (!(bubble instanceof HTMLElement) || bubble._rokEvidenceBound) return;
  bubble._rokEvidenceBound = true;
  bubble.addEventListener("click", function (event) {
    const row = bubble.closest(".msg.bot");
    if (!row || !row._rokEvidence) return;
    const target = event.target instanceof Element ? event.target : null;
    if (target && target.closest("button, a, input, textarea, select, summary, details, pre, code")) {
      return;
    }
    const selectedText = typeof window !== "undefined" && window.getSelection ? String(window.getSelection() || "").trim() : "";
    if (selectedText) {
      return;
    }
    openEvidenceModal(row._rokEvidence);
  });
}

function syncAssistantBubbleActionButtons(bubble) {
  if (!(bubble instanceof HTMLElement)) return;
  const msgRow = bubble.closest(".msg.bot");
  if (!msgRow) return;

  if (!bubble.querySelector(".bubble-copy-btn")) {
    const copyBtn = document.createElement("button");
    copyBtn.className = "bubble-copy-btn";
    copyBtn.type = "button";
    copyBtn.title = "Copy message";
    copyBtn.textContent = "Copy";
    copyBtn.addEventListener("click", function () {
      const textToCopy = getBubbleReadableText(bubble);
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

  const currentEvidenceBtn = bubble.querySelector(".evidence-btn");
  if (msgRow._rokEvidence && shouldShowEvidenceButtons()) {
    if (!currentEvidenceBtn) {
      const evidenceBtn = document.createElement("button");
      evidenceBtn.className = "evidence-btn";
      evidenceBtn.type = "button";
      evidenceBtn.title = "Inspect the context that shaped this answer";
      evidenceBtn.textContent = "Evidence";
      evidenceBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        openEvidenceModal(msgRow._rokEvidence);
      });
      bubble.appendChild(evidenceBtn);
    }
  } else if (currentEvidenceBtn) {
    currentEvidenceBtn.remove();
  }
}

function attachEvidenceToAssistantBubble(bubble, evidence) {
  if (!(bubble instanceof HTMLElement)) return;
  const row = bubble.closest(".msg.bot");
  if (!row) return;
  const safeEvidence = sanitizeEvidenceMetadata(evidence);
  row._rokEvidence = safeEvidence;
  row.classList.toggle("msg-has-evidence", Boolean(safeEvidence));
  bubble.classList.toggle("bubble-has-evidence", Boolean(safeEvidence));
  if (safeEvidence) {
    bubble.title = "Click to inspect the context that shaped this answer";
    bindEvidenceClickToBubble(bubble);
  } else {
    bubble.removeAttribute("title");
  }
  syncAssistantBubbleActionButtons(bubble);
}

function upsertLocalKnowledgeFact(fact, sourceQuery) {
  var normalizedFact = sanitizeLocalKnowledgeText(fact, LOCAL_KNOWLEDGE_MAX_FACT_CHARS);
  if (!normalizedFact) return null;
  var normalizedSource = sanitizeLocalKnowledgeText(sourceQuery, 200);
  var entries = loadLocalKnowledge();
  var existingIndex = entries.findIndex(function (entry) {
    return String(entry.fact || "").toLowerCase() === normalizedFact.toLowerCase();
  });
  var nowIso = new Date().toISOString();
  var nextEntry = {
    id: existingIndex >= 0 ? entries[existingIndex].id : ((window.crypto && window.crypto.randomUUID) ? window.crypto.randomUUID() : ("fact-" + Date.now() + "-" + Math.random().toString(16).slice(2, 8))),
    fact: normalizedFact,
    sourceQuery: normalizedSource,
    createdAt: existingIndex >= 0 ? entries[existingIndex].createdAt : nowIso,
    updatedAt: nowIso
  };
  if (existingIndex >= 0) {
    entries.splice(existingIndex, 1);
  }
  entries.push(nextEntry);
  saveLocalKnowledge(entries);
  return nextEntry;
}

function getCorrectionTargetText(bubble) {
  return getBubbleReadableText(bubble);
}

function addCorrectMeButton(bubble) {
  if (!bubble) return;
  var row = bubble.closest(".msg.bot");
  if (!row || bubble.querySelector(".correct-me-btn")) return;
  var btn = document.createElement("button");
  btn.className = "correct-me-btn";
  btn.type = "button";
  btn.textContent = "Correct Me";
  btn.title = "Teach ROK the right answer on this browser";
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    _correctionTargetBubble = bubble;
    _correctionTargetText = getCorrectionTargetText(bubble);
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
  hint.textContent = "Tell ROK what was wrong and what the correct answer is. This correction is saved only in this browser on this device.";

  var textarea = document.createElement("textarea");
  textarea.className = "correction-modal-input";
  textarea.placeholder = "e.g. The seahorse emoji ðŸª¸ does exist, it was added in Unicode 13.0";
  textarea.maxLength = 500;
  textarea.placeholder = "e.g. Pluto is a dwarf planet, not one of the eight planets.";
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
  submitBtn.textContent = "Save Correction";
  submitBtn.disabled = true;
  textarea.addEventListener("input", function () {
    submitBtn.disabled = textarea.value.trim().length < 5;
  });

  submitBtn.addEventListener("click", function () {
    var correction = textarea.value.trim();
    if (!correction) return;
    submitBtn.disabled = true;
    submitBtn.textContent = "Saving...";
    submitLocalCorrection(correction, _correctionTargetText, function (ok, msg) {
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
        if (data._status === 429) errMsg = "Rate limit exceeded â€” try again later.";
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
renderLocalKnowledgeList();

function submitLocalCorrection(correction, botResponse, callback) {
  if (isIncognitoModeEnabled()) {
    if (callback) callback(false, "Incognito mode is on, so corrections are not being saved.");
    return;
  }
  if (!isMemoryEnabled()) {
    if (callback) callback(false, "Memory is off, so corrections are not being saved.");
    return;
  }
  try {
    var saved = upsertLocalKnowledgeFact(correction, String(botResponse || "").slice(0, 200));
    if (!saved) {
      if (callback) callback(false, "Couldn't save that correction. Try a clearer factual sentence.");
      return;
    }
    renderLocalKnowledgeList();
    if (callback) callback(true, "Saved on this browser. ROK will use that correction in future replies here.");
  } catch (e) {
    if (callback) callback(false, "Failed to save locally: " + e.message);
  }
}

function deleteRememberedFact(id, scope = "global") {
  const targetId = sanitizeMemoryText(id, 64);
  if (!targetId) return;
  if (scope === "project") {
    const session = getWorkspaceCurrentSession();
    if (!session) return;
    const remaining = getCurrentProjectMemoryEntries(session).filter((entry) => String(entry.id || "") !== targetId);
    saveCurrentProjectMemoryEntries(remaining, session);
    return;
  }
  const remaining = loadLocalMemory().filter((entry) => String(entry.id || "") !== targetId);
  saveLocalMemory(remaining);
}

function buildRenderableMemoryEntries() {
  if (isIncognitoModeEnabled()) {
    return [];
  }
  const globalEntries = loadLocalMemory().map((entry) => ({
    id: entry.id,
    fact: entry.fact,
    scope: "Browser",
    store: "memory-global"
  }));
  const projectEntries = getCurrentProjectMemoryEntries().map((entry) => ({
    id: entry.id,
    fact: entry.fact,
    scope: "Project",
    store: "memory-project"
  }));
  const correctionEntries = loadLocalKnowledge().map((entry) => ({
    id: entry.id,
    fact: entry.fact,
    scope: "Correction",
    store: "knowledge"
  }));
  return [...projectEntries, ...globalEntries, ...correctionEntries];
}

function renderLocalKnowledgeList() {
  if (!knowledgeListEl) return;
  if (isIncognitoModeEnabled()) {
    if (knowledgeCountEl) knowledgeCountEl.textContent = "0";
    knowledgeListEl.innerHTML = '<div class="side-empty">Incognito is on. ROK will not remember this session.</div>';
    return;
  }
  var entries = buildRenderableMemoryEntries();
  if (knowledgeCountEl) knowledgeCountEl.textContent = String(entries.length);
  if (!entries.length) {
    knowledgeListEl.innerHTML = '<div class="side-empty">Nothing remembered on this browser yet.</div>';
    return;
  }
  knowledgeListEl.innerHTML = entries.slice().reverse().map(function (entry) {
    var safeFact = escapeHtml(entry.fact || "");
    var safeId = escapeHtml(entry.id || "");
    var safeScope = escapeHtml(entry.scope || "Memory");
    var safeStore = escapeHtml(entry.store || "");
    return '<div class="knowledge-item" data-knowledge-id="' + safeId + '">' +
      '<span class="knowledge-scope">' + safeScope + '</span>' +
      '<span class="knowledge-fact">' + safeFact + '</span>' +
      '<button class="knowledge-delete-btn" type="button" data-delete-knowledge-id="' + safeId + '" data-memory-store="' + safeStore + '" aria-label="Delete fact" title="Delete">&times;</button>' +
      '</div>';
  }).join("");
  knowledgeListEl.querySelectorAll(".knowledge-delete-btn").forEach(function (btn) {
    btn.addEventListener("click", function (ev) {
      ev.stopPropagation();
      var id = btn.getAttribute("data-delete-knowledge-id");
      var store = btn.getAttribute("data-memory-store") || "";
      if (!id) return;
      if (store === "memory-project") {
        deleteRememberedFact(id, "project");
      } else if (store === "memory-global") {
        deleteRememberedFact(id, "global");
      } else {
        deleteLocalKnowledgeFact(id);
      }
    });
  });
}

function deleteLocalKnowledgeFact(id) {
  var targetId = sanitizeLocalKnowledgeText(id, 64);
  if (!targetId) return;
  var remaining = loadLocalKnowledge().filter(function (entry) {
    return String(entry.id || "") !== targetId;
  });
  saveLocalKnowledge(remaining);
  renderLocalKnowledgeList();
}

window.addEventListener("storage", function (event) {
  if (!event) return;
  if (event.key === USER_SETTINGS_KEY) {
    applyUserSettingsToRuntime();
    refreshMemoryToggleButtons();
    renderLocalKnowledgeList();
    return;
  }
  if (event.key === LOCAL_KNOWLEDGE_KEY || event.key === LOCAL_MEMORY_KEY || event.key === LOCAL_SESSIONS_KEY) {
    renderLocalKnowledgeList();
  }
});

function hasSeenForumSurveyModal() {
  try {
    return localStorage.getItem(FORUM_SURVEY_SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markForumSurveyModalSeen() {
  try {
    localStorage.setItem(FORUM_SURVEY_SEEN_KEY, "1");
  } catch {
    // Ignore storage errors.
  }
}

function hideForumSurveyModal(options = {}) {
  if (!forumSurveyModal) return;
  const { markSeen = true } = options;
  forumSurveyModal.hidden = true;
  forumSurveyModal.setAttribute("aria-hidden", "true");
  if (markSeen) {
    markForumSurveyModalSeen();
  }
}

function showForumSurveyModal() {
  if (!forumSurveyModal) return false;
  if (hasSeenForumSurveyModal()) return false;
  forumSurveyModal.hidden = false;
  forumSurveyModal.setAttribute("aria-hidden", "false");
  return true;
}

function maybeShowForumSurveyModal() {
  if (!forumSurveyModal) return false;
  if (isHomeScreenVisible()) return false;
  if (isOnboardingModalVisible()) return false;
  return showForumSurveyModal();
}

function openForumSurveyModalLink() {
  hideForumSurveyModal({ markSeen: true });
  try {
    window.open(FORUM_SURVEY_URL, "_blank", "noopener,noreferrer");
  } catch {
    window.location.href = FORUM_SURVEY_URL;
  }
}

if (forumSurveyCloseBtn) {
  forumSurveyCloseBtn.addEventListener("click", () => hideForumSurveyModal({ markSeen: true }));
}

if (forumSurveyMaybeLaterBtn) {
  forumSurveyMaybeLaterBtn.addEventListener("click", () => hideForumSurveyModal({ markSeen: true }));
}

if (forumSurveyTakeBtn) {
  forumSurveyTakeBtn.addEventListener("click", openForumSurveyModalLink);
}

if (forumSurveyModal) {
  forumSurveyModal.addEventListener("click", (e) => {
    if (e.target === forumSurveyModal) {
      hideForumSurveyModal({ markSeen: true });
    }
  });
}

// â”€â”€ ROK Pixel Painter - VLM-guided image generation â”€â”€

const PIXEL_PAINTER_API_URL = buildApiUrl("/api/image/paint");
const PIXEL_PAINTER_STORAGE_KEY = "rok_pixel_paintings";
const PIXEL_PAINTER_API_KEY_STORAGE_KEY = "rok_pixel_painter_ollama_api_key";
const PIXEL_PAINTER_PROVIDER_STORAGE_KEY = "rok_pixel_painter_provider";
const PIXEL_PAINTER_COMFYUI_API_KEY_STORAGE_KEY = "rok_pixel_painter_comfyui_api_key";
const PIXEL_PAINTER_COMFYUI_URL_STORAGE_KEY = "rok_pixel_painter_comfyui_url";
const PIXEL_PAINTER_COMFYUI_CHECKPOINT_STORAGE_KEY = "rok_pixel_painter_comfyui_checkpoint";
const PIXEL_PAINTER_MODE_STORAGE_KEY = "rok_pixel_painter_mode";
const PIXEL_PAINTER_USER_KEY_HEADER = "X-ROK-Pixel-Painter-Key";
const PIXEL_PAINTER_CANVAS_SIZE = 300;

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
      this.data[i + 3] = 255; // A
    }
    this.updateCanvas();
  }

  // Initialize with blank white canvas (easier for AI to draw)
  initBlank() {
    for (let i = 0; i < this.data.length; i += 4) {
      this.data[i] = 255;     // R = white
      this.data[i + 1] = 255; // G = white
      this.data[i + 2] = 255; // B = white
      this.data[i + 3] = 255; // A = opaque
    }
    this.updateCanvas();
  }

  async loadFromDataUrl(dataUrl) {
    const src = String(dataUrl || "").trim();
    if (!src) {
      throw new Error("Missing image data.");
    }
    await new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.ctx.clearRect(0, 0, this.size, this.size);
        this.ctx.imageSmoothingEnabled = true;
        this.ctx.drawImage(img, 0, 0, this.size, this.size);
        this.imageData = this.ctx.getImageData(0, 0, this.size, this.size);
        this.data = this.imageData.data;
        resolve();
      };
      img.onerror = () => reject(new Error("Failed to load the seed image."));
      img.src = src;
    });
  }

  captureSnapshot() {
    return new Uint8ClampedArray(this.data);
  }

  restoreSnapshot(snapshot) {
    if (!(snapshot instanceof Uint8ClampedArray) || snapshot.length !== this.data.length) {
      return;
    }
    this.data.set(snapshot);
    this.updateCanvas();
  }

  measureDifference(snapshot) {
    if (!(snapshot instanceof Uint8ClampedArray) || snapshot.length !== this.data.length) {
      return {
        changedPixels: 0,
        changedRatio: 0,
        strongChangedPixels: 0,
        strongChangedRatio: 0
      };
    }
    let changedPixels = 0;
    let strongChangedPixels = 0;
    const totalPixels = this.size * this.size;
    for (let i = 0; i < this.data.length; i += 4) {
      const diff =
        Math.abs(this.data[i] - snapshot[i]) +
        Math.abs(this.data[i + 1] - snapshot[i + 1]) +
        Math.abs(this.data[i + 2] - snapshot[i + 2]);
      if (diff >= 24) {
        changedPixels++;
      }
      if (diff >= 96) {
        strongChangedPixels++;
      }
    }
    return {
      changedPixels,
      changedRatio: totalPixels > 0 ? changedPixels / totalPixels : 0,
      strongChangedPixels,
      strongChangedRatio: totalPixels > 0 ? strongChangedPixels / totalPixels : 0
    };
  }

  setPixelRgb(x, y, r, g, b) {
    const px = Math.max(0, Math.min(this.size - 1, Math.round(Number.isFinite(x) ? x : 0)));
    const py = Math.max(0, Math.min(this.size - 1, Math.round(Number.isFinite(y) ? y : 0)));
    const idx = (py * this.size + px) * 4;
    this.data[idx] = r;
    this.data[idx + 1] = g;
    this.data[idx + 2] = b;
    this.data[idx + 3] = 255;
  }

  fillCircleRgb(cx, cy, radius, r, g, b) {
    const centerX = Number.isFinite(cx) ? cx : 0;
    const centerY = Number.isFinite(cy) ? cy : 0;
    const normalizedRadius = Math.max(0.5, Number.isFinite(radius) ? radius : 1);
    const minX = Math.max(0, Math.floor(centerX - normalizedRadius));
    const maxX = Math.min(this.size - 1, Math.ceil(centerX + normalizedRadius));
    const minY = Math.max(0, Math.floor(centerY - normalizedRadius));
    const maxY = Math.min(this.size - 1, Math.ceil(centerY + normalizedRadius));
    const radiusSq = normalizedRadius * normalizedRadius;
    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        const dx = x - centerX;
        const dy = y - centerY;
        if (dx * dx + dy * dy <= radiusSq) {
          this.setPixelRgb(x, y, r, g, b);
        }
      }
    }
  }

  fillEllipseRgb(cx, cy, rx, ry, r, g, b) {
    const centerX = Number.isFinite(cx) ? cx : 0;
    const centerY = Number.isFinite(cy) ? cy : 0;
    const radiusX = Math.max(0.5, Number.isFinite(rx) ? rx : 1);
    const radiusY = Math.max(0.5, Number.isFinite(ry) ? ry : 1);
    const minX = Math.max(0, Math.floor(centerX - radiusX));
    const maxX = Math.min(this.size - 1, Math.ceil(centerX + radiusX));
    const minY = Math.max(0, Math.floor(centerY - radiusY));
    const maxY = Math.min(this.size - 1, Math.ceil(centerY + radiusY));
    const invRadiusXSq = 1 / (radiusX * radiusX);
    const invRadiusYSq = 1 / (radiusY * radiusY);
    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        const dx = x - centerX;
        const dy = y - centerY;
        if ((dx * dx) * invRadiusXSq + (dy * dy) * invRadiusYSq <= 1) {
          this.setPixelRgb(x, y, r, g, b);
        }
      }
    }
  }

  drawLineRgb(x1, y1, x2, y2, width, r, g, b) {
    const startX = Number.isFinite(x1) ? x1 : 0;
    const startY = Number.isFinite(y1) ? y1 : 0;
    const endX = Number.isFinite(x2) ? x2 : 0;
    const endY = Number.isFinite(y2) ? y2 : 0;
    const normalizedWidth = Math.max(1, Number.isFinite(width) ? width : 1);
    const steps = Math.max(1, Math.ceil(Math.max(Math.abs(endX - startX), Math.abs(endY - startY))));
    const brushRadius = Math.max(0.5, normalizedWidth / 2);
    for (let step = 0; step <= steps; step++) {
      const t = step / steps;
      const x = startX + (endX - startX) * t;
      const y = startY + (endY - startY) * t;
      this.fillCircleRgb(x, y, brushRadius, r, g, b);
    }
  }

  // Apply pixel changes from VLM response (supports pixel, rect, fill, line, circle, and ellipse)
  applyPixelChanges(changes) {
    for (const change of changes) {
      const type = change.type || "pixel";
      const color = String(change.color || "").trim();
      if (!/^#[0-9A-Fa-f]{6}$/.test(color)) {
        continue;
      }

      // Parse hex color
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      
      if (type === "fill") {
        // Flood fill from point (x,y) with color
        this.floodFill(change.x, change.y, r, g, b, change.tolerance || 0);
      } else if (type === "line") {
        this.drawLineRgb(
          Number(change.x1),
          Number(change.y1),
          Number(change.x2),
          Number(change.y2),
          Math.max(1, Math.min(this.size, Math.round(Number(change.width) || 1))),
          r,
          g,
          b
        );
      } else if (type === "circle") {
        this.fillCircleRgb(
          Number(change.cx),
          Number(change.cy),
          Math.max(0.5, Math.min(this.size, Number(change.r) || 1)),
          r,
          g,
          b
        );
      } else if (type === "ellipse") {
        this.fillEllipseRgb(
          Number(change.cx),
          Number(change.cy),
          Math.max(0.5, Math.min(this.size, Number(change.rx) || 1)),
          Math.max(0.5, Math.min(this.size, Number(change.ry) || 1)),
          r,
          g,
          b
        );
      } else if (type === "rect") {
        // Fill rectangle from (x,y) with width w and height h
        const x = Math.max(0, Math.min(this.size - 1, Math.round(Number(change.x) || 0)));
        const y = Math.max(0, Math.min(this.size - 1, Math.round(Number(change.y) || 0)));
        const w = Math.max(1, Math.min(Math.round(Number(change.w) || 1), this.size - x));
        const h = Math.max(1, Math.min(Math.round(Number(change.h) || 1), this.size - y));
        for (let dy = 0; dy < h; dy++) {
          for (let dx = 0; dx < w; dx++) {
            const idx = ((y + dy) * this.size + (x + dx)) * 4;
            this.data[idx] = r;
            this.data[idx + 1] = g;
            this.data[idx + 2] = b;
            this.data[idx + 3] = 255;
          }
        }
      } else {
        // Single pixel (default)
        this.setPixelRgb(Number(change.x), Number(change.y), r, g, b);
      }
    }
    this.updateCanvas();
  }

  // Flood fill algorithm (bucket fill)
  floodFill(startX, startY, r, g, b, tolerance) {
    startX = Math.max(0, Math.min(this.size - 1, Math.floor(startX)));
    startY = Math.max(0, Math.min(this.size - 1, Math.floor(startY)));
    
    const startIdx = (startY * this.size + startX) * 4;
    const targetR = this.data[startIdx];
    const targetG = this.data[startIdx + 1];
    const targetB = this.data[startIdx + 2];
    
    // Don't fill if already the target color
    if (targetR === r && targetG === g && targetB === b) return;
    
    const stack = [[startX, startY]];
    const visited = new Set([startY * this.size + startX]);
    
    while (stack.length > 0) {
      const [x, y] = stack.pop();
      const idx = (y * this.size + x) * 4;
      
      // Set pixel
      this.data[idx] = r;
      this.data[idx + 1] = g;
      this.data[idx + 2] = b;
      this.data[idx + 3] = 255;
      
      // Check neighbors
      const neighbors = [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
      for (const [nx, ny] of neighbors) {
        if (nx < 0 || nx >= this.size || ny < 0 || ny >= this.size) continue;
        const key = ny * this.size + nx;
        if (visited.has(key)) continue;
        
        const nIdx = key * 4;
        const nr = this.data[nIdx];
        const ng = this.data[nIdx + 1];
        const nb = this.data[nIdx + 2];
        
        // Check if pixel matches target color (within tolerance)
        const diff = Math.abs(nr - targetR) + Math.abs(ng - targetG) + Math.abs(nb - targetB);
        if (diff <= tolerance * 3) {
          visited.add(key);
          stack.push([nx, ny]);
        }
      }
    }
  }

  // Update canvas from image data
  updateCanvas() {
    this.ctx.putImageData(this.imageData, 0, 0);
  }

  // Get base64 PNG, optionally through a smaller working canvas for coarse-to-fine passes.
  getBase64(scaleFactor = 4, workSize = this.size) {
    const normalizedScaleFactor = Number.isFinite(scaleFactor) ? Math.max(1, Math.round(scaleFactor)) : 4;
    const normalizedWorkSize = Number.isFinite(workSize)
      ? Math.max(16, Math.min(this.size, Math.round(workSize)))
      : this.size;
    let exportCanvas = this.canvas;
    if (normalizedWorkSize !== this.size) {
      const workCanvas = document.createElement("canvas");
      workCanvas.width = normalizedWorkSize;
      workCanvas.height = normalizedWorkSize;
      const workCtx = workCanvas.getContext("2d");
      workCtx.imageSmoothingEnabled = true;
      workCtx.clearRect(0, 0, normalizedWorkSize, normalizedWorkSize);
      workCtx.drawImage(this.canvas, 0, 0, normalizedWorkSize, normalizedWorkSize);
      exportCanvas = workCanvas;
    }
    if (normalizedScaleFactor <= 1) {
      return exportCanvas.toDataURL("image/png").split(",")[1];
    }
    // Create scaled canvas for AI to see coarse blocks clearly.
    const scaledCanvas = document.createElement("canvas");
    scaledCanvas.width = exportCanvas.width * normalizedScaleFactor;
    scaledCanvas.height = exportCanvas.height * normalizedScaleFactor;
    const scaledCtx = scaledCanvas.getContext("2d");
    // Use nearest-neighbor scaling after the optional downscale step.
    scaledCtx.imageSmoothingEnabled = false;
    scaledCtx.drawImage(exportCanvas, 0, 0, scaledCanvas.width, scaledCanvas.height);
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

function clampPixelPainterConfidence(rawValue) {
  const value = Number(rawValue);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return Math.max(0, Math.min(1, value));
}

function getPixelPainterPromptProfile(promptText) {
  const normalized = ` ${String(promptText || "").toLowerCase()} `;
  const wordCount = (normalized.match(/[a-z0-9']+/g) || []).length;
  const relationHeavy = /\b(riding|holding|eating|wearing|beside|next to|while|carrying|under|over|inside|outside|hugging|fighting)\b/.test(normalized);
  const multiSubject = relationHeavy || /\b(and|with|group|crowd|scene|background|next to|in front of|behind)\b/.test(normalized);
  if (relationHeavy || wordCount >= 7) {
    return {
      name: "complex",
      minPassesBeforeStop: 5,
      targetConfidence: 0.86
    };
  }
  if (!multiSubject && wordCount <= 3) {
    return {
      name: "simple",
      minPassesBeforeStop: 3,
      targetConfidence: 0.74
    };
  }
  return {
    name: "medium",
    minPassesBeforeStop: 4,
    targetConfidence: 0.80
  };
}

function buildAdaptivePixelPasses(promptProfile) {
  if (promptProfile && promptProfile.name === "simple") {
    return [
      { passNum: 1, progress: 18, label: "Blocking silhouette", maxPixels: 92, guideMode: "coarse_block", workSize: 96, scaleFactor: 5, maxChangedRatio: 0.92 },
      { passNum: 2, progress: 40, label: "Laying major colors", maxPixels: 110, guideMode: "coarse_color", workSize: 160, scaleFactor: 4, maxChangedRatio: 0.56 },
      { passNum: 3, progress: 68, label: "Refining structure", maxPixels: 92, guideMode: "mid_refine", workSize: 236, scaleFactor: 4, maxChangedRatio: 0.22 },
      { passNum: 4, progress: 96, label: "Final cleanup", maxPixels: 34, guideMode: "final_cleanup", workSize: 300, scaleFactor: 4, maxChangedRatio: 0.06 }
    ];
  }
  if (promptProfile && promptProfile.name === "medium") {
    return [
      { passNum: 1, progress: 16, label: "Blocking silhouette", maxPixels: 96, guideMode: "coarse_block", workSize: 96, scaleFactor: 5, maxChangedRatio: 0.96 },
      { passNum: 2, progress: 32, label: "Separating big shapes", maxPixels: 108, guideMode: "coarse_shape", workSize: 136, scaleFactor: 5, maxChangedRatio: 0.68 },
      { passNum: 3, progress: 50, label: "Laying major colors", maxPixels: 118, guideMode: "coarse_color", workSize: 188, scaleFactor: 4, maxChangedRatio: 0.46 },
      { passNum: 4, progress: 72, label: "Refining structure", maxPixels: 102, guideMode: "mid_refine", workSize: 244, scaleFactor: 4, maxChangedRatio: 0.20 },
      { passNum: 5, progress: 96, label: "Final cleanup", maxPixels: 36, guideMode: "final_cleanup", workSize: 300, scaleFactor: 4, maxChangedRatio: 0.07 }
    ];
  }
  return [
    { passNum: 1, progress: 14, label: "Blocking silhouette", maxPixels: 96, guideMode: "coarse_block", workSize: 96, scaleFactor: 5, maxChangedRatio: 1.0 },
    { passNum: 2, progress: 28, label: "Separating big shapes", maxPixels: 112, guideMode: "coarse_shape", workSize: 128, scaleFactor: 5, maxChangedRatio: 0.72 },
    { passNum: 3, progress: 44, label: "Laying major colors", maxPixels: 124, guideMode: "coarse_color", workSize: 176, scaleFactor: 4, maxChangedRatio: 0.54 },
    { passNum: 4, progress: 62, label: "Refining structure", maxPixels: 120, guideMode: "mid_refine", workSize: 224, scaleFactor: 4, maxChangedRatio: 0.28 },
    { passNum: 5, progress: 80, label: "Sharpening features", maxPixels: 82, guideMode: "detail_refine", workSize: 272, scaleFactor: 4, maxChangedRatio: 0.15 },
    { passNum: 6, progress: 96, label: "Final cleanup", maxPixels: 42, guideMode: "final_cleanup", workSize: 300, scaleFactor: 4, maxChangedRatio: 0.08 }
  ];
}

function getPixelPainterApiKey() {
  try {
    return String(localStorage.getItem(PIXEL_PAINTER_API_KEY_STORAGE_KEY) || "").trim();
  } catch (e) {
    return "";
  }
}

function setPixelPainterApiKey(value) {
  try {
    const normalized = String(value || "").trim();
    if (normalized) {
      localStorage.setItem(PIXEL_PAINTER_API_KEY_STORAGE_KEY, normalized);
    } else {
      localStorage.removeItem(PIXEL_PAINTER_API_KEY_STORAGE_KEY);
    }
  } catch (e) {
    // Ignore storage errors
  }
}

function getPixelPainterProvider() {
  try {
    const value = String(localStorage.getItem(PIXEL_PAINTER_PROVIDER_STORAGE_KEY) || "comfyui").trim().toLowerCase();
    return value === "ollama" ? "ollama" : "comfyui";
  } catch (e) {
    return "comfyui";
  }
}

function setPixelPainterProvider(value) {
  try {
    const normalized = String(value || "").trim().toLowerCase();
    localStorage.setItem(PIXEL_PAINTER_PROVIDER_STORAGE_KEY, normalized === "ollama" ? "ollama" : "comfyui");
  } catch (e) {
    // Ignore storage errors
  }
}

function getPixelPainterComfyUiApiKey() {
  try {
    return String(localStorage.getItem(PIXEL_PAINTER_COMFYUI_API_KEY_STORAGE_KEY) || "").trim();
  } catch (e) {
    return "";
  }
}

function setPixelPainterComfyUiApiKey(value) {
  try {
    const normalized = String(value || "").trim();
    if (normalized) {
      localStorage.setItem(PIXEL_PAINTER_COMFYUI_API_KEY_STORAGE_KEY, normalized);
    } else {
      localStorage.removeItem(PIXEL_PAINTER_COMFYUI_API_KEY_STORAGE_KEY);
    }
  } catch (e) {
    // Ignore storage errors
  }
}

function getPixelPainterComfyUiUrl() {
  try {
    return String(localStorage.getItem(PIXEL_PAINTER_COMFYUI_URL_STORAGE_KEY) || "").trim();
  } catch (e) {
    return "";
  }
}

function setPixelPainterComfyUiUrl(value) {
  try {
    const normalized = String(value || "").trim();
    if (normalized) {
      localStorage.setItem(PIXEL_PAINTER_COMFYUI_URL_STORAGE_KEY, normalized);
    } else {
      localStorage.removeItem(PIXEL_PAINTER_COMFYUI_URL_STORAGE_KEY);
    }
  } catch (e) {
    // Ignore storage errors
  }
}

function getPixelPainterComfyUiCheckpoint() {
  try {
    return String(localStorage.getItem(PIXEL_PAINTER_COMFYUI_CHECKPOINT_STORAGE_KEY) || "").trim();
  } catch (e) {
    return "";
  }
}

function setPixelPainterComfyUiCheckpoint(value) {
  try {
    const normalized = String(value || "").trim();
    if (normalized) {
      localStorage.setItem(PIXEL_PAINTER_COMFYUI_CHECKPOINT_STORAGE_KEY, normalized);
    } else {
      localStorage.removeItem(PIXEL_PAINTER_COMFYUI_CHECKPOINT_STORAGE_KEY);
    }
  } catch (e) {
    // Ignore storage errors
  }
}

function getPixelPainterRenderMode() {
  try {
    const value = String(localStorage.getItem(PIXEL_PAINTER_MODE_STORAGE_KEY) || "best").trim().toLowerCase();
    return value === "pixel" || value === "vector" || value === "best" ? value : "best";
  } catch (e) {
    return "best";
  }
}

function setPixelPainterRenderMode(value) {
  try {
    const normalized = String(value || "").trim().toLowerCase();
    localStorage.setItem(
      PIXEL_PAINTER_MODE_STORAGE_KEY,
      normalized === "pixel" || normalized === "vector" || normalized === "best" ? normalized : "best"
    );
  } catch (e) {
    // Ignore storage errors
  }
}

function preparePixelPainterReferenceImage(file) {
  return new Promise((resolve, reject) => {
    if (!file || !String(file.type || "").toLowerCase().startsWith("image/")) {
      reject(new Error("Choose an image file."));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read the reference image."));
    reader.onload = () => {
      const rawDataUrl = typeof reader.result === "string" ? reader.result : "";
      if (!rawDataUrl) {
        reject(new Error("Failed to read the reference image."));
        return;
      }

      const img = new Image();
      img.onerror = () => reject(new Error("Failed to load the reference image."));
      img.onload = () => {
        const maxSide = 768;
        const scale = Math.min(1, maxSide / Math.max(img.width || 1, img.height || 1));
        const width = Math.max(1, Math.round((img.width || 1) * scale));
        const height = Math.max(1, Math.round((img.height || 1) * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas context unavailable."));
          return;
        }
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(img, 0, 0, width, height);
        const normalizedDataUrl = canvas.toDataURL("image/png");
        resolve({
          base64: normalizedDataUrl.split(",")[1],
          previewDataUrl: normalizedDataUrl,
          width,
          height,
          name: String(file.name || "Reference image")
        });
      };
      img.src = rawDataUrl;
    };
    reader.readAsDataURL(file);
  });
}

let activePixelPainterApiKeyModal = null;

function closePixelPainterApiKeyModal(result) {
  if (!activePixelPainterApiKeyModal) return;
  const { overlay, resolve, keydownHandler } = activePixelPainterApiKeyModal;
  activePixelPainterApiKeyModal = null;
  if (keydownHandler) {
    document.removeEventListener("keydown", keydownHandler);
  }
  if (overlay && overlay.parentNode) {
    overlay.parentNode.removeChild(overlay);
  }
  resolve(result);
}

function requestPixelPainterSettings() {
  if (activePixelPainterApiKeyModal) {
    return activePixelPainterApiKeyModal.promise;
  }

  let selectedProvider = "ollama";
  const existingOllamaKey = getPixelPainterApiKey();
  let selectedMode = "pixel";
  let ollamaApiKey = existingOllamaKey;
  let referenceImageBase64 = "";
  let referencePreviewUrl = "";
  let referenceImageName = "";
  let referenceImageSizeLabel = "";
  let referenceLoading = false;
  let resolveModal = null;
  const promise = new Promise((resolve) => {
    resolveModal = resolve;
  });

  const overlay = document.createElement("div");
  overlay.id = "pixelPainterApiKeyModal";
  overlay.className = "correction-modal-overlay";

  const modal = document.createElement("div");
  modal.className = "correction-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "pixelPainterApiKeyTitle");

  const title = document.createElement("div");
  title.id = "pixelPainterApiKeyTitle";
  title.className = "correction-modal-title";
  title.textContent = "ROK IMAGE Settings";

  const hint = document.createElement("div");
  hint.className = "correction-modal-hint";
  hint.textContent = "";

  const providerLabel = document.createElement("div");
  providerLabel.className = "pixel-painting-settings-label";
  providerLabel.textContent = "Image engine";

  const providerGrid = document.createElement("div");
  providerGrid.className = "pixel-painting-mode-grid";

  const providerOptions = [
    {
      value: "comfyui",
      badge: "RI",
      title: "ROK IMAGE",
      description: "Direct image generation for the best overall quality."
    },
    {
      value: "ollama",
      badge: "OL",
      title: "Ollama Legacy",
      description: "Old vector and pixel generator."
    }
  ];

  const modeLabel = document.createElement("div");
  modeLabel.className = "pixel-painting-settings-label";
  modeLabel.textContent = "Legacy Ollama style";

  const modeGrid = document.createElement("div");
  modeGrid.className = "pixel-painting-mode-grid";

  const modeOptions = [
    {
      value: "best",
      badge: "HQ",
      title: "Best",
      description: "Vector planning plus paint refinement for the strongest result."
    },
    {
      value: "vector",
      badge: "VG",
      title: "Vector",
      description: "Smooth SVG illustration with clean shapes."
    },
    {
      value: "pixel",
      badge: "PX",
      title: "Pixel",
      description: "Classic block-by-block painter."
    }
  ];

  function renderModeOptions() {
    modeGrid.innerHTML = "";
    modeOptions.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `pixel-painting-mode-option${selectedMode === option.value ? " is-active" : ""}`;
      button.setAttribute("aria-pressed", selectedMode === option.value ? "true" : "false");
      button.innerHTML = `
        <span class="pixel-painting-mode-badge" aria-hidden="true">${option.badge}</span>
        <span class="pixel-painting-mode-copy">
          <span class="pixel-painting-mode-title">${option.title}</span>
          <span class="pixel-painting-mode-desc">${option.description}</span>
        </span>
      `;
      button.addEventListener("click", () => {
        selectedMode = option.value;
        renderModeOptions();
      });
      modeGrid.appendChild(button);
    });
  }
  renderModeOptions();

  function renderProviderOptions() {
    providerGrid.innerHTML = "";
    providerOptions.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `pixel-painting-mode-option${selectedProvider === option.value ? " is-active" : ""}`;
      button.setAttribute("aria-pressed", selectedProvider === option.value ? "true" : "false");
      button.innerHTML = `
        <span class="pixel-painting-mode-badge" aria-hidden="true">${option.badge}</span>
        <span class="pixel-painting-mode-copy">
          <span class="pixel-painting-mode-title">${option.title}</span>
          <span class="pixel-painting-mode-desc">${option.description}</span>
        </span>
      `;
      button.addEventListener("click", () => {
        selectedProvider = option.value;
        if (selectedProvider === "comfyui") {
          selectedMode = "best";
        }
        renderProviderOptions();
        renderModeOptions();
        syncProviderFields();
        updateSubmitState();
      });
      providerGrid.appendChild(button);
    });
  }
  renderProviderOptions();

  const referenceLabel = document.createElement("div");
  referenceLabel.className = "pixel-painting-settings-label";
  referenceLabel.textContent = "Reference image (optional)";

  const referenceHint = document.createElement("div");
  referenceHint.className = "correction-modal-hint pixel-painting-reference-hint";
  referenceHint.textContent = "Give the model a pose, composition, or style reference. It uses the image as guidance, not an exact trace.";

  const referenceCard = document.createElement("div");
  referenceCard.className = "pixel-painting-reference-card";

  const referencePreview = document.createElement("div");
  referencePreview.className = "pixel-painting-reference-preview";

  const referenceThumb = document.createElement("img");
  referenceThumb.className = "pixel-painting-reference-thumb";
  referenceThumb.alt = "Reference preview";

  const referenceCopy = document.createElement("div");
  referenceCopy.className = "pixel-painting-reference-copy";

  const referenceName = document.createElement("div");
  referenceName.className = "pixel-painting-reference-name";

  const referenceMeta = document.createElement("div");
  referenceMeta.className = "pixel-painting-reference-meta";

  referenceCopy.appendChild(referenceName);
  referenceCopy.appendChild(referenceMeta);
  referencePreview.appendChild(referenceThumb);
  referencePreview.appendChild(referenceCopy);

  const referenceEmpty = document.createElement("div");
  referenceEmpty.className = "pixel-painting-reference-empty";
  referenceEmpty.textContent = "No reference image selected.";

  const referenceActions = document.createElement("div");
  referenceActions.className = "pixel-painting-reference-actions";

  const referenceFileInput = document.createElement("input");
  referenceFileInput.type = "file";
  referenceFileInput.accept = "image/*";
  referenceFileInput.className = "pixel-painting-reference-input";

  const referenceSelectBtn = document.createElement("button");
  referenceSelectBtn.type = "button";
  referenceSelectBtn.className = "correction-modal-cancel";
  referenceSelectBtn.textContent = "Upload Reference";

  const referenceClearBtn = document.createElement("button");
  referenceClearBtn.type = "button";
  referenceClearBtn.className = "correction-modal-cancel";
  referenceClearBtn.textContent = "Remove Reference";

  function renderReferenceState() {
    referencePreview.style.display = referencePreviewUrl ? "flex" : "none";
    referenceEmpty.style.display = referencePreviewUrl ? "none" : "block";
    referenceThumb.style.display = referencePreviewUrl ? "block" : "none";
    referenceThumb.src = referencePreviewUrl || "";
    referenceName.textContent = referenceImageName || "Reference image";
    referenceMeta.textContent = referencePreviewUrl ? referenceImageSizeLabel : "Pose, layout, or style guide.";
    referenceClearBtn.disabled = !referencePreviewUrl || referenceLoading;
    referenceSelectBtn.disabled = referenceLoading;
    referenceHint.textContent = referenceLoading
      ? "Preparing reference image..."
      : "Give the model a pose, composition, or style reference. It uses the image as guidance, not an exact trace.";
  }

  referenceSelectBtn.addEventListener("click", () => {
    if (!referenceLoading) {
      referenceFileInput.click();
    }
  });

  referenceClearBtn.addEventListener("click", () => {
    referenceImageBase64 = "";
    referencePreviewUrl = "";
    referenceImageName = "";
    referenceImageSizeLabel = "";
    referenceFileInput.value = "";
    renderReferenceState();
    updateSubmitState();
  });

  referenceFileInput.addEventListener("change", async () => {
    const file = referenceFileInput.files && referenceFileInput.files[0];
    if (!file) return;
    referenceLoading = true;
    renderReferenceState();
    updateSubmitState();
    try {
      const prepared = await preparePixelPainterReferenceImage(file);
      referenceImageBase64 = String(prepared.base64 || "");
      referencePreviewUrl = String(prepared.previewDataUrl || "");
      referenceImageName = String(prepared.name || "Reference image");
      referenceImageSizeLabel = `${prepared.width}x${prepared.height} guide image`;
      referenceHint.textContent = "Reference image ready. The model will use it as visual guidance.";
    } catch (error) {
      referenceImageBase64 = "";
      referencePreviewUrl = "";
      referenceImageName = "";
      referenceImageSizeLabel = "";
      referenceHint.textContent = error && error.message ? error.message : "Failed to load the reference image.";
    } finally {
      referenceLoading = false;
      renderReferenceState();
      updateSubmitState();
      referenceFileInput.value = "";
    }
  });

  referenceActions.appendChild(referenceSelectBtn);
  referenceActions.appendChild(referenceClearBtn);
  referenceCard.appendChild(referencePreview);
  referenceCard.appendChild(referenceEmpty);
  referenceCard.appendChild(referenceActions);

  const keyLabel = document.createElement("div");
  keyLabel.className = "pixel-painting-settings-label";
  keyLabel.textContent = "API key";

  const input = document.createElement("input");
  input.className = "correction-modal-input";
  input.type = "password";
  input.placeholder = "";
  input.value = "";
  input.autocomplete = "off";
  input.autocapitalize = "off";
  input.spellcheck = false;

  const endpointLabel = document.createElement("div");
  endpointLabel.className = "pixel-painting-settings-label";
  endpointLabel.textContent = "ROK IMAGE URL";

  const endpointInput = document.createElement("input");
  endpointInput.className = "correction-modal-input";
  endpointInput.type = "url";
  endpointInput.placeholder = "https://your-rok-image-host.example.com";
  endpointInput.value = "";
  endpointInput.autocomplete = "off";
  endpointInput.autocapitalize = "off";
  endpointInput.spellcheck = false;

  const checkpointLabel = document.createElement("div");
  checkpointLabel.className = "pixel-painting-settings-label";
  checkpointLabel.textContent = "Checkpoint name";

  const checkpointInput = document.createElement("input");
  checkpointInput.className = "correction-modal-input";
  checkpointInput.type = "text";
  checkpointInput.placeholder = "sd_xl_base_1.0.safetensors";
  checkpointInput.value = "";
  checkpointInput.autocomplete = "off";
  checkpointInput.autocapitalize = "off";
  checkpointInput.spellcheck = false;

  const btnRow = document.createElement("div");
  btnRow.className = "correction-modal-btns";

  const forgetBtn = document.createElement("button");
  forgetBtn.type = "button";
  forgetBtn.className = "correction-modal-cancel";
  forgetBtn.textContent = "Forget Saved Key";
  forgetBtn.disabled = !existingOllamaKey;

  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.className = "correction-modal-cancel";
  cancelBtn.textContent = "Cancel";

  const submitBtn = document.createElement("button");
  submitBtn.type = "button";
  submitBtn.className = "correction-modal-submit";
  submitBtn.textContent = "Save and Continue";

  function syncProviderFields() {
    hint.textContent = "ROK IMAGE uses the pixel painter. Optionally add a reference image, then enter your own Ollama API key. The key stays only in this browser on this device, and ROK's server key cannot be used for /imagine.";
    providerLabel.style.display = "none";
    providerGrid.style.display = "none";
    modeLabel.style.display = "none";
    modeGrid.style.display = "none";
    endpointLabel.style.display = "none";
    endpointInput.style.display = "none";
    checkpointLabel.style.display = "none";
    checkpointInput.style.display = "none";
    keyLabel.style.display = "block";
    input.style.display = "block";
    keyLabel.textContent = "Ollama API key";
    input.placeholder = "Paste your Ollama API key";
    input.value = ollamaApiKey;
    forgetBtn.style.display = "inline-flex";
    forgetBtn.disabled = !ollamaApiKey;
  }

  function updateSubmitState() {
    const hasKey = !!String(input.value || "").trim();
    submitBtn.disabled = referenceLoading || !hasKey;
  }

  function submitValue() {
    const normalizedKey = String(input.value || "").trim();
    if (!normalizedKey) return;
    ollamaApiKey = normalizedKey;
    setPixelPainterProvider("ollama");
    setPixelPainterApiKey(normalizedKey);
    setPixelPainterRenderMode("pixel");
    closePixelPainterApiKeyModal({
      provider: "ollama",
      apiKey: normalizedKey,
      providerUrl: "",
      providerCheckpoint: "",
      mode: "pixel",
      referenceImageBase64,
      referenceImageName
    });
  }

  input.addEventListener("input", () => {
    ollamaApiKey = String(input.value || "").trim();
    forgetBtn.disabled = !String(input.value || "").trim();
    updateSubmitState();
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitValue();
    }
  });

  forgetBtn.addEventListener("click", () => {
    ollamaApiKey = "";
    setPixelPainterApiKey("");
    input.value = "";
    forgetBtn.disabled = true;
    updateSubmitState();
    input.focus();
  });

  cancelBtn.addEventListener("click", () => {
    closePixelPainterApiKeyModal(null);
  });

  submitBtn.addEventListener("click", submitValue);

  btnRow.appendChild(forgetBtn);
  btnRow.appendChild(cancelBtn);
  btnRow.appendChild(submitBtn);

  modal.appendChild(title);
  modal.appendChild(hint);
  modal.appendChild(referenceLabel);
  modal.appendChild(referenceHint);
  modal.appendChild(referenceCard);
  modal.appendChild(referenceFileInput);
  modal.appendChild(keyLabel);
  modal.appendChild(input);
  modal.appendChild(btnRow);
  overlay.appendChild(modal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closePixelPainterApiKeyModal(null);
    }
  });

  const keydownHandler = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      closePixelPainterApiKeyModal(null);
    }
  };

  activePixelPainterApiKeyModal = {
    overlay,
    resolve: resolveModal,
    promise,
    keydownHandler
  };

  document.addEventListener("keydown", keydownHandler);
  document.body.appendChild(overlay);
  syncProviderFields();
  renderReferenceState();
  updateSubmitState();
  input.focus();
  input.select();

  return promise;
}

function getPixelPainterImageUrl(data) {
  if (!data || typeof data !== "object") return "";
  const dataUrl = String(data.image_data_url || "").trim();
  if (dataUrl) return dataUrl;
  const imageBase64 = String(data.image_base64 || "").trim();
  if (!imageBase64) return "";
  const mimeType = String(data.mime_type || "image/png").trim() || "image/png";
  return `data:${mimeType};base64,${imageBase64}`;
}

function renderPixelPainterPreviewToBase64(dataUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const renderCanvas = document.createElement("canvas");
      renderCanvas.width = PIXEL_PAINTER_CANVAS_SIZE;
      renderCanvas.height = PIXEL_PAINTER_CANVAS_SIZE;
      const renderCtx = renderCanvas.getContext("2d");
      if (!renderCtx) {
        reject(new Error("Canvas context unavailable."));
        return;
      }
      renderCtx.clearRect(0, 0, renderCanvas.width, renderCanvas.height);
      renderCtx.drawImage(img, 0, 0, renderCanvas.width, renderCanvas.height);
      resolve(renderCanvas.toDataURL("image/png").split(",")[1]);
    };
    img.onerror = () => reject(new Error("Failed to rasterize preview."));
    img.src = dataUrl;
  });
}

// Store for active painting sessions
let activePixelPainting = null;

// Handle /imagine command
async function handleImagineCommand(prompt) {
  const imagineSettings = await requestPixelPainterSettings();
  if (imagineSettings === null) {
    return;
  }
  const userPixelPainterApiKey = String(imagineSettings.apiKey || "").trim();
  const imageProvider = "ollama";
  const providerUrl = String(imagineSettings.providerUrl || "").trim();
  const providerCheckpoint = String(imagineSettings.providerCheckpoint || "").trim();
  const renderMode = "pixel";
  const referenceImageBase64 = String(imagineSettings.referenceImageBase64 || "").trim();
  const referenceImageName = String(imagineSettings.referenceImageName || "").trim();
  const modeMeta = { label: "ROK IMAGE", icon: "RI" };
  if (!userPixelPainterApiKey) {
    addMessage("bot", "Imagine needs your own Ollama API key before it can start.");
    return;
  }

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
  header.innerHTML = `<span class="pixel-painting-icon">ðŸŽ¨</span><span class="pixel-painting-title">Painting: "${escapeHtml(prompt)}"</span>`;
  
  const progressWrap = document.createElement("div");
  progressWrap.className = "pixel-painting-progress";
  progressWrap.innerHTML = `<div class="pixel-painting-bar"><div class="pixel-painting-fill" style="width: 0%"></div></div><span class="pixel-painting-status">Initializing...</span>`;

  const referenceNote = document.createElement("div");
  referenceNote.className = "pixel-painting-reference-note";
  referenceNote.style.display = referenceImageBase64 ? "block" : "none";
  referenceNote.textContent = referenceImageBase64
    ? `Using reference image${referenceImageName ? `: ${referenceImageName}` : ""}`
    : "";
  
  const previewDiv = document.createElement("div");
  previewDiv.className = "pixel-painting-preview";
  previewDiv.style.display = "none";
  const previewImg = document.createElement("img");
  previewImg.className = "pixel-painting-img";
  previewImg.alt = "Generated image";
  previewImg.style.imageRendering = renderMode === "pixel" ? "pixelated" : "auto";
  previewDiv.appendChild(previewImg);
  header.innerHTML = `<span class="pixel-painting-icon" aria-hidden="true">${modeMeta.icon}</span><span class="pixel-painting-title">${modeMeta.label}: "${escapeHtml(prompt)}"</span>`;
  
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
  if (referenceImageBase64) {
    container.appendChild(referenceNote);
  }
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
  
  // Initialize canvas with blank white (easier for AI to draw on)
  const canvas = new PixelCanvas();
  canvas.initBlank();
  
  const startTime = Date.now();
  const RATE_LIMIT_DELAY_MS = 3000;
  
  // Helper to make API call with retries
  async function paintPass(passNum, passName, options = {}) {
    const progress = Number.isFinite(options.progress)
      ? Math.max(1, Math.min(99, Math.round(options.progress)))
      : (passNum === 1 ? 25 : passNum === 2 ? 50 : passNum === 3 ? 75 : 95);
    const maxPixels = Number.isFinite(options.maxPixels)
      ? Math.max(1, Math.round(options.maxPixels))
      : 160;
    const workSize = Number.isFinite(options.workSize)
      ? Math.max(48, Math.min(PIXEL_PAINTER_CANVAS_SIZE, Math.round(options.workSize)))
      : PIXEL_PAINTER_CANVAS_SIZE;
    const visionScaleFactor = Number.isFinite(options.scaleFactor)
      ? Math.max(1, Math.round(options.scaleFactor))
      : 4;
    const guideMode = String(options.guideMode || "").trim().toLowerCase();
    const qualityProfile = String(options.qualityProfile || "standard").trim().toLowerCase();
    progressBar.style.width = `${progress}%`;
    const draftTag = workSize < PIXEL_PAINTER_CANVAS_SIZE ? ` (${workSize}x${workSize} draft)` : "";
    statusText.textContent = `${passName}${draftTag}...`;
    
    let retries = 2;
    let rateLimitRetries = 1;
    
    while (retries > 0) {
      const response = await fetch(PIXEL_PAINTER_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          [PIXEL_PAINTER_USER_KEY_HEADER]: userPixelPainterApiKey
        },
        body: JSON.stringify({
          prompt: prompt,
          canvas_base64: canvas.getBase64(visionScaleFactor, workSize),
          reference_image_base64: referenceImageBase64,
          pass_num: passNum,
          max_pixels: maxPixels,
          work_size: workSize,
          guide_mode: guideMode,
          quality_profile: qualityProfile,
          mode: "pixel"
        })
      });
      const responseData = await response.json().catch(() => null);
      
      if (response.ok) {
        const data = responseData || {};
        if (data.ok && data.pixel_changes?.length > 0) {
          canvas.applyPixelChanges(data.pixel_changes);
        }
        return data;
      }
      
      if (response.status === 429 && rateLimitRetries > 0) {
        rateLimitRetries--;
        const retryAfterSec = Number(responseData && responseData.retry_after_sec) || 0;
        const waitMs = retryAfterSec > 0 ? retryAfterSec * 1000 : (4 - rateLimitRetries) * RATE_LIMIT_DELAY_MS;
        statusText.textContent = `Rate limit, waiting ${Math.max(1, Math.round(waitMs / 1000))}s...`;
        await new Promise(r => setTimeout(r, waitMs));
        continue;
      }
      
      if (response.status === 401 || response.status === 403) {
        setPixelPainterApiKey("");
        throw new Error((responseData && responseData.error) || "Your Ollama API key was rejected.");
      }
      
      if (response.status < 500) {
        throw new Error((responseData && responseData.error) || `API error: ${response.status}`);
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

  async function runProtectedPixelPassSequence(passList, options = {}) {
    let strongestSnapshot = canvas.captureSnapshot();
    let strongestScore = -Infinity;
    let strongestConfidence = 0;
    let lastAcceptedConfidence = 0;
    let completedPasses = 0;
    const minPassesBeforeStop = Number.isFinite(options.minPassesBeforeStop)
      ? Math.max(1, Math.round(options.minPassesBeforeStop))
      : 3;
    const targetConfidence = Number.isFinite(options.targetConfidence)
      ? Math.max(0.5, Math.min(0.98, Number(options.targetConfidence)))
      : 0.8;

    for (let index = 0; index < passList.length && !stopped; index++) {
      const pixelPass = passList[index];
      const beforeSnapshot = canvas.captureSnapshot();
      let passResult;
      try {
        passResult = await paintPass(pixelPass.passNum, pixelPass.label, pixelPass);
      } catch (error) {
        if (index > 0 || options.allowPartialResult) {
          canvas.restoreSnapshot(strongestSnapshot);
          previewImg.src = canvas.getDisplayUrl();
          previewDiv.style.display = "block";
          statusText.textContent = "Using strongest finished pass";
          break;
        }
        throw error;
      }

      const diffStats = canvas.measureDifference(beforeSnapshot);
      const safeConfidence = clampPixelPainterConfidence(passResult && passResult.confidence);
      const progressAssessment = String((passResult && passResult.progress_assessment) || "").trim().toLowerCase();
      const rawFocusRegion = String((passResult && passResult.focus_region) || "").trim().toLowerCase();
      const focusRegion = ["full", "subject", "local_detail", "none"].includes(rawFocusRegion) ? rawFocusRegion : "";
      const stopRecommended = !!(passResult && passResult.should_stop);
      const allowedChangeRatio = Number.isFinite(pixelPass.maxChangedRatio)
        ? Math.max(0.02, Math.min(1, pixelPass.maxChangedRatio))
        : 1;
      const effectiveAllowedChangeRatio = focusRegion === "none"
        ? Math.min(allowedChangeRatio, 0.03)
        : focusRegion === "local_detail"
          ? Math.min(allowedChangeRatio, 0.12)
          : focusRegion === "subject"
            ? Math.min(allowedChangeRatio, 0.22)
            : allowedChangeRatio;
      const lateProtection = allowedChangeRatio <= 0.35 || /detail|cleanup/i.test(String(pixelPass.guideMode || ""));
      const destructiveArea = diffStats.changedRatio > effectiveAllowedChangeRatio;
      const destructiveIntensity = lateProtection &&
        diffStats.strongChangedRatio > Math.max(0.03, effectiveAllowedChangeRatio * 0.7);
      const confidenceDrop = lastAcceptedConfidence > 0 &&
        safeConfidence > 0 &&
        safeConfidence < (lastAcceptedConfidence - 0.10);
      const textLooksDone = /\b(complete|completed|done|finished|stable|good enough|already works|stop)\b/.test(progressAssessment);
      const noOpPass = Array.isArray(passResult && passResult.pixel_changes) && passResult.pixel_changes.length === 0;
      const stopSignal = stopRecommended || textLooksDone || focusRegion === "none" || noOpPass;
      const passScore =
        safeConfidence * 1.08 -
        (lateProtection ? diffStats.changedRatio * 0.60 : diffStats.changedRatio * 0.18) -
        (lateProtection ? diffStats.strongChangedRatio * 0.95 : diffStats.strongChangedRatio * 0.24) +
        (stopSignal ? 0.03 : 0);
      const clearlyWeakerLatePass = lateProtection &&
        strongestScore > -Infinity &&
        passScore < (strongestScore - 0.08);

      if ((destructiveArea || destructiveIntensity || clearlyWeakerLatePass) && (lateProtection || confidenceDrop)) {
        canvas.restoreSnapshot(strongestSnapshot);
        previewImg.src = canvas.getDisplayUrl();
        previewDiv.style.display = "block";
        completedPasses = Math.max(completedPasses, Math.max(1, pixelPass.passNum - 1));
        statusText.textContent = "Keeping stronger earlier pass";
        break;
      }

      completedPasses = Math.max(completedPasses, pixelPass.passNum);
      lastAcceptedConfidence = safeConfidence > 0 ? safeConfidence : lastAcceptedConfidence;

      const shouldRefreshStrongestPass = strongestScore === -Infinity ||
        passScore > strongestScore ||
        (passScore >= strongestScore - 0.02 && safeConfidence >= strongestConfidence);
      if (shouldRefreshStrongestPass) {
        strongestSnapshot = canvas.captureSnapshot();
        strongestScore = passScore;
        strongestConfidence = safeConfidence;
      }

      previewImg.src = canvas.getDisplayUrl();
      previewDiv.style.display = "block";

      const lowImpactLatePass = lateProtection &&
        diffStats.changedRatio < Math.max(0.005, effectiveAllowedChangeRatio * 0.24);
      const stableEnoughToStop = completedPasses >= minPassesBeforeStop &&
        strongestConfidence >= targetConfidence &&
        diffStats.changedRatio < Math.max(0.022, effectiveAllowedChangeRatio * 0.55);
      const latePassPlateau = completedPasses >= minPassesBeforeStop &&
        strongestScore > -Infinity &&
        passScore < (strongestScore + 0.015) &&
        diffStats.changedRatio < Math.max(0.04, effectiveAllowedChangeRatio * 0.75);

      if ((stopSignal && completedPasses >= minPassesBeforeStop) || lowImpactLatePass || stableEnoughToStop || latePassPlateau) {
        statusText.textContent = "Image locked";
        break;
      }

      if (index < passList.length - 1) {
        await new Promise((r) => setTimeout(r, PIXEL_PAINTER_DELAY_MS));
      }
    }

    return {
      completedPasses: Math.max(1, completedPasses)
    };
  }

  async function requestVectorArtwork(passNum, passName, progress, currentVectorBase64, currentVectorScene, priorRepairFocus) {
    progressBar.style.width = `${progress}%`;
    statusText.textContent = `${passName}...`;

    let retries = renderMode === "best" ? 1 : 2;
    let rateLimitRetries = renderMode === "best" ? 0 : 1;

    while (retries > 0) {
      const response = await fetch(PIXEL_PAINTER_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          [PIXEL_PAINTER_USER_KEY_HEADER]: userPixelPainterApiKey
        },
        body: JSON.stringify({
          prompt: prompt,
          canvas_base64: currentVectorBase64 || "",
          reference_image_base64: referenceImageBase64,
          current_scene: currentVectorScene || null,
          repair_focus: String(priorRepairFocus || ""),
          pass_num: passNum,
          max_pixels: 100,
          quality_profile: renderMode === "best" ? "usage_safe" : "standard",
          mode: "vector"
        })
      });
      const responseData = await response.json().catch(() => null);

      if (response.ok) {
        const data = responseData || {};
        const imageUrl = getPixelPainterImageUrl(data);
        if (data.ok && data.mode === "vector" && imageUrl) {
          const confidence = Number(data.confidence);
          const elementCount = Number(data.element_count);
          const criticScore = Number(data.critic_score);
          const issueCount = Number(data.issue_count);
          return {
            imageUrl,
            confidence: Number.isFinite(confidence) ? confidence : 0,
            elementCount: Number.isFinite(elementCount) ? elementCount : 0,
            criticScore: Number.isFinite(criticScore) ? criticScore : 0,
            vectorSource: String(data.vector_source || "model"),
            issueCount: Number.isFinite(issueCount) ? issueCount : 0,
            issues: Array.isArray(data.issues) ? data.issues.map((entry) => String(entry || "").trim()).filter(Boolean) : [],
            repairFocus: String(data.repair_focus || "").trim(),
            scene: data && typeof data.scene === "object" ? data.scene : null
          };
        }
        throw new Error((data && data.error) || "Vector generation returned an invalid scene.");
      }

      if (response.status === 429 && rateLimitRetries > 0) {
        rateLimitRetries--;
        const retryAfterSec = Number(responseData && responseData.retry_after_sec) || 0;
        const waitMs = retryAfterSec > 0 ? retryAfterSec * 1000 : (4 - rateLimitRetries) * RATE_LIMIT_DELAY_MS;
        statusText.textContent = `Rate limit, waiting ${Math.max(1, Math.round(waitMs / 1000))}s...`;
        await new Promise((r) => setTimeout(r, waitMs));
        continue;
      }

      if (response.status === 401 || response.status === 403) {
        setPixelPainterApiKey("");
        throw new Error((responseData && responseData.error) || "Your Ollama API key was rejected.");
      }

      if (response.status >= 500) {
        retries--;
        if (retries > 0) {
          const waitMs = (6 - retries) * 1000;
          statusText.textContent = `Retrying in ${waitMs / 1000}s...`;
          await new Promise((r) => setTimeout(r, waitMs));
          continue;
        }
      }

      throw new Error((responseData && responseData.error) || `API error: ${response.status}`);
    }

    throw new Error("Vector generation retries exhausted");
  }

  async function requestComfyUiArtwork() {
    progressBar.style.width = "18%";
    statusText.textContent = "Sending prompt to ROK IMAGE...";

    const headers = {
      "Content-Type": "application/json"
    };
    if (userPixelPainterApiKey) {
      headers[PIXEL_PAINTER_USER_KEY_HEADER] = userPixelPainterApiKey;
    }

    const response = await fetch(PIXEL_PAINTER_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        prompt,
        provider: "comfyui",
        provider_url: providerUrl,
        provider_checkpoint: providerCheckpoint,
        reference_image_base64: referenceImageBase64,
        mode: "image"
      })
    });
    const responseData = await response.json().catch(() => null);
    if (!response.ok) {
      throw new Error((responseData && responseData.error) || `API error: ${response.status}`);
    }
    const data = responseData || {};
    const imageUrl = getPixelPainterImageUrl(data);
    if (!data.ok || !imageUrl) {
      throw new Error((data && data.error) || "ROK IMAGE did not return an image.");
    }
    return {
      imageUrl,
      provider: String(data.provider || "comfyui")
    };
  }
  
  const useVectorPipeline = false;
  const vectorPromptText = ` ${String(prompt || "").toLowerCase()} `;
  const vectorPromptWordCount = (String(prompt || "").match(/[A-Za-z0-9']+/g) || []).length;
  const complexVectorPrompt = useVectorPipeline && (
    vectorPromptWordCount >= 6 ||
    /\b(and|with|on|riding|holding|eating|wearing|beside|next to|while|carrying|under|over)\b/.test(vectorPromptText)
  );
  const relationHeavyVectorPrompt = useVectorPipeline &&
    /\b(riding|holding|eating|wearing|beside|next to|while|carrying|under|over)\b/.test(vectorPromptText);
  const pixelPromptProfile = getPixelPainterPromptProfile(prompt);
  let finalUrl = "";
  const vectorPasses = renderMode === "best"
    ? (
        complexVectorPrompt
          ? [
              { passNum: 1, progress: 18, label: "Planning structure" },
              { passNum: 2, progress: 36, label: "Locking scaffold" }
            ]
          : [
              { passNum: 1, progress: 24, label: "Blocking scene" }
            ]
      )
    : (
        complexVectorPrompt
          ? [
              { passNum: 1, progress: 18, label: "Blocking scene" },
              { passNum: 2, progress: 38, label: "Separating subjects" },
              { passNum: 3, progress: 58, label: "Fixing relationships" },
              { passNum: 4, progress: 78, label: "Repairing anatomy and props" },
              { passNum: 5, progress: 92, label: "Polishing silhouette" }
            ]
          : [
              { passNum: 1, progress: 24, label: "Blocking scene" },
              { passNum: 2, progress: 52, label: "Correcting shapes" },
              { passNum: 3, progress: 78, label: "Refining details" },
              { passNum: 4, progress: 92, label: "Final cleanup" }
            ]
      );
  const directPixelPasses = buildAdaptivePixelPasses(pixelPromptProfile);
  const hybridPixelPasses = complexVectorPrompt
    ? [
        { passNum: 1, progress: 62, label: "Overpainting scaffold", maxPixels: 150, guideMode: "vector_scaffold", qualityProfile: "usage_safe" },
        { passNum: 2, progress: 82, label: "Fixing action details", maxPixels: 140, guideMode: "vector_scaffold", qualityProfile: "usage_safe" },
        { passNum: 3, progress: 97, label: "Final cleanup", maxPixels: 100, guideMode: "vector_scaffold", qualityProfile: "usage_safe" }
      ]
    : [
        { passNum: 1, progress: 70, label: "Overpainting scaffold", maxPixels: 130, guideMode: "vector_scaffold", qualityProfile: "usage_safe" },
        { passNum: 2, progress: 95, label: "Final cleanup", maxPixels: 90, guideMode: "vector_scaffold", qualityProfile: "usage_safe" }
      ];
  let generationSummary = `${directPixelPasses.length}-pass adaptive coarse-to-fine ROK IMAGE painting`;

  try {
    if (!stopped && imageProvider === "comfyui") {
      const comfyResult = await requestComfyUiArtwork();
      finalUrl = comfyResult.imageUrl;
      previewImg.src = finalUrl;
      previewDiv.style.display = "block";
      progressBar.style.width = "100%";
      statusText.textContent = "Complete";
    }

    let seedVectorResult = null;
    let skipBestPaintStage = false;
    if (!stopped && useVectorPipeline) {
      let currentVectorBase64 = "";
      let currentVectorScene = null;
      let currentRepairFocus = "";
      let bestVectorResult = null;
      for (const vectorPass of vectorPasses) {
        if (stopped) break;
        let vectorResult;
        try {
          vectorResult = await requestVectorArtwork(
            vectorPass.passNum,
            vectorPass.label,
            vectorPass.progress,
            currentVectorBase64,
            currentVectorScene,
            currentRepairFocus
          );
        } catch (error) {
          if (bestVectorResult && bestVectorResult.imageUrl) {
            statusText.textContent = "Using strongest scaffold so far";
            break;
          }
          throw error;
        }
        if (!vectorResult || !vectorResult.imageUrl) {
          continue;
        }
        const vectorConfidence = Number(vectorResult.confidence);
        const vectorElementCount = Number(vectorResult.elementCount);
        const vectorCriticScore = Number(vectorResult.criticScore);
        const vectorIssueCount = Number(vectorResult.issueCount);
        const safeConfidence = Number.isFinite(vectorConfidence) ? vectorConfidence : 0;
        const safeElementCount = Number.isFinite(vectorElementCount) ? vectorElementCount : 0;
        const safeCriticScore = Number.isFinite(vectorCriticScore) ? vectorCriticScore : 0;
        const safeIssueCount = Number.isFinite(vectorIssueCount) ? vectorIssueCount : 0;
        const confidenceDroppedTooFar = !!bestVectorResult && safeConfidence < (bestVectorResult.confidence - 0.12);
        const elementCountCollapsed = !!bestVectorResult &&
          bestVectorResult.elementCount >= 24 &&
          safeElementCount > 0 &&
          safeElementCount < Math.floor(bestVectorResult.elementCount * 0.7);
        const criticDroppedTooFar = !!bestVectorResult &&
          safeCriticScore > 0 &&
          bestVectorResult.criticScore > 0 &&
          safeCriticScore < (bestVectorResult.criticScore - 10);
        const issueCountWorsened = !!bestVectorResult &&
          safeIssueCount > 0 &&
          safeIssueCount > (bestVectorResult.issueCount + 2);

        if (confidenceDroppedTooFar || elementCountCollapsed || criticDroppedTooFar || issueCountWorsened) {
          statusText.textContent = `${vectorPass.label}... keeping stronger earlier pass`;
          continue;
        }

        bestVectorResult = {
          imageUrl: vectorResult.imageUrl,
          confidence: safeConfidence,
          elementCount: safeElementCount,
          criticScore: safeCriticScore,
          vectorSource: vectorResult.vectorSource || "model",
          issueCount: safeIssueCount,
          issues: Array.isArray(vectorResult.issues) ? vectorResult.issues : [],
          repairFocus: String(vectorResult.repairFocus || "").trim(),
          scene: vectorResult.scene && typeof vectorResult.scene === "object" ? vectorResult.scene : null
        };
        finalUrl = bestVectorResult.imageUrl;
        previewImg.src = finalUrl;
        previewDiv.style.display = "block";
        currentVectorScene = bestVectorResult.scene;
        currentRepairFocus = bestVectorResult.repairFocus;
        const earlyStopStrongFirstPass = renderMode === "vector" &&
          complexVectorPrompt &&
          !relationHeavyVectorPrompt &&
          vectorPass.passNum === 1 &&
          (
            ((bestVectorResult.criticScore >= 108 && bestVectorResult.vectorSource !== "template") ||
            bestVectorResult.criticScore >= 120) &&
            bestVectorResult.issueCount <= 1
          );
        if (earlyStopStrongFirstPass) {
          generationSummary = "1-pass critic-picked vector SVG illustration";
          statusText.textContent = "Complete";
          break;
        }
        const bestModeSkipPaint = renderMode === "best" &&
          (
            bestVectorResult.criticScore >= 112 ||
            bestVectorResult.issueCount <= 1
          );
        if (bestModeSkipPaint) {
          generationSummary = `${vectorPass.passNum}-pass usage-safe vector illustration`;
          statusText.textContent = "Complete";
          skipBestPaintStage = true;
          break;
        }
        const earlyStopBestScaffold = renderMode === "best" &&
          vectorPass.passNum >= 2 &&
          bestVectorResult.criticScore >= 106 &&
          bestVectorResult.issueCount <= 2;
        if (earlyStopBestScaffold) {
          statusText.textContent = "Scaffold locked";
          break;
        }
        if (vectorPass.passNum < vectorPasses.length) {
          currentVectorBase64 = await renderPixelPainterPreviewToBase64(finalUrl);
        }
      }
      if (renderMode === "vector" && finalUrl) {
        progressBar.style.width = "100%";
        statusText.textContent = "Complete";
      } else if (renderMode === "best" && skipBestPaintStage && bestVectorResult) {
        progressBar.style.width = "100%";
        statusText.textContent = "Complete";
      } else if (renderMode === "best" && bestVectorResult) {
        seedVectorResult = bestVectorResult;
        finalUrl = "";
      }
    }

    if (!stopped && renderMode === "best" && !finalUrl) {
      let activePixelPasses = hybridPixelPasses;
      if (seedVectorResult && seedVectorResult.imageUrl) {
        statusText.textContent = "Seeding paint canvas...";
        await canvas.loadFromDataUrl(seedVectorResult.imageUrl);
        previewImg.src = canvas.getDisplayUrl();
        previewDiv.style.display = "block";
      } else {
        statusText.textContent = "Falling back to direct painting...";
        activePixelPasses = directPixelPasses;
        generationSummary = `${directPixelPasses.length}-pass paint fallback`;
      }

      const pixelRun = await runProtectedPixelPassSequence(activePixelPasses, {
        allowPartialResult: !!(seedVectorResult && seedVectorResult.imageUrl),
        minPassesBeforeStop: Math.max(2, pixelPromptProfile.minPassesBeforeStop - 1),
        targetConfidence: Math.max(0.72, pixelPromptProfile.targetConfidence - 0.03)
      });
      generationSummary = `${pixelRun.completedPasses}-pass protected paint fallback`;
      finalUrl = canvas.getDisplayUrl();
      progressBar.style.width = "100%";
      statusText.textContent = "Complete";
    }

    if (!stopped && renderMode === "pixel" && !finalUrl) {
      const pixelRun = await runProtectedPixelPassSequence(directPixelPasses, {
        allowPartialResult: false,
        minPassesBeforeStop: pixelPromptProfile.minPassesBeforeStop,
        targetConfidence: pixelPromptProfile.targetConfidence
      });
      generationSummary = `${pixelRun.completedPasses}-pass protected adaptive ROK IMAGE painting`;
      finalUrl = canvas.getDisplayUrl();
      progressBar.style.width = "100%";
      statusText.textContent = "Complete";
    }
  } catch (error) {
    statusText.textContent = `Error: ${error.message}`;
    console.error("Imagine generation error:", error);
  }
  
  // Show final result
  if (!finalUrl && imageProvider === "ollama" && renderMode !== "vector") {
    finalUrl = canvas.getDisplayUrl();
  }
  if (!finalUrl) {
    stopBtn.style.display = "none";
    return;
  }
  previewImg.src = finalUrl;
  previewDiv.style.display = "block";
  stopBtn.style.display = "none";
  
  // Build details
  const duration = Math.round((Date.now() - startTime) / 1000);
  
  detailsDiv.innerHTML = `
    <div class="pixel-painting-stats">
      <span>â±ï¸ ${duration}s</span>
      <span>4-pass pixel painting</span>
    </div>
    <button class="pixel-painting-save" type="button">ðŸ’¾ Save to Gallery</button>
  `;
  detailsDiv.style.display = "block";
  detailsDiv.innerHTML = `
    <div class="pixel-painting-stats">
      <span>Time: ${duration}s</span>
      <span>${generationSummary}</span>
    </div>
    <button class="pixel-painting-save" type="button">Save to Gallery</button>
  `;
  
  // Save button
  const saveBtn = detailsDiv.querySelector(".pixel-painting-save");
  saveBtn.addEventListener("click", () => {
    savePixelPainting(prompt, finalUrl, [], duration);
    saveBtn.textContent = "âœ… Saved!";
    saveBtn.disabled = true;
    saveBtn.textContent = "Saved to Gallery";
  });
  
  // Auto-save
  savePixelPainting(prompt, finalUrl, [], duration);
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

// â”€â”€ ROK Pictionary â”€â”€
const PICTIONARY_API_URL = buildApiUrl("/api/pictionary");

async function handlePictionaryCommand() {
  addMessage("user", "/pictionary");
  addMessage("bot", "ðŸŽ¨ **Pictionary** - Draw the prompt and I'll guess what it is!");

  // Fetch prompt from backend
  let prompt = "a cat"; // fallback
  try {
    const res = await fetch(`${PICTIONARY_API_URL}/prompt`);
    if (res.ok) {
      const data = await res.json();
      if (data.ok && data.prompt) {
        prompt = data.prompt;
      }
    }
  } catch (e) {
    console.error("Failed to fetch pictionary prompt:", e);
  }

  // Build UI
  const row = document.createElement("div");
  row.className = "chat-row bot-row";
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble bot-bubble";

  bubble.innerHTML = `
    <div class="pictionary-game" style="padding: 16px; background: #252535; border-radius: 12px; margin: 8px 0;">
      <div style="font-size: 18px; font-weight: 600; margin-bottom: 12px; color: #fff;">
        ðŸŽ¯ Draw this: <span style="color: #7dd3fc;">${escapeHtml(prompt)}</span>
      </div>
      <canvas class="pictionary-canvas" width="300" height="300" style="background: #fff; border-radius: 8px; cursor: crosshair; touch-action: none;"></canvas>
      <div style="display: flex; gap: 8px; margin-top: 12px;">
        <button class="pictionary-clear" style="padding: 8px 16px; background: #374151; border: none; border-radius: 6px; color: #fff; cursor: pointer;">ðŸ—‘ï¸ Clear</button>
        <button class="pictionary-submit" style="padding: 8px 16px; background: #7dd3fc; border: none; border-radius: 6px; color: #0f172a; font-weight: 600; cursor: pointer;">âœ… Submit Drawing</button>
      </div>
      <div class="pictionary-result" style="margin-top: 12px; font-size: 14px;"></div>
    </div>
  `;

  row.appendChild(bubble);
  if (!chat) {
    addMessage("bot", "Pictionary couldn't open because the chat panel is unavailable.");
    return;
  }
  chat.appendChild(row);
  scrollToBottom();

  // Setup canvas drawing
  const canvas = bubble.querySelector(".pictionary-canvas");
  const ctx = canvas.getContext("2d");
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#000";

  let drawing = false;

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  }

  canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  });
  canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;
    const pos = getPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  });
  canvas.addEventListener("mouseup", () => drawing = false);
  canvas.addEventListener("mouseleave", () => drawing = false);

  // Touch support
  canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    drawing = true;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  });
  canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    if (!drawing) return;
    const pos = getPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  });
  canvas.addEventListener("touchend", () => drawing = false);

  // Clear button
  bubble.querySelector(".pictionary-clear").addEventListener("click", () => {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    bubble.querySelector(".pictionary-result").innerHTML = "";
  });

  // Initialize white background
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Submit button
  bubble.querySelector(".pictionary-submit").addEventListener("click", async () => {
    const imageBase64 = canvas.toDataURL("image/jpeg", 0.8).split(",")[1];
    const resultDiv = bubble.querySelector(".pictionary-result");
    resultDiv.innerHTML = "ðŸ¤” AI is thinking...";

    try {
      const res = await fetch(`${PICTIONARY_API_URL}/judge`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, image_base64: imageBase64 })
      });

      if (!res.ok) {
        resultDiv.innerHTML = `âŒ Error: ${res.status}`;
        return;
      }

      const data = await res.json();
      if (data.ok) {
        resultDiv.innerHTML = `
          <div style="background: #1e293b; padding: 12px; border-radius: 8px;">
            <div>ðŸ¤– AI guessed: <strong>${escapeHtml(data.guess || "?")}</strong></div>
            <div>â­ Score: <strong>${data.score || 0}/100</strong></div>
            <div style="color: #94a3b8; margin-top: 4px;">${escapeHtml(data.reaction || "")}</div>
          </div>
        `;
      } else {
        resultDiv.innerHTML = `âŒ ${escapeHtml(data.error || "Failed")}`;
      }
    } catch (e) {
      resultDiv.innerHTML = "âŒ Network error";
      console.error("Pictionary submit error:", e);
    }
  });
}

