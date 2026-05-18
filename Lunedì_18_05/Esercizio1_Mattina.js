// Impostazione input utente
const prompt = require("prompt-sync")();

// dichiarazione variabili collegato allo switch
let menu = "";
let condimento1 = "";
let condimento2 = "";

// menu con prompt dove l'utente inserisce il piatto
menu = prompt("Scegli uno dei seguenti piatti: Pasta, Carne, Panino: ");

// switch con tutti i piatti
switch (menu) {
    case "Pasta":
        console.log("Hai scelto la pasta");
        // prompt per condimenti che l'utente sceglie
        condimento1 = prompt("Aggiungi condimento: ");
        condimento2 = prompt("Aggiungi un altro condimento: ");
        
        console.log("Il tuo ordine comprende pasta con " + condimento1 + " " + condimento2);
        break;

    case "Carne":
        console.log("Hai scelto la carne");
        condimento1 = prompt("Aggiungi condimento: ");
        condimento2 = prompt("Aggiungi un altro condimento: ");
        
        console.log("Il tuo ordine comprende carne con " + condimento1 + " " + condimento2);
        break;

    case "Panino":
        console.log("Hai scelto il panino");
        condimento1 = prompt("Aggiungi condimento: ");
        condimento2 = prompt("Aggiungi un altro condimento: ");
        
        console.log("Il tuo ordine comprende panino con " + condimento1 + " " + condimento2);
        break;

    default:
        console.log("Non hai scelto nessun piatto");
}



const prompt = require("prompt-sync")();

let ruolo1 = "";
let ruolo2 = "";
let ruolo3 = "";

// creo 3 input
ruolo1 = prompt("Inserisci primo ruolo: ");
ruolo2 = prompt("Inserisci secondo ruolo: ");
ruolo3 = prompt("Inserisci terzo ruolo: ");

// creo 3 switch con i case per i tre ruoli
switch(ruolo1) {
    case "player":
        console.log("Player accesso al gioco");
        break;
    case "moderator":
        console.log("Moderator gestione chat");
        break;
    case "admin":
        console.log("Admin controllo totale");
        break;
    default:
        console.log("Ruolo non valido");
}

switch(ruolo2) {
    case "player":
        console.log("Player accesso al gioco");
        break;
    case "moderator":
        console.log("Moderator gestione chat");
        break;
    case "admin":
        console.log("Admin controllo totale");
        break;
    default:
        console.log("Ruolo non valido");
}

switch(ruolo3) {
    case "player":
        console.log("Player accesso al gioco");
        break;
    case "moderator":
        console.log("Moderator gestione chat");
        break;
    case "admin":
        console.log("Admin controllo totale");
        break;
    default:
        console.log("Ruolo non valido");
}


// Controllo delle combinazioni con IF
if((ruolo1 === "player" || ruolo2 === "player" || ruolo3 === "player")
    && (ruolo1 === "moderator" || ruolo2 === "moderator" || ruolo3 === "moderator")) {
    console.log("Hai sia PLAYER che MODERATOR.");
}

if(ruolo1 === "admin" || ruolo2 === "admin" || ruolo3 === "admin") {
    console.log("Hai privilegi ADMIN.");
}