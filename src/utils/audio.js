// Audio disabled per user request

class SoundController {
    constructor() {
        this.muted = true;
    }

    init() { }
    ensureContext() { }
    toggleMute() { return true; }
    playTone() { }
    playClick() { }
    playTick() { }
    playCorrect() { }
    playWrong() { }
    playStreakCombo() { }
    playLifeLost() { }
    playVictory() { }
    playGameOver() { }
}

export const soundFx = new SoundController();
