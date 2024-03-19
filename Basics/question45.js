// 45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.

function twoIntegerValue(num1, num2){
 if(num1 === 15 || num2 === 15 || num1 + num2 === 15 || Math.abs(num1 - num2) === 15){
   
   return true;
 }
 else {
  return false
}
}

console.log(twoIntegerValue(15, 9));
console.log(twoIntegerValue(25, 15));
console.log(twoIntegerValue(7, 8));
console.log(twoIntegerValue(25, 10));
console.log(twoIntegerValue(5, 9));
console.log(twoIntegerValue(7, 9));
console.log(twoIntegerValue(9, 25));