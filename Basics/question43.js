// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

function checkGivenNumbers(num1, num2,num3){
  if((num1 % 10 === num2 % 10) || (num1 % 10 === num3 % 10) || (num2 % 10 === num3 % 10)){
    return true;
  }
 else {
  return false
}
}

console.log(checkGivenNumbers(22, 32, 42));
console.log(checkGivenNumbers(122, 132, 142));
console.log(checkGivenNumbers(24, 22, 45));

