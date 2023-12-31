/*
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Bonus:
- al click su annulla, si svuotano i campi e scopare il biglietto
- usare una select per far scegliere la fascia d’età all’utente
*/

// Dichiaro variabili
const usernameInputElement = document.querySelector("[name='username']");
const kmNumberInputElement = document.querySelector("[name='km-number']");
const btnConfirm = document.querySelector(".btn-confirm");
const btnCancel = document.querySelector(".btn-cancel");
const ticket = document.getElementById("ticket");
const kmPrice = 0.21;
let kmPriceTotal, sale, ticketType, ageRange;

// Creo event listener - pulsante "Genera"
btnConfirm.addEventListener("click", function () {

    // Mostro il biglietto nel caso non sia visibile
    ticket.classList.remove("d-none");

    const username = usernameInputElement.value;
    const kmNumber = parseInt(kmNumberInputElement.value);

    // Controllo dati inseriti
    if (isNaN(kmNumber) || kmNumber <= 0) {
        alert("Si è verificato un errore. Ricarica la pagina ed inserisci i dati corretti.");
    }

    // Genero casualmente la carrozza e il cp
    const cabinNumber = Math.floor(Math.random() * (9 - 1)) + 1;
    const codeCp = Math.floor(Math.random() * (99999 - 10000)) + 10000;

    // Calcolo il costo standard del biglietto
    kmPriceTotal = kmNumber * kmPrice;

    // Applico sconto
    ageRange = document.getElementById('filter').value;

    switch (ageRange) {
        case "young":
            sale = (kmPriceTotal / 100) * 20;
            ticketType = "Bambino";
            break;
        case "old":
            sale = (kmPriceTotal / 100) * 40;
            ticketType = "Over 65";
            break;
        default:
            sale = 0;
            ticketType = "Adulto";
    }

    // Calcolo costo modificato del biglietto
    kmPriceTotal = (kmPriceTotal - sale).toFixed(2);

    // Stampo valori
    document.getElementById("username").innerHTML = username;
    document.getElementById("km-price-total").innerHTML = kmPriceTotal + "€";
    document.getElementById("cabin-number").innerHTML = cabinNumber;
    document.getElementById("code-cp").innerHTML = codeCp;
    document.getElementById("ticket-type").innerHTML = ticketType;
})

// Creo event listener - pulsante "Annulla"
btnCancel.addEventListener("click", function () {

    // Ricarico la pagina per nascondere il biglietto
    location.reload();

})