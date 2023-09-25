

const obj1 = {
    a:1,
    b:2
};



const obj2 = {
    c:3,
    d:4
};


// obj3 contains 2 objs  
// const obj3 = {obj1, obj2}
// { obj1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } }

// to combine the into just 1 object, can use the spread operator 
const obj3 = {...obj1,...obj2}  // { a: 1, b: 2, c: 3, d: 4 }

x = obj3





const todo = new Object()
todo.id = 1
todo.name = "Buy bread"
todo.completed = false




const todos = [
    {
        id: 1,
        name: "buy milk"        
    },
    {
        id: 2,
        name: "code"
        
    },
    {
        id: 3,
        name: "have dinner"
    }
]

x = todos[0].name;



// get all the key of an object and put them in an array
x = Object.keys(todo)



// get the length of an object (cant use length on a object)
// get the keys the get the lenght of that as it is an array
x = Object.keys(todo).length



// get all the values of an object and put them in an array
x = Object.values(todo)



// get all the key values paris of an object and put them in an array
x = Object.entries(todo)


// check if an object has a specific property
x = todo.hasOwnProperty("name")



console.log(x)