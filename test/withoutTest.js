const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');


//Tester code:
console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3]));
console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]));
const nums = ["1", "2", "3"];
console.log(assertArraysEqual(nums, ["1", "2", "3"]));