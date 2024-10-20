/*
 Object Oriebted JavaScript
    1. What is Object Literal?
        --> Object literal is simply a key:value pair data structure.
        --> Storing variable and functions together in one container, we can refer this as an Object.
    
    2. What is this Object?
        --> The definition of "this" object is that it contain the current context.
        --> The this object can have different values depending on where it is placed.


*/

// How to crteate an Object

// 1st Way
let bioData1 = {
    myName : "thapatechnical",
    myAge : 26,
    getData : function(){
        console.log(`My name is ${bioData1.myName} and my age is ${bioData1.myAge}`);
    }
}

console.log(bioData1.myName);
console.log(bioData1.getData());
bioData1.getData();


// 2nd way no need to write function as well after es6

let bioData2 = {
    myName : "thapatechnical",
    myAge : 26,
    getData (){
        console.log(`My name is ${bioData2.myName} and my age is ${bioData2.myAge}`);
    }
}

bioData2.getData();


// What if we want object as a value inside an Object

let bioData = {
    myName : {
        realName : "vinod",
        channelName : "Thapa Technical"
    },
    myAge : 26,
    getData (){
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    }
}

bioData.getData();
console.log(bioData.myName.channelName);



// Example for this Keyword

// ex 1
console.log(this); // --> it refers to the current context and that is window global object
console.log(this.alert('Awesome'));


// ex 2
function myName() {
    console.log(this);
}
myName(); // yaha per bhi 'this' object ka current context window hi dikha raha hai

// ex 3
let myNames = 'vinod'; // myName global scope variable hai
function myName() {
    console.log(this.myNames);
}
myName(); // output : vinod

// ex 4
const obj1 = {
    myAge : 26,
    myName(){
        console.log(this);
    }
}
obj1.myName(); // yaha per 'this' object ka current context obj hai; output : {myAge: 26, myName: [Function: myName]}

// ex 5
const obj = {
    myAge : 26,
    myName(){
        console.log(this.myAge);
    }
}
obj.myName(); // output: 26
// jab 'this' keyword kisi function ya normal aise hi use karte hai to eska current context window hota hai lekin jab ese hum kisi object ke ander use karte hai eska current context object hi hota hai

