const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = function(expectedArr, actualArr) {
  for (let i = 0; i < expectedArr.length; i++) {
    if (expectedArr[i] !== actualArr[i]) {
      return false;   //If anyone of the elements in the array don't match in value and type, return false.
    }
  }            //If all the elements don't meet the requirements for the conditional statement, return true.
  return true;
};
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true));