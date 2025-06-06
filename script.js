const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
setCanvasSize();

const shapes = ["🌙", "⭐", "✨"];
let confetti = [];

for (let i = 0; i < 100; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    char: shapes[Math.floor(Math.random() * shapes.length)],
    size: Math.random() * 20 + 15,
    speed: Math.random() * 2 + 1,
    opacity: Math.random() * 0.8 + 0.2,
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((c) => {
    ctx.font = `${c.size}px Arial`;
    ctx.textBaseline = "top"; // Fix: make emoji align from top
    ctx.globalAlpha = c.opacity;
    ctx.fillText(c.char, c.x, c.y);
    c.y += c.speed;

    // Reset if it moves out of view
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
