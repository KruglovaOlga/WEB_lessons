
//input from stdin
const args = process.argv.slice(2);
console.log(args)

console.log(args[2].split( ', '))
const arr1 = args[2].split(', ').map(val => Number(val))
console.log(arr1);



// const arr1 = [23, 56, 2, 47, -2, 98, 6, 57, 41, 5, 4, 357]
const arr2 = []
let min = 0;
let find = 0;

for (let i = 0; i < arr1.length; i++) {
    values = arr1.filter((val) => !isNaN(val))
    min = Math.min(...values)
    arr2[i] = min;
    find = arr1.indexOf(min)
    arr1[find] = "x"
}
console.log(arr2)
console.log(arr1)