/*
 Higher Order Function
    --> function which takes another function as an arguments is called HOF(Higher Order Function)

    wo function jo dusre function ko as an argument accept krta hai use HOF

*/


/*
 Callback Function
    --> Function which get passed as an argument to another function is called CBF. A callback function is a function that is passed as an argument to another function, to be "called back" at a later time.

    jis bhi function ko hum kisi or function ke under as an arguments passed krte hai then usko hum CallBack fun bolte hai

*/



// we need to create a Calculator
const add = (a,b) => {
    return a+b;
}

// console.log(add(5,6));

const subs = (a,b) => {
    return Math.abs(a-b);
}

// console.log(subs(5,6));

const mult = (a,b) => {
    return a*b;
}

// console.log(mult(5,6));

// I have to do the hardcoded for each operation which is bad
// we will use the callback and the HOF to make it simple to use

const calculator = (num1,num2,operator) => {
    return operator(num1,num2);
}

calculator(5,2,add);
console.log(calculator(5,2,subs)); 
// esame calculator function Higher Order Function hai aur add,subs,mult function kisi dusre function me as argument pass ho raha hai esliye ese  Callback function kahenge.

/*
 In the above example, calculator is the higher-order function, which accepts three arguments, the third one being the callback.
 Here the calculator is called the Higher Order Function because it takes another function as an argument and add,subs,and mult are called the callback function because they are passed as an argument to another function

*/