const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const findKeyByValue = function(object, value) {
  const objectKeys = Object.keys(object); // Object.keys(object) produces an array, which is stored in objectKeys.
  for (let key of objectKeys) { // For of loop to loop over the array.
    if (object[key] === value) { // Once a key in object matches value, return that key.
      return key;
    }
  }
};


//Tester code:
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
  
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"));
