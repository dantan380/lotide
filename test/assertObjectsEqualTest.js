const assertObjectsEqual = require('../assertObjectsEqual');

const poo = {poopy: 1};
const poopy = {poopy: 1};
console.log(assertObjectsEqual(poo, poopy));