// https://www.youtube.com/watch?v=urt6-uoqUqM&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=7

const arr1=[1,2,3,4,10];
const arr2=[6,7,8,9,5]
function mergeTwoArray(){
 let result = [];
 for(let i =0; i<arr1.length; i++){
     result.push(arr1[i])
    }
for(let i=0; i<arr2.length; i++){
    result.push(arr2[i])
    }
 return result.sort((a,b)=>a-b)
}

mergeTwoArray()
console.log(mergeTwoArray());



// Reversing and combining the Array

// const arr3 = [...arr1, ...arr2];
// console.log(arr3.reverse());
