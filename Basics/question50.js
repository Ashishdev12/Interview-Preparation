// 50. Write a JavaScript program to capitalize the first letter of each word in a given string.  

function capitalize(inputString){
  // split the input string into array of words
   const words = inputString.split(' ');


   // Initialize an empty array to store the capitalized words

   const capitalizedWords = []

   //  Iterate over each word in the array and capitalize the first character using charAt() and toUpperCase().

   for(let word of words){
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
   
    
    capitalizedWords.push(capitalizedWord);
  
   }

   const result = capitalizedWords.join(' ');

   

   return result;
}

console.log(capitalize("write a javaScript program to capitalize the first letter of each word of a given string")); // Output: