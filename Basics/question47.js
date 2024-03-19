// 47. Write a JavaScript program to check whether a given number exists in the range 40..10000. For example 40 presents in 40 and 4000

function numberExists(num1, num2, range){
  if(range < 40 || range > 10000){
    return "This is out side of the range: " + range
  } else {
    if(range >= num1 && range <=num2){
      return "This range is between 40 and 10000: " + range
    }
    return false;
  }
}

console.log(numberExists(40, 4000, 45));
console.log(numberExists(80, 320, 79));
console.log(numberExists(89, 4000, 30));