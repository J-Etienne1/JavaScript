

const logo = document.querySelector("img");


const onClick = () => console.log("Click Event")
// const onDoubleClick = () => console.log("Double Click Event")
const onDoubleClick = () => {
    if (document.body.style.backgroundColor !== "purple"){
        document.body.style.backgroundColor = "purple"
        document.body.style.color = "white"
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
}

const onRightClick = () => console.log("Right Click Event")


const onMouseDown = () => console.log("Mouse Down Event")


const onMouseUp = () => console.log("Mouse Up Event")


const onMouseWheel = () => console.log("Mouse Wheel Event")


const onMouseOver = () => console.log("Mouse over Event")


const onMouseOut = () => console.log("Mouse out Event")


const onDragStart = () => console.log("Drag Start Event")

const onDrag = () => console.log("Drag  Event")


const onDragEnd = () => console.log("Drag End Event")









// Event Listeners
logo.addEventListener("click", onClick)
logo.addEventListener("dblclick", onDoubleClick)
logo.addEventListener("contextmenu", onRightClick)  // contextmenu = right click
logo.addEventListener("mousedown", onMouseDown) // click and hold mouse button
logo.addEventListener("mouseup", onMouseUp) // click and hold mouse button
logo.addEventListener("wheel", onMouseWheel) 
logo.addEventListener("mouseover", onMouseOver) 
logo.addEventListener("mouseout", onMouseOut) 
logo.addEventListener("dragstart", onDragStart) 
logo.addEventListener("drag", onDrag) 
logo.addEventListener("dragend", onDragEnd) 



