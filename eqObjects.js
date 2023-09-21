const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = function(expectedArr, actualArr) {
  for (let i = 0; i < expectedArr.length; i++) {
    if (expectedArr[i] !== actualArr[i]) {
      return false;   //If anyone of the elements in the array don't match in value and type, return false.
    }
  }            //If all the elements don't meet the requirements for the conditional statement, return true.
  return true;
};

const eqObjects = function(object1, object2) {
// 1. 
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

// 2.
  if (keys1.length !== keys2.length) {
    return false;
  }


  // 3.
  for (let key of keys1) {
    // 4.
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // 5.
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
        // 6.
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  // 7.
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(assertEqual(eqObjects(shirtObject , anotherShirtObject), true));


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false));



const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true));



const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false));

//How it works:
// 1. Get the keys and store in keys1 and keys2 using Object.keys, which stores as an array.

// 2. Check to see if both objects have the same amount of keys.

// 3. Loop through the keys in object1.

// 4. Check to see if the key from both objects are arrays.

// 5. If both keys are arrays, eqArrays will determine if their values match.

// 6. If both keys are not arrays, their values are compared primitively (directly).

// 7. If both objects have the same amount of keys, keys in each array are indeed arrays, and their values
// match, then both objects match and will return true.