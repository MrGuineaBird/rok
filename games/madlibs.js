(function () {
  "use strict";

  function getStoredApiBase() {
    try {
      return localStorage.getItem("rok_api_base") || localStorage.getItem("apiBase") || "";
    } catch {
      return "";
    }
  }

  const runtimeConfig = (typeof window !== "undefined" && window.ROK_CONFIG) ? window.ROK_CONFIG : {};
  const runtimeApiBase =
    (typeof window !== "undefined" && typeof window.ROK_API_BASE === "string") ? window.ROK_API_BASE : "";
  const API_BASE = String(
    runtimeApiBase ||
    runtimeConfig.apiBase ||
    getStoredApiBase() ||
    "https://rokbackendreal.kyklos.online"
  ).trim().replace(/\/+$/, "");
  const STORY_CACHE_KEY = "rok_madlibs_current";
  const GENERATION_TIMEOUT_MS = 12000;
  const BLANK_PATTERN = /\[([A-Za-z][A-Za-z\s-]*)\]/g;
  const FALLBACK_TEMPLATES = [
    `At the [PLACE] talent show, my [ADJECTIVE] [ANIMAL] insisted on performing a [ADJECTIVE] dance while balancing a [NOUN] on its nose.

The judges started to [VERB] so [ADVERB] that one of them shouted "[EXCLAMATION]!" and awarded us a lifetime supply of [NOUN].`,
    `Yesterday, our class took a field trip to [PLACE], where a [ADJECTIVE] guide taught us how to [VERB] using only a [NOUN] and an [ANIMAL].

Everything was going well until the loudspeaker screamed "[EXCLAMATION]!" and everyone ran [ADVERB] toward the gift shop.`,
    `During my vacation on [PLACE], I discovered a [ADJECTIVE] machine that could turn any [NOUN] into an [ANIMAL].

I decided to [VERB] with it [ADVERB], but the mayor burst in yelling "[EXCLAMATION]!" and demanded I hand over the instruction manual.`,
    `The grand opening of the [ADJECTIVE] snack lab in [PLACE] was going perfectly until a runaway [ANIMAL] launched a [NOUN] into the ceiling.

I tried to [VERB] the situation, but the crowd only cheered more [ADVERB] and kept chanting "[EXCLAMATION]!"`
  ];

  // DOM Elements
  const inputPhase = document.getElementById("inputPhase");
  const storyPhase = document.getElementById("storyPhase");
  const loadingState = document.getElementById("loadingState");
  const errorState = document.getElementById("errorState");

  const generateStoryBtn = document.getElementById("generateStoryBtn");
  const wordInputs = document.getElementById("wordInputs");
  const inputList = document.getElementById("inputList");
  const remainingCount = document.getElementById("remainingCount");
  const showStoryBtn = document.getElementById("showStoryBtn");

  const storyOutput = document.getElementById("storyOutput");
  const copyStoryBtn = document.getElementById("copyStoryBtn");
  const newStoryBtn = document.getElementById("newStoryBtn");
  const shareStoryBtn = document.getElementById("shareStoryBtn");
  const retryBtn = document.getElementById("retryBtn");
  const errorMessage = document.getElementById("errorMessage");
  const timeEstimate = document.getElementById("timeEstimate");
  const generationProgress = document.getElementById("generationProgress");
  const storyStatus = document.getElementById("storyStatus");

  // State
  let currentStory = null;
  let currentStorySource = "ai";
  let filledWords = {};
  let countdownTimer = null;
  const ESTIMATED_SECONDS = 20;
  let sessionBootstrapPromise = null;

  function ensureServerSession() {
    if (sessionBootstrapPromise) {
      return sessionBootstrapPromise;
    }
    sessionBootstrapPromise = fetch(`${API_BASE}/api/auth/session`, {
      method: "GET",
      cache: "no-store",
      credentials: "include",
      headers: {
        Accept: "application/json"
      }
    }).catch(() => {
      // Mad Libs can still try to run even if session bootstrap is unavailable.
    });
    return sessionBootstrapPromise;
  }

  async function generateStory() {
    showLoading();
    setStatusMessage("Generating a fresh story...", "success");
    startCountdown();

    try {
      const storyText = await fetchStoryTemplate();
      const parsedStory = parseStory(storyText);

      if (!storyHasBlanks(parsedStory)) {
        throw new Error("The AI response did not include any fill-in-the-blank markers.");
      }

      currentStory = parsedStory;
      currentStorySource = "ai";
      setStatusMessage("Fresh AI story ready. Fill in the blanks.", "success");
      showInputPhase();
    } catch (err) {
      console.warn("Mad Libs falling back to local story pack:", err);
      currentStory = getFallbackStory();
      currentStorySource = "offline";
      setStatusMessage("AI is unavailable right now, so ROK switched to a built-in story pack.", "warning");
      showInputPhase();
    } finally {
      stopCountdown();
    }
  }

  async function fetchStoryTemplate() {
    await ensureServerSession();
    const controller = typeof AbortController === "function" ? new AbortController() : null;
    let timeoutId = null;

    if (controller) {
      timeoutId = window.setTimeout(() => controller.abort(), GENERATION_TIMEOUT_MS);
    }

    try {
      const response = await fetch(`${API_BASE}/api/madlibs/generate`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({}),
        signal: controller ? controller.signal : undefined
      });

      if (!response.ok) {
        throw new Error(`Story service returned ${response.status}.`);
      }

      const data = await response.json();
      if (!data || !data.ok || typeof data.story !== "string") {
        throw new Error((data && data.error) || "Story service returned an invalid response.");
      }

      return data.story;
    } catch (err) {
      if (err && err.name === "AbortError") {
        throw new Error("Story generation timed out.");
      }
      throw err;
    } finally {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    }
  }

  function startCountdown() {
    stopCountdown();
    let remaining = ESTIMATED_SECONDS;

    function updateDisplay() {
      if (remaining <= 0) {
        timeEstimate.textContent = "Almost done...";
        if (generationProgress) {
          generationProgress.style.animation = "none";
          generationProgress.style.width = "90%";
        }
      } else {
        timeEstimate.textContent = `Estimated time: ~${remaining} second${remaining === 1 ? "" : "s"}`;
        remaining -= 1;
      }
    }

    updateDisplay();
    countdownTimer = window.setInterval(updateDisplay, 1000);
  }

  function stopCountdown() {
    if (countdownTimer) {
      window.clearInterval(countdownTimer);
      countdownTimer = null;
    }
    if (timeEstimate) {
      timeEstimate.textContent = "";
    }
    if (generationProgress) {
      generationProgress.style.width = "100%";
      generationProgress.style.opacity = "0";
      window.setTimeout(() => {
        generationProgress.style.width = "0%";
        generationProgress.style.opacity = "1";
        generationProgress.style.animation = "";
      }, 300);
    }
  }

  function parseStory(text) {
    const template = String(text || "").trim();
    const blanks = [];
    const parts = [];
    let lastIndex = 0;
    let match;

    BLANK_PATTERN.lastIndex = 0;

    while ((match = BLANK_PATTERN.exec(template)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          kind: "text",
          value: template.slice(lastIndex, match.index)
        });
      }

      const blankType = normalizeBlankType(match[1]);
      blanks.push({
        type: blankType,
        label: formatBlankLabel(blankType),
        original: match[0],
        id: `blank_${blanks.length}`
      });

      parts.push({
        kind: "blank",
        index: blanks.length - 1
      });

      lastIndex = BLANK_PATTERN.lastIndex;
    }

    if (lastIndex < template.length) {
      parts.push({
        kind: "text",
        value: template.slice(lastIndex)
      });
    }

    return {
      template,
      blanks,
      parts
    };
  }

  function normalizeBlankType(rawType) {
    const cleaned = String(rawType || "word")
      .trim()
      .toLowerCase()
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ");

    if (!cleaned) {
      return "word";
    }

    const aliases = {
      adj: "adjective",
      adjective: "adjective",
      adverb: "adverb",
      animal: "animal",
      bodypart: "body part",
      color: "color",
      exclamation: "exclamation",
      interjection: "exclamation",
      food: "food",
      location: "place",
      noun: "noun",
      number: "number",
      person: "person",
      place: "place",
      pluralnoun: "plural noun",
      profession: "profession",
      verb: "verb"
    };

    const compact = cleaned.replace(/\s+/g, "");
    return aliases[cleaned] || aliases[compact] || cleaned;
  }

  function formatBlankLabel(type) {
    return String(type || "word")
      .replace(/\s+/g, " ")
      .trim();
  }

  function storyHasBlanks(story) {
    return !!(story && Array.isArray(story.blanks) && story.blanks.length > 0);
  }

  function getFallbackStory() {
    const template = FALLBACK_TEMPLATES[Math.floor(Math.random() * FALLBACK_TEMPLATES.length)];
    const parsed = parseStory(template);

    if (storyHasBlanks(parsed)) {
      return parsed;
    }

    return {
      template: "A [ADJECTIVE] [ANIMAL] tried to [VERB] through [PLACE] while balancing a [NOUN] [ADVERB].",
      blanks: [
        { type: "adjective", label: "adjective", original: "[ADJECTIVE]", id: "blank_0" },
        { type: "animal", label: "animal", original: "[ANIMAL]", id: "blank_1" },
        { type: "verb", label: "verb", original: "[VERB]", id: "blank_2" },
        { type: "place", label: "place", original: "[PLACE]", id: "blank_3" },
        { type: "noun", label: "noun", original: "[NOUN]", id: "blank_4" },
        { type: "adverb", label: "adverb", original: "[ADVERB]", id: "blank_5" }
      ],
      parts: [
        { kind: "text", value: "A " },
        { kind: "blank", index: 0 },
        { kind: "text", value: " " },
        { kind: "blank", index: 1 },
        { kind: "text", value: " tried to " },
        { kind: "blank", index: 2 },
        { kind: "text", value: " through " },
        { kind: "blank", index: 3 },
        { kind: "text", value: " while balancing a " },
        { kind: "blank", index: 4 },
        { kind: "text", value: " " },
        { kind: "blank", index: 5 },
        { kind: "text", value: "." }
      ]
    };
  }

  function showInputPhase() {
    hideAll();
    inputPhase.hidden = false;
    wordInputs.hidden = false;

    inputList.innerHTML = "";
    filledWords = {};

    currentStory.blanks.forEach((blank, index) => {
      const item = document.createElement("div");
      item.className = "madlibs-input-item";

      const label = document.createElement("label");
      label.className = "madlibs-input-label";
      label.textContent = `${index + 1}. ${blank.label}`;
      label.htmlFor = blank.id;

      const input = document.createElement("input");
      input.type = "text";
      input.id = blank.id;
      input.className = "madlibs-input-field";
      input.placeholder = getPlaceholder(blank.type, blank.label);
      input.dataset.index = String(index);

      input.addEventListener("input", onInputChange);
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          focusNextInput(index);
        }
      });

      item.appendChild(label);
      item.appendChild(input);
      inputList.appendChild(item);
    });

    updateProgress();

    const firstInput = inputList.querySelector("input");
    if (firstInput) {
      firstInput.focus();
    }
  }

  function getPlaceholder(type, label) {
    const examples = {
      adjective: "e.g., glittery, furious",
      adverb: "e.g., loudly, mysteriously",
      animal: "e.g., llama, raccoon",
      bodypart: "e.g., elbow, eyebrow",
      "body part": "e.g., elbow, eyebrow",
      color: "e.g., crimson, teal",
      exclamation: "e.g., Yikes!, Holy moly!",
      food: "e.g., burrito, cupcake",
      noun: "e.g., blender, backpack",
      number: "e.g., 12, 9000",
      person: "e.g., your teacher, a pirate",
      place: "e.g., the moon, the mall",
      "plural noun": "e.g., pickles, sneakers",
      profession: "e.g., dentist, astronaut",
      verb: "e.g., juggle, teleport"
    };

    return examples[type] || `Enter a ${label || type || "word"}`;
  }

  function onInputChange(e) {
    const index = Number.parseInt(e.target.dataset.index, 10);
    filledWords[index] = e.target.value.trim();
    updateProgress();
  }

  function focusNextInput(currentIndex) {
    const inputs = inputList.querySelectorAll("input");
    const next = inputs[currentIndex + 1];
    if (next) {
      next.focus();
    }
  }

  function updateProgress() {
    if (!storyHasBlanks(currentStory)) {
      remainingCount.textContent = "0";
      showStoryBtn.disabled = true;
      return;
    }

    const filled = Object.values(filledWords).filter(Boolean).length;
    const total = currentStory.blanks.length;
    remainingCount.textContent = String(total - filled);
    showStoryBtn.disabled = filled < total;
  }

  function showStory() {
    if (!currentStory || !Array.isArray(currentStory.parts)) {
      currentStory = getFallbackStory();
      currentStorySource = "offline";
      setStatusMessage("The saved story format was outdated, so ROK rebuilt it from a local template.", "warning");
    }

    let storyHtml = currentStory.parts.map((part) => {
      if (part.kind === "text") {
        return escapeHtml(part.value);
      }

      const blank = currentStory.blanks[part.index];
      const word = filledWords[part.index] || `[${blank.label}]`;
      return `<span class="blank">${escapeHtml(word)}</span>`;
    }).join("");

    storyHtml = storyHtml
      .split("\n\n")
      .map((paragraph) => `<p>${paragraph.replace(/\n/g, "<br>")}</p>`)
      .join("");

    storyOutput.innerHTML = storyHtml;

    hideAll();
    storyPhase.hidden = false;

    if (currentStorySource === "offline") {
      setStatusMessage("This round used the built-in story pack.", "warning");
    } else {
      setStatusMessage("This round used a fresh AI-generated story.", "success");
    }

    saveStory();
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function copyStory() {
    const text = storyOutput.textContent || "";

    if (!navigator.clipboard || typeof navigator.clipboard.writeText !== "function") {
      setStatusMessage("Copy is not supported in this browser. You can still select the story manually.", "error");
      return;
    }

    navigator.clipboard.writeText(text).then(() => {
      copyStoryBtn.textContent = "Copied!";
      window.setTimeout(() => {
        copyStoryBtn.textContent = "Copy";
      }, 2000);
    }).catch(() => {
      setStatusMessage("Copy failed on this device. You can still select the story manually.", "error");
    });
  }

  function shareStory() {
    const text = storyOutput.textContent || "";
    if (navigator.share) {
      navigator.share({
        title: "My ROK Mad Lib",
        text
      }).catch(() => {
        // Ignore share cancellation and leave the UI untouched.
      });
    } else {
      copyStory();
      shareStoryBtn.textContent = "Copied to share!";
      window.setTimeout(() => {
        shareStoryBtn.textContent = "Share Result";
      }, 2000);
    }
  }

  function saveStory() {
    try {
      localStorage.setItem(STORY_CACHE_KEY, JSON.stringify({
        story: currentStory,
        filled: filledWords,
        source: currentStorySource,
        timestamp: Date.now()
      }));
    } catch (e) {
      // Ignore storage errors.
    }
  }

  function loadSavedStory() {
    try {
      const saved = localStorage.getItem(STORY_CACHE_KEY);
      if (!saved) {
        return false;
      }

      const data = JSON.parse(saved);
      if (!data || !data.story || !data.filled) {
        return false;
      }

      const hydratedStory = hydrateStory(data.story);
      if (!storyHasBlanks(hydratedStory)) {
        return false;
      }

      currentStory = hydratedStory;
      filledWords = data.filled;
      currentStorySource = data.source || "ai";
      return true;
    } catch (e) {
      // Ignore parse errors.
      return false;
    }
  }

  function hydrateStory(story) {
    if (story && Array.isArray(story.parts) && Array.isArray(story.blanks) && story.blanks.length > 0) {
      return story;
    }

    return parseStory(story && story.template ? story.template : "");
  }

  function setStatusMessage(message, tone) {
    if (!storyStatus) {
      return;
    }

    if (!message) {
      storyStatus.textContent = "";
      storyStatus.hidden = true;
      storyStatus.className = "madlibs-status";
      return;
    }

    storyStatus.textContent = message;
    storyStatus.hidden = false;
    storyStatus.className = `madlibs-status is-${tone || "success"}`;
  }

  function showLoading() {
    hideAll();
    loadingState.hidden = false;
  }

  function showError(message) {
    hideAll();
    errorState.hidden = false;
    errorMessage.textContent = message;
    setStatusMessage(message, "error");
  }

  function hideAll() {
    inputPhase.hidden = true;
    storyPhase.hidden = true;
    loadingState.hidden = true;
    stopCountdown();
    errorState.hidden = true;
    wordInputs.hidden = true;
  }

  generateStoryBtn.addEventListener("click", generateStory);
  showStoryBtn.addEventListener("click", showStory);
  newStoryBtn.addEventListener("click", () => {
    currentStory = null;
    currentStorySource = "ai";
    filledWords = {};
    setStatusMessage("", "success");
    try {
      localStorage.removeItem(STORY_CACHE_KEY);
    } catch (e) {
      // Ignore storage errors.
    }
    hideAll();
    inputPhase.hidden = false;
    wordInputs.hidden = true;
  });
  copyStoryBtn.addEventListener("click", copyStory);
  shareStoryBtn.addEventListener("click", shareStory);
  retryBtn.addEventListener("click", generateStory);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !storyPhase.hidden) {
      hideAll();
      inputPhase.hidden = false;
      wordInputs.hidden = true;
    }
  });

  hideAll();
  inputPhase.hidden = false;
  wordInputs.hidden = true;
  setStatusMessage("", "success");

  if (loadSavedStory()) {
    showStory();
  }
})();
