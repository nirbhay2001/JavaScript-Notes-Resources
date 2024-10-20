/*
 Promises in Javascript
    1. Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callbacks hell leading to unmanageable code.
    2. A Promise is an object that keep track about whether a certain event has happened already or not.
    3. Determines what happens after the events has happend.

    --> Three stage in Promise
    1. Pending
    2. resolve --> fullfilled
    3. reject --> unfullfilled

    --> Constructor Syntax
    var promiseObj = new Promise(executor function);

    A function to be executed by the constructor, during the process of constructing the promiseObj.
    The executor is custom code that ties an outcome to a promise
    You, the programmer, write the executor.

    --> The methods promise.then(), promise.catch(), and promise.finally() are used to associate further action with a promise that becomes settled.

*/