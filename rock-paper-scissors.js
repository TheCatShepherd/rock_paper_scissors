//Rock-paper-scissors against computer

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

//Create div to display results
const container = document.querySelector('.result');


//get user input from button click
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const play = document.createElement('p');
        play.textContent = playRound(button.id, getComputerChoice());
        container.appendChild(play);
    });
});



//playerSelection linked to button click
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
        return "Something went wrong! Please chose rock, paper or scissors";
    }
}

/*function game() {
    let myScore = 0;
    let pcScore = 0;
    while (myScore < 5 && pcScore < 5) {
        //let playerSelection = button.id;
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


console.log(game());*/

//Remains - delete previous result of  playRound() in div
//        - connect buttons to game()
