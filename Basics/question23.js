
// 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1. 

function newString(index){
  if(index.length >= 1) {

    let firstChar = index.charAt(0);
    console.log(firstChar);

    let lastChar = index.charAt(index.length -1);
    console.log(lastChar);

    let newIndex = lastChar + index.substring(1, index.length - 1) + firstChar;
    console.log(newIndex);

    return newIndex
  } 
  else {
    return " length must be greater than or equal to 1"
  }
}

let originalIndex = "wood";
let modifiedIndex =  newString(originalIndex);
console.log("Original Index: ", originalIndex);
console.log("Modified Index: ", modifiedIndex);


// Example -2 


function reverseEndingCharacters(string){
  if(string.length >= 1){
  let body = string.slice(1,string.length-1);
  console.log(body);
  return string[string.length - 1] + body + string[0];
  }
  }
  
  console.log(reverseEndingCharacters('Hello Moto'));
  