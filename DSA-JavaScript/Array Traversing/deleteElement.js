// https://www.youtube.com/watch?v=w1nfy2tGP9M&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=5


const arr = [10, 20, 30, 40, 50, 60];
let position = 2;

function deleteElement(arr) {
  // console.log(arr);

  for (let i = position; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  console.log(arr);
}

deleteElement(arr);

// Method by doing splice 

// const arr = [10,20,30,40,50,60];

// arr.splice(2,1)
// console.log(arr);

