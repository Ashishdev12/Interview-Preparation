// 52. Write a JavaScript program to convert letters of a given string alphabetically.

function  convertAlphabetically(str) {
    
  return str.split('').sort().join('')
}

console.log(convertAlphabetically("Python"));
console.log(convertAlphabetically("Exercises"));