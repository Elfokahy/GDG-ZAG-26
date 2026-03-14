let elementOne = document.querySelector(".one");
let elementTwo = document.querySelector(".two");
let tempContent = elementOne.innerHTML;
let tempTitle = elementOne.getAttribute("title");
elementOne.innerHTML = elementTwo.innerHTML;
elementOne.title = elementTwo.title;
elementTwo.innerHTML = `${tempContent} ${document.querySelectorAll("div").length}`;
elementTwo.title = tempTitle;
console.log(elementOne)
console.log(elementTwo)
