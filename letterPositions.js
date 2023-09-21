const assertArraysEqual = function(actual, expected) {
  const eqArrays = function(expectedArr, actualArr) {
    for (let i = 0; i < expectedArr.length; i++) {
      if (expectedArr[i] !== actualArr[i]) {
        return false;   //If anyone of the elements in the array don't match in value and type, return false.
      }
    }            //If all the elements don't meet the requirements for the conditional statement, return true.
    return true;
  };
  if (eqArrays(actual, expected) === true) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};


const letterPositions = function(sentence) {
  const results = {};
  for (let index in sentence) {    // For...in loop to loop which gives the letter and index.
    let letter = sentence[index];
    if (letter !== " ") {
      if (results[letter]) {   // If the letter key already exists...
        results[letter].push(parseInt(index));  // Push the next index occurence of the letter key.
      } else {        // If the letter key didn't already exist...
        results[letter] = [parseInt(index)];    // The letter key equals the numerical index (using parseInt) in an array
      }
    }
  }
  return results;
};

//Tester code:
console.log(letterPositions("hello"));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));
console.log(assertArraysEqual(letterPositions("hello").h, [0]));