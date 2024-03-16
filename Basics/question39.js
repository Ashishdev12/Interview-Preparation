// 39. Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.

function sumOfInteger(num1, num2){

  const result = num1 + num2
  if(result >= 50 && result <= 80){
    return "The total sum of number is : " + result 
  }  else {
    return "The sum of Number is greater then 80 : " + result;
}
}

console.log(sumOfInteger(200, 50)); 