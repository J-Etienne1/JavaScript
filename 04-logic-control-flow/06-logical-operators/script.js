
console.log(10 > 20 && 30 > 15 && 40 > 30);
console.log(10 > 20 || 30 > 15 );


// && will return 1st flasy value or the last value
let a;
a = 10 && 20
a = 10 && 20 && 30
a = 10 && "" && 0 && 30
console.log(a)



const posts = []
console.log(posts[0]) // returns undefined
posts.length > 0 && console.log(posts[0]) // shows empty so wont display indefined 



// || - retrun the 1st True value of last value
let b;
b = 10 || 20;
b = 0 || 20;
b = 0 || null || "" || undefined;
console.log(b)



// ?? - returns the right side operand when the left is null or undefined
let c;
c= 10 ?? 30;
c= null ?? 20;
c= undefined ?? 30;
c= 0 ?? 30;
console.log(c)







