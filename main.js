function getComputerChoice(){
  let choice = ['ROCK', 'PAPER', 'SCISSORS'];
  let random = Math.floor(Math.random() * choice.length);
  return choice[random];
}

function getPlayerChoice(){
  let p = prompt("Enter: ");
  let playerChoice = p.toUpperCase();

  return playerChoice;
}

function playRound(playerSelection, computerSelection){
  if (playerSelection === computerSelection){
    return "Tie!";
  }

  if (playerSelection === "ROCK"){
    if (computerSelection === "PAPER"){
      return false;
    }
  }

  if (playerSelection === "ROCK"){
    if (computerSelection === "SCISSORS"){
      return true;
    }
  }

  if (playerSelection === "SCISSORS"){
    if (computerSelection === "PAPER"){
      return true;
    }
  }

  if (playerSelection === "SCISSORS"){
    if (computerSelection === "ROCK"){
      return false;
    }
  }

  if (playerSelection === "PAPER"){
    if (computerSelection === "ROCK"){
      return true;
    }
  }

  if (playerSelection === "PAPER"){
    if (computerSelection === "SCISSORS"){
      return false;
    }
  }
}

function playGame(){
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++){
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    if (playRound(playerSelection, computerSelection) === true){
      console.log("You Win! " + playerSelection + " Beats " + computerSelection);
      playerScore++;
    }
    else if (playRound(playerSelection, computerSelection) === false){
      console.log("You Lose! " + computerSelection + " Beats " + playerSelection);
      computerScore++;
    }
    else{
      console.log("Tie!");
    }
  }

  if (playerScore > computerScore){
    console.log("You Win!");
  }
  else if (playerScore < computerScore){
    console.log("You Lose!");
  }
  else if (playerScore == computerScore)
    console.log("Tie!");

  console.log(playerScore);
  console.log(computerScore);
}

playGame();