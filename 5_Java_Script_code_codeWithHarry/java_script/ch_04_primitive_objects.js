// primitive data type: NN BB SS U
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")
let e = "Harry"
let f = Symbol("I am a nice symbol")
let g = undefined // eska matlab ki abhi tak g ko kuchh bhi nahi diya gya hai,let g bhi karke chhod denge to bhi g undefined hi rahega
console.log(a, b, c, d, e, f, g)

// yadi pata karna hai ki koi variable kis type ka hai to es prakar se karenge
console.log(typeof d)


// Objects --> non primitive datatype, object ke help se key pair bana sakte hai,esase ak dictonary ya mapping bana sakte hai
const item = {
    "Harry": true,
    "Shubh": false,
    "Lovish": 67,
    "Rohan": undefined
}
console.log(item["Harry"])

