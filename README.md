# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dantan380/lotide`

**Require it:**

`const _ = require('@dantan380/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Checks if two arrays have the same  length, type and value. Returns a message indicating whether they are equal or not.

* `assertEqual(actual, expected)`: Checks if actual is equal to expected, in both type and value. Returns a message indicating whether they are equal or not.

* `assertObjectsEqual(actual, expected)`: Checks if `actual` is the same object as `expected`. Returns a message indicating whether they are equal or not.

* `countLetters(sentecne)`: Gives a count of how many of each letter appears in the sentence.

* `countOnly(allItems, itemsToCount)`: Counts how many times a specific element appears in an array based on a given object. Returns an object with the number counted of each specific item.

* `findKey(object, callback)`: Retrieves the key of a value in an object based on the callback function. Returns the first key that causes the callback function to return a truthy value. If no key meets the requirement, returns `undefined`.

* `findKeyByValue(object, callback)`: Takes an object and a callback function as parameters. Retrieves the first key in the object that meets the value specified. Returns `undefined` if no such key is found.

* `head(array)`: Takes an array. Returns the first element of that array (index 0).

* `letterPositions(sentence)`: Finds the indices of each letter in the sentence and returns them in an object, where each key is each letter of the sentence. The value of each key is it's index in the sentence.

* `map(array, callback)`: Takes an array and a callback function as parameters. Transforms the elements of the given array based on the callback function. Returns a new array with each transformed element.

* `middle(array)`: Finds and returns the middle most element of an array. If the given array's length is even, the two middle most values are returned in a new array.

* `takeUntil(array, callback)`: Takes an array and a callback function as parameters. Returns a new array with elements until the callback function produces a truthy value.

* `tail(array)`: Returns a new array without the first value of the given array. Takes an array as a parameter.

* `without(source, itemsToRemove)`: Returns a new array with the specified elements removed from the source array.