const head = function (array){
    return array[0];
};

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
    }
    if (actual !== expected) {
      return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    }
  };

  
  
  //Test Code
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));