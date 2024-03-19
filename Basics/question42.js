// 42. Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function numberIncreasing(num1, num2, num3) {
  if(num2 > num1  && num3 > num2){
    return "strict mode"

  } else if (num3 > num2) {
     return "soft Mode"
  }  else {
      return "not in the right order"
   }  
}

console.log(numberIncreasing(5,6,7));
console.log(numberIncreasing(15,6,7));
console.log(numberIncreasing(50,31,17));