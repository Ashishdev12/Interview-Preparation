// 60. Write a JavaScript program to create a new string without the first and last characters of a given string. 


function newString(str){
  let result = str.slice(1, length -1);
  return result
} 

console.log(newString("HelloWorld"));
