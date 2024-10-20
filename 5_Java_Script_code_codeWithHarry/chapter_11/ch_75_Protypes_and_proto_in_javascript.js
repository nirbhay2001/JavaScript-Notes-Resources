/*
let a = {
    name: "Harry",
    language: "JavaScript"
}
console.log(a)

// Protype
let p = {
    run: () => {
        alert("run")
    }
}

a.__proto__ = p // es prakar se khud ka protype banate hai, esme btaya ja raha hai ki a ka protype p kar do
a.run()
*/


/*
let a = {
    name: "Harry",
    language: "JavaScript",
    
        run: () => {
            alert("self run")
        }
    
}
console.log(a)

// Protype
let p = {
    run: () => {
        alert("run")
    }
}

a.__proto__ = p // es prakar se khud ka protype banate hai, esme btaya ja raha hai ki a ka protype p kar do, protype ka bhi protype ho sakta hai
a.run() // pahle check karega ki ye function a me hai ki nahi jab rahega to usi ko execute kar dega nahi to a ke protype me khoj kar usko execute karega
*/


let a = {
    name2: "Harry",
    language: "JavaScript",
    
        run: () => {
            alert("self run")
        }
    
}
console.log(a)

// Protype
let p = {
    run: () => {
        alert("run")
    }
}

p.__proto__ = {
    name: "Jackie"
} // es prakar se protype ka protype banate hai
a.__proto__ = p 
a.run()
console.log(a.name) 