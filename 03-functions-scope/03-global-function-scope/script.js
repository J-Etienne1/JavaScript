// window.alert("Hi")

// console.log(window,innerWidth);
// console.log(window,innerHeight);


const x = 100;

console.log(x, "in Global");

function run() {
    console.log(window.innerHeight);
    console.log(x, "in Function");

}

run()


if (true) {
    console.log(x, "in Block");
}





function add() {
    const y = 50;
    console.log(y);    
    console.log(x + y);    
}

// console.log(y); get an error as y is defined only in the function and not in the global scope
add()