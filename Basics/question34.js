// 34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive. 

function largestNumber(num1, num2){
 if((num1 >= 40 && num1 <= 60) || (num2 >=40 && num1 <=60)){
   
   if (num1 === num2) {
     return "both numbers are equal";
    } 
    else {
      return "The maxmium number is: " + Math.max(num1, num2);

    }
  }
    else {
      return "Please enter a valid range of numbers  between 40 and 60.";
 
} 
 }


console.log(largestNumber(50, 50));