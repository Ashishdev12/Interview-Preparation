// 46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.

function multiple(num1, num2){
 if(!((num1 % 7 === 0 || num1 % 11 === 0) && (num2 % 7 === 0 || num2 % 11 === 0))){
  return ((num1 % 7 === 0 || num1 % 11 === 0) || (num2 % 7 === 0 || num2 % 11 === 0));
 } else {
  return false
 }
}

console.log(multiple(14, 21));
console.log(multiple(14, 20));
console.log(multiple(16, 20));
console.log(multiple(14, 15));