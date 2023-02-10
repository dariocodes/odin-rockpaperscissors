let computerSelection;
let playerSelection;
let playerScore;
let computerScore;

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
  } else {
    console.log("player won");
  }
}

//run the game 5 times
function game() {
  for (i = 0; i < 5; i++) {
    if (i < 5) {
      getPlayerChoice();
      playRound(playerSelection);
    } else {
      console.log("done");
    }
  }
}
