let x;


const arr = [34,35,95,20,15]

// arr.push(99)

// arr.pop()

// arr.unshift(66)

// arr.shift()

// arr.reverse()

x = arr.includes(20)
x = arr.includes(23333)

x = arr.indexOf(15)

x = arr.slice(1,4)

// Like slice except it manipulates the original array
// x =arr.splice(1, 4)
// console.log(x, arr)

x = arr.splice(1,4).reverse().toString().charAt(0);

console.log(arr)
console.log(x)