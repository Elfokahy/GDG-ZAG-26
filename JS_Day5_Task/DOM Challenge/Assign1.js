// --- (1) Header Section ---
let header = document.createElement("header");
header.className = "website-header";
header.style.cssText = "display: flex; padding: 20px; background-color: rgb(255, 255, 255); justify-content: space-between; align-items: center;";

let logo = document.createElement("div");
logo.className = "logo";
logo.title = "Website Logo";
logo.style.cssText = "font-weight: bold; color: rgb(35, 169, 110); font-size: 26px;";
logo.textContent = "Elzero";

let menu = document.createElement("ul");
menu.className = "menu";
menu.style.cssText = "padding: 0px; margin: 0px; display: flex; list-style: none;";

let menuItems = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < menuItems.length; i++) {
    let li = document.createElement("li");
    li.style.marginLeft = "15px";
    li.style.color = "#666";
    li.style.cursor = "pointer";
    li.textContent = menuItems[i];
    menu.appendChild(li);
}

header.appendChild(logo);
header.appendChild(menu);
document.body.appendChild(header);

// --- (2) Content Section ---
let content = document.createElement("div");
content.className = "content";
content.style.cssText = "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); background-color: rgb(236, 236, 236); box-sizing: border-box;";

for (let i = 1; i <= 15; i++) {
    let product = document.createElement("div");
    product.className = "product";
    product.style.cssText = "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px;";
    
    let span = document.createElement("span");
    span.style.cssText = "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px;";
    span.textContent = i;
    
    product.appendChild(span);
    product.append("Product"); 
    content.appendChild(product);
}

document.body.appendChild(content);

// --- (3) Footer Section ---
let footer = document.createElement("footer");
footer.className = "footer";
footer.style.cssText = "background-color: rgb(35, 169, 110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255, 255, 255);";
footer.textContent = "Copyright 2021";

document.body.appendChild(footer);

// --- General Body Styling ---
document.body.style.cssText = "margin: 0px; background-color: rgb(236, 236, 236); font-family: Tahoma, Arial;";