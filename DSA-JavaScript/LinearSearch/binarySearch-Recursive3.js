// https://www.youtube.com/watch?v=0pAN-olSQWQ&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=25

// Binary Search with Recursive approach
// How Binary Search works
// What is Iterative Approach?
// Implement Binary Search Algo.
// Implement Binary  Recursive  Algo with Inputs also.

// console.log('Ashish');

let data = [4,7,12,15,17,20,25,32,36]
    let start = 0;
    let end = data.length-1;
    let target = 32;
    let position = undefined;


function recursiveCalling(data, start, end){
    
  
        let mid = Math.floor((start + end)/ 2);
        if(data[mid] === target){
            position = mid
            return true;
        } else if(data[mid] < target){
            recursiveCalling(data, mid + 1, end)
        } else {
            recursiveCalling(data, end, mid - 1)
        }
    
}

recursiveCalling(data, start, end)

console.log(position);


