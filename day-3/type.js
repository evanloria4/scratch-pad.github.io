// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
/*
I: Value
O: Return true or false
C: n/a
E: n/a
*/
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // Use if-conditional and isArray() method to test whetehr given value is an array
    // Return true if so
    // Otherwise, return false
if (Array.isArray(value) === true){
    return true;
}
    else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 */
/* 
I: Value 
O: Return true or false
C: n/a
E: n/a
*/
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // Use typeof method to determine what kind of data value is 
    // Need to first eliminate other types that will return true for object 
    // Eliminate array types
    if (Array.isArray(value) === true){
        return false;
    }  // Eliminate null types
    else if (value === null){
        return false;
    } // Eliminate Date types
    else if (value instanceof Date === true){  
        return false;
    } // Test true for true object types
    else if (typeof value === 'object'){
        return true;
    } // Eliminate any other data types that aren't objects
    else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
/*
I: Value
O: Return boolean value 
C: 
E:
*/
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // If conditional to test for typeof 
    // Eliminate non-object objects of null and Date
    if (value instanceof Date === true){
        return false;
    }
    else if (value === null){
        return false;
    } // Use Array.isArray to test for arrays
    else if (Array.isArray(value) === true){
        return true;
    } // Use typeof to test for objects
    else if (typeof value === 'object'){
        return true;
    } // Any other returns for typeof should return false
    // This will eliminate 'string', 'number', and other typeof returns
    else {
        return false;
    }
     // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
/* 
I: Value
O: Return type of value as a string
C: n/a
E: n/a
*/
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // Use typeof to return type of value as a string
    // Eliminate non object objects
    // Have arrays return 'array'
    if (Array.isArray(value) === true){
        return 'array';
    } // Have null return 'null'
    else if (value === null){
        return 'null';
    } // Have Date return 'date'
    else if (value instanceof Date === true){
        return 'date';
    }
    else {
        return typeof value;
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}