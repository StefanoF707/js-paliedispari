// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.


var playBtn = document.getElementById("go_btn");

go_btn.addEventListener("click",
    function() {

        var userChoise = document.getElementById("even_odd").value;
        var userNumber = document.getElementById("number").value;

        if (userChoise == "not_work") {
            alert("Per favore scegli una delle due opzioni");
        } else {

            if (userNumber < 1 || userNumber > 5) {
                alert("Inserisci un numero da 1 a 5");
            } else {

                var choise1 = "PARI";
                var choise2 = "DISPARI";
                if (userChoise == "even") {
                    document.getElementById("human_choise").innerHTML = "La tua scelta è:" + "<br>" + "<b>" + choise1 + "</b>";
                    document.getElementById("computer_choise").innerHTML = "La tua scelta è:" + "<br>" + "<b>" + choise2 + "</b>";
                } else if (userChoise == "odd") {
                    document.getElementById("human_choise").innerHTML = "La tua scelta è:" + "<br>" + "<b>" + choise2 + "</b>";
                    document.getElementById("computer_choise").innerHTML = "La tua scelta è:" + "<br>" + "<b>" + choise1 + "</b>";
                }

                var computerNumber = numberGenerator();

                document.getElementById("human_number").innerHTML = "Il tuo numero è:" + "<br>" + "<b>" + userNumber + "</b>";
                document.getElementById("computer_number").innerHTML = "Il tuo numero è:" + "<br>" + "<b>" + computerNumber + "</b>";

                var sum = parseInt(userNumber) + parseInt(computerNumber);
                document.getElementById("numbers_result").innerHTML = "La somma dei numeri è:" + "<br>" + "<b>" + sum + "</b>";

                var evenOdd = evenOrOdd(userNumber, computerNumber);
                var finalResult;
                if (evenOdd == "even") {
                    finalResult = "PARI";
                } else {
                    finalResult = "DISPARI";
                }
                document.getElementById("choises_result").innerHTML = "Pari o Dispari:" + "<br>" + "<b>" + finalResult + "</b>";

                if (evenOdd == userChoise) {
                    document.getElementById("is_winner").innerHTML = "HAI VINTO!";
                } else {
                    document.getElementById("is_winner").innerHTML = "HAI PERSO!";
                }
                document.getElementById("players_container").className = "show";
            }
        }


    }
);

var deleteBtn = document.getElementById("delete_btn");
deleteBtn.addEventListener("click",
    function() {
        document.getElementById("players_container").className = "hidden";

        document.getElementById("even_odd").value = "not_work";
        document.getElementById("number").value = "";
        document.getElementById("human_choise").innerHTML = "";
        document.getElementById("computer_choise").innerHTML = "";
        document.getElementById("human_number").innerHTML = "";
        document.getElementById("computer_number").innerHTML = "";
        document.getElementById("numbers_result").innerHTML = "";
        document.getElementById("choises_result").innerHTML = "";
        document.getElementById("is_winner").innerHTML = "";
    }
);



//--------------------------------------------------------------------

function numberGenerator() {
    return Math.floor((Math.random() * 5) + 1);
}

function evenOrOdd(num1, num2) {
    var result = "odd";
    if ( ((num1 + num2) % 2) == 0) {
        result = "even";
    }
    return result;
}
