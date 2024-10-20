// what is NaN ?

/*
NaN is a property of the global object.
In other words, it is a variable in global scope.
The initial value of NaN is Not-A-Number

*/

var myPhoneNumber = 9876543210;
var myName = "thapa technical";

console.log(myPhoneNumber);
console.log(myName);

console.log(isNaN(myPhoneNumber)); // output: false
console.log(isNaN(myName)); // output: true

if(isNaN(myName)){
    console.log("please enter valid phone no");
}