
// First Example
/* 
function first() {
    console.log("first....")
}


function second(params) {
    console.log("second....")
}


function third(params) {
    console.log("third....")
}


first();
second();
third();
 */



// Second Example
function first() {
    console.log("first....")
    second()
}

function second() {
    console.log("second....")
    third()
}


function third() {
    console.log("third....")
    }

first()