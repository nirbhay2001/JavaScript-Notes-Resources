const changeBgRed = () =>{
    document.body.firstElementChild.style.background = "red"
}
let b = document.body
console.log("First child of b is: ",b.firstChild)
// b.firstChild esase kisi bhi tarah ka child node dekhane ko mil sakta hai i.e text node , comment node and element node 
console.log("First Element child of b is: ",b.firstElementChild)
// b.firstElementChild esase hamesa hame element hi milega