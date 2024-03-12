// 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.  

function checkInteger(num1, num2){
  if((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)){

    return true;
  } else {
    return false;
  }
}

console.log(checkInteger(-5, 3));
console.log(checkInteger(5, 3));
console.log(checkInteger(5, -3));