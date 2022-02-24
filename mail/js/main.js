const mailList = ['item1@gmail.com', 'item2@gmail.com', 'item3@gmail.com', 'item4@gmail.com', 'item5@gmail.com'];

const userInputMail = document.querySelector('#mail');
const btnCheck = document.querySelector('#check');
const resultTxt = document.querySelector('#result');;

let chkMail;
const chkMailMsgTrue = 'Welcome back!';
const chkMailMsgFalse = 'Your email is not registered!';
const chkMailMsgEmpty = 'Please, enter your email.';
const chkMailMsgWrong = 'Please, enter a valid email address!';


// HTML
btnCheck.addEventListener('click', checkEmailList);


// function
function checkEmailList() {

    if (userInputMail.value == '') { // controllo input vuoto
        chkMail = 'empty';
    } else if (!(/.*@.*/.test(userInputMail.value))) { // controllo input email non valida (controllo solo la presenza di '@')
        chkMail = 'wrong';
    } else {
        for (let x = 0; x < mailList.length; x++) { // controllo nella lista mail
            if (userInputMail.value == mailList[x]) {
                chkMail = true;
                break;
            } else {
                chkMail = false;
            }
        }
    }

    // reset classi
    resultTxt.classList.remove('true', 'false');

    // messaggi
    if (chkMail == 'empty') {
        resultTxt.innerHTML = chkMailMsgEmpty;
        resultTxt.classList.add('false');
    } else if (chkMail == 'wrong') {
        resultTxt.innerHTML = chkMailMsgWrong;
        resultTxt.classList.add('false');
    } else if (chkMail == false) {
        resultTxt.innerHTML = chkMailMsgFalse;
        resultTxt.classList.add('false');
    } else if (chkMail == true) {
        resultTxt.innerHTML = chkMailMsgTrue;
        resultTxt.classList.add('true');
    }

    // reset variabile
    chkMail = undefined;
}

