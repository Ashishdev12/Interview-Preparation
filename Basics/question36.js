// 36. Write a JavaScript program that checks whether the last digit of three positive integers is the same. 

// function  checkLastDigit(a, b, c) {
//   if (a < 0 || b < 0 || c < 0) {
//     return false; // Not all numbers are positive
// } 
//     let lastDigitA = Math.abs(a % 10);
//     console.log(lastDigitA);
//     let lastDigitB = Math.abs(b % 10);
//     console.log(lastDigitB);
//     let lastDigitC = Math.abs(c % 10);
//     console.log(lastDigitC);
    
//     return (lastDigitA === lastDigitB && lastDigitB === lastDigitC) 
        
    
//   } 

// console.log(checkLastDigit(259, 4789,  789));//true
// console.log(checkLastDigit(-20, 30, 400));

function checkLastDigit(num1, num2, num3){
  if(num1 < 0 || num2 < 0 || num3 < 0 ){
    return false
  }
    let lastDigitA = Math.abs(num1 % 10)
    let lastDigitB = Math.abs(num2 % 10)
    let lastDigitC = Math.abs(num3 % 10)

    return (lastDigitA === lastDigitB && lastDigitB === lastDigitC);
}

console.log(checkLastDigit(259, 2459, 4009));
console.log(checkLastDigit(-259, 2459, 4009));