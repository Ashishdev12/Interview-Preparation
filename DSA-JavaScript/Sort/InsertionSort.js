/*In insertion sort, the input array is also divided into two parts: a sorted part and an unsorted part.
The algorithm picks up an element from the unsorted part and places it in the correct position in the sorted part, shifting the larger elements one position to the right.
Insertion sort has a time complexity of O(n^2) in the worst case, but can perform better on partially sorted arrays, with a best-case time complexity of O(n).*/

let items = [12, 11, 13, 5, 6]

function insertionSort(data){
  
  for(let i =1; i < data.length; i++){
    let key = data[i]; // insert this value
    let j = i - 1      //  last index of the sorted left part

    while(j >= 0 && data[j] > key ){
        data[j+1] = data[j];
        j = j -1
      }
    
    data[j + 1] = key
    

  }
  return data
}

const result = insertionSort(items);
console.log(result);  // 


/* Dry run on [12, 11, 13, 5, 6]

Start: [12, 11, 13, 5, 6]

i = 1 → key = 11, j = 0

Compare arr[0]=12 > 11 → shift right: [12, 12, 13, 5, 6], j = -1

Place key at j+1 = 0 → [11, 12, 13, 5, 6]

i = 2 → key = 13, j = 1

arr[1]=12 > 13? No → place key at j+1 = 2 (already there) → [11, 12, 13, 5, 6]

i = 3 → key = 5, j = 2

arr[2]=13 > 5 → shift: [11, 12, 13, 13, 6], j=1

arr[1]=12 > 5 → shift: [11, 12, 12, 13, 6], j=0

arr[0]=11 > 5 → shift: [11, 11, 12, 13, 6], j=-1

Place key at 0 → [5, 11, 12, 13, 6]

i = 4 → key = 6, j = 3

arr[3]=13 > 6 → shift: [5, 11, 12, 13, 13], j=2

arr[2]=12 > 6 → shift: [5, 11, 12, 12, 13], j=1

arr[1]=11 > 6 → shift: [5, 11, 11, 12, 13], j=0

arr[0]=5 > 6? No → place key at 1 → [5, 6, 11, 12, 13]

Done. Array is sorted.

Notes

Stable: equal elements keep their original order.

In-place: only O(1) extra space.

Time complexity:

Best case (already sorted): O(n)

Average/Worst case: O(n²) */