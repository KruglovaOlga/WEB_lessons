const arr = [5, 7, 1, 9, 4]

function getMaxValue(arr) {
    if (!arr || !arr.length) return -1
    let maxPos = 0;
    let max = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
            maxPos = i
        }
    }
    return max
}

let maxValue = getMaxValue(arr)
console.log(`Max value: ${maxValue}`)