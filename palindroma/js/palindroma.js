// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.


var controlBtn = document.getElementById("control_btn");
var deleteBtn = document.getElementById("delete_btn");

control_btn.addEventListener("click",
    function() {

        var userWord = document.getElementById("word").value;
        if (userWord == "" || !isNaN(userWord)) {
            alert("Inserisci una parola");
        } else {

            document.getElementById("your_word").innerHTML = "La parola da te inserita è: " + "<br>" + "<b>" + userWord + "</b>";
            var wordReverse = reverseWord(userWord);
            document.getElementById("your_word_reverse").innerHTML = "La parola inserita scritta al contrario diventa: " + "<br>" + "<b>" + wordReverse + "</b>";

            if (userWord == wordReverse) {
                document.getElementById("is_palindrome").innerHTML = "La parola inserita è palindroma";
            } else {
                document.getElementById("is_palindrome").innerHTML = "La parola inserita NON è palindroma";
            }

        }

    }
);

deleteBtn.addEventListener("click",
    function() {

        document.getElementById("word").value = "";
        document.getElementById("your_word").innerHTML = "";
        document.getElementById("your_word_reverse").innerHTML = "";
        document.getElementById("is_palindrome").innerHTML = "";

    }
)

//--------------------------------------------------------------

function reverseWord(word) {
    var splitString = word.split("");
    var splitReverse = splitString.reverse();
    return splitReverse.join("");
}
