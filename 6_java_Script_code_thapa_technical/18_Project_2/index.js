
/*

// what is Promises

// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');




const generateJokes = () => {

    const setHeader = {
        headers: {
            Accept : "application/json"
        }
    }



    fetch('https://icanhazdadjoke.com', setHeader) // ye promise return karega
    .then((res)=> res.json() )
    .then((data) => {
        jokes.innerHTML = data.joke;
    }).catch((error)=>{
        console.log(error);
    })
}



jokeBtn.addEventListener('click', generateJokes);
generateJokes();


 // res ke jagah per thapa bhi likh sakte hai , res ka matlab hai ki jo fetch se response mila hai usako json me convert kar do, res.json se jo fetch se jo response mila hai use json form me badal do


// console.log(res.json());

*/


// Async-await

/*
 .then(), .catch() ke jagah per hi Async-await ka use karte hai ye bhi promise hi return karta hai 

 for normal function
async function generateJokes() {

}

for arrow function
const generateJokes = async () => {

}

*/

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const generateJokes = async () => { 

    try{
        const setHeader = {
            headers: {
                Accept : "application/json"
            }
        }
     const res = await fetch('https://icanhazdadjoke.com',setHeader)
     const data = await res.json();
     jokes.innerHTML = data.joke;
    }catch(err){
        console.log(`the error is ${err}`);
    }
  
 
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();

