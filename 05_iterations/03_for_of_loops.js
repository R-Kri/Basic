// for of

// ["", "", ""]
// [{}, {}, {}]

//SYNTAX
// for (const iterator of object) { // object here doesn't mean specifically object it can be array as well.
    
// }
const arr = [1, 2, 3, 4, 5]

for (const num of arr) { // in place of num we can also use i,j,k....
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
// The map object holds key-value pairs and remembers the original insertion order of the keys.
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map); // will only show unique entries and with order.
// OUTPUT
/*
Map(3) {
    'IN' => 'India',
    'USA' => 'United States of America',
    'Fr' => 'France'
  }
*/

for (const [key, value] of map) { // We put [] to destructure the array and get a simple output.
    // console.log(key, ':-', value);
}

// const myObject = { 
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) { // myObject is not iterable like this.
//     console.log(key, ':-', value);
    
// }

//####################################################################################

// FOR IN

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); // Map is not iterable here.
// }