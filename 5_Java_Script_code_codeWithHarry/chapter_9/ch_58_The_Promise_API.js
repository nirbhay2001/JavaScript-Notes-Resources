/*
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1")
    },1000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 2")
    },2000)
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    },3000)
})

p1.then((value)=>{
    console.log(value)
})

p2.then((value)=>{
    console.log(value)
})

p3.then((value)=>{
    console.log(value)
})
*/

// jab tino promise ko ak sath print karna hai to hum es prakar se karenge
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1")
    },1000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("value 2")
        reject(new Error("Error"));
    },2000)
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    },3000)
})

/*
let promise_all = Promise.all([p1,p2,p3])
promise_all.then((value)=>{
    console.log(value)
}) // esase tino promise ke value ka array milega 3 sec bad
*/

/*
let promise_all = Promise.allSettled([p1,p2,p3])
promise_all.then((value)=>{
    console.log(value)
}) // esase kisi promise me error bhi hoga to usko bhi rakh lega , eske uper wala me yadi kisi me error aa gya to wah kisi ko nahi rakhega
*/

/*
let promise_all = Promise.race([p1,p2,p3])
promise_all.then((value)=>{
    console.log(value)
})
*/

/*
let promise_all = Promise.any([p1,p2,p3])
promise_all.then((value)=>{
    console.log(value)
})
*/

/*
let promise_all = Promise.resolve(6)
promise_all.then((value)=>{
    console.log(value)
})
*/

let promise_all = Promise.reject(new Error("Hey"))
promise_all.then((value)=>{
    console.log(value)
})

