// https://www.youtube.com/watch?v=bUD4ABUxWss&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=31

// function checkPalindrome(str){
//   let start = 0;
//   let end = str.length-1;
//   let result = true;
//   while(end > start){

//     if(str[start] !== str[end]){
//         result = false
//     }
//     start++
//     end--
//   }
//   return result
// }

function checkPalindrome(str){
  for(let i =0; i<str.length-1; i++){
    if(str[i] !== str[str.length-(i + 1)]){
      return false
    }
  }
  return true
}

console.log(checkPalindrome('abba'));
console.log(checkPalindrome('level'));
console.log(checkPalindrome('121'));


// check length
// store in temp in reverse 
// check temp and str both char are equal 
