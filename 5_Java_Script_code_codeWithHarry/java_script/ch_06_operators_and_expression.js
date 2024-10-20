console.log("Operators in js") 
let a = 45;
let b = 4;

// Arithmetic Operators
console.log("a + b = ",a+b)
console.log("a - b = ",a-b)
console.log("a / b = ",a/b)
console.log("a * b = ",a*b)
console.log("a ** b = ",a**b)
console.log("a % b = ",a%b)
console.log("b++ = ",b++) // ye pahle print karta hai phir increment karta hai
console.log("b = ",b)
console.log("b-- = ",b--)
console.log("b = ",b)
console.log("++b = ",++b) // ye pahle increment karta hai phir print karta hai
console.log("--b = ",--b)

// Assignment Operators
let assignment = 8
console.log(assignment)
assignment +=5 // same as assignment = assignment + 5
console.log(assignment)

// Comparison Operators
comp1 = 6
 comp2 = 7
// comp2 = "6"
console.log("comp1 == comp2 is ",comp1 == comp2) // ye false return karega
console.log("comp1 != comp2 is ",comp1 != comp2)
console.log("comp1 === comp2 is ",comp1 === comp2)
console.log("comp1 !== comp2 is ",comp1 !== comp2)
console.log("comp1 > comp2 is ",comp1 > comp2) // ye false return karega

// Logical Operators --> eska use tab karte hai jab do condition ak sath ata hai, ye true ya false return karta hai
let x = 5;
let y = 6;
console.log(x>y && x==5)
console.log(x>y || x==5)
console.log(!false)