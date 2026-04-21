(function () {
  "use strict";

  const API_BASE = window.ROK_API_BASE || "http://localhost:5000";
  const STORY_CACHE_KEY = "rok_madlibs_current";
  
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

  // State
  let currentStory = null;
  let filledWords = {};
  let countdownTimer = null;
  const ESTIMATED_SECONDS = 20;

  // Generate story via fast dedicated endpoint (returns JSON directly, no streaming)
  async function generateStory() {
    showLoading();
    startCountdown();

    const startTime = Date.now();

    try {
      const response = await fetch(`${API_BASE}/api/madlibs/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();
      
      if (!data.ok || !data.story) {
        throw new Error(data.error || "Failed to generate story");
      }

      const storyText = data.story;
      const elapsed = Math.round((Date.now() - startTime) / 1000);
      console.log(`Story received in ${elapsed}s, length:`, storyText.length);

      // Parse story to extract blanks
      currentStory = parseStory(storyText);
      
      if (currentStory.blanks.length === 0) {
        // Fallback template if parsing fails
        currentStory = getFallbackStory();
      }
      
      showInputPhase();
    } catch (err) {
      showError(err.message || "Failed to generate story");
    } finally {
      stopCountdown();
    }
  }

  // Countdown timer for generation
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
        remaining--;
      }
    }
    
    updateDisplay();
    countdownTimer = setInterval(updateDisplay, 1000);
  }

  function stopCountdown() {
    if (countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    }
    if (timeEstimate) {
      timeEstimate.textContent = "";
    }
    if (generationProgress) {
      generationProgress.style.width = "100%";
      generationProgress.style.opacity = "0";
      setTimeout(() => {
        generationProgress.style.width = "0%";
        generationProgress.style.opacity = "1";
      }, 300);
    }
  }

  // Parse story text to extract [TYPE] blanks
  function parseStory(text) {
    const blanks = [];
    const regex = /\[([A-Z]+)\]/g;
    let match;
    
    while ((match = regex.exec(text)) !== null) {
      blanks.push({
        type: match[1].toLowerCase(),
        original: match[0],
        id: `blank_${blanks.length}`
      });
    }

    return {
      template: text,
      blanks: blanks
    };
  }

  // Fallback story if AI fails
  function getFallbackStory() {
    return {
      template: `Yesterday, I went to the [PLACE] with my pet [ANIMAL]. It was very [ADJECTIVE] there! 
Suddenly, a [ADJECTIVE] person started to [VERB] while eating a [NOUN]. 
I exclaimed "[EXCLAMATION]!" and decided to [VERB] away as [ADVERB] as possible.`,
      blanks: [
        { type: "place", original: "[PLACE]", id: "blank_0" },
        { type: "animal", original: "[ANIMAL]", id: "blank_1" },
        { type: "adjective", original: "[ADJECTIVE]", id: "blank_2" },
        { type: "adjective", original: "[ADJECTIVE]", id: "blank_3" },
        { type: "verb", original: "[VERB]", id: "blank_4" },
        { type: "noun", original: "[NOUN]", id: "blank_5" },
        { type: "exclamation", original: "[EXCLAMATION]", id: "blank_6" },
        { type: "verb", original: "[VERB]", id: "blank_7" },
        { type: "adverb", original: "[ADVERB]", id: "blank_8" }
      ]
    };
  }

  // Create input fields for blanks
  function showInputPhase() {
    hideAll();
    inputPhase.hidden = false;
    wordInputs.hidden = false;
    
    // Build input fields
    inputList.innerHTML = "";
    filledWords = {};
    
    currentStory.blanks.forEach((blank, index) => {
      const item = document.createElement("div");
      item.className = "madlibs-input-item";
      
      const label = document.createElement("label");
      label.className = "madlibs-input-label";
      label.textContent = `${index + 1}. ${blank.type}`;
      label.htmlFor = blank.id;
      
      const input = document.createElement("input");
      input.type = "text";
      input.id = blank.id;
      input.className = "madlibs-input-field";
      input.placeholder = getPlaceholder(blank.type);
      input.dataset.index = index;
      
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
    
    // Focus first input
    const firstInput = inputList.querySelector("input");
    if (firstInput) firstInput.focus();
  }

  function getPlaceholder(type) {
    const examples = {
      noun: "e.g., pizza, bicycle",
      verb: "e.g., dance, explode",
      adjective: "e.g., sparkly, furious",
      adverb: "e.g., quickly, mysteriously",
      place: "e.g., supermarket, Mars",
      animal: "e.g., platypus, T-Rex",
      exclamation: "e.g., Holy moly, Yikes"
    };
    return examples[type] || `Enter a ${type}`;
  }

  function onInputChange(e) {
    const index = parseInt(e.target.dataset.index);
    filledWords[index] = e.target.value.trim();
    updateProgress();
  }

  function focusNextInput(currentIndex) {
    const inputs = inputList.querySelectorAll("input");
    const next = inputs[currentIndex + 1];
    if (next) next.focus();
  }

  function updateProgress() {
    const filled = Object.values(filledWords).filter(v => v).length;
    const total = currentStory.blanks.length;
    remainingCount.textContent = total - filled;
    showStoryBtn.disabled = filled < total;
  }

  // Generate and show final story
  function showStory() {
    let storyHtml = currentStory.template;
    
    // Replace blanks with filled words (in reverse order to preserve indices)
    const sortedBlanks = [...currentStory.blanks].reverse();
    sortedBlanks.forEach((blank, reverseIndex) => {
      const index = currentStory.blanks.length - 1 - reverseIndex;
      const word = filledWords[index] || `[${blank.type}]`;
      storyHtml = storyHtml.replace(blank.original, `<span class="blank">${escapeHtml(word)}</span>`);
    });
    
    // Convert newlines to paragraphs
    storyHtml = storyHtml
      .split("\n\n")
      .map(p => `<p>${p.replace(/\n/g, "<br>")}</p>`)
      .join("");
    
    storyOutput.innerHTML = storyHtml;
    
    hideAll();
    storyPhase.hidden = false;
    
    // Save to localStorage for persistence
    saveStory();
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function copyStory() {
    const text = storyOutput.textContent;
    navigator.clipboard.writeText(text).then(() => {
      copyStoryBtn.textContent = "✅ Copied!";
      setTimeout(() => {
        copyStoryBtn.textContent = "📋 Copy";
      }, 2000);
    });
  }

  function shareStory() {
    const text = storyOutput.textContent;
    if (navigator.share) {
      navigator.share({
        title: "My ROK Mad Lib",
        text: text
      });
    } else {
      copyStory();
      shareStoryBtn.textContent = "✅ Copied to share!";
      setTimeout(() => {
        shareStoryBtn.textContent = "Share Result";
      }, 2000);
    }
  }

  function saveStory() {
    try {
      localStorage.setItem(STORY_CACHE_KEY, JSON.stringify({
        story: currentStory,
        filled: filledWords,
        timestamp: Date.now()
      }));
    } catch (e) {
      // Ignore storage errors
    }
  }

  function loadSavedStory() {
    try {
      const saved = localStorage.getItem(STORY_CACHE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        if (data.story && data.filled) {
          currentStory = data.story;
          filledWords = data.filled;
          return true;
        }
      }
    } catch (e) {
      // Ignore parse errors
    }
    return false;
  }

  // UI Helpers
  function showLoading() {
    hideAll();
    loadingState.hidden = false;
  }

  function showError(message) {
    hideAll();
    errorState.hidden = false;
    errorMessage.textContent = message;
  }

  function hideAll() {
    inputPhase.hidden = true;
    storyPhase.hidden = true;
    loadingState.hidden = true;
    stopCountdown();
    errorState.hidden = true;
    wordInputs.hidden = true;
  }

  // Event Listeners
  generateStoryBtn.addEventListener("click", generateStory);
  showStoryBtn.addEventListener("click", showStory);
  newStoryBtn.addEventListener("click", () => {
    currentStory = null;
    filledWords = {};
    try {
      localStorage.removeItem(STORY_CACHE_KEY);
    } catch (e) {}
    hideAll();
    inputPhase.hidden = false;
    wordInputs.hidden = true;
  });
  copyStoryBtn.addEventListener("click", copyStory);
  shareStoryBtn.addEventListener("click", shareStory);
  retryBtn.addEventListener("click", generateStory);

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !storyPhase.hidden) {
      hideAll();
      inputPhase.hidden = false;
      wordInputs.hidden = true;
    }
  });

  // Init
  hideAll();
  inputPhase.hidden = false;
  wordInputs.hidden = true;
  
  // Try to restore saved story
  if (loadSavedStory()) {
    showStory();
  }
})();
