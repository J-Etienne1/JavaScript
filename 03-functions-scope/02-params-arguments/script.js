

function registerUser(user) {
    return user + " is registered";
}

// console.log(user) user is only in scope for the function here in the global scope it will be Undefined

console.log(registerUser("Jason"))


//  if us 
// console.log(registerUser(""))
// get back Undefined is registered
// to assign a default paramaters value can do the following

function registerUser2(user = "bot") {
    return user + " is registered";
}
console.log(registerUser2())




// Rest Params
function sum(...numbers) {
    return numbers
}

console.log(sum(1,2,3));







// Objects as params
function loginUser(user) {
    return `The user ${user.name} with the ID of ${user.id} is logged in`
}

const user = {
    id: 1,
    name: "Jason"
};

console.log(loginUser(user));
// or pass it in as follows 

console.log(loginUser({
    id: 2,
    name: "Debbie"
}));






// Arrays as Params
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.lenght);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom([12,56,879,4,5,6787,55])



















