
// document.querySelectorAll()

const listItems = document.querySelectorAll(".item");
console.log(listItems)
console.log(listItems[1])
console.log(listItems[1].innerHTML)
console.log(listItems[1].innerText)

/* 
listItems[1].style.color = "red"
// if want to change all can use a For Each Loop
listItems.forEach((item) =>{
    item.style.color = "blue"
})
 */





/* 
listItems.forEach((item, index) =>{
    item.style.color = "blue"
    if (index === 1) {
        item.remove()
    }

    if (index === 0) {
        item.innerHTML = ` Oranges <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
      </button>`
    }
})
 */



const listItems2 = document.getElementsByClassName("item")
console.log(listItems2[2].innerText)

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
    console.log(item.innerHTML)
});







const listItems3 = document.getElementsByTagName("li")
console.log(listItems3)
console.log(listItems3[0])
console.log(listItems3[0].innerText)

