// 93. Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.

function maximumDiff(array){

  let maxDiff = 0;

  for(let i =0; i<array.length -1; i++){
    for (let k =0; k<array.length; k++){
      const diff = Math.abs(array[i] - array[k]); // Calculate the absolute difference
      maxDiff = Math.max(maxDiff, diff)  // Update the maximum difference
    }
  }
  return maxDiff
}

console.log(maximumDiff([1, 2, 3, 8, 9]));
console.log(maximumDiff([1, 2, 3, 18, 9]));
console.log(maximumDiff([13, 2, 3, 8, 9]));

