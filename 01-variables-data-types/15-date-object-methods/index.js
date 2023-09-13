


let x;

let d =  new Date();

x = d.toString()
x = d.getTime()
x = d.valueOf()

x = d.getFullYear();

x = d.getMonth(); // month is 0 based
x = d.getMonth() + 1; // give correct current month

x = d.getDay();

x = d.getDate();

x = d.getHours()
x = d.getMinutes()


x = `${d.getFullYear()}-${d.getMonth()+ 1}-${d.getDate()}`


// API for dates
x = Intl.DateTimeFormat('en-ie').format(d)
// x = Intl.DateTimeFormat('default').format(d)

x = Intl.DateTimeFormat('en-ie', {month: 'long'}).format(d)
//shorthand for Intl.DateTimeFormat using toLocaleString
x = d.toLocaleString('en-ie', {month:'short'})


x = d.toLocaleString('en-ie',{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric',
    hour:'numeric',
    minute:'numeric',
    second:'numeric',   
    timeZone: 'Europe/Dublin'   // Use a valid IANA time zone identifier
})



console.log(x)