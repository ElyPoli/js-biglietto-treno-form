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
const kmNumber = parseInt(prompt("Inserisci quanti km vuoi percorrere"));
const ageNumber = parseInt(prompt("Inserisci l'età del passeggero"));
const kmPrice = 0.21;
let kmPriceTotal, sale;


// Controllo dati inseriti
if (isNaN(kmNumber) || isNaN(ageNumber) || kmNumber <= 0) {
    alert("Si è verificato un errore. Ricarica la pagina ed inserisci i dati corretti.");
}

// Calcolo il costo standard del biglietto
kmPriceTotal = kmNumber * kmPrice;

// Applico sconto
if (ageNumber < 18) {
    console.log("L'utente è minorenne");
    sale = (kmPriceTotal / 100) * 20;
}
else if (ageNumber > 65) {
    console.log("L'utente è over 65");
    sale = (kmPriceTotal / 100) * 20;
}
else {
    console.log("L'utente è un adulto");
    sale = 0;
}

// Calcolo costo modificato del biglietto
kmPriceTotal = (kmPriceTotal - sale).toFixed(2);

console.log(kmPriceTotal);

