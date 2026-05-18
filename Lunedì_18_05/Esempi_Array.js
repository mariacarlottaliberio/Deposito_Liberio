// Array
// Creazione array 
let numeri = [1, 2, 3];

// Accesso agli elementi e stampa: nome variabile
// identificatore numerico
console.log(numeri[0]); // 1

// Aggiunta elementi (PUSH IMPORTANTE)
numeri.push(4); //aggiunge in fondo -> [1, 2, 3, 4]
numeri.unishift(0); // Aggiunge all'inizio -> [0, 1, 2, 3, 4]

// Rimozione elementi
numeri.pop(); // Rimuove ultimo -> [0, 1, 2, 3]
numeri.shift(); // Rimuove primo -> [1, 2, 3]

// n => Ogni elemento all'intero delle collezioni

// Iterazione -> Stampa ogni elemento dell'array
numeri.forEach(n => console.log(n));

// Trasformazione
let doppi = numeri.map(n => n * 2); // [2, 4, 6]

// Filtro
let maggioriDiUno = numeri.filter(n => n > 1); // [2, 3]

// Ricerca 
let trovato = numeri.find(n => n === 2) // 2

// Lunghezza (lenght è una proprietà NON un attributo)
console.log(numeri.lenght); // 3

// Array nei cicli for-of itera sui valori di strutture iterabili
let numeri = [10, 20, 30];
for (let valore of numeri) {
    console.log(valore); // 10, 20, 30
}

// Stampa ogni valore uno sotto l'altro
let parola = "Ciao";
for (let valore of parola) {
    console.log(valore); // C i a o (Ogni lettera a capo)
}

