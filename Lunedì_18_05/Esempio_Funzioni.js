// Funzione dichiarativa 
// Può essere chiamata anche prima della dichiarazione del codice

function somma(a, b) {
    return a + b;
}

let risultato = somma(3, 5);
console.log(risultato); // 8

// Funzione espressa
// Assegnata a una variabile; non è utilizzabile prima
// della sua definizione

const moltiplica = function(a, b) {
    return a * b;
}

console.log(moltiplica(4, 2)); // 8

// Arrow function
// Assegna direttamente l'operazione
// Sta assegnando a sottrai la funzionalità 
// L'elemento su cui lo fa è tra le parentesi
// Serve a creare funzioni più veloci
const sottrai = (a, b) => a - b;

console.log(sottrai(10, 3)); // 7

// Parametri e return
// i parametri sono variabili locali alla funzione
// Return interrompe l'esecuzione e restituisce un valore
function saluta(nome){
    return "Ciao" + nome;
}

let messaggio = saluta("Carla");
console.log(messaggio); // Ciao Carla