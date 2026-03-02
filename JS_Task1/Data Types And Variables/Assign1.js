let x=10
let y=20

// Ouput
console.log(x+""+y); // Normal Concatenate => 1020
console.log(typeof(x+""+y)); // Normal Concatenate => String
console.log(`${x}${y}`); // Template Literals Way => 1020
console.log(typeof('${x}${y}')); // Template Literals Way => String

console.log(y+"\n"+x);

console.log(`${y}\n${x}`);
