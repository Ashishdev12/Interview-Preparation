// write a javascript program to compute the union of two arrays

function union(arr1, arr2) {
  // Convert the arrays to sets to remove duplicate values
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
 
  // Create a new set that contains the union of the two sets
  const unionSet = new Set([...set1, ...set2]);
 
  // Convert the union set back to an array and return it
  return [...unionSet];
 }
 
 console.log(union([1,2,3,4], [2,3,4,5]));


//  Method -2 

function union(arr1, arr2){

  return [...new Set(arr1.concat(arr2))];
}

let ans = union([1,2,3,4], [3,4,5,6,7]);
console.log(ans);