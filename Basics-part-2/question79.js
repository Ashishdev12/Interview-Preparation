// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.  

function testArray(array){
  
 let a = array[0]
 let b = array[1]
 return (a === 30 && b === 30) || (a === 40 && b === 40);
}

console.log(testArray([30,30]));
console.log(testArray([40,40]));
console.log(testArray([20,20]));
console.log(testArray([30,40]));