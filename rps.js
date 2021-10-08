
const rpsval = ['rock', 'paper', 'scissors'];
let computerSelection = ''; //computerPlay()
let playerSelection = ''; //playerPrompt()
let gameStat = '';
//let gameFinP = 0;
//let gameFinC = 0;



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
    //let gameStat = "end";
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

function playRound(){
  //console.log("test func for player: " + playerSelection);
  //console.log("test func for computer: " + computerSelection);
  computerPlay();
  if (playerPrompt() != false){
    if (playerSelection == computerSelection){
        console.log("We have a tie!");
        } else if (playerSelection=="rock" && computerSelection=="scissors" || playerSelection=="paper" && computerSelection=="rock" || playerSelection=="scissors" && computerSelection=="paper"){
          console.log("You have won this round!");
          //gameFinP++;
        } else {
          console.log("You have lost this round!");
          //gameFinC++;
        }
      }
  }

function playGame(){
    for (i = 1; i < 4; i++) {
    if (gameStat != "end"){
      console.log(i);
      playRound();
    } else if (gameStat = "end") {
        break;
  }
}
}

playGame();


/*

function playGame(){
    for (i = 1; i < 6; i++) {
    if (gameStat != "end" && gameFinC !=3 && gameFinP !=3){
      playRound();
    } else if (gameStat = "end") {
        break;
    } else if (gameFinC = 3){
        console.log("You have lost the game!");
    } else if (gameFinP = 3) {
        console.log("You have won the game!");
    }
  }
}


*/

/*if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
    console.log("You have chosen " + playerSelection + ".");
    console.log("The computer has chosen " + computerSelection + ".");
    console.log(playGame());
    } else {
      console.log("You did not choose rock, paper, or scissors.");
    }


    function playGame(){
      for (i = 1; i < 3; i++) {
      console.log(i);
      console.log("Round Start.");
      playRound();
      console.log("Round End.");
      }
    }

    if (playerSelection == computerSelection){
        console.log("We have a tie!");
        } else if (playerSelection=="rock" && computerSelection=="scissors" || playerSelection=="paper" && computerSelection=="rock" || playerSelection=="scissors" && computerSelection=="paper"){
          console.log("You have won this round!");
        } else {
          console.log("You have lost this round!");
        }
      }





    */
