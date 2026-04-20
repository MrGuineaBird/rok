(function () {
  "use strict";

  var ROUND_SECONDS = 120;
  var MAX_UNDO_STEPS = 30;

  var canvas = document.getElementById("pictCanvas");
  var ctx = canvas.getContext("2d");
  var promptEl = document.getElementById("pictPrompt");
  var timerEl = document.getElementById("pictTimer");
  var timerProgressEl = document.querySelector(".pict-timer-progress");
  var startBtn = document.getElementById("pictStartBtn");
  var clearBtn = document.getElementById("pictClearBtn");
  var undoBtn = document.getElementById("pictUndoBtn");
  var downloadBtn = document.getElementById("pictDownloadBtn");
  var toolsPanel = document.getElementById("pictToolsPanel");
  var modeDrawBtn = document.getElementById("pictModeDraw");
  var modeEraseBtn = document.getElementById("pictModeErase");
  var colorPicker = document.getElementById("pictColorPicker");
  var widthRange = document.getElementById("pictWidthRange");
  var widthValueEl = document.getElementById("pictWidthValue");
  var hintEl = document.getElementById("pictCanvasHint");
  var statusEl = document.getElementById("pictStatus");
  var statusText = document.getElementById("pictStatusText");
  var resultsEl = document.getElementById("pictResults");
  var resultGuess = document.getElementById("pictResultGuess");
  var resultScore = document.getElementById("pictResultScore");
  var resultReaction = document.getElementById("pictResultReaction");
  var scoreFill = document.getElementById("pictScoreFill");
  var rawEl = document.getElementById("pictResultRaw");
  var playAgainBtn = document.getElementById("pictPlayAgainBtn");
  var verdictModal = document.getElementById("pictVerdictModal");
  var verdictBackdrop = document.getElementById("pictVerdictBackdrop");
  var modalCloseBtn = document.getElementById("pictModalCloseBtn");
  var cursorPreview = document.getElementById("pictCursorPreview");
  var revealOverlay = document.getElementById("pictRevealOverlay");
  var revealScoreEl = document.getElementById("pictRevealScore");
  var revealGuessEl = document.getElementById("pictRevealGuess");
  var countdownOverlay = document.getElementById("pictCountdownOverlay");
  var countdownNumberEl = document.getElementById("pictCountdownNumber");
  var countdownPromptEl = document.getElementById("pictCountdownPrompt");

  var roundActive = false;
  var drawingEnabled = false;
  var drawing = false;
  var secondsLeft = ROUND_SECONDS;
  var timerId = null;
  var lastPrompt = "";
  var fetchingPrompt = false;
  var promptRequestId = 0;
  var promptAbortController = null;

  var CANVAS_BG = "#faf6f2";
  /** "draw" | "erase" */
  var brushMode = "draw";

  // Undo history — stores canvas snapshots
  var undoStack = [];

  function pushUndoState() {
    if (!drawingEnabled) return;
    try {
      undoStack.push(canvas.toDataURL("image/png"));
      if (undoStack.length > MAX_UNDO_STEPS) {
        undoStack.shift();
      }
    } catch (_) {}
  }

  function popUndoState() {
    if (!undoStack.length) return;
    var dataUrl = undoStack.pop();
    var img = new Image();
    img.onload = function () {
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = CANVAS_BG;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
    img.src = dataUrl;
  }

  function showVerdictModal() {
    if (!verdictModal) return;
    verdictModal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function hideVerdictModal() {
    if (!verdictModal) return;
    verdictModal.hidden = true;
    document.body.style.overflow = "";
  }

  function hideRevealOverlay() {
    if (!revealOverlay) return;
    revealOverlay.hidden = true;
    // Reset animations by removing/re-adding elements
    var spotlight = revealOverlay.querySelector(".pict-reveal-spotlight");
    if (spotlight) {
      spotlight.style.animation = "none";
      void spotlight.offsetWidth;
      spotlight.style.animation = "";
    }
    if (revealScoreEl) {
      revealScoreEl.style.animation = "none";
      void revealScoreEl.offsetWidth;
      revealScoreEl.style.animation = "";
    }
    if (revealGuessEl) {
      revealGuessEl.style.animation = "none";
      void revealGuessEl.offsetWidth;
      revealGuessEl.style.animation = "";
    }
  }

  function showRevealOverlay(guess, score, onDone) {
    if (!revealOverlay) {
      if (onDone) onDone();
      return;
    }
    // Set score text with color
    if (revealScoreEl) {
      revealScoreEl.textContent = score + " / 10";
      revealScoreEl.className = "pict-reveal-score";
      if (score <= 3) {
        revealScoreEl.classList.add("pict-reveal-score--low");
      } else if (score <= 6) {
        revealScoreEl.classList.add("pict-reveal-score--mid");
      } else {
        revealScoreEl.classList.add("pict-reveal-score--high");
      }
    }
    if (revealGuessEl) {
      revealGuessEl.textContent = '"' + guess + '"';
    }
    revealOverlay.hidden = false;
    document.body.style.overflow = "hidden";

    // After the full animation sequence (~4s with new spotlight), fade out and call onDone
    setTimeout(function () {
      revealOverlay.style.transition = "opacity 0.5s ease";
      revealOverlay.style.opacity = "0";
      setTimeout(function () {
        revealOverlay.hidden = true;
        revealOverlay.style.opacity = "";
        revealOverlay.style.transition = "";
        if (onDone) onDone();
      }, 500);
    }, 4200);
  }

  function syncWidthLabel() {
    if (widthValueEl && widthRange) {
      widthValueEl.textContent = widthRange.value + " px";
    }
  }

  function setBrushMode(mode) {
    brushMode = mode === "erase" ? "erase" : "draw";
    var isErase = brushMode === "erase";
    if (modeDrawBtn && modeEraseBtn) {
      modeDrawBtn.classList.toggle("pict-tools-mode--active", !isErase);
      modeDrawBtn.setAttribute("aria-pressed", !isErase ? "true" : "false");
      modeEraseBtn.classList.toggle("pict-tools-mode--active", isErase);
      modeEraseBtn.setAttribute("aria-pressed", isErase ? "true" : "false");
    }
    canvas.classList.toggle("pict-canvas--eraser", isErase);
    if (toolsPanel) {
      toolsPanel.classList.toggle("pict-tools--color-muted", isErase);
    }
    updateColorSwatchHighlight();
  }

  function updateColorSwatchHighlight() {
    var currentColor = currentStrokeColor();
    document.querySelectorAll(".pict-swatch").forEach(function (swatch) {
      var swatchColor = swatch.getAttribute("data-color");
      if (swatchColor && swatchColor.toLowerCase() === currentColor.toLowerCase()) {
        swatch.classList.add("pict-swatch--active");
      } else {
        swatch.classList.remove("pict-swatch--active");
      }
    });
  }

  function currentStrokeColor() {
    return brushMode === "erase" ? CANVAS_BG : colorPicker.value;
  }

  function currentLineWidth() {
    var n = parseInt(widthRange.value, 10);
    if (isNaN(n) || n < 1) n = 4;
    return Math.max(1, n);
  }

  /**
   * API base (same rules as main ROK app.js / index.html ROK_API_BASE).
   */
  function getApiBase() {
    var root = "";
    if (typeof window !== "undefined" && typeof window.ROK_API_BASE === "string") {
      root = String(window.ROK_API_BASE).trim().replace(/\/+$/, "");
    }
    if (!root) {
      var meta = document.querySelector('meta[name="rok-api-root"]');
      var m = meta && meta.getAttribute("content");
      root = m && String(m).trim() ? String(m).replace(/\/+$/, "") : "";
    }
    if (!root && typeof window.location !== "undefined") {
      var host = (window.location.hostname || "").toLowerCase();
      if (host === "rok.kyklos.online" || host === "www.rok.kyklos.online") {
        root = "https://rokbackendreal.kyklos.online";
      }
    }
    if (!root && typeof window.location !== "undefined" && window.location.origin) {
      root = window.location.origin;
    }
    return root || "";
  }

  function getPromptEndpoint() {
    return getApiBase() + "/api/pictionary/prompt";
  }

  function getJudgeEndpoint() {
    return getApiBase() + "/api/pictionary/judge";
  }

  /** Shrink + JPEG to avoid huge POST bodies (fixes HTTP/2 / proxy errors on Render). */
  function compressCanvasForUpload(sourceCanvas) {
    var maxSide = 768;
    var w = sourceCanvas.width;
    var h = sourceCanvas.height;
    if (w < 1 || h < 1) {
      return sourceCanvas.toDataURL("image/jpeg", 0.88);
    }
    var scale = 1;
    if (w > maxSide || h > maxSide) {
      scale = maxSide / Math.max(w, h);
    }
    var tw = Math.max(1, Math.round(w * scale));
    var th = Math.max(1, Math.round(h * scale));
    var off = document.createElement("canvas");
    off.width = tw;
    off.height = th;
    var octx = off.getContext("2d");
    octx.fillStyle = "#faf6f2";
    octx.fillRect(0, 0, tw, th);
    octx.drawImage(sourceCanvas, 0, 0, tw, th);
    return off.toDataURL("image/jpeg", 0.88);
  }

  function parseJsonResponse(r) {
    return r.text().then(function (text) {
      var j = null;
      try {
        j = text ? JSON.parse(text) : null;
      } catch (e) {
        j = { error: "HTTP " + r.status + " — " + (text ? text.slice(0, 200) : "empty body") };
      }
      return { ok: r.ok, status: r.status, body: j };
    });
  }

  function fetchAiPrompt(signal) {
    return fetch(getPromptEndpoint(), {
      method: "GET",
      headers: { Accept: "application/json" },
      signal: signal,
    }).then(parseJsonResponse).then(function (res) {
      if (!res.ok || !res.body || res.body.ok !== true || !res.body.prompt) {
        var err =
          (res.body && (res.body.error || res.body.message)) ||
          "Could not get a prompt (HTTP " + res.status + ")";
        throw new Error(err);
      }
      return String(res.body.prompt).trim();
    });
  }

  function formatTime(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function setTimerDisplay(sec) {
    timerEl.textContent = formatTime(sec);
    timerEl.classList.toggle("pict-timer--warn", sec <= 20 && sec > 0);
    updateTimerProgress(sec);
  }

  function updateTimerProgress(sec) {
    if (!timerProgressEl) return;
    var totalSeconds = ROUND_SECONDS;
    var progress = Math.max(0, sec / totalSeconds);
    var circumference = 2 * Math.PI * 26; // r=26 from SVG
    var offset = circumference * (1 - progress);
    timerProgressEl.style.strokeDashoffset = offset;
  }

  function clearCanvas() {
    pushUndoState();
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = CANVAS_BG;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function downloadDrawing() {
    try {
      var link = document.createElement("a");
      link.download = "rok-pictionary-" + (lastPrompt || "drawing").replace(/[^a-z0-9]/gi, "-").slice(0, 30) + ".png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (_) {}
  }

  function showCursorPreview(e) {
    if (!cursorPreview || !drawingEnabled) return;
    var rect = canvas.getBoundingClientRect();
    var size = currentLineWidth() * (rect.width / canvas.width);
    cursorPreview.style.width = size + "px";
    cursorPreview.style.height = size + "px";
    cursorPreview.style.left = (e.clientX - size / 2) + "px";
    cursorPreview.style.top = (e.clientY - size / 2) + "px";
    cursorPreview.hidden = false;
  }

  function hideCursorPreview() {
    if (cursorPreview) cursorPreview.hidden = true;
  }

  function canvasCoords(e) {
    var rect = canvas.getBoundingClientRect();
    var scaleX = canvas.width / rect.width;
    var scaleY = canvas.height / rect.height;
    var clientX = e.clientX != null ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    var clientY = e.clientY != null ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  }

  function startStroke(e) {
    if (!drawingEnabled) return;
    e.preventDefault();
    pushUndoState();
    drawing = true;
    var p = canvasCoords(e);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
  }

  function moveStroke(e) {
    if (!drawingEnabled || !drawing) return;
    e.preventDefault();
    var p = canvasCoords(e);
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = currentStrokeColor();
    ctx.lineWidth = currentLineWidth();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
  }

  function endStroke() {
    drawing = false;
    ctx.beginPath();
    hideCursorPreview();
  }

  function setStatus(mode, text) {
    statusEl.hidden = false;
    statusText.textContent = text;
    statusEl.classList.remove("pict-status--idle", "pict-status--busy");
    if (mode === "busy") {
      statusEl.classList.add("pict-status--busy");
    } else {
      statusEl.classList.add("pict-status--idle");
    }
  }

  function endRound() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
    roundActive = false;
    drawingEnabled = false;
    canvas.classList.add("pict-canvas--locked");
    canvas.closest(".pict-canvas-wrap").classList.remove("pict-canvas-wrap--drawing");
    startBtn.disabled = false;
    clearBtn.disabled = true;
    if (undoBtn) undoBtn.disabled = true;
    setTimerDisplay(0);

    var dataUrl = compressCanvasForUpload(canvas);
    submitDrawing(dataUrl);
  }

  function submitDrawing(dataUrl) {
    setStatus("busy", "Sending to AI…");
    resultsEl.hidden = true;
    hideVerdictModal();

    var url = getJudgeEndpoint();
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        prompt: lastPrompt,
        image_base64: dataUrl,
      }),
    })
      .then(function (r) {
        return r.text().then(function (text) {
          var j = null;
          try {
            j = text ? JSON.parse(text) : null;
          } catch (e) {
            j = { error: "HTTP " + r.status + " — " + (text ? text.slice(0, 200) : "empty body") };
          }
          return { ok: r.ok, status: r.status, body: j };
        });
      })
      .then(function (res) {
        if (!res.ok || !res.body || res.body.ok !== true) {
          var err =
            (res.body && (res.body.error || res.body.message)) ||
            "Request failed (HTTP " + res.status + ")";
          throw new Error(err);
        }
        return res.body;
      })
      .then(function (data) {
        resultsEl.hidden = false;
        if (data.parse_error) {
          resultGuess.textContent = "—";
          resultScore.textContent = "?";
          resultReaction.textContent = "The AI replied in an unexpected format.";
          scoreFill.style.width = "0%";
          rawEl.hidden = false;
          rawEl.textContent = data.raw_text || "";
        } else {
          rawEl.hidden = true;
          resultGuess.textContent = data.guess || "—";
          var sc = typeof data.score === "number" ? data.score : parseInt(data.score, 10) || 0;
          resultScore.textContent = sc + " / 10";
          scoreFill.style.width = Math.min(100, Math.max(0, sc * 10)) + "%";
          scoreFill.classList.remove("pict-score--low", "pict-score--mid", "pict-score--high");
          if (sc <= 3) {
            scoreFill.classList.add("pict-score--low");
          } else if (sc <= 6) {
            scoreFill.classList.add("pict-score--mid");
          } else {
            scoreFill.classList.add("pict-score--high");
          }
          resultReaction.textContent = data.reaction || "—";
        }
        setStatus("idle", "Done");
        showRevealOverlay(data.guess || "—", sc, function () {
          showVerdictModal();
        });
      })
      .catch(function (err) {
        resultsEl.hidden = false;
        rawEl.hidden = false;
        rawEl.textContent = String(err.message || err);
        resultGuess.textContent = "—";
        resultScore.textContent = "—";
        resultReaction.textContent = "Something went wrong.";
        scoreFill.style.width = "0%";
        setStatus("idle", "Error");
        showVerdictModal();
      });
  }

  function beginRoundWithPrompt(promptText) {
    lastPrompt = promptText;
    promptEl.textContent = lastPrompt;

    clearCanvas();
    secondsLeft = ROUND_SECONDS;
    setTimerDisplay(secondsLeft);

    // Show 3-2-1 countdown before enabling drawing
    showCountdown(promptText, function () {
      roundActive = true;
      drawingEnabled = true;
      undoStack = [];
      canvas.classList.remove("pict-canvas--locked");
      canvas.closest(".pict-canvas-wrap").classList.add("pict-canvas-wrap--drawing");
      hintEl.hidden = true;
      startBtn.disabled = true;
      clearBtn.disabled = false;
      if (undoBtn) undoBtn.disabled = false;
      setStatus("idle", "Draw!");

      timerId = setInterval(function () {
        secondsLeft -= 1;
        setTimerDisplay(secondsLeft);
        if (secondsLeft <= 0) {
          endRound();
        }
      }, 1000);
    });
  }

  function showCountdown(promptText, onDone) {
    if (!countdownOverlay || !countdownNumberEl) {
      if (onDone) onDone();
      return;
    }
    // Don't show the prompt in the countdown overlay — it's already in the sidebar
    if (countdownPromptEl) {
      countdownPromptEl.textContent = '';
    }
    countdownOverlay.hidden = false;
    document.body.style.overflow = "hidden";

    var steps = ["3", "2", "1"];
    var idx = 0;

    function showNext() {
      if (idx >= steps.length) {
        // Show "GO!"
        countdownNumberEl.textContent = "GO!";
        countdownNumberEl.className = "pict-countdown-number pict-countdown-go";
        // Force re-trigger animation
        countdownNumberEl.style.animation = "none";
        void countdownNumberEl.offsetWidth;
        countdownNumberEl.style.animation = "";
        setTimeout(function () {
          countdownOverlay.hidden = true;
          document.body.style.overflow = "";
          countdownNumberEl.className = "pict-countdown-number";
          if (onDone) onDone();
        }, 600);
        return;
      }
      countdownNumberEl.textContent = steps[idx];
      countdownNumberEl.className = "pict-countdown-number";
      // Force re-trigger animation
      countdownNumberEl.style.animation = "none";
      void countdownNumberEl.offsetWidth;
      countdownNumberEl.style.animation = "";
      idx++;
      setTimeout(showNext, 900);
    }

    showNext();
  }

  function hideCountdown() {
    if (!countdownOverlay) return;
    countdownOverlay.hidden = true;
    document.body.style.overflow = "";
  }

  function startRound() {
    if (roundActive || fetchingPrompt) return;
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
    resultsEl.hidden = true;
    hideVerdictModal();
    hideRevealOverlay();
    hideCountdown();
    rawEl.hidden = true;

    startBtn.disabled = true;
    playAgainBtn.disabled = true;
    setStatus("busy", "Asking the AI for a prompt…");
    promptEl.textContent = "…";
    fetchingPrompt = true;
    promptRequestId += 1;
    var activeRequestId = promptRequestId;
    if (promptAbortController && typeof promptAbortController.abort === "function") {
      promptAbortController.abort();
    }
    promptAbortController =
      typeof AbortController !== "undefined" ? new AbortController() : null;

    fetchAiPrompt(promptAbortController ? promptAbortController.signal : undefined)
      .then(function (text) {
        if (activeRequestId !== promptRequestId) return;
        beginRoundWithPrompt(text);
      })
      .catch(function (err) {
        if (activeRequestId !== promptRequestId) return;
        if (err && err.name === "AbortError") return;
        setStatus("idle", String(err && err.message ? err.message : "Could not get a prompt."));
        promptEl.textContent = "Press Start round to try again — the AI will suggest what to draw.";
        startBtn.disabled = false;
      })
      .then(function () {
        if (activeRequestId !== promptRequestId) return;
        fetchingPrompt = false;
        promptAbortController = null;
        playAgainBtn.disabled = false;
      });
  }

  canvas.addEventListener("mousedown", startStroke);
  canvas.addEventListener("mousemove", function (e) {
    moveStroke(e);
    showCursorPreview(e);
  });
  window.addEventListener("mouseup", endStroke);
  canvas.addEventListener("mouseleave", hideCursorPreview);
  canvas.addEventListener("touchstart", startStroke, { passive: false });
  canvas.addEventListener("touchmove", moveStroke, { passive: false });
  window.addEventListener("touchend", endStroke);

  startBtn.addEventListener("click", function () {
    if (roundActive) return;
    startRound();
  });

  clearBtn.addEventListener("click", function () {
    if (!drawingEnabled) return;
    clearCanvas();
  });

  if (undoBtn) {
    undoBtn.addEventListener("click", function () {
      popUndoState();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      downloadDrawing();
    });
  }

  modeDrawBtn.addEventListener("click", function () {
    setBrushMode("draw");
  });

  modeEraseBtn.addEventListener("click", function () {
    setBrushMode("erase");
  });

  colorPicker.addEventListener("input", function () {
    setBrushMode("draw");
    updateColorSwatchHighlight();
  });

  widthRange.addEventListener("input", syncWidthLabel);

  document.querySelectorAll(".pict-swatch").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var c = btn.getAttribute("data-color");
      if (c) {
        colorPicker.value = c;
        setBrushMode("draw");
        updateColorSwatchHighlight();
      }
    });
  });

  playAgainBtn.addEventListener("click", function () {
    if (roundActive) return;
    hideVerdictModal();
    startRound();
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", hideVerdictModal);
  }
  if (verdictBackdrop) {
    verdictBackdrop.addEventListener("click", hideVerdictModal);
  }
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      hideVerdictModal();
      hideRevealOverlay();
      hideCountdown();
      return;
    }
    // Keyboard shortcuts (only when not typing in an input)
    var tag = (event.target && event.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    if ((event.ctrlKey || event.metaKey) && event.key === "z") {
      event.preventDefault();
      popUndoState();
      return;
    }
    if (!drawingEnabled) return;
    if (event.key === "b" || event.key === "B") {
      setBrushMode("draw");
    } else if (event.key === "e" || event.key === "E") {
      setBrushMode("erase");
    } else if (event.key === "c" || event.key === "C") {
      clearCanvas();
    }
  });

  function init() {
    syncWidthLabel();
    setBrushMode("draw");
    clearCanvas();
    hideVerdictModal();
    canvas.classList.add("pict-canvas--locked");
    setTimerDisplay(ROUND_SECONDS);
    updateTimerProgress(ROUND_SECONDS);
    setStatus("idle", "Press Start round when ready.");
    updateColorSwatchHighlight();
  }

  // Keyboard shortcuts
  document.addEventListener("keydown", function (e) {
    // Ignore when typing in inputs
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    
    // Ignore modifiers
    if (e.ctrlKey || e.metaKey || e.altKey) {
      // Ctrl+Z for undo
      if (e.key === "z" && !e.shiftKey) {
        e.preventDefault();
        if (undoBtn && !undoBtn.disabled) {
          popUndoState();
        }
      }
      return;
    }
    
    switch (e.key.toLowerCase()) {
      case "b":
        e.preventDefault();
        setBrushMode("draw");
        break;
      case "e":
        e.preventDefault();
        setBrushMode("erase");
        break;
      case "c":
        e.preventDefault();
        if (clearBtn && !clearBtn.disabled) {
          clearCanvas();
        }
        break;
      case " ":
        e.preventDefault();
        if (startBtn && !startBtn.disabled) {
          startRound();
        }
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
        e.preventDefault();
        var swatches = document.querySelectorAll(".pict-swatch");
        var index = parseInt(e.key) - 1;
        if (swatches[index]) {
          swatches[index].click();
        }
        break;
      case "+":
      case "=":
        e.preventDefault();
        if (widthRange) {
          widthRange.value = Math.min(40, parseInt(widthRange.value) + 2);
          syncWidthLabel();
        }
        break;
      case "-":
      case "_":
        e.preventDefault();
        if (widthRange) {
          widthRange.value = Math.max(2, parseInt(widthRange.value) - 2);
          syncWidthLabel();
        }
        break;
    }
  });

  init();
})();
