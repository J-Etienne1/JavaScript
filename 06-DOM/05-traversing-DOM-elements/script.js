let output;

// Get Child elements
const parent = document.querySelector(".parent")
output = parent.children;
output = parent.children[1];
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;


parent.children[1].innerText = "Child Two"
parent.children[1].style.color = "red"


parent.firstElementChild.innerText =  "Child One"
parent.lastElementChild.innerText =  "Child Three"



// Get Parent elements from a Child
const child = document.querySelector(".child");
output = child.parentElement;
child.parentElement.style.border = "1px solid #ccc"
child.parentElement.style.padding = "10px"




// Sibling Elements
const secondItem = document.querySelector(".child:nth-child(2)")
output = secondItem
output = secondItem.nextElementSibling

secondItem.nextElementSibling.style.color = "orange"
secondItem.previousElementSibling.style.color = "green"















console.log(output)