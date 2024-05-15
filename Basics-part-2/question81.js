// 81. Write a JavaScript program to add two digits to a given positive integer of length two. 

function add_two(num){
 
  let result = num % 10 + Math.floor(num/10)


  
  return result
}

console.log(add_two(25));
console.log(add_two(50));
