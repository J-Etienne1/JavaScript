
// Loop through Arrays
const items = ["Book", "Table", "Chair", "Cup"];
const users = [
  {
    name: "Jason",
  },
  {
    name: "Debbie",
  },
  {
    name: "Nero",
  },
];

for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user.name);
}



// Loop through Strings
const str = "Hello World"
for (const letter of str) {
    console.log(letter)
}


// Loop over Maps
const map = new Map();
map.set ('name', 'Nick');
map.set ('age', 67);

for (const [key, value] of map) {
    console.log(key, value)
}