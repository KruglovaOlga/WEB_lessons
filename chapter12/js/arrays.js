let arr = []  //Empty array
let primes = [2, 3, 5, 7, 11, 13] //Array with 6 elements
let misc = [5, false, 1.5, 'Hello', ] // Array with 4 different elements and trailing comma
let grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] //3x3  2D Array
let objArr = [{id: 1, name: "Honey", price: 12.8}, { id: 2, name: "Milk", price: 1.5}] //array of objects
let count = [1,,3] // Sparse array, no element at position 1
let undefs = [,,]  // undefs.length === 2. optional trailing comma

/*Ο … spread operator δουλεύει μόνο σε
Iterable objects. Τα strings είναι Iterable*/
let initial = [1, 2, 3]
let postInitial = [0, ...initial, 4] //[0, 1, 2, 3, 4]
let chars = [..."Coding Factory"]

let ar = Array(5)  //declares an array of 5 undefined elements
let ara = new Array(5)  //array constructor function can be used with or without new

let arrr = Array(1, 2, 3, 4, 5) //array of length 5 with specific elements


//multi-dimensional array
// 2D array on a[] - each element of a[] is an array of 2 elements
let a = Array(3)
for (let i = 0; i < a.length; i++){
    a[i] = new Array(2)
    for (let j = 0; j < a[i].length; j++) {
        a[i][j] = `[${i} ${j}]`
    }
}

// .from gets an iterable and transforms (and copies) it to array
//works like spread operator. Both spread operator and .from static
//methods work also on array-like objects
let array1 = Array(5)
let array2 = Array.from(array1)

let array3 = [1, 2, 3, 4, 5, 6,,8, 9, 10] //Sparse Array, length is 10, array3[6] is undefined
let out = ""
for (let i = 0; i < array3.length; i++) {
    out += array3[i] + ", "
}
console.log(out)

//or

//let out =
