// Callbacks
/*
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
*/


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

function goodmorning(error,src){
    if(error){
        console.log(error)
        sendEmergencyMessageToCeo();
        return
    }-
    alert('goodmorning' + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",goodmorning)