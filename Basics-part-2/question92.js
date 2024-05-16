// 92. Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers. 

function findDiff(array){

 let max = 0; // Initialize a variable to store the maximum difference
 let temp; // Temporary variable to calculate the difference

 for (let i =0; i<array.length - 1;i++){
  temp = Math.abs(array[i] - array[i + 1]);
  // console.log(temp);
  max = Math.max(max, temp)
  // console.log(max);
 }

 return max;     // Return the final maximum difference

}

console.log(findDiff([1,2,3,8,9]));
console.log(findDiff([1, 2, 3, 18, 9]));
console.log(findDiff([13, 2, 3, 8, 9]));