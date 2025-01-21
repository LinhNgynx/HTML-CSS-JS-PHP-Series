document.addEventListener("DOMContentLoaded", () => {
  let currentScore = 0;
  let highScore = localStorage.getItem("highScore") || 0;
  let isRunning = false;
  const resumeContinueBtn = document.querySelector(".resume-continue");
  const handleResumeContinue = (e) => {
    if (e.target.innerHTML === "Resume") {
      isRunning = false;
      e.target.innerHTML = "Continue";
    } else if (e.target.innerHTML === "Continue") {
      isRunning = true;
      e.target.innerHTML = "Resume";
    }
  };
  resumeContinueBtn.addEventListener("click", (e) => handleResumeContinue(e));
  const updateScore = () => {
    document.querySelector(".score-board").innerHTML = `
    <span>Score: ${currentScore}</span>
    <span>High Score: ${highScore}</span>`;
  };
  let snakeBody = [
    {
      x: 10,
      y: 9,
    },
  ];
  let foodPosition = {
    x: 5,
    y: 6,
  };
  let moves = {
    x: 0,
    y: 0,
  };
  const spawnFood = () => {
    let newFoodPosition;
    do {
      newFoodPosition = {
        x: Math.floor(Math.random() * 30) + 1,
        y: Math.floor(Math.random() * 30) + 1,
      };
    } while (
      snakeBody.some(
        (segment) =>
          segment.x === newFoodPosition.x && segment.y === newFoodPosition.y
      )
    );
    foodPosition = newFoodPosition;
  };
  const handleEating = () => {
    if (
      snakeBody[0].x === foodPosition.x &&
      snakeBody[0].y === foodPosition.y
    ) {
      currentScore++;
      if (currentScore > highScore) {
        highScore = currentScore;
        localStorage.setItem("highScore", highScore);
      }
      spawnFood();
      snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
      updateScore();
    }
  };
  const checkCollision = () => {
    if (
      snakeBody[0].x < 1 ||
      snakeBody[0].x > 30 ||
      snakeBody[0].y < 1 ||
      snakeBody[0].y > 30 ||
      snakeBody
        .slice(1)
        .some(
          (segment) =>
            segment.x === snakeBody[0].x && segment.y === snakeBody[0].y
        )
    ) {
      alert("U lose");
      restartGame();
    }
  };
  const gamePlayArea = document.querySelector(".game-play-area");
  const changeDirection = (e) => {
    if (!isRunning) return;
    switch (e.key) {
      case "ArrowLeft":
        if (moves.x === 1) return;
        moves.x = -1;
        moves.y = 0;
        break;
      case "ArrowRight":
        if (moves.x === -1) return;
        moves.x = 1;
        moves.y = 0;
        break;
      case "ArrowUp":
        if (moves.y === 1) return;
        moves.x = 0;
        moves.y = -1;
        break;
      case "ArrowDown":
        if (moves.y === -1) return;
        moves.x = 0;
        moves.y = 1;
        break;
    }
  };
  const snakeMove = () => {
    let newHead = {
      x: snakeBody[0].x + moves.x,
      y: snakeBody[0].y + moves.y,
    };
    snakeBody.unshift(newHead);
    snakeBody.pop();
    checkCollision();
  };
  const restartGame = () => {
    isRunning = false;
    currentScore = 0;
    updateScore();
    moves.x = 0;
    moves.y = 0;
    snakeBody = [
      {
        x: 10,
        y: 9,
      },
    ];
    spawnFood();
    let snakeHTML = snakeBody
      .map(
        (segment) =>
          `<div class='snake' style="grid-area: ${segment.y} / ${segment.x}"></div>`
      )
      .join("");

    let foodHTML = `<div class='food' style="grid-area: ${foodPosition.y} / ${foodPosition.x}" ></div>`;
    gamePlayArea.innerHTML = snakeHTML + foodHTML;
  };
  const initGame = () => {
    let snakeHTML = snakeBody
      .map(
        (segment) =>
          `<div class='snake' style="grid-area: ${segment.y} / ${segment.x}"></div>`
      )
      .join("");
    let foodHTML = `<div class='food' style="grid-area: ${foodPosition.y} / ${foodPosition.x}" ></div>`;
    gamePlayArea.innerHTML = snakeHTML + foodHTML;
  };

  spawnFood();
  initGame();
  document.addEventListener("keydown", (e) => {
    changeDirection(e);
    isRunning = true;
    resumeContinueBtn.innerHTML='Resume';
  });
    setInterval(() => {
      if (isRunning){
      snakeMove();
      initGame();
      handleEating();
      }
    }, 150);
  
});
