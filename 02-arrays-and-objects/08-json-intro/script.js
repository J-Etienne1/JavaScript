

// https://api.github.com/users
// https://api.github.com/users/J-Etienne1




// convert JS objects to JSON
const post = {
    id: 1,
    title: "post one",
    body: "this is the body"
}


const str = JSON.stringify(post)
console.log(str)

// parse JSON or convert JSON to JS objects
const obj = JSON.parse(str)
console.log(obj)



// parse an array
const posts = [
    {
        id: 1,
        title: "post one",
        body: "this is the body"
    },
    {
        id: 2,
        title: "post two",
        body: "this is the body"
    }
]

const str2 = JSON.stringify(posts)
console.log(str2)