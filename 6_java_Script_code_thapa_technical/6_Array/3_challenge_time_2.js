/*
 1. Find the square root of each element in an array?
 let arr = [25,36,49,64,81]

 2. Multiply each element by 2 and return only those elements which are grater than 10?
 let arr = [2,3,4,6,8]

*/

// 1. 
let arr = [25,36,49,64,81];
let arrSqr = arr.map((curElem)=>{
    return curElem;
})

console.log(arrSqr); // output: [25,36,49,64,81]


let arrSqr1 = arr.map((curElem)=>{
    return Math.sqrt(curElem);
});
console.log(arrSqr1); // output: [5,6,7,8,9]

// 2. 
// we can use the chaining too
let arr1 = [2,3,4,6,8];
let arr2 = arr1.map((curElm)=>{
    return curElm * 2;
}).filter((curElem) => {
    return curElem > 10;
})
console.log(arr2); // output: [12,16]

