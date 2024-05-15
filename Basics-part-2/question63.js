// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.  

function middleString(str){
if(str.length % 2 !== 0){
  // calculate middle index for add -length strings
  let midIndex = (str.length + 1)/2
  console.log(midIndex);
  // use slice middle three char's and return
  let results =  str.slice(midIndex -2, midIndex + 1) 
  console.log(results);
  return results
}
return str
}

console.log(middleString("javaScrip"));
console.log(middleString("abcdefg"));