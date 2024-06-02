// There are two ways to declare objects one is like literal and another is like constructor.
// Singleton => koi bhi constructor se hum banate hai to singleton ek object banta hai. Magar literal se banane par singleton nahi banta.

const mySym = Symbol("key1") // Declaration of a symbol


// OBJECT LITERALS
// Curly braces are objects
const JsUser = {
    name: "Hitesh", // name,age,location are the key here
    "full name": "Hitesh Chaudhary",
    age: 18,
    mySym: "mykey1",
    [mySym]: "mykey2", // To declare the symbol as a key of object we use square bracket.
    location: "Delhi",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"] 
}

// Two methods to access
console.log(JsUser.email); // Not needed to access like a string 
console.log(JsUser["email"]); // Here we access like strings
// Why we need two methods to access.
// We cannot access "full name" using .full name, We have to use [] method
console.log(JsUser["full name"]);
// Below both will print almost same but major difference comes into it's datatype. mySym datatype is String for first and as symbol for second one.
console.log(JsUser.mySym);
console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser) // After freezing no changes will be applicable to the objects
JsUser.email = "hitesh@bing.com"
console.log(JsUser); // It'll be updated as hitesh@bing.com in the object.

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting);// It'll show undefined because of missing ().
console.log(JsUser.greeting()); // True
console.log(JsUser.greetingTwo());



/*
In JavaScript, there are primarily two ways to declare an object:

Object Literals
Constructor Functions (or using the new keyword)
Let's delve into each method with detailed explanations and examples.

1. Object Literals
Object literals are the most straightforward way to create objects in JavaScript. An object literal is a comma-separated list of key-value pairs wrapped in curly braces.

Syntax:
javascript
Copy code
let obj = {
    key1: value1,
    key2: value2,
    // ...
};
Example:
javascript
Copy code
let person = {
    name: "John Doe",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

console.log(person.name); // Output: John Doe
console.log(person.age);  // Output: 30
person.greet();           // Output: Hello, my name is John Doe
In this example:

person is an object with properties name and age, and a method greet.
The greet method uses this.name to refer to the name property of the object.
2. Constructor Functions
Constructor functions provide a template for creating multiple objects of the same type. They are a more formal way of creating objects and are particularly useful when you need to create many instances of an object.

Syntax:
javascript
Copy code
function ConstructorFunction(param1, param2, ...) {
    this.key1 = param1;
    this.key2 = param2;
    // ...
}
Example:
javascript
Copy code
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name);
    };
}

let person1 = new Person("John Doe", 30);
let person2 = new Person("Jane Doe", 25);

console.log(person1.name); // Output: John Doe
console.log(person1.age);  // Output: 30
person1.greet();           // Output: Hello, my name is John Doe

console.log(person2.name); // Output: Jane Doe
console.log(person2.age);  // Output: 25
person2.greet();           // Output: Hello, my name is Jane Doe
In this example:

Person is a constructor function that initializes properties name and age, and a method greet.
new Person("John Doe", 30) creates a new instance of the Person object.
Each instance of Person has its own copy of the properties and methods.
Comparison and Use Cases
Object Literals:
Simple and straightforward: Best for creating a single object or a few objects with a specific structure.
Readability: Easy to read and understand.
Constructor Functions:
Reusability: Ideal for creating multiple instances of objects with the same structure.
Prototypal Inheritance: Allows for more advanced object-oriented programming techniques, like inheritance.
Advanced Example: Using Prototypes
Using prototypes with constructor functions can help share methods across all instances, saving memory and improving performance.

javascript
Copy code
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};

let person1 = new Person("John Doe", 30);
let person2 = new Person("Jane Doe", 25);

person1.greet(); // Output: Hello, my name is John Doe
person2.greet(); // Output: Hello, my name is Jane Doe
In this example:

Person.prototype.greet defines a method on the prototype, so all instances of Person share the same greet method.
This reduces memory usage because the method is not duplicated for each instance.
Summary
Object Literals are best for creating simple objects.
Constructor Functions are suitable for creating multiple instances of similar objects.
Using prototypes with constructor functions can improve performance and memory efficiency.
Both methods are integral to JavaScript and understanding them helps in designing more efficient and maintainable code.

*/