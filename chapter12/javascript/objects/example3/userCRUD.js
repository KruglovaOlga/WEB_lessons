

const {readFileSync, writeFileSync} = require(`fs`)

module.exports.showOne = function(username){
    //console.log("Module Show One")
    let result = readFileSync(`data.json`, `utf-8`)
        let users = JSON.parse(results)
        let user = user.data.find(val => val.username === username)
        return user
}

module.exports.showAll = function() {
    result = readFileSync(`data.json`, `utf-8`)
    return JSON.parse(results)
}

module.exports.remove = function() {
    let results = readFileSync('data.json', 'utf-8')

    let json = JSON.parse(results)

    json = json.data.filter(function(val){
        return val.username !== username
    })

   

    json = {
        "data" : json
    }
    console.log(">>", json)
    
    try {
    writeFileSync('data.json', JSON.stringify(json)) //, {flag: 'a+'}
    return { status : true, values: username }
    } catch (err) {
        console.log(err)
        return { status: false, values : username}
    }



}

