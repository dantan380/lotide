const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  for (let index in sentence) {    // For...in loop to loop which gives the letter and index.
    let letter = sentence[index];
    if (letter !== " ") {
      if (results[letter]) {   // If the letter key already exists...
        results[letter].push(parseInt(index));  // Push the next index occurence of the letter key.
      } else {        // If the letter key didn't already exist...
        results[letter] = [parseInt(index)];    // The letter key equals the numerical index (using parseInt) in an array
      }
    }
  }
  return results;
};
module.exports = letterPositions;