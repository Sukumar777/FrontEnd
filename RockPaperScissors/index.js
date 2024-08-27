const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    result = "";

    if(computerChoice === playerChoice){
        result = "Its a TIE"
    }
    else{
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors" ? "You WIN" : "You LOSE")
                break;
            case "paper":
                result = (computerChoice === "rock" ? "You WIN" : "You LOSE")
                break;  
            case "scissors":
                result = (computerChoice === "paper" ? "You WIN" : "You LOSE")
                break;   
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greentext", "redtext");

    switch (result) {
        case "You WIN":
            resultDisplay.classList.add("greentext");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You LOSE":
            resultDisplay.classList.add("redtext");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    } 
}