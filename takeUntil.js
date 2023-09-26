const assertArraysEqual = require('./assertArraysEqual');


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
module.exports = takeUntil;