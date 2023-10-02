

// While
let i = 0;

while (i <= 20) {
    console.log("Number " + i)
    i++
}





// Loop over Arrays
let j = 0;
const array = [10,20,30,40]
while (j < array.length) {
    console.log(array[j])
    j++
}


// Nest While Loops
let k = 1;
while (k <= 5) {
    console.log("Number " + k)
    let l = 1;
    while (l <= 5) {
        console.log(`${k} * ${l} = ${k*l}`)   
        l++
    }
    k++
}




// Do While
// Used if you always want the code to run at least once even if the condition is never met
let m = 1;
//let m = 21;  conditon is never meet but only get Numbers 21 printed
do {
    console.log("Numbers " + m)
    m++    
} while (m <= 20);