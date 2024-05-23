// 100. Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers. 

function sortedElements(num1, num2){
  let result = false;
  for(let i of num1){
    if(num2.includes(num1[i])){
      result = true;
      break;
     } 
  }
  return result;
}

console.log(sortedElements([1, 2, 3], [3, 4, 5]));
console.log(sortedElements([1, 2, 3], [5, 6, 7]));