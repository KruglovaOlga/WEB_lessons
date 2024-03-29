const numbers = [34, 23, 1, 23]

const numbers2 = numbers.map(function(val){
    return val*2;
})

console.log(numbers2);

const data = [
    {username:"admin", name: " admin", surname: " surname1"},
    {username:"user1", name: " name1", surname: " surname2"},
    {username:"user2", name: " name2", surname: " surname3"}
]

let item = {
    username : "user2",
    name : "name2x",
    surname: "surname2X"
}

let items = data.map(obj => {
    if (obj.username === item.username) {
        return {...obj, surname:item.surname, name:item.name}
    }
    return obj
})

console.log(">>>", item)