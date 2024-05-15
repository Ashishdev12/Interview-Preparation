// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3. 

function arrayOfElements(array){
 if(array.length == 2){
  if(!(array[0] == 1 || array[1] == 1 || array[0] == 3 || array[1] == 3)){
      return true
  }
  return false
 }
}

console.log(arrayOfElements([7,8]));
console.log(arrayOfElements([3,2]));
console.log(arrayOfElements([0,1]));