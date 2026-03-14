let elCount = document.querySelector("[name='elements']");
let elText = document.querySelector("[name='texts']");
let elType = document.querySelector("[name='type']");
let createBtn = document.querySelector("[name='create']");
let results = document.querySelector(".results");
createBtn.onclick = function (e) {
  e.preventDefault();

  results.innerHTML = "";

  for (let i = 1; i <= elCount.value; i++) {
    let myElement = document.createElement(elType.value.toLowerCase());
    
    myElement.className = "box";
    myElement.title = "Element";
    myElement.id = `id-${i}`;
    myElement.textContent = elText.value;

    myElement.style.display = "inline-block";
    myElement.style.width = "150px";
    myElement.style.margin = "10px";
    myElement.style.padding = "10px";
    myElement.style.backgroundColor = "#fc6035"; 
    myElement.style.textAlign = "center";
    myElement.style.borderRadius = "5px";

    results.appendChild(myElement);
  }
};