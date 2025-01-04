document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("game-board");
  const startBtn = document.getElementById("start-btn");
  const stopBtn = document.getElementById("stop-btn");
  const movesDisplay = document.getElementById("move-value");
  const scoreBoard = document.getElementById("score-board");
  const cells = document.querySelectorAll("td");
  const iconArray = [
    "🍎",
    "🍎",
    "🍌",
    "🍌",
    "🍇",
    "🍇",
    "🍉",
    "🍉",
    "🍒",
    "🍒",
    "🍓",
    "🍓",
    "🥝",
    "🥝",
    "🍍",
    "🍍",
  ];
  let recentPair = [];
  let randomArray = [];
  let firstElement = null;
  let moves = 0;
  let isProcessing = false;
  let cellLeft = 16;
  const handleStart = () => {
    handleStop();
    gameBoard.style.display = "";
    startBtn.style.display = "none";
    scoreBoard.style.display = "none";
    randomArray = shuffleArray([...iconArray]);
    handleClickCard();
  };
  const handleStop = () =>{
    cells.forEach(cell=>cell.innerHTML='?');
    cellLeft = 16;
    moves = 0;
    movesDisplay.textContent = `${moves}`;
    randomArray = shuffleArray([...iconArray]);
  }
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const index = Math.floor(Math.random() * (i + 1));
      [array[i], array[index]] = [array[index], array[i]];
    }
    return array;
  };

  const handleClickCard = () => {
    if (cells.length !== iconArray.length) return;

    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => {
        if (isProcessing || cell.innerHTML !== "?") return;

        cell.innerHTML = `${randomArray[index]}`;

        if (recentPair.length === 0) {
          recentPair.push(randomArray[index]);
          firstElement = cell;
        } else if (recentPair.length === 1) {
          recentPair.push(randomArray[index]);
          isProcessing = true;

          if (recentPair[0] === recentPair[1]) {
            recentPair = [];
            isProcessing = false;
            cellLeft = cellLeft - 2;
          } else {
            setTimeout(() => {
              if (firstElement) firstElement.innerHTML = "?";
              if (cell) cell.innerHTML = "?";
              recentPair = [];
              isProcessing = false;
              firstElement = null;
            }, 500);
          }

          moves++;
          movesDisplay.textContent = `${moves}`;
        }
        checkWin();
      });
    });
  };
  const checkWin = () => {
    if (cellLeft === 0) {
      gameBoard.style.display = "none";
      startBtn.style.display = "";
      scoreBoard.style.display = "";
      scoreBoard.innerHTML = `
            <p>You won!</p>
            <p>Your moves: ${moves}!</p>
            `;
    }
  };
  startBtn.addEventListener("click", handleStart);
  stopBtn.addEventListener("click", handleStop);
});
