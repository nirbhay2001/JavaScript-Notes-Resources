class Employee{
    login(){
        console.log(`Employee has logged in`);
    }

    logout(){
        console.log(`Employee has logged out`);
    }

    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves-Auto approved`)
    }
}

class Programmer extends Employee{
    requestCofee(x){
        console.log(`Employee has reuested ${x} coffees`)
    }

    requestLeaves(leaves){
        super.requestLeaves(4) // eske help se ham super class ke method ko bhi ham sub class me use kar sakte hai
        console.log("One extra is granted")
        // console.log(`Employee has requested ${leaves+1} leaves (One extra)`)
    }
}

let e = new Programmer()
e.login()
e.requestLeaves(3)