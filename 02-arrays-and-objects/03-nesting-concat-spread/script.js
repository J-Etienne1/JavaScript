
let x

const fruits = ["apple","pear","orange"];
const berries = ["strawberry","blueberry","rasberry"];

// fruits.push(berries);

// x = fruits[3][1]

const allFruits = [fruits, berries]

x = allFruits[1][0]


x = fruits.concat(berries);
// or 
// using Spread Operator (...)
x = [...fruits,...berries]


// Flatten arrays
const arr = [1,2,[3,4],5,[6,7],8]
x = arr.flat();


// Static methods on Arry Object
x = Array.isArray(fruits);


// From
// Creates an array from an array like value
x = Array.from("123456");


// Creates an array from a set of values
const a = 1;
const b = 2;
const c = 3;
const d = 4;

x = Array.of(a,b,c,d);


console.log(x)


