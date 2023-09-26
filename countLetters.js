const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  let result = {};
  for (const letter of sentence) {  // Loop through all the letters of the given sentence.
    if (result[letter]) {       // If result already contains the letter as a key, then add "1" to it.
      result[letter] += 1;
    } else if (letter === " ") {    // If letter is a space, skip it.
      continue;
    } else {
      result[letter] = 1;  // If none of the previous conditions meet, the letter is a key in result and it's value is "1"
    }
  }
  return result;
};

module.exports = countLetters;