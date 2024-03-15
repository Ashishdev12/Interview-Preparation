// 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.


function  isInRange(num1, num2) {
    if ((num1 >= 40 && num1 <= 60) || (num2 >= 40 && num2 <= 60)) return "The two numbers in the range of 40 and 60";
    else if ((num1 >= 70 && num1 <= 100) || (num2 >= 70 && num2 <= 100)) return "The two numbers are in the range of 70 and 100";  

    else {
     return "please check your number"
    }
}
console.log(isInRange(70,80));