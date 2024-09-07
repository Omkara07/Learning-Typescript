let x:number = 7
console.log(x)

const st: string = "hehehe"
console.log(st)

function greet(name:string):void{
    console.log("hello" + name)
}

greet("Omm")

//  Type inference
function sum(num1:number, num2:number):number{
    return num1 + num2
}

console.log(sum(7,4));

//  age func
const isLegal = (age:number):boolean =>{
    return age>=18
}

console.log(isLegal(55))

//  Passing a function to a function
function runAfter1s(fn: () => void){
    setTimeout(fn,1000)
}

runAfter1s(():void=>{
    console.log("hey there")
})