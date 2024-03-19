// 44. Write a JavaScript program that evaluates three given integers to determine if any one of them is greater than or equal to 20 and less than at least one of the other two. 

function givenInteger(num1, num2, num3){

return (num1 >= 20 && (num1 < num2 || num1 < num3)) || 

(num2 >= 20 && (num2 < num3 || num2 < num1)) || 

(num3 >= 20 && (num3 < num1 || num3 < num2))


}
console.log(givenInteger(23, 45, 10));
console.log(givenInteger(23, 23, 10));
console.log(givenInteger(21, 66, 75));
