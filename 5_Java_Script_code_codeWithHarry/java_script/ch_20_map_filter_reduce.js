let arr = [45, 23, 21]
// console.log(arr)
// Array map method --> ye original array ko change nahi karta hai, ye ak array ko return karta hai
let a = arr.map((value, index, array)=>{
    console.log(value ,index, array) // esase purane array per kuchh operation karke ak new array banata hai , forEach loop tab use karte hai jab kuch operation karna hota hai lekin map tab banata hai jab ak new array banana hota hai ye dono kam ak existing array per hota hai
    return value + 1 // ye jo new array banayega wah value + 1 ke sath banayega
   // return value + index // ye jo new array banayega wah value + index ke sath banayega
})
console.log(a,arr)

// Array filter method --> ye original ko change nahi karta hai,ye ak array ko return karta hai
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a)=>{
    return a<10 // ye a2 array me arr2 ke us element ko dalega jo 10 se chhota hai
})
console.log(a2,arr2)

// Array reduce method --> ye ak value ko return karta hai
let arr3 = [1, 2, 3, 5, 2, 1]
// let newarr3 = arr3.reduce((h1,h2)=>{
//     return h1 + h2
// })

const reduce_func = (h1,h2) => {
    return h1+h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)