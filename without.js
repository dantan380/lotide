// Function to check if the type and value of elements in the array match.
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

// eqArrays function defined outside of assertArraysEqual to check if each element in the array
// matches in type and value. This allows it to be accessible by without function.
const eqArrays = function(expectedArr, actualArr) {
  for (let i = 0; i < expectedArr.length; i++) {
    if (expectedArr[i] !== actualArr[i]) {
      return false;
    }
  }
  return true;
};

// Function that creates a new array by only including elements that exist in "source"
// and removing anything that matches from "source" and "itemsToRemove".
const without = function(source, itemsToRemove) {
  let newArr = [];

  for (let i = 0; i < source.length; i++) {
    let found = false;

    for (let j = 0; j < itemsToRemove.length; j++) {
      if (eqArrays([source[i]], [itemsToRemove[j]])) {
        found = true;
        break;
      }
    }

    if (!found) {
      newArr.push(source[i]);
    }
  }

  
  return newArr;
};

//Tester code:
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([1, 2, 3], [1]));
console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3]));
console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]));
const nums = ["1", "2", "3"];
console.log(without(nums, [1, 2, "3"]));
console.log(assertArraysEqual(nums, ["1", "2", "3"]));