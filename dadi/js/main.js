let numberPlayer1 = Math.floor(Math.random() * 6) + 1;
let numberPlayer2 = Math.floor(Math.random() * 6) + 1;


if (numberPlayer1 == numberPlayer2) {

    console.log('Draw!');

} else if (numberPlayer1 > numberPlayer2) {

    console.log('Player 1 win!');

} else {

    console.log('Player 2 win!');
}