//play game of rock-paper-scissors against computer

//get computer choice
 function getComputerChoice() {
    let x = Math.floor(Math.random() * (3) + 1)
    if (x === 1) {
        return "Rock";
    } else if (x === 2) {
        return "Paper";
    } else if (x == 3) {
        return "Scissors";
    } else {
        return "Something went wrong";
    }
}

//Divs to display result and score
const resultDisplay = document.querySelector('#result');
const scoreDisplay = document.querySelector('#score');

//Delete text before displaying next info
function clearField() {
    document.getElementById("result").textContent = "";
    document.getElementById("score").textContent = "";
}

 //Add button event listener
 let buttons = document.querySelectorAll('button');
 buttons.forEach((button) => {
    button.addEventListener('click', () => {
        clearField();
        let me = button.id;
        let pc = getComputerChoice()
        
        let play = document.createElement('p');
        let result = playRound(me, pc);
        play.textContent = result;
        resultDisplay.appendChild(play);
        
        let meVsPc = document.createElement('p');
        meVsPc.textContent = `You played: ${me} / Computer played: ${pc}`;
        resultDisplay.appendChild(meVsPc);
        
        let score = document.createElement('p');
        score.textContent = keepScore(result);
        scoreDisplay.appendChild(score);

        let winner = document.createElement('p');
        winner.textContent = declareWinner();
        scoreDisplay.appendChild(winner);
    })
})


function playRound(playerSelection,computerSelection) {
    let me = playerSelection;
    let pc = computerSelection;
    if (me === pc) {
        return "It's a tie!";
    } else if (
        (me === "Rock") && (pc === "Scissors") ||
        (me === "Paper") && (pc === "Rock") ||
        (me === "Scissors") && (pc === "Paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

let myScore = 0;
let pcScore = 0;

function keepScore(result) {
    if (result == "You win!") {
        myScore++;
    } else if (result == "You lose!") {
        pcScore++;
    } 
    return `${myScore} / ${pcScore}`;
}

function declareWinner() {
    if (myScore == 5 || pcScore == 5) {
        return "Would you like to play another game?"
    }
}

let gameOver = declareWinner();

function resetScore(gameOver) {
    if (gameOver) {
        myScore = 0;
        pcScore = 0;
    }
}

//Make counter go back to zero