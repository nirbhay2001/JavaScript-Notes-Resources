let p = fetch("https://goweather.herokuapp.com/weather/Ny")
 // jab kisi bhi chij ko es prakar se fetch karte hai esase ak hame promise mil jata hai
p.then((response)=>{
    // jo hame fetch ke doura promise mila hai wah ak bar phir dusare promise me resolve hoga eska jo value ata hai wah final result ho jata hai
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    return response.json()
    // .json() ka javascript object ko return karta hai
}).then((value2)=>{
    console.log(value2)
})  