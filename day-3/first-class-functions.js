// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
/*
I: Base data of string or number value to test against
O: Function that tests whether a given value is greater than the base value
C: n/a
E: n/a
*/
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
        // Function returns a function
    // function(value) tests if value > base
    return function(value){
        return value > base;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 */
/*
I: Base value of string or number data type
O: Function that tests whether or not a given value is less than the base
C: n/a
E: n/a
*/
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // Function returns a function
    // function(value) tests if value < base
    return function(value){
        return value < base;
    }
    
   
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
/* 
I: Character
O: Function that tests whether a string starts with that character
C: n/a
E: n/a
*/
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // Return a function
    // Compare whether startsWith === string[0]
    return function(string){
        return string[0] === startsWith;
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
/* 
I: Array of strings and a function
O: Array of strings modified
C: n/a
E: n/a
*/
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // Create a storage array for modified strings
    // Use for loop to iterate through array and invoke modify function over each index
    // Push modified strings onto storage array
    // Return the new modified strings as an array
    var modifiedStr = [];
    for (var i = 0; i < strings.length; i ++){
        modifiedStr.push(modify(strings[i]));
    }
    return modifiedStr;
    
    
    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
/*
I: Array of strings and a function
O: Boolean value for whether all strings passed the test of the function
C: n/a
E: n/a
*/
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // Use for loop to test whether each string in the array passes the functions test
    // Return true if yes
    if (strings.every(test) === true){
        return true;
    }
    else {
        return false;
    }
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}