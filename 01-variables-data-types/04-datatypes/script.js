
// Primitive Data Types
/* 

String
Number 
Boolean
Null -  absence of any object value
Undefined - A variable that has yet to be assigned
Symbol - built-in object whose constructor returns a unique symbol
BigInt - numbers that are greater then the "Number" type can handle

 */


// Referance Types (Objects)
/* 

These are a non-primative value and when assigned to a variable, the variable is given a referancee to that value

Object literals arrays and functions are all referance types

 */

//////////////////
// Primitive Data Types
//////////////////

// String
const firstName = 'Jason'

// Number
const age = 39;
const temp = 49.9

// Boolean
const haskids = true


// Null
const aptNumber = null

// Undefined
let score;
const score2 = undefined

// Symbol
const id = Symbol('id')

// BingInt
const n = 9007199254740991n;




//////////////////
// Referance Types
//////////////////

const numbs = [1,2,3,4]

const person ={
    name: 'john'
}

function sayHello(params) {
    console.log('Hello')
}

const output = sayHello

console.log(output, typeof output);
























