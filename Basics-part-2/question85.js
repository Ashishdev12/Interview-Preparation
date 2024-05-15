// 85. Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.  

function alternate_Sums(arr){
  let result = [0, 0]; 
 
 for ( let i =0; i<arr.length; i++){

  if(i % 2 === 0) { // Even index, belongs to first part
        result[0] += arr[i]
  } else {
    result[1] += arr[i] // Odd index, belongs to second part
  }
 }
 return result;
}

console.log(alternate_Sums([1,2,3,4,5,6]));