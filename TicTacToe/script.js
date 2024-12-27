document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll("td");
    const button = document.querySelector("button");
    let turn = 0;
    let gameOver = false; // Track if the game has ended
  
    const checkWinner = () => {
      const winningCombo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (let i = 0; i < winningCombo.length; i++) {
        const [a, b, c] = winningCombo[i];
        if (
          blocks[a].innerHTML &&
          blocks[a].innerHTML === blocks[b].innerHTML &&
          blocks[a].innerHTML === blocks[c].innerHTML
        ) {
          setTimeout(() => {
            alert(`${blocks[a].innerHTML} wins!`);
            handleRestart();
          }, 1000);
          gameOver = true; // Mark game as over
          return;
        }
      }
  
      // Check for tie
      if (Array.from(blocks).every((block) => block.innerHTML !== "")) {
        setTimeout(() => {
          alert("It's a tie!");
          handleRestart();
        }, 1000);
        gameOver = true; // Mark game as over
      }
    };
  
    const handleClickTD = (e) => {
      if (!gameOver && e.target.innerHTML === "") {
        e.target.innerHTML = turn % 2 === 0 ? "X" : "O";
        turn++;
        checkWinner();
      }
    };
  
    const handleRestart = () => {
      blocks.forEach((block) => (block.innerHTML = ""));
      turn = 0;
      gameOver = false; // Reset game status
    };
  
    blocks.forEach((block) => block.addEventListener("click", handleClickTD));
    button.addEventListener("click", handleRestart);
  });
  