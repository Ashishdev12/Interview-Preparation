// 37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case. 

function produceString(str){

if(str.length <= 3){
  return str.toUpperCase();
}
else{
  let firstThreeChar = str.substring(0,3).toLowerCase()
  let lastThreeChar = str.substring(3, str.length);
  
  return firstThreeChar + lastThreeChar;
 }
}

console.log(produceString("JAVAScript")); // Output: