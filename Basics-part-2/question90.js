// 90. Write a JavaScript program to find the kth greatest element in a given array of integers.  

function findKElement(array, k){
  array.sort((a, b) => b - a ); // sort the array in ascending order

  return array[k -1]
}

console.log(findKElement([1,2,3,4,5], 3));
console.log(findKElement([1, 2, 6, 4, 5], 3));
console.log(findKElement([-10, -25, -47, -36, 0], 1));


