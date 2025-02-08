// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not

let one = [], two = '[]', three = [1, 2, 3];

console.log(Array.isArray(one));
console.log(Array.isArray(two));
console.log(Array.isArray(three));