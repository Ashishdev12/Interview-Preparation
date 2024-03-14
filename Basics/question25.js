// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function checkNumber (number){
  if( number % 3 === 0 || number % 7 === 0) {
    return true 

} else {
     return false
}
}

console.log(checkNumber(9));//true
console.log(checkNumber(14));//true
console.log(checkNumber(23));//true