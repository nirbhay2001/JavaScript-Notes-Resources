/*
 What is event propagation?
    --> The event Propagation mode determines in which order the elements receive the event.

    Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event.
    
    1. With Event Bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

    2. With Event Capturing, the event is first captured by the outermost element and propagated to the inner elements.
    Capturing is also called "trickling", which helps remember the propagation order.

    Capture Phase --> Going from the window to the event target phase

    Target Phase --> it is the target phase

    Bubble Phase --> From the event target parent back to the window

*/