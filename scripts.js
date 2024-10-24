var humanScore = 0;
var computerScore = 0;

const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const rockButton = document.getElementById("rock");

const updateScoreDisplay = () => {
const displayContainer = document.getElementsByClassName("display")[0];
displayContainer.innerHTML = `<p> Human Score: ${humanScore} <br> Computer Score: ${computerScore}`;
}

paperButton.addEventListener('click', getHumanChoice);
scissorsButton.addEventListener('click', getHumanChoice);
rockButton.addEventListener('click', getHumanChoice);
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

function getHumanChoice(event){
    humanChoice = event.target.value;
    playGame();
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
        updateScoreDisplay();
    }
    else if (humanChoice == "Rock" && computerChoice == "Scissors"){
        console.log("You Win! Rock beats Scissors.");
        humanScore++;
        updateScoreDisplay();
    }
    else if (humanChoice == "Paper" && computerChoice == "Rock"){
        console.log("You Win! Paper beats Rock.");
        humanScore++;
        updateScoreDisplay();
    }
    else if (humanChoice == "Paper" && computerChoice == "Scissors"){
        console.log("You lose! Scissors beat Paper.");
        computerScore++;
        updateScoreDisplay();
    }
    else if (humanChoice == "Scissors" && computerChoice == "Rock"){
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
        updateScoreDisplay();
    }
    else if (humanChoice == "Scissors" && computerChoice == "Paper"){
        console.log("You Win! Scissors beat Paper.");
        humanScore++;
        updateScoreDisplay();
    }

}

function playGame(){
        if (humanScore < 5 && computerScore < 5) {
            let computerChoice = getComputerChoice();
            console.log ( "Human CHoice: + " + humanChoice + ", Computer Choice: " + computerChoice);
            playRound(humanChoice, computerChoice);
            console.log("Human Score: " + humanScore + ", Computer Score: " + computerScore);
        }
}

