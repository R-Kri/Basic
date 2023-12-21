// Stack and hep memory types.
// Stack => Primitive type is used
// Heap => reference type is used

// In stack we only get a copy of the value.

let name = "Thor"

let anothername = name
anothername = " Hella"

console.log(name);
console.log(anothername);

// In heap we get the reference of the value
let user = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = user
userTwo.email = "userTwo@gmail.com"

console.log(user.email);
console.log(userTwo.email);