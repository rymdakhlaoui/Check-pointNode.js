
let calcul = require("./localModules.js");

let a= 6;

let b= -4;
console.log(`the sum of ${a} and ${b} is:`, calcul.sum(a, b))

console.log(`the minus of ${a} and ${b} is:`, calcul.minus(a, b));

let a= require("./test/test.js");