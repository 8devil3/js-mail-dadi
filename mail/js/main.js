// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


const mailList = ['item1@gmail.com', 'item2@gmail.com', 'item3@gmail.com', 'item4@gmail.com', 'item5@gmail.com'];
let userInputMail = 'item2@gmail.com';

let chkMail = false;
let chkMailMsgTrue = 'Bentornato!';
let chkMailMsgFalse = 'La tua email non è registrata!';


for (let x = 0; x < mailList.length; x++) {
    
    if (userInputMail == mailList[x]) {
        chkMail = true;
    }
}


if (chkMail == true) {
    
    console.log(chkMailMsgTrue);
    
} else {

    console.log(chkMailMsgFalse);
}

