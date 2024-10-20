/*
 Difference between Synchronous and Asynchronous JavaScript?
*/

// Synchronous JavaScript Prog
const fun2 = () => {
    console.log(`Function 2 is called`);
}

const fun1 = () => {
    console.log(`Function 1 is called`);
    fun2();
    console.log(`Function 1 is called Again`);
}

fun1(); // output: Function 1 is called
       //          Function 2 is called
      //           Function 1 is called Again


// Asynchronous JavaScript Prog
const fun4 = () => {
   setTimeout(() => {
    console.log(`Function 4 is called`);
   },2000);
}

const fun3 = () => {
    console.log(`Function 3 is called`);
    fun4();
    console.log(`Function 3 is called Again`);
}

fun3(); // output: Function 3 is called
       //          Function 3 is called Again
      //           Function 4 is called



// JavaScript Event Loop -->Explain in PPt
