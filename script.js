let score = 0;
let jumping = false;

const gameArea = document.getElementById('gameArea');
const player = document.getElementById('player');
const scoreDisplay = document.getElementById('score');

// Funktion zum Spieler-Sprung
document.addEventListener('keydown', () => {
  if (!jumping) {
    jumping = true;
    player.style.transition = 'bottom 0.5s';
    player.style.bottom = '120px';

    setTimeout(() => {
      player.style.bottom = '20px';
      jumping = false;
    }, 500);
  }
});

// Hindernisse zufällig spawnen
function spawnObstacle() {
  const obstacle = document.createElement('div');
  obstacle.classList.add('obstacle');
  obstacle.style.left = '100%';
  gameArea.appendChild(obstacle);

  // Bewegung und Kollision prüfen
  const obstacleInterval = setInterval(() => {
    const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    const playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));

    // Wenn das Hindernis den Spieler erreicht
    if (obstacleLeft < 100 && obstacleLeft > 50 && playerBottom < 70) {
      alert(`Game Over! Your Score: ${score}`);
      score = 0;
      scoreDisplay.textContent = 'Score: 0';
      gameArea.innerHTML = '<div id="player"></div>'; // Reset
      clearInterval(obstacleInterval);
    } else if (obstacleLeft < -50) {
      obstacle.remove();
      clearInterval(obstacleInterval);
    }
  }, 50);

  // Score erhöhen
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
}

// Hindernisse in Intervallen erzeugen
setInterval(spawnObstacle, 2000);

