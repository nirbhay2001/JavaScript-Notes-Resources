// Exercise 1: Guess the number
// Returns a random integer from 0 to 100:
let a = Math.floor(Math.random() * 100);
// console.log(typeof a)
let i = 1;
  while(i<=100){
   
     let b = prompt("Enter the number: ")
      b = Number.parseInt(b)
     if(a>b){
        console.log("Your number is less than the actual number") 
        i++
     }
     else if(a<b){
         console.log("Your number is greater than the actual number")
         i++
     }
     else if(a==b){
         console.log("Your number is equal to the actual number")
         console.log("You take no of attempts for find actual number is ", i)
        console.log("Your Score is ",100-i)
         break;
     }
        
 }

