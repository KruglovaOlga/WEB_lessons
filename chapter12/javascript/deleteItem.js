//iterate array from end to start
const grades = [1, 26, 45, 147, 43, 546, 7, 13, 29, 79]
let len = grades.length

while(len) {
    len--
    if (grades(len) === 0) {
        grades.splice(len, 1)
        
    }
}

console.log(grades)