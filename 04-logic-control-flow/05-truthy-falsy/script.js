

const email = "jason@MediaList.com"

if (email) {
    console.log("You passed and email")
}

console.log(Boolean(email))


// Falsy values
/*

false
0
"" or '' (empty string)
null
undefined
NaN

*/


const x = 0;

if (x) {
    console.log("This is True")
} else{
    console.log("This is false")
}

console.log(Boolean(x));


// Truthy Values

/*
Everything that is not falsy
true
"0" (0 in a string)
" " (space in a string)
"flase" (flase in a string)
[] (empty array)
{} (enpty object)
function (){} (empty function)
*/


const y = "false";

if (y) {
    console.log("This is True")
} else{
    console.log("This is false")
}

console.log(Boolean(y));







// Truthy & Falsy Caveats:
const children = 0;

if (children !== undefined) { // or (!NaN(children))
    console.log(`you have ${children} children`)
} else {
    console.log(`Pleae enter number of children`)
}





// Checking for empty arrays
const posts = []; // with empty array list post will be logged as and empty array is Truthy

if (posts) {
    console.log("list Posts")
} else {
    console.log("No Posts")
}

// to resolve this could do
const newposts = []; // with empty array list post will be logged as and empty array is Truthy

if (newposts.length > 0) {
    console.log("list Posts")
} else {
    console.log("No Posts")
}






// Check empty Objects
const user = {}; // returns "List User" again as an empty OBJ is Thruthy

if (user) {
    console.log("List User")
} else {
    console.log("No User")
}

// to resolve this could do
const newuser = {}; // cant use length directly on an OBJ like we done with an array, so get the object keys as follows

if (Object.keys(newuser).length) {
    console.log("List User")
} else {
    console.log("No User")
}









// Loose Equality (==)
console.log(false == 0)
console.log("" == 0)
console.log(null == undefined)

// better to always use === when comparing

