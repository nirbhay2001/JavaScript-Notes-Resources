/*
message = "Good Global"
function hello1(){
    // message = "Good Morning"
    console.log("Hello 1: " + message)
}

hello1()
*/

/*
message = "Good Global"
function hello1(){
     message = "Good Morning"
    console.log("Hello 1: " + message)
}

hello1()
*/

/*
message = "Good Global"
function hello1(){
    let message = "Good Morning"
    {
        let message = "Good Afternoon"
        console.log("Hello 1: " + message)  
    }
    console.log(message)
    
}

hello1()
*/

/*
message = "Good Global"
function hello1(){
    let message = "Good Morning"
    {
        let message = "Good Afternoon"
        console.log("Hello 1: " + message)  
    }
    let c = function hello2(){
        console.log("I am C")
    }
    return c
    
}

c = hello1()
c()
*/

/*
// this example of closure
message = "Good Global"
function hello1(){
    let message = "Good Morning"
    
        // let message = "Good Afternoon"
        console.log("Hello 1: " + message)  
    
    let c = function hello2(){
        console.log("I am C"+ " " + message)
    }
    return c
    
}

c = hello1()
c()
*/

/*
// Another example of Closure

function init(){
    var name = "Mozilla";
    function displayName(){
        console.log(name);
    }
    name = "Harry"
    return displayName;
}
let c = init()
c()
*/

// Another Example of Closure
function returnFunc(){
    const x = () => {
        let a = 1
        console.log(a)
        const y = () => {
            // let a = 2
            console.log(a)
            const z = () => {
                // let a = 3
                console.log(a)
            }
            z()
        }
        a = 999
        y()
    }
    return x
}

let a = returnFunc()
a()