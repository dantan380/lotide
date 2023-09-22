const words = ["ground", "control", "to", "major", "tom"];
const nums = ["123", "234", "345", "456"];
const finalTest = ["poop", "fire", "miff", "laz"];

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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//Tester code:
const results1 = map(words, word => word[0]);
console.log(results1);

console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));

const results2 = map(nums, num => num[0]);
console.log(results2);

console.log(assertArraysEqual(results2, ["1", "2", "3", "4"]));

const results3 = map(finalTest, final => `${final}y`);
console.log(results3);

console.log(assertArraysEqual(results3, ["poopy", "firey", "miffy", "lazy"]));