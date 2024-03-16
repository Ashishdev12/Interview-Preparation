// 37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case. 

function upper_lower(str) {
  if (str.length <= 3) {
    return str.toUpperCase();
  }
  front_part = (str.substring(0, 3)).toLowerCase();
  back_part = str.substring(3, str.length);  
  return front_part + back_part;
}
console.log(upper_lower("Python"));
console.log(upper_lower("Py"));
console.log(upper_lower("JAVAScript"));