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
function playRound(choices){
    humanChoice = getHumanChoice(choices);
    computerChoice = getComputerChoice(choices);
    if(humanChoice == computerChoice){
        console.log(`Its a draw`)
        console.log(`You both chose ${humanChoice}`);
        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
        return;
    }

    if((humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper")){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    // Handle the cases where the computer wins
    else{
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    }
function playGame(choices){
    for(let i = 0; i < 5; i++){
        playRound(choices);
    }
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}

let humanScore = 0;
let computerScore = 0;
const choices = ["rock","paper","scissors"];
console.log("Let's play Rock, Paper, Scissors!");
playGame(choices);

