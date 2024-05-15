
// 84. Write a JavaScript program to replace each character in a given string with the next in the English alphabet. Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

function replaceWithNextChar(str) {

  let result = "";

  for(let i =0; i <str.length; i++){
    let char = str.charCodeAt(i)
    // console.log(char);

    if(char >= 97 && char <= 122 ) {
      result += String.fromCharCode((char - 97 + 1) % 26 + 97);

    } else if(char >=65 && char <= 90) {
      result += String.fromCharCode((char - 65 + 1) % 26 + 65);
    } else (
      result += str[i]
    )
  }
  return result
}

console.log(replaceWithNextChar("abcdxyz")); 