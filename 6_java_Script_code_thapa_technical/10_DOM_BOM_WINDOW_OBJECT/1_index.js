/*
 1. Window
        1. Window is the main container or we can say the global Object and any operations related to entire browser window can be a part of window object.
        2. All the member like objects,methods or properties. If they are the part of window object then we do not refer the window object.
        3. Window has methods, properties and object. ex setTimeout() or setInterval() are the methods, where as Document is the object of the Window and it also has a screen object with properties describing the physical diaplay.


 2. Document
        1. Whereas the DOM is the child of window object.
        2. Where in the DOM we need refer the document, if we want to use the document object,methods or properties.
        3. Document is just the object of the global object that is window, which deals with the document, the HTML elements themselves.

*/


/*
 DOM vs BOM
 DOM
    1. The DOM is the Document object Model, which deals with the document, the HTML elements themselves, e.g. document and all traversal you would do in it, events, etc.
    
    For Ex: 
    change the background color to red --> document.body.style.background = "red";


 BOM
    1. The BOM is the Browser Object Model, which deals with browser components aside from the document, like history, location, frames, XMLHttp Request, navigator and screen(as well as some others that vary by browser). OR 
    In simple meaning all the window operations which comes under Bom are performed using BOM

    Let's see more practical on history object
    Function alert/confirm/prompt are also a part of BOM:
    they are directly not related to the document,
    but represent pure browser methods of communicating with the user.
    alert(location.href); // show current URL
    if (confirm("Want to visit ThapaTechnical?")){
      location.href = "https://www.youtube.com/thapatechnical"; //redirect the browser 
    }

*/




