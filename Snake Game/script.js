document.addEventListener("DOMContentLoaded", () => {
  let currentScore = 0;
  let snakePosition = {
    x: 10,
    y: 9,
  };
  let foodPosition = {
    x: 5,
    y: 6,
  };
  let moves = {
    x: 0,
    y: 0,
  };
  const spawnFood = () => {
    foodPosition.x = Math.floor(Math.random() * 30) + 1;
    foodPosition.y = Math.floor(Math.random() * 30) + 1;
  };
  const gamePlayArea = document.querySelector(".game-play-area");
  const changeDirection = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        moves.x = -1;
        moves.y = 0;
        break;
      case "ArrowRight":
        moves.x = 1;
        moves.y = 0;
        break;
      case "ArrowUp":
        moves.x = 0;
        moves.y = -1;
        break;
      case "ArrowDown":
        moves.x = 0;
        moves.y = 1;
        break;
    }
  };
  const snakeMove = () => {
    snakePosition.x += moves.x;
    snakePosition.y += moves.y;
  };
  const initGame = () => {
    let snakeHTML = `<div class='snake' style="grid-area: ${snakePosition.y} / ${snakePosition.x}" ></div>`;
    let foodHTML = `<div class='food' style="grid-area: ${foodPosition.y} / ${foodPosition.x}" ></div>`;
    gamePlayArea.innerHTML = snakeHTML + foodHTML;
  };
  spawnFood();
  initGame();
  document.addEventListener("keydown", (e) => {
    changeDirection(e);
  });
  setInterval(()=>{
    snakeMove();
    initGame();
  },200)
});
