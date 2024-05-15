// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3. 

function arrayOfElements(array) {
  if (array.length == 2) {
    if (array[0] == 1 || array[1] == 1 || array[0] == 3 || array[1] == 3) {

      return true

    }
    return false
  }
}

console.log(arrayOfElements([1,5]));
console.log(arrayOfElements([2,3]));
console.log(arrayOfElements([7,5]));