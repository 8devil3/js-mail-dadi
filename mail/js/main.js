// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


const mailList = ['item1@gmail.com', 'item2@gmail.com', 'item3@gmail.com', 'item4@gmail.com', 'item5@gmail.com'];

let userInputMail = document.querySelector('#mail');
let btnCheck = document.querySelector('#check');


let chkMail;
let chkMailMsgTrue = 'Welcome back!';
let chkMailMsgFalse = 'Your email is not registered!';
let chkMailMsgEmpty = 'Please enter your email';

// HTML
btnCheck.addEventListener('click', checkEmailList);



// function
function checkEmailList() {

    for (let x = 0; x < mailList.length; x++) {

        if (userInputMail.value == '') {
            
            chkMail = 'empty';

        } else if (!(/.*@.*/.test(userInputMail.value))) {

        chkMail = 'wrong';

        } else if (userInputMail.value != mailList[x]) {

            chkMail = false;

        } else {

            chkMail = true;
        }
    }


    if (chkMail == 'empty') {

        console.log(chkMailMsgEmpty);

    } else if (chkMail == 'wrong') {

        console.log('wrong');
        
    } else if (chkMail == false) {
        
        console.log(chkMailMsgFalse);

    } else {

        console.log(chkMailMsgTrue);
    }
}

