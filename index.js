let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

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

//function to get the player input
function getPlayerChoice() {
  //prompt user for input
  playerSelection = prompt("Please enter your selection:");
  //convert input into string
  playerSelection = playerSelection.toString();
  //convert player input into lowercase
  playerSelection = playerSelection.toLowerCase();
  return playerSelection;
}

// function to play a round of the game
function playRound(playerSelection) {
  // get computer result
  getComputerChoice();
  // calculate winner
  if (playerSelection === computerSelection) {
    console.log("TIE");
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    console.log("computer won");
    computerScore++;
  } else {
    console.log("player won");
    playerScore++;
  }
}

//run the game 5 times
function game() {
  while (playerScore < 5 && computerScore < 5) {
    getPlayerChoice();
    playRound(playerSelection);
  }
  if (playerScore == 5 || computerScore == 5) {
    calculateWinner();
  }
}

//function to calculate the winner and reset scores
function calculateWinner() {
  console.log("done");
  playerScore = 0;
  computerScore = 0;
}
