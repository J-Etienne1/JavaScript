



///////////////////////////
// Convert String to number
///////////////////////////
let amount = '100';

//amount = parseInt(amount)
// or
//amount = +amount
// or
amount = Number(amount)


console.log(amount, typeof amount);


///////////////////////////
// Convert String to Float
///////////////////////////
let amountFloat = '10.5'

amountFloat = parseFloat(amountFloat)
// if use parseInt will get 10 instead of 10.5
//amountFloat = parseInt(amountFloat)

console.log(amountFloat, typeof amountFloat);



///////////////////////////
// Convert Number to Boolen
///////////////////////////
let amountBool = 1;

amountBool = Boolean(amountBool);

// 1 => n will be True
// 0 will be False
console.log(amountBool)




///////////////////////////
// Convert Number to String
///////////////////////////

let amount2 = 100;

//amount2 = amount2.toString();
// or
//amount2 = String(amount2)


console.log(amount2, typeof amount2);





///////////////////////////
// Convert a non number String to Number
///////////////////////////


let x = 'hello';
x = parseInt(x)
console.log(x, typeof x) // get NaN ,  number