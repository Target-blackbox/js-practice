const score = 400

const balance = new Number(1200)
console.log(balance);
console.log(score);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const onum = 23.374

console.log(onum.toPrecision(4));

const hund = 10000000
console.log(hund.toLocaleString("en-IN"));

//+++++++++++++++++++++++++++MATHS++++++++++++++//

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.574));
console.log(Math.ceil(4.26));
console.log(Math.floor(4.26));
console.log(Math.min(1,2,4,42,8));
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min +1))+min)




