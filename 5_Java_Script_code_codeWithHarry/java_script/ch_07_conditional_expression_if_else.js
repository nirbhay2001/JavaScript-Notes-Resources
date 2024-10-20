let a = prompt("Hey whats you age? "); // ye user se input leta hai, ye a me string ke form me store karega
a = Number.parseInt(a); // Converting the String to a number
console.log(typeof a)
 // if else
if(a<0){
    alert("This is a invalid age"); // alert function batata hai
}
else if(a<9){
    alert("You are a kid and cannot even think of driving");
}
else if(a<18 && a>=9){
    alert("You are a kid  and you can think of driving after 18");
}

else{
    alert("You can now drive as you are above 18");
}
console.log("Done")


// switch case


// Termpoary operators
console.log("You can", a<18? "not drive" : "drive") // same as console.log("You can", (a<18? "not drive" : "drive"))