function createPassword() {
    let length = 12;

    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let password = "";

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * chars.length);
        password += chars[random];
    }

    document.getElementById("password").value = password;
}

// 📋 Copy
function copyPassword() {
    let passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
}