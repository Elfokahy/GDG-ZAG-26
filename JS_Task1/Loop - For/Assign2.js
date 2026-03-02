let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i >= stop; i--) {
  if (i < start) {
    console.log(`0${i}`);
  } else {
    console.log(`${i}`);
  }
}