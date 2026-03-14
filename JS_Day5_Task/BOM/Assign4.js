let redirectDiv = document.getElementById("redirect-counter");

let redirectCounter = setInterval(function () {
    redirectDiv.textContent -= 1;

    if (redirectDiv.textContent === "0") {
        clearInterval(redirectCounter);
        location.href = "https://elzero.org";
    }
}, 1000);