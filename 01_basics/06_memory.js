// Two types of memory Stack and hep memory types.
// Stack => Primitive type is used. Means we get a copy of the value.
// Heap => reference type is used. Means we get the refernce of the value.

// In stack we only get a copy of the value.

let name = "Thor"

let anothername = name
anothername = " Hella"

console.log(name); // Thor
console.log(anothername); // Hella

// In heap we get the reference of the value
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = user
userTwo.email = "userTwo@gmail.com" // As both userOne and userTwo points out to the same refernce data so making any chnge in userTwo will also effect userOne.

console.log(user.email);
console.log(userTwo.email);