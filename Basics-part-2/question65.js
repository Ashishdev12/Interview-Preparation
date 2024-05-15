// 65. Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6. 
function test_string(str){
 
  if(str.substring(str.length - 6, str.length) === 'Script') {
    return true;
  } else {
    return false
  }
}

console.log(test_string("javaScript"));
console.log(test_string("java Script"));
console.log(test_string("java Scripts"));