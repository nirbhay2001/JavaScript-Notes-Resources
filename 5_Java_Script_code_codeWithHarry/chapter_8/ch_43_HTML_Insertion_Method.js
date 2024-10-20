let a = document.getElementsByTagName('div')[0]
// a.innerHTML = a.innerHTML + '<h1>Hello world!</h1>'; // es prakar se hum kisi element me kisi element ko add kar sakte hai, eska use tab karte hai jab ak element ko add karna hota hai, esko es prakar se bhi kar sakte hai
// Insertion method

let div = document.createElement('div');
div.innerHTML = '<h1>Hello world!</h1>'; // eska use tab karte hai jab bahut sara element ko add karna hota hai loop ka use karke

// a.appendChild(div); 

// a.append(div);

// a.prepend(div) // esase Hello world! div ke ander hi rahega lekin usme sabse upper rahega 

 // a.before(div) // esase Hello world! ko div se alag karke sabse upper kar dega div ke sare content se i.e sare node se

 // a.after(div) // esase  Hello world! ko div se alag karke uske niche kar dega

 // Replace with Node
a.replaceWith(div);
