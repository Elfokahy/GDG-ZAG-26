
let images = document.querySelectorAll("img");
images.forEach((img) => {
img.src ="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
img.alt="Elzero Logo";
console.log(img.parentElement);});