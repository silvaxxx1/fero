import {
  createInteractiveHeart,
  showEnhancedConfetti
} from './enhanced-main';

/**
 * Setup mouse interaction effects (hearts on mousemove & click)
 */
export function setupMouseEffects(): void {
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

/**
 * Setup the surprise button, gift box, and surprise message interactions
 */
export function setupSurprise(): void {
  const surpriseBtn = document.getElementById('surprise-btn') as HTMLButtonElement | null;
  const giftBox = document.getElementById('gift-box')!;
  const surpriseMessage = document.getElementById('surprise-message')!;

  if (!surpriseBtn) {
    console.error('Surprise button not found!');
    return;
  }

  function activateSurprise(): void {
    // Non-null assertions ensure TypeScript knows these elements exist
    surpriseMessage!.style.display = 'block';
    showEnhancedConfetti();

    // Spawn random hearts
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        createInteractiveHeart(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        );
      }, i * 150);
    }

    // Safely update button text
    if (surpriseBtn!.textContent?.includes('Special Surprise')) {
      surpriseBtn!.textContent = '🌟 More Magic!';
    }
  }

  surpriseBtn.addEventListener('click', activateSurprise);
  giftBox.addEventListener('click', activateSurprise);
}
