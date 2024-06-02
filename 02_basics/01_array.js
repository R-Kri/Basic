// Starting arrays
// Declarations of array.
const myArr = [0,1,2,3,4,5] // different types of datatypes can be added and it is resizable.
const myHeroes = ["shaktiman","Naaga"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[1]);

// Array Methods

myArr.push(6) // push => It adds elements in the array.
myArr.push(7)

myArr.pop() // pop will remove the last value

myArr.unshift(9) // It'll add the element in the first position

myArr.shift() // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(myArr);

// There are some questionnaire methods in JS, we used it to ask questions. For e.g

console.log(myArr.includes(9)); // It'll check if the array includes 9 or not. If it do then it'll return "true" otherwise "false"

console.log(myArr.indexOf(9)); // It'll tell us the index of the element, and if it doesn't exist then it'll return -1.

// Important
const newArr = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(myArr);
console.log(newArr); // Both the console will print almost same output but the major change was done in the type. "join" binded the array in form 0,1,2,3,4,5,6 and converts the array into string. 


// SLICE AND SPLICE

console.log("A ",myArr);
const myn1 = myArr.slice(1,3) //Returns [1,2] second position is exclusive(range not included) and returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. 
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3) // returns [1,2,3] (range included) and Removes elements from an array and if necessary, inserts new elements in their place, returning the deleted elements.
console.log("C ",myArr); // returns [0,4,5] because 1,2,3 is extracted by splice method.
console.log(myn2);

// NOTE: slice returns a piece of the array but it doesn't affect the original array. splice changes the original array by removing, replacing, or adding values and returns the affected values.
