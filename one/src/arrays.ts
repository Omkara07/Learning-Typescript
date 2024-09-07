//  get the max element in an array
const getMax = (nums: number[]):number =>{
    return Math.max(...nums)
}

const arr = [1,2,5,8,4,6,7,7,2,11,5,6,8,5,3,2,2,5]
const maxVal = getMax(arr)

console.log(maxVal)


// from an array of user filter out the user that are > 18 yr old
type Users = {
    name: string
    age: number
}

const getLegalUser = (users: Users[]):Users[] =>{
    return users.filter((u)=>u.age>18)
}

const userss:Users[] = [{name:"me1",age:19},{name:"me2",age:21},{name:"me3",age:15},{name:"me4",age:20},{name:"me5",age:10},{name:"me6",age:18}]
const LegalUsers:Users[] = getLegalUser(userss)

console.log(LegalUsers)
