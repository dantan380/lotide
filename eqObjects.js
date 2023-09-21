const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
    } else {
      return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    }
  };

  const eqObjects = function (object1, object2){
     const shirtObjectArr = Object.keys(shirtObject)
     const anotherShirtObjectArr = Object.keys(anotherShirtObject)
     if (shirtObjectArr.length === anotherShirtObjectArr.length){
        for (let key of shirtObjectArr){
            if(shirtObject[key] === anotherShirtObject[key]){
                return true;
            } else {
                return false;
            }
        }
     }
  }

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(assertEqual(eqObjects(shirtObject , anotherShirtObject), true));

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false));