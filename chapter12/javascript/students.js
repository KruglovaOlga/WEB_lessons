const students = [
    {name : "Alice", age : 17},
    {name : "Mary", age : 23},
    {name : "Anna", age : 40},
    {name : "Olga", age : 579}
]

let studentsOver18 = students.filter(stu => stu.age > 18)

let average = students.reduce((sum, stu, _, {length}) =>
    sum + stu.age / length, 0)