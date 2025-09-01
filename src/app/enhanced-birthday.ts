// Enhanced Birthday Effects

// Enhanced confetti effect
export function showEnhancedConfetti() {
  const container = document.getElementById('confetti-container');
  if (!container) return;
  
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
  const shapes = ['circle', 'square', 'triangle'];
  
  for (let i = 0; i < 200; i++) {
    const confetti = document.createElement('div');
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    confetti.style.position = 'absolute';
    confetti.style.width = Math.random() * 12 + 5 + 'px';
    confetti.style.height = Math.random() * 12 + 5 + 'px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.opacity = (Math.random() * 0.8 + 0.2).toString();
    
    // Different shapes
    if (shape === 'circle') {
      confetti.style.borderRadius = '50%';
    } else if (shape === 'triangle') {
      confetti.style.width = '0';
      confetti.style.height = '0';
      confetti.style.borderLeft = '6px solid transparent';
      confetti.style.borderRight = '6px solid transparent';
      confetti.style.borderBottom = `12px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
      confetti.style.backgroundColor = 'transparent';
    }
    
    container.appendChild(confetti);

    const animation = confetti.animate([
      { 
        transform: `translateY(0px) rotate(0deg) scale(1)`,
        opacity: confetti.style.opacity
      },
      { 
        transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg) scale(0.5)`,
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
export function createInteractiveHeart(x: number, y: number) {
  const hearts = ['💖', '💕', '💘', '💝', '🌸', '✨'];
  const heart = document.createElement('div');
  
  heart.className = 'interactive-heart';
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
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
export function createFloatingHearts() {
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
    
    // Add some color variation
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

// Enhanced countdown with beautiful display
export function startEnhancedCountdown() {
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

// Original confetti function (enhanced)
export function showConfetti() {
  showEnhancedConfetti();
}

// Original floating hearts function (enhanced)  
export function floatingHearts() {
  createInteractiveHeart(
    Math.random() * window.innerWidth,
    Math.random() * window.innerHeight
  );
}

// Enhanced typing animation for love letters with hearts
export function typeLoveLetter(messages: string[], elementId: string, delay = 100) {
  const el = document.getElementById(elementId);
  if (!el) return;
  
  let msgIndex = 0;

  function typeMessage() {
    const message = messages[msgIndex];
    let charIndex = 0;
    el.textContent = '';

    const typingInterval = setInterval(() => {
      el.textContent += message[charIndex];

      // Randomly spawn magical hearts while typing
      if (Math.random() < 0.2) {
        createInteractiveHeart(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        );
      }

      charIndex++;

      if (charIndex === message.length) {
        clearInterval(typingInterval);
        msgIndex++;
        if (msgIndex < messages.length) {
          setTimeout(typeMessage, 1500); // wait 1.5s then next message
        }
      }
    }, delay);
  }

  typeMessage();
}