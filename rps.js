function getComputerChoice() {
    array = ["Rock", "Paper", "Scissor"]
    return comChoice = array[Math.floor(Math.random() * array.length)]

}

function caseInsensitive(string) {
    firstLetter = string.charAt(0).toUpperCase()
    rest = string.slice(1).toLowerCase()
    return firstLetter+rest

}



computerChoice = getComputerChoice()

// playerChoice = input("Rock, Paper, or Scissor?")
playerChoice = caseInsensitive("Rock")

console.log(playerChoice)

function playRound(playerChoice, computerChoice) {
    switch (playerChoice) {
        case computerChoice:
          return "Draw!";
        case "Rock":
          if (computerChoice === "Paper") {
            return "Player loses";
          } else if (computerChoice === "Scissors") {
            return "Player wins";
          }
          break;
        case "Paper":
          if (computerChoice === "Rock") {
            return "Player wins";
          } else if (computerChoice === "Scissors") {
            return "Player loses";
          }
          break;
        case "Scissors":
          if (computerChoice === "Paper") {
            return "Player wins";
          } else if (computerChoice === "Rock") {
            return "Player loses";
          }
          break;
      }
    }

result = playRound(playerChoice, computerChoice)

console.log(result)