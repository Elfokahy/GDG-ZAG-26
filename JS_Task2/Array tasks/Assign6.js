let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr2[arr2.indexOf("F")].toLowerCase() + arr1[arr1.indexOf("X")].toLowerCase() + arr2[arr2.indexOf("Y")].toLowerCase();

console.log(allArrs); // fxy