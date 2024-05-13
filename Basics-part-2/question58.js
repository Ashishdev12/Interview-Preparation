
// 58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.  

function updatedString(str){
 if(str.length >= 3){
  result_str = str.substring(str.length - 3);

  return result_str.repeat(4)
 } else {
  return false
 }
 
}

console.log(updatedString("Hello"));