/*
 String
 1. A JavaScript string is zero or more characters written inside quotes.
 2. JavaScript string are used for storing and manipulating text.
 3. Ypu can use single or double quotes.
 4. String can be created as primitives, from string literals, or as object, using the String() constructor.

*/

let myName = "vinod thapa";
let myChannekName = 'vinod thapa';
let ytName = new String("Thapa Technical"); // using string constructor

console.log(myName);
console.log((ytName));

// How to find the length of a string
// String.prototype.length
// Reflects the length of the string

console.log(myName.length);




/*
 Escape Character
 1. let anySentence = "We are the so-called "Vikings" from the north. ";
 console.log(anySentence);

 2. if you dont want to mess, simply use the alternate quotes
            let anySentence = 'We are the so-called "Vikings" from the north.';
            console.log(anySentence);

*/

let anySentence = "We are the so-called \"Vikings\" from the north. ";
 console.log(anySentence); // We are the so-called \"Vikings\" from the north. 


 let anySentence1 = 'We are the so-called "Vikings" from the north.';
 console.log(anySentence1); // output: We are the so-called "Vikings" from the north.





/*
 Finding a String in a String
 1. String.prototype.indexOf(searchValue [, fromIndex])
 he indexOf() method returns the index of (the position of) the first occurrance of a specified text in a string. 
 2. JavaScript counts positions from zero.
 3. 0 is the first position in a string, 1 is the second, 2 is the third.


 4. String.prototype.lastIndexOf(searchValue [, fromIndex])
        Returns the index within the calling string objects of the last occurrence of searchValue, or -1 if not found.

 5. The search() method searchs a string for a specified value and returns the position of the match
 6. The search() method cannot take a second start position argument.
*/


const myBioData = 'I am the Thapa Technical';
console.log(myBioData.indexOf("Thapa")); // output: 9; indexOf() ---> ye aage se count karta hai


console.log(myBioData.lastIndexOf("t",6));// output: 5; lastIndexOf() ---> ye pichhe se count karta hai


let sData = myBioData.search("thapa");
console.log(sData); // output: 9




/*
 Extracting String Parts
 There are 3 methods for extracting a part of a String:
 1. slice(start,end)
 2. substring(start,end)
 3. substr(start,length)

 1. The slice() method --> slice() extracts a part of a string and returns the extracted part in a new string.
 --> The method takes 2 parameters: the start position, and the end position (end not included).
 --> The slice() method selects the elements starting at the given stert argument, and ends at, but does not include, the given end argument.
 Note: The original array will not be changed.


 2. The substring() method --> substring() is similar to slice().
 The difference is that substring() cannot accept negative indexes.
 --> If we give negative value then the characters are counted from the 0th position


 3. The substr() Method
 --> substr() is similar to slice().
 --> The difference is that the second parameter specifies the length of the extracted part.

*/

var str = "Apple, Bananaa, Kiwi, mango";
let res1 = str.slice(0,5);
console.log(res1);// output: Appl
let res2 = str.slice(7, -2);
console.log(res2); // output: Bananaa, kiwi, man; index 7 se lekar aur last ke do ko chhodkar baki sara ko print karega



var str1 = "Apple, Bananaa, Kiwi";
let res3 = str.substring(0,4); // output: Appl
let res4 = str.substring(8,-2); // output: Apple, B



var str2 = "Apple, Bananaa, Kiwi";
let res5 = str2.substr(0,4);
console.log(res5); // output: Appl
let res6 = str.substr(7,-2);
console.log(res6);
let res7 = str.substr(-4);
console.log(res7); // output: Kiwi; substr() --> es function ke argument me yadi negative value dene per pichhe se count karta hai





/*
 Replacing String Content()
 --> String.prototype.replace(searchFor, replaceWith)
 --> The replace() method replace a specified value with another value in a string.
 --> Points to remember
 1. The replace() method does not change the string it is called on. It returns a new string.
 2. By default, the replace() method replaces only the first match
 3. By default, the replace() method is case sensitive.

*/


let myBioData2 = `I am vinod bahadur thapa vinod`;
let replaceData = myBioData2.replace('vinod','Vinod');
console.log(replaceData); // output: I am Vinod bahadur thapa vinod
console.log(myBioData2); // output: I am vinod bahadur thapa vinod




/*
 Extracting String Character
 There are 3 methods for extracting string character:
 1. charAt(position)
 2.charCodeAt(position)
 3.property access []


 1. The charAt() Method
 --> The charAt() method returns the character at a specified index (position) in a string


 2. The charCodeAt() Method
 --> The charCodeAt() method returns the unicode of the character at a specified index in a string:
    --> The method returns a UTF-16 code (an integer between 0 and 65535).
    --> The Unicode Standard provides a unique number for every
    character, no matter the platform, device, application, or language. UTF-8 is a popular Unicode enconding which has 88-bit code units.

*/


let str3 = "HELLO WORLD";
console.log(str.charAt(0)); // output: H



let str4 = "HELLO WORLD";
console.log(str4.charCodeAt(0)); // output: 72



// Property Access
// --> ECMAScript 5 (2009) allows property access [ ] on strings

var str5 = "HELLO WORLD";
console.log(str[1]); // output: H


// Other useful Methods
let myName2 = "vinod tHapa";
console.log(myName2.toUpperCase()); // output: VINOD THAPA
console.log(myName2.toLocaleLowerCase()); // output: vinod thapa


let fName = "Nirbhay";
let lName = "Gupta";
console.log(fName + lName);
console.log(`${fName} ${lName}`);
console.log(fName.concat(lName));
console.log(fName.concat(" ",lName));


// String.trim() --> The trim() method removes whitespace from both side of a string

var str = "                 Hello World          ";
console.log(str.trim());



// Converting a String to an Array
// --> A String can be converted to an array with the split() method

var txt = "a,b,c,d,e"; // String
console.log(txt.split(" , ")); // Split on commas
console.log(txt.split(" "));  // Split on space
console.log(txt.split(" | "));// Split on pipe