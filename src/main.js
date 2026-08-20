import confetti from 'canvas-confetti';
import { QUESTIONS, getRandomQuestions, getAllCategories } from './data/questions.js';
import { soundFx } from './utils/audio.js';
import { loadGameState, saveGameState, recordGameSession, addCustomQuestion } from './utils/storage.js';

// GAME STATE OBJECT
const state = {
  view: 'HUB', // 'HUB' | 'PLAYING' | 'VERDICT' | 'GAME_OVER'
  mode: 'classic', // 'classic' | 'blitz' | 'category'
  selectedCategory: 'all',

  // Active Round variables
  questions: [],
  currentIndex: 0,
  score: 0,
  lives: 3,
  maxLives: 3,
  streak: 0,
  maxStreak: 0,
  history: [], // [{ question, userGuess, isCorrect, timeRemaining }]
  fastAnswersCount: 0,

  // Timer Variables
  timerDuration: 7, // seconds
  timerRemaining: 7,
  timerInterval: null,
  timerStartTime: null,

  // Persistent User Data
  userData: loadGameState()
};

// DOM References
const viewContainer = document.getElementById('view-container');
const headerScore = document.getElementById('header-score');
const headerHearts = document.getElementById('header-hearts');
const headerStreak = document.getElementById('header-streak');
const headerStreakCount = document.getElementById('header-streak-count');
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');

// --- INIT APP ---
function init() {
  updateHeaderUI();
  setupEventListeners();
  renderHubView();
}

function updateHeaderUI() {
  const scoreEl = document.getElementById('header-score');
  const heartsEl = document.getElementById('header-hearts');
  const streakEl = document.getElementById('header-streak');
  const streakCountEl = document.getElementById('header-streak-count');

  if (scoreEl) {
    scoreEl.textContent = state.score.toLocaleString();
  }

  // Update Hearts
  if (heartsEl) {
    heartsEl.innerHTML = '';
    for (let i = 0; i < state.maxLives; i++) {
      const heart = document.createElement('span');
      heart.className = `heart-icon ${i >= state.lives ? 'lost' : ''}`;
      heart.textContent = '❤️';
      heartsEl.appendChild(heart);
    }
  }

  // Update Streak
  if (streakEl && streakCountEl) {
    if (state.streak >= 2) {
      streakEl.style.display = 'flex';
      streakCountEl.textContent = `${state.streak}x`;
    } else {
      streakEl.style.display = 'none';
    }
  }
}

function setupEventListeners() {
  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    // Only bind keys during active playing state
    if (state.view === 'PLAYING') {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        makeDecision(true); // Vote REAL
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        makeDecision(false); // Vote FAKE
      }
    } else if (state.view === 'VERDICT') {
      if (e.key === ' ' || e.key === 'Enter') {
        advanceNextQuestion();
      }
    } else if (state.view === 'HUB') {
      if (e.key === ' ' || e.key === 'Enter') {
        startGame();
      }
    }
  });

  // Close modal on backdrop click
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
}

// --- RENDER HUB VIEW ---
let mascotInterval = null;

function renderHubView() {
  state.view = 'HUB';
  state.score = 0;
  state.lives = 3;
  state.streak = 0;
  if (state.mode === 'category') {
    state.mode = 'classic';
  }
  state.selectedCategory = 'all';
  updateHeaderUI();

  if (mascotInterval) {
    clearInterval(mascotInterval);
    mascotInterval = null;
  }

  const d = state.userData;
  const accuracyPct = d.totalAnswered > 0 ? Math.round((d.totalCorrect / d.totalAnswered) * 100) : 0;
  const unlockedAchCount = d.achievements ? d.achievements.filter(a => a.unlocked).length : 0;

  viewContainer.innerHTML = `
    <div class="glass-panel start-hub split-hub-layout">
      <!-- Left Panel: Title, Mode Selection, Start CTA, Quick Stats -->
      <div class="hub-left-panel">
        <h1 class="hero-title brand-hero" style="margin-bottom: 0;">
          <span class="truth-text">Truth</span><span class="rush-text">Rush</span>
        </h1>

        <div class="mode-selection-header" style="margin-top: 4px; margin-bottom: 4px;">
          <h2>SELECT GAME MODE</h2>
        </div>

        <!-- 2 Game Modes Grid -->
        <div class="mode-grid" style="grid-template-columns: repeat(2, minmax(180px, 1fr)); width: 100%;">
          <div class="mode-card ${state.mode === 'classic' ? 'active' : ''}" data-mode="classic">
            <span class="mode-badge popular">🔥 POPULAR</span>
            <span class="mode-icon">⏳</span>
            <h3 class="mode-title">Classic Rush</h3>
            <p class="mode-desc">7s timer • 3 Hearts • Mixed Trivia & Photos</p>
          </div>

          <div class="mode-card ${state.mode === 'blitz' ? 'active' : ''}" data-mode="blitz">
            <span class="mode-badge blitz-tag">⚡ SPEED</span>
            <span class="mode-icon">⚡</span>
            <h3 class="mode-title">Lightning Blitz</h3>
            <p class="mode-desc">3.5s speed round • 2x Points • Fast-paced Mix</p>
          </div>
        </div>

        <!-- Play Action CTA -->
        <button class="btn-primary main-play-btn" id="btn-start-game" style="width: 100%; margin-top: 6px;">
          <span>START TRUTHRUSH</span>
          <span class="play-arrow">➔</span>
        </button>

        <!-- Player Quick Stats Bar -->
        <div class="player-quick-stats" style="margin-top: 12px; width: 100%;">
          <div class="quick-stat-item">
            <span class="qs-label">🏆 HIGH SCORE</span>
            <span class="qs-val cyan">${d.highScore.toLocaleString()}</span>
          </div>
          <div class="quick-stat-item">
            <span class="qs-label">🎮 PLAYED</span>
            <span class="qs-val">${d.gamesPlayed}</span>
          </div>
          <div class="quick-stat-item">
            <span class="qs-label">🎯 ACCURACY</span>
            <span class="qs-val green">${accuracyPct}%</span>
          </div>
          <div class="quick-stat-item">
            <span class="qs-label">🏆 TROPHIES</span>
            <span class="qs-val gold">${unlockedAchCount}/${d.achievements ? d.achievements.length : 6}</span>
          </div>
        </div>
      </div>

      <!-- Right Panel: Animated Futuristic Cyberpunk Mascot Showcase -->
      <div class="hub-right-panel">
        <div class="mascot-stage">
          <!-- Background Glow Orbs -->
          <div class="glow-orb orb-cyan"></div>
          <div class="glow-orb orb-purple"></div>

          <!-- Floating Speech Bubble -->
          <div class="mascot-speech-bubble" id="mascot-speech">
            🤖 "Inspect neon text & reflections for AI clues!"
          </div>

          <!-- Floating 3D Stamp Badges -->
          <div class="floating-badge badge-real">
            <span>🟢 REAL</span>
          </div>
          <div class="floating-badge badge-fake">
            <span>🔴 FAKE</span>
          </div>

          <!-- Mascot Character Image & Shadow -->
          <div class="mascot-character-wrapper">
            <img src="/assets/mascot.png" alt="TruthRush Detective Mascot" class="mascot-img" />
            <div class="mascot-shadow"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Rotate Mascot Speech Tips
  const tips = [
    '🤖 "Inspect neon signs & characters for AI glitches!"',
    '⚡ "Speed matters! Answer faster for streak multipliers!"',
    '🔍 "Look closely at shadow angles & lighting reflections!"',
    '🧠 "Trust your intuition: Spot the Fake!"'
  ];
  let tipIdx = 0;
  mascotInterval = setInterval(() => {
    const bubbleEl = document.getElementById('mascot-speech');
    if (!bubbleEl) {
      clearInterval(mascotInterval);
      return;
    }
    tipIdx = (tipIdx + 1) % tips.length;
    bubbleEl.style.opacity = '0';
    bubbleEl.style.transform = 'translateX(-50%) translateY(-10px)';
    setTimeout(() => {
      if (bubbleEl) {
        bubbleEl.textContent = tips[tipIdx];
        bubbleEl.style.opacity = '1';
        bubbleEl.style.transform = 'translateX(-50%) translateY(0)';
      }
    }, 250);
  }, 3500);

  // Attach Hub Listeners
  document.querySelectorAll('.mode-card').forEach(card => {
    card.addEventListener('click', () => {
      soundFx.playClick();
      document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.mode = card.dataset.mode;
      state.selectedCategory = 'all';
    });
  });

  document.getElementById('btn-start-game').addEventListener('click', () => {
    soundFx.playClick();
    if (mascotInterval) {
      clearInterval(mascotInterval);
      mascotInterval = null;
    }
    startGame();
  });
}

// --- START GAME ROUND ---
function startGame() {
  state.view = 'PLAYING';
  state.score = 0;
  state.lives = 3;
  state.streak = 0;
  state.maxStreak = 0;
  state.history = [];
  state.fastAnswersCount = 0;
  state.currentIndex = 0;

  // Set timer duration based on mode
  state.timerDuration = state.mode === 'blitz' ? 3.5 : 7.0;

  // Fetch questions with non-repeating smart rotation
  const seenIds = state.userData.seenQuestionIds || [];
  let pool = getRandomQuestions(15, state.selectedCategory, seenIds);
  // Include custom user questions if any
  if (state.userData.customQuestions && state.userData.customQuestions.length > 0) {
    pool = [...state.userData.customQuestions, ...pool];
  }
  state.questions = pool;

  updateHeaderUI();
  renderQuestion();
}

// --- RENDER CURRENT QUESTION ---
function renderQuestion() {
  state.view = 'PLAYING';
  const q = state.questions[state.currentIndex];
  if (!q) {
    // If run out of questions, end game with victory!
    triggerGameOver(true);
    return;
  }

  updateHeaderUI();

  // Render question card
  viewContainer.innerHTML = `
    <div class="game-play-area">
      <!-- In-Game Header Bar -->
      <div class="game-header" style="margin-bottom: 0;">
        <div class="logo-badge" id="btn-logo-home">
          <span class="logo-icon">⚡</span>
          <span class="logo-text">Truth<span class="logo-highlight">Rush</span></span>
        </div>

        <div class="header-stats">
          <div class="stat-box">
            <span class="stat-label">Score</span>
            <span class="stat-value score-display" id="header-score">0</span>
          </div>

          <div class="stat-box">
            <span class="stat-label">Lives</span>
            <div class="hearts-container" id="header-hearts"></div>
          </div>

          <div class="streak-pill" id="header-streak" style="display: none;">
            <span>🔥</span>
            <span id="header-streak-count">0x</span>
          </div>
        </div>

        <div style="display: flex; gap: 8px;">
          <button class="btn-icon" id="btn-open-stats" title="Statistics">📊</button>
          <button class="btn-icon" id="btn-open-achievements" title="Achievements">🏆</button>
        </div>
      </div>

      <!-- Timer bar -->
      <div class="timer-bar-container">
        <div class="timer-bar-fill" id="timer-fill"></div>
      </div>

      <div class="timer-ring-wrapper">
        <span>⏱️</span>
        <span id="timer-text">${state.timerDuration.toFixed(1)}s</span>
      </div>

      <!-- Main Question Card -->
      <div class="content-card-wrapper">
        <div class="question-card" id="active-question-card">
          <!-- Verdict Stamp overlay -->
          <div class="verdict-stamp" id="verdict-stamp"></div>

          <!-- Category header -->
          <div class="card-category-header">
            <span class="category-tag">
              ${getCategoryIcon(q.category)} ${q.categoryName || q.category}
            </span>
            <span class="difficulty-badge difficulty-${q.difficulty || 'medium'}">
              ${q.difficulty || 'MEDIUM'}
            </span>
          </div>

          <!-- Body Content -->
          <div class="card-body">
            ${renderQuestionContent(q)}
          </div>

          <!-- Fact Breakdown Box (Hidden until verdict) -->
          <div class="fact-breakdown-box" id="fact-breakdown-box" style="display: none;">
            <div class="breakdown-header" id="breakdown-title"></div>
            <div class="breakdown-text" id="breakdown-text"></div>
          </div>
        </div>
      </div>

      <!-- Decision Action Controls -->
      <div class="decision-controls" id="decision-controls">
        <button class="btn-decision btn-real" id="btn-vote-real">
          <span>🟢 REAL</span>
          <span class="key-hint">[ Key A / ← ]</span>
        </button>
        <button class="btn-decision btn-fake" id="btn-vote-fake">
          <span>🔴 FAKE</span>
          <span class="key-hint">[ Key D / → ]</span>
        </button>
      </div>
    </div>
  `;

  // Header listeners in game view
  document.getElementById('btn-logo-home')?.addEventListener('click', () => {
    stopTimer();
    renderHubView();
  });
  document.getElementById('btn-open-stats')?.addEventListener('click', () => {
    openStatsModal();
  });
  document.getElementById('btn-open-achievements')?.addEventListener('click', () => {
    soundFx.playClick();
    openAchievementsModal();
  });

  // Decision event listeners
  document.getElementById('btn-vote-real').addEventListener('click', () => makeDecision(true));
  document.getElementById('btn-vote-fake').addEventListener('click', () => makeDecision(false));

  // Start timer
  startTimer();
}

function getCategoryIcon(cat) {
  const map = {
    news: '📰',
    ai_image: '🤖',
    social_media: '💬',
    science: '🧪',
    geography: '🌎',
    tech: '💻',
    photo: '📸'
  };
  return map[cat] || '❓';
}

function renderQuestionContent(q) {
  if (q.imageUrl) {
    return `
      <div class="card-image-container">
        <img src="${q.imageUrl}" alt="${q.title}" id="question-img" />
        <div class="image-inspect-badge">
          🔍 Inspect Clues
        </div>
      </div>
      <h2 class="headline-text" style="font-size: 1.3rem;">${q.title}</h2>
    `;
  }

  if (q.category === 'social_media') {
    return `
      <div class="tweet-box">
        <div class="tweet-header">
          <div class="tweet-avatar">${q.avatar || '👤'}</div>
          <div class="tweet-author-info">
            <span class="tweet-name">${q.author || 'Social User'} ✔️</span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">${q.date || 'Recent'}</span>
          </div>
        </div>
        <p class="tweet-text">${q.postText || q.title}</p>
        <div class="tweet-footer">
          <span>${q.metrics || '1.2M Views'}</span>
          <span>💬 12.4K  🔁 45K  ❤️ 230K</span>
        </div>
      </div>
    `;
  }

  if (q.category === 'news') {
    return `
      <div class="headline-view">
        <span class="breaking-news-tag">BREAKING NEWS</span>
        <h2 class="headline-text">"${q.title}"</h2>
      </div>
    `;
  }

  // Science / Geo / Tech claim box
  return `
    <div class="fact-claim-box">
      "${q.title}"
    </div>
  `;
}

// --- TIMER CONTROLLER ---
function startTimer() {
  stopTimer();
  state.timerRemaining = state.timerDuration;
  state.timerStartTime = Date.now();

  const timerFill = document.getElementById('timer-fill');
  const timerText = document.getElementById('timer-text');

  state.timerInterval = setInterval(() => {
    state.timerRemaining -= 0.1;

    if (state.timerRemaining <= 0) {
      state.timerRemaining = 0;
      stopTimer();
      // Time expired! Count as wrong answer.
      handleTimeExpired();
    }

    // Update Timer UI
    const pct = (state.timerRemaining / state.timerDuration) * 100;
    if (timerFill) {
      timerFill.style.width = `${pct}%`;
      if (state.timerRemaining < 2.0) {
        timerFill.className = 'timer-bar-fill danger';
        soundFx.playTick(true);
      } else if (state.timerRemaining < 4.0) {
        timerFill.className = 'timer-bar-fill warning';
      }
    }

    if (timerText) {
      timerText.textContent = `${Math.max(0, state.timerRemaining).toFixed(1)}s`;
    }
  }, 100);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function handleTimeExpired() {
  makeDecision(null, true); // null guess due to timeout
}

let autoAdvanceTimeout = null;

// --- MAKE DECISION LOGIC ---
function makeDecision(userGuess, isTimeout = false) {
  if (state.view !== 'PLAYING') return; // prevent double clicks
  stopTimer();
  state.view = 'VERDICT';

  const q = state.questions[state.currentIndex];
  const isCorrect = !isTimeout && (userGuess === q.isReal);

  // Track fast answers for achievement
  if (isCorrect && state.timerRemaining > 4.0) {
    state.fastAnswersCount += 1;
  }

  // Record history
  state.history.push({
    question: q,
    userGuess: isTimeout ? 'timeout' : userGuess,
    isCorrect,
    timeRemaining: state.timerRemaining
  });

  const card = document.getElementById('active-question-card');
  const stamp = document.getElementById('verdict-stamp');
  const breakdownBox = document.getElementById('fact-breakdown-box');
  const breakdownTitle = document.getElementById('breakdown-title');
  const breakdownText = document.getElementById('breakdown-text');
  const decisionControls = document.getElementById('decision-controls');

  // Hide decision buttons
  decisionControls.style.display = 'none';

  // Apply verdict stamp
  if (q.isReal) {
    stamp.textContent = 'VERIFIED REAL ✅';
    stamp.className = 'verdict-stamp real show';
    card.classList.add('result-real');
  } else {
    stamp.textContent = 'BUSTED FAKE ❌';
    stamp.className = 'verdict-stamp fake show';
    card.classList.add('result-fake');
  }

  // Process Score / Streak / Lives
  if (isCorrect) {
    state.streak += 1;
    if (state.streak > state.maxStreak) state.maxStreak = state.streak;

    // Calculate score: Base (100) + Time Bonus + Streak Multiplier
    const basePts = state.mode === 'blitz' ? 200 : 100;
    const timeBonus = Math.round(state.timerRemaining * 20);
    const multiplier = Math.min(5, 1 + Math.floor(state.streak / 3) * 0.5);
    const earned = Math.round((basePts + timeBonus) * multiplier);

    state.score += earned;
    soundFx.playCorrect();

    if (state.streak >= 3) {
      soundFx.playStreakCombo(multiplier);
      triggerMiniConfetti();
    }

    breakdownTitle.innerHTML = `<span style="color: var(--color-real);">✅ CORRECT! (+${earned} PTS)</span>`;
  } else {
    state.streak = 0;
    state.lives -= 1;
    soundFx.playWrong();
    soundFx.playLifeLost();

    // Shatter life animation
    const hearts = document.querySelectorAll('.heart-icon');
    if (hearts[state.lives]) {
      hearts[state.lives].classList.add('shatter');
    }

    if (isTimeout) {
      breakdownTitle.innerHTML = `<span style="color: var(--color-fake);">⏰ TIME EXPIRED! (-1 Life)</span>`;
    } else {
      breakdownTitle.innerHTML = `<span style="color: var(--color-fake);">❌ INCORRECT! (-1 Life)</span>`;
    }
  }

  updateHeaderUI();

  // Populate Fact Check Breakdown
  breakdownText.innerHTML = `
    <strong>${q.explanation}</strong><br/>
    <span style="font-size: 0.85rem; color: var(--text-muted);">${q.details || ''}</span>
  `;
  breakdownBox.style.display = 'flex';

  // Clear any existing timer
  if (autoAdvanceTimeout) {
    clearTimeout(autoAdvanceTimeout);
    autoAdvanceTimeout = null;
  }

  // Check if out of lives
  if (state.lives <= 0) {
    autoAdvanceTimeout = setTimeout(() => {
      triggerGameOver(false);
    }, 1800);
  } else {
    // Automatically advance to the next question after brief verdict display (1.3s)
    autoAdvanceTimeout = setTimeout(() => {
      advanceNextQuestion();
    }, 1300);
  }
}

function advanceNextQuestion() {
  if (autoAdvanceTimeout) {
    clearTimeout(autoAdvanceTimeout);
    autoAdvanceTimeout = null;
  }
  if (state.lives <= 0) {
    triggerGameOver(false);
    return;
  }
  state.currentIndex += 1;
  renderQuestion();
}

function triggerMiniConfetti() {
  try {
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.6 }
    });
  } catch (e) {
    // ignore
  }
}

// --- GAME OVER & SUMMARY ---
function triggerGameOver(isVictory = false) {
  stopTimer();
  state.view = 'GAME_OVER';

  // Save session state to localStorage & check achievements
  const savedState = recordGameSession({
    score: state.score,
    maxStreak: state.maxStreak,
    history: state.history,
    fastAnswers: state.fastAnswersCount
  });
  state.userData = savedState;

  const isNewHighScore = state.score > 0 && state.score >= savedState.highScore;

  if (isNewHighScore) {
    soundFx.playVictory();
    try {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
    } catch (e) { }
  } else {
    soundFx.playGameOver();
  }

  const totalAnswered = state.history.length;
  const totalCorrect = state.history.filter(h => h.isCorrect).length;
  const accuracyPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  let accuracyRank = 'Gullible Rookie 🐣';
  if (accuracyPct >= 90) accuracyRank = 'Fact-Checking Legend 🧙‍♂️';
  else if (accuracyPct >= 75) accuracyRank = 'Truth Master 🦅';
  else if (accuracyPct >= 50) accuracyRank = 'Cyber Detective 🔍';

  viewContainer.innerHTML = `
    <div class="glass-panel game-over-panel">
      ${isNewHighScore ? '<div class="hero-badge" style="background: rgba(0, 230, 118, 0.2); color: var(--color-real); border-color: var(--color-real);">🎉 NEW HIGH SCORE!</div>' : ''}
      
      <h1 class="game-over-title">
        ${isVictory ? '🏆 ROUND COMPLETE!' : '💔 GAME OVER'}
      </h1>

      <div class="score-hero-box">
        <span class="stat-label">FINAL SCORE</span>
        <span class="final-score-val">${state.score.toLocaleString()}</span>
        <div class="accuracy-badge">${accuracyRank} (${accuracyPct}% Accuracy)</div>
      </div>

      <!-- Stats Grid -->
      <div class="summary-stats-grid">
        <div class="summary-card">
          <span class="stat-label">Correct</span>
          <span class="stat-value" style="color: var(--color-real);">${totalCorrect}/${totalAnswered}</span>
        </div>
        <div class="summary-card">
          <span class="stat-label">Max Streak</span>
          <span class="stat-value" style="color: #ffab00;">${state.maxStreak}x 🔥</span>
        </div>
        <div class="summary-card">
          <span class="stat-label">Best High Score</span>
          <span class="stat-value" style="color: var(--accent-cyan);">${savedState.highScore.toLocaleString()}</span>
        </div>
      </div>

      <!-- Play Again Actions -->
      <div class="hub-actions">
        <button class="btn-secondary" id="btn-restart-game">
          <span>🔄 PLAY AGAIN</span>
        </button>
        <button class="btn-secondary" id="btn-home-menu">
          <span>🏠 MAIN MENU</span>
        </button>
      </div>

      <!-- Question Review Grid -->
      <div class="history-review-section">
        <h3 style="font-family: var(--font-heading); font-size: 1.2rem; margin-bottom: 8px;">
          📋 Fact Check Review (${state.history.length} Questions)
        </h3>
        
        ${state.history.map((item, idx) => `
          <div class="review-item ${item.isCorrect ? 'correct' : 'wrong'}">
            <div class="review-title-bar">
              <span>#${idx + 1} ${item.question.title || item.question.postText || 'Fact Claim'}</span>
              <span style="font-weight: 800;">
                ${item.question.isReal ? '🟢 REAL' : '🔴 FAKE'} 
                ${item.isCorrect ? '✅' : '❌'}
              </span>
            </div>
            <p class="review-exp">${item.question.explanation}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.getElementById('btn-restart-game').addEventListener('click', () => {
    soundFx.playClick();
    startGame();
  });

  document.getElementById('btn-home-menu').addEventListener('click', () => {
    soundFx.playClick();
    renderHubView();
  });
}

function shareResults(correct, total, accuracy) {
  const emojiGrid = state.history.map(h => h.isCorrect ? '🟩' : '🟥').join('');
  const text = `⚖️ VERDICT: REAL OR FAKE?\nI scored ${state.score} pts (${accuracy}% accuracy)!\nResult: ${emojiGrid}\nCan you beat me?`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Score results copied to clipboard! Share it with friends! 🚀');
    });
  } else {
    alert(text);
  }
}

// --- MODALS (Stats, Achievements, Custom Cards, How to Play) ---
function openModal(title, bodyHtml) {
  modalContent.innerHTML = `
    <div class="modal-header">
      <h2 class="modal-title">${title}</h2>
      <button class="btn-icon" id="btn-close-modal">✕</button>
    </div>
    <div class="modal-body" style="display: flex; flex-direction: column; gap: 16px;">
      ${bodyHtml}
    </div>
  `;
  modalOverlay.classList.add('open');

  document.getElementById('btn-close-modal').addEventListener('click', closeModal);
}

function closeModal() {
  modalOverlay.classList.remove('open');
}

function openStatsModal() {
  const d = state.userData;
  const totalAcc = d.totalAnswered > 0 ? Math.round((d.totalCorrect / d.totalAnswered) * 100) : 0;

  const html = `
    <div class="summary-stats-grid" style="max-width: 100%;">
      <div class="summary-card">
        <span class="stat-label">Games Played</span>
        <span class="stat-value">${d.gamesPlayed}</span>
      </div>
      <div class="summary-card">
        <span class="stat-label">Total Accuracy</span>
        <span class="stat-value" style="color: var(--color-real);">${totalAcc}%</span>
      </div>
      <div class="summary-card">
        <span class="stat-label">Max Streak</span>
        <span class="stat-value" style="color: #ffab00;">${d.maxStreak}x</span>
      </div>
    </div>

    <h3 style="font-family: var(--font-heading); margin-top: 10px;">Category Breakdown</h3>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      ${Object.keys(d.categoryStats).map(catKey => {
    const cat = d.categoryStats[catKey];
    const pct = cat.total > 0 ? Math.round((cat.correct / cat.total) * 100) : 0;
    return `
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem; padding: 6px 10px; background: rgba(255,255,255,0.03); border-radius: 6px;">
            <span>${getCategoryIcon(catKey)} ${catKey.toUpperCase()}</span>
            <span style="font-family: var(--font-mono); font-weight: 700;">${pct}% (${cat.correct}/${cat.total})</span>
          </div>
        `;
  }).join('')}
    </div>
  `;

  openModal('📊 Player Statistics', html);
}

function openAchievementsModal() {
  const achs = state.userData.achievements;

  const html = `
    <div class="achievements-grid">
      ${achs.map(a => `
        <div class="achievement-card ${a.unlocked ? 'unlocked' : ''}">
          <div class="ach-icon">${a.icon}</div>
          <div class="ach-info">
            <span class="ach-name">${a.title} ${a.unlocked ? '✅' : '🔒'}</span>
            <span class="ach-desc">${a.desc}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  openModal('🏆 Achievements & Trophies', html);
}

function openCustomCardModal() {
  const html = `
    <p style="color: var(--text-muted); font-size: 0.9rem;">
      Create your own "Real or Fake?" question card to test yourself or your friends!
    </p>
    
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <label style="font-size: 0.85rem; font-weight: 700;">Headline or Claim Text:</label>
      <input type="text" id="custom-title" placeholder="e.g. Scientists invent invisible cloak made of mirrors" 
        style="padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid var(--bg-card-border); color: #fff; border-radius: 8px;" />

      <label style="font-size: 0.85rem; font-weight: 700;">Verdict Truth:</label>
      <select id="custom-is-real" style="padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid var(--bg-card-border); color: #fff; border-radius: 8px;">
        <option value="true">REAL ✅</option>
        <option value="false">FAKE ❌</option>
      </select>

      <label style="font-size: 0.85rem; font-weight: 700;">Fact Check Explanation:</label>
      <textarea id="custom-explanation" rows="3" placeholder="Explain why it's real or fake with backstory details..."
        style="padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid var(--bg-card-border); color: #fff; border-radius: 8px;"></textarea>

      <button class="btn-primary" id="btn-save-custom" style="width: 100%; margin-top: 10px;">
        <span>SAVE CUSTOM CARD</span>
      </button>
    </div>
  `;

  openModal('➕ Create Custom Card', html);

  document.getElementById('btn-save-custom').addEventListener('click', () => {
    const title = document.getElementById('custom-title').value.trim();
    const isReal = document.getElementById('custom-is-real').value === 'true';
    const explanation = document.getElementById('custom-explanation').value.trim();

    if (!title || !explanation) {
      alert('Please fill out both the claim title and the explanation!');
      return;
    }

    addCustomQuestion({
      category: 'news',
      categoryName: 'Custom Question',
      categoryIcon: '✏️',
      title,
      isReal,
      explanation,
      difficulty: 'medium'
    });

    soundFx.playCorrect();
    closeModal();
    alert('Custom card saved! It will now appear in your game rounds! 🎉');
  });
}

function openHowToPlayModal() {
  const html = `
    <div style="display: flex; flex-direction: column; gap: 14px; font-size: 0.95rem; line-height: 1.6;">
      <p>🎯 <strong>Objective:</strong> Get the highest score possible before losing all 3 lives!</p>
      
      <p>⏱️ <strong>Time Limit:</strong> You have only a few seconds per item to make your choice. Faster answers grant massive <strong>Time Bonus Points</strong>!</p>

      <p>🔥 <strong>Streak Multiplier:</strong> Answering multiple questions correctly in a row triggers a Score Multiplier (up to 5x!).</p>

      <p>⌨️ <strong>Keyboard Controls:</strong></p>
      <ul style="padding-left: 20px;">
        <li><strong style="color: var(--color-real);">[ Left Arrow ] or [ Key A ]:</strong> Vote REAL</li>
        <li><strong style="color: var(--color-fake);">[ Right Arrow ] or [ Key D ]:</strong> Vote FAKE</li>
        <li><strong>[ Space / Enter ]:</strong> Advance Next Question</li>
      </ul>
    </div>
  `;

  openModal('❓ How to Play', html);
}

// Start app on DOM loaded
window.addEventListener('DOMContentLoaded', init);
