let birthDate = new Date("2005-02-14");
let now = new Date();

let diffInMs = now - birthDate;

let seconds = Math.floor(diffInMs / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);
let months = Math.floor(days / 30); 
let years = Math.floor(days / 365); 

console.log(`"${seconds} Seconds"`);
console.log(`"${minutes} Minutes"`);
console.log(`"${hours} Hours"`);
console.log(`"${days} Days"`);
console.log(`"${months} Months"`);
console.log(`"${years} Years"`);