

// crate a function and declare it at the same time
//const user = "jason"
//console.log(user)



// issue due to user defined in this file and also in scripts2.js
// to handle this we cna use an IIFE
(function () {
    const user = "jason"
    console.log(user)
})()  // () after function to invoke
// Now user in both files can be called without issue as the IIFE is not now in the global scope just in the scope of the IIFE




// Need to call the function eg hello() inside the IIFE, if called outside it will not work
/* 
(function () {
    const user = "jason"
    console.log(user)
    const hello = () => console.log("Hello from IIFE")
    hello()
})()
 */







/* 
(function (a) {
    console.log("Hello " + a)
})('Debbie');

 */