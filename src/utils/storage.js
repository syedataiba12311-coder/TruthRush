// Local Storage & Stats Manager for "REAL or FAKE?" Game

const STORAGE_KEY = 'real_or_fake_game_v1';

const DEFAULT_STATE = {
    highScore: 0,
    gamesPlayed: 0,
    totalCorrect: 0,
    totalAnswered: 0,
    maxStreak: 0,
    soundMuted: false,
    achievements: [
        { id: 'first_play', title: 'First Verdict', desc: 'Played your first game', icon: '🎮', unlocked: false },
        { id: 'streak_5', title: 'Eagle Eye', desc: 'Achieved a 5-question streak', icon: '🦅', unlocked: false },
        { id: 'streak_10', title: 'Truth Master', desc: 'Achieved a 10-question streak', icon: '🔥', unlocked: false },
        { id: 'ai_hunter', title: 'AI Detective', desc: 'Correctly identified 5 AI vs Real cards', icon: '🤖', unlocked: false },
        { id: 'speed_demon', title: 'Speed Demon', desc: 'Answered with > 4 seconds left on timer', icon: '⚡', unlocked: false },
        { id: 'score_1000', title: 'Fact Checker Pro', desc: 'Scored over 1,000 points in a single run', icon: '🏆', unlocked: false }
    ],
    categoryStats: {
        news: { correct: 0, total: 0 },
        ai_image: { correct: 0, total: 0 },
        social_media: { correct: 0, total: 0 },
        science: { correct: 0, total: 0 },
        geography: { correct: 0, total: 0 },
        tech: { correct: 0, total: 0 },
        photo: { correct: 0, total: 0 }
    },
    customQuestions: [],
    seenQuestionIds: []
};

export function loadGameState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return DEFAULT_STATE;
        const parsed = JSON.parse(raw);
        return { ...DEFAULT_STATE, ...parsed };
    } catch (e) {
        console.error('Failed to load game state from localStorage', e);
        return DEFAULT_STATE;
    }
}

export function saveGameState(state) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        console.error('Failed to save game state', e);
    }
}

export function recordGameSession(sessionData) {
    const state = loadGameState();
    state.gamesPlayed += 1;

    if (sessionData.score > state.highScore) {
        state.highScore = sessionData.score;
    }

    if (sessionData.maxStreak > state.maxStreak) {
        state.maxStreak = sessionData.maxStreak;
    }

    // Update questions stats & track seen question IDs
    let aiCorrectCount = 0;
    if (!state.seenQuestionIds) state.seenQuestionIds = [];

    sessionData.history.forEach(item => {
        state.totalAnswered += 1;
        if (item.question && item.question.id) {
            if (!state.seenQuestionIds.includes(item.question.id)) {
                state.seenQuestionIds.push(item.question.id);
            }
        }

        if (item.isCorrect) {
            state.totalCorrect += 1;
            if (item.question && item.question.category === 'ai_image') {
                aiCorrectCount++;
            }
        }

        const cat = item.question ? item.question.category : null;
        if (cat && state.categoryStats[cat]) {
            state.categoryStats[cat].total += 1;
            if (item.isCorrect) state.categoryStats[cat].correct += 1;
        }
    });

    // If seenQuestionIds gets too large (e.g. over 80% of pool), trim older ones to loop smoothly
    if (state.seenQuestionIds.length > 50) {
        state.seenQuestionIds = state.seenQuestionIds.slice(-25);
    }

    // Check achievement unlocks
    unlockCheck(state, sessionData, aiCorrectCount);

    saveGameState(state);
    return state;
}

function unlockCheck(state, sessionData, aiCorrectCount) {
    // First play
    unlockAchievement(state, 'first_play');

    // Streaks
    if (state.maxStreak >= 5) unlockAchievement(state, 'streak_5');
    if (state.maxStreak >= 10) unlockAchievement(state, 'streak_10');

    // AI hunter
    if (aiCorrectCount >= 5 || (state.categoryStats.ai_image && state.categoryStats.ai_image.correct >= 5)) {
        unlockAchievement(state, 'ai_hunter');
    }

    // Speed demon
    if (sessionData.fastAnswers && sessionData.fastAnswers > 0) {
        unlockAchievement(state, 'speed_demon');
    }

    // High score
    if (sessionData.score >= 1000) {
        unlockAchievement(state, 'score_1000');
    }
}

function unlockAchievement(state, achievementId) {
    const ach = state.achievements.find(a => a.id === achievementId);
    if (ach && !ach.unlocked) {
        ach.unlocked = true;
        ach.unlockedAt = new Date().toISOString();
    }
}

export function addCustomQuestion(questionData) {
    const state = loadGameState();
    state.customQuestions.push({
        id: `custom-${Date.now()}`,
        ...questionData
    });
    saveGameState(state);
    return state;
}
