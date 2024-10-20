// Destructive Object

/*
let arr = [3,5]
// No need to do this:
let a = arr[0]
let b = arr[1]
*/
/*
let arr = [3,5,8]
let [p,q] = arr
console.log(a,b)
*/

/*
let array = [3,5,8,9,12,14]
let [a,b,c,d,...rest] = array
console.log(a,b,c,d,rest)
*/

/*
let array = [3,5,8,9,12,14]
let [a, , ,  ...rest] = array
console.log(a,rest)
*/

/*
let array = [3,5,8,9,12,14]
let { a,b } = { a:1, b:5}
console.log(a,b)
*/

// Spread Syntax
/*
let arr1 = [3, 5, 8]
let obj1 = { ...arr1 }
console.log(obj1)
*/

let arr1 = [3, 5, 8]
function sum(v1, v2, v3){
    return v1 + v2 + v3
}

let a = sum(...arr1)
console.log(a)


let obj2 = {
    name: "Harry",
    company: "Company xyz",
    address: "XYZ"

}

console.log({ ...obj2, name: "John"}) // esase name Harry ke jagah per John ho jayega
console.log({ ...obj2, name: "John", company: "ABC"}) // esme name aur company overide ho jayega kyuki obj2 pahle aa raha hai bad me name aur company aa raha hai jasase name aur company overide ho jayega


console.log({name: "John", company: "ABC", ...obj2}) // esme name aur company overide nahi hoga , obj2 jas ke tas print ho jayega esme aisa ealiye ho raha hai ki name aur company pahle aa raha hai uake bad me obj2 aa raha hai  
