const tail = function(array) {
  const newArray = array.slice(1);
  return newArray;
};

//Array.slice() is used to create a new array with the values from "array" with the starting index position
// of "1", which skips over the head of the array.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

// Test code to check if "tail" is not modifying the original array.
const words = ["hey", "there", "stranger"];
console.log(tail(words));
console.log(assertEqual(words.length, 3));