// 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range

function getIntegerValue(number1, number2, number3){
  if((number1 >= 50 && number1 <=99) || (number2 >=50 && number2 <=99) || (number3 >=50 && number3 <=99) ){
            
   return  "The number is between 50 and  100";
  }else{
    return "The number is not in the range of 50 to 100" ;
  }
}

console.log(getIntegerValue(50, 90, 99));
console.log(getIntegerValue(65, 89, 199));
console.log(getIntegerValue(5, 9, 199));
console.log(getIntegerValue(5, 9, 199));