let inputs = document.querySelectorAll("input");
let select = document.querySelector("select");

window.onload = function () {
  inputs.forEach((input) => {
    if (sessionStorage.getItem(input.id)) {
      input.value = sessionStorage.getItem(input.id);
    }
  });

  if (sessionStorage.getItem("select-box")) {
    select.value = sessionStorage.getItem("select-box");
  }
};

  inputs.forEach((input) => {
  input.oninput = function () {
    sessionStorage.setItem(input.id, input.value);
  };
});

select.onchange = function () {
  sessionStorage.setItem("select-box", select.value);
};