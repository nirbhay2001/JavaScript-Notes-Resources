/*
1. NaN === NaN;
2. Number.NaN === NaN;
3. isNaN(NaN);
4. isNaN(Number.NaN);
5. Number.isNaN(NaN);

*/

// NaN ak property hai global object ki , ye n to value hai aur nahi data types hai

NaN === NaN;
console.log(NaN === NaN); // output: false

Number.NaN === NaN;
console.log(Number.NaN === NaN); // output: false

isNaN(NaN);
console.log(isNaN(NaN)); // output: true , kyuki NaN koi number nahi hota hai

isNaN(Number.NaN);
console.log(isNaN(Number.NaN)); // output: true

Number.isNaN(NaN);
console.log(Number.isNaN(NaN)); // output: true

console.log(isNaN("Mohit")); // output: true

console.log(isNaN(20)); // output: false


/*


The expression isNaN(Number.NaN) evaluates to true.

In JavaScript, isNaN() is a function that determines whether a value is "Not-A-Number" (NaN). When you pass Number.NaN as an argument to isNaN(), it checks if the value is NaN and returns true if it is, and false otherwise.

The value NaN (Not-A-Number) is a special value in JavaScript that represents an unrepresentable or undefined value resulting from an invalid mathematical operation. It is considered a numeric value, but it is not equal to any other numeric value, including itself. Therefore, when you use Number.NaN as an argument to isNaN(), it correctly identifies it as NaN and returns true.

*/