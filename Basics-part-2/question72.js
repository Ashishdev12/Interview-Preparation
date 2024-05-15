// 72. Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.  

function givenInteger(num){
  let last_pos = num.length - 1;
  
  if(num.length >= 1){
    return num[0] === num[last_pos]
  }
  return false
}

console.log(givenInteger([10, 20, 30]));
console.log(givenInteger([10, 20, 30, 10]));