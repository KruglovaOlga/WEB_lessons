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

//let out = ""
for (let item of array3) {
    out += item + ", "
}
console.log(out)

/*• Αν θέλουμε και τα indexes με τον for/of
μπορούμε να πάρουμε την
Object.entries() με array Destructuring
στα [i, item]
*/
//let out = ""
for (let [i, item] of Object.entries(array3)) {
    out += `[${i} : ${item}]`
}
console.log(out)

/* • H forEach() λαμβάνει υπόψη τα sparse
arrays και δεν εκτυπώνει τα
undefined elements*/
//let out = ""
array3.forEach(elem => out += elem + ", ")
console.log(out)

/* • Η concat δεν κάνει modify το array στο οποίο
καλείται. Δημιουργεί ένα καινούργιο copy*/
let b10 = [1, 2, 3]
b10.concat(4,[5, 6]) //[1, 2, 3, 4, 5, 6] length=6

/*Η delete δημιουργεί sparse arrays, δεν μειώνεται το
length.*/
let grades = [8, 9, 6, 5, 2]
delete grades[0]
console.log(grades)  //[empty, 9, 6, 5, 2]

/*Η push() προσθέτει στο τέλος*/
grades.push(10) // [empty, 9, 6, 5, 2, 10]

/*Η splice() είναι μία γενική μέθοδος που
επιτρέπει insert, remove, replace
• Τεχνικά κάνει remove ’slices’ (subarrays) από το
αρχικό array και (προαιρετικά) τα αντικαθιστά */
let b9 = [1, 2, 3, 4, 5, 6, 7, 8]
b9.splice(0, 4) //[1, 2, 3, 4] are deleted, b9=[5, 6, 7, 8]
b9.splice(2, 1) // [7], b9=[5, 6, 8], Delete από τη θέση με index 2 ένα στοιχείο
b9.splice(1, 0, 17) // 0 items deleted from position 1. At this position add 17
                    // All other elements (6, 8) will shift right b9=[5, 17, 6, 8] "insert"
b9.splice(1, 1, 12) // delete and insert at position index 1. b9=[5, 12, 6, 8] "update"
b9.unshift(0) //b9=[0, 5, 12, 6, 8]   

let b8 = Array(5)
b8.fill(0)  //fill with zeros
b8.fill(5, 1) // fill with 5, start-index is 1
b8.fill(8, 2, 3)  //fill with 8, start-index 2, end-index 3-1 = 2
//Το τελευταίο στοιχείο είναι endIndex -1

b8.copyWithin(0, 2) //copies elements with startIndex 2 till the end at position 0
b8.copyWithin(3, 0, 2) //copies at position index 3, the 2 elements from index 0 to 1
//Μπορεί η 2 η παράμετρος να έχει και αρνητικές τιμές, οπότε είναι το offset από το τέλος

