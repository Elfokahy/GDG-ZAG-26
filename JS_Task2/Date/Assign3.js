let date = new Date();

date.setDate(0);

console.log(`"${date}"`);

let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let monthName = monthNames[date.getMonth()];

let lastDay = date.getDate();

console.log(`"Previous Month Is ${monthName} And Last Day Is ${lastDay}"`);