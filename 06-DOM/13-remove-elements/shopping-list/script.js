
function removeClearButton() {
    const clearButton = document.querySelector("#clear");
    clearButton.remove()
}


function removeFirstItem() {
    const ul = document.querySelector("ul");
    const li = document.querySelector("li:first-child");

    ul.removeChild(li)
}


function removeItem(itemNumber) {
    const ul = document.querySelector("ul");
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li)
}


function removeItem2(itemNumber) {
    const ul = document.querySelector("ul");
    const li = document.querySelectorAll("li")[itemNumber - 1];

    ul.removeChild(li)
}



function removeItem3(itemNumber) {
    const li = document.querySelectorAll("li");
    li[itemNumber - 1].remove()
}


// short hand of above
const removeItem4 = (itemNumber) => document.querySelectorAll("li")[itemNumber - 1].remove();

//removeClearButton()
// removeFirstItem()
//removeItem(3)
// removeItem2(2)
//removeItem3(1)
//removeItem4(1)