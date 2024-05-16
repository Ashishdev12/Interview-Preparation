// 91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers. 

function maxSomeOfKConsecutive(array, k){
  let maxSum = 0;
  let currentSum = 0;

  // calculate sum of first k elements

  for(let i = 0; i< k; i++){
    maxSum += array[i]
  
  }
  currentSum = maxSum;

  // calculate some of remaining element form sliding window technique

  for(let i = k; i< array.length; i++){
   
    currentSum += array[i] - array[i - k] //  // Slide window by adding next element and subtracting first element

    maxSum = Math.max(maxSum , currentSum)
  }

  return maxSum
}

console.log(maxSomeOfKConsecutive([1, 2, 3, 14, 5], 2));
console.log(maxSomeOfKConsecutive([2, 3, 5, 1, 6], 3));
console.log(maxSomeOfKConsecutive([9, 3, 5, 1, 7], 2));