/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto 
precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice 
quanti e quali dei numeri da indovinare sono stati individuati.*/

const displayedNumber = document.getElementById("numbers");
const arrayNum = generateRandomNumber();
displayedNumber.innerHTML = arrayNum.join("-");

setTimeout(hideNumber, 30000);
setTimeout(guessTheNumbers, 31000);

const guess = document.getElementById("guessed");

function generateRandomNumber() {
    const randNum = [];
    for (let i = 0; i < 5; i++) {
        randNum.push(Math.floor(Math.random() * 100) + 1);
    }
    return randNum;
}

function hideNumber() {
    displayedNumber.classList.add("d-none");
}


function guessTheNumbers() {
    const guessed = [];
    for (let i = 0; i < 5; i++) {
        num = parseInt(prompt("Inserire numero"));
        if (arrayNum.includes(num)) {
            guessed.push(num);
            console.log("Giusto!");
        }
    }

    const guess = document.getElementById("guessed");
    guess.innerHTML = "Hai indovinato " + guessed.length + " numeri! I numeri che hai individuato sono: " + guessed
}