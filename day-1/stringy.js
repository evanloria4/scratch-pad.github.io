// #!/usr/bin/env node

'use strict';

const { replace } = require("lodash");

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
/* 
I: String
O: Length of the string 
C: n/a
E: n/a
*/
function length(string) {
    // YOUR CODE BELOW HERE //
   return string.length; // Return length of string
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toLowerCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toUpperCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
/*
I: String value
O: String value forced to lowercase and dash-case
C: n/a
E: n/a
*/
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
// force string to lowercase using our toLowerCase() function
// use replace string method to replace space with a dash
return toLowerCase(string.replaceAll(' ', '-'));
// return the new string


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/* 
I: Parameters of a string and a character
O: true or false
C: The function is not case sensitive
E: n/a
*/
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // If condition to compare first character of string to char parameter
    if (string[0].toLowerCase() === char.toLowerCase()){
        return true; 
    } // Return false otherwise
        else {
            return false;
        }
    
    

    

}    // YOUR CODE ABOVE HERE //


/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I: Parameters of a string and a char
O: Boolean value true or false
C: The function is not case sensitive
E: n/a
*/
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // If condition to compare last character of string to char parameter
    if (string[string.length - 1].toLowerCase() === char.toLowerCase()){
        return true;
    } // Return false otherwise
    else{
        return false;
    }



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/* 
I: Two string parameters
O: One string that is the value of concatenating the two strings
C: n/a
E: n/a
*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // Return the two strings concatenated into one
return stringOne.concat(stringTwo);


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
/*
I: Undisclosed number of string values
O: All inputted strings joined together into one
C: n/a
E: n/a
*/
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    // return the arguments passed into the storage array args joined together
    return args.join('');
    


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
/*
I: Two string values
O: The longer of the two given string values
C: n/a
E: n/a
*/
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // Compare the length of stringOne to stringTwo
    // Return stringOne if it's length is greater than stringTwo
    // Otherwise, return stringTwo
    if (stringOne.length > stringTwo.length){
        return stringOne;
    } else {
        return stringTwo;
    }



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: Two string values
O: A number value depending on which string charatcer at index 0 
    is higher alphabetically
C: n/a
E: n/a
*/
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// Compare the two strings
// Return 1 if stringOne < stringTwo
// Return -1 if stringOne > stringTwo
// Return 0 if stringOne = stringTwo
if (stringOne < stringTwo){
    return 1;
}  else if (stringOne > stringTwo){
    return -1;
} else {
    return 0;
}
 

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: Two string values
O: A number value depending on if the first string is higher, lower, or
    equal alphabetivally to the second string
C: n/a
E: n/a
*/
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// Compare the two strings
// Return 1 if stringOne > stringTwo
// Return -1 if stringOne < stringTwo
// Return 0 if stringOne = stringTwo
if (stringOne > stringTwo){
    return 1;
}  else if (stringOne < stringTwo){
    return -1;
} else {
    return 0;
}



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}