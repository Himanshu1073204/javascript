const score = 400
// console.log(score);


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otheNumber = 1123.8966

//console.log(otheNumber.toPrecision(3))

const hunderds = 100000
// console.log(hunderds.toLocaleString('en-IN'));


// properties of numbers
//  constructor: ƒ Number()
// toExponential: ƒ toExponential()
// toFixed: ƒ toFixed()
// toLocaleString: ƒ toLocaleString()
// toPrecision: ƒ toPrecision()
// toString: ƒ toString()
// valueOf: ƒ valueOf()


// +++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());// always give value b/w 0 and 1
// console.log(Math.random()*10);

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) +1);


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1)) + min)