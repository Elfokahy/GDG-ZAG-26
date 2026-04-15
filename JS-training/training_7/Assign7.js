const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const api_url = "https://api.api-ninjas.com/v1/quotes";

async function getQuote() {
    try {
        const response = await fetch(api_url, {
            method: "GET",
            headers: {
                "X-Api-Key": "1t0Kk1RuxydTzhtIsHcj5QicVytgNso1MmjViEGW" // ← حط المفتاح هنا
            }
        });

        const data = await response.json();

        quoteEl.innerHTML = `"${data[0].quote}"`;
        authorEl.innerHTML = `- ${data[0].author}`;

    } catch (error) {
        quoteEl.innerHTML = "Error loading quote ";
        authorEl.innerHTML = "";
        console.log(error);
    }
}

function tweetQuote() {
    let quote = quoteEl.innerText;
    let author = authorEl.innerText;

    let tweetText = quote + " " + author;

    let url = "https://twitter.com/intent/tweet?text="
        + encodeURIComponent(tweetText);

    window.open(url, "_blank");
}

getQuote();