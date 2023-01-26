const arr = [5, 7, 1, 9, 4]

function getMinPosition(arr) {
    
    //arr.sort((a, b) => a - b)
    //console.log(arr(0))


    if (!arr || !arr.length) return -1
    let minPos = 0;
    let min = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
            minPos = i
        }
    }
    return minPos
}

let minPosition = getMinPosition(arr)
console.log(`min value: ${arr[minPosition]}, Min position: ${minPosition + 1}`)