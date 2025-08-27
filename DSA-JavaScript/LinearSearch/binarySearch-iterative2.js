//https://www.youtube.com/watch?v=hdHJVAgANc0&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=24

// Binary Search with Iterative approach 
// How Binary Search works
// What is Iterative Approach? we use loop
// Implement Binary Search Algo.
// Implement Binary Algo with Inputs also.

const data = [3,7,11,17,22,34,35,36];
const target = 36;
let  start = 0;
let  end = data.length-1;
let  position = undefined;

// logic is when our start 0 and in case if end also zero then our end length wil be -1 so to perform sum action our end should be more then 0 
while(start <= end){
    // here we getting our mid 
    let mid = Math.floor((start + end) / 2)
    // trying to find mid we get we break the loop
    if(data[mid] === target){
        position = mid
        break;
        // if not we continue to perform our logic
    } else if( data[mid] < target){
        start = mid + 1
    } else{
        start = mid -1
    }
}
console.log(position);





