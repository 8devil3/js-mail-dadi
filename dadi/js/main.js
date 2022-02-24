// variabili HTML
const player1DiceNumberHTML = document.querySelector('#player1');
const player2DiceNumberHTML = document.querySelector('#player2');
const winnerHTML = document.querySelector('#winner');
const btnRollDice = document.querySelector('#dice-roll');

// messaggi
const player1WinMsg = 'Player 1 win!';
const player2WinMsg = 'Player 2 win!';
const drawMsg = 'Draw!';



// HTML
btnRollDice.addEventListener('click', diceRoll);


// function
function diceRoll() {

    let player1DiceNumber = Math.floor(Math.random() * 6) + 1;
    let player2DiceNumber = Math.floor(Math.random() * 6) + 1;

    player1DiceNumberHTML.innerHTML = 'Player 1 number is: ' + player1DiceNumber;
    player2DiceNumberHTML.innerHTML = 'Player 2 number is: ' + player2DiceNumber;

    player1DiceNumberHTML.classList.remove('win', 'lose', 'draw');
    player2DiceNumberHTML.classList.remove('win', 'lose', 'draw');

    if (player1DiceNumber == player2DiceNumber) {

        winnerHTML.innerHTML = drawMsg;
        player1DiceNumberHTML.classList.add('draw');
        player2DiceNumberHTML.classList.add('draw');

    } else if (player1DiceNumber > player2DiceNumber) {

        winnerHTML.innerHTML = player1WinMsg;
        player1DiceNumberHTML.classList.add('win');
        player2DiceNumberHTML.classList.add('lose');

    } else {

        winnerHTML.innerHTML = player2WinMsg;
        player1DiceNumberHTML.classList.add('lose');
        player2DiceNumberHTML.classList.add('win');
    }


}