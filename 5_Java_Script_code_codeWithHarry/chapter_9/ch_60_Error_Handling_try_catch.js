setTimeout(()=>{
    console.log("Hacking wifi.... Please wait..." )
},1000)

/*
try{
    console.log(rahul)
}catch(error){
    console.log(error)
}
*/

try{
    console.log(rahul)
}catch(error){
    console.log("balle balle")
}

/*
try{
    // try catch me ye handle nahi hoga kyuki try catch me kewal synchronous program ko handle kiya jata hai, jo setTimeout hai ye asynchronous program hai
    setTimeout(()=>{
        console.log(rahul)
    },100)
}catch(error){
    console.log("error")
}
*/

setTimeout(()=>{
    // es prakar se try catch ke se error ko handle kar sakte hai
    try{
        console.log(rahul)
    }catch(error){
        console.log("error")
    }
   
},100)

setTimeout(()=>{
    console.log("Fetching username and password ....Please wait..." )
    
},2000)

setTimeout(()=>{
    console.log("Hacking Rahul's facebook id.... Please wait...")
},3000)

setTimeout(()=>{
    console.log("Username and password of rahul (+91935670000) fetched.... Please wait..." )
},4000)

    