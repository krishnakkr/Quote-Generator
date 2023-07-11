const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author")
async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getQuote(api_url);


function tweet() {
    var tweetText = quote.innerHTML + "\n\n----by " + author.innerHTML;
    var encodedText = encodeURIComponent(tweetText);
    var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodedText;
    window.open(tweetUrl, "Tweet window", "width=600,height=300");
}
