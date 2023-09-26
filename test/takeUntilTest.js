const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');


//Tester code:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); //Callback function evaluates if "x" is greater than 0.


console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));

//Callback function of data2 evaluates if "x" is equal to ",".
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));