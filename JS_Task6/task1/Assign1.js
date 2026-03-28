let fontSelect = document.getElementById("font-family");
let colorSelect = document.getElementById("color");
let sizeSelect = document.getElementById("font-size");

for (let i = 16; i <= 30; i++) {
    let opt = document.createElement("option");
    opt.value = i + "px";
    opt.innerHTML = i + "px";
    sizeSelect.appendChild(opt);
}

function updateStyles() {
    document.body.style.fontFamily = fontSelect.value;
    document.body.style.color = colorSelect.value;
    document.body.style.fontSize = sizeSelect.value;

    localStorage.setItem("font", fontSelect.value);
    localStorage.setItem("color", colorSelect.value);
    localStorage.setItem("size", sizeSelect.value);
}

window.onload = function () {
    if (localStorage.getItem("font")) {
        fontSelect.value = localStorage.getItem("font");
        colorSelect.value = localStorage.getItem("color");
        sizeSelect.value = localStorage.getItem("size");
        
        document.body.style.fontFamily = localStorage.getItem("font");
        document.body.style.color = localStorage.getItem("color");
        document.body.style.fontSize = localStorage.getItem("size");
    }
};

fontSelect.onchange = updateStyles;
colorSelect.onchange = updateStyles;
sizeSelect.onchange = updateStyles;