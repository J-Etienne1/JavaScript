

const firstName = "Jason"
const lastName = "Etienne"
const age = 39

/* 
const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
}
*/

// if object is same as varablws no need for values as ablove, can be decleare as such:

const person = {
    firstName ,
    lastName,
    age,
}

console.log(person.age)




// Destructuring 
const todo = {
    id: 1,
    title: "take out bins",
    user: {
        name:"Nick"
    }
};

/* 
const id = todo.id
console.log(id)
 */

// instead can destructure properties from the object
const {id, title, user:{name}} = todo; // pulls the variable out of the object
//const {id, title, user} = todo; // pulls the variable out of the object
//console.log(user )

console.log(id, title )
console.log(name )




// Destruct arrays
const numbers = [23,57,68,88]
//const [first,second] = numbers
//console.log(first,second)

// if want to get the rest of the numbers and put them in a verable as an array can use the REST operator(same a spead operator)
const [first,second, ...rest] = numbers; // rest can be anything eg nums
console.log(first, second,rest);

