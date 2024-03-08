// write a javascript  function to get the first element of an array, passing a parameter 'n' will return the first 'n' element of the array.

// function getFirstElement(arr, n) {
//   if (n === undefined) {
//     return arr[0];
//   } else {
//     return arr.slice(0, n);
//   }
//  }

// getFirstElement([1,2,3,4,5]);


function getFirstElement(arr, n = 1){
  if(n <= arr.length){
    for(let i = 0; i < n; i++){
      console.log(arr[i]);
    }
  }else {
    console.log(n + " to elements nahi");
  }
     
}

getFirstElement([1,2,3,4,5], 5)