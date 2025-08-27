/* Write a function to check whether two given strings are anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, "abcd" and "dabc" are an anagram of each other.*/


function checkAnagram(str1, str2) {
    // create an empty Object to add elements
  let Objstr1 = {};
  // check the length
  if (str1.length !== str2.length) {
    return false;
  }
  // check the char and add key value into the empty obj
  for (char of str1) {
    // console.log(char);
    Objstr1[char] = (Objstr1[char] || 0) + 1;
  }
  // check str2 char are include in str1 and for double char like ll also checked 
  for (char of str2) {
    // console.log(char);
    if (!Objstr1[char]) {
      return false;
    }
    // if we find a like double string ll make it minus one 
    Objstr1[char]--;
  }
  // console.log(Objstr1);
  return true
}

console.log(checkAnagram("hello", "ellho"));


// 2nd method in built
/* function checkAnagram(a, b) {

    // Not of same length, can't be Anagram
    if (a.length !== b.length) {
        return false;
    }

    // Inbuilt functions to rearrange the string
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');

    let result = (str1 === str2);
    return result;
}

// Checking the output
console.log(checkAnagram('abc', 'cba')); */

// 3rd method using for of loop 

/* function isAnagram(str1, str2) {

  if(str1 === str2) {
    return true;
  }

  let srt1Length = str1.length;
  let srt2Length = str2.length;

  if(srt1Length !== srt2Length) {
    return false;
  }

  var counts = {};

  for(let i = 0; i < srt1Length; i++) {
    let index = str1.charCodeAt(i)-97;
    counts[index] = (counts[index] || 0) + 1;
  }

  for(let j = 0; j < srt2Length; j++) {
    let index = str2.charCodeAt(j)-97;
    if (!counts[index]) { 
      return false; 
    }
    counts[index]--;
  }

  return true;
} */