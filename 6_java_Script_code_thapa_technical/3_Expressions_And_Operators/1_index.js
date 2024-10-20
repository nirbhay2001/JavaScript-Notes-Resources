/*
 Assignment operators
 1. An assignment operator assigns a value to its left operand     based on the value of its right operand
 2. The simple assignment operator is equal(=)

*/

var x = 5;
var y = 5;

console.log("is both the x and y are equal or not" + x === y); // output: false


// I will tell you when we will see es6

console.log(`Is both the x and y are equal : ${x === y}`); // output: true


/*
 Arithmetic operators

 1. An arithmetic operators takes numerical values (either literals or variables) as their operands and returns a single numerical value

*/

console.log(3+3);
console.log(10-5);
console.log(20/5);
console.log(5*6);

console.log("Remainder Operators " + 81%8);

/*
 Increment and Decrement operators
  Operators: x++ or ++x or x-- or --x
    1. If used postfix, with operators after operand (for example, x++),
    the increment operator increments and returns the value before incrementing.

    var num = 15;
    var newNum = num++; // newNum me num ka value pahle assign ho jayega tab jakar num ka value increase hoga

    console.log(num); // output: 16
    console.log(newNum); // output: 15

    2. If used prefix, with operator before operand (for example, ++x),
    the increment operator increments and returns the value after incrementing.

    var num = 15;
    var newnum = ++num;
    console.log(num); // output: 16
    console.log(newNum); // output: 16

*/

/*

 Comparison Operators
 1. A comparison operator compares its operands and returns a logical value based on whether the comparison is true.

*/

var a = 30;
var b = 10;

// Equal(==)
console.log(a==b);

// Not equal (!=)
console.log(a!=b);

// Greater than (>)
console.log(a>b);

// Greater than or equal (>=)
console.log(a>=b);

// Less than (<)
console.log(a<b);

// Less than or equal (<=)
console.log(a<=b);


/*
 Logical Operators
 1. The logical operators are typically used with Boolean(logical) values;
 2. When they are, they return a Boolean value.

 3. Logical AND (&&)
        The logical AND (&&) operator (logical conjunction) for a set of operands is true if and only if all of its operands are true.

 4. Logical OR (||)
        The logical OR (||) operator (logical disjunction) for a set of operands is true if and only if one or more of its operands is true.

 5. Logical NOT (!)
        The logical NOT (!) operator (logical complement, negation) takes truth to falsity and vice versa

*/

var p = 30;
var q = -20;

console.log(p > q && q > 0);
console.log(p > q || q > 0);
console.log(!((p>0) || (q<0)));

/*
 String concatenation(operators)
 1. The concatenation operator (+) concatenation two atring values together,
 2. returning another string that is the union of the two operand string.

*/

console.log("Hello World");
console.log("Hello" + "World");
console.log("Hello " + "World");
