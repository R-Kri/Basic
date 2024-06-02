/*
filter():
forEach dont return any value, either you wanted or not

filter return some values

filter is having callback function which has access to each element, then we have to give the condition. If the condition is satisfies then return those values else dont return the values

When we write paranthesis, then no need to write the return keyword.

const myNums = [1,2,3];
const newNums = myNums.filter(num => num > 4)
When we use curly braces, then we need to use return, as we will start the scope here.

  const myNums = [1,2,3];
  const newNums = myNums.filter(num=> {
      return num > 4;
  })
Consider an array has given with some objects, so we need to apply filters on it.

map():
It looks better than forEach loop
It also have a callback
map automatically return the new array
Chaining methods: means we can apply multiple methods at once
Whatever values are passed in chaining it will be passed to respective methods
reduce():
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Whatever we give the initial value, it goes into accumulator
Reduce will work on entire array
In reduce methods, we get 2 parameter, one is accumulator and other is current value
We can assign the value from which we want to start the value in accumulator
*/