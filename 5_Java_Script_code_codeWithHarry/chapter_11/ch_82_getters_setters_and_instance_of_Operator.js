class Animal{
    constructor(name){
        this._name = name
    }
    fly(){
        alert("Mai ud rha hu")
    }
    get name(){
        return this._name
    }

    set name(newName){
        this._name = newName
    }
}

let a = new Animal("Bruno")
a.fly()
console.log(a.name)
a.name = "Jack"
console.log(a.name) 


// instance of Operator

class Animal{
    constructor(name){
        this._name = name
    }
    fly(){
        alert("Mai ud rha hu")
    }
    get name(){
        return this._name
    }

    set name(newName){
        this._name = newName
    }
}

class Rabbit extends Animal{
    eatCarrot(){
        console.log("Eating carrot")
    }
}

let a = new Animal("Bruno")
a.fly()
console.log(a.name)
a.name = "Jack"
console.log(a.name) 
let c = 56

console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(c instanceof Animal)