console.log("Current version: 1.0.0.0")


function unavaliable() {
    alert("This feature is unavaliable at the moment. Please try again later.");
}



function calculate() {
    let plnFiveHundreds = document.getElementById("pln500").value;
    let plnTwoHundreds = document.getElementById("pln200").value;
    let plnOneHundred = document.getElementById("pln100").value;
    let plnFifty = document.getElementById("pln50").value;
    let plnTwenty = document.getElementById("pln20").value;
    let plnTen = document.getElementById("pln10").value;
    let plnFive = document.getElementById("pln5").value;
    let plnTwo = document.getElementById("pln2").value;
    let plnOne = document.getElementById("pln1").value;
    let plnFiftyCents = document.getElementById("pln0.5").value;
    let plnTwentyCents = document.getElementById("pln0.2").value;
    let plnTenCents = document.getElementById("pln0.1").value;
    let plnFiveCents = document.getElementById("pln0.05").value;
    let plnTwoCents = document.getElementById("pln0.02").value;
    let plnOneCent = document.getElementById("pln0.01").value;

    let total = plnFiveHundreds * 500 + plnTwoHundreds * 200 + plnOneHundred * 100 + plnFifty * 50 + plnTwenty * 20 + plnTen * 10 + plnFive * 5 + plnTwo * 2 + plnOne * 1 + plnFiftyCents * 0.5 + plnTwentyCents * 0.2 + plnTenCents * 0.1 + plnFiveCents * 0.05 + plnTwoCents * 0.02 + plnOneCent * 0.01;

    alert("Suma wynosi: " + total + " PLN")

}

