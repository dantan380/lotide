const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return "✅✅✅ Assertion Passed: " + actual + " === " + expected;
  }
  if (actual !== expected) {
    return "🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected;
  }
};

//Test Code
console.log(assertEqual("Daniel", "Daniel"));
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual(3, 2));