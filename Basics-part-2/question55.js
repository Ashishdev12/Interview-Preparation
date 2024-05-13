// 55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's.  

function stringContains(str){
  let pCount = 0;
  let tCount = 0;

  for(let i = 0; i<str.length; i++){
    if(str[i].toLowerCase() === 'p'){
      pCount++;
    } else  if(str[i].toLowerCase() === 't') {
        tCount++;
    } 
  }

  return pCount === 0 && tCount === 0 ? "No p's and t's are in letter" : pCount === tCount
}

console.log(stringContains("Tappt")); // t
console.log(stringContains("pt")); // t
console.log(stringContains("ptta")); // f
console.log(stringContains("paatpss")); // f
console.log(stringContains("paatps")); // f
console.log(stringContains("Ashish")); // f

 
