// 71. Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1. 
function checkNumber(num){ 

  const end_pos = num.length -1;
  
  return num[0] === 1 || num[end_pos] === 1;


}


console.log(checkNumber([1, 3, 5]));
console.log(checkNumber([4, 3, 5]));
console.log(checkNumber([1, 3, 1]));