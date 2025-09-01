// The unused imports are commented out to prevent the warning
// import {
//   floatingLoveNotes,
//   cursorHearts,
//   heartSky
// } from './app/romantic-effects';
import {
  startEnhancedCountdown,
  typeLoveLetterEnhanced
} from './app/enhanced-birthday';
import {
  setupMouseEffects,
  setupSurprise
} from './enhanced-features';

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

    setTimeout(() => {
      if (heart.parentNode) {
        heart.parentNode.removeChild(heart);
      }
    }, 8000);
  }, 300);
}

function initializeWebsite(): void {
  createFloatingHearts();
  typeLoveLetterEnhanced();
  startEnhancedCountdown();
  setupMouseEffects();
  setupSurprise();
  createMemoryTimeline();
  createSpicySection();

  const confettiBtn = document.getElementById('confetti-btn');
  if (confettiBtn) {
    confettiBtn.addEventListener('click', showEnhancedConfetti);
  }

  setTimeout(showEnhancedConfetti, 1000);
}

const playMusicBtn = document.getElementById('play-music');
const pauseMusicBtn = document.getElementById('pause-music');
if (playMusicBtn && pauseMusicBtn) {
  const audio = new Audio('/assets/audio/Albumaty.Com_tww_lyt_hsyny.mp3');
  audio.loop = true;

  playMusicBtn.addEventListener('click', () => {
    audio.play();
    if (playMusicBtn) {
      createInteractiveHeart(
        playMusicBtn.offsetLeft + playMusicBtn.offsetWidth / 2,
        playMusicBtn.offsetTop + playMusicBtn.offsetHeight / 2
      );
    }
  });

  pauseMusicBtn.addEventListener('click', () => {
    audio.pause();
  });
}

interface RomanticMedia {
  src: string;
  caption: string;
  type: 'image' | 'video';
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
  spicySection.innerHTML = `
    <div class="spicy-container">
      <div class="consent-overlay" id="consent-overlay">
        <div class="consent-box">
          <div class="consent-header">
            <span class="spicy-emoji">🌶️</span>
            <h2>A Little Something Special... 😘</h2>
            <span class="spicy-emoji">🌶️</span>
          </div>
          <p class="consent-message">
            This section contains some playful and romantic content just for us! 💕<br>
            <span class="arabic-consent">محتوى رومانسي خاص بينا احنا الاتنين بس 😉</span>
          </p>
          <div class="consent-buttons">
            <button class="consent-yes" id="consent-yes">
              Yes, I want to see! 😍
            </button>
            <button class="consent-no" id="consent-no">
              Maybe later 😊
            </button>
          </div>
        </div>
      </div>
      <div class="spicy-content hidden" id="spicy-content">
        <h2 class="spicy-title">💋 Just for Us 💋</h2>
        <p class="spicy-subtitle">Our romantic moments in cute cartoons! 😘✨</p>
        <div class="romantic-gallery" id="romantic-gallery">
          </div>
        <div class="romantic-message">
          <p class="love-note">
            "These are just for us, my love... 💕"
          </p>
          <p class="arabic-love-note">
            "دي حاجات خاصة بينا احنا الاتنين بس يا حبيبتي... 💖"
          </p>
        </div>
        <button class="close-spicy" id="close-spicy">
          Close This Special Section 😊
        </button>
      </div>
    </div>
  `;
  mainContent.appendChild(spicySection);
  generateRomanticGallery(romanticMedia);
  setupSpicyControls();
}


function generateRomanticGallery(mediaArray: RomanticMedia[]): void {
  const gallery = document.getElementById('romantic-gallery');
  if (!gallery) return;

  mediaArray.forEach((media, index) => {
    const romanticItem = document.createElement('div');
    romanticItem.className = 'romantic-item';
    romanticItem.style.animationDelay = (index * 0.2) + 's';

    const mediaEl = document.createElement(media.type === 'image' ? 'img' : 'video') as HTMLImageElement | HTMLVideoElement;
    mediaEl.src = `/assets/spicy/${media.src}`;
    mediaEl.className = 'romantic-media';

    if (media.type === 'image') {
      (mediaEl as HTMLImageElement).alt = media.caption;
      (mediaEl as HTMLImageElement).loading = 'lazy';
    } else if (media.type === 'video') {
      (mediaEl as HTMLVideoElement).controls = true;
      (mediaEl as HTMLVideoElement).autoplay = false;
      (mediaEl as HTMLVideoElement).loop = true;
      (mediaEl as HTMLVideoElement).muted = true;
      (mediaEl as HTMLVideoElement).preload = 'auto';
    }

    const caption = document.createElement('div');
    caption.className = 'romantic-caption';
    caption.textContent = media.caption;

    romanticItem.appendChild(mediaEl);
    romanticItem.appendChild(caption);

    romanticItem.addEventListener('click', () => {
      showRomanticConfetti();

      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          createInteractiveHeart(
            romanticItem.offsetLeft + Math.random() * romanticItem.offsetWidth,
            romanticItem.offsetTop + Math.random() * romanticItem.offsetHeight
          );
        }, i * 100);
      }
    });

    gallery.appendChild(romanticItem);
  });
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

    showRomanticConfetti();

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
    if (spicySection) {
      spicySection.style.display = 'none';
    }

    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.textContent = '😊';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        heart.style.fontSize = '30px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        document.body.appendChild(heart);

        const animation = heart.animate([{
          opacity: '1',
          transform: 'scale(1)'
        }, {
          opacity: '0',
          transform: 'scale(2) translateY(-100px)'
        }], {
          duration: 2000,
          easing: 'ease-out'
        });

        animation.onfinish = () => heart.remove();
      }, i * 200);
    }
  });

  closeSpicy.addEventListener('click', () => {
    consentOverlay.style.display = 'flex';
    spicyContent.style.display = 'none';
    spicyContent.classList.add('hidden');
  });
}

function showRomanticConfetti(): void {
  const container = document.getElementById('confetti-container');
  if (!container) return;

  const romanticEmojis = ['💋', '💕', '💖', '😘', '🥰', '💑', '💏', '🌹', '💐', '💝'];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
    confetti.textContent = romanticEmojis[Math.floor(Math.random() * romanticEmojis.length)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-50px';
    confetti.style.pointerEvents = 'none';
    container.appendChild(confetti);

    const animation = confetti.animate([{
      transform: `translateY(0px) rotate(0deg)`,
      opacity: '1'
    }, {
      transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`,
      opacity: '0'
    }], {
      duration: Math.random() * 4000 + 3000,
      easing: 'cubic-bezier(0.5, 0, 0.5, 1)'
    });

    animation.onfinish = () => confetti.remove();
  }
}

const memoryItems = [{
  emoji: '✨',
  title: 'First Time I Met You',
  date: 'March 31, 2025',
  description: 'The magical day when our souls first connected and my world changed forever...',
  arabicNote: 'اليوم اللي غير حياتي للأبد 💫'
}, {
  emoji: '💕',
  title: 'Our Love Story Begins',
  date: 'Shortly After...',
  description: 'When we realized this wasn\'t just a meeting, but destiny bringing us together...',
  arabicNote: 'بداية قصة حب جميلة 🌹'
}, {
  emoji: '🌸',
  title: 'Growing Closer',
  date: 'Every Day Since',
  description: 'Building something beautiful together, one precious moment at a time...',
  arabicNote: 'كل يوم أحبك أكتر 💖'
}, {
  emoji: '🎂',
  title: 'Today - Your 22nd Birthday!',
  date: 'August 31, 2025',
  description: 'Celebrating the most amazing woman who fills my life with joy and love!',
  arabicNote: 'عيد ميلاد سعيد يا حبيبة قلبي! 🎉'
}];

function createMemoryTimeline(): void {
  const mainContent = document.querySelector('.main-content');
  if (!mainContent) return;

  const existingTimeline = document.querySelector('.memory-timeline');
  if (!existingTimeline) {
    const memorySection = document.createElement('section');
    memorySection.className = 'memory-lane';
    memorySection.innerHTML = '<h2>🌟 Our Beautiful Journey</h2><div class="memory-timeline"></div>';
    mainContent.appendChild(memorySection);
  }

  const timeline = document.querySelector('.memory-timeline');
  if (!timeline) return;

  timeline.innerHTML = '';

  memoryItems.forEach((memory, index) => {
    const memoryItem = document.createElement('div');
    memoryItem.className = 'memory-item';
    memoryItem.style.animationDelay = (index * 0.3) + 's';

    memoryItem.innerHTML = `
      <div class="memory-header">
        <span class="memory-emoji">${memory.emoji}</span>
        <h3 class="memory-title">${memory.title}</h3>
        <span class="memory-date">${memory.date}</span>
      </div>
      <p class="memory-description">${memory.description}</p>
      <div class="memory-arabic">${memory.arabicNote}</div>
    `;

    memoryItem.addEventListener('click', () => {
      showEnhancedConfetti();

      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          const emoji = document.createElement('div');
          emoji.textContent = memory.emoji;
          emoji.style.position = 'fixed';
          emoji.style.left = (memoryItem.offsetLeft + Math.random() * memoryItem.offsetWidth) + 'px';
          emoji.style.top = (memoryItem.offsetTop + Math.random() * memoryItem.offsetHeight) + 'px';
          emoji.style.fontSize = (Math.random() * 25 + 20) + 'px';
          emoji.style.pointerEvents = 'none';
          emoji.style.zIndex = '1000';
          document.body.appendChild(emoji);

          const animation = emoji.animate([{
            transform: 'scale(0.5) rotate(0deg) translateY(0px)',
            opacity: '1'
          }, {
            transform: `scale(2.5) rotate(${Math.random() * 720}deg) translateY(-200px)`,
            opacity: '0'
          }], {
            duration: Math.random() * 2000 + 2000,
            easing: 'ease-out'
          });

          animation.onfinish = () => emoji.remove();
        }, i * 150);
      }
    });

    timeline.appendChild(memoryItem);
  });
}

const images = [
  { src: 'baby_fero.jpeg', caption: 'أجمل بداية 💖' },
  { src: 'fero_first.jpeg', caption: 'أول صورة منك 😘' },
  { src: 'fero_kiss.jpeg', caption: 'أحلى قبلة 💋' },
  { src: 'fero_sky.jpeg', caption: 'سحر السماء معاك ✨' },
  { src: 'pink_fero.jpeg', caption: 'وردتي الحلوة 🌸' },
  { src: 'sleeping_beauty.jpeg', caption: 'الاميرة النايمة🌹' }
];

const imagesContainer = document.querySelector('.images-container');
if (imagesContainer) {
  images.forEach((img, index) => {
    const container = document.createElement('div');
    container.className = 'media-item';
    container.style.animationDelay = (index * 0.2) + 's';

    const imageEl = document.createElement('img');
    imageEl.src = `/assets/images/${img.src}`;
    imageEl.alt = img.caption;
    imageEl.loading = 'lazy';

    const caption = document.createElement('div');
    caption.className = 'media-caption';
    caption.textContent = img.caption;

    container.appendChild(imageEl);
    container.appendChild(caption);

    container.addEventListener('click', () => {
      showEnhancedConfetti();
      createInteractiveHeart(
        container.offsetLeft + container.offsetWidth / 2,
        container.offsetTop + container.offsetHeight / 2
      );
    });

    imagesContainer.appendChild(container);
  });
}

interface VideoItem {
  file: string;
  caption: string;
  description: string;
  emoji: string;
}

const videos: VideoItem[] = [
  {
    file: '21.mp4',
    caption: 'When You Were 21 💫',
    description: 'Beautiful memories from your 21st year',
    emoji: '🎂'
  },
  {
    file: 'black_on_black.mp4',
    caption: 'Our Favorite Colors 🖤',
    description: 'Black on black - just like we love it',
    emoji: '⚫'
  },
  {
    file: 'dream.mp4',
    caption: 'Blue Like My Dreams 💙',
    description: 'Wearing blue like that time in my dream',
    emoji: '🌙'
  },
  {
    file: 'wifey.mp4',
    caption: 'My Future Wife 💍',
    description: 'Looking like the woman I want to marry',
    emoji: '👰'
  }
];

const videosContainer = document.querySelector('.videos-container');
if (videosContainer) {
  videos.forEach((video, index) => {
    const container = document.createElement('div');
    container.className = 'media-item special-video';
    container.style.animationDelay = (index * 0.3) + 's';

    const videoEl = document.createElement('video');
    videoEl.src = `/assets/videos/${video.file}`;
    videoEl.controls = true;
    videoEl.preload = 'metadata';

    const caption = document.createElement('div');
    caption.className = 'media-caption video-caption';
    caption.innerHTML = `
      <div class="caption-title">${video.emoji} ${video.caption}</div>
      <div class="caption-description">${video.description}</div>
    `;

    container.addEventListener('mouseenter', () => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          createInteractiveHeart(
            container.offsetLeft + Math.random() * container.offsetWidth,
            container.offsetTop + Math.random() * container.offsetHeight
          );
        }, i * 100);
      }
    });

    container.appendChild(videoEl);
    container.appendChild(caption);

    container.addEventListener('click', () => {
      showEnhancedConfetti();

      const specialColors: {
        [key: string]: string[]
      } = {
        '21.mp4': ['#ff6b6b', '#ffd93d', '#6bcf7f'],
        'black_on_black.mp4': ['#2c3e50', '#34495e', '#7f8c8d'],
        'dream.mp4': ['#3498db', '#5dade2', '#85c1e9'],
        'wifey.mp4': ['#e91e63', '#f8bbd9', '#fce4ec']
      };

      const colors = specialColors[video.file] || ['#ff6b9d', '#ff8fab', '#ffa8cc'];
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          const heart = document.createElement('div');
          heart.textContent = video.emoji;
          heart.style.position = 'fixed';
          heart.style.left = (container.offsetLeft + Math.random() * container.offsetWidth) + 'px';
          heart.style.top = (container.offsetTop + Math.random() * container.offsetHeight) + 'px';
          heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
          heart.style.pointerEvents = 'none';
          heart.style.zIndex = '1000';
          heart.style.color = colors[Math.floor(Math.random() * colors.length)];
          document.body.appendChild(heart);

          const animation = heart.animate([{
            transform: 'scale(0.5) rotate(0deg) translateY(0px)',
            opacity: '1'
          }, {
            transform: `scale(2) rotate(${Math.random() * 360}deg) translateY(-150px)`,
            opacity: '0'
          }], {
            duration: Math.random() * 1500 + 1500,
            easing: 'ease-out'
          });

          animation.onfinish = () => heart.remove();
        }, i * 200);
      }
    });

    videosContainer.appendChild(container);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeWebsite();
});

document.addEventListener('contextmenu', e => e.preventDefault());