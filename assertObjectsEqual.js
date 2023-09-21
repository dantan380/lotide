const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; //*
  if (inspect(actual) === inspect(expected)) {
    return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};
    
const poo = {poopy: 1};
const poopy = {poopy: 1};
console.log(assertObjectsEqual(poo, poopy));

//* Util library's inspect function:
//  Allows the keys of the object to be returned instead of [object Object] === [object Object].