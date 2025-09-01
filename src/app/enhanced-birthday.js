import { createInteractiveHeart, showEnhancedConfetti } from '../enhanced-main';
export function startEnhancedCountdown() {
    const countdownEl = document.getElementById('countdown-display');
    function updateCountdown() {
        const now = new Date();
        const nextBirthday = new Date(now.getFullYear(), 7, 31); // August 31
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
export function typeLoveLetterEnhanced() {
    const messages = [
        "فيرو، إنتِ بتنوري حياتي كل يوم… ✨",
        "كل ضحكة، كل حضن، وكل لحظة معاكِ ساحرة 💖",
        "عيد ميلاد سعيد يا حبيبتي! 🎂✨",
        "إنتِ أجمل هدية في حياتي 🎁💕",
        "معاكِ كل يوم عيد ميلاد جديد 🌟",
        "حبيبتي فيرو، إنتِ كل حاجة حلوة في الدنيا 🌹"
    ];
    const element = document.getElementById('letter-text');
    element.classList.add('arabic-text');
    let messageIndex = 0;
    let isTyping = false;
    function typeMessage() {
        if (isTyping)
            return;
        isTyping = true;
        const message = messages[messageIndex];
        element.textContent = '';
        let charIndex = 0;
        const typeInterval = setInterval(() => {
            element.textContent = message.substring(0, charIndex + 1);
            if (Math.random() < 0.12) {
                createInteractiveHeart(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
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
