// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  

function  checkNumber(num) {
   return (Math.abs(100 - num) <= 20  || (Math.abs(400 - num) <=20));
}


console.log(checkNumber(10)); //  false
console.log(checkNumber(90)); // True
console.log(checkNumber(200)); // false
console.log(checkNumber(30)); // false