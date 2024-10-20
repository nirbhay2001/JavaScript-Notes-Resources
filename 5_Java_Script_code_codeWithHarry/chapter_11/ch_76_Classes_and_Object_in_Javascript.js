/*
class RailwaysForm{
    submit(){
        alert("form submitted")
    }
    cancel(){
        alert("This form is cancelled")
    }
}

let harryForm = new RailwaysForm()
let rohan = new RailwaysForm()

harryForm.submit()
rohan.submit()
rohan.cancel()
*/

class RailwaysForm{
    submit(){
        alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel(){
        alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }
    fill(givenname,trainno){
      this.name = givenname 
      this.trainno = trainno 
    }
}

// Create a form for Harry
let harryForm = new RailwaysForm()
// Fill the form with Harry's details
harryForm.fill("Harry", 145316)
// Create a form for Rohan
let rohanForm = new RailwaysForm()
// Fill the form with Rohan's details
rohanForm.fill("Rohan", 222420)

harryForm.submit()
rohanForm.submit()
rohanForm.cancel()