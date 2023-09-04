// write a javascript program to shuffle an array


 
// for (let i = array.length - 1; i > 0; i--) {
//   const j = Math.floor(Math.random() * (i + 1));
//   [array[i], array[j]] = [array[j], array[i]];
// }

 function shuffle(arr){

  for (let i = arr.length -1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];

    
  }
    return arr;
 }

 console.log(shuffle([1,2,3,4,5,6]));