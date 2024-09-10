//  without Records
// type U = {
//     [key:string] : {age:number, name:string}
// }

// Records
// create a map like structure (key, value pair) with string as the key and below object as value 
type Users = Record< string , {age:number, name: string}>

const u:Users = {
    "uID1": {age:20, name : "me"},
    "uID2": {age:21, name : "u"},
}

//  Maps (Javasript concept) - Another way to user key, value pairs

type Usr = {
    name:string,
    age: number
}

const U = new Map<string, Usr>()
U.set("uID1", {age:20, name : "me"})
U.set("uID2", {age:21, name : "u"})

console.log(U.get("uID1"))


//  Exclude
//  exclude is oppsoite of pick which exclude some values or props from the type
type ExcludeEvent = "click" | "scroll" | "mousemove";

type event = Exclude<ExcludeEvent, "scroll">;  // mousemove | click

function getEvent(move: event):void{
    console.log(`You moved : ${move}`)
}

getEvent("click")
// getEvent("scroll")  // shows error

