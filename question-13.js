// In an array of numbers and strings, only add those members which are not strings

let arr = [1,2,323,"ashish","devakate","kumar"];
let sum = 0;
arr.forEach(function(elem){
  if(typeof elem === "number"){

    sum = sum + elem;
  }
})

console.log(sum);