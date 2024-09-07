//  Types in Typescript

type User1 = {
    firstname: string
    lastname: string
    age:number
}

function sayHi(u:User1): void{
    console.log(`Hi ${u.firstname}`)
}

sayHi({
    firstname:"Me",
    lastname: "mm",
    age: 20
})


// accepts both number and string types 
type idType = number | string;

function getId(id: idType):void{
    console.log(id)
}

getId(7)
getId("7")


// Intersections
type emp = {
    name:string
    id: number
}

type manager = {
    name: string
    dept: string
}

// have properties of both the types
type Userr = emp & manager

const u:Userr = {
    name: "me",
    id:77,
    dept: "Dev"
}

console.log(u.id)