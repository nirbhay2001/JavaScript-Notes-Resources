// alert --> eska use mini window ko invoke kerne ke liye kiya jata hai, ya kuchh bhi dikhana ho to user ko esi se dikhate hai i.e kuchh bhi warning dena ho, esme jo bhi likha rahta hai usko likhane se pahle ak bar alert karta hai phir ok karne ke bad print karta hai

/*
alert("Enter the value of a!")
let a = prompt("Enter a here")
document.write(a)
 // es prakar se index.html ke page per kuchh likh sakte hai

 */

// prompt --> eska use user se input lene ke liye karte hai
 /*
 alert("Enter the value of a!")
let a = prompt("Enter a here", "578") // prompt ak default value bhi leta hai,esme hane 578 diya hai
a = Number.parseInt(a)
alert("You entered a of type " + (typeof a))
document.write(a)

*/

// confirm --> eska use tab karte hai jab kisi chij ko delete karte hai to confirm karne ke liye puchhate hai ki delete karna hai ki nahi

alert("Enter the value of a!")
let a = prompt("Enter a here", "578") // prompt ak default value bhi leta hai,esme hane 578 diya hai
a = Number.parseInt(a)
alert("You entered a of type " + (typeof a))
let write = confirm("Do you want to write it to the page")
if(write){
    document.write(a)
}
else{
    document.write("Please allow me to write")
}

