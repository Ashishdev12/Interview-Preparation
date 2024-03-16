// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

function sumOfInteger(num1, num2){

  return num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs(num1 - num2) === 8; 
}

console.log(sumOfInteger(7,8));
console.log(sumOfInteger(16,8));
console.log(sumOfInteger(24,32));
console.log(sumOfInteger(17,18));