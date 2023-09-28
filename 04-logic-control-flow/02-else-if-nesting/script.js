

const d = new Date(10,30,2023, 7,0,0);
const hour = d.getHours();

console.log(hour)

/* 
if (hour < 12) {
    console.log("Good morning")
} else if (hour < 18) {
    console.log("Good afternoon")
} else {
    console.log("Goodnight")
}

 */

// Nested IF
if (hour < 12) {
    console.log('Good Morning');
  
    if (hour === 6) {
      console.log('Wake Up!');
    }
  } else if (hour < 18) {
    console.log('Good Afternoon');
  } else {
    console.log('Good Night');
  
    if (hour >= 20) {
      console.log('zzzzzzzz');
    }
  }
  







if (hour >= 7 && hour < 15) {
    console.log("Its work time")
}






if (hour === 7 || hour === 20) {
    console.log("Get ready for bed")
}