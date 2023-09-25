const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test code to check if "tail" is not modifying the original array.
const words = ["hey", "there", "stranger"];
console.log(tail(words));
console.log(assertEqual(words.length, 3));