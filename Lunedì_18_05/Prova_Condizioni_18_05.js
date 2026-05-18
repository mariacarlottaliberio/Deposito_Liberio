let età = 18;

if (età >= 18) {
    console.log("Maggiorenne");
} else {
    console.log("Minorenne");
}

// Più condizioni 
let voto = 75;

if (voto >= 90) {
    console.log("Ottimo");
} else if (voto >= 60) {
    console.log("Sufficiente");
    
} else {
    console.log("Insufficiente");
}

// condizioni operatori booleani
// variabili
let età = 20;
let patente = true;
let abbonamento = false;

// Condizioni con AND (&&)
// Entrambe le condizioni devono essere vere
if (età >= 18 && patente === true) {
    console.log("Puoi guidare l'auto");
}

// Condizioni con OR (||)
// Basta che la condizione sia vera
if (età < 18 || abbonamento == true) {
    console.log("Hai uno scontro speciale");
}

// Condizioni con NOT (!)
// Inverte il valore booleano 
if (!abbonamento) {
    console.log("Non hai un abbonamento attivo");
    
}

// Condizioni più complesse
if ((età >= 18 && patente) || abbonamento) {
    console.log("Accesso consentito");
} else {
    console.log("Accesso negato");
}

let giorno = 2;
switch (giorno) {
    case 1:
        console.log("Lunedì");
        break;
    case 2:
        console.log("Martedì");
        break;
    case 3:
        console.log("Mercoledì");
        break;        
    default:
        console.log("Giorno non valido");
}



let x = "5";

switch (x) {
    case 5:
        console.log("Numero");
        break;

    case "5":
        console.log("String");
        break;
}


let valore = 2;

switch (valore) {
    case 1:
        console.log("Uno");
        
    case 2:
        console.log("Due");
    
    case 3:
        console.log("Tre");
        break;
}


// // case 6 e 7 condividono lo stesso blocco di codice:
// se il valore è uno dei due viene eseguita l'istruzione
let giorno = 6;

switch (giorno) {
    case 6:
    case 7:
        console.log("Weekend");            
        break;
    default:
        console.log("Giorno lavorativo");
}