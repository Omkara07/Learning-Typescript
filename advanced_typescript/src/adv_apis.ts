interface User1{
    name: string,
    readonly age: number,  // age is readonly so it cannot be changed 
    password: string,
    email: string,
    cont_number ?: number,
    readonly ispaid ?: boolean
}

// this will pick only the following 2 props from the user interface 
// for a selected profile displays only name and email
type UpdateProps = Pick<User1, "name"|"email">

//  partial makes all the elements optional (ie, name and email in updateProps are optional now)
type updatePropsOptional = Partial<UpdateProps>

// entire object is readonly 
function getReadonlyUser(user: Readonly<UpdateProps>){
    // update user with DB calls
    console.log(`name: ${user.name} and email: ${user.email}`)
}

function getUpdatedUser(user: updatePropsOptional){
    // update user with DB calls
    console.log(`name: ${user.name} and email: ${user.email}`)
}

const u1:User1 = {
    name: "me",
    age: 20,
    password:"hehe",
    email: "m@e"
}

// u1.age = 0   // age cant be changed 
getUpdatedUser(u1)
getUpdatedUser({})


// use case of Readonly 
interface Config {
    apiEndpoint : string,
    apiKey : string
}
//  keep the config object a constant
const config : Readonly<Config> = {
    apiEndpoint: "https://abs.com",
    apiKey: "heheheh"
}