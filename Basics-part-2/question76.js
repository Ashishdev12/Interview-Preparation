// 76. Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.  

function ArrayOfElements(array){
 const newArray = [array[0], array[array.length-1]];
 return newArray;
}

console.log(ArrayOfElements([20,20,30]));
console.log(ArrayOfElements([21,20,30]));