/*
 The Fetch API
    1. The Fetch API provides A FETCH() METHOD DEFINED on the window object, which you can use to perform requests.
    2. This method returns a Promise that you can use to retrieve the response of the request
*/

fetch('https://api.covid19api.com/summary').then((apidata)=>{
    console.log(apidata);
})