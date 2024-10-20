/*
let a = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(456)
    }, 4000)
})
}
let f = async()=>{
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
}

f()
*/

let a = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(456)
    }, 4000)
})
}

(async ()=>{
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})() // esi ko IIFE Bolte hai


