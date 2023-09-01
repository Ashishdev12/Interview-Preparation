// write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in uppercase

function upperCase(name){
  let allWords = name.split(" ").map(function (word){
   return word.charAt(0).toUpperCase() + word.substring(1);

  })
  
  return allWords.join(" ");
}

let ans = upperCase("ashish devakate kumar");
console.log(ans);
