// Attributes and Properties
// get Attributes
/*
let a = first.getAttribute("class")
console.log(a) // ye us element ka class ko return karega jisaka id first hai
*/


/*
let b = first.hasAttribute("class")
console.log(b)
let c = first.hasAttribute("style")
console.log(c) // es dono Attributes ka use esliye kiya jata hai ki jab pata karna hota hai ki es element me ye attributes hai ki nahi, i.e class attributes hai ki nahi 
*/


// Set Attributes
// first.setAttribute("hidden","true") // esase kisi element me kisi Attributes ko set kar sakte hai

/*
first.setAttribute("class", "true sachin") // esase us element ka class set ho jayega jisaka id first hai
*/

/*
// Remove Attribute
 first.removeAttribute("class") // esase kisi bhi element ko uske id ke corroesponding uske attribute ko remove kar sakte hai
*/

/*
 console.log(first.attributes)
*/


 // data -* Attributes --> esase hum apna custom attributes bana sakte hai , es * ke jagah per kuchh bhi likh sakte hai

 console.log(first.dataset)
 console.log(first.dataset.game)
 console.log(first.dataset.player)
