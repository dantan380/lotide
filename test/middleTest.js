const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//Tester code:
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));