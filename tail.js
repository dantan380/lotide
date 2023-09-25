const assertEqual = require('./assertEqual');


const tail = function(array) {
  const newArray = array.slice(1);
  return newArray;
};

//Array.slice() is used to create a new array with the values from "array" with the starting index position
// of "1", which skips over the head of the array.

module.exports = tail;