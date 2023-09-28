const d = new Date(2023, 1, 10, 8, 0, 0);

const month = d.getMonth();
const hour = d.getHours();

switch (month) {
    case 1:
        console.log("It is Jan");
        break;

    case 2:
        console.log("It is Feb");
        break;
    case 3:
        console.log("It is Mar");
        break;
    default:
        console.log("it is not Jan, Feb or Mar");
}



switch (true) {
    case hour < 12:
        console.log("Good Morning")
        break;
case hour < 18:
    console.log("Good Afternoon")
    break;    
    default:
        console.log("Good Night")
        break;
}