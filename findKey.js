const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
    }
    if (actual !== expected) {
      return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    }
  };

  const findKey = function(object, callback){
    const objectKeys = Object.keys(object);
    console.log(objectKeys);
    for (let key of objectKeys){
        if(!callback(object[key])){
            continue
        } else {
            return key;
        }
    }
  }

  const result1 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2)
  console.log(result1);