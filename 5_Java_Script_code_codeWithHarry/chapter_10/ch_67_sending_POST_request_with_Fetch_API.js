
/*
let Options = {
     method: "POST",
     headers: {
         "Content-type": "application/json"
     },
     body: JSON.stringify({
         // title: 'foo',
         // body: 'bar',
         // userId: 1,

         title: 'Mohit Gupta',
         body: 'bhai',
         userId: 1100,
     }),
 }


 fetch('https://jsonplaceholder.typecode.com/posts', Options)
     .then((response) => response.json())
     .then((json) => console.log(json));

*/

/*
const createTodo = async()=>{
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            // title: 'foo',
            // body: 'bar',
            // userId: 1,
    
            title: 'Mohit Gupta',
            body: 'bhai',
            userId: 1100,
        }),
    }
    
let p = await fetch('https://jsonplaceholder.typecode.com/posts', options)
        let response = await p.json()
        return response
    
}

const mainFunc = async ()=>{
    let todo = await createTodo()
    console.log(todo)
}

mainFunc()
*/

const createTodo = async()=>{
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo)
    }
    
let p = await fetch('https://jsonplaceholder.typecode.com/posts', options)
        let response = await p.json()
        return response
    
}

const getTodo = async (id)=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

const mainFunc = async ()=>{
    let todo = {
        title: 'Mohit Gupta',
            body: 'bhai',
            userId: 1100,
    }
    let todor = await createTodo(todo)
    console.log(todor)
    console.log(await getTodo(567))
}

mainFunc()
