/*
    Destructuring in ES6
        --> The destructuring assignment syntax is JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

*/

// Array Destructuring

const myBioData = ['vinod','thapa',26];


let myFName1 = myBioData[0];
let myLName1 = myBioData[1];
let myAge1 = myBioData[2];
console.log(myFName1);

let [myFName2,myLName2,myAge2] = myBioData // es tarah se array ko destructuring karte hai
console.log(myFName1);

// We can add values too
let [myFName,myLName,myAge,myDegree="MCS"] = myBioData; // es tarah se destructuring ki help se array me data ko add kar sakte hai

console.log(myDegree); // output: MCS






// Object Destructuring
const myBioData1 = {
    myFname : 'vinod',
    myLname : 'thapa',
    age : 26
}

let age = myBioData1.age;
let myFname = myBioData1.myFname;
console.log(age); // output: 26
console.log(myFname); // output: vinod


let {myFname3, myLname3,myAge3,myDegree3="MCS"} = myBioData1;
console.log(myAge3); // output: 26 








// Object Properties
// We can now use Dynamic Properties

/*
let myName = "vinod";
const myBio = {
    myName : "Hello how are you?",
    26 : "is my age"

}
console.log(myBio); // output: {'26': 'is my age',myName: 'Hello how are you?'}
*/

let myName = "vinod";
const myBio = {
    [myName] : "Hello how are you?",
    [20+6] : "is my age"

}
console.log(myBio); // output: {'26': 'is my age', vinod: 'Hello how are you?'}


// no need to write key and value, if both are same
let myName2 = "vinod thapa";
let myAge4 = 26;
const myBio4 ={
    myName2,
    myAge4
}

console.log(myBio4); // output: {myName2: 'vinod thapa', myAge4: 26}







// Spread Operator
const colors  = ['red','green','blue','white'];

const myColors = ['red','green','blue','white','yellow','black'];

// 2nd time add one more color on top and tell we need to write it again on myColor array too

const MyFavColors = [ ...colors, 'yellow','black'];
console.log(MyFavColors);