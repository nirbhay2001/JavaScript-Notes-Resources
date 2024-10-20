// setTimeout --> eska use tab karte hai javascript ke code kuchh time ke bad execute karwana hota hai tab

// setInterval --> eska use tab karte hai jab javascript ke code ko har time inverval per execute karna ho

document.write("Hello") // yadi mai chahta hu ki ye alert 4 second bad dikhe to mujhe ye karna padega


/*
setTimeout(function(){
    alert("I am inside of settime")
},8000) // kisi bhi task ko talna hai to hum eska use karte hai
*/

const sum = (a,b,c) =>{
    console.log("Yes I am running " + (a + b + c))
    a + b
} 
setTimeout(sum,1000,1,2,5) // setTimeout --> ye timerId ko return karta hai
setInterval(function(){
    alert("setInterval")
},4000)

/*
let a = setTimeout(function(){
    alert("I am inside of settime")
},5000)
let b = prompt("Do you want to run the settimout?")
if("n" == b){
    clearTimeout(a)
}
else{
    console.log(a)
} 
*/