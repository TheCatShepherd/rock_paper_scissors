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
        return "Rock";
    } else if (x === 2) {
        return "Paper";
    } else if (x == 3) {
        return "Scissors";
    } else {
        return "Something went wrong";
    }
}
 console.log(getComputerChoice())


   

//compare both choices
    //somehow tell the function witch play is stronger
    //return string with winner and result

function playRound(playerSelection,computerSelection) {

}



//get your choice
    //either direct code input or promt
    //first user input by declaring const