/*
// Following two lines will run successfully due to JavaScript hoisting
console.log(a)
greet()
function greet(){
    console.log("Good morning")
}

var a;
var a = 9; // Declaration hoisted to the top but initialization is not
console.log(a) 
*/
// Hoisting with let and var

/*
let a;
console.log(a)
greet()
function greet(){
    console.log("Good morning")
}

// var a;
// let a = 9; 
console.log(a) 
*/

// let a;
console.log(a)
greet()
function greet(){
    console.log("Good morning")
}

// var a;
const a = 9; 
console.log(a) 