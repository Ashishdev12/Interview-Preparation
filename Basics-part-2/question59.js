// 59. Write a JavaScript program to extract the first half of a even string.  

function first_half(str){
  if(str.length % 2 === 0){
    return str.slice(0, str.length/2);
  } else {
    return str
  }
}

console.log(first_half("python"));
console.log(first_half("JavaScript"));
console.log(first_half("PHP"));