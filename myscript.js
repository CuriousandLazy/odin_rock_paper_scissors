function getComputerChoice(choices){

    return choices[Math.floor(Math.random()*choices.length)];
}
function getHumanChoice(choices){
    check = prompt(`Input the order of your choice between;` + choices);
    //check if the input is valid
    if(choices.includes(check.toLowerCase())){
        return check;
    }
    else{
        console.log("Invalid input. Please try again.");
        return getHumanChoice(choices);
    }
}
function playRound(humanChoice){
    computerChoice = getComputerChoice(choices);
    if(humanChoice == computerChoice){
        document.getElementById('results').textContent = `It's a draw! You both chose ${humanChoice}`;
        document.getElementById('human-score').textContent = humanScore;
        document.getElementById('computer-score').textContent = computerScore;
        return;
    }

    if((humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper")){
        humanScore++;
        document.getElementById('human-score').textContent = humanScore;
        document.getElementById('results').textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    // Handle the cases where the computer wins
    else{
        computerScore++;
        document.getElementById('results').textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        document.getElementById('computer-score').textContent = computerScore;
    }
}
function playGame(choices){

    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}

let humanScore = 0;
let computerScore = 0;
const choices = ["rock","paper","scissors"];
console.log("Let's play Rock, Paper, Scissors!");
playGame(choices);