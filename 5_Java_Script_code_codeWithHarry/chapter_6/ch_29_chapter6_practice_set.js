// Question number 1

/*
let age = prompt("Enter your age ")
age = Number.parseInt(age)

const canDrive = (age)=>{
    return age>=18?true:false
}
if(canDrive(age)){
    alert("Yes you can drive")
}
else{
    alert("You can  not drive")
}
*/

// Question number 2
/*
let runAgain = true;
const canDrive = (age1) =>{
    return age1 >= 18 ? true : false
}

while(runAgain){
    let age1 = prompt("Enter your age")
    age1 = Number.parseInt(age1)
    if(canDrive(age1)){
        alert("Yes you can derive")
    }
    else{
      alert("You cannot derive")  
    }
    runAgain = confirm("Do you want to play again?")
}
*/

// Question number 3
let runAgain = true;
const canDrive = (age1) =>{
    return age1 >= 18 ? true : false
}

while(runAgain){
    let age1 = prompt("Enter your age")
    age1 = Number.parseInt(age1)
    if(age1<0){
        console.error("Please enter a valid age")
        break;
    }
    if(canDrive(age1)){
        alert("Yes you can derive")
    }
    else{
      alert("You cannot derive")  
    }
    runAgain = confirm("Do you want to play again?")
}

// Question number 4
let number = prompt("Enter your number")
number = Number.parseInt(number)
if(number>4){
    location.href = "https://google.com"
}

// Question number 5
let color = prompt("Enter the page background color")
document.body.style.background = color