// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
/*
I: Array
O: Print values of array to the console
C: n/a
E: n/a
*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // For loop to iterate over array
  // Print values to the console at each index
  for (var i = 0; i < array.length; i ++){
    console.log(array[i]);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
/*
I: Array
O: Array values printed to the console in reverse
C: Must print array values from last to first
E: n/a
*/
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // Use for loop to loop backwards over the array
  // Print each value to the console
  for (var i = array.length - 1; i >= 0; i --){
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
/*
I: Object
O: Array of object keys
C: n/a
E: n/a
*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // Use Object.keys method to return kets as an array
  return Object.keys(object);
  

  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
/*
I: Object
O: Print object keys 
C: n/a
E: n/a
*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // Use for in loop to print object keys to the console
for (var key in object){
  console.log(key);
}
return object;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
/*
I: Object
O: Array of the objects values
C: n/a
E: n/a
*/
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // Use Object.values to create an aray of the object's values
  return Object.values(object);


}
  // YOUR CODE ABOVE HERE //

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
/* 
I: Object
O: Print objects values to the console
C: n/a
E: n/a
*/
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // Create a storage array
  // Set storage array equal to Object.values 
  // Use for loop to print values to the console
var valuesArr = Object.values(object);
for (var i = 0; i < valuesArr.length; i ++){
  console.log(valuesArr[i]);
}
  return valuesArr;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
I: Object
O: Number of key/value pairs in object
C: 
E:
*/
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // Set new array equal to Object.keys
  // Return the length of the storage array
  var array = Object.keys(object);
  return array.length
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
/*
I: Object
O: Object values printed to the console in reverse
C: Must loop backwards over the object
E: n/a
*/
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // Set storage array equal to Object.values
  // Use for loop to iterate backwards through storage array
  // Print values in reverse to the console
  var values = Object.values(object);
  for (var i = values.length - 1; i >= 0; i --){
    console.log(values[i]);
  }
  return values;
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}