// 61. Write a JavaScript program to concatenate two strings except for their first character.  

function concatenate(str1, str2){
   let result = str1.slice(1) + str2.slice(1);
   return result;
}

console.log(concatenate("Hello ", "World"));