// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

var userWord = prompt("Prego inserire una parola");

if ( !isNaN(userWord) ) {
    alert("Per favore inserisci una parola")
} else {
    console.log(userWord);
    var wordReverse = reverseWord(userWord);
    console.log(wordReverse);

    if (userWord == wordReverse) {
        console.log("La parola da te inserita è palindroma");
    } else {
        console.log("La parola da te inserita non è palindroma");
    }

}

//--------------------------------------------------------------

function reverseWord(word) {
    var splitString = word.split("");
    var splitReverse = splitString.reverse();
    return splitReverse.join("");
}
