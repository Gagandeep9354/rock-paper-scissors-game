var humanScore = 0;
var computerScore = 0;
function getComputerChoice() {
    var randomnum = Math.floor(Math.random() * 3);
    if (randomnum == 0){
        return "Rock";
    }
    else if (randomnum == 1){
        return "Paper";
    }
    else if (randomnum ==2){
        return "Scissors";
    }
}

function getHumanChoice(){
    let input = parseInt(prompt("Enter your choice (0: Rock, 1: Paper, 2: Scissors): "));
    if (input == 0){
        return "Rock";
    }
    else if (input == 1){
        return "Paper";
    }
    else if (input == 2) {
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "Rock" && computerChoice == "Rock"){
        console.log("It's a Tie!");
    }
    else if (humanChoice == "Paper" && computerChoice == "Paper"){
        console.log("It's a Tie!");
    }
    else if (humanChoice == "Scissors" && computerChoice == "Scissors"){
        console.log("It's a Tie!");
    }
    else if (humanChoice == "Rock" && computerChoice == "Paper"){
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    else if (humanChoice == "Rock" && computerChoice == "Scissors"){
        console.log("You Win! Rock beats Scissors.");
        humanScore++;
    }
    else if (humanChoice == "Paper" && computerChoice == "Rock"){
        console.log("You Win! Paper beats Rock.");
        humanScore++;
    }
    else if (humanChoice == "Paper" && computerChoice == "Scissors"){
        console.log("You lose! Scissors beat Paper.");
        computerScore++;
    }
    else if (humanChoice == "Scissors" && computerChoice == "Rock"){
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }
    else if (humanChoice == "Scissors" && computerChoice == "Paper"){
        console.log("You Win! Scissors beat Paper.");
        humanScore++;
    }

}
var humanSelection = getHumanChoice();
var computerSelection = getComputerChoice();
function playGame(){
    let i = 0;
    while (i<5){
        playRound(humanSelection, computerSelection);
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        i++;
    }
    console.log("Your score is " + humanScore, "and computer's score is " + computerScore);
}
playGame();
