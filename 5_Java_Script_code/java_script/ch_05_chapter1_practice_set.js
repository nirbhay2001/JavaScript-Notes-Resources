// Question number 1
let a = "Mohit"
let b = 6
console.log(a+" "+b)

// Question number 2
console.log(typeof (a+" "+b))

// Question number 3
const c = {
    name: "Mohit",
    section: 1,
    isPrincipal: false
} // yaha per c constant type ka object hai , esliye esko change nahi kar sakte hai lekin eske ander ke value ko change kar sakte hai,aur easke ander kuchh aur bhi add kar sakte hai
// esme c ak reference hai to the object , esliye eske ander ke value ko change kar sakte hai,lekin c ke nam se koi dusra object nahi bana sakte hai i.e c ke ander koi dusra object banakar esme store nahi kar sakte hai,yaha tak ke esme koi value bhi store nahi kar sakte hai
c['name'] = "Lovish" // ye change karne ka example hai
/*
    c = 45
    c = {}, aisa nahi ho sakta hai
*/







// Question number 4
// c ak constant type ka object hai  eske ander hum ak aur value ko add kar sakte hai jiska example niche hai , friend key hai aur shubham uska value hai
c['friend'] = "Shubham"
console.log(c)

// Question number 5
const dict = {
    appreciate: "recognize the full worth of",
    ataraxia: "a state of freedom from emotional disturbance and anxiety",
    yakka: "work,especially hard work"
}
console.log(dict.yakka) // ya console.log(dict['yakka']) dono same hai