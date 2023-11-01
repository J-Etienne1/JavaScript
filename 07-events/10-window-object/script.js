

// window.onload = function () {
//     document.querySelector("h1").textContent = "Hello World";
// }


// window.addEventListener("load", ()=> document.querySelector("h1").textContent = "hello world2");
window.addEventListener("load", ()=> console.log("Page Loaded"))


//window.addEventListener("DOMContentLoaded", ()=> document.querySelector("h1").textContent = "hello world3");
window.addEventListener("DOMContentLoaded", ()=> console.log("DOM Loaded"))



console.log("run me")


//document.querySelector("h1").innerText = "Hello World4"


window.addEventListener("resize", ()=> {
    document.querySelector("h1").innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`
})



window.addEventListener("scroll", ()=>{
    console.log(`scrolled: ${window.scrollX} x ${window.scrollY}`);
    if (window.scrollY > 1000) {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
})


window.addEventListener("focus", ()=>{
    document.querySelectorAll("p").forEach((p) =>{
        p.style.color = "yellow"
    })
})



window.addEventListener("blur", ()=>{
    document.querySelectorAll("p").forEach((p) =>{
        p.style.color = "red"
    })
})