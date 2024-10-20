/*
class RailwaysForm{
    constructor(givenname, trainno){
        console.log("CONSTRUCTED CALLED...." + givename + " " + trainno)
        this.name = givenname 
        this.trainno = trainno 
        
    } // ye ak aisa method hai jo jab jab class ka object banata hai tab tab ye run hota hai
    submit(){
        alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel(){
        alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }
    
}

// Create and fill a form for Harry
let harryForm = new RailwaysForm("harry", 14536)
// Create and fill a form for Rohan
let rohanForm1 = new RailwaysForm("Rohan", 222420)
let rohanForm2 = new RailwaysForm("Rohan", 2229211)


 harryForm.submit()
 rohanForm1.submit()
 rohanForm2.submit()
 rohanForm1.cancel()
 */


 class RailwaysForm{
    constructor(givenname, trainno, address){
        console.log("CONSTRUCTED CALLED...." + givename + " " + trainno)
        this.name = givenname 
        this.trainno = trainno 
        this.address = address
        
    } // ye ak aisa method hai jo jab jab class ka object banata hai tab tab ye run hota hai

    preview(){
        alert(this.name + ": Your form is for train number: " + this.trainno + " and your address is" + this.address)
    }

    submit(){
        alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }

    cancel(){
        alert(this.name + ": This form is cancelled for train number: " + this.trainno)
        this.trainno = 0
    }
    
}

let harryForm = new RailwaysForm("Harry", 13488, "420,Pacific Ocean, Ocean, Bihar-0000555")
harryForm.preview()
harryForm.submit()
harryForm.cancel()
harryForm.preview()