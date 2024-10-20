let name = "Mohit"
console.log(name)
console.log(name.length) // esase string ka length pata chalega

let friend = 'Prakash'

console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])

// string template literals
let boy1 = "Pramod"
let boy2 = "Nikhil"
// Nikhil is a friend of Pramod
// let sentence = `boy2 is a friend of boy1`
// console.log(sentence)
let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence)

// Escape Sequence Character
// let fruit = 'Bana\'na'
// console.log(fruit)
// console.log(fruit.length)
let fruit = "Bana\"na"
console.log(fruit)

let st = "my name is\t mohit" // eska use do word ke bich me space create karne ke liye kiya jata hai
console.log(st)

let sr = " my name is\rmohit"
console.log(sr)