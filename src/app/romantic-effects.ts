// Starry heart / names

// Floating love notes
export function floatingLoveNotes(messages: string[], frequency = 2000) {
  const body = document.body;

  function createNote() {
    const note = document.createElement('div');
    note.textContent = messages[Math.floor(Math.random() * messages.length)];
    note.style.position = 'absolute';
    note.style.fontSize = `${Math.random() * 16 + 14}px`;
    note.style.color = 'white'; // brighter color for visibility
    note.style.textShadow = '2px 2px 4px black'; // subtle shadow to pop
    note.style.background = 'rgba(0,0,0,0.3)'; // semi-transparent background
    note.style.padding = '2px 6px';
    note.style.borderRadius = '5px';
    note.style.left = `${Math.random() * window.innerWidth}px`;
    note.style.top = `${window.innerHeight}px`;
    note.style.opacity = '0.9';
    note.style.pointerEvents = 'none';
    body.appendChild(note);

    note.animate([
      { transform: 'translateY(0px)', opacity: 0.9 },
      { transform: `translateY(-${window.innerHeight + 50}px)`, opacity: 0 }
    ], {
      duration: 4000 + Math.random() * 2000,
      iterations: 1,
      easing: 'ease-out'
    });

    setTimeout(() => note.remove(), 6000);
  }

  setInterval(createNote, frequency);
}

// Cursor trail hearts
export function cursorHearts() {
  document.addEventListener('mousemove', e => {
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.style.position = 'absolute';
    heart.style.left = `${e.pageX}px`;
    heart.style.top = `${e.pageY}px`;
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    heart.style.pointerEvents = 'none';
    heart.style.opacity = '0.8';
    heart.style.textShadow = '1px 1px 2px black'; // make hearts pop on backgrounds
    document.body.appendChild(heart);

    heart.animate([
      { transform: 'translateY(0px) scale(1)', opacity: 0.8 },
      { transform: 'translateY(-50px) scale(1.5)', opacity: 0 }
    ], {
      duration: 1000,
      iterations: 1,
      easing: 'ease-out'
    });

    setTimeout(() => heart.remove(), 1200);
  });
}

// Heart sky with names
export function heartSky(names: string[]) {
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d')!;

  function drawHeart(x: number, y: number, size: number) {
    ctx.fillStyle = 'pink';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
    ctx.bezierCurveTo(x - size, y + size / 2, x, y + size / 1.5, x, y + size);
    ctx.bezierCurveTo(x, y + size / 1.5, x + size, y + size / 2, x + size, y);
    ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
    ctx.fill();
  }

  function animateHeartSky() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < names.length; i++) {
      const x = canvas.width / 2 + Math.sin(Date.now() / 1000 + i) * 100;
      const y = canvas.height / 2 + Math.cos(Date.now() / 1000 + i) * 100;
      drawHeart(x, y, 10 + i * 2);
      ctx.fillStyle = 'white';
      ctx.font = '20px Arial';
      ctx.shadowColor = 'black';
      ctx.shadowBlur = 4;
      ctx.fillText(names[i], x - 15, y - 15);
    }
    requestAnimationFrame(animateHeartSky);
  }

  animateHeartSky();
}
