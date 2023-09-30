
// || assigns the right side value only if the left is a False value

let a = false;
if (!a) {
    a = 20;
}

a = a || 10;
// shorthand of above
a ||= 10;
console.log(a)







// && assigns the right side value only if the left is a True value
let b = 10;
if (b) {
    b = 20;
}

b = b && 20;
// shorthand of above
b &&= 20;
console.log(b)




// ?? assigns the right side value only if the left is a Null OR Undedfinded
let c = null;
if (c===null || c === undefined) {
    c = 20;
}

c = c ?? 20;
// shorthand of above
c ??= 20;
console.log(c)