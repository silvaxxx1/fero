// Import only from existing files
import { 
  floatingLoveNotes, 
  cursorHearts, 
  heartSky 
} from './app/romantic-effects';

// ===== Asset Path Helper =====
function getAssetPath(path) {
  // Get the base URL from Vite's import.meta.env or fallback to current location
  const baseUrl = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path and ensure baseUrl ends with slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
  return cleanBase + cleanPath;
}

// ===== Enhanced Effects Functions (Inline) =====

// Enhanced confetti effect
export function showEnhancedConfetti() {
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

    const animation = confetti.animate([
      { 
        transform: `translateY(0px) rotate(0deg)`,
        opacity: confetti.style.opacity
      },
      { 
        transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`,
        opacity: '0'
      }
    ], {
      duration: Math.random() * 3000 + 2000,
      easing: 'cubic-bezier(0.5, 0, 0.5, 1)'
    });

    animation.onfinish = () => confetti.remove();
  }
}

// Interactive hearts on click
export function createInteractiveHeart(x, y) {
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

  const animation = heart.animate([
    { 
      transform: 'scale(0.5) rotate(0deg) translateY(0px)',
      opacity: '1'
    },
    { 
      transform: `scale(1.5) rotate(${Math.random() * 360}deg) translateY(-100px)`,
      opacity: '0'
    }
  ], {
    duration: Math.random() * 1000 + 1000,
    easing: 'ease-out'
  });

  animation.onfinish = () => heart.remove();
}

// Create floating hearts background
function createFloatingHearts() {
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

// Enhanced countdown
function startEnhancedCountdown() {
  const countdownEl = document.getElementById('countdown-display');
  if (!countdownEl) return;
  
  function updateCountdown() {
    const now = new Date();
    const nextBirthday = new Date(now.getFullYear(), 7, 31); // August 31st
    
    if (now > nextBirthday) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    
    const diff = nextBirthday.getTime() - now.getTime();
    
    if (diff <= 0) {
      countdownEl.innerHTML = "🎉 IT'S YOUR BIRTHDAY! 🎂";
      showEnhancedConfetti();
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    countdownEl.innerHTML = `
      <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 1rem;">
        <div style="text-align: center;">
          <div style="font-size: 2.5rem; color: #ff6b6b;">${days}</div>
          <div style="font-size: 0.9rem; color: #666;">Days</div>
        </div>
        <div style="text-align: center;">
          <div style="font-size: 2.5rem; color: #4ecdc4;">${hours}</div>
          <div style="font-size: 0.9rem; color: #666;">Hours</div>
        </div>
        <div style="text-align: center;">
          <div style="font-size: 2.5rem; color: #45b7d1;">${minutes}</div>
          <div style="font-size: 0.9rem; color: #666;">Minutes</div>
        </div>
        <div style="text-align: center;">
          <div style="font-size: 2.5rem; color: #f9ca24;">${seconds}</div>
          <div style="font-size: 0.9rem; color: #666;">Seconds</div>
        </div>
      </div>
    `;
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown();
}

// Enhanced love letter typing - FIXED FOR ARABIC (Single unified function)
function typeLoveLetterEnhanced() {
  // Properly formatted Arabic messages
  const messages = [
    "فيرو، إنتِ بتنوري حياتي كل يوم… ✨",
    "كل ضحكة، كل حضن، وكل لحظة معاكِ ساحرة 💖", 
    "عيد ميلاد سعيد يا حبيبتي! 🎂✨",
    "إنتِ أجمل هدية في حياتي 🎁💕",
    "معاكِ كل يوم عيد ميلاد جديد 🌟",
    "حبيبتي فيرو، إنتِ كل حاجة حلوة في الدنيا 🌹"
  ];
  
  const element = document.getElementById('letter-text');
  if (!element) return;
  
  element.classList.add('arabic-text');
  element.setAttribute('lang', 'ar');
  
  let messageIndex = 0;
  let isTyping = false;
  
  function typeMessage() {
    if (isTyping) return; // Prevent overlapping animations
    isTyping = true;
    
    const message = messages[messageIndex];
    element.textContent = '';
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      // Add character by character, preserving Arabic text direction
      const currentText = message.substring(0, charIndex + 1);
      element.textContent = currentText;
      
      if (Math.random() < 0.12) {
        createInteractiveHeart(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        );
      }
      
      charIndex++;
      if (charIndex >= message.length) {
        clearInterval(typeInterval);
        messageIndex = (messageIndex + 1) % messages.length;
        
        setTimeout(() => {
          isTyping = false;
          typeMessage();
        }, 3000);
      }
    }, 100);
  }
  
  typeMessage();
}

// Setup mouse effects
function setupMouseEffects() {
  document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.08) {
      createInteractiveHeart(e.clientX, e.clientY);
    }
  });
  
  document.addEventListener('click', (e) => {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        createInteractiveHeart(
          e.clientX + (Math.random() - 0.5) * 50,
          e.clientY + (Math.random() - 0.5) * 50
        );
      }, i * 100);
    }
  });
}

// Setup surprise functionality
function setupSurprise() {
  const surpriseBtn = document.getElementById('surprise-btn');
  const giftBox = document.getElementById('gift-box');
  const surpriseMessage = document.getElementById('surprise-message');
  
  if (!surpriseBtn || !giftBox || !surpriseMessage) return;
  
  function activateSurprise() {
    surpriseMessage.style.display = 'block';
    showEnhancedConfetti();
    
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        createInteractiveHeart(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        );
      }, i * 150);
    }
    
    if (surpriseBtn.textContent?.includes('Special Surprise')) {
      surpriseBtn.textContent = '🌟 More Magic!';
    }
  }
  
  surpriseBtn.addEventListener('click', activateSurprise);
  giftBox.addEventListener('click', activateSurprise);
}

// ===== Enhanced Romantic Effects =====
floatingLoveNotes([
  "I love you 💖", 
  "Forever yours 💌", 
  "You are my magic ✨",
  "Fero 💖",
  "My heart belongs to you 💕"
]);
cursorHearts();
heartSky(["Fero 💖", "My Love ✨"]);

// ===== Initialize Core Features =====
function initializeWebsite() {
  createFloatingHearts();
  typeLoveLetterEnhanced(); // Only call the main typing function once
  startEnhancedCountdown();
  setupMouseEffects();
  setupSurprise();
  createMemoryTimeline(); // Add the memory timeline
  createSpicySection(); // Add the spicy section
  
  const confettiBtn = document.getElementById('confetti-btn');
  if (confettiBtn) {
    confettiBtn.addEventListener('click', showEnhancedConfetti);
  }
  
  setTimeout(showEnhancedConfetti, 1000);
}

// ===== Audio Controls (SMOOTH UI) =====
const playMusicBtn = document.getElementById('play-music');
const pauseMusicBtn = document.getElementById('pause-music');

if (playMusicBtn && pauseMusicBtn) {
  // Create audio element
  const audio = new Audio();
  audio.loop = true;
  
  // Define your songs
  const songs = [
    { 
      src: getAssetPath('assets/audio/Albumaty.Com_tww_lyt_hsyny.mp3'), 
      name: '💕 Our Love Song' 
    },
    { 
      src: getAssetPath('assets/audio/jelad.mp3'), 
      name: '🎵 JELAD' 
    }
  ];
  
  let currentSongIndex = 0;
  audio.src = songs[0].src;
  
  // Hide the original pause button (we'll use toggle)
  pauseMusicBtn.style.display = 'none';
  
  // Transform play button to toggle
  playMusicBtn.textContent = '▶️ Play Music';
  playMusicBtn.style.minWidth = '140px';
  
  // Create song switcher as simple buttons (cleaner than dropdown)
  const songSwitcher = document.createElement('div');
  songSwitcher.style.cssText = `
    display: inline-flex;
    gap: 0.5rem;
    background: rgba(255,255,255,0.1);
    padding: 0.3rem;
    border-radius: 25px;
    backdrop-filter: blur(10px);
    margin: 0.3rem;
  `;
  
  songs.forEach((song, index) => {
    const btn = document.createElement('button');
    btn.textContent = index === 0 ? '💕' : '🎵';
    btn.title = song.name;
    btn.style.cssText = `
      padding: 0.4rem 0.8rem;
      border: 2px solid ${index === currentSongIndex ? '#ff6b6b' : 'transparent'};
      border-radius: 20px;
      background: ${index === currentSongIndex ? 'rgba(255,107,107,0.3)' : 'transparent'};
      color: ${index === currentSongIndex ? '#ff6b6b' : '#aaa'};
      cursor: pointer;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      font-weight: 500;
    `;
    
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.1)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
    });
    
    btn.addEventListener('click', () => {
      if (index !== currentSongIndex) {
        currentSongIndex = index;
        audio.src = songs[currentSongIndex].src;
        
        // Update button styles
        const allBtns = songSwitcher.querySelectorAll('button');
        allBtns.forEach((b, i) => {
          b.style.borderColor = i === index ? '#ff6b6b' : 'transparent';
          b.style.background = i === index ? 'rgba(255,107,107,0.3)' : 'transparent';
          b.style.color = i === index ? '#ff6b6b' : '#aaa';
        });
        
        // If music is playing, switch to new song
        if (!audio.paused) {
          audio.play().catch(error => {
            console.log('Audio play failed:', error);
          });
        }
        
        // Show notification
        showSongNotification(songs[currentSongIndex].name);
        
        // Update play button
        if (!audio.paused) {
          playMusicBtn.textContent = `⏸️ ${songs[currentSongIndex].name}`;
        } else {
          playMusicBtn.textContent = `▶️ ${songs[currentSongIndex].name}`;
        }
      }
    });
    
    songSwitcher.appendChild(btn);
  });
  
  // Insert song switcher
  const controlButtons = document.querySelector('.control-buttons');
  if (controlButtons) {
    controlButtons.insertBefore(songSwitcher, playMusicBtn.nextSibling);
  }
  
  // Toggle play/pause
  playMusicBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch(error => {
        console.log('Audio play failed:', error);
      });
      playMusicBtn.textContent = `⏸️ ${songs[currentSongIndex].name}`;
    } else {
      audio.pause();
      playMusicBtn.textContent = `▶️ ${songs[currentSongIndex].name}`;
    }
    
    // Hearts effect
    const r = playMusicBtn.getBoundingClientRect();
    createInteractiveHeart(r.left + r.width / 2, r.top + r.height / 2);
  });
  
  // Clean notification function
  function showSongNotification(songName) {
    // Remove any existing notification
    const existing = document.querySelector('.song-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'song-notification';
    notification.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0,0,0,0.85);
      backdrop-filter: blur(15px);
      color: white;
      padding: 0.7rem 1.8rem;
      border-radius: 50px;
      font-size: 0.95rem;
      font-weight: 500;
      z-index: 9999;
      box-shadow: 0 10px 40px rgba(0,0,0,0.5);
      animation: slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      text-align: center;
      border: 2px solid #ff6b6b;
      letter-spacing: 0.5px;
      pointer-events: none;
    `;
    notification.innerHTML = `🎵 ${songName}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'fadeOut 0.5s ease';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 500);
    }, 2000);
  }
  
  // Add CSS animations if not already present
  if (!document.getElementById('audio-styles')) {
    const style = document.createElement('style');
    style.id = 'audio-styles';
    style.textContent = `
      @keyframes slideUp {
        from { transform: translateX(-50%) translateY(50px); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
      }
      @keyframes fadeOut {
        from { opacity: 1; transform: translateX(-50%) translateY(0); }
        to { opacity: 0; transform: translateX(-50%) translateY(-20px); }
      }
      .control-buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
      }
      .control-buttons button,
      .control-buttons div {
        margin: 0.2rem !important;
      }
      #play-music {
        transition: all 0.3s ease;
      }
      #play-music:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px rgba(255,107,107,0.3);
      }
    `;
    document.head.appendChild(style);
  }
}

function createSpicySection() {
  // FIXED PATHS - Use relative paths that Vite will handle
  const romanticMedia = [
    { src: 'kiss_here.jpeg', caption: 'Kiss Here 💋', type: 'image' },
    { src: 'ur_fav.jpeg', caption: 'Your Favorite 😘', type: 'image' },
    { src: 'bath_together.png', caption: 'Bath Together 🛁', type: 'image' },
    { src: 'bite_lips.png', caption: 'Biting Lips 😏', type: 'image' },
    { src: 'skin_to_skin.mp4', caption: 'Skin to Skin ❤️', type: 'video' }
  ];

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
          <!-- Content will be dynamically generated -->
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
  
  document.querySelector('.main-content').appendChild(spicySection);
  
  // Generate the romantic gallery
  generateRomanticGallery(romanticMedia);
  setupSpicyControls();
}

function generateRomanticGallery(mediaArray) {
  const gallery = document.getElementById('romantic-gallery');
  if (!gallery) return;
  
  mediaArray.forEach((media, index) => {
    const romanticItem = document.createElement('div');
    romanticItem.className = 'romantic-item';
    romanticItem.style.animationDelay = (index * 0.2) + 's';
    
    let mediaEl;
    if (media.type === 'video') {
      mediaEl = document.createElement('video');
      mediaEl.src = getAssetPath(`assets/spicy/${media.src}`); // FIXED PATH
      mediaEl.controls = true;
      mediaEl.preload = 'metadata';
      mediaEl.className = 'romantic-media';
      mediaEl.style.maxHeight = '250px';
      mediaEl.style.borderRadius = '12px';
    } else {
      mediaEl = document.createElement('img');
      mediaEl.src = getAssetPath(`assets/spicy/${media.src}`); // FIXED PATH
      mediaEl.alt = media.caption || '';
      mediaEl.loading = 'lazy';
      mediaEl.className = 'romantic-media';
    }
    
    const caption = document.createElement('div');
    caption.className = 'romantic-caption';
    caption.textContent = media.caption || '';
    
    romanticItem.appendChild(mediaEl);
    romanticItem.appendChild(caption);
    
    // Add special click effects
    romanticItem.addEventListener('click', () => {
      showRomanticConfetti();
      const rr = romanticItem.getBoundingClientRect();
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          createInteractiveHeart(rr.left + Math.random() * rr.width, rr.top + Math.random() * rr.height);
        }, i * 100);
      }
    });
    
    gallery.appendChild(romanticItem);
  });
}

function setupSpicyControls() {
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
    
    // Special romantic confetti
    showRomanticConfetti();
    
    // Create floating hearts
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
    // Hide the entire spicy section
    const spicySection = document.getElementById('spicy-section');
    if (spicySection) {
      spicySection.style.display = 'none';
    }
    
    // Create sweet rejection hearts
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

        const animation = heart.animate([
          { opacity: '1', transform: 'scale(1)' },
          { opacity: '0', transform: 'scale(2) translateY(-100px)' }
        ], { duration: 2000, easing: 'ease-out' });

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

function showRomanticConfetti() {
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

    const animation = confetti.animate([
      { 
        transform: `translateY(0px) rotate(0deg)`,
        opacity: '1'
      },
      { 
        transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`,
        opacity: '0'
      }
    ], {
      duration: Math.random() * 4000 + 3000,
      easing: 'cubic-bezier(0.5, 0, 0.5, 1)'
    });

    animation.onfinish = () => confetti.remove();
  }
}

// ===== DYNAMIC BIRTHDAY MEMORY =====
const now = new Date();
const birthYear = 2003; // Fero's birth year
const age = now.getFullYear() - birthYear;
const isBirthday = now.getMonth() === 7 && now.getDate() === 31; // August 31
const birthdayDate = new Date(now.getFullYear(), 7, 31);

// Check if birthday has passed this year
const hasPassed = now > birthdayDate;
const displayYear = hasPassed ? now.getFullYear() + 1 : now.getFullYear();
const displayAge = hasPassed ? age + 1 : age;

const memoryItems = [
  {
    emoji: '✨',
    title: 'First Time I Met You',
    date: 'March 31, 2025',
    description: 'The magical day when our souls first connected and my world changed forever...',
    arabicNote: 'اليوم اللي غير حياتي للأبد 💫'
  },
  {
    emoji: '💕',
    title: 'Our Love Story Begins',
    date: 'Shortly After...',
    description: 'When we realized this wasn\'t just a meeting, but destiny bringing us together...',
    arabicNote: 'بداية قصة حب جميلة 🌹'
  },
  {
    emoji: '🌸',
    title: 'Growing Closer',
    date: 'Every Day Since',
    description: 'Building something beautiful together, one precious moment at a time...',
    arabicNote: 'كل يوم أحبك أكتر 💖'
  },
  {
    emoji: '🎂',
    title: isBirthday 
      ? '🎉 TODAY IS YOUR BIRTHDAY! 🎂🎉' 
      : `Your ${displayAge}th Birthday ${hasPassed ? 'Coming Soon' : 'is Here!'}`,
    date: isBirthday 
      ? `🎊 August 31, ${now.getFullYear()} - TODAY! 🎊` 
      : `August 31, ${displayYear}`,
    description: isBirthday 
      ? '🎉 CELEBRATING THE MOST AMAZING WOMAN IN THE WORLD! HAPPY BIRTHDAY MY LOVE! 💖✨🎂'
      : `Counting down to celebrate ${displayAge} years of you! Every moment with you is magic 💖✨`,
    arabicNote: isBirthday 
      ? '🎉 عيد ميلاد سعيد يا حبيبة قلبي! اليوم يومك! أنتِ كل شيء في حياتي 💖🎂'
      : `🎉 عيد ميلاد سعيد يا حبيبة قلبي! قريباً ${displayAge} سنة من النور 💖`
  }
];

// Add memory timeline to the page
function createMemoryTimeline() {
  const memoryContainer = document.querySelector('.memory-timeline');
  if (!memoryContainer) {
    // Create memory section if it doesn't exist
    const memorySection = document.createElement('section');
    memorySection.className = 'memory-lane';
    memorySection.innerHTML = '<h2>🌟 Our Beautiful Journey</h2><div class="memory-timeline"></div>';
    document.querySelector('.main-content').appendChild(memorySection);
  }
  
  const timeline = document.querySelector('.memory-timeline');
  if (!timeline) return;
  
  timeline.innerHTML = ''; // Clear existing content
  
  memoryItems.forEach((memory, index) => {
    const memoryItem = document.createElement('div');
    memoryItem.className = 'memory-item';
    memoryItem.style.animationDelay = (index * 0.3) + 's';
    memoryItem.setAttribute('role', 'button');
    memoryItem.setAttribute('tabindex', '0');
    
    memoryItem.innerHTML = `
      <div class="memory-header">
        <span class="memory-emoji">${memory.emoji}</span>
        <h3 class="memory-title">${memory.title}</h3>
        <span class="memory-date">${memory.date}</span>
      </div>
      <p class="memory-description">${memory.description}</p>
      <div class="memory-arabic" lang="ar">${memory.arabicNote}</div>
    `;
    
    // Add special click effects for memories
    memoryItem.addEventListener('click', () => {
      showEnhancedConfetti();
      const mr = memoryItem.getBoundingClientRect();

      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          const emoji = document.createElement('div');
          emoji.textContent = memory.emoji;
          emoji.style.position = 'fixed';
          emoji.style.left = (mr.left + Math.random() * mr.width) + 'px';
          emoji.style.top = (mr.top + Math.random() * mr.height) + 'px';
          emoji.style.fontSize = (Math.random() * 25 + 20) + 'px';
          emoji.style.pointerEvents = 'none';
          emoji.style.zIndex = '1000';
          document.body.appendChild(emoji);

          const animation = emoji.animate([
            { 
              transform: 'scale(0.5) rotate(0deg) translateY(0px)',
              opacity: '1'
            },
            { 
              transform: `scale(2.5) rotate(${Math.random() * 720}deg) translateY(-200px)`,
              opacity: '0'
            }
          ], {
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

// ===== ORIGINAL IMAGES GALLERY =====
const images = [
  { src: 'baby_fero.jpeg', caption: 'أجمل بداية 💖' },
  { src: 'fero_first.jpeg', caption: 'أول صورة منك 😘' },
  { src: 'fero_kiss.jpeg', caption: 'أحلى قبلة 💋' },
  { src: 'fero_sky.jpeg', caption: 'سحر السماء معاك ✨' },
  { src: 'pink_fero.jpeg', caption: 'وردتي الحلوة 🌸' },
  { src: 'sleeping_beauty.jpeg', caption: 'الاميرة النايمة 🌹' }
];

// ===== GET MAIN CONTENT AND GALLERY SECTION ONCE =====
const mainContent = document.querySelector('.main-content');
const gallerySection = document.getElementById('gallery');

// ===== GRADUATION SECTION - MY BABY GRADUATE =====
const gradImages = [
  { src: 'GRAD1.jpeg', caption: '🎓 حبيبتي الخريجة! 💖' },
  { src: 'baby_grad.png', caption: 'كلبوظ خريج 🥹💖' },
  { src: 'GRAD2.jpeg', caption: '🎓 مبروك التخرج يا دكتورة! 👩‍🎓✨' }
  
];

// Create graduation section
const gradSection = document.createElement('section');
gradSection.id = 'graduation-section';
gradSection.style.cssText = `
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #fdf6f0 0%, #f5e6d3 100%);
  border-radius: 20px;
  margin: 2rem 1rem;
  border: 3px solid #c9a84c;
  box-shadow: 0 0 40px rgba(201, 168, 76, 0.2);
  position: relative;
  overflow: hidden;
`;

gradSection.innerHTML = `
  <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; overflow: hidden;">
    <div style="position: absolute; top: 10%; left: 5%; font-size: 3rem; opacity: 0.1;">🎓</div>
    <div style="position: absolute; bottom: 20%; right: 8%; font-size: 4rem; opacity: 0.1;">📜</div>
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 8rem; opacity: 0.03;">⭐</div>
  </div>
  <div style="position: relative; z-index: 1;">
    <h2 style="text-align: center; font-size: 2.2rem; color: #7b3f00; margin-bottom: 0.5rem;">
      🎓 My Baby Graduate 🥹
    </h2>
    <p style="text-align: center; font-size: 1.2rem; color: #8b5a2b; margin-bottom: 2rem; font-style: italic;">
      "So proud of you, my love! You did it! 💖✨"
    </p>
    <p style="text-align: center; font-size: 1rem; color: #a67c52; margin-bottom: 2rem; direction: rtl; font-family: 'Amiri', serif;">
      فخورة بيكي يا حبيبتي! أنتِ نجمة في سمائي 🌟
    </p>
    
<div class="grad-gallery" id="grad-gallery" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; padding: 0.5rem;">    </div>
    
    <div style="text-align: center; margin-top: 2rem; padding: 1rem; background: rgba(201, 168, 76, 0.1); border-radius: 15px; border: 1px dashed #c9a84c;">
      <p style="font-size: 1.1rem; color: #7b3f00; margin: 0;">
        💕 This is just the beginning of your amazing journey! 💕
      </p>
      <p style="font-size: 0.9rem; color: #a67c52; margin: 0.5rem 0 0 0; direction: rtl; font-family: 'Amiri', serif;">
        انتِ تستاهلي كل نجاح في الدنيا يا حبيبتي 🌹
      </p>
    </div>
  </div>
`;

// ===== NINJA SECTION =====
const ninjaSection = document.createElement('section');
ninjaSection.id = 'ninja-section';
ninjaSection.style.cssText = `
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #2c1810 0%, #1a0f0a 100%);
  border-radius: 20px;
  margin: 2rem 1rem;
  border: 3px solid #ffd700;
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.2);
`;

ninjaSection.innerHTML = `
  <h2 style="color: #ffd700; text-align: center; font-size: 2rem;">
    🥷 Ninja Mode Activated! 🥷
  </h2>
  <p style="color: #ffd700; text-align: center; font-size: 1.2rem; margin-bottom: 2rem;">
    "Look like a ninja here, I love it!" 😂❤️
  </p>
  <div class="ninja-container" id="ninja-container" style="display: flex; justify-content: center;">
    <div class="media-item ninja-item" style="max-width: 400px; margin: 0 auto; border: 3px solid #ffd700; border-radius: 15px; overflow: hidden; box-shadow: 0 0 50px rgba(255, 215, 0, 0.3);">
      <img src="${getAssetPath('assets/images/NINJA.png')}" alt="Ninja Fero" style="width: 100%; height: auto; display: block;">
      <div style="background: rgba(0,0,0,0.8); padding: 1rem; text-align: center; color: #ffd700; font-size: 1.2rem; font-weight: bold;">
        🥷 NINJA LOVE 🥷
        <div style="font-size: 0.9rem; color: #ffeb3b; margin-top: 0.5rem;">
          "You're my favorite ninja!" 💕
        </div>
      </div>
    </div>
  </div>
`;

// ===== INSERT SECTIONS IN CORRECT ORDER =====
// 1. Insert Grad section after Gallery
if (gallerySection) {
  mainContent.insertBefore(gradSection, gallerySection.nextSibling);
}

// 2. Insert Ninja section after Grad section
if (gradSection) {
  mainContent.insertBefore(ninjaSection, gradSection.nextSibling);
}

// ===== GENERATE GRAD GALLERY =====
const gradGallery = document.getElementById('grad-gallery');
if (gradGallery) {
  gradImages.forEach((img, index) => {
    const container = document.createElement('div');
    container.className = 'media-item grad-item';
    container.style.cssText = `
    animation: fadeInUp 0.6s ease ${index * 0.2}s both;
    border: 4px solid #c9a84c;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    transition: all 0.4s ease;
    cursor: pointer;
    background: white;
    max-width: 600px;
    margin: 0 auto;
  `;
    
    container.addEventListener('mouseenter', () => {
      container.style.transform = 'scale(1.03) rotate(-1deg)';
      container.style.boxShadow = '0 15px 40px rgba(201, 168, 76, 0.3)';
    });
    container.addEventListener('mouseleave', () => {
      container.style.transform = 'scale(1) rotate(0deg)';
      container.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)';
    });
    
   const imageEl = document.createElement('img');
    imageEl.src = getAssetPath(`assets/images/${img.src}`);
    imageEl.alt = img.caption;
    imageEl.loading = 'lazy';
    imageEl.style.cssText = `
      width: 100%;
      height: auto;
      max-height: 500px;
      object-fit: contain;
      display: block;
      background: #fdf6f0;
      padding: 0.5rem;
`;
    
    const caption = document.createElement('div');
    caption.style.cssText = `
      padding: 1rem;
      text-align: center;
      background: linear-gradient(to bottom, rgba(255,255,255,0.9), white);
      font-size: 1.1rem;
      font-weight: 600;
      color: #7b3f00;
      border-top: 2px solid #c9a84c;
    `;
    caption.textContent = img.caption;
    
    container.appendChild(imageEl);
    container.appendChild(caption);
    
    container.addEventListener('click', () => {
      showEnhancedConfetti();
      const gradEmojis = ['🎓', '🎉', '👩‍🎓', '📜', '⭐', '💖', '🥂', '🎊', '🌟', '✨'];
      const r = container.getBoundingClientRect();
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          const emoji = document.createElement('div');
          emoji.textContent = gradEmojis[Math.floor(Math.random() * gradEmojis.length)];
          emoji.style.position = 'fixed';
          emoji.style.left = (r.left + Math.random() * r.width) + 'px';
          emoji.style.top = (r.top + Math.random() * r.height) + 'px';
          emoji.style.fontSize = (Math.random() * 30 + 20) + 'px';
          emoji.style.pointerEvents = 'none';
          emoji.style.zIndex = '1000';
          document.body.appendChild(emoji);

          const animation = emoji.animate([
            { transform: 'scale(0.5) rotate(0deg) translateY(0px)', opacity: '1' },
            { transform: `scale(2.5) rotate(${Math.random() * 720}deg) translateY(-200px)`, opacity: '0' }
          ], {
            duration: Math.random() * 2000 + 2000,
            easing: 'ease-out'
          });
          animation.onfinish = () => emoji.remove();
        }, i * 100);
      }
    });
    
    gradGallery.appendChild(container);
  });
}

// ===== NINJA CLICK EFFECT =====
const ninjaItem = document.querySelector('.ninja-item');
if (ninjaItem) {
  ninjaItem.addEventListener('click', () => {
    showEnhancedConfetti();
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const star = document.createElement('div');
        const emojis = ['🥷', '⭐', '✨', '💕', '❤️', '🗡️'];
        star.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        star.style.position = 'fixed';
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.top = Math.random() * window.innerHeight + 'px';
        star.style.fontSize = (Math.random() * 30 + 20) + 'px';
        star.style.pointerEvents = 'none';
        star.style.zIndex = '1000';
        document.body.appendChild(star);
        
        const animation = star.animate([
          { transform: 'scale(0) rotate(0deg)', opacity: '1' },
          { transform: `scale(2) rotate(${Math.random() * 720}deg)`, opacity: '0' }
        ], {
          duration: Math.random() * 2000 + 2000,
          easing: 'ease-out'
        });
        animation.onfinish = () => star.remove();
      }, i * 100);
    }
  });
}

// ===== ADD FADE IN ANIMATION =====
if (!document.getElementById('grad-styles')) {
  const style = document.createElement('style');
  style.id = 'grad-styles';
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
}

// ===== RENDER MAIN GALLERY =====
const imagesContainer = document.querySelector('.images-container');
if (imagesContainer) {
  images.forEach((img, index) => {
    const container = document.createElement('div');
    container.className = 'media-item';
    container.style.animationDelay = (index * 0.2) + 's';
    
    const imageEl = document.createElement('img');
    imageEl.src = getAssetPath(`assets/images/${img.src}`);
    imageEl.alt = img.caption;
    imageEl.loading = 'lazy';
    
    const caption = document.createElement('div');
    caption.className = 'media-caption';
    caption.textContent = img.caption;
    
    container.appendChild(imageEl);
    container.appendChild(caption);
    
    container.addEventListener('click', () => {
      showEnhancedConfetti();
      const r = container.getBoundingClientRect();
      createInteractiveHeart(r.left + r.width / 2, r.top + r.height / 2);
    });

    imagesContainer.appendChild(container);
  });
}

// ===== ORIGINAL VIDEOS GALLERY =====
const videos = [
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
    videoEl.src = getAssetPath(`assets/videos/${video.file}`);
    videoEl.controls = true;
    videoEl.preload = 'metadata';
    
    const caption = document.createElement('div');
    caption.className = 'media-caption video-caption';
    caption.innerHTML = `
      <div class="caption-title">${video.emoji} ${video.caption}</div>
      <div class="caption-description">${video.description}</div>
    `;
    
    container.addEventListener('mouseenter', () => {
      const r = container.getBoundingClientRect();
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          createInteractiveHeart(r.left + Math.random() * r.width, r.top + Math.random() * r.height);
        }, i * 100);
      }
    });
    
    container.appendChild(videoEl);
    container.appendChild(caption);
    
    container.addEventListener('click', () => {
      showEnhancedConfetti();
      const cr = container.getBoundingClientRect();

      const specialColors = {
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
          heart.style.left = (cr.left + Math.random() * cr.width) + 'px';
          heart.style.top = (cr.top + Math.random() * cr.height) + 'px';
          heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
          heart.style.pointerEvents = 'none';
          heart.style.zIndex = '1000';
          heart.style.color = colors[Math.floor(Math.random() * colors.length)];
          document.body.appendChild(heart);

          const animation = heart.animate([
            { 
              transform: 'scale(0.5) rotate(0deg) translateY(0px)',
              opacity: '1'
            },
            { 
              transform: `scale(2) rotate(${Math.random() * 360}deg) translateY(-150px)`,
              opacity: '0'
            }
          ], {
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

// ===== INITIALIZE EVERYTHING =====
document.addEventListener('DOMContentLoaded', () => {
  initializeWebsite();
});