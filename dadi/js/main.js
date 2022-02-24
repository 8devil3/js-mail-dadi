let player1DiceNumber = '';
let player2DiceNumber = '';

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
    
    player1DiceNumber = Math.floor(Math.random() * 6) + 1;
    player2DiceNumber = Math.floor(Math.random() * 6) + 1;
    
    player1DiceNumberHTML.innerHTML = player1DiceNumber;
    player2DiceNumberHTML.innerHTML = player2DiceNumber;

    if (player1DiceNumber == player2DiceNumber) {

        winnerHTML.innerHTML = drawMsg;

    } else if (player1DiceNumber > player2DiceNumber) {

        winnerHTML.innerHTML = player1WinMsg;

    } else {

        winnerHTML.innerHTML = player2WinMsg;
    }
}