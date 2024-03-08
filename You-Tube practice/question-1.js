// Given a string, reverse each word in the sentence

let Ashish = "developing web applications for front end";

let Ashish1 = Ashish.split(" ")
.map(function(word){
   return word.split("").reverse().join("");
  

});
// console.log(Ashish.split(" "));
console.log(Ashish1.join(" "));