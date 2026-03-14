let counterDiv = document.getElementById("counter");

let count = setInterval(function () {
  counterDiv.innerHTML -= 1;

  if (counterDiv.innerHTML === "5") {
    window.open(
      "https://elzero.org",
      "_blank",
      "width=400,height=400,left=200,top=200"
    );
  }

  if (counterDiv.innerHTML === "0") {
    clearInterval(count);
  }
}, 1000);