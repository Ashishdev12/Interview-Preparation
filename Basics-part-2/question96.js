// 96. Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers. 

function sumOfAbsoluteDiff(array){
  let result = 0; // variable to store the result;

  for(let i =1; i<array.length; i++){
    result += Math.abs(array[i] - array[i -1]);
  }
  return result;
  
}

console.log(sumOfAbsoluteDiff([1,2,3,2,-5]));