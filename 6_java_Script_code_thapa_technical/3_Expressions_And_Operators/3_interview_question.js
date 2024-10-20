// What is the Difference between == vs === ?
var num1 = 5;
var num2 = '5';

console.log(num1); // output: 5
console.log(num2); // output: 5
console.log(typeof(num1));
console.log(typeof(num2));
console.log(num1 == num2); // output: true

console.log(num1 === num2); // output: false 

// == ye kewal value ko match karwata hai; num1 and num2 ka value same hai esliye true aa raha hai

// === ye value and data type dono ko match karwata hai; num1 and num2 ka value same hai lekin data types different hai esliye ye false return kar raha hai