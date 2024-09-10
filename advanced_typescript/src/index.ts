interface User{
    name: string,
    age: number
}

function getTotAge(u1:User, u2:User):number{
    return u1.age + u2.age
}

const age = getTotAge({
    name:"me",
    age:20
},{
    name: "u",
    age:21
})

console.log(age)