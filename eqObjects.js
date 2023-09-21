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

  const eqObjects = function (object1, object2){
     const shirtObjectArr1 = Object.keys(object1)
     const shirtObjectArr2 = Object.keys(object2)
     if (shirtObjectArr1.length === shirtObjectArr2.length){
        for (let key of shirtObjectArr1){
            if(shirtObject[key] === anotherShirtObject[key]){
                return true;
            } else {
                return false;
            }
        }
     } else {
        return false;
     }
  }

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(assertEqual(eqObjects(shirtObject , anotherShirtObject), true));


const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false));



const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), false));



const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false));