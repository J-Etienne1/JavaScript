

const x = 100;

if (true) {
    const y = 200;
    console.log(x + y); // this works
}


// This wont work as y is not defind in the global scope, only defined within the if statment block
// console.log(x + y)




for (let i = 0; i <= 10; i++) {
    console.log(i);
}   // this works

// This wont work as y is not defind in the global scope, only defined within the for loop statment block
// console.log(i)






if (true) {
    const a = 500;
    let b = 600;
    var c = 700
}

// console.log(a) wont work
// console.log(b) wont work
// console.log(c) will work as VAR is NOT block scoped


// VAR IS function scoped
function run() {
    var d = 200;
    console.log(d)
}
run() // this works


// this wont work - to demo that var is function scoped
// console.log(d)


















