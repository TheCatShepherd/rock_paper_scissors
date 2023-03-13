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
    let me = playerSelection.toLowerCase(); //exception - undefined if user doesn't enter anything = null
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
        return "Something went wrong! Please chose rock, paper or scissors";
    }
}

//let playerSelection = "papeR";

//console.log);

//get your choice
    //either direct code input or promt
    //first user input by declaring const

//Create function game()
//Call playRound inside game()
//Play 5 rounds
    //Use for loop
//Keep score
    //Create variables for my score and pc score
    //Add 1 for win, add 1 to pc for lose
//Declare winner
//Use prompt for user input

function game() {
    let myScore = 0;
    let pcScore = 0;
    while (myScore < 5 && pcScore < 5) {
    //problem - counter goes to 6
        let playerSelection = prompt("Rock, paper or scissors?");
        let computerSelection = getComputerChoice();
        switch (playRound(playerSelection, computerSelection)) {
            case "It's a tie!":
                console.log("It's a tie!");
                break;
            case "You lose! Paper beats Rock":
                pcScore++;
                console.log("You lose! Paper beats Rock");
                break;
            case "You win! Rock beats Scissors":
                myScore++;
                console.log("You win! Rock beats Scissors");
                break;
            case "You win! Paper beats Rock":
                myScore++;
                console.log("You win! Paper beats Rock");
                break;
            case "You lose! Scissors beat Paper":
                pcScore++;
                console.log("You lose! Scissors beat Paper");
                break;
            case "You lose! Rock beats Scissors":
                pcScore++;
                console.log("You lose! Rock beats Scissors");
                break;
            case "You win! Scissors beat paper":
                myScore++;
                console.log("You win! Scissors beat paper");
                break;
            case "Something went wrong! Please chose rock, paper or scissors":
                console.log("Something went wrong! Please chose rock, paper or scissors");
                break;
    }
        console.log(myScore + " / " + pcScore)
    }
    if (myScore > pcScore) {
        return "You won! Your score is human " + myScore + " / computer " + pcScore;
    } else {
        return "You lost! Your score is human " + myScore + " / computer " + pcScore;
    }
}

//console.log);

console.log(game());
