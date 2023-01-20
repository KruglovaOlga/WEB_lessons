const numbers = [23, 56, 2, 47, 98]

let over20 = numbers.every((val) => val > 20)
console.log(over20);  //return false

let someOver20 = numbers.some((val) => val > 20)
console.log(someOver20); //return true