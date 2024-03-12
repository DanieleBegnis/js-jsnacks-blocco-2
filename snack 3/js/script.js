//Crea due tag div con due id diversi: un div avrà il testo colorato di rosso mentre l’altro di verde.
//Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

//creo array di numeri
const numbersArray = [1, 3, 4, 8, 92, 13, 66, 883, 91, 47, 109, 834, 653, 12, 41, 7, 22, 24] ;
console.log(numbersArray , 'array')

//appendo container
const oddNumbersContainer = document.querySelector('#red-container');
const evenNumbersContainer = document.querySelector('#green-container');

//creo ciclo for per smistare i numeri, i rossi tra i dispari, i verdi tra i pari



for(let i = 0; i < numbersArray.length; i++) {
    const thisPath = numbersArray[i];
    if(numbersArray [i] % 2 === 0) {
        console.log(numbersArray[i])
        const numberOdd = `
        <div class="red">
            ${thisPath}
        </div>
        `;
        oddNumbersContainer.innerHTML += numberOdd;
    } else {
        const numberEven = `
        <div class="green">
            ${thisPath}
        </div>
        `;
        evenNumbersContainer.innerHTML += numberEven;
    }
}







