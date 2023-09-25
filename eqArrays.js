const assertEqual = require('./assertEqual');

const eqArrays = function(expectedArr, actualArr) {
  for (let i = 0; i < expectedArr.length; i++) {
    if (expectedArr[i] !== actualArr[i]) {
      return false;   //If anyone of the elements in the array don't match in value and type, return false.
    }
  }            //If all the elements don't meet the requirements for the conditional statement, return true.
  return true;
};

module.exports = eqArrays;