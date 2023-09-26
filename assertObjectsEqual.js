const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (inspect(actual) === inspect(expected)) {
    return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

module.exports = assertObjectsEqual;
    


//* Util library's inspect function:
//  Allows the keys of the object to be returned instead of [object Object] === [object Object].