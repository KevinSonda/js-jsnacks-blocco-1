document.getElementById('send-number').addEventListener('click', function () {
    //recupero il valore del campo input inserito dell'utente
    let num = document.getElementById('number').value;

    //verifico che il valore inserito sia lungo 4 cifre
    if (num.lenght === 4) {
        // dichiaro la variabile che contiene la somma delle cifre
        let somma = 0;
        
        for (let i = 0; i < num.lenght; i++){
            somma += parseInt(num[i]);
        }

        console.log(somma);
    }
    else {
        alert('Non hai inserito un valore di quattro cifre');
    }
})