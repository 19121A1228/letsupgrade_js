function newQuote() {
var quotes = []
var n = prompt(" Enter your quote", );
quotes.push(n);
document.getElementById("quote").innerHTML = "The Quote you entered is " + quotes;
}