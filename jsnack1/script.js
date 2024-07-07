// definizione dell'array di invitati
let guest = ['Bread Pitt', 'Kevin Sonda', 'Messi']

// setto la variabile di controllo
let check_guest = false

//recupero il pulsante dal dom e gli dico di restare in attesa dell'click
document.getElementById('check-guest').addEventListener('click', function (){
    //recupero il valore inserito nel campo input
    let name = document.getElementById('name').value;

    //ciclo l'array
    for (let i = 0; i < guest.length; i++){
        //controllo il valore inserito dall'utente e lo porto in lowercase
        if (guest[i].toLowerCase() === name.toLowerCase()){
            check_guest = true
        }
    }
    
    //verifico il valore della variabile di controllo
    
    if (check_guest) {
        console.log(`Benvenuto ${name}, si accomodi`)
    }
    else {
        console.log('ALT! Chi siete , dove andate?!')
    }
})