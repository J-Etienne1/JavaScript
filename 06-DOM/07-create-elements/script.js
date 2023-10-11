

const div = document.createElement("div");
div.className = "My-element-className"
div.id = "My-element-id"
div.setAttribute("title", "My Element Title")


//div.innerText = "Hello World" // innerText mainly used to get and change inner text of an already existing element

// better to create a new text node 
const text = document.createTextNode("Hello World");
div.appendChild(text)

console.log(div)
// document.body.appendChild(div)
document.querySelector("ul").appendChild(div)