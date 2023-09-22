const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const findKey = function(object, callback) {  //findKey will take in an object and a callback as parameters.
  const objectKeys = Object.keys(object); //objectKeys will contain all keys from the given object.
  for (let key of objectKeys) {  //For every key...
    if (!callback(object[key])) {  //If the callback function does not produce a truthy result based on the key,
      continue;                 //continue the to the next key.
    } else {
      return key;             //If the callback function produces a truthy result based on that key,
    }                           //return that key.
  }
};

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
console.log(result1);

console.log(assertEqual(result1, "noma"));

const result2 = findKey({
  "Patrick": {color: "pink"},
  "Spongebob": {color: "yellow"},
  "Squidward": {color: "blue"}
}, x => x.color === "yellow");
console.log(result2);

console.log(assertEqual(result2, "Spongebob"));