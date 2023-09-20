const assertArraysEqual = function(actual, expected) {
  const eqArrays = function(expectedArr, actualArr) {
    for (let i = 0; i < expectedArr.length; i++) {
      if (expectedArr[i] !== actualArr[i]) {
        return false;   // If anyone of the elements in the array don't match in value and type, return false.
      }
    }            // If all the elements don't meet the requirements for the conditional statement, return true.
    return true;
  };
  if (eqArrays(actual, expected) === true) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};


const middle = function(array) {
  let newMidArray = [];

  // Variables to store the middle elements of even and odd lengthd arrays.
  const midElement1Even = Math.floor((array.length - 1) / 2); //Length of the array minus 1, divided by 2, rounded.
  const midElement2Even = Math.floor(array.length / 2); // Length of the array divided by 2.
  const midElementOdd = Math.floor(array.length / 2); // ^

  if (array.length <= 2) {
    newMidArray = [];
  }
  if (array.length % 2 === 0) {
    newMidArray.push(array[midElement1Even]); //Pushing the value, which is the index of the given array.
    newMidArray.push(array[midElement2Even]); // ^
  }
  if (array.length % 2 === 1) {
    newMidArray.push(array[midElementOdd]);
  }
  return newMidArray;
};
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));