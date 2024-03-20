document.getElementById("date").valueAsDate = new Date();

var newTransaction = document.getElementById ("newTransaction");
var historyBox = document.getElementById ("history");
var noHistory = document.getElementById ("nohistory");
var money = document.getElementById ("cashValue");

function insertNew () {
    newTransaction.style.opacity = "1";
    newTransaction.style.pointerEvents = "all";
}

function closeInsert () {
    newTransaction.style.opacity = "0";
    newTransaction.style.pointerEvents = "none";
}

function insert () {
    var title = document.getElementById ("title");
    var date = document.getElementById ("date");
    var paymentType = document.getElementById ("paymentType");
    var amount = document.getElementById ("amount");

    if (paymentType.value == "Payment") {
        historyBox.prepend ("$" + amount.value + " was spent on " + title.value + " on " + date.value + "\n\n");
        historyBox.prepend (document.createElement ("hr"));
        money.innerHTML = (parseFloat(money.innerHTML) - parseFloat(amount.value));
    } else if (paymentType.value == "Deposit") {
        historyBox.prepend ("$" + amount.value + " was deposited on " + date.value + "\n\n");
        historyBox.prepend (document.createElement ("hr"));
        money.innerHTML = (parseFloat(money.innerHTML) + parseFloat(amount.value));
    }
    //noHistory.style.display = "none";
    closeInsert();
}

function reset () {
    historyBox.innerHTML="";
    //historyBox.innerHTML = "<h2>History</h2>";
    money.innerHTML="0"
}
