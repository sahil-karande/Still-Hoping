// Romantic Audio Engine
// Background music: Zehnaseeb MP3 (starts from the beautiful chorus ~47s)
// Sound effects: Web Audio API procedural (chime, blow, pop)

class RomanticAudioEngine {
  constructor() {
    // Web Audio context for sound effects
    this.ctx = null;
    this.isMuted = false;
    this.volume = 0.35;

    // HTML5 Audio for Zehnaseeb song
    this.songAudio = null;
    this.isPlaying = false;

    // Start position in seconds — starts from the beautiful section at 13s
    this.songStartTime = 13;
  }

  // Initialize Web Audio context (for sound effects)
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Initialize the song (HTML5 Audio)
  _initSong() {
    if (!this.songAudio) {
      this.songAudio = new Audio('Zehnaseeb _ Shekhar Ravjiani _ Karan Kanchan _ KASYAP - (320 Kbps).mp3');
      this.songAudio.loop = false;
      this.songAudio.volume = 0.55;
      this.songAudio.currentTime = this.songStartTime;

      // When song ends, loop back to the chorus start instead of the intro
      this.songAudio.addEventListener('ended', () => {
        if (this.isPlaying) {
          this.songAudio.currentTime = this.songStartTime;
          this.songAudio.play().catch(() => {});
        }
      });

      // Safety: if timeupdate approaches the very end, jump back to chorus
      this.songAudio.addEventListener('timeupdate', () => {
        if (
          this.songAudio.duration &&
          this.songAudio.currentTime >= this.songAudio.duration - 1.5
        ) {
          this.songAudio.currentTime = this.songStartTime;
        }
      });
    }
  }

  startRomanticAmbience() {
    this.init();
    if (this.isPlaying) return;

    this._initSong();
    this.songAudio.currentTime = this.songStartTime;

    const playPromise = this.songAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked — user interaction required (handled by curtain click)
      });
    }

    this.isPlaying = true;
  }

  stopRomanticAmbience() {
    this.isPlaying = false;
    if (this.songAudio) {
      this.songAudio.pause();
    }
  }

  toggleMusic() {
    if (this.isPlaying) {
      this.stopRomanticAmbience();
      return false;
    } else {
      this.startRomanticAmbience();
      return true;
    }
  }

  // -----------------------------------------------------------------------
  // SOUND EFFECTS (Web Audio API — unchanged)
  // -----------------------------------------------------------------------

  playPianoNote(freq, time, duration = 2.5, gainVal = 0.15) {
    if (!this.ctx || this.isMuted) return;

    const osc = this.ctx.createOscillator();
    const oscHarmonic = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Warm soft electric piano timbre
    osc.type = 'triangle';
    oscHarmonic.type = 'sine';

    osc.frequency.setValueAtTime(freq, time);
    oscHarmonic.frequency.setValueAtTime(freq * 2, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, time);
    filter.frequency.exponentialRampToValueAtTime(400, time + duration);

    const actualGain = gainVal * this.volume;
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(actualGain, time + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(filter);
    oscHarmonic.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(time);
    oscHarmonic.start(time);
    osc.stop(time + duration);
    oscHarmonic.stop(time + duration);
  }

  // Play magical chime effect (e.g. for unlocking letter or wish)
  playChime() {
    this.init();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const notes = [587.33, 659.25, 880.00, 1046.50, 1318.51]; // D5, E5, A5, C6, E6
    notes.forEach((freq, idx) => {
      this.playPianoNote(freq, now + idx * 0.08, 1.6, 0.18);
    });
  }

  // Candle blowing sound effect
  playBlowSound() {
    this.init();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.8;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(350, now);
    filter.Q.setValueAtTime(2.5, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.35 * this.volume, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(now);
    noise.stop(now + 0.8);
  }

  // Confetti pop sound
  playPop() {
    this.init();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.15);

    gain.gain.setValueAtTime(0.25 * this.volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.15);
  }
}

// Global audio instance
window.romanticAudio = new RomanticAudioEngine();
