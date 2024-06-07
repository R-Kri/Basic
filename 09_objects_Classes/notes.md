# javascript and classes

## OOP
It is a programming paradigm - which means apka code likhne ka structure kesa hota hai or style preference.

## Object
- Object is collection of properties and methods
- e.g toLowerCase, promises all are objects

## why use OOP
- To avoid spaghetti code- difficult to understand, read, or modify due to its lack of structure or design.
## parts of OOP
Object literal 
More terms like
- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars
Encapsulation - Encapsulation is the bundling of data (attributes) and methods (functions) that operate on the data into a single unit, or class. It restricts direct access to some of the object's components, which can prevent the accidental modification of data.
```javascript 
class Car {
  constructor(make, model) {
    this._make = make;
    this._model = model;
  }

  get make() {
    return this._make;
  }

  set make(newMake) {
    this._make = newMake;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }

  displayInfo() {
    console.log(`${this._make} ${this._model}`);
  }
}

const car = new Car('Toyota', 'Corolla');
car.displayInfo(); // Output: Toyota Corolla

```


Abstraction - Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of an object. It helps in reducing programming complexity and effort.
```javascript
    class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    // Abstract method, meant to be overridden
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Buddy');
dog.makeSound(); // Output: Buddy barks.

```

Inheritance -  Inheritance is a mechanism where a new class (child class) inherits the properties and behavior (methods) of another class (parent class). It allows for code reuse and the creation of a hierarchical relationship between classes.
```javascript

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // Calls the parent class constructor
    this.studentId = studentId;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

const student = new Student('Alice', 20, 'S12345');
student.greet(); // Output: Hello, my name is Alice and I am 20 years old.
student.study(); // Output: Alice is studying.

```

Polymorphism -  Polymorphism allows objects to be treated as instances of their parent class rather than their actual class. It enables a single interface to control access to a general class of actions, with specific behavior determined at runtime.
```javascript
class Shape {
  draw() {
    console.log('Drawing a shape.');
  }
}

class Circle extends Shape {
  draw() {
    console.log('Drawing a circle.');
  }
}

class Square extends Shape {
  draw() {
    console.log('Drawing a square.');
  }
}

function drawShape(shape) {
  shape.draw();
}

const circle = new Circle();
const square = new Square();

drawShape(circle); // Output: Drawing a circle.
drawShape(square); // Output: Drawing a square.

```