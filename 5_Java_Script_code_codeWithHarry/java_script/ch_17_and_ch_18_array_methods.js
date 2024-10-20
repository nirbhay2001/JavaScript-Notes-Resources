// Array methods
let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string, esase  num nam ka array string me convert ho jayega
console.log(b,typeof b)

// join() method --> 
let c = num.join(" and ") // esase array ke har do element ke bich me aakar dono ko ak kar dega i.e join kar dega, eska use tab karte hai jab array  ko formatting karna ho
console.log(c,typeof c)

// pop() method --> ye array ke last element ko remove kar deta hai

let d = num.pop() // pop returns the popped element
console.log(num)
console.log(d,typeof d)

// push() method --> ye array ke last me element ko add kar deta hai
let r = num.push(56) // push returns the new array length
console.log(num , typeof r)

// shift() method --> ye array ke first element ko remove kar deta hai aur usko return kar deta hai
let p = num.shift() // Removes an element from the start of the array
console.log(p,num)

// unshift() method --> ye array ke starting me ak element ko add kar dega, aur new array ka length ko return kar dega
let q = num.unshift(78) // returns new array length
console.log(q)
console.log(q,num)

let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(num2)
// Delete method -->
delete num2[0]
console.log(num2)
console.log(num2.length) // array se element ko delete karne ke bad bhi array ka length same hi rahega
 

// concate() method --> eska use do array ko jodne ke liye kiya jata hai
let num2_more = [11, 12, 13, 14, 15, 16, 17, 18,19]
let newArray = num2.concat(num2_more) // esase num2 and num2_more array change nahi hoga
console.log(newArray)
console.log(num2,num2_more)

// sort() method --> ye orginal array ko modify kar deta hai i.e change change kar dta hai, ye alphabetical order me sort karta hai
let num3 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num3.sort()
console.log(num3)

// sorting for ascending order
let compare = (a,b)=>{
    return a - b
}
let num4 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num4.sort(compare)
console.log(num4)

// reverse() method --> ye array ko ulta karke print karta hai i.e reverse karke print karta hai
let num5 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num5.reverse()
console.log(num5)

// Splice and slice
let num6 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num.splice(2,3,1021, 1022, 1023, 1025) // eska matlab hai ki index 2 se 3 element ko hatao aur 1021,1022,1023,1024,1025 ko waha dal dega, esme se 3,14,5 delete hoga, ye source array ko modify bhi kar deta hai
console.log(num6)

// slice --> ye ak array me se ak new array banata hai, ye original array ko modify nahi karta hai
let num7 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let newnum = num7.slice(3) // ye original array ke index 3 se lekar last index tak ke element ko lekar ak new array banayega
console.log(newnum)

let num8 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let newnumm = num8.slice(3,8) // ye original array ke index 3 se lekar index 8 tak ke element ko lekar ak new array banayega
console.log(newnumm)
