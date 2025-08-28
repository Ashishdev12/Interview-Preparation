// What is Map
// Difference between map and Object?
// A Map in JavaScript is a built-in data structure that stores key-value pairs, similar to an Object. However, Map offers several advantages and key differences, particularly in how keys are handled and how iteration and order are managed.
/* Key Types:
Map: Keys can be of any data type, including primitive values (strings, numbers, booleans), objects, or even functions.
Object: Keys are limited to strings and Symbols. If you use a non-string value as a key, it will be implicitly converted to a string.
Order of Elements:
Map: Maintains the insertion order of key-value pairs. Iterating over a Map will yield elements in the order they were added.
Object: While modern JavaScript engines generally preserve insertion order for string keys, this was not historically guaranteed, and it's less explicitly defined than with Map.*/

// https://www.geeksforgeeks.org/javascript/how-is-a-javascript-hash-map-implemented/

const Prices = new Map([
    ['contact', 12345]
]);

// Add items with their prices
Prices.set('apple', 1.5);
Prices.set('banana', 0.8);
Prices.set('orange', 1.2);

// Retrieve prices
console.log(Prices.get('apple')); 
console.log(Prices.get('banana')); 
console.log(Prices.get('orange')); 

// Check if an item exists
console.log(Prices.has('grapes'));

// Remove an item
Prices.delete('banana');

// Check the size after deletion
console.log(Prices.size);


Prices.forEach((value, key)=>{
    console.log(`${key}: ${value}`);
    
})

console.log(Prices);

