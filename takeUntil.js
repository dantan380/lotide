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



const takeUntil = function(array, callback) {
  let taken = [];
  for (let item of array) {    //For every item of the given array...
    if (callback(item)) {  //If the callback function is truthy based on the item passed, break the loop.
      break;
    } else {
      taken.push(item);  //If the callback function is falsey based on the item, add the item to "taken".
    }
          
  }
  return taken;       // Return the "taken" array.
};


  
//Tester code:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); //Callback function evaluates if "x" is greater than 0.
console.log(results1);


console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));

//Callback function of data2 evaluates if "x" is equal to ",".
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));