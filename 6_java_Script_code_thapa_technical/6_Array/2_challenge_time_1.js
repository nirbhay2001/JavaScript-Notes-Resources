/*
 1. Add Dec at the end of an Array?
 2. What is the return value of splice method?
 3. update march to March (update)?
 4. Delete June from an array?

*/

const months = ['Jan','march','April','June','July'];

// 1. 
// const newMonths = months.splice(5,0,"Dec");
const newMonths = months.splice(months.length,0,"Dec");
console.log(months);

// 2. 
console.log(newMonths);

// 3. 
// const updateMonth = months.splice(1,1,'March');
const indexOfMonths = months.indexOf('march');
if(indexOfMonths != -1){
    const updateMonth = months.splice(indexOfMonths,1,'March');
    console.log(months);
}else{
    console.log("No such data found");
}


// 4. 

const indexOfMonth = months.indexOf('June');
if(indexOfMonth != -1){
    const updateMonth = months.splice(indexOfMonths,1);
    console.log(months);
}else{
    console.log("No such data found");
}

