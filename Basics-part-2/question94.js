// 94. Write a JavaScript program to find the number appearing most frequently in a given array of integers. 

function mostFrequentNumber(array){
let frequencyMap = {}; // Create an empty object to store the frequency of each number
let maxFrequency = 0; // Variable to store the maximum frequency
let mostFrequentNumber; // Variable to store the most frequent number

// Iterate through the array and count the frequency of each number

array.forEach((number)=>{
  frequencyMap[number] = (frequencyMap[number] || 0 ) + 1;
  console.log(frequencyMap);
  if(frequencyMap[number] > maxFrequency){ 
    maxFrequency = frequencyMap[number];
    
    mostFrequentNumber = number;
  
  }
})
return mostFrequentNumber;
  
}


console.log(mostFrequentNumber([2,3,1,2,3,4,2,2,13,2,1,1,1]));

