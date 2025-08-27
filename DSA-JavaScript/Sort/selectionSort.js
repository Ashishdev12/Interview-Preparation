// Selection Sort is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. This process continues until the entire array is sorted.

// First we find the smallest element and swap it with the first element. This way we get the smallest element at its correct position.
// Then we find the smallest among remaining elements (or second smallest) and swap it with the second element.
// We keep doing this until we get all elements moved to correct position.

let array = [20,12,53,3,7,8,10,4,15,29,22,33];

function selectionSort(data){
    let minVal;
    for(let i =0; i<data.length; i++){
        minVal = i
        for(let j = i+1; j<data.length; j++){
            if(data[j] < data[minVal]){
                minVal = j
            }
        }
        let temp = data[minVal]
        data[minVal] = data[i];
        data[i] = temp
    }
    return data
}

const result = selectionSort(array);
console.log(result);


