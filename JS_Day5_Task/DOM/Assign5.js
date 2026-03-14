let myImages = document.querySelectorAll("img");
myImages.forEach((img) => {
  if (img.hasAttribute("alt")) {
    img.setAttribute("alt", "Old");
    
  } else {
    
    img.setAttribute("alt", "Elzero New");
    console.log(img)
  }
});