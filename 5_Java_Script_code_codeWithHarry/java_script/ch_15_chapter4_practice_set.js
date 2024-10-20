// Question number 1
console.log("har\"".length)

// Question number 2
// includes() function
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox2';
console.log(sentence.includes(word)) // ye true ya false return karta hai

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// startWith() function --> ye true ya false return karta hai
// start at position zero
let text = "Hello world, welcome to the universe.";
console.log(text.startsWith("Hello"));

// start at position 6
let text1 = "Hello world, welcome to the universe.";
console.log(text1.startsWith("world", 7));
 

// endsWith() function --> ye true ya false return karta hai
let text2 = "Hello world, welcome to the universe.";
console.log(text2.endsWith("world", 11));

// Question number 3
let str = "My name is Nirbhay Gupta!"
console.log(str.toLowerCase())

// Question number 4
let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice("Please give Rs".length))
console.log(amount)
console.log(typeof amount)

// Question number 5
let friend = "Deepika"
friend[3] = "R"
console.log(friend) // friend is not change , because string is immutable
