// for of : THESE ARE ARRAY SPECIFIC LOOPS

// ["", "", ""]
// [{}, {}, {}]  // This is how we put objects in an array.

//SYNTAX
// for (const iterator of object) { 
    // object here doesn't mean specifically only object it can be array or string as well. Object se matlab hai ki hum kiske upar loop lagane wale hai..
// }

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { // in place of num we can also use i,j,k....
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`) // here each letter will print serially in place of "greet".
}

// Maps
// The map object holds key-value pairs and remembers the original insertion order of the keys.
// A Map is a special type of object in JavaScript that lets you store collections of key-value pairs. Unlike regular objects, the keys in a Map can be of any type, such as strings, numbers, objects, or even functions.
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// We will only get all get unique values and doesn't store duplicate values, as here 'IN' => 'India' will not be printed again.

// console.log(map); // will only show unique entries and with order.
// OUTPUT
/*
Map(3) {
    'IN' => 'India',
    'USA' => 'United States of America',
    'Fr' => 'France'
  }
*/

for (const [key, value] of map) { 
    // console.log(key, ':-', value); // 'IN' => 'India',
    // It prints this ouput.          // 'USA' => 'United States of America',
                                      //  Fr' => 'France'
}

// We put [] in "key" to destructure the array and get a simple output. Otherwise it'll print ['IN' => 'India'] ['USA' => 'United States of America'] ['Fr' => 'France'] all as an individual array.

// const myObject = { 
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) { 
    // myObject is not iterable like this. Hence we can iterate maps like this but not objects, we have different ways to iterate objects.
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
    // console.log(key) // It'll print all the keys i.e js,cpp,rb,swift
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
/* Output:
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key); // here default keys in arrays are 0,1,2,3,4,5
    //console.log(programming[key]); // it'll print all values.
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); // Map is not iterable here so we cannot write in loops like this.
// }