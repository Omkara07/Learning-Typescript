//  this function has 2 problems - 
// 1. The return type is number or string so no type specific functions (.toUpperCase()) can be used 
// 2. User can send any type of value (ie. [1,2,4,"heh","me"])

// function getFirstElement(args: (number | string)[]){
//     return args[0]
// }

// const ff = getFirstElement(["hehe",'ee'])
// ff.toLowerCase()   // causing error


// Generics
function identity<T>(args:T):T{
    return args
}

const val1 = identity<string>("heheh")
val1.toLowerCase()
const val2 = identity<number>(7)



// Original problem
function getFirstElement<T>(args: T[]):T{
    return args[0]
}

const f1 = getFirstElement<number>([21,5,6,3,7])
console.log(f1*2)

const f2 = getFirstElement<string>(["hehe","mem"])
console.log(f2.toUpperCase())

type User2 = {
    name: string
}
const f3 = getFirstElement<User2>([{name:"me"}]);
console.log(f3.name)
