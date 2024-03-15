// 31. Write a JavaScript program to find the largest of three given integers.


function getLargest(a, b, c) {
    let largest = Math.max(a, b);
    if (c > largest) {
        largest = c;
    }
    return largest;
}

console.log(getLargest(15, 8, 2));  

// 2nd method

function findLargestNumber(num1, num2, num3){
  let largest = num1; // Assume num1  is the largest

  // compare num2 with largest

  if(num2 > largest){
    largest = num2;
  }

  // compare num3 with largest
  if(num3 > largest){
    largest = num3;
  }
  return largest
}

console.log(findLargestNumber(100, 200, 300));