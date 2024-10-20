/*
 A javascript function is a block of code designed to perform a particular task.

 1. Function Definition
    A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
    1. The name of the function.
    2. A list of parameters to the function, enclosed in parenthesis and separated by commas.
    3. The JavaScript statements that define the function, enclosed in curly brackets, { ... }.

    function sum(){
    var a = 10;
    var b = 20;
    var total = a+b;
    }

 2. Calling functions
    1. Defining a function does not execute it.
    2. A JavaScript function is executed when "something" invokes it (calls it).

    sum();

*/

function sum(){
    var a = 10;
    var b = 20;
    var total = a+b;
    console.log(total);
}

sum();

/*
 Function Parameter vs Function Arguments
 1. Function parametrs are the names listed in the function's definition.
 2. Function arguments are the real values passed to the function.

*/

function sum(a,b){
    var total = a + b;
    console.log(total);
}

sum(20,40);
sum(50,50);


/*
 Return Keyword
 1. When JavaScript reaches a return statement, the function will stop executing.
 2. Function often compute a return value.
 3. The return value is "returned" back to the "caller".

*/


function sum(a,b){
    return total = a+b;
}
var funExp = sum(5,15);
console.log('the sum of two no is' + funExp);

/*
 Anonymous Function
 1. A function expression is similar to has the same syntax as a function declaration One can define "named" function expression (where the name of the expression might be used in the call stack for example) or "anonymous" function expression.

*/

var funExp = function(a,b){
    return total = a+b;
}

var sum1 = funExp(15,15);
var sum2 = funExp(20,15);

console.log(funExp(15,25));
console.log(sum1 > sum1);