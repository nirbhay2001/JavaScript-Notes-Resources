let a = 1;
let b = 2;
let c = 3;

console.log("Average of a and b is ",(a+b)/2)
console.log("Average of b and c is ",(b+c)/2)
console.log("Average of a and c is ",(a+c)/2)


// Function
function onePlusAvg(x,y){
    return 1+(x + y)/2
}

console.log("One plus Average of a and b is ",onePlusAvg(a,b))
console.log("One plus Average of b and c is ",onePlusAvg(b,c))
console.log("One plus Average of a and c is ",onePlusAvg(a,c))

// create a function another way --> this called arro function
const sum = (p,q)=>{
    return p+q
}

console.log(sum(9,7))

// Function without argument 
const hello = ()=>{
    console.log("Hey how are you. I am toh fine yaar")
}
hello();