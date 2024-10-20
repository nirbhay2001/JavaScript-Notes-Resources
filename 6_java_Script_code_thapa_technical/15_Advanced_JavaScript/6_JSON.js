
 // JSON.stringify --> stringify turns a JavaScript object into JSON text and stores that JSON text in in a string


// e.g
var my_object = {key_1: "some text", key_2: true, key_3: 5};
var object_as_string = JSON.stringify(my_object); // es tarah se kisi bhi object ko JSON me convert kar sakte hai
console.log(object_as_string); // output: {"key_1": "some text", "key_2": true, "key_3": 5}
typeof(object_as_string); // output: "string"






// JSON.parse turns a string of JSON text into a JAvaScript object

// e.g
var object_as_string_as_object = JSON.parse(object_as_string);
console.log(object_as_string_as_object); // output: {key_1: "some text", key_2: true, key_3: 5}
typeof(object_as_string_as_object); // output: object