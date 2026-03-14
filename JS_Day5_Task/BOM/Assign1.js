let range = prompt("Print Number From – To", "5-20");

let numbers = range.split("-").map(Number);

let start = Math.min(numbers[0], numbers[1]);
let end = Math.max(numbers[0], numbers[1]);

for (let i = start; i <= end; i++) {
    let numDiv = document.createElement("div");
    numDiv.textContent = i;
    document.body.appendChild(numDiv);
}