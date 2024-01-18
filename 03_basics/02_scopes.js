
// {} This is scope, when it comes with functions and if-else statements
if (true) {
    let a = 10
    const b = 20
    var c = 30
}
console.log(a); // No output as "a" is only defined under if 
console.log(b); // No output as "a" is only defined under if 
console.log(c); // prints 30 which is a problem. Hence it is better to avoid var.

// Study further about block scope and global scope.