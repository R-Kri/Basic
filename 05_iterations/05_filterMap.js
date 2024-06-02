/*
filter():
forEach dont return any value, either you wanted or not

filter return some values

filter is having callback function which has access to each element, then we have to give the condition. If the conditions satisfies then return those values else dont return the values

When we write paranthesis, then no need to write the return keyword.

const myNums = [1,2,3];
const newNums = myNums.filter(num => num > 4)
When we use curly braces, then we need to use return, as we will start the scope here.

  const myNums = [1,2,3];
  const newNums = myNums.filter(num=> {
      return num > 4;
  })
Consider an array has given with some objects, so we need to apply filters on it.

### map()

- Better than `forEach`: `map()` is often preferred over `forEach` because it automatically returns a new array, making it more concise and expressive.
  
- Callback Function: Like `forEach`, `map()` also uses a callback function to operate on each element of the array.

A callback function, simply put, is a function that is passed as an argument to another function and is expected to be called or executed at a certain point within the body of the outer function.

- Automatic New Array: The primary advantage of `map()` is that it automatically returns a new array with the results of calling a provided function on every element in the calling array, without modifying the original array.

- Chaining Methods: `map()` supports method chaining, which means you can apply multiple array methods in sequence.

#### Example:

Suppose we have an array of numbers and we want to square each number using `map()`:

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((number) => number ** 2);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

### `reduce()`

- Reference: [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

- Accumulator: Whatever value is given as the initial value in `reduce()`, it becomes the accumulator.

- Operation on Entire Array: `reduce()` works on the entire array, combining all elements into a single value.

- Parameters: In `reduce()`, we receive two parameters: the accumulator and the current value being processed.

- Starting Value: We can specify the initial value from which we want to start accumulating.

#### Example:

Let's say we have an array of numbers and we want to find the sum of all the numbers using `reduce()`:

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)


### Summary:

- **`map()` vs. `forEach`**: `map()` is preferred when you want to transform each element of an array and automatically return a new array.
- **`map()` Example**: Squaring each number in an array.
- **`reduce()`**: Useful for accumulating values in an array, combining elements into a single value.
- **`reduce()` Example**: Finding the sum of all numbers in an array.
  
Both `map()` and `reduce()` are powerful array methods that provide concise ways to manipulate and process array data in JavaScript. They enhance code readability and expressiveness, especially when used in combination with other array methods or for complex data transformations.
*/