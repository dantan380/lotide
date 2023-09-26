// eqArrays function defined outside of assertArraysEqual to check if each element in the array
// matches in type and value. This allows it to be accessible by without function.
const eqArrays = require('./eqArrays');

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
module.exports = without;