// // In both ways we can declare the object just the difference is first is singleton and another is not.
// //const tinderUser = new Object() => Sigleton   // Constructor functions
 const tinderUser = {} // Not singleton   // Object literals

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedin = false

console.log(tinderUser);

// // We can perform nesting in Objects
// const regularUser = {
//     email: "somegmail.com",
//     fullname: {
//         userfullname:{
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }
// console.log(regularUser.fullname); // { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
// console.log(regularUser.fullname.userfullname); // { firstname: 'hitesh', lastname: 'choudhary' }
// console.log(regularUser.fullname.userfullname.firstname); // hitesh
// console.log(regularUser); // {
//                             //     email: 'somegmail.com',
//                             //     fullname: { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
//                             //   }
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2} // It'll not concatenate but just add both arrays to another array.
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj4 = Object.assign({},obj1, obj2) // The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object. Object.assign(target, source); here "{}" is the target.

// Other alternative we can use spread operator.
const obj4 = {...obj1, ...obj2}
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// Syntax we will use the most when it comes from database is 

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "he@gmail.com"
    },
    {
        id: 3,
        email: "hel@gmail.com"
    },
    {
        id: 4,
        email: "hell@gmail.com"
    },
    {
        id: 5,
        email: "hello@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // We can extract all the keys in the form of an array. [ 'id', 'name', 'isLoggedin' ]
console.log(Object.values(tinderUser)); // Similarly we can extract values
console.log(Object.entries(tinderUser));

// Sometimes what happens we try to extract a value which doesn't even exist, here chances of crash increases.
// To avoid crash we can check manually by asking
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // will give true if it exists
console.log(tinderUser.hasOwnProperty('isLog')); // False
