

function replaceFirstitem() {
    const firstItem = document.querySelector("li:first-child")

    const li = document.createElement("li")
    li.textContent = "Replaced First"

    firstItem.replaceWith(li)
}


function replaceSeconditem(params) {
    const secondItem = document.querySelector("li:nth-child(2)")

    secondItem.outerHTML = "<li>Resplaced Second</li>"
}



function replaceAllItems() {
    const lis = document.querySelectorAll("li");

    lis.forEach((item, index)=>{
        //item.outerHTML = "<li>Replace All</li>" 
        //item.innerHTML = "Replace All" // this does the same as above just with out need for tags
        // Replace a certian item
        if (index === 1) {
            item.innerHTML = "Second item"
        } else {
            item.innerHTML = "Replace All"
        }
    })


    /*
    Short hand of the above foreach and if/else

    lis.forEach((item, index)=> item.outerHTML = index === 1 ? "<li>Second item</li>" : <li>Replace All</li>)
    
    */

}


// Selecting parent element and using replace child

/*
  <header>
        <img src="images/note.png" alt="" />
        <h1>Shopping List</h1>
  </header>

  Want to replace h1 with h2 so we select the header as it is the parent
 */

function replaceChildHeading() {
    const header = document.querySelector("header")
    const h1 = document.querySelector("header h1")

    const h2 = document.createElement("h2")
    h2.id = "app-title";
    h2.textContent = "Shopping List";
    header.replaceChild(h2,h1)
}






replaceFirstitem()
replaceSeconditem()
replaceAllItems()
replaceChildHeading()