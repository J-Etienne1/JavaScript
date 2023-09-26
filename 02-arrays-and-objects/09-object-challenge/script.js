const lib = [
    {
        title: "The Road",
        author: "Jack",
        status: {
            owner: true,
            reading: false,
            read: false,
        },
    },
    {
        title: "Dracula",
        author: "Bram",
        status: {
            owner: true,
            reading: false,
            read: false,
        },
    },
    {
        title: "Inverview with the vampire",
        author: "anne",
        status: {
            owner: true,
            reading: false,
            read: false,
        },
    },
];


// You finished reading all of the books. Set the read value for all of them to true. Do not edit the initial object. Set the values using dot notation.
lib[0].status.read = true
lib[1].status.read = true
lib[2].status.read = true
//console.log(lib)


// Destructure the title from the first book and rename the variable to firstBook
const { title: firstBook } = lib[0]
//console.log(firstBook)





// Turn the library object into a JSON string
const libJSON = JSON.stringify(lib)
console.log(libJSON)
