

// document.getElementById()


console.log(document.getElementById("app-title"))
console.log(document.getElementById("app-title").id)
console.log(document.getElementById("app-title").getAttribute("id"))



// Set attributes
// document.getElementById("app-title").id = "new-id"
document.getElementById("app-title").title = "Shopping List"
document.getElementById("app-title").setAttribute("class", "title")

const title = document.getElementById("app-title");
//console.log(title)




// Get/Change content
console.log(title.textContent)
title.textContent = "Hello World"
title.innerText = "Hello Again"
title.innerHTML = "<strong>Shopping List</strong>"



// Change Styles
title.style.color = "red"
/* When dealing with CSS properties with multiple words wont be the same as css (cant have - as in CSS) as such
title.style.backround-color = "red"
I will be 
*/
title.style.backgroundColor = "purple"
title.style.padding = "10px"
title.style.borderRadius = "10px"






// document.querySelector()
console.log(document.querySelector("h1"))
console.log(document.querySelector("#app-title")) // # = id
console.log(document.querySelector(".container")) // . = class
console.log(document.querySelector("input[type=text]"))
console.log(document.querySelector("li:nth-child(2)").innerText)


const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "apple Juice"
secondItem.style.color = "pink"


// Use these methods on other elements
const list = document.querySelector("ul")
console.log(list)
const firstItem = list.querySelector("li")
firstItem.style.color = "blue"
















