let marks_class_12 = [91, 82, 63, 84]
console.log(marks_class_12)

let marks_class_11 = [91, 82, 63, 84, null, false, "Not Present"] // javascript ke array me hum kisi bhi type ke value ko ak array me store kar sakte hai
console.log(marks_class_11)
console.log(marks_class_11[0])
console.log(marks_class_11[1])
console.log(marks_class_11[2])
console.log(marks_class_11[3])
console.log("The length of marks_class_11 is",marks_class_11.length) // ye array ke length ko return karega

marks_class_11[7] = 89; // aisa array me kar sakte hai lekin string me nahi kar sakte hai kyuki string immutable hota hai, Adding a new value to the array
console.log(marks_class_11)

marks_class_11[1] = 55; // aisa array me kar sakte hai lekin string me nahi kar sakte hai, Changing the value of an array
console.log(marks_class_11)
console.log(typeof marks_class_11)