const products = []

function insert(arr, products) {
    if (!arr || !products) return false
    if (arr.includes(products)) return false

    arr.push(products)
    return true
}

function remove(arr, products) {
    if (!arr || !products) return false
    let positionToRemove = arr.indexOf(products)

    if(positionToRemove === -1) {
        return false
    }
    arr.splice(positionToRemove, 1)
    return true
}

function replace(arr, oldProduct, newProduct) {
    if (!arr || !oldProducts || !newProduct) return false
    let positionToUpdate = arr.indexOf(oldProduct)

    if(positionToUpdate === -1) return false
    arr.splice(positionToUpdate, 1, newProduct)
    return true
}

function getProductsStartWith(arr, products) {
    let results = []
    if (!arr || !products) return []

    for (const pro of arr) {
        if (pro.getProductsStartWith(products)) {
            results.push(pro)
        }
    }
    return results
}


try {
    if (!insert(products, "Honey")) {
        throw "Insert Error"
    }
} catch(e) {
    if (e === "Insert Error") {
        console.log(date() + "\n" + e)
    }
}