
// 30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one

function getString(element){
  if(element < 6){
    return element
  } else {
    let result = element;
   
    if(element.substring(10, 4) == 'script'){
      result = element.substring(0, 4) + element.substring(10, element.length)
    }
    return result;
  }
}

console.log(getString("javascript"));
console.log(getString("Hellowordldscript"));