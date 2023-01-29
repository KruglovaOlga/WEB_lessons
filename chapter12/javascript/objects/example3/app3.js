//for CRUD

const{showOne, showAll, remove} = require('./userCRUD.js')





 

//const json = require('./data.json')
//const data = json.data

const args = process.argv; //input from cli

//console.log(args);
let command = args[2];
let values = args[3]

let results= ''

switch(command) {
    case 'create':
        console.log("Create")
        break
    case 'delete':
        results = remove(values);
        if (results.status) {
            console.log("Succesfull deleted user", results.values)
        } else {
            console.log("Problem in deleting user", results.values)
        }
    console.log("Delete")
    break
    case 'update':
        console.log("Update")
        break
    case 'showOne':
        showOne();
        console.log(results)
        break
    default:
        result = showAll()
       // console.log(JSON.parse(results))
       console.log(results)

}
/*
if (command === 'showAll'){
    //diavazei kai emfanizei
    result = readFileSync(`data.json`, `utf-8`)
    console.log(JSON.parse(results))
    //  data.forEach(val => {
    //     console.log(val.name);
    //  })
}

if (command === 'showOne'){
    result = readFileSync(`data.json`, `utf-8`)
    let user = JSON.parse(results)
    let item = user.data.find(val => val.username === values)
    console.log(item)
}
*/