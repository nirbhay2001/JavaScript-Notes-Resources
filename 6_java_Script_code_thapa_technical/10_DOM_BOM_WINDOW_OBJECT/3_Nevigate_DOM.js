/*

 Navigate through the DOM

 1. document.documentElement --> returns the Element that is the root element of the document.
 2. document.head --> 
 3. document.body -->
 4. document.body.childNodes(include tab,enter and whiteSpace) --> list of the direct children only.
 5. document.body.children(without text nodes, only regular Elements)
 6. document.body.childNodes.length

*/


/*

 How to check whether an element has child nodes or not?
    --> We will use hasChildNodes()

*/


/*

 How to find the child in DOM tree
 1. firstChild vs firstElementChild
 2. lastChild vs lastElementChild

    --> const data = document.body.firstElementChild;
    undefined
    data
    data.firstElementChild
    data.firstElementChild.firstElementChild
    data.firstElementChild.firstElementChild.style.color = "red";
    vs
    document.querySelector(".child-two").style.color = "yellow";

*/



/*

 How to find the Parent Nodes
    --> document.body.parentNode
        document.body.parentElement

*/


/*

 How to find or access the siblings
    --> document.body.nextSibling
        document.body.nextElementSibling
        document.body.previousSibling
        document.body.previousElementSibling

*/

document.body.children; // output: HTMLCollection { 0: div.main-div, 1: div.child-two, 2: div.child-three, 3: script, length: 4 }


document.body.firstChild; // output: #text "\n    "



document.body.firstElementChild; // output: <div class="main-div">


document.body.firstElementChild.firstElementChild; // output: <p>



document.body.firstElementChild.firstElementChild.firstElementChild; // output: null 



document.body.firstElementChild.nextElementSibling; // output: <div class="child-two">


document.body.firstElementChild.nextSibling; //output: #text "  \n    "


document.body.parentNode; // output: <html lang="en">


document.body.parentElement; // output: <html lang="en">


document.head.parentElement; // output: <html lang="en">



document.body.nextSibling; // output: null 


document.body.previousSibling; // output: #text "\n"


document.body.previousElementSibling; // output: <head>


document.head.nextSibling; // output: #text "\n"


document.head.nextElementSibling // output: <body>



/*
 How to search the Element and the References 
  --> We will see the new file

*/