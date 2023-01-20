const arr1 = [23, 56, 2, 47, -2, 98, 6, 57, 41, 5, 4, 357]
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