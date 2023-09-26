const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

const letters = countLetters("LHL");

console.log(assertEqual(letters["L"], 2));
console.log(assertEqual(letters["H"], 1));