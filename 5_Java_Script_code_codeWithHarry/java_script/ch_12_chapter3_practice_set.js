// Question number 1
const marks = {
    sumit: 65,
    sohan: 89,
    Nirbhay: 95,
    Mohit: 90,
    Rohit: 96
}
for(let i = 0; i<Object.keys(marks).length; i++){
  console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
} // Object.keys(marks) --> ye key ke marks ko uske corresponding array me dal dega i.e ye marks object ka values ka array hai

// Question number 2
for(let key in marks){
    console.log("Marks of " + key + " " + "are" + " " + marks[key]) 
}

// Question number 3
let cn = 4
let i 
while(i!=cn){
    i = prompt("Enetr a number")
    console.log("Try again")
}
console.log("You have entered a correct number")

// Question number 4
const mean = (a, b, c, d)=>{
    return (a+b+c+d)/4
}
console.log(mean(4,5,6,7))