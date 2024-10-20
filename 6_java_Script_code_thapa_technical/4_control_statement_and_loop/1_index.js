/*
 If ...Else
 1. The if statement executes a statement if a specified condition is truthy.
 2. If the condition is falsy, another statement can be executed.


*/

var tomr = 'rain';
if(tomr == 'rain'){
    console.log('take a raincoat');
}else{
    consolelog('No need to take a raincoat');
}



/*
 Conditional (ternary) operator
 1. The conditional (ternary) operator is the only JavaScript operator that takes three operands
 
 variablename = (condition) ? value1:value2
*/

var age = 17;
console.log((age >= 18) ? "you can vote" : "You can't vote")
