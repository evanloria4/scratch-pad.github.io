// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
/* 
I: n/a
O: Numbers from 1 - 100
C: Prints fizz for multiples of 3, buzz for multiples of 5, 
prints fizzbuzz if number is both
E: n/a
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
// Use loop to print numbers
for (var i = 1; i <= 100; i ++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else if(i % 3 === 0){
        console.log('Fizz');
    } else if(i % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(i)
    }
    }
    return i;
    



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}