// Enhanced Features Module
import { createInteractiveHeart, showEnhancedConfetti } from './enhanced-birthday';

// Enhanced love letter typing with effects
export function typeLoveLetterEnhanced() {
  const messages = [
    "فيرو، إنتي بتنوري حياتي كل يوم… ✨",
    "كل ضحكة، كل حضن، وكل لحظة معاكِ ساحرة 💖",
    "عيد ميلاد سعيد يا حبيبتي! 🎂✨",
    "إنتي أجمل هدية في حياتي 🎁💕",
    "معاكِ كل يوم عيد ميلاد جديد 🌟",
    "حبيبتي فيرو، إنتي كل حاجة حلوة في الدنيا 🌹",
    "عيونك بتحكيلي حكايات ما تخلصش 👀💫"
  ];
  
  const element = document.getElementById('letter-text');
  if (!element) return;
  
  let messageIndex = 0;
  
  function typeMessage() {
    const message = messages[messageIndex];
    element.textContent = '';
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      element.textContent += message[charIndex];
      
      // Add sparkle effect while typing
      if (Math.random() < 0.15) {
        createInteractiveHeart(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        );
      }
      
      charIndex++;
      if (charIndex >= message.length) {
        clearInterval(typeInterval);
        messageIndex = (messageIndex + 1) % messages.length;
        setTimeout(typeMessage, 3500);
      }
    }, 120);
  }
  
  typeMessage();
}

// Enhanced gallery with placeholder and real images support
export function createEnhancedGallery() {
  // This function can be used for additional gallery features
  // The main gallery is handled in enhanced-main.ts
  const gallery = document.getElementById('images-container');
  if (!gallery) return;
  
  // Add gallery interaction effects
  gallery.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
      // Create heart burst effect
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          createInteractiveHeart(
            e.clientX + (Math.random() - 0.5) * 100,
            e.clientY + (Math.random() - 0.5) * 100
          );
        }, i * 100);
      }
    }
  });
}

// Audio controls with enhanced feedback
export function setupAudioControls() {
  const playBtn = document.getElementById('play-music');
  const pauseBtn = document.getElementById('pause-music');
  
  if (!playBtn || !pauseBtn) return;
  
  // Enhanced play button effects
  playBtn.addEventListener('click', () => {
    // Button animation
    playBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      playBtn.style.transform = 'scale(1)';
    }, 150);
    
    // Create musical notes effect
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const note = document.createElement('div');
        note.textContent = '🎵';
        note.style.position = 'fixed';
        note.style.left = playBtn.offsetLeft + playBtn.offsetWidth / 2 + 'px';
        note.style.top = playBtn.offsetTop + 'px';
        note.style.fontSize = '20px';
        note.style.pointerEvents = 'none';
        note.style.zIndex = '1000';
        document.body.appendChild(note);
        
        note.animate([
          { 
            transform: 'translateY(0px) rotate(0deg)', 
            opacity: 1 
          },
          { 
            transform: `translateY(-80px) rotate(${Math.random() * 360}deg)`, 
            opacity: 0 
          }
        ], {
          duration: 2000,
          easing: 'ease-out'
        }).onfinish = () => note.remove();
      }, i * 200);
    }
    
    // Visual feedback heart
    createInteractiveHeart(
      playBtn.offsetLeft + playBtn.offsetWidth / 2,
      playBtn.offsetTop + playBtn.offsetHeight / 2
    );
  });
  
  // Enhanced pause button effects
  pauseBtn.addEventListener('click', () => {
    pauseBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      pauseBtn.style.transform = 'scale(1)';
    }, 150);
  });
}

// Special surprise functionality
export function setupSurprise() {
  const surpriseBtn = document.getElementById('surprise-btn');
  const giftBox = document.getElementById('gift-box');
  const surpriseMessage = document.getElementById('surprise-message');
  
  if (!surpriseBtn || !giftBox || !surpriseMessage) return;
  
  function activateSurprise() {
    // Show surprise message
    surpriseMessage.style.display = 'block';
    
    // Confetti explosion
    showEnhancedConfetti();
    
    // Create heart shower
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        createInteractiveHeart(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        );
      }, i * 150);
    }
    
    // Add special glow effect to gift box
    giftBox.style.boxShadow = '0 0 30px #ff69b4, 0 0 50px #ff1493';
    giftBox.style.animation = 'none';
    
    setTimeout(() => {
      giftBox.style.boxShadow = '';
      giftBox.style.animation = '';
    }, 3000);
    
    // Change surprise button text
    if (surpriseBtn.textContent?.includes('Special Surprise')) {
      surpriseBtn.textContent = '🌟 More Magic!';
    }
  }
  
  surpriseBtn.addEventListener('click', activateSurprise);
  giftBox.addEventListener('click', activateSurprise);
}

// Mouse interaction effects
export function setupMouseEffects() {
  let heartTrail: number[] = [];
  let isMouseMoving = false;
  
  // Mouse trail hearts
  document.addEventListener('mousemove', (e) => {
    isMouseMoving = true;
    
    // Occasional heart trail
    if (Math.random() < 0.08) {
      createInteractiveHeart(e.clientX, e.clientY);
    }
    
    // Reset mouse moving flag after delay
    clearTimeout(heartTrail[0]);
    heartTrail[0] = window.setTimeout(() => {
      isMouseMoving = false;
    }, 100);
  });
  
  // Click effects
  document.addEventListener('click', (e) => {
    // Create multiple hearts on click
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        createInteractiveHeart(
          e.clientX + (Math.random() - 0.5) * 50,
          e.clientY + (Math.random() - 0.5) * 50
        );
      }, i * 100);
    }
  });
  
  // Scroll effects
  let scrollTimeout: number;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = window.setTimeout(() => {
      // Create hearts during scroll
      if (Math.random() < 0.3) {
        createInteractiveHeart(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        );
      }
    }, 100);
  });
  
  // Touch effects for mobile
  document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    if (touch) {
      createInteractiveHeart(touch.clientX, touch.clientY);
    }
  });
}

// Additional utility functions
export function createPulsingEffect(element: HTMLElement) {
  element.style.animation = 'cardPulse 2s ease-in-out infinite';
}

export function createGlowEffect(element: HTMLElement, color: string = '#ff69b4') {
  element.style.boxShadow = `0 0 20px ${color}, 0 0 40px ${color}`;
  setTimeout(() => {
    element.style.boxShadow = '';
  }, 2000);
}

export function createFloatingText(text: string, x: number, y: number) {
  const textEl = document.createElement('div');
  textEl.textContent = text;
  textEl.style.position = 'fixed';
  textEl.style.left = x + 'px';
  textEl.style.top = y + 'px';
  textEl.style.color = '#ff69b4';
  textEl.style.fontWeight = 'bold';
  textEl.style.fontSize = '18px';
  textEl.style.pointerEvents = 'none';
  textEl.style.zIndex = '1000';
  textEl.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
  document.body.appendChild(textEl);
  
  textEl.animate([
    { 
      transform: 'translateY(0px)', 
      opacity: 1 
    },
    { 
      transform: 'translateY(-100px)', 
      opacity: 0 
    }
  ], {
    duration: 2000,
    easing: 'ease-out'
  }).onfinish = () => textEl.remove();
}