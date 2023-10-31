

const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");


function onInput(e) {
    //console.log(e.target.value);
    heading.textContent = e.target.value;
}

function onChecked(e) {
    //console.log(e.target.checked)
    const isChecked = e.target.checked
    heading.textContent = isChecked ? "Checked" : "Not Checked"
}


function onFocus(params) {
    console.log("Input is Focused")
    itemInput.style.outlineStyle = "solid";
    itemInput.style.outlineWidth = "3px";
    itemInput.style.outlineColor = "red";
}


function onBlur(params) {
    console.log("Input is not Focused");
    itemInput.style.outlineStyle = "none";
}


itemInput.addEventListener("input", onInput);
priorityInput.addEventListener("input", onInput);
checkbox.addEventListener("input", onChecked);

itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);