// 87. Write a JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.  

function areSimilarArrays(array1, array2){
  if(array1.length !== array2.length){
    return false // If the arrays have different lengths, they can't be similar
  }

  let diffCount = 0;
  let diffIndex = [];

  // // Check for differences and count them
  for(let i= 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      diffCount++;
      diffIndex.push(i)
    }
  }

  // If there are no differences or there are exactly two differences and they are swapable
  return diffCount === 0 || (diffCount === 2 && array1[diffIndex[0]] === array2[diffIndex[1]] 
    && array1[diffIndex[1]] === array2[diffIndex[0]]) 
  
}

console.log(areSimilarArrays([10, 20, 30], [10, 20, 30]));
console.log(areSimilarArrays([10, 20, 30], [30, 10, 20]));
console.log(areSimilarArrays([10, 20, 30, 40], [10, 30, 20, 40]));