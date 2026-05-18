const prompt = require("prompt-sync")();

// rendiamo il programma ripetibile quante volte vogliamo
// con il ciclo do-while
let controllore = true;

do {
    // mettiamo il prompt per far inserire il numero all'utente
    let n = prompt("Inserisci un numero: ");
    //facciamo partire pari e dispari da 0
    let pari = 0;
    let dispari = 0;

    if (n < 0) {
        console.log("Errore: valore non valido");
    } else {
        for (let i = 0; i <= n; i++) {
            if (i % 2 === 0) {
                pari++;
            } else {
                dispari++;
            }
        }
    }
    
    console.log("Numeri pari: " + pari);
    console.log("Numeri dispari: " + pari);

    check = prompt("Vuoi continuare?");
    
    if (check === "Esci") {
        controllore = false;
    }

} while(controllore);