const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


//Tester code:
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false));