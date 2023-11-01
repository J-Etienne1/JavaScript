
const button = document.querySelector("form button");

const div = document.querySelector("form div:nth-child(2)")

const form = document.querySelector("form");



button.addEventListener("click", (e)=>{
    alert("button was clicked");
    e.stopPropagation();
});


div.addEventListener("click", () => {
    alert("div was clicked")
})



div.addEventListener("click", () => {
    alert("form was clicked")
})


document.body.addEventListener("click", () => {
    alert("body was clicked")
})





