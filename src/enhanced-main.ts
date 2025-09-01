// Imports
import {
  startEnhancedCountdown,
  typeLoveLetterEnhanced
} from './app/enhanced-birthday';
import {
  setupMouseEffects,
  setupSurprise
} from './enhanced-features';

// ===== Confetti Effects =====
export function showEnhancedConfetti(): void {
  const container = document.getElementById('confetti-container');
  if (!container) return;

  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];

  for (let i = 0; i < 200; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = Math.random() * 12 + 5 + 'px';
    confetti.style.height = Math.random() * 12 + 5 + 'px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confetti.style.opacity = (Math.random() * 0.8 + 0.2).toString();
    container.appendChild(confetti);

    const animation = confetti.animate([{
      transform: `translateY(0px) rotate(0deg)`,
      opacity: confetti.style.opacity
    }, {
      transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`,
      opacity: '0'
    }], {
      duration: Math.random() * 3000 + 2000,
      easing: 'cubic-bezier(0.5, 0, 0.5, 1)'
    });

    animation.onfinish = () => confetti.remove();
  }
}

// ===== Interactive Hearts =====
export function createInteractiveHeart(x: number, y: number): void {
  const hearts = ['💖', '💕', '💘', '💝', '🌸', '✨'];
  const heart = document.createElement('div');

  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.position = 'fixed';
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = '1000';
  document.body.appendChild(heart);

  const animation = heart.animate([{
    transform: 'scale(0.5) rotate(0deg) translateY(0px)',
    opacity: '1'
  }, {
    transform: `scale(1.5) rotate(${Math.random() * 360}deg) translateY(-100px)`,
    opacity: '0'
  }], {
    duration: Math.random() * 1000 + 1000,
    easing: 'ease-out'
  });

  animation.onfinish = () => heart.remove();
}

function createFloatingHearts(): void {
  const heartsContainer = document.getElementById('floating-hearts');
  if (!heartsContainer) return;

  const hearts = ['💖', '💕', '💘', '💝', '🌸', '✨', '🎀', '🌹', '💗', '🦋'];

  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heart.style.animationDuration = (4 + Math.random() * 4) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';

    const colors = ['#ff6b9d', '#ff8fab', '#ffa8cc', '#ffb3d1', '#ffc2d8'];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
  }, 300);
}

// ===== Spicy Section =====
interface RomanticMedia {
  src: string;
  caption: string;
  type: 'image' | 'video';
}

function setupSpicyControls(): void {
  const consentOverlay = document.getElementById('consent-overlay');
  const spicyContent = document.getElementById('spicy-content');
  const consentYes = document.getElementById('consent-yes');
  const consentNo = document.getElementById('consent-no');
  const closeSpicy = document.getElementById('close-spicy');

  if (!consentOverlay || !spicyContent || !consentYes || !consentNo || !closeSpicy) return;

  consentYes.addEventListener('click', () => {
    consentOverlay.style.display = 'none';
    spicyContent.classList.remove('hidden');
    spicyContent.style.display = 'block';

    showEnhancedConfetti();

    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        createInteractiveHeart(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        );
      }, i * 100);
    }
  });

  consentNo.addEventListener('click', () => {
    const spicySection = document.getElementById('spicy-section');
    if (spicySection) spicySection.style.display = 'none';
  });

  closeSpicy.addEventListener('click', () => {
    consentOverlay.style.display = 'flex';
    spicyContent.style.display = 'none';
    spicyContent.classList.add('hidden');
  });
}

function createSpicySection(): void {
  const romanticMedia: RomanticMedia[] = [
    { src: 'kiss_here.jpeg', caption: 'Kiss Here 💋', type: 'image' },
    { src: 'ur_fav.jpeg', caption: 'Your Favorite 😘', type: 'image' },
    { src: 'bath_together.png', caption: 'Bath Together 🛁', type: 'image' },
    { src: 'bite_lips.png', caption: 'Biting Lips 😏', type: 'image' },
    { src: 'skin_to_skin.mp4', caption: 'Skin to Skin ❤️', type: 'video' }
  ];

  const mainContent = document.querySelector('.main-content');
  if (!mainContent) return;

  const spicySection = document.createElement('section');
  spicySection.id = 'spicy-section';
  spicySection.className = 'spicy-section';
  spicySection.innerHTML = `<div class="spicy-container">
    <div class="consent-overlay" id="consent-overlay">
      <div class="consent-box">
        <div class="consent-header">
          <span class="spicy-emoji">🌶️</span>
          <h2>A Little Something Special... 😘</h2>
          <span class="spicy-emoji">🌶️</span>
        </div>
        <p class="consent-message">
          This section contains some playful and romantic content just for us! 💕
        </p>
        <div class="consent-buttons">
          <button class="consent-yes" id="consent-yes">Yes, I want to see! 😍</button>
          <button class="consent-no" id="consent-no">Maybe later 😊</button>
        </div>
      </div>
    </div>
    <div class="spicy-content hidden" id="spicy-content">
      <h2 class="spicy-title">💋 Just for Us 💋</h2>
      <div class="romantic-gallery" id="romantic-gallery"></div>
      <button class="close-spicy" id="close-spicy">Close This Special Section 😊</button>
    </div>
  </div>`;

  mainContent.appendChild(spicySection);

  const gallery = document.getElementById('romantic-gallery');
  if (gallery) {
    romanticMedia.forEach((media) => {
      const item = document.createElement(media.type === 'image' ? 'img' : 'video');
      // ✅ Correct asset reference
      item.src = new URL(`/assets/spicy/${media.src}`, import.meta.url).href;
      item.className = 'romantic-media';
      if (media.type === 'image') (item as HTMLImageElement).alt = media.caption;
      else (item as HTMLVideoElement).controls = true;

      gallery.appendChild(item);
    });
  }

  setupSpicyControls();
}

// ===== Initialize Website =====
function initializeWebsite(): void {
  createFloatingHearts();
  typeLoveLetterEnhanced();
  startEnhancedCountdown();
  setupMouseEffects();
  setupSurprise();
  createSpicySection();

  const confettiBtn = document.getElementById('confetti-btn');
  if (confettiBtn) confettiBtn.addEventListener('click', showEnhancedConfetti);
  setTimeout(showEnhancedConfetti, 1000);
}

// ===== Music Buttons =====
const playMusicBtn = document.getElementById('play-music');
const pauseMusicBtn = document.getElementById('pause-music');
if (playMusicBtn && pauseMusicBtn) {
  const audio = new Audio(new URL('/assets/audio/Albumaty.Com_tww_lyt_hsyny.mp3', import.meta.url).href);
  audio.loop = true;

  playMusicBtn.addEventListener('click', () => {
    audio.play();
    createInteractiveHeart(
      playMusicBtn.offsetLeft + playMusicBtn.offsetWidth / 2,
      playMusicBtn.offsetTop + playMusicBtn.offsetHeight / 2
    );
  });

  pauseMusicBtn.addEventListener('click', () => audio.pause());
}

// ===== DOM Content Loaded =====
document.addEventListener('DOMContentLoaded', () => initializeWebsite());
document.addEventListener('contextmenu', e => e.preventDefault());
