// 57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string. 

function string_copies(str, num){
  if(num < 0){
    return false
  } else {
    return str.repeat(num)
  }
}

console.log(string_copies("Hello ",5));
console.log(string_copies("Hello ",-5));