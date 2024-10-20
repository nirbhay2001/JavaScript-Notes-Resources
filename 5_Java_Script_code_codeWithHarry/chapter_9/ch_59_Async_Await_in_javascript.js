/*
async function harry(){
    return 5
}
// async ak keyword hota hai jo represent kar raha hai ki ye function promise value ko return karega
harry().then((x)=>{
    alert(x)
}) // harry() --> ye 5 ko return karega jo .then() ko milega jo alert  5 ko print karega
*/

/*
async function harry(){
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("27 Deg")
         },1000)
    })

    let bangalorWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
         resolve("21 Deg")
        },7000)
    })

    delhiWeather.then(alert)
    bangalorWeather.then(alert)
}

console.log("Welcome to weather control room")
harry()
*/

async function harry(){
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("27 Deg")
         },2000)
    })

    let bangalorWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
         resolve("21 Deg")
        },5000)
    })

    // delhiWeather.then(alert)
    // bangalorWeather.then(alert)

    console.log("Fetching Delhi Weather please wait ...")
    let delhiw = await delhiWeather
    console.log("Fetched Delhi Weather: " + delhiw)
    console.log("Fetching Bangalore Weather please wait ...")
    let bangalorw = await bangalorWeather
    console.log("Fetched Bangalore Weather: " + bangalorw)
    return [delhiw,bangalorw]
}

const cherry = async () => {
    console.log("Hey I am cherry and I am not waiting")
}

/*
console.log("Welcome to weather control room")
let a = harry()
let b = cherry()
a.then((value)=>{
    console.log(value)
})
*/

const main1 = async () => {
    console.log("Welcome to weather control room")
let a = await harry()
let b = await cherry()

}
main1()