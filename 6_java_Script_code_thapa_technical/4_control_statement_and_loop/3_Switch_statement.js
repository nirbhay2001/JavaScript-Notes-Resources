/*
 Switch Statement
 1. Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.

 Break Statement
 1. Terminates the current loop, switch, or label statement and transfer program control to the statement following the terminated statements.
*/

// find the area of circle, triangle and rectangle?

var area = "circle";
var PI = 3.142, l=5, b=4, r=3;

switch(area){
    case 'circle':
        console.log("the area of the circle is : " + PI*r**2);
        break;

    case 'triangle':
        console.log("the area of the triangle is : " + (l*b)/2);
        break;

    case 'rectangle':
        console.log("the area of the rectangle is : " + (l*b));
        break;

    default:
        console.log("Please enter valid data");
}


