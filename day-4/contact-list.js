// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. 
 *          The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */
/*
I: Parameters of id, nameFirst, and nameLast
O: Contact object
C: n/a
E:
*/
// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id,
        nameFirst,
        nameLast,
    }
    
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    // contacts --> [{}, {}, {}]
    // Storage variable
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact(contact) {
            contacts.push(contact)
        },
        findContact: function(fullName){
            for (var i = 0; i < contacts.length; i ++){ // For loop to iterate over contacts array
                if (contacts[i].nameFirst + ' ' + contacts[i].nameLast === fullName){
                // Test if the fullName is within an object of contacts array
                    return contacts[i];
                } 
                else { // If fullName is not there return undefined
                return undefined;
                }  
            }
        },
        removeContact(contact){
            // Use index of to determine which index holds contact object
            // Use splice to remove that contact object
            var remove = contacts.indexOf(contact)
            contacts.splice(remove, 1);
        },
        printAllContactNames(){
            var fullNames = [];
            for (var i = 0; i < contacts.length; i ++){
                fullNames.push(contacts[i].nameFirst + ' ' + contacts[i].nameLast);
            }
            return fullNames.join('\n');
        }
        
            // Should print a string with all fullNames
            // Use fullName storage array
            // Push created fullNames onto array
            // Use join method to join array int single string
    
    }
}       
    
    




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}