function addTask() {
    let input = document.getElementById("inputBox");
    let list = document.getElementById("list");

    if (input.value === "") return;

    let li = document.createElement("li");
    li.innerHTML = input.value;

    li.addEventListener("click", function () {
        li.classList.toggle("checked");
    });

    let span = document.createElement("span");
    span.innerHTML = "✖";

    span.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    list.appendChild(li);

    input.value = "";
}