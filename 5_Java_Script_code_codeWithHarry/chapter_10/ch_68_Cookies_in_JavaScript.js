/*
console.log(document.cookie)
document.cookie = "name=mohit1122334400"
document.cookie = "name=mohit11223344002"
document.cookie = "name=mohit"
console.log(document.cookie)
*/

/*
console.log(document.cookie)
document.cookie = "name=mohit1122334400"
document.cookie = "name=mohit11223344002"
document.cookie = "name=mohit"
let key = prompt("enter your key")
let value = prompt("Enter your value")
document.cookie = `${key}=${value}`
console.log(document.cookie)
*/

// jab key ko enter karte samay semicolon(;)laga dete hai to ye semocolon or uske bad ke value ko bhul jata hai, es problem ko es prakar se dur kiya jata hai

console.log(document.cookie)
document.cookie = "name=mohit1122334400"
document.cookie = "name=mohit11223344002"
document.cookie = "name=mohit"
let key = prompt("enter your key")
let value = prompt("Enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`

// encoderURIComponent kisi bhi prakar ka string ko le leta hai, 
console.log(document.cookie)

// decodeURIComponent("a%3B%3B")
/*
decodeURIComponent("qwe%3B")
"qwe;" 
*/




