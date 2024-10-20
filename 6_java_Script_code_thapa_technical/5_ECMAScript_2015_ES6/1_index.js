/*
 1. Now It's Time for Modern JavaScript
 2. Features of ECMAScript 2015 also known as ES6
 3. LET VS CONST VS VAR
        var myName = "Nirbhay Gupta";
        console.log(myName);
        myName = "Mohit Gupta";
        console.log(myName);

    var => Function Scope
    let and const => Block Scope

        let myName = "Nirbhay Gupta";
        console.log(myName);
        myName = "Mohit Gupta"; // jab koi variable let or var rahta hai to usake us variable ke value or name change kar sakte hai
        console.log(myName);


        const myName = "Nirbhay Gupta";
        console.log(myName);
        myName = "Mohit Gupta"; // jab koi variable const hai to uska us variable ke value or name ko change nahi kar sakte hai kyu ki kisi const ka value change nahi hota hai
        console.log(myName);

*/

function biodata(){
    var myFirstName = "Vinod";
    console.log(myFirstName);
    if(true){
        var myLastName = "thapa";
        console.log('inner ' + myLastName);
        console.log('outer ' + myFirstName);
    }

    console.log('innerOuter ' + myLastName);

    // jab koi variable var rahta hai to wah ak function ke ander kahi bhi use kar sakte hai
}

biodata(); // output: Vinod
            //        inner thapa
            //        outer Vinod
            //        innerOuter thapa

  
            
function biodata(){
    let myFirstName = "Vinod";
    console.log(myFirstName);
    if(true){
        let myLastName = "thapa";
        console.log('inner ' + myLastName);
        console.log('outer ' + myFirstName);
    }
            
    console.log('innerOuter ' + myLastName);

    // jab koi variable let se define hota hai ye jis block ke ander define hota hai to ye variable usi block ke ander hi kewal use ho sakta hai
            
}


biodata(); // output: Vinod
          //          inner thapa
         //           outer Vinod
        //            error // myLastName ka variable let se ak block me define huaa hai, es variable ka use hum if block ke bahr use kar rahe hai esliye error aa raha hai









/*
 2.Template literals (Template strings)
     JavaScript program to print table for given number(8)?

     output: 8 * 1 = 8
             8 * 2 = 16
             .
             .
             .
             .

             8 * 10 = 80


*/


for(let num = 1; num <= 10; num++){
    let tableof = 12;
    // console.log(tableof + " * " + num + " = " + tanleof * num);
    console.log(`${tableof} * ${num} = ${tableof * num}`);
}