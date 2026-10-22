/* ==========================================================================
   ROMANTIC BIRTHDAY WEBSITE ENGINE - ANUSHKA & SAHIL
   Interactive canvas, sound sync, love counter, cake candle blow,
   polaroid gallery, open-when letters, love reasons deck, quiz & personalizer
   ========================================================================== */

// --- Default Configuration (Customizable via drawer) ---
const DEFAULT_CONFIG = {
  herName: 'Anushka',
  hisName: 'Sahil',
  relationshipDate: '2023-04-15T00:00:00', // When their journey began
  birthdayDate: '2026-10-23', // Anushka's birthday
  tagline: 'To the girl who turned my ordinary world into pure poetry. Every heartbeat is a reminder of how lucky I am to love you.',
  secretLetter: `My dearest Anushka,

From the moment you stepped into my life, everything found its true color. You are my calm in every storm, the sweetest warmth on cold nights, and the dream I never want to wake up from.

Looking at you, I see my best friend, my greatest adventure, and my eternal home. Your laugh is my favorite melody, your kindness inspires me every day, and your gentle eyes hold all the peace I could ever search for in this universe.

On your birthday today, I make this solemn promise to you: I will love you through every season, celebrate all your victories, hold your hand through every challenge, and never stop trying to make you smile.

Happy Birthday, my gorgeous Queen. You deserve all the stars in the cosmos and every drop of happiness in this world.

Forever & always yours,
Sahil ❤️`
};

// 20 Heartfelt reasons why Sahil loves Anushka (one for each year of her beautiful life)
const LOVE_REASONS = [
  "The breathtaking way your eyes light up whenever you smile.",
  "How you make even the simplest car ride feel like an unforgettable adventure.",
  "Your kindness toward everyone around you—your heart is pure gold.",
  "The adorable face you make when you are concentrated or teasing me.",
  "How safe and completely at peace I feel whenever you are in my arms.",
  "Your beautiful laugh that instantly melts away any stress I ever have.",
  "How you believe in my dreams, even when I doubt myself.",
  "The sweet little messages you send that make my entire day brighter.",
  "The way your hand fits perfectly inside mine, like it was made just for me.",
  "How you always know the exact right thing to say when I need comfort.",
  "Your passion, intelligence, and the fiery spirit that makes you so unique.",
  "The way you smell like heaven and feel like home.",
  "How you dance when no one is watching, full of pure joy.",
  "Your gentle compassion for animals and everyone who needs care.",
  "The cute little voice you use when you want cuddles or snacks.",
  "How we can sit in total silence together and it still feels completely magical.",
  "The way you look at me that makes me feel like the most fortunate man alive.",
  "Your sense of humor that matches mine like puzzle pieces.",
  "The warm forehead kisses we share that stop time entirely.",
  "Because loving you is the easiest, most natural thing I have ever done."
];

// Open When... Letters Content
const OPEN_WHEN_LETTERS = {
  birthday: {
    title: "Open on Your Birthday Midnight 🎂",
    icon: "🕯️",
    preview: "To the birthday queen on her most special moment of the year...",
    content: `Happy Birthday, my beautiful Anushka!

As the clock strikes midnight and a whole new chapter begins for you, I want you to know how deeply cherished you are. 

Another year of you being in this world means another year the world has been blessed with your light, your beauty, and your unmatched warmth. I hope this year brings you everything your precious heart desires: endless laughter, new milestones, peaceful mornings, and big dreams coming true.

Today is all about you, my love. Make a wish, knowing I'll spend every day trying to make it come true.

With all my heart,
Sahil ❤️`
  },
  miss_me: {
    title: "Open When You Miss Me The Most 🥺",
    icon: "💌",
    preview: "Whenever miles or moments keep us apart, read this...",
    content: `Hey my love,

Close your eyes for five seconds right now. Take a deep breath and feel my arms wrapping tightly around you. 

Distance or busy schedules can keep us physically apart, but there is not a single hour in the day where you aren't wandering softly through my mind. You are etched into my heart, Anushka.

Whenever you miss me, look up at the moon and stars—we are looking at the exact same sky, and my love is traveling straight to you. I'm already counting down the minutes until I can hold you again.

I love you more than words could ever convey.`
  },
  beauty: {
    title: "Open When You Need a Reminder of Your Beauty ✨",
    icon: "🪞",
    preview: "For the moments you forget just how extraordinary you are...",
    content: `My gorgeous girl,

If only you could see yourself through my eyes for just one minute, you would never doubt yourself again.

You are breathtaking in every sense of the word. Not just the way your hair falls, or the elegance of your smile, or the sparkle in your eyes—but the breathtaking glow of your soul, your mind, and your fierce grace.

You are art in motion, Anushka. Never let the world or an exhausting day make you feel anything less than majestic.`
  },
  tough_day: {
    title: "Open When You've Had an Exhausting Day ☕",
    icon: "🌧️",
    preview: "Take a breath, relax your shoulders, and let me hold the weight...",
    content: `Deep breath, sweetheart. Unclench your jaw and let your shoulders drop.

Today was heavy, but you made it through. You don't have to be strong right now. You don't have to carry the whole world on your shoulders.

You are allowed to rest. You are allowed to be tired. And no matter what went wrong today, you are still doing an amazing job. I am so proud of you, and I am right here waiting to wrap you in the warmest hug and remind you that tomorrow is a fresh start.`
  },
  laugh: {
    title: "Open When You Want to Smile or Giggle 😄",
    icon: "🧸",
    preview: "A little dose of goofy affection and silly memories...",
    content: `Fun fact: Did you know that looking at pictures of Anushka is medically proven to cure bad moods and cause involuntary goofy smiles in Sahil?

It's true! I'm completely helpless against your charm. Remember our goofy jokes and the times we couldn't stop laughing until our stomachs hurt? 

I promise to spend the rest of our days doing whatever silly things it takes to hear that cute laugh of yours. Now give me a smile—yes, right now! Perfect.`
  },
  future: {
    title: "Open When You Think About Our Future 🏡",
    icon: "🌟",
    preview: "Dreaming about all the beautiful tomorrows ahead of us...",
    content: `Whenever I close my eyes and imagine what my future looks like, it is always painted with your colors.

I see cozy Sunday mornings making breakfast together, lazy couch cuddles, spontaneous midnight trips, building our dream sanctuary, and celebrating countless more birthdays hand-in-hand.

Whatever the future holds, knowing I get to face it with you makes me fear nothing. You are my forever, Anushka. Here's to all our tomorrows!`
  }
};

// Quiz questions
const QUIZ_DATA = [
  {
    question: "Who fell in love first between Sahil and Anushka?",
    options: [
      { text: "Sahil (he was completely smitten from day one! 😍)", correct: true },
      { text: "Anushka (she secretly couldn't resist)", correct: false },
      { text: "It was instantaneous cosmic magic! ✨", correct: true }
    ],
    hint: "Sahil couldn't take his eyes off Anushka from the very first moment!"
  },
  {
    question: "What is Sahil's favorite thing in the universe about Anushka?",
    options: [
      { text: "Her irresistible smile and shining eyes", correct: false },
      { text: "Her kind heart and warm cuddles", correct: false },
      { text: "Literally EVERYTHING about her, without exception! ❤️", correct: true }
    ],
    hint: "Is there anything about Anushka that isn't completely lovable?"
  },
  {
    question: "When Anushka is in a grumpy or tired mood, what is the best cure?",
    options: [
      { text: "Her favorite snacks, sweet treats, and love 🍫", correct: true },
      { text: "A tight, long hug from Sahil with zero questions asked 🤗", correct: true },
      { text: "Both of the above combined! 🥰", correct: true }
    ],
    hint: "Love, food, and warm hugs never fail!"
  },
  {
    question: "How long is Sahil going to love Anushka?",
    options: [
      { text: "Until the stars stop shining in the sky 🌌", correct: true },
      { text: "Forever and one day more ♾️", correct: true },
      { text: "Through this lifetime and all the next ones! 💍", correct: true }
    ],
    hint: "Every single answer is true because love for Anushka is infinite!"
  }
];

// Memory Polaroid Stories
const MEMORY_STORIES = {
  starlit: {
    title: "Under the Starlit Sky",
    date: "A Magical Night",
    caption: "Just you, me, and the infinite cosmos",
    desc: "That quiet evening when we stood under the glowing lanterns and starlight. The whole world seemed to fade into a hush, and all I could hear was your voice and the gentle rhythm of our steps together.",
    img: "assets/images/starlit_romance.jpg"
  },
  beach: {
    title: "Golden Hour & Gentle Waves",
    date: "Sunset Walk",
    caption: "Footprints in the sand, forever in my heart",
    desc: "Walking barefoot by the whispering ocean as the twilight turned the sky into soft shades of peach and lavender. Hand in hand, laughing at the crashing waves—I realized there is no place on Earth I'd rather be.",
    img: "assets/images/beach_walk.jpg"
  },
  cozy: {
    title: "Cozy Little Evenings",
    date: "Our Quiet Sanctuary",
    caption: "Warm blankets, sweet giggles, and hot chocolate",
    desc: "Wrapped under a knitted blanket with warm mugs, fairy lights glowing by the window. No grand plans needed—just pure comfort, silly jokes, and having you close to my chest.",
    img: "assets/images/cozy_moments.jpg"
  },
  cake: {
    title: "Sweet Celebrations",
    date: "Anushka's Birthday",
    caption: "To the sweetest person in my life",
    desc: "A celebration of you! Every candle flickering with all our hopes, dreams, and sweet memories. May this year shower you with endless bliss and gentle love.",
    img: "assets/images/birthday_cake.jpg"
  }
};

// --- App State ---
let appConfig = { ...DEFAULT_CONFIG };
let currentQuizIndex = 0;
let quizScore = 0;
let candlesBlown = false;
let currentReasonIndex = 0;

// Load config from localStorage if available
function loadSavedConfig() {
  const saved = localStorage.getItem('anushka_birthday_config');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      appConfig = { ...DEFAULT_CONFIG, ...parsed };
    } catch (e) {
      console.error("Config parse error", e);
    }
  }

  // Check saved custom photos
  const savedPhotos = localStorage.getItem('anushka_custom_photos');
  if (savedPhotos) {
    try {
      const photos = JSON.parse(savedPhotos);
      for (const key in photos) {
        if (MEMORY_STORIES[key] && photos[key]) {
          MEMORY_STORIES[key].img = photos[key];
          const imgEl = document.getElementById(`img-polaroid-${key}`);
          if (imgEl) imgEl.src = photos[key];
        }
      }
    } catch (e) {
      console.error("Photo parse error", e);
    }
  }
}

// Save config to localStorage
function saveConfigToStorage() {
  localStorage.setItem('anushka_birthday_config', JSON.stringify(appConfig));
  applyConfigToDOM();
}

// Apply config values to HTML elements
function applyConfigToDOM() {
  const herNameEls = document.querySelectorAll('.var-her-name');
  herNameEls.forEach(el => el.textContent = appConfig.herName);

  const hisNameEls = document.querySelectorAll('.var-his-name');
  hisNameEls.forEach(el => el.textContent = appConfig.hisName);

  const taglineEl = document.getElementById('hero-tagline-text');
  if (taglineEl) taglineEl.textContent = appConfig.tagline;

  const secretLetterEl = document.getElementById('secret-letter-body');
  if (secretLetterEl) {
    secretLetterEl.innerHTML = appConfig.secretLetter.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
    secretLetterEl.innerHTML = `<p>${secretLetterEl.innerHTML}</p>`;
  }
}

// ==========================================================================
// ROSE PETALS & STARS CANVAS ANIMATION
// ==========================================================================
class CanvasParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.stars = [];
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initStars(80);
    this.initPetals(25);
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  initStars(count) {
    this.stars = [];
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005
      });
    }
  }

  initPetals(count) {
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createPetal(true));
    }
  }

  createPetal(randomY = false) {
    return {
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : -20,
      size: Math.random() * 12 + 8,
      speedY: Math.random() * 1.2 + 0.6,
      speedX: Math.random() * 0.8 - 0.4,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.5 + 0.4,
      color: Math.random() > 0.4 ? '#ff758f' : '#ff4d6d'
    };
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Render twinkling stars
    this.stars.forEach(star => {
      star.alpha += star.twinkleSpeed;
      if (star.alpha > 0.9 || star.alpha < 0.2) {
        star.twinkleSpeed = -star.twinkleSpeed;
      }
      this.ctx.fillStyle = `rgba(255, 245, 230, ${Math.max(0, star.alpha)})`;
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fill();
    });

    // Render floating rose petals
    this.particles.forEach(p => {
      p.y += p.speedY;
      p.x += Math.sin(p.y * 0.015) * 0.8 + p.speedX;
      p.rotation += p.rotSpeed;

      if (p.y > this.height + 20) {
        Object.assign(p, this.createPetal(false));
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.opacity;

      // Draw cute petal shape
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size / 2, p.size / 2, 0, p.size);
      this.ctx.bezierCurveTo(p.size / 2, p.size / 2, p.size / 2, -p.size / 2, 0, 0);
      this.ctx.fill();
      this.ctx.restore();
    });

    requestAnimationFrame(() => this.animate());
  }

  // Trigger heart burst at (x, y)
  burstHearts(x, y, count = 20) {
    for (let i = 0; i < count; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-burst-heart';
      heart.innerHTML = Math.random() > 0.5 ? '❤️' : '✨';
      heart.style.position = 'fixed';
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      heart.style.fontSize = `${Math.random() * 20 + 16}px`;
      heart.style.pointerEvents = 'none';
      heart.style.zIndex = '99999';
      heart.style.transition = 'all 1.2s cubic-bezier(0.25, 1, 0.5, 1)';
      document.body.appendChild(heart);

      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 140 + 40;
      const destX = Math.cos(angle) * distance;
      const destY = Math.sin(angle) * distance - 40;

      setTimeout(() => {
        heart.style.transform = `translate(${destX}px, ${destY}px) scale(0)`;
        heart.style.opacity = '0';
      }, 20);

      setTimeout(() => heart.remove(), 1300);
    }
  }
}

// Confetti Cannon for Celebrations
function launchConfetti(originX = window.innerWidth / 2, originY = window.innerHeight / 2) {
  const colors = ['#ff4d6d', '#f7d070', '#ffeaa7', '#ff758f', '#ffffff', '#c9184a'];
  const count = 50;

  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = `${Math.random() * 10 + 6}px`;
    confetti.style.height = `${Math.random() * 8 + 6}px`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = `${originX}px`;
    confetti.style.top = `${originY}px`;
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '99999';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    confetti.style.transition = 'all 1.6s cubic-bezier(0.1, 0.8, 0.3, 1)';
    document.body.appendChild(confetti);

    const angle = (Math.random() - 0.5) * Math.PI * 1.8 - Math.PI / 2;
    const distance = Math.random() * 320 + 100;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance;

    setTimeout(() => {
      confetti.style.transform = `translate(${destX}px, ${destY + 120}px) rotate(${Math.random() * 720}deg) scale(0.6)`;
      confetti.style.opacity = '0';
    }, 20);

    setTimeout(() => confetti.remove(), 1700);
  }
}

// ==========================================================================
// BIRTHDAY COUNTDOWN ENGINE — counts down to Oct 23 2026 midnight
// ==========================================================================
function updateLoveCounter() {
  const birthday = new Date('2026-10-23T00:00:00').getTime();
  const now = new Date().getTime();
  const diff = birthday - now;

  const counterLabel = document.querySelector('.counter-label');
  const hoursEl = document.getElementById('count-hours');
  const minsEl  = document.getElementById('count-mins');
  const secsEl  = document.getElementById('count-secs');

  if (diff <= 0) {
    // Birthday has arrived! 🎉
    if (counterLabel) counterLabel.innerHTML = '<i class="fas fa-birthday-cake"></i> Happy Birthday, Anushka! 🎉';
    if (hoursEl) hoursEl.textContent = '00';
    if (minsEl)  minsEl.textContent  = '00';
    if (secsEl)  secsEl.textContent  = '00';
    return;
  }

  const hours   = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
  if (minsEl)  minsEl.textContent  = String(minutes).padStart(2, '0');
  if (secsEl)  secsEl.textContent  = String(seconds).padStart(2, '0');
}

// ==========================================================================
// CAKE CANDLE BLOWING INTERACTION
// ==========================================================================
function setupCakeInteraction() {
  const blowBtn = document.getElementById('btn-blow-candles');
  const relightBtn = document.getElementById('btn-relight-candles');
  const flames = document.querySelectorAll('.flame');
  const smokes = document.querySelectorAll('.smoke');
  const wishCard = document.getElementById('wish-unlocked-card');

  function blowCandles() {
    if (candlesBlown) return;
    candlesBlown = true;

    if (window.romanticAudio) {
      window.romanticAudio.playBlowSound();
      setTimeout(() => {
        window.romanticAudio.playPop();
        window.romanticAudio.playChime();
      }, 500);
    }

    flames.forEach(f => f.classList.add('blown-out'));
    smokes.forEach(s => s.classList.add('active'));

    const rect = document.querySelector('.cake-stage').getBoundingClientRect();
    launchConfetti(rect.left + rect.width / 2, rect.top + rect.height / 3);

    setTimeout(() => {
      wishCard.classList.add('show');
      blowBtn.style.display = 'none';
      relightBtn.style.display = 'inline-flex';
    }, 600);
  }

  function relightCandles() {
    candlesBlown = false;
    flames.forEach(f => f.classList.remove('blown-out'));
    smokes.forEach(s => s.classList.remove('active'));
    wishCard.classList.remove('show');
    blowBtn.style.display = 'inline-flex';
    relightBtn.style.display = 'none';
    if (window.romanticAudio) window.romanticAudio.playChime();
  }

  if (blowBtn) blowBtn.addEventListener('click', blowCandles);
  if (relightBtn) relightBtn.addEventListener('click', relightCandles);

  // Clicking on candle flames directly also blows them
  flames.forEach(flame => {
    flame.addEventListener('click', blowCandles);
  });
}

// ==========================================================================
// POLAROID MEMORY LANE MODAL & 3D TILT
// ==========================================================================
function setupPolaroids() {
  const polaroids = document.querySelectorAll('.polaroid-card');
  const modal = document.getElementById('common-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  polaroids.forEach(card => {
    // 3D Parallax tilt on hover
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotX = (y / rect.height) * -16;
      const rotY = (x / rect.width) * 16;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });

    card.addEventListener('click', () => {
      const memKey = card.getAttribute('data-memory');
      const data = MEMORY_STORIES[memKey];
      if (!data) return;

      if (window.romanticAudio) window.romanticAudio.playChime();

      modalTitle.textContent = data.title;
      modalBody.innerHTML = `
        <div style="text-align:center; margin-bottom:20px;">
          <img src="${data.img}" alt="${data.title}" style="max-width:100%; max-height:360px; object-fit:cover; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.25);">
          <div style="font-family:var(--font-script); font-size:1.6rem; color:#8c1d40; margin-top:12px;">"${data.caption}"</div>
          <div style="font-size:0.85rem; color:#888; text-transform:uppercase; letter-spacing:1px; margin-top:4px;">${data.date}</div>
        </div>
        <p style="font-size:1.1rem; line-height:1.8; color:#3b2234; text-align:justify;">${data.desc}</p>
        <div style="margin-top:24px; padding:16px; background:#fff3f6; border-left:4px solid #ff4d6d; border-radius:4px; font-style:italic;">
          "Every second with Anushka is my favorite moment in time." — Sahil
        </div>
      `;
      modal.classList.add('active');
    });
  });
}

// Custom Photo Replacement Feature
function setupPhotoUploader() {
  const uploadBtn = document.getElementById('btn-upload-photos');
  const fileInput = document.getElementById('photo-file-input');
  const targetSelect = document.getElementById('photo-target-select');

  if (!uploadBtn || !fileInput) return;

  uploadBtn.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
      const base64Img = evt.target.result;
      const targetKey = targetSelect ? targetSelect.value : 'starlit';

      if (MEMORY_STORIES[targetKey]) {
        MEMORY_STORIES[targetKey].img = base64Img;
        const imgEl = document.getElementById(`img-polaroid-${targetKey}`);
        if (imgEl) imgEl.src = base64Img;

        // Persist to localStorage
        let savedPhotos = {};
        try {
          savedPhotos = JSON.parse(localStorage.getItem('anushka_custom_photos') || '{}');
        } catch (e) {}
        savedPhotos[targetKey] = base64Img;
        localStorage.setItem('anushka_custom_photos', JSON.stringify(savedPhotos));

        if (window.romanticAudio) window.romanticAudio.playPop();
        alert(`✨ Polaroid photo updated successfully for ${MEMORY_STORIES[targetKey].title}!`);
      }
    };
    reader.readAsDataURL(file);
  });
}

// ==========================================================================
// "OPEN WHEN..." LETTERS INTERACTION
// ==========================================================================
function setupLetters() {
  const letterCards = document.querySelectorAll('.letter-card');
  const modal = document.getElementById('common-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  letterCards.forEach(card => {
    card.addEventListener('click', () => {
      const letterKey = card.getAttribute('data-letter');
      const data = OPEN_WHEN_LETTERS[letterKey];
      if (!data) return;

      if (window.romanticAudio) window.romanticAudio.playChime();

      modalTitle.textContent = data.title;
      modalBody.innerHTML = `
        <div style="font-size:2.8rem; text-align:center; margin-bottom:12px;">${data.icon}</div>
        <div style="white-space:pre-line; font-size:1.12rem; line-height:1.8; color:#3b2234;">${data.content}</div>
      `;
      modal.classList.add('active');
    });
  });
}

// ==========================================================================
// REASONS WHY I LOVE YOU DECK
// ==========================================================================
function setupLoveDeck() {
  const cardBox = document.getElementById('love-deck-card');
  const reasonTextEl = document.getElementById('deck-reason-text');
  const deckNumEl = document.getElementById('deck-number');
  const nextBtn = document.getElementById('btn-next-reason');
  const viewAllBtn = document.getElementById('btn-view-all-reasons');

  function showReason(idx) {
    if (!reasonTextEl) return;
    cardBox.style.opacity = '0';
    cardBox.style.transform = 'scale(0.95)';

    setTimeout(() => {
      currentReasonIndex = idx % LOVE_REASONS.length;
      deckNumEl.textContent = `Reason #${currentReasonIndex + 1} of ${LOVE_REASONS.length}`;
      reasonTextEl.textContent = `"${LOVE_REASONS[currentReasonIndex]}"`;
      cardBox.style.opacity = '1';
      cardBox.style.transform = 'scale(1)';
    }, 250);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showReason(currentReasonIndex + 1);
      if (window.romanticAudio) window.romanticAudio.playPop();
    });
  }

  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
      const modal = document.getElementById('common-modal');
      const modalTitle = document.getElementById('modal-title');
      const modalBody = document.getElementById('modal-body');

      modalTitle.textContent = `Every Reason Why I Love You, Anushka ❤️`;
      let listHtml = `<ol style="padding-left:20px; line-height:1.9; font-size:1.05rem; color:#3b2234;">`;
      LOVE_REASONS.forEach(reason => {
        listHtml += `<li style="margin-bottom:10px;">${reason}</li>`;
      });
      listHtml += `</ol>`;

      modalBody.innerHTML = listHtml;
      modal.classList.add('active');
    });
  }

  showReason(0);
}

// ==========================================================================
// ROMANTIC LOVE QUIZ
// ==========================================================================
function setupLoveQuiz() {
  const qContainer = document.getElementById('quiz-question-box');
  const certContainer = document.getElementById('quiz-cert-box');
  const qText = document.getElementById('quiz-q-text');
  const optionsBox = document.getElementById('quiz-options-box');
  const feedbackEl = document.getElementById('quiz-feedback');
  const progressFill = document.getElementById('quiz-progress-fill');

  function renderQuizQuestion() {
    if (currentQuizIndex >= QUIZ_DATA.length) {
      showCertificate();
      return;
    }

    const currentQ = QUIZ_DATA[currentQuizIndex];
    qText.textContent = `${currentQuizIndex + 1}. ${currentQ.question}`;
    feedbackEl.textContent = '';
    optionsBox.innerHTML = '';

    progressFill.style.width = `${((currentQuizIndex + 1) / QUIZ_DATA.length) * 100}%`;

    currentQ.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt-btn';
      btn.innerHTML = `<span>${opt.text}</span> <i class="fas fa-heart" style="opacity:0.4;"></i>`;
      btn.addEventListener('click', () => {
        // All options celebrate love!
        btn.classList.add('correct');
        feedbackEl.textContent = `✨ ${currentQ.hint}`;
        if (window.romanticAudio) window.romanticAudio.playChime();

        setTimeout(() => {
          currentQuizIndex++;
          renderQuizQuestion();
        }, 1300);
      });
      optionsBox.appendChild(btn);
    });
  }

  function showCertificate() {
    qContainer.style.display = 'none';
    certContainer.style.display = 'block';
    if (window.romanticAudio) {
      window.romanticAudio.playPop();
      window.romanticAudio.playChime();
    }
    launchConfetti();
  }

  renderQuizQuestion();
}

// ==========================================================================
// SECRET LETTER UNLOCK
// ==========================================================================
function setupSecretLetter() {
  const lockIcon = document.getElementById('lock-heart-btn');
  const revealedBox = document.getElementById('secret-revealed-content');

  if (!lockIcon || !revealedBox) return;

  lockIcon.addEventListener('click', () => {
    revealedBox.style.display = 'block';
    lockIcon.style.display = 'none';
    if (window.romanticAudio) {
      window.romanticAudio.playChime();
      window.romanticAudio.playPop();
    }
    launchConfetti();
    revealedBox.scrollIntoView({ behavior: 'smooth' });
  });
}

// ==========================================================================
// AUDIO & NAVIGATION CONTROLS
// ==========================================================================
function setupAudioControls() {
  const toggleBtn = document.getElementById('btn-audio-toggle');
  const waveContainer = document.getElementById('music-waves-container');

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    if (!window.romanticAudio) return;
    const isPlaying = window.romanticAudio.toggleMusic();
    if (isPlaying) {
      waveContainer.classList.add('playing');
      toggleBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
      waveContainer.classList.remove('playing');
      toggleBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
  });
}

// ==========================================================================
// ENTRANCE CURTAIN (THE INITIAL UNLOCK)
// ==========================================================================
function setupCurtain() {
  const curtain = document.getElementById('entrance-curtain');
  const openBtn = document.getElementById('btn-open-curtain');
  const envelope = document.querySelector('.envelope-wrapper');

  function openCurtain() {
    curtain.classList.add('opened');
    if (window.romanticAudio) {
      window.romanticAudio.startRomanticAmbience();
      window.romanticAudio.playChime();
      window.romanticAudio.playPop();
    }
    const waveContainer = document.getElementById('music-waves-container');
    if (waveContainer) waveContainer.classList.add('playing');

    launchConfetti();
  }

  if (openBtn) openBtn.addEventListener('click', openCurtain);
  if (envelope) envelope.addEventListener('click', openCurtain);
}

// ==========================================================================
// SETTINGS DRAWER & EDIT MODAL
// ==========================================================================
function setupSettingsDrawer() {
  const toggleBtn = document.getElementById('btn-toggle-settings');
  const modal = document.getElementById('settings-modal');
  const closeBtn = document.getElementById('btn-close-settings');
  const saveBtn = document.getElementById('btn-save-settings');

  const inputHer = document.getElementById('cfg-her-name');
  const inputHis = document.getElementById('cfg-his-name');
  const inputDate = document.getElementById('cfg-rel-date');
  const inputTagline = document.getElementById('cfg-tagline');
  const inputLetter = document.getElementById('cfg-letter');

  if (!toggleBtn || !modal) return;

  toggleBtn.addEventListener('click', () => {
    inputHer.value = appConfig.herName;
    inputHis.value = appConfig.hisName;
    inputDate.value = appConfig.relationshipDate ? appConfig.relationshipDate.split('T')[0] : '2023-04-15';
    inputTagline.value = appConfig.tagline;
    inputLetter.value = appConfig.secretLetter;
    modal.classList.add('active');
  });

  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      appConfig.herName = inputHer.value.trim() || 'Anushka';
      appConfig.hisName = inputHis.value.trim() || 'Sahil';
      if (inputDate.value) {
        appConfig.relationshipDate = `${inputDate.value}T00:00:00`;
      }
      appConfig.tagline = inputTagline.value.trim();
      appConfig.secretLetter = inputLetter.value.trim();

      saveConfigToStorage();
      modal.classList.remove('active');
      if (window.romanticAudio) window.romanticAudio.playChime();
      alert('✨ Changes saved successfully!');
    });
  }
}

// Modal closing setup
function setupModalClose() {
  const modal = document.getElementById('common-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  const settingsModal = document.getElementById('settings-modal');
  if (settingsModal) {
    settingsModal.addEventListener('click', (e) => {
      if (e.target === settingsModal) settingsModal.classList.remove('active');
    });
  }
}

// ==========================================================================
// INITIALIZATION ON DOM READY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadSavedConfig();
  applyConfigToDOM();

  const particleEngine = new CanvasParticleEngine('canvas-backdrop');

  setupCurtain();
  setupAudioControls();
  setupCakeInteraction();
  setupPolaroids();
  setupPhotoUploader();
  setupLetters();
  setupLoveDeck();
  setupLoveQuiz();
  setupSecretLetter();
  setupSettingsDrawer();
  setupModalClose();

  // Relationship counter ticker every second
  updateLoveCounter();
  setInterval(updateLoveCounter, 1000);

  // Burst hearts on click anywhere in body
  document.addEventListener('click', (e) => {
    // avoid bursting over inputs
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
    particleEngine.burstHearts(e.clientX, e.clientY, 8);
  });
});
