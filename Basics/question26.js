// 26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more. 

function createString(element){
  if(element <=3 ){
       return "String length must be 3 or more"
  } else {
    const lastThreeChars = element.slice(-6);
    return lastThreeChars + " " + element + " " + lastThreeChars
  }
}

console.log(createString("Ashish")); //Expected output: