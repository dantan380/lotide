const assertArraysEqual = require('./assertArraysEqual');


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

module.exports = middle;