/*
let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and I am resolved")
         resolve(true)
       // reject(new Error("I am an error"))
    }, 5000)
})

// promise ya to resolve ho sakti hai ya to reject ho sakti hai , jab resolve hoga to ak value dega wah value string , integer,boolean etc kuch bhi ho sakta hai lekin jab reject hoga to wah error return karega

let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and I am rejected")
        // resolve(true)
        reject(new Error("I am an error"))
    }, 5000)
})
// ye dono promise parallel execute hoga i.e 5 milli sec me resolve and reject dono ak sath execute hoga
console.log(p1,p2)
*/

let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        // console.log("I am a promise and I am resolved")
         resolve(true)
       // reject(new Error("I am an error"))
    }, 5000)
})

let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        // console.log("I am a promise and I am rejected")
        // resolve(true)
        reject(new Error("I am an error"))
    }, 5000)
})

// To get the value
p1.then((value) => {
    console.log(value)
})
p2.then((value)=>{
     console.log(value)
 },(error)=>{
    console.log(error)
})

// To catch the errors
/*
 p2.catch((error) => {
     console.log("some error occurred in p2")
 })
 */