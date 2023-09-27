

/* 
function add(a,b) {
    return a+b;
}
*/

// Arrow Function version of the above
const add = (a,b) => {
    return a+b;
}


// due to the above Arrow Func been a single expression
// we can shorten it and remove the return statment and {} such as :
const subtract = (a,b) => a-b




// If the function has only a single param you dont need to have () around it
const double = a => a*2








// Returning an Object
const createObj = () =>{
    name: "Jason"
};
// console.log(createObj()) 
// This will return Undefined, to return an object, need to surroung {} with () as follows
const createObj2 = () =>({
    name: "Jason"
});
console.log(createObj2()) 








const nums = [1,2,3,4,5]
nums.forEach(function (n) {
    console.log(n)
})
// Using Arrow Func to make the ablove shorter/neater as such
nums.forEach((n => console.log(n)))

















console.log(add(1,2))
console.log(subtract(10,5))
console.log(double(10))



