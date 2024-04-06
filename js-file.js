let computerWins = 0;
let userWins = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*(3-1+1)+1);
    let computerChoice;
    if (randomNumber === 1) {
        computerChoice = "rock";
    }
    else if (randomNumber === 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}
        
function askUserInput() {
    let userInput = window.prompt("Choose between Rock, paper or scissors!");
        userInput = userInput.toLowerCase();
        if (userInput === "rock") {
            console.log("You choose...ROCK!");
        }
        else if (userInput === "paper") {
            console.log("You choose...PAPER!");
        }
        else if (userInput === "scissors") {
            console.log("You choose...SCISSORS!");
        }
        else {
            console.log("Please input a valid answer");
        }
        return userInput;
}        
function playRound(getComputerChoice, askUserInput) {
    if (getComputerChoice === askUserInput) {
        console.log("It's a tie!");
    }
    else if (getComputerChoice === "rock" && askUserInput === "scissors") {
        console.log("You lost! Rock beats scissors");
        computerWins++;
    }
    else if (getComputerChoice === "paper" && askUserInput === "rock") {
        console.log("You lost! Paper beats rock");
        computerWins++;
    }
    else if (getComputerChoice === "scissors" && askUserInput === "paper") {
        console.log("You lost! Scissors beats paper");
        computerWins++;
    }
    else {
        console.log("You WIN!");
        userWins++;
    }
}
function playGame() {
    for(let i=0; i<4; i++) {
        playRound(computerSelection, userSelection);
        console.log("Computer wins: " + computerWins + " User wins: " + userWins);
        computerSelection = getComputerChoice();
        userSelection = askUserInput();
    }
    if (computerWins > userWins) {
        console.log("You lost! The computer won")
    }
    else if (userWins > computerWins) {
        console.log("You won! You beat the computer")
    }
    else {
        console.log("It's a tie between you and the computer!")
    }
}

let computerSelection = getComputerChoice();
let userSelection = askUserInput();
playGame();
    
    