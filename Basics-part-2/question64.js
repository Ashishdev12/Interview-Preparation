// 64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string. 
function concatenate_String(str1, str2){

  const minimumLength = Math.min(str1.length, str2.length)
  console.log(minimumLength);

  return str1.substring(str1.length - minimumLength) + str2.substring(str2.length - minimumLength)
}

console.log(concatenate_String("Python", "JSP"));
console.log(concatenate_String("ab", "cdef"));