/*
 Date And Time
 --> JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

 // Creating Date Objects
 // --> There are 4 ways to create a new date objects:

 new Date()
 new Date(year, month, day, hours, minutes, seconds, milliseconds) // it takes 7 arguments

 new Date(milliseconds)

 new Date(date.string) // we cannot avoid month section

*/

// new Date()
// Date objects are created with the new Date() constructor.
let currDate = new Date();
console.log(currDate);
console.log(currDate.toLocaleString());
console.log(currDate.toString());





// Date.now()
// ---> Returns the numeric value corresponding to the current time-the number of milliseconds elapsed since January 1, 1970 00:00: UTC
console.log(Date.now()); // ye milliseconds return karta hai 1 january 1970 se






// new Date(year, month, ...)
// --> 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)                                
// --> Note: JavaScript counts months from 0 to 11.
// --> January is 0. December is 11.
var d = new Date(2021,0,5,10,33,30,0);
console.log(d.toLocaleString());








// new Date(dateString)
// --> new Date(dateString) creates a new date object from a date string.
var d = new Date("October 13, 2021 11:13:00");
console.log(d);
console.log(d.toLocaleString());







// new Date(milliseconds)
// --> new Date(milliseconds) creates a new date object as zero time plus millisecond
var d = new Date(0);
var d = new Date(100000000000);
var d = new Date(86400000*2);
console.log(d.toLocaleString());




// DAtes Method

const curDate = new Date();

// How to get the indivisual date
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMongth());
console.log(curDate.getDate());
console.log(curDate.getDay());



// How to set the indivisual date

console.log(curDate.setFullYear(2022));
// The setFullYear() method can optionally set month and day
console.log(curDate.setFullYear(2022, 10, 5));
console.log(curDate.setMonth(10));
console.log(curDate.setDate(5));
console.log(curDate.toLocaleString());





// Time Methods
const curTime = new Date();

// How to get the indivisual Time
console.log(curTime.getTime()); // The getTime() method returns the number of millisecond
console.log(curTime.getHours()); // The getHours() method returns the hours of a date as number
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());



// How to set the indivisual Time
console.log(curTime.setTime());
console.log(curTime.setHours(5));
console.log(curTime.setMinutes(5));
console.log(curTime.setSeconds(5));
console.log(curTime.setMilliseconds(5));

