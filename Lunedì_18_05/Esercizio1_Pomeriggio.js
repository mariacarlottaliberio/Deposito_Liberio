const prompt = require("prompt-sync")();

let controllore = true;

do {

    let array = [];

    array.push(prompt("Inserisci un numero: "));
    array.push(prompt("Inserisci un numero: "));
    array.push(prompt("Inserisci un numero: "));
    array.push(prompt("Inserisci un numero: "));
    array.push(prompt("Inserisci un numero: "));
    array.push(prompt("Inserisci un numero: "));

    let pari = [array.find(n => n % 2 === 0)];
    console.log(pari);
    
    let dispari = [array.find(n => n % 2 !== 0)];
    console.log(dispari);
    
    for (let i = 0; i < array.lenght; i++) {
        
    }


    console.log(array);


} while (controllore);