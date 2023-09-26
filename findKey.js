const assertEqual = require('./assertEqual');
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
module.exports = findKey;