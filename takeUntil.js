const assertArraysEqual = function(actual, expected) {
    const eqArrays = function(expectedArr, actualArr) {
      for (let i = 0; i < expectedArr.length; i++) {
        if (expectedArr[i] !== actualArr[i]) {
          return false;
        }
      }
      return true;
    };
    if (eqArrays(actual, expected) === true) {
      return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
    } else {
      return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    }
  };