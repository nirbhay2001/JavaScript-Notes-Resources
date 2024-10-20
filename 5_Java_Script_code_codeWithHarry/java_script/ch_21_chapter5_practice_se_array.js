// Question number 1

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 83]
let a = prompt("Enter a number ")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)
       */
// Question number 2

let arr = [1, 2, 3, 4, 5, 6, 7, 83]
let a;
do{
     a = prompt("Enter a number ")

    a = Number.parseInt(a)
    arr.push(a)
    console.log(arr)
}while(a != 0);
console.log(arr)


// Question number 3
let arr1 = [1, 2, 30, 4, 50, 6, 70, 83, 670]
let n = arr1.filter((x)=>{
    return x%10 == 0
})
console.log(n)

// Question number 4
let arr2 = [1, 2, 3, 4, 5, 6, 7, 83]
let p = arr2.map((x)=>{
    return x*x
})
console.log(p)

// Question number 5
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8]
let q = arr3.reduce((x1,x2)=>{
    return x1 * x2
})
console.log(q)