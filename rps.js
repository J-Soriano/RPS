//Game code

const rpsval = ['rock', 'paper', 'scissors'];
const computerSelection = '';
const playerSelection = '';
let roundWin = '';
let playerScore = 0;
let computerScore = 0;

//random value for computer selection
function computerPlay() {
  let randval = rpsval[Math.floor(Math.random() * rpsval.length)];
  return randval;
}

//Function to determine who reaches 5 poitns first
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
//Tells player whether the won the round or not
function updateScore(playerSelection, computerSelection){
  if(roundWin == 'tie'){
    rpsMsg.textContent = "It is a tie!";
    rpsSelection.innerHTML = "You chose: "+ playerSelection + "<br>The computer chose: " +computerSelection;
  } else if (roundWin == 'player'){
    rpsMsg.textContent = "You won!";
    rpsSelection.innerHTML = "You chose: "+ playerSelection + "<br>The computer chose: " +computerSelection;
  } else if (roundWin == 'computer') {
    rpsMsg.textContent = "You lost!";
    rpsSelection.innerHTML = "You chose: "+ playerSelection + "<br>The computer chose: " +computerSelection;

  }
  playScore.textContent = playerScore;
  compScore.textContent = computerScore;
  console.log(playerSelection+ "test");
}
//Determines whether the game is over
function gameOver() {
  if(playerScore == 5 || computerScore == 5){
      return true;
    }
  }
//Displays who won the whole game
  function checkWinner(){
    if (playerScore == 5) {
      rpsMsg.textContent = "You have won the game! Select Rock, Paper, or Scissors to restart game.";
    } else if (computerScore == 5) {
      rpsMsg.textContent = "You have lost the game! Select Rock, Paper, or Scissors to restart game.";
    }
  }
//Restart function so that the player can continue playing
  function gameRestart(){
  playerScore = 0
  computerScore = 0
  rpsMsg.innerHTML = 'Welcome to a game of rock, paper, scissors! <br>Please select one of the options below to begin.';
  playScore.textContent = 0;
  compScore.textContent = 0;
  rpsSelection.innerHTML = '';
  }

//Links to UI
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const rpsMsg = document.getElementById('rpsMessage');
const compScore = document.getElementById('computerScore');
const playScore = document.getElementById('playerScore');
const rpsSelection = document.getElementById('rpsSelection');

rockBtn.addEventListener("click", () => clickStart("rock"));
paperBtn.addEventListener("click", () => clickStart("paper"));
scissorsBtn.addEventListener("click", () => clickStart("scissors"));

//Starts the game of Rock, Paper, Scissors
function clickStart(playerSelection) {
  if(gameOver()){
    gameRestart();
    return
  }
  const computerSelection = computerPlay();
  console.log("You have chosen: " + playerSelection);
  console.log("The computer has chosen: " + computerSelection);
  playRound(playerSelection, computerSelection);
  updateScore(playerSelection, computerSelection);
  checkWinner();

}
