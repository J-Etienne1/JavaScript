

function first() {
    const x = 100;

    function second() {
        const y = 200;
        console.log(x+y)
    }
    second()

    // console.log(y) wont work - as you can access parent vars but cant access child vars
}
first()

if (true) {
    const x = 100;

    if (x === 100) {
        const y = 200
        console.log(x+y)
    }

    // console.log(y) wont work - same as above
}