// 95. Write a JavaScript program to replace all numbers with a specified number in an array of integers. 

function replaceNumber(array, target, replacement){

  for(let i =0; i<array.length; i++){
    if(array[i] === target) {
      array[i] = replacement;
    }
  }

  return array
}

console.log(replaceNumber([1, 2, 3, 2, 2, 8, 1, 9], 2, 5)); // [1, 5, 3, 5, 5, 8, 1, 9]