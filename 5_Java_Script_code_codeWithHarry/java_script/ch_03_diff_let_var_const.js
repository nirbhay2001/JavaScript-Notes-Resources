console.log("JavaScript tutorial 3: var, let and const")
var a = 45;
var b = "Harry";
var b = 45 // var ko redeclare kar sakte hai
var c = null
var d = undefined

{
    var b = 'this'
    console.log(b)
}
console.log(b)

// using let 
// var a = 45;
let e = "Harry";
// let e = 4 // ye error dega kyuki let ko redeclare nahi kar sakte hai lekin var ko redeclare kar sakte haui
let c = null
let d = undefined

{
    let e = 'this'
    console.log(e) // eska mamla esi me rahga,let ak block scop type hota hai,lekin eske jagah per var  hota to  change kar deta , var ke help se bana variable ko kahi per bhi change kar skte hai
}
console.log(e) // ye this nahi harry print kar raha ahi

// constant

const author = "Harry" // eska use ak variable ko fixed karne ke liye use karte hai, author variable kabhi change nahi ho sakta hai
// let author = "Mohit" // ye error batayega kyuki author const variable hai

const book = "HC Verma"
// let book = 5 // throws an error because constant cannot be changed

book = 6 // ye error dega kyuki book ak constant variable joki constant kabhi bhi change nahi hota hai


let roh = 45
// const roh = 32 // ye bhi error show karega