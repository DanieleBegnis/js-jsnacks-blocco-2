//L'utente inserisce un numero nel prompt, se è pari stampa il numero, se è dispari stampa il numero successivo
const userNumber = parseInt(prompt('Dimmi un numero'));

//controllo se è pari e lo stampo
if(userNumber % 2 === 0) {
    console.log(userNumber);
} else {
    //altrimenti aggiungo 1 e lo stampo
    let numberEven = userNumber + 1;
    console.log(numberEven);
}