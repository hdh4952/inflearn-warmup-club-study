window.onload = function () {
  const game = new Game();
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const result = game.play(index);
      updateContainer(game, result);
    });
  });
};

// 가위: 0, 바위: 1, 보: 2
class Game {
  constructor() {
    this.remainingGuesses = 10;
    this.playerWins = 0;
    this.computerWins = 0;
    this.play = function (playerSelection) {
      this.remainingGuesses--;
      const computerSelection = Math.floor(Math.random() * 3);
      if (playerSelection === computerSelection) return 'draw';
      if (playerSelection === 0 && computerSelection === 2) {
        this.playerWins++;
        return 'win';
      }
      if (playerSelection === 1 && computerSelection === 0) {
        this.playerWins++;
        return 'win';
      }
      if (playerSelection === 2 && computerSelection === 1) {
        this.playerWins++;
        return 'win';
      }
      this.computerWins++;
      return 'lose';
    };
  }
}

function updateContainer(game, result) {
  const playerScore = document.getElementById('player-score');
  playerScore.textContent = game.playerWins;

  const computerScore = document.getElementById('computer-score');
  computerScore.textContent = game.computerWins;

  const remainingGuesses = document.querySelector('#count>div:nth-child(2)');
  remainingGuesses.textContent = `남은 횟수: ${game.remainingGuesses}`;

  const gameResult = document.getElementById('result');
  switch (result) {
    case 'win':
      gameResult.textContent = '플레이어 승리';
      break;
    case 'lose':
      gameResult.textContent = '컴퓨터 승리';
      break;
    case 'draw':
      gameResult.textContent = '무승부';
      break;
  }

  if (game.remainingGuesses === 0) {
    const count = document.getElementById('count');
    count.innerHTML = `<h2>게임 종료!</h2>
    <h2 style="color: red">게임에서 ${game.playerWins < game.computerWins ? '졌습니다.' : '이겼습니다'}</h2>`;

    const btnBar = document.getElementById('btn-bar');
    btnBar.innerHTML = `<button onclick="location.reload()">다시 시작</button>`;

    document.getElementById('result').remove();
    return;
  }
}
