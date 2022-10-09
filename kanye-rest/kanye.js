document.getElementById("loadQuote").addEventListener('click', function(){
    fetch("https://api.kanye.rest")
    .then(res => res.json())
    .then(data => showingQuotes(data))
})

const showingQuotes = (quotes) => {
    const quote = document.getElementById("quote");
    quote.innerText = quotes.quote;
}