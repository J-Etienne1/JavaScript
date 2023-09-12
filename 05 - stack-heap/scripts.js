
// values stored on the Stack
const name = 'Jason'

const age = 39;


// Referance values stored on the Heap
const person = {
    name: 'Nick',
    age: 59
}


let newName = name;
newName = 'Frank'

let newPerson = person
newPerson.name = 'frank'

console.log(name, newName)
console.log(person, newPerson)