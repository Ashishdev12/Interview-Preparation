// write a javascript function that returns a passed string with letters in alphabetical order.

function changeAlphabeticalOrder(str){

  return str.split("").sort().join("");
  
}

let changedOrder = changeAlphabeticalOrder("ashishdevakate");
console.log(changedOrder);