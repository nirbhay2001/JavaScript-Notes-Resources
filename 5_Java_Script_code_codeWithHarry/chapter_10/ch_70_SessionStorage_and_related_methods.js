/*
sessionStorage.setItem("name","harry")
sessionStorage.getItem("name")
sessionStorage.clear()
sessionStorage.removeItem("name")
*/


// Storage Event --> ye trigger tab hota jab hum localstorage and sessionstorage ko update karte hai

window.onstorage = (e)=>{
    alert("changed")
    console.log(e)
}