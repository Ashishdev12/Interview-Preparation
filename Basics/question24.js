
// 24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

function stringFirstAndBack(index){
 if(index.length >= 0 ){

  let firstChar = index.charAt(0);

  let newIndex = firstChar + index +  firstChar;

  return newIndex;
 } else {
  return "Given string is empty";
 }
}

console.log(stringFirstAndBack("Hello"));