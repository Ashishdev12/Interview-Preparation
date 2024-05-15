
// 62. Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three. 

function replace_string(str){
 if(str.length >= 1){
  return str.slice(-3) + str.slice(0, -3);
 }
 return str
}

console.log(replace_string("Python"));
console.log(replace_string("HI"));
console.log(replace_string("JavaScript"));