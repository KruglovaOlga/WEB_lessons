// let choice = 3

// if (choise === 1) {
//     console.log("Insert")
// } else if (choice === 2) {
//     console.log("Delete")
// } else if (choice === 3) {
//     console.log("Select") 
// } else if (choice === 4) {
//     console.log("Update")
// } else {
//     console.log("Quit")
// }

/************************************ */
// let choice = 5

// switch (choice) {
// case 1 :
//     console.log("Insert")
//     break
// case 2 :
//     console.log("Delete")
//     break
// case 3 :
//     console.log("Select")
//     break
// case 4 :
//     console.log("Update")
//     break
// case 5 :
//     console.log("Quit")
//     break
// default :
//     console.log("Invalid choice")
//     break
// }

/********************************************** */

let num1 = 3, num2 = 5, result;
let operator = '+'

switch (operator)
{
    case '+' : result = num1 + num2; break;
    case '-' : result = num1 - num2; break;
    case '*' : result = num1 * num2; break;
    case '/' : result = num1 / num2; break;
    default : result = 0;
}

document.write(`${num1} + ${num2} = ${result}`)

