// 67. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied. 

function newString(str){
  let startString = 0;
  let endString = str.length;

  if(str.length > 0 && str.charAt(0) === 'P') {
    startString = 1;
  } 
  if(str.length > 1 && str.charAt(str.length -1) === 'P'){
    endString--;
  }
  return str.substring(startString, endString)
}

console.log(newString("PintuP"));