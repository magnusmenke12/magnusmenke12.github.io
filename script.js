let score = 0;
let jumping = false;

document.addEventListener('keydown', () => {
  if (!jumping) {
    jumping = true;
    const player = document.getElementById('player');
    player.style.transition = 'bottom 0.3s';
    player.style.bottom = '100px';

    setTimeout(() => {
      player.style.bottom = '20px';
      jumping = false;
    }, 300);
  }
});

setInterval(() => {
  const player = document.getElementById('player');
  const obstacle = document.getElementById('obstacle');

  const playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));
  const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

  if (obstacleLeft < 100 && obstacleLeft > 50 && playerBottom < 70) {
    alert('Game Over! Your Score: ' + score);
    score = 0;
    document.getElementById('score').textContent = 'Score: 0';
  } else if (obstacleLeft < 50) {
    score++;
    document.getElementById('score').textContent = 'Score: ' + score;
  }
}, 50);

