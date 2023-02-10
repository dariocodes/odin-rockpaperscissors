let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
let resultEl = document.getElementById("resultEl");
let playerscoreEl = document.getElementById("playerscoreEl");
let computerscoreEl = document.getElementById("computerscoreEl");
const popupContainer = document.getElementById("popupContainer");

// calculate a random number between 1-3 and return rock, paper or scissors
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  switch (choice) {
    case 1:
      computerSelection = "rock";
      break;
    case 2:
      computerSelection = "paper";
      break;
    case 3:
      computerSelection = "scissors";
      break;
  }
}

//get user input
rockButton.addEventListener("click", () => game("rock"));
paperButton.addEventListener("click", () => game("paper"));
scissorsButton.addEventListener("click", () => game("scissors"));

// function to play a round of the game
function playRound(playerSelection) {
  // get computer result
  getComputerChoice();
  // calculate winner
  if (playerSelection === computerSelection) {
    resultEl.innerHTML = `You picked ${playerSelection}, the computer picked ${computerSelection} <br /> It's a tie!`;
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    resultEl.innerHTML = `You picked ${playerSelection}, the computer picked ${computerSelection} <br /> The computer wins this round!🤖`;
    computerScore++;
  } else {
    resultEl.innerHTML = `You picked ${playerSelection}, the computer picked ${computerSelection} <br /> You win this round!🙋‍♂️`;
    playerScore++;
  }
}

//run the game 5 times
function game(playerSelection) {
  playRound(playerSelection);
  playerscoreEl.innerText = playerScore;
  computerscoreEl.innerText = computerScore;
  if (playerScore == 5 || computerScore == 5) {
    calculateWinner();
  }
}

//function to calculate the winner and reset scores
function calculateWinner() {
  if (playerScore == 5) {
    resultEl.innerHTML = "You won!🙋‍♂️";
    popupContainer.innerHTML = `<div id="popup">
    <div>
      <h2>YOU WON! 🎉</h2>
      <p>
        Want to play another game? <br />
        click the button and choose your weapon
      </p>
      <button id="continueBtn">Continue</button>
    </div>
  </div>`;
    const continueButton = document.getElementById("continueBtn");
    continueButton.addEventListener(
      "click",
      () => (popupContainer.innerHTML = "")
    );
  } else if (computerScore == 5) {
    resultEl.innerHTML = "The Computer won!🤖";
    popupContainer.innerHTML = `<div id="popup">
    <div>
      <h2>YOU LOST! 😭</h2>
      <p>
        Want to play another game? <br />
        click the button and choose your weapon
      </p>
      <button id="continueBtn">Continue</button>
    </div>
  </div>`;
    const continueButton = document.getElementById("continueBtn");
    continueButton.addEventListener(
      "click",
      () => (popupContainer.innerHTML = "")
    );
  }
  playerScore = 0;
  computerScore = 0;
}
