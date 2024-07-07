//Creao l'arra vuoto
let numbers = [];

//eseguo il ciclo di 6 iterazioni 
for (let i = 1; i <= 6; i++) {
    // permetto all'utente di inserire il numero
    let num = prompt('Inserisci un numero');

    //verifico se il numero e dispari
    if (num % 2 != 0) {
        //inserisco il nuemro nell'array
        numbers.push(num)
    }
}
