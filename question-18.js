// write a javascript  function program to find the most frequent item of an array


// function mostFrequentItem(array) {
//   // Create a map to store the frequency of each item in the array
//   const frequencyMap = new Map();
 
//   // Iterate over the array and update the frequency map
//   for (const item of array) {
//     if (frequencyMap.has(item)) {
//       frequencyMap.set(item, frequencyMap.get(item) + 1);
//     } else {
//       frequencyMap.set(item, 1);
//     }
//   }
 
//   // Find the item with the highest frequency
//   let mostFrequentItem;
//   let highestFrequency = 0;
//   for (const [item, frequency] of frequencyMap) {
//     if (frequency > highestFrequency) {
//       mostFrequentItem = item;
//       highestFrequency = frequency;
//     }
//   }
 
//   // Return the most frequent item
//   return mostFrequentItem;
//  }
 
//  console.log(mostFrequentItem([1,2,3,4,2,4,5,2,4,5,2,2,3]));

//  This code is part of a function that finds the most frequent item in an array. The function takes an array as input and returns the item that occurs most frequently in the array.

//  The code starts by creating a frequency map, which is a data structure that stores the frequency of each item in the array. The frequency map is initialized with an empty object.
 
//  Then, the code iterates over the array and adds each item to the frequency map. If the item is already in the frequency map, the code increments its frequency by 1. Otherwise, the code adds the item to the frequency map with a frequency of 1.
 
//  After the code has iterated over the array, it finds the item with the highest frequency. The code does this by iterating over the frequency map and keeping track of the item with the highest frequency.
 
//  Finally, the code returns the item with the highest frequency.
 
//  In the example, the input array is [1,2,3,4,2,4,5,2,4,5,2,2,3]. The code would create a frequency map that looks like this:
 
 
//  ​
//  {
//    1: 1,
//    2: 5,
//    3: 2,
//    4: 3,
//    5: 2
//  }
//  ​
 
 
//  The code would then iterate over the frequency map and find that the item with the highest frequency is 2. Therefore, the code would return 2.

function hFrequency(arr){
  let hFrequency = {};
  arr.forEach(function (elem){
    if(hFrequency.hasOwnProperty(elem)) hFrequency[elem]++;
    else hFrequency[elem] = 1;
  })
  
  let ans = Object.keys(hFrequency).reduce(function (acc, next){
    return hFrequency[acc] > hFrequency[next] ? acc : next;
  })

  console.log(ans);
}

hFrequency([1,2,3,4,2,4,5,2,4,5,2,2,3]);