let input = document.querySelector("[name='dollar']");
let result = document.querySelector(".result");
input.oninput = function () {
    let usdValue = +input.value || 0;
    let egpValue = (usdValue * 52.21).toFixed(2);
    result.innerHTML = `{${usdValue}} USD Dollar = {${egpValue}} Egyptian Pound`;
};