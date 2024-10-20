let num = [3, 54, 1, 2, 4]
// for(let i = 0; i<num.length; i++){
//     console.log(num[i])
// }


// for each loop
num.forEach((element)=>{
    console.log(element*element)
})

// Array.from
let name = "Harry"
let arr = Array.from(name) // eske help se ak array ban jayega string se, eska use tab karte haijab ak string se array banana ho
console.log(arr)

// for ... of
for(let i of num){
    console.log(i) // ye array ke index per persent value ko print karta hai
}

// for ... in
for(let i in num){
    console.log(i) // ye us array ke index ko print karta hai jis index per element present rahta hai, i.e array ak object hota hai  ye us object ka key ko print karta hai
}