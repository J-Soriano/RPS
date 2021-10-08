
const rpsval = ['rock', 'paper', 'scissors'];
let computerSelection = ''; //computerPlay()
let playerSelection = ''; //playerPrompt()
let gameStat = '';
let gameFinP = 0;
let gameFinC = 0;
let gameCount = 0;



function computerPlay() {
  let randval = rpsval[Math.floor(Math.random() * rpsval.length)];
  computerSelection = randval;
}

function playerPrompt() {
  let inp1 = prompt ("What is your choice? (Rock, Paper, Scissors) \nYou may hit cancel to exit the game.");
  if (inp1 === ''){
    alert ('Please enter a choice. (Rock, Paper, Scissors)');
    playerPrompt();
  } else if (inp1 === null || inp1 == "exit"){
    console.log("You have left the game.");
    //let gameStat = "end"; Why can't I assign value directly to gamestat?
    let arp1 = "end"
    gameStat = arp1;
    return false;
  } else {
    inp1 = inp1.toLowerCase();
    if (inp1 == "rock" || inp1 == "paper" || inp1 == "scissors"){
        console.log("              \nStart Round: ");
        console.log("You have chosen " + inp1 + ".");
        console.log("The computer has chosen " + computerSelection + ".");
        playerSelection = inp1;
      } else{
          console.log("You did not choose rock, paper, or scissors.");
          return false;
        }
  }
  }
//Function for one round of RPS
function playRound(){
  //console.log("test func for player: " + playerSelection);
  //console.log("test func for computer: " + computerSelection);
  computerPlay();
  if (playerPrompt() != false){
    if (playerSelection == computerSelection){
        console.log("We have a tie!");
        gameCount++;
        } else if (playerSelection=="rock" && computerSelection=="scissors" || playerSelection=="paper" && computerSelection=="rock" || playerSelection=="scissors" && computerSelection=="paper"){
          console.log("You have won this round!");
          gameFinP++;
          gameCount++;
        } else {
          console.log("You have lost this round!");
          gameFinC++;
          gameCount++;
        }
      }
  }


//Function to play a game of Rock, paper, scissors
function playGame(){
  for (i = 1; i < 20; i++) {
    if (gameStat == "end"){
    break;

  } else if (gameFinP == 3){
    console.log("You have won the game!");
    break;
  } else if (gameFinC == 3){
    console.log("You have lost the game!");
    break;
  } else if (gameCount == 5 && gameFinP > gameFinC){
    console.log("You have won the game!");
    break;
  } else if (gameCount == 5 && gameFinC > gameFinP){
    console.log("You have lost the game!");
    break;
  } else if (gameCount == 5 && gameFinP == gameFinC){
    console.log("The game is a Tie!");
    break;
  } else {
    playRound();
    //console.log("This is games won by computer: " +gameFinC);
    //console.log("This is games won by you: " + gameFinP);
    //console.log("This is total amount of games: " + gameCount);
  }
  }
}

playGame();
