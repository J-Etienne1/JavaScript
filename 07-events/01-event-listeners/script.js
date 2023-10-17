/* 
const clearBtn = document.querySelector("#clear");

 */
/* 
function onClear() {
    alert("Clear Itemsss");
}
 */


// JS Event Listener
/*
 clearBtn.onclick = function () {
    alert("claer Items")
}
 */


/* 
// Recomemmed Way - Using an Event Listener
clearBtn.addEventListener("click", function () {
    alert("clear Items")
})
// With Event listeners can have as many as you want tied to the same event
clearBtn.addEventListener("click", function () {
    console.log("claer Items")
})
 */


/* 
clearBtn.addEventListener("click", onClear)

 */

// If removing an element from the DOM that has an Event Listener it is best to also remove the EL
//setTimeout(() => clearBtn.removeEventListener("click", onClear) ,5000);


// set click button to be pressed after 5sec  
//setTimeout(() => clearBtn.click(), 5000);








const clearBtn = document.querySelector("#clear");


function onClear() {
    const itemList = document.querySelector("ul");
    const items = itemList.querySelectorAll("li")

    //itemList.innerHTML = ""   // simple version

    items.forEach((item)=> item.remove())  // forEach version


    // While loop version - most performative
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)
    }

}


clearBtn.addEventListener("click", onClear)