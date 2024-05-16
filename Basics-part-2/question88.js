// 88. Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.  

function divisible(num1, num2, n){

  if(num1 % n === 0 && num2 % n === 0){
    return "Its divisible"
  }
  else{
    return "Its not divisible"
  }

}

console.log(divisible(25, 25, 25));
console.log(divisible(10, 20, 5));
console.log(divisible(10, 20, 4));