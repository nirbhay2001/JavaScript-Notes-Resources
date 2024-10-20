/*
 Write a program that works out whether if a given year is a leap year or not
*/

var year = 2020;
debugger;
if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log("The year " + year + " is a leap year");
        }else{
            console.log("The year " + year + " is not a leap year");
        }
    }else{
        console.log("The year " + year + " is a leap year");
    }
}else{
    console.log("The year " + year + " is not a leap year");
}

// What is truthy and falsy values in javascript?
// We have total 5 falsy values in javascript : 0, "", undefined, null, NaN, false** is false anyway

if(score = 0){
    console.log("OMG, we loss the game");
}else{
    console.log("Yay, We won the game");
} // jabhi if ke condition me false value lenge to hamesha else wala part execute hoga