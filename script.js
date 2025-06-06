const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

// Resize canvas
function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
setCanvasSize();

// 🌙 Emoji confetti
const shapes = ["🌙", "⭐", "🐄", "🐮"];
let confetti = [];

// Detect if on mobile
const isMobile = window.innerWidth <= 768;
const CONFETTI_COUNT = isMobile ? 30 : 100;

for (let i = 0; i < CONFETTI_COUNT; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    char: shapes[Math.floor(Math.random() * shapes.length)],
    size: Math.random() * 20 + 15,
    speed: Math.random() * 1.5 + 0.5, // slower on mobile
    opacity: Math.random() * 0.8 + 0.2,
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((c) => {
    ctx.font = `${c.size}px Arial`;
    ctx.textBaseline = "top";
    ctx.globalAlpha = c.opacity;
    ctx.fillText(c.char, c.x, c.y);
    c.y += c.speed;

    if (c.y > canvas.height) {
      c.y = -30;
      c.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawConfetti);
}

drawConfetti();

window.addEventListener("resize", () => {
  setCanvasSize();
});
