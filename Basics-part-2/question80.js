// 80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.  

function swapElement(array){

  if(array.length < 1){
    console.log("Array length must be at least 1");
    return;
  }

  let fistElement = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = fistElement

  return array
  
}


console.log(swapElement([2,3,4,5]));