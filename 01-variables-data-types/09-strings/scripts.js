

let x;

const name = 'Jason'
const age = 30

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old'


// Template Literals (use backticks ``)
x = `hello my name is ${name} and i am ${age} yrs old`



// String Properties & Methods
const s= 'Hello World'

x = s.length


// value by key
x = s[1]

// Access the prototype
x = s.__proto__;

x = s.toUpperCase()
x = s.toLowerCase()

x = s.charAt(6)

x = s.indexOf('r') // if multiple of same letter. 1st will be returned

x = s.substring(0,4)

x = s.substring(7) // starts at index and returns the rest of the string

x = s.slice(0,5)
x = s.slice(-11) // will retun the whole string Hello World

x = s.replace('World', 'Jason')

x = s.includes('Hello')


x = s.valueOf()


x = s.split() // gives an array woth the sting inside of it
x = s.split(' ') // spliting on space so get an array with 2 strings


console.log(x);






const y = '     Trimming white space     '
z =y.trim() // trims white space

console.log(z);
