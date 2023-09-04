// Write a javaScript function which accepts an argument and returns the type.

function typeTeller(elem){
  return typeof elem;
}

console.log(typeTeller([]));
console.log(typeTeller(12));
console.log(typeTeller("abc"));
console.log(typeTeller(undefined));
console.log(typeTeller(true));