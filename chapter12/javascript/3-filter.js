const numbers = [23, 56, 2, 47, 98]

const over10 = numbers.filter((val) => {
    if (val > 10) {
        return val;
    }
})

console.log(over10);

//const over10 = numbers.filter((val) => val > 10)