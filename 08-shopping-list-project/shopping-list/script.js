

const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");
let isEditMode = false;
const fromBtn = itemForm.querySelector("button");



function displayItems() {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach((item) => onAddItemToDOM(item));
    checkUI();
}


function onAddItemSubmit(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    // Validate Input
    if (newItem  === "") {
        alert("Please add an Item");
        return;
    }
    //console.log("Success")

    

    //Create List Item
    // const li = document.createElement("li")
    // li.appendChild(document.createTextNode(newItem));

    // const button = createButton("remove-item btn-link text-red")
    // //console.log(li)
    // //console.log(button)
    // li.appendChild(button)
    
    // // Add li to the DOM
    // itemList.appendChild(li);



    // Check for Edit mode
    if (isEditMode) {
        const itemToEdit = itemList.querySelector(".edit-mode");

        removeItemFromStorage(itemToEdit.textContent);
        itemToEdit.classList.remove("edit-mode");
        itemToEdit.remove();
        isEditMode = false;
    }




    // Create item DOM element
    onAddItemToDOM(newItem);


    // Add item to local storage
    addItemToStorage(newItem);
    checkUI();

    itemInput.value = ""
}








function onAddItemToDOM(item) {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(item));

    const button = createButton("remove-item btn-link text-red")    
    li.appendChild(button)
    
    
    itemList.appendChild(li);
}











function createButton(classes) {
    const button = document.createElement("button");
    button.className = classes;
    const icon = createIcon("fa-solid fa-xmark");
    button.appendChild(icon);
    return button;
}










function createIcon(classes) {
    const icon = document.createElement("i");
    icon.className = classes;
    return icon;

}








function addItemToStorage(item) {
    const itemsFromStorage = getItemsFromStorage()

    // Add new item to array
    itemsFromStorage.push(item);

    // Convert to JSON String and set to Local Storage
    localStorage.setItem("items", JSON.stringify(itemsFromStorage));

}









function getItemsFromStorage() {
    let itemsFromStorage;

    if (localStorage.getItem("items") === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem("items"));
    }

    return itemsFromStorage;
}










function onClickItem(e) {
    if ((e.target.parentElement.classList.contains("remove-item"))) {
        removeItem(e.target.parentElement.parentElement);
    } else {
        setItemToEdit(e.target);
    }
}


function setItemToEdit(item) {
    isEditMode = true;

    itemList.querySelectorAll("li").forEach(i => i.classList.remove("edit-mode"))

    item.classList.add("edit-mode");
    fromBtn.innerHTML = '<i class= "fa-solid fa-pen"></i>  Update Item'
    fromBtn.style.backgroundColor = "#228b22"
    itemInput.value = item.textContent
}







function removeItem(item) {
    //console.log(item)
    if (confirm("Are you sure?")) {
        // Remove item from DOM
        item.remove();

        // Remove item from storage
        removeItemFromStorage(item.textContent);

        checkUI();
    }
    
}








function removeItemFromStorage(item) {
    let itemsFromStorage = getItemsFromStorage();

    //console.log(itemsFromStorage);


    // Filter out Item to be removed
    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

    //Reset to local storage
    localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}








function clearItems() {
    //console.log("works")
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)
    }


    // Clear from localStorage
    localStorage.removeItem("items");

    checkUI();
}











function filterItems(e) {
    const items = itemList.querySelectorAll("li");
    const text = e.target.value.toLowerCase();
    
    //console.log(text);
    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();

        //console.log(itemName)
        if (itemName.indexOf(text) != -1) {
            item.style.display = "flex"
        } else {
            item.style.display = "none"
        }
    });
}









function checkUI() {

    itemInput.value = "";

    const items = itemList.querySelectorAll("li");
    
    if (items.length === 0) {
        clearBtn.style.display = "none";
        itemFilter.style.display = "none";
    } else {
        clearBtn.style.display = "block";
        itemFilter.style.display = "block";
    }


    fromBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item'
    fromBtn.style.backgroundColor = "#333"

    isEditMode = false;
}









// Initialize App
function init() {
    // Event Listeners
itemForm.addEventListener("submit", onAddItemSubmit);
itemList.addEventListener("click", onClickItem);
clearBtn.addEventListener("click", clearItems);
itemFilter.addEventListener("input", filterItems);
document.addEventListener("DOMContentLoaded", displayItems);

checkUI();
}




init();



















