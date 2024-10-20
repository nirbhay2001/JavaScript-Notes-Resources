/*
 Array
 1. When we use var, we can stored only one value at a time.
 2. When we feel like storing multiple values in one variable then instead of var, we will use an array.
 3. In JavaScript, we have an Array class, and arrays are the prototype of this class.

*/


var myFriends = new Array; // optional, esko javascript khud se handle kar leta hai
var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true,52];



// Array Subsection

/*
 1.Traversal in Array
 navigate through an array
 1. if we want to get the single data at a time and also if we want to change the data

*/

var myFriends = ['vinod','ramesh','arjun','vishal'];
console.log(myFriends[1]);

// if we want to check the length of element of an array
console.log(myFriends.length); // output: 4
console.length(myFriends[myFriends.length-1]);


// we use for loop to navigate
var myFriends = ['vinod','ramesh','arjun','vishal'];

for(var i = 0; i<=myFriends.length-1;i++){
    console.log(myFriends[i]);
}


// After ES6 we have for ..in for ..of loop too

// for ..in loop
var myFriends = ['vinod','ramesh','arjun','vishal'];

for(let elements in myFriends){
    console.log(elements);
}
// output: 0
//         1
//         2
//         3

// for ..in loop se array ke element ke index number milta hai

// for ..of loop
var myFriends = ['vinod','ramesh','arjun','vishal'];
for(let elements of myFriends){
    console.log(elements);
}
// output: vinod
//         ramesh
//         arjun
//         vishal

// for ..of loop se array ke element milta hai



// Array.prototype.forEach()
        // Calls a function for each element in the array.

var myFriends = ['vinod','ramesh','arjun','vishal'];
myFriends.forEach(function(element,index,array){
    console.log(element + " index : " + index + " Array : " + array);
});

// forEach loop using Array Function
myFriends.forEach((element,index,array)=>{
    console.log(element + " index : " + index + " Array : " + array);
})



/*
 2. Searching and Filter in an Array
    Array.protype.indexOf()
    Returns the first (least) index of an element within the array equal to an element, or -1 if none is found. It search the element from the 0th index number

*/

var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];








/*
 4. Perform CRUD
    Array.prototype.push()
    1. The push() method adds one or more elements to the end of an array and returns the new length of the array.
    2. The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
    3. The pop() method removes the last element from an array and return that element. This method change the length of the array.
    4.The shift() method removes the first element from an array and returns that removed element. This method change the length of the array.


*/

const animals = ['pigs','goats','sheep'];
const count1 = animals.push('chicken');
console,log(count1);
animals.push('chicken','cats','cow');
console.log(animals);




const count2 = animals.unshift('chicken');
console,log(animals);
console,log(count2);
animals.unshift('chicken','cats','cow');
console.log(animals);




const plants = ['broccoli','cauliflower','kale','tomato','cabbage'];
console.log(plants);
console.log(plants.pop());// output: cabbage
console.log(plants);




const plant = ['broccoli','cauliflower','kale','tomato','cabbage'];
console.log(plant);
console.log(plant.shift());// output: broccoli
console.log(plant);






/*
 5. Map and Reduce Method
    Array.prototype.map()

    // Map
    1. let newArray = arr.map(callback(currentValue[,index[,array]]){return element for newArray, after executing something}[, thisArg]);
    2. Returns a new array containing the results of calling a function on every element in this array.
    3. It return new array without mutating the orignal array.

    //Reduce
    1. flatten an array means to convert the 3d or 2d array into a single dimensional array
    2. The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
    3. The reducer function takes four arguments:
        a. Accumulator
        b. Current Value
        c. Current Index
        d. Source Array
*/


// Map
const array1 = [1,4,9,16,25];
// num > 9
let newArr = array1.map((curElem,index,arr)=>{
    return curElem > 9;
});

console.log(array1); // output: [1,4,9,16,25]
console.log(newArr); // output: [false,false,false,true,true]

let newArr1 = array1.map((curElm,index,arr)=>{
    return `Index no = ${index} and the value is ${curElm} belong to ${arr}`;
})

console.log(newArr1);



// Reduce

let arr3 = [5,6,2];
let sum = arr.reduce((accumulator,curElem,index,arr) => {
    return accumulator += curElem;
})

console.log(sum); // output: 13; 5+6+2


let sum1 = arr.reduce((accumulator,curElem,index,arr) => {
    return accumulator += curElem;
},7)
console.log(sum1); // output: 20 ; 5+6+2+7

// How to flatten an array
// converting 2d and 3d array into one dimensional array

const arr5 = [
                ['zone_1','zone_2'],
                ['zone_3','zone_4'],
                ['zone_5','zone_6'],
                ['zone_7','zone_8'],
            ];

let flatArr = arr5.reduce((accum,currVal)=>{
            return accum.concat(currVal);
})

console.log(flatArr);








