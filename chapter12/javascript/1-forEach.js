const numbers = [45, 2, 56, 15]
numbers.forEach(function(x){
    console.log(x)
    //number.forEach((x => console.log(x)))
})

const data = [
    {username:"admin", name: " admin", surname: " surname1"},
    {username:"user1", name: " name1", surname: " surname2"},
    {username:"user2", name: " name2", surname: " surname3"}
]

data.forEach(function(val){
    console.log(val.username, val.name);
})