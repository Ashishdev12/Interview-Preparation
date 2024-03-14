// 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.  

function getIntegerValue(number1, number2){
   if((number1 >= 50 && number1 <=99) || (number2 >=50 && number2 <=99)){
             
    return  "The number is between 50 and  100";
   }else{
     return "The number is not in the range of 50 to 100" ;
   }
}

console.log(getIntegerValue(67, 52));
console.log(getIntegerValue(12, 100));
console.log(getIntegerValue(15, 99));