//play game of rock-paper-scissors against computer

//get computer choice
    //get random num between 1 and 3
    //assign each num to a possible play
        //function that calls getRandomNum,
        //depending on the result, return rock, paper or scissors
        //return play

function getComputerChoice() {
    let x = Math.floor(Math.random() * (3) + 1)
    if (x === 1) {
        return "rock";
    } else if (x === 2) {
        return "paper";
    } else if (x == 3) {
        return "scissors";
    } else {
        return "Something went wrong";
    }
}
 //console.log(getComputerChoice())


   

//compare both choices
    //make playerSelection lowerCase
    //make if else statements for every possible play
    //return string with winner and result

function playRound(playerSelection,computerSelection) {
    let me = playerSelection.toLowerCase();
    let pc = computerSelection;
    if (me === pc) {
        return "It's a tie!";
    } else if ((me === "rock") && (pc === "paper")){
        return "You lose! Paper beats Rock";
    } else if ((me === "rock") && (pc === "scissors")){
        return "You win! Rock beats Scissors" ;
    } else if ((me === "paper") && (pc === "rock")){
        return "You win! Paper beats Rock";
    } else if ((me === "paper") && (pc === "scissors")){
        return "You lose! Scissors beat Paper";
    } else if ((me === "scissors") && (pc === "rock")){
        return "You lose! Rock beats Scissors";
    } else if ((me === "scissors") && (pc === "paper")){
        return "You win! Scissors beat paper";
    } else {
        return "Something went wrong!";
    }
}

let playerSelection = "papeR";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))

//get your choice
    //either direct code input or promt
    //first user input by declaring const