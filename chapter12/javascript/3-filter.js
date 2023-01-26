const numbers = [23, 56, 2, 47, 98]

const over10 = numbers.filter((val) => {
    if (val > 10) {
        return val;
    }
})

console.log(over10);

//const over10 = numbers.filter((val) => val > 10)

/*********************************** 
const quarterSales = [1000, 2000, 3000, 6000]
let netProfits = quarterSales.map(function(val) {
    return val * 0.7
})

console.log(netProfits)
let netProfitsGT1500 = netProfits.filter(profits => profits > 1500)
console.log(netProfitsGT1500)
let sumOfNetProfits = netProfits.reduce(function(total, profit) {
    return total + profit}, 0)

console.log(sumOfNetProfits)

*/