interface User {
    firstname : string
    lastname: string
    age: number
    //  Optional
    email ?: string
}

const isLegal1 = (user: User):boolean =>{
    return user.age > 18
}

const val = isLegal1({
    firstname: "Om",
    lastname: "Singh",
    age: 19
})

console.log(val)


// Difference between Interfaces and Types is that -> Interfaces can be used to implement classes while Types cannot be used for the same 

interface Person{
    name: string
    age: number
    greet(phrase:string):void
}

class People implements Person{
    constructor(public name:string, public age:number){
    
    }
    greet(Phrase:string){
        console.log(`${Phrase} ${this.name}`)
    }
}

const me = new People("Me",20)
me.greet("Hello")