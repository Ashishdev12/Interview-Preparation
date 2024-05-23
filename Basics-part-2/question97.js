// 97. Write a JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it. 




function build_Palindrome(new_str) {

  let flag;  // Variable to check if a palindrome is found
  for(let i = new_str.length;; i++){
     flag = true; // Reset the flag for each iteration

     for(j = 0; j<i -j -1; j++){
      if(i -j -1 < new_str.length && new_str[j] !== new_str[i - j - 1]){
        flag = false; // Set the flag to false if not equal
        break; // Break the inner loop 
      }
     }

     if(flag){
      for(let j = new_str.length; j < i; j++){
        new_str += new_str[i - j -1]
      }
      return new_str;  // Return the palindrome
     }
  }
}

console.log(build_Palindrome("abcddc"))
console.log(build_Palindrome("122"))
