function createPopup() {
    let overlay = document.createElement("div");
    let popup = document.createElement("div");
    let closeBtn = document.createElement("span");
    let title = document.createElement("h2");
    let text = document.createElement("p");

    title.textContent = "Welcome";
    text.textContent = "Welcome To Elzero Web School";
    closeBtn.textContent = "x";
    Object.assign(popup.style, {
        position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        backgroundColor: "#f5f5f5", padding: "40px", border: "1px solid #ccc",
        textAlign: "center", width: "400px", fontFamily: "Arial"
    });

    Object.assign(closeBtn.style, {
        position: "absolute", top: "-10px", right: "-10px", backgroundColor: "red",
        color: "white", width: "25px", height: "25px", borderRadius: "50%",
        cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center"
    });

    popup.appendChild(closeBtn);
    popup.appendChild(title);
    popup.appendChild(text);
    document.body.appendChild(popup);

    closeBtn.onclick = function() {
        popup.remove();
    };
}

setTimeout(createPopup, 5000);