
/*class Employee{

    constructor(name){
        console.log("Employee's constructor is here")
        this.name = name
    }
    login(){
        console.log(`${name}-Employee has logged in`);
    }

    logout(){
        console.log(`Employee has logged out`);
    }

    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves-Auto approved`)
    }
}

class Programmer extends Employee{
    
    // constructor(...args){ // If there is no constructor in the child class, this is created automatically
    //     super(...args)
    // }
    

    requestCofee(x){
        console.log(`Employee has reuested ${x} coffees`)
    }

    requestLeaves(leaves){
        super.requestLeaves(4) 
        console.log("One extra is granted")
        // console.log(`Employee has requested ${leaves+1} leaves (One extra)`)
    }
}

let e = new Programmer("harry")
e.login()
e.requestLeaves(3)
*/




class Employee{

    // constructor(name){
    //     console.log("Employee's constructor is here")
    //     this.name = name
    // }
    login(){
        console.log(`${name}-Employee has logged in`);
    }

    logout(){
        console.log(`Employee has logged out`);
    }

    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves-Auto approved`)
    }
}

class Programmer extends Employee{
    
    constructor(name){
        super(name)
        console.log(`This is a newly written constructor`)
        this.name = name
    } // jab ham sub class me constructor banate hai to hame super keyword ka use karna hota hi hi hota hai,super keyword se eske parent class ke constructor co call kiya jata hai
    

    requestCofee(x){
        console.log(`Employee has reuested ${x} coffees`)
    }

    requestLeaves(leaves){
        super.requestLeaves(4) 
        console.log("One extra is granted")
        // console.log(`Employee has requested ${leaves+1} leaves (One extra)`)
    }
}

let e = new Programmer("harry")
e.login()
e.requestLeaves(3)
