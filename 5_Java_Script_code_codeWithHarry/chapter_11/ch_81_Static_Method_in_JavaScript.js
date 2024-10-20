class Animal{
    constructor(name){
        this.name = name
    }
    walk(){
        alert("Animal" + " " + Animal.capitalize(this.name) + " is walking")
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }
}

j = new Animal("jack")
j.walk()

// console.log(j.capitalize("thisa")) // --> this doesnot work