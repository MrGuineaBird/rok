(function () {
  "use strict";

  var ROUND_SECONDS = 120;

  var PROMPTS = [
    "A dragon riding a skateboard",
    "A penguin eating pizza on the moon",
    "A robot having a picnic",
    "A cat wearing sunglasses driving a bus",
    "A volcano made of ice cream",
    "A T-Rex playing basketball",
    "A house floating with balloons",
    "A snail winning a race against a rabbit",
    "A UFO stealing a taco",
    "A wizard cooking spaghetti",
    "A giraffe in a submarine",
    "A pineapple detective",
    "A cloud that looks angry",
    "A bicycle with square wheels",
    "A fish reading a newspaper",
    "A tree made of candy",
    "A superhero who is a potato",
    "A time machine made of cheese",
    "A shark wearing a bow tie",
    "A castle on a turtle's back",
    "A musical note with legs",
    "A cactus hugging a balloon",
    "A moon juggling stars",
    "A toaster as a spaceship",
    "A banana slipping on a peel",
    "A ghost at a birthday party",
    "A lighthouse in the desert",
    "A pencil fighting an eraser",
    "A cup of coffee surfing",
    "A dragonfly wearing a top hat",
    "A snowman in a sauna",
    "A rocket made of broccoli",
    "A hedgehog as a chef",
    "A rainbow bridge for ants",
    "An owl doing yoga",
  ];

  var canvas = document.getElementById("pictCanvas");
  var ctx = canvas.getContext("2d");
  var promptEl = document.getElementById("pictPrompt");
  var timerEl = document.getElementById("pictTimer");
  var startBtn = document.getElementById("pictStartBtn");
  var clearBtn = document.getElementById("pictClearBtn");
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

  var roundActive = false;
  var drawingEnabled = false;
  var drawing = false;
  var secondsLeft = ROUND_SECONDS;
  var timerId = null;
  var lastPrompt = "";

  function randomPrompt() {
    var i = Math.floor(Math.random() * PROMPTS.length);
    return PROMPTS[i];
  }

  function formatTime(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function setTimerDisplay(sec) {
    timerEl.textContent = formatTime(sec);
    timerEl.classList.toggle("pict-timer--warn", sec <= 20 && sec > 0);
  }

  function clearCanvas() {
    ctx.fillStyle = "#faf6f2";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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
    drawing = true;
    var p = canvasCoords(e);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
  }

  function moveStroke(e) {
    if (!drawingEnabled || !drawing) return;
    e.preventDefault();
    var p = canvasCoords(e);
    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth = Math.max(3, canvas.width / 200);
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
    startBtn.disabled = false;
    clearBtn.disabled = true;
    setTimerDisplay(0);

    var dataUrl = canvas.toDataURL("image/png");
    submitDrawing(dataUrl);
  }

  function submitDrawing(dataUrl) {
    setStatus("busy", "Sending to AI…");
    resultsEl.hidden = true;

    fetch("/api/pictionary/judge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: lastPrompt,
        image_base64: dataUrl,
      }),
    })
      .then(function (r) {
        return r.json().then(function (j) {
          return { ok: r.ok, status: r.status, body: j };
        });
      })
      .then(function (res) {
        if (!res.ok || !res.body.ok) {
          var err = (res.body && res.body.error) || "Request failed";
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
          resultReaction.textContent = data.reaction || "—";
        }
        setStatus("idle", "Done");
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
      });
  }

  function startRound() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
    resultsEl.hidden = true;
    rawEl.hidden = true;

    lastPrompt = randomPrompt();
    promptEl.textContent = lastPrompt;

    clearCanvas();
    secondsLeft = ROUND_SECONDS;
    setTimerDisplay(secondsLeft);

    roundActive = true;
    drawingEnabled = true;
    canvas.classList.remove("pict-canvas--locked");
    hintEl.hidden = true;
    startBtn.disabled = true;
    clearBtn.disabled = false;
    setStatus("idle", "Draw!");

    timerId = setInterval(function () {
      secondsLeft -= 1;
      setTimerDisplay(secondsLeft);
      if (secondsLeft <= 0) {
        endRound();
      }
    }, 1000);
  }

  canvas.addEventListener("mousedown", startStroke);
  canvas.addEventListener("mousemove", moveStroke);
  window.addEventListener("mouseup", endStroke);
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

  playAgainBtn.addEventListener("click", function () {
    if (roundActive) return;
    startRound();
  });

  function init() {
    clearCanvas();
    canvas.classList.add("pict-canvas--locked");
    setTimerDisplay(ROUND_SECONDS);
    setStatus("idle", "Press Start round when ready.");
  }

  init();
})();
