//Game code

const rpsval = ['rock', 'paper', 'scissors'];
const computerSelection = '';
const playerSelection = '';
let roundWin = '';
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
  let randval = rpsval[Math.floor(Math.random() * rpsval.length)];
  return randval;
}


function playRound(playerSelection, computerSelection){
  if (playerSelection == computerSelection){
    roundWin = "tie";
  }
  else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection =="rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ){
    playerScore++
    roundWin = "player";
  }
  else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection =="rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    computerScore++
    roundWin = 'computer';
  }
}

function updateScore(){
  if(roundWin == 'tie'){
    rpsMsg.textContent = "It is a tie!";
  } else if (roundWin == 'player'){
    rpsMsg.textContent = "You won!";
  } else if (roundWin == 'computer') {
    rpsMsg.textContent = "You lost!";
  }
  playScore.textContent = playerScore;
  compScore.textContent = computerScore;
}

function gameOver() {
  if(playerScore == 5 || computerScore == 5){
      return true;
    }
  }

  function checkWinner(){
    if (playerScore == 5) {
      rpsMsg.textContent = "You have won the game! Select Rock, Paper, or Scissors to restart game.";
    } else if (computerScore == 5) {
      rpsMsg.textContent = "You have lost the game! Select Rock, Paper, or Scissors to restart game.";
    }
  }

  function gameRestart(){
  playerScore = 0
  computerScore = 0
  rpsMsg.innerHTML = 'Welcome to a game of rock, paper, scissors! <br>Please select one of the options below to begin.';
  playScore.textContent = 0;
  compScore.textContent = 0;
  }

//Links to UI

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const rpsMsg = document.getElementById('rpsMessage');
const compScore = document.getElementById('computerScore');
const playScore = document.getElementById('playerScore');

rockBtn.addEventListener("click", () => clickStart("rock"));
paperBtn.addEventListener("click", () => clickStart("paper"));
scissorsBtn.addEventListener("click", () => clickStart("scissors"));


function clickStart(playerSelection) {
  if(gameOver()){
    gameRestart();
    return
  }
  const computerSelection = computerPlay();
  console.log("You have chosen: " + playerSelection);
  console.log("The computer has chosen: " + computerSelection);
  playRound(playerSelection, computerSelection);
  updateScore();
  checkWinner();

}
