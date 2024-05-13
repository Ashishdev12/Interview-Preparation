// 54. Write a JavaScript program to count the number of vowels in a given string. 

function countVowels (str){
  let vowelCount = "";
  const vowels = ['a','e','i','o','u'];

  for(let i =0; i<str.length; i++){
    if(vowels.includes(str[i].toLowerCase())) {
      vowelCount ++;
    }
  }
  return vowelCount;
}

console.log(countVowels("Python"));
console.log(countVowels("w3resource.com"));