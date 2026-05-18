// ciclo for --> quando si conosce il numero di iterazioni
// dichiarazione, condizione, condizione di rottura 
// ad ogni ripetizione la variabile aumenta di uno
// ++i prepone alla valorizzazione di i un aumento
// nei cicli non va mai usato ++i 
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}

// ciclo while --> esegue il blocco finchè la condizione è vera
let i = 0;
while (i < 3) {
    console.log(i); // 0, 1, 2
    i++;
    // si aumenta sempre dopo aver stampato
    // infatti se avessimo scritto ++i, i sarebbe partito
    // da 1 e non da 0 e nel ciclo sarebbe entrato
    // anche il 3 che agli effetti non dovrebbe entrare
}

// ciclo do-while --> esegue almeno una volta il blocco, poi verifica
// se mettiamo i = 4 infatti stampa 4 la prima volta quindi lo esegue
// almeno una volta, una volta stampato se la condizione che
// che troviamo nel while non è soddifatto il ciclo si ferma 
let i = 0;
do {
    console.log(i); // 0, 1, 2
    i++;
} while (i < 3);


// while booleano è un ciclo che ripete finchè l'utente
// non vuole uscire
//Esempio di while con uscita tramite input utente
// Modulo per input da console
const prompt = require("prompt-sync")();

// Variabile booleana
let attivo = true;

//Ciclo
while(attivo) {

    // Input utente
    let comando = prompt("Scrivi qualcosa (digita 'esci' per terminare): ");

    // Controllo
    if(comando === "esci") {

        console.log("Programma terminato");
        attivo = false;
        
    }
}