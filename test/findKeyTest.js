const assertEqual = require('../assertEqual');
const findKey = require('../findKey');


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