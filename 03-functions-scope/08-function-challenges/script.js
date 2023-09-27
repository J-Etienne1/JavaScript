

// Challenge 3
// Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.
((length, width) => {
    const area = length * width;
    
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
    
    console.log(output);
    })(10, 5);
    







    
// Challenge 1
// Create a function called getCelsius() that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.
function getCelcsius(f) {
    const celsius = (f - 32) * 5/9
    return celsius
}
console.log(getCelcsius(75))


// Arrow Func Version
const getCelcsius2 = (f) => ((f - 32) * 5)/9

console.log(getCelcsius2(75))
console.log(`The temp in C is ${getCelcsius2(50)}`)










// Challenge 2
// Create an arrow function called minMax() that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.
function minMax(arr) {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    return{
        min: min,
        max: max
    }
}
console.log(minMax([1,2,3,4,5]))










































