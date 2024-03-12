// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum. 


function computeSum (num1, num2){
  if(num1 === num2){
    return ( num1 + num2) * 3;
  } else {
    return (num1 + num2)
  }
}

console.log(computeSum(5,5)); // 30


// Ternary operator

let sum=(n1,n2)=> n1===n2 ? (n1+n2)*3 : n1+n2 ;

console.log(sum(10,20));//30
console.log(sum(12,12));//72