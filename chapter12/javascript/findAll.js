/**
 * Returns an array of indexes of occurences
 * of a value x in array arr
 * 
 * @param {Array} arr - the sourcr array
 * @param {Number} x - the element to find
 * @throws an error if there are not such element or array
 */
function findAll (arr, x) {
    if (!arr || !x) return []

/*Αναζητά σε ένα πίνακα arr ένα στοιχείο x και εισάγει σε
ένα πίνακα results όλες τις εμφανίσεις (τα indexes) του x */
    const results = []       //the array of indexes to return
    let len = arr.length   //the length of the source array
    let pos = 0            // the position to search from

    while (pos < len) {     //while not end of array
        pos = arr.indexOf(x, pos)   // pos is the first occurence of x in arr starting from pos
        if (pos === -1) break       // if x not found, break
        results.push(pos++)         //if found, push and increase pos so start next search at next element

    }
    return results                   // return the array of indexes
}

console.log(findAll([1, 2, 2, 5, 7, 2, 9, 2], 2))