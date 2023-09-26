const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');



//Tester code:
const words = ["ground", "control", "to", "major", "tom"];
const nums = ["123", "234", "345", "456"];
const finalTest = ["poop", "fire", "miff", "laz"];


const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));

const results2 = map(nums, num => num[0]);
console.log(assertArraysEqual(results2, ["1", "2", "3", "4"]));

const results3 = map(finalTest, final => `${final}y`);
console.log(assertArraysEqual(results3, ["poopy", "firey", "miffy", "lazy"]));