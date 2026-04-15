const themeIcon = document.getElementById("theme-icon");

themeIcon.onclick = function() {
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")) {
        themeIcon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "dark"); 
    } else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "light"); 
    }
}

window.onload = function() {
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }
}