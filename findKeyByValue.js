const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  const objectKeys = Object.keys(object); // Object.keys(object) produces an array, which is stored in objectKeys.
  for (let key of objectKeys) { // For of loop to loop over the array.
    if (object[key] === value) { // Once a key in object matches value, return that key.
      return key;
    }
  }
};
module.exports = findKeyByValue;