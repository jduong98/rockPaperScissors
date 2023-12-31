function getComputerChoice() {
    array = ["Rock", "Paper", "Scissors"]
    return comChoice = array[Math.floor(Math.random() * array.length)]
}

//function takes in choices and returns a value based on who won
function playRound(playerChoice, computerChoice) {
  // 0 means draw
  // 1 means player wins
  // 2 means computer wins
  
  switch (playerChoice) {
      case computerChoice:
        // return "Draw!";
        return 0;
      case "Rock":
        if (computerChoice === "Paper") {
          // return "Computer wins";
          return 2;
        } else if (computerChoice === "Scissors") {
          // return "Player wins";
          return 1;
        }
        break;


      case "Paper":
        if (computerChoice === "Rock") {
          // return "Player wins";
          return 1;
        } else if (computerChoice === "Scissors") {
          // return "Computer wins";
          return 2;
        }
        break;


      case "Scissors":
        if (computerChoice === "Paper") {
          // return "Player wins";
          return 1;
        } else if (computerChoice === "Rock") {
          // return "Computer Wins";
          return 2;
        }
        break;
    }
  }

// function checks the result and changes the result text
// incremements a score depending on who won
// updates the score
function check(result){
  if (result == 1){
    result = "Player Won!";
    res.textContent = result;
    playerScore++;
    pScore.textContent = "Player Score is: " + playerScore;
    cScore.textContent = "Computer Score is: " + computerScore;
  } 
  else if(result == 2){
    result = "Computer Won!";
    res.textContent = result;
    computerScore++;
    pScore.textContent = "Player Score is: " + playerScore;
    cScore.textContent = "Computer Score is: " + computerScore;
  }else{
    result = "Draw!";
    res.textContent = result;
  }
}


// function announces the winner based on the score and disables buttons to avoid further playing
function announceWinner(player, computer){
    let text = "Final Winner: "
    if(player == 5){
      res.textContent = text + "Player";
      const rock = document.querySelector('#rock').disabled =  true;
      const paper = document.querySelector('#paper').disabled =  true;
      const scissor = document.querySelector('#scissor').disabled =  true;
    } else if (computer == 5){
      res.textContent = text + "Computer";
      const rock = document.querySelector('#rock').disabled =  true;
      const paper = document.querySelector('#paper').disabled =  true;
      const scissor = document.querySelector('#scissor').disabled =  true;
        }
}

// function resets the score and enables the buttons
function reset(){
    playerScore = 0;
    computerScore = 0;
    counter = 0;
    result = "";
    res.textContent = result;
    pScore.textContent = "Player Score is: " + playerScore;
    cScore.textContent = "Computer Score is: " + computerScore;
    count.textContent = "Round: "+ counter;
    const rock = document.querySelector('#rock').disabled =  false;
    const paper = document.querySelector('#paper').disabled =  false;
    const scissor = document.querySelector('#scissor').disabled =  false;
}
// function caseInsensitive(string) {
//     firstLetter = string.charAt(0).toUpperCase()
//     rest = string.slice(1).toLowerCase()
//     return firstLetter+rest

// }

let playerScore = 0;
let computerScore = 0;
let result = '';
let pScore = document.getElementById('player');
let cScore = document.getElementById('computer');
let res = document.getElementById('result')
let count = document.getElementById('counter')
pScore.textContent = "Player Score is: " + playerScore;
cScore.textContent = "Computer Score is: " + computerScore;
let counter = 0;
count.textContent = "Round: "+ counter;

const buttons = document.querySelectorAll('.choice');

const resetBtn = document.querySelector(".reset")

resetBtn.addEventListener("click", () => {
  reset();
})

buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let computerChoice = getComputerChoice()
    // console.log(computerChoice)
    playerChoice = button.value;
    result = playRound(playerChoice, computerChoice)
    check(result)
    announceWinner(playerScore, computerScore)
    ++counter;
    console.log(computerChoice)
    count.textContent = counter;
  });
});
