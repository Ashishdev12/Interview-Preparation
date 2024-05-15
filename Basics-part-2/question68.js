// 68. Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.  

function newsting(str, n){
 let firstPart = str.substring(0, n)
 let lastPart = str.substring(str.length - n);
 return firstPart + lastPart; 
}

console.log(newsting("Ashish", 2));