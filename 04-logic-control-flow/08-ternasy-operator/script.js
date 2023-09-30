const age = 39;

// unsing an if statament
if (age >=18) {
    console.log("Your can vote")
}else{
    console.log("You cant vote")
}

// above using a Ternary Operator
age >= 18 ? console.log("Your can vote") : console.log("You cant vote")


// Assigning a conditional value to a varable
const canVote = age >= 18 ? true : false
const canVote2 = age >= 18 ? "Your can vote" : "You cant vote"
console.log(canVote)
console.log(canVote2)




// Multiple statements
const auth = true;

let redirect;

if (auth) {
    alert("Welcome");
    redirect = "/dashboard"
} else {
    alert("Denied")
    redirect = "/login"
}

// Ternary version of above
const auth2 = true;

const redirect2 = auth2 ? (alert("Hi there"), "/dashboard2") : (alert("Access Denied"), "/login2")

console.log(redirect)
console.log(redirect2)






// if dont want to do an else, could use null
auth ? console.log("Hi again") : null
// another apprach
auth && console.log("Hi again2") 






