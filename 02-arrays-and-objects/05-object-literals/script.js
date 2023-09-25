

let x;



const person = {
    name: "Jason",
    age: 39,
    isAdmin: true,
    address: {
        street: "123 fake st",
        city: "dublin",
        country:"ireland"
    },
    hobbies: ["coding", "cycling"]
};


x = person.name
x = person.age

x = person.address.city
x = person.hobbies[0]

// update properties
person.name = "nick"
person.isAdmin = false
x = person


// remove a propery from an object
delete person.age;


// adding a propert to an object
person.hasChildren = true


// adding a function as a property
person.great = function(){
    console.log(`Hello my name is ${this.name}`)
}
person.great()









console.log(x)