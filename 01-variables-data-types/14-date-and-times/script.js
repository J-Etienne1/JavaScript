

let d;

d = new Date()

d = new Date(2021, 6, 10) // month starts at 0
d = new Date(2021, 6, 10, 12)

d = new Date('2021-07-10')
d = new Date('2021-07-10T12:30:00')
d = new Date('07/10/2021 13:30:00')

d = Date.now() // millseconds since UNIX time started
d = new Date('07-10-2022')
d =d.getTime() // timestamp for the date 07-10-2022
d = d.valueOf()


d = new Date(1657407600000)

// conver milliseconds to sec
d= Math.floor(Date.now()/1000)

console.log(d)