/*
const sayHello = () => console.log("Hello"); console.log("Hi")

sayHello()
*/


/*
const sayHello = (name) => console.log("Hello " + name)

sayHello("Harry")
*/


/*
const sayHello = (name,greeting) => console.log(greeting + " " + name)

sayHello("Harry", "Good Afternoon") // jab ak se jyda variable  pass karte hai to bracket lagana jaruri hota hai nahi to error show karega
*/


/*
const sayHello = (name,greeting) => console.log(greeting + " " + name)
const x = {
    name: "Harry",
    role: "Js Developer",
    exp: 30
    
}
// sayHello("Harry", "Good Afternoon")
 console.log(x.name, x.exp)
*/



/*
const sayHello = (name,greeting) => console.log(greeting + " " + name)
const x = {
    name: "Harry",
    role: "Js Developer",
    exp: 30,
    show: function(){
        console.log(`The name is ${this.name}\nThe role is ${this.role}`)
    }
}

// sayHello("Harry", "Good Afternoon")
// console.log(x.name, x.exp)
x.show()
*/


/*
const sayHello = (name,greeting) => console.log(greeting + " " + name)
const x = {
    name: "Harry",
    role: "Js Developer",
    exp: 30,
    show: function(){
        let that = this
        console.log(this)
    setTimeout(function(){
        // console.log(this)
        console.log(`The name is ${that.name}\nThe role is ${that.role}`)
    },2000)
  }
}

// sayHello("Harry", "Good Afternoon")
// console.log(x.name, x.exp)
x.show()
*/


const sayHello = (name,greeting) => console.log(greeting + " " + name)
const x = {
    name: "Harry",
    role: "Js Developer",
    exp: 30,
    show: function(){
        // let that = this
        // console.log(this)
    setTimeout(()=>{ // arrow fuction ke use karne se eske uper wala code likhane ki jarurat nahi padta hai
        // console.log(this)
        console.log(`The name is ${that.name}\nThe role is ${that.role}`)
    },2000)
  }
}

// sayHello("Harry", "Good Afternoon")
// console.log(x.name, x.exp)
x.show()
