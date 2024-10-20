
 // Arrow Function
// Normal way of writing function

console.log(sum());

function sum(){
    let a = 5; 
    let b = 6;
    let sum = a + b;

    return `the sum of the two number is ${sum}`;

}

// How to convert in into fat Arrow Function
const sum = () => {
    let a = 5; 
    let b = 6;
    let sum = a + b;

    return `the sum of the two number is ${sum}`;
}

console.log(sum());
