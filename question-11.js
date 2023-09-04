// Write a javaScript function to get the number of occurrence of each letter in specified string

// function occ(str){
//   let occurrences = {};
//   str.split("").forEach(function(elem){
//   if(occurrences.hasOwnProperty(elem) === false){

 
//        occurrences[elem] = 1;
//   }
//   else {
//      occurrences[elem]++;
//   }
// })
// return occurrences;
// }

// let ans = occ("apple");
// console.log(ans);

function occ(str){
  let occurrences = {}
  str.split("").forEach(function(elem){
    if(occurrences.hasOwnProperty(elem) === false){

      occurrences[elem] = 1;
    }
    else{
      occurrences[elem]++
    }
  })
  return occurrences;

}

console.log(occ("Apple"));