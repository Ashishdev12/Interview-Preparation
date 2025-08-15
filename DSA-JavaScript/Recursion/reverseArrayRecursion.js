// https://www.youtube.com/watch?v=mkXDo_OlHjo&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=15

const arr = [3, 20, 65, 9, 0];
let temp;

function reverseArray(arr, start, end) {
    console.log(arr);
    
  if (start <= end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseArray(arr, start + 1, end - 1);
  }
}

reverseArray(arr, 0, arr.length - 1);
