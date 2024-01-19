const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"));


// ++++++++++++++++++++++++++maths++++++++++++++

console.log(Math.random());

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max -min)) + min);