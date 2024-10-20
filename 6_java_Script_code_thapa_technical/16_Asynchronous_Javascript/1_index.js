/*
 Hoisting in JavaScript
    --> We have a creation phase and execution pase.
    Hoisting in JavaScript is a mechanism where variable and functions declarations are moved to top of their scop before the code execute.

*/

// for Example
console.log(myName); // output: undefined
var myName;
myName = "thapa";
/*
 How it will be in output during creation phase

 1. var myName;
 2. console.log(myName);
 3. myName = "thapa";

*/
// In ES2015(a.k.a. ES6), hoisting is avoided by using the let keyword instead of var. (The other difference is that variable declared with let are local to the surrounding block, not the entire function.)




/*
 What is Scope Chain and Lexical Scoping in JavaScript?
    --> The scope chain is used to resolve the value of variable names in Js.

    Scope chain in js is lexically defined, which means that we can see what the scope chain will be by looking at the code.

    At the top, we have the Global Scope, which is the window Object in the browser.

    Lexical Scoping means Now, the inner function can get access to their parent functions variables But the vice-versa is not true.

*/

// For Example
let a = "Hello guys."; // Global Scope
const first = () => {
    let b = "How are you?"

    const second = () => {
        let c = "Hii, I am fine thank you";
        console.log(a+b+c); // output: Hello guys, How are you? Hii, I am fine thank you
    }
    second();
    // console.log(a+b+c); // output: error; c is not define // I can't use c
}

first();



/*
 What is Closure in JavaScript
    --> A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

    In other words, a closure gives you access to an outer function's scope from an inner function.

    In JavaScript, closure are created every time a function is created, at function creation time.

    it same like lexical scoping

*/

// For Example
/* 
const outerFun = (a) => {
    let d = 10;
    const innerFun = () => {
        let sum = a + b;
        console.log(`the sum of the two no is ${sum}`);
    }
    innerFun();
}
outerFun(5); // output: the sum of the two no is 15
*/

const outerFun = (a) => {
    let d = 10;
    const innerFun = () => {
        let sum = a + b;
        console.log(`the sum of the two no is ${sum}`);
    }
    return innerFun;
}
let checkClousure = outerFun(5);
console.dir(checkClousure);