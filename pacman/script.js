// script.js

const canvas = document.getElementById('pacmanCanvas');
const ctx = canvas.getContext('2d');

// Pac-Man properties
let pacman = {
  x: 200,
  y: 200,
  radius: 20,
  mouth: {
    open: true,
    angle: 0
  },
  speed: 5,
  direction: 0 // 0: right, 1: down, 2: left, 3: up
};

// Game loop
function gameLoop() {
  clearCanvas();
  drawPacman();
  updatePacman();
  requestAnimationFrame(gameLoop);
}

// Clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Draw Pac-Man
function drawPacman() {
  ctx.beginPath();
  ctx.arc(pacman.x, pacman.y, pacman.radius, pacman.mouth.angle * Math.PI, (2 - pacman.mouth.angle) * Math.PI);
  ctx.lineTo(pacman.x, pacman.y);
  ctx.fillStyle = '#FFFF00';
  ctx.fill();
  ctx.closePath();
}

// Update Pac-Man's position and mouth animation
function updatePacman() {
  // Update Pac-Man's mouth animation
  if (pacman.mouth.open) {
    pacman.mouth.angle += 0.1;
    if (pacman.mouth.angle >= 0.5) {
      pacman.mouth.open = false;
    }
  } else {
    pacman.mouth.angle -= 0.1;
    if (pacman.mouth.angle <= 0) {
      pacman.mouth.open = true;
    }
  }

  // Move Pac-Man
  switch (pacman.direction) {
    case 0: // right
      pacman.x += pacman.speed;
      break;
    case 1: // down
      pacman.y += pacman.speed;
      break;
    case 2: // left
      pacman.x -= pacman.speed;
      break;
    case 3: // up
      pacman.y -= pacman.speed;
      break;
  }

  // Boundary detection (wrap Pac-Man around the canvas)
  if (pacman.x > canvas.width) {
    pacman.x = -pacman.radius;
  } else if (pacman.x < -pacman.radius) {
    pacman.x = canvas.width;
  }
  if (pacman.y > canvas.height) {
    pacman.y = -pacman.radius;
  } else if (pacman.y < -pacman.radius) {
    pacman.y = canvas.height;
  }
}

// Event listener for arrow keys to change Pac-Man's direction
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    pacman.direction = 0; // right
  } else if (event.key === 'ArrowDown') {
    pacman.direction = 1; // down
  } else if (event.key === 'ArrowLeft') {
    pacman.direction = 2; // left
  } else if (event.key === 'ArrowUp') {
    pacman.direction = 3; // up
  }
});

// Start the game loop
gameLoop();
