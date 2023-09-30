/* 
for ([initialExpression]; [conditionExpression]; [incrementExpression])
statment;
*/

// INITITAL EXPRESSION - Initializes a variable/counter

// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false

// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable

// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax





for (let i = 0; i <= 10; i++) {
  console.log("Number " + i);
}




for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log("i = 7 ");
  }
}



// NestedLoops
for (let i = 1; i <= 5; i++) {
    console.log("Number " + i)
    for (let j = 0; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}




// Loop through an Array
const names = ["jason", "Debie", "Nick"]
for (let i = 0; i < names.length; i++) {
    if(i == 1){
        console.log(names[i] + " is the best")
    } else {
        console.log(names[i]);
    }
}























