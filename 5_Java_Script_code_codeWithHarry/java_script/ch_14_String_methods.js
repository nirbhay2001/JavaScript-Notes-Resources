let name = "Nirbhay Gupta"
console.log(name.length) // ye length ka property hai

console.log(name.toUpperCase()) // ye ak method hai jo name nam ke string ko invoke kar raha hai
console.log(name.toLowerCase()) 


// slice method in string 
console.log(name.slice(2,4)) // esme slice function string ke us function ko print karega jo two se start hoga aur three tak jayega i.e slice(a,b) --> a se start hoga aur b-1 tak jayega
console.log(name.slice(2)) // ye two se lekar name.length-1 tak print karega

// replace method in string
console.log(name.replace("rbh","hbr"))

// concate method in string
let friend = "Naman"
console.log(name.concat(" is a friend of ", friend, " Ok"))

// trim function in string
let friend2 = "        Meena      "
console.log(friend2)
console.log(friend2.trim()) // ye space ko remove karta hai

let fr = "Raman" + "Shivika" + "Harry"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
// fr[4] = "o" // This is not possible kyuki string immutable hota hai
console.log(fr)

// Quick Quize: Use a for loop to print a string
