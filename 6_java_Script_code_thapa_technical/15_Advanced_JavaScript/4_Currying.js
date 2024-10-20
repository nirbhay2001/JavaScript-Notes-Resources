// Currying -->  Currying is a technique of evaluating function with multiple argument, into sequence of function with single argument.  e.g sum(5)(3)(4)


function sum(num1){
    // console.log(num1);
    return function(num2){
        // console.log(num1,num2);
        return function(num3){
            console.log(num1,num2,num3);
            console.log(num1+num2+num3);
        }
    }
}

sum(5)(3)(4); // output: 5 3 4
             //          12

const sum1 = (num1) => (num2) => (num3) => console.log(num1+num2+num3);
sum1(5)(3)(8) // output: 16