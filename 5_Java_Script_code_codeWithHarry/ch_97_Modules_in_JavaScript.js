/*
const hello = require("./module1")
hello.hello()
hello.ahello("Shivani")
hello.ahello("Garima")
hello.ahello("Nikita")
hello.ahello("Aishwarya")
*/

const {hello, ahello} = require("./module1")
hello()
ahello("Shivani")
ahello("Garima")
ahello("Nikita")
ahello("Aishwarya")