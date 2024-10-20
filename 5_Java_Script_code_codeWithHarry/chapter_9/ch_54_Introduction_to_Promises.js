let promise = new Promise(function(resolve,reject){
       alert(" Hello")
       resolve(56)
})
console.log("Hello one")
setTimeout(function(){
    console.log("Hello two in 2 seconds")
},1000)
console.log("My name is " + "Hello Three")
console.log(promise)





// Fetch google.com homepage ==> console.log("google.com homepage done")
// fetch data from the data api
// Fetch picture from the server
// Print downloading
// Rest of the script