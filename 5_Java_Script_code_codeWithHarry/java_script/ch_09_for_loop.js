for(let i = 0; i<34; i++){
    console.log(i)
}

// Program to add first n natural numbers
let sum = 0
let n = prompt("Enter the value of n ")
n = Number.parseInt(n)
for(let i = 1; i<=5; i++){
    sum = sum + i

}
console.log("Sum of first "+ n + " natural number is " + sum)

// the for - in loop
let obj = {
    harry: 90,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv: 23
}
for(let a in obj){
    console.log(a) // esase obj ke sara key print ho jayega,lekin key ka value nahi print hoga
}

for(let a in obj){
    console.log("Marks of " + a + " " + "are" + " " + obj[a]) // esase key ka value print hoga aur key bhi print hoga 
}

// The for of loop --> eska use iterable ke liya kiya jata hai e.g array,string, lekin for in loop array ke liye bhi kam karta hai

for(let b of "Mohit"){
    console.log(b)
}
