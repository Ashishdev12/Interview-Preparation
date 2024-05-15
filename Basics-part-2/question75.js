// 75. Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.  

function middleElement(array1, array2){
  const result = []
   
 result.push(array1[1], array2[1]);

 return result
}

console.log(middleElement([1,2,3], [3,4,5]));