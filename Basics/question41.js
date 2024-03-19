// 41. Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.  

function setOfThreeNumbers(num1, num2, num3){

if(num1 === num2 && num2 === num3){
  return 30
}
 if(num1 === num2 || num2 === num3 || num3 === num1){
  return 40
 } else {
  return 20
 }
}

console.log(setOfThreeNumbers(8, 8, 8));
console.log(setOfThreeNumbers(8, 8, 18));
console.log(setOfThreeNumbers(8, 7, 18));