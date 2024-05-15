
// 74. Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.  

function largestValue(array){

  let max = Math.max(array[0], array[array.length -1]);
  return array.fill(max)
 
}

console.log(largestValue([1,2,3,4,5,6]));