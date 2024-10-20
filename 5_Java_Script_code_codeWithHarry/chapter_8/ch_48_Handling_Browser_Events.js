
/*
btn.addEventListener('click',function(e){
    var btn = e.target;
    var btn_id = btn.id;
    var btn_name = btn.textContent;
    var btn_class = btn.className;
    var btn_value = btn.value;
})
*/


let x = function(e){
    console.log(event.target) // e --> ye ak event object hai
    console.log(event.type,event.Clientx,event.Cleienty)
   //  alert("Hello World1!")
}
let y = function(e){
    console.log(e)
    alert("Hello world2!")
}
btn.addEventListener('click',x)

btn.addEventListener('click',y)

let a = prompt("what is your favorite number?");
if(a == "2"){
    btn.removeEventListener('click',x)
}
// ye kam tabhi karta hai jab function object same ho
