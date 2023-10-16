
const text = document.querySelector("p")
const itemList = document.querySelector(".item-list")
const items = itemList.querySelectorAll("li")



function run() {
    
    
    // ClassName
    //console.log(itemList.className)
    //text.className = 'card dark';

    
    
    // classList
    //console.log(itemList.classList)
 
    //text.classList.add("dark")
    //text.classList.remove("card")

    //text.classList.toggle("dark")
    //text.classList.toggle("hidden")


    //text.classList.replace("card", "dark")




    // Change style
    //itemList.style.lineHeight = "3"

    items.forEach((item, index) => {
        item.style.color = "red"

        if(index === 2){
            item.style.color = "blue"
        }
    })



    
}

document.querySelector("button").onclick = run;



