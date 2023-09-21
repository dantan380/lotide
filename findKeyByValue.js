const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
    } else {
      return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    }
  };

  const findKeyByValue = function(object, value){
    const objectKeys = Object.keys(object);
    for(let key of objectKeys){
        if (object[key] === value){
            return key;
        }
    }
  }


  //Tester code:
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
  console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
  console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
  console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"));
