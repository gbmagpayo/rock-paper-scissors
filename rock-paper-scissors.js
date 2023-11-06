function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerWinText = `You Win! ${playerSelection} beats ${computerSelection}`;
  playerLoseText = `You Lose! ${computerSelection} beats ${playerSelection}`;
  playerDrawText = `Draw! Both players chose ${playerSelection}`;

  if (playerSelection === computerSelection) {
    return playerDrawText;
  }

  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return playerLoseText;
  } else {
    return playerWinText;
  }
}

function getPlayerChoice() {
  const playerChoice = prompt("Rock, Paper, Scissors");
  return playerChoice.toLowerCase();
}

function game() {
  let gameRounds = 0;
  let playerScore = 0;
  let computerScore = 0;

  while (gameRounds != 5) {
    console.log(`Round ${gameRounds + 1}`);
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const roundResultText = playRound(playerSelection, computerSelection);
    if (roundResultText.includes("Win")) {
      playerScore++;
    }
    if (roundResultText.includes("Lose")) {
      computerScore++;
    }
    console.log(roundResultText);
    console.log(`Player Score: ${playerScore} Computer Score ${computerScore}`);
    gameRounds++;
  }

  if (playerScore > computerScore) {
    console.log("Player Wins!");
  } else if (playerScore < computerScore) {
    console.log("Computer Wins!");
  } else {
    console.log("Draw!");
  }
}

game();
