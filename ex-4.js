// Start coding here
// add
const add = (a,b) => a + b
// subtract
const subtract =(a,b) => a - b
// multiply
const multiply =(a,b) => a * b
// divide
const divide =(a,b) => a / b
let calculator = {};
calculator.add = add
calculator.subtract= subtract
calculator.multiply= multiply
calculator.divide = divide
let addResult = calculator.add(10,20)
console.log(addResult)
let divideResult = calculator.divide(3000,10)
console.log(divideResult)