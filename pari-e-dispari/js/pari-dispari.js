// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

var evenOdd = prompt("Pari o dispari??");

if (evenOdd == "pari" || evenOdd == "dispari") {

    console.log("La tua scelta è:", evenOdd);
    var userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
    var computerNumber = numberGenerator();

    if (userNumber >= 1 && userNumber <= 5) {
        console.log("Hai scelto il numero:", userNumber);
        console.log("Il numero scelto dal computer è:", computerNumber);

        var sum = userNumber + computerNumber;
        console.log("La somma dei numeri è:", sum);

        var winner = evenOrOdd(userNumber, computerNumber);

        if (winner == evenOdd) {
            console.log("HAI VINTO!!");
        } else {
            console.log("Purtroppo hai perso, ritenta!");
        }

    } else {
        alert("Per favore scegli un numero compreso tra 1 e 5");
    }

} else {
    alert("per favore inserisci una delle due scelte")
}

//--------------------------------------------------------------------

function numberGenerator() {
    return Math.floor((Math.random() * 5) + 1);
}

function evenOrOdd(num1, num2) {
    var result = "dispari";
    if ( ((num1 + num2) % 2) == 0) {
        result = "pari";
    }
    return result;
}
