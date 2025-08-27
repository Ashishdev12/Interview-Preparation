// https://www.youtube.com/watch?v=gsopFuEwQhg&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=23

// What is Search and Search Algorithm? - two types we have searching algo 1) linear 2) searching
// Understand Linear Search with Whiteboard
// The complexity of Linear Search.
// Implement Linear Algo.
// Implement Linear Algo with Inputs also.

const data = [30,12,45,73,2,9,5,50];
const target = 12

function findTarget(num){
    let result = [];
    for(let i = 0; i<= num.length-1; i++ ){
        if(num[i] === target){
            result.push("index is",i, "value is", num[i])
        } 
    }
    return result

}

console.log(findTarget(data));
