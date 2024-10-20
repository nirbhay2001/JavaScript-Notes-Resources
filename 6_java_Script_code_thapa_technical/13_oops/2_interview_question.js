/*


*/

const obj = {
    myAge : 26,
    myName : () => {
        console.log(this);
    }
}
obj.myName(); // yaha per bhi 'this' keyword ka current context window dikha raha hai, jabhi kisi object ke ander arrow function ka use karte hai to 'this' keyword ka current context window hota hai