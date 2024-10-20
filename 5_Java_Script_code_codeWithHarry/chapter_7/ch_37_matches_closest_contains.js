// console.log(id1) // wrong method, ye kewal chrome me hi chalega
let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)
console.log(id1.matches(".class")) // ye false return karega kyuki class nam ka koi bhi tag nahi hai jiska id id1 ho
console.log(id1.matches(".box")) // ye true return karega kyuki jis div ka id id1 hai uska class box hai
console.log(sp1.closest(".box")) // output: div#id1.box
console.log(sp1.closest("#sp1")) // output: span#sp1
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))