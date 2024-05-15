// 83. Write a JavaScript program to find the longest string from a given array of strings.  

let longestString = (array) =>{
return array.reduce((acc, cur) => (acc.length > cur.length ? acc : cur));
 
}

console.log(longestString(["hello", "mom", "brother", "sindhu"]));

// 2nd Method
// const longest_string = (str_ara) => {
//   let max = str_ara[0].length; // Initialize max length with the length of the first string
//   str_ara.map(v => max = Math.max(max, v.length)); // Update max by finding the maximum length in the array
//   result = str_ara.filter(v => v.length == max); // Filter strings that have the maximum length
//   return result; // Return the result array
// };