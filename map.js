const words = ["ground", "control", "to", "major", "tom"];

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


const map = function (array, callback){
    const results = [];
    for (let item of array){
        results.push(callback(item));
    }
    return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);