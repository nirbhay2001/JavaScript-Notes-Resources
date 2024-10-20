// Question number 1
let age = prompt("what is your age? ")
if(age>10 && age<20){
    // alert("Your enter age lies between 10 and 20")
    console.log("Your age lies between 10 and 20")
}
else{
    console.log("Your age does not lies between 10 and 20")
}

// Question number 2
let a = prompt("what is your age? ")
// a = Number.parseInt(a)
switch(a){
   case '12':
        console.log("Your age is 12")
        break
    case '13':
        console.log("Your age is 13")
        break
    case '14':
        console.log("Your age is 14")
        break
    case '15':
        console.log("Your age is 15")
        break
    default:
        console.log("Your age is not special")
}

// Question number 3
let b = prompt("what is your age? ")
b = Number.parseInt(b)

if(b%2==0 && b%3==0){
    console.log("Your number is divisible by 2 and 3")
}
else{
    console.log("Your number is not divisible by 2 and 3")
}

// Question number 4
let c = prompt("what is your age? ")
c = Number.parseInt(c)

if(c%2==0 || c%3==0){
    console.log("Your number is divisible by 2 and 3")
}
else{
    console.log("Your number is not divisible by 2 and 3")
}

// Question number 5
let d = 19
let e = d>18 ? "You can drive" : "You cannot drive"
console.log(e)