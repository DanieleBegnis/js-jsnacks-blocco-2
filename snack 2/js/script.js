//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
//chiedo all'utente due parole
const userFirstWord = prompt('Dimmi una parola');
const userSecondWord = prompt('Dimmi una seconda parola');

if(userFirstWord.length > userSecondWord.length) {
    console.log(userFirstWord);
} else {
    console.log(userSecondWord);
}