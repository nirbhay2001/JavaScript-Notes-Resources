// Change the card title to red --> using class
/*
let ctitle = document.getElementsByClassName("card-title")[0]
ctitle.style.color = "red"
// ctitle.getElementsByClassName.color = "red"
*/
// change the card title to red --> using ID
/*
let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "red"
*/

// querySelectorAll
let ctitles = document.querySelectorAll(".card-title") // .card-title kyuki class ke throw select kar rahe hai yadi id se select karte to esme # lagate
console.log(ctitles)
ctitles[0].style.color = "blue"
ctitles[1].style.color = "red"
ctitles[2].style.color = "green"

document.querySelector(".this").style.color = "cyan"
document.querySelector(".this").style.background = "red"

console.log(document.getElementsByTagName("a"))
console.log(document.body.getElementsByTagName("a"))
// console.log(document.querySelector(".card-title").getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))

/* DOM Nevigation property ka use tab karte hai jab sare element ak dusre ke aas pas ho  and Searching of DOM ka use tab karte hai jab previous element , last element, first elemnt etc jab ye pata nahi rahta hai ki ye element kaha tab us case eska use karte hai  */

console.log(document.getElementsByName("search"))