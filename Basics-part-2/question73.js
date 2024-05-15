// 73. Write a JavaScript program to reverse the elements of a given array of integers of length 3.  

function reverse_array(num){
  return num.reverse();
}

console.log(reverse_array([3,4,5]))
console.log(reverse_array([-1,0,1]));
console.log(reverse_array([1,3,2]));

// function reverseArray(array){
//   return array.map((element, idx, arr)=>
//       arr[(arr.length -1) - idx]
//   )
// }

// console.log(reverseArray([5,4,3]));
// console.log(reverseArray([1,0,-1]));
// console.log(reverseArray([2,3,1]));