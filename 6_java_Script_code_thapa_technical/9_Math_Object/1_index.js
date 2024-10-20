/*
 Math object in JavaScript 
 --> The JavaScript Math object allows you to perform mathematical task on number.

*/

console.log(Math.PI);

// Math.round() --> returns the value of x rounded to its number
let num = 10.2565;
console.log(Math.round(num));

// Math.pow() --> Math.pow(x,y) returns the value of x to the power of y
console.log(Math.pow(2,3)); // output: 8
console.log(2**3); // output: 8

// Math.sqrt() --> Math.sqrt(x) returns root of x
console.log(Math.sqrt(25));
console.log(Math.sqrt(66));


// math.abs() --> Math.abs(x) returns the absolute (positive) value of x

console.log(Math.abs(-55)); // output: 55
console.log(Math.abs(-55.5)); // output: 55.5
console.log(Math.abs(4-6)); // output: 2


// Math.ceil() --> Math.ceil(x) returns the value of x rounded up to its nearest integer.
console.log(Math.ceil(4.51)); // output: 5
console.log(Math.round(4.51)); // output: 5
console.log(Math.ceil(99.1)); // output: 100
console.log(Math.round(99.1)); // output: 99


// Math.floor() --> Math.floor(x) returns the value of x rounded down to its nearest integer.
console.log(Math.floor(4,7)); // output: 4
console.log(Math.floor(99.9)); // output: 99


// Math.min() --> Math.min() can be used to find lowest value in a list of argument.
console.log(MAth.min(0,150,30,20,-8,-200)); // output: -200



// Math.max() --> Math.max() can be used to find highest value in a list of argument.
console.log(MAth.max(0,150,30,20,-8,-200)); // output: 150



// Math.random() --> Math.random() returns a random number between 0 (inclusive), and 1
console.log(Math.random());
console.log(Math.floor(Math.random()*2)); // 0 to 9
console.log(Math.floor(Math.random()*10));



// Math.trunc() --> The trunc() method returns the integer part of a number i.e ye decimal ke pahle number ko return kar deta hai
console.log(Math.trunc(4.6)); // output: 4
console.log(Math.trunc(-99.1)); // output: -99