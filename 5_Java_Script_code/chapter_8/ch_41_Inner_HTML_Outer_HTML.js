// Inner HTML
let x = document.getElementsByTagName('span')[0]
console.log(x) // esase as pura element print karega
let y = document.getElementsByTagName('span')[0]
console.dir(y) // esase as object print hoga
console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)
console.log(first.innerHTML)
console.log( first.innerHTML = '<i> Hey I am italic </i>') // esase element tag ko change kar sakte hai, // esase jis tag ka id first hai uske ander ka content change ho jayega , pahle us tag ke ander hey i am saon likha huaa tha lekin ab  Hey I am italic dikhega , ye html ke main code ko change nahi kar payega
//  <span id = "first">Hey I am span</span> , inner se kewal Hey I am sapn hi kewal dikhata hai , lekin outer se <span id = "first">Hey I am span</span> ye pura dikh jata hai


// Outer HTML

console.log(first.outerHTML)
console.log(first.outerHTML = "<div>Hey</div>") // esase us element ko change kar sakte hai
// inner and outer html kewal element node ke liye hi valid hota hai ye text node and comment node ke liye valid nahi hota hai, esko pata karna hai to es prakar se pata karenge

console.log(document.body.firstChild)
// "Hello world"
console.log(document.body.firstChild.data)
// '\n  Hello world\n'
console.log(document.body.firstChild.nodeValue)
// '\n  Hello world\n'


// text content
console.log(document.body.textContent) // esase pure page ke content ko print kar sakte hai

// Hidden property
console.log(first.hidden = false)
