// Loop an array of object and remove all object's which don't have gender's value male

let arr = [
  {name: "Ashish", gender: "male"},
  {name: "Ashish Kumar", gender: "male"},
  {name: "Ash", gender: "female"},
  {name: "ish", gender: "female"}, 
  {name: "shish", gender: "male"}, 
  {name: "sh", gender: "nonSpecified"}  
]


//  let newarr = arr.filter(function(elem){
//   return elem.gender === "male";
// })

// console.log(newarr);

// this is good approach

// first take all non male counts
let count = 0;

arr.forEach(function(elem){
  if(elem.gender !== "male") count++
});

// second step try to remove one non male 
for(let i = 0; i<= count; i++){
  for(let j = 0; j < arr.length; j++){
    if(arr[j].gender !== "male"){
     arr.splice(j, 1)
    }
   }
}

console.log(arr);