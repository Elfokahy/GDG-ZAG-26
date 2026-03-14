let counterDiv = document.getElementById("counter");

let countdown = setInterval(function () {
    counterDiv.textContent -= 1;

    if (counterDiv.textContent === "0") {
        clearInterval(countdown);
    }
}, 1000);