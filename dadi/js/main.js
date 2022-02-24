// variabili HTML
const player1DiceNumberHTML = document.querySelector('#player1');
const player2DiceNumberHTML = document.querySelector('#player2');
const winnerHTML = document.querySelector('#winner');
const btnThrowingDice = document.querySelector('#dice-throwing');

// messaggi
const player1WinMsg = 'Player 1 win!';
const player2WinMsg = 'Player 2 win!';
const drawMsg = 'Draw!';



// HTML
btnThrowingDice.addEventListener('click', diceThrowing);


// function
function diceThrowing() {
    
    let player1DiceNumber = Math.floor(Math.random() * 6) + 1;
    let player2DiceNumber = Math.floor(Math.random() * 6) + 1;
    
    player1DiceNumberHTML.innerHTML = 'Player 1 number is: ' + player1DiceNumber;
    player2DiceNumberHTML.innerHTML = 'Player 2 number is: ' + player2DiceNumber;

    if (player1DiceNumber == player2DiceNumber) {

        winnerHTML.innerHTML = drawMsg;

    } else if (player1DiceNumber > player2DiceNumber) {

        winnerHTML.innerHTML = player1WinMsg;

    } else {

        winnerHTML.innerHTML = player2WinMsg;
    }
}