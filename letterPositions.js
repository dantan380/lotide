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


  const eqArrays = function(expectedArr, actualArr) {
    for (let i = 0; i < expectedArr.length; i++) {
      if (expectedArr[i] !== actualArr[i]) {
        return false;   
      }
    }            
    return true;
  };


const letterPositions = function(sentence){
    const results = {};
    for (let index in sentence){
        let letter = sentence[index];
        if (letter !== " "){
            if (results[letter]){
                results[letter].push(parseInt(index));
            } else {
                results[letter] = [parseInt(index)];
            }
        }
    }
    return results;
};
console.log(letterPositions("hello"));