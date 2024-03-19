// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet. 

function replaceCharacter(inputString){

  // Initialize an empty string to store the result
  let result = ""

  // Loop through each character in the input string

  for(let i = 0; i<inputString.length; i++){
  let char = inputString[i];

  // Check if the character is a lowercase letter

  if( char >= 'a' && char <= 'z'){

    // // Replace the character with the next character in the alphabet

    result += String.fromCharCode(((char.charCodeAt(0)- 97 + 1) % 26) + 97);
  }

  //// Check if the character is an uppercase letter
  else if( char >= 'A' && char <= 'Z') {

    result += String.fromCharCode(((char.charCodeAt(0)- 65 + 1) % 26) + 65);
  }
  else {
    result += char;
  }
}
return result;
}

console.log(replaceCharacter("Hello World!"));