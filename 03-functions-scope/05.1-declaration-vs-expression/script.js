
// Can call the function before it is Declared due to HOISTING this is not the case with Expressions
// console.log(addEuroSign(100));


// Function Declaration
function addEuroSign(value) {
  return "€" + value;
}

console.log(addEuroSign(100));




// Function Expression
const addPlusSign = function (value) {
  return "+" + value;
};

console.log(addPlusSign(200));










