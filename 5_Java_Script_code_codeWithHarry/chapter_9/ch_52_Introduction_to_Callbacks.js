// Syncronous Program
/*
let a = prompt("What is your name?");
let b = prompt("What is your age?");
let c = prompt("What is your favorite color?");
console.log(a + " is " + b + " years old and has " + c + "favorite color.");
*/

// Asyncronous Program
/*
console.log("start")
setTimeout(function(){
    console.log("Hey I am good");
},3000)
console.log("End")
*/


// Callbacks --> esase ye pata chalta hai jo hum kam karne ke liye diya hai wah kam huaa hai ki nahi
function loadScript(src,Callbacks){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Loaded Script with SRC: " + src)
        Callbacks(null,src);
    }
    script.onerror = function(){
        console.log("Error loading script with SRC: " + src);
        Callbacks(new Error("src got some error"))
    }
    document.body.appendChild(script);
}

function hello(error,src){
    if(error){
        console.log(error);
        return
    }
    alert('Hello world!' + src);
}

function goodmorning(src){
    alert('goodmorning' + src);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",hello)