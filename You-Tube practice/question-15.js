// write a javaScript function to clone array

// Method - 1 ----------------------------------------------------------------------

// function cloneArr(arr){
//   return [...arr];
// }

// let ans = cloneArr([1,2,3,4,5]);
// console.log(ans);

// Method - 2 -------------------------------------------------------------------------

// function cloneArr(arr){
//   let newArr = [];
//   arr.forEach(function (elem){
//     newArr.push(elem);
//   })

//   return newArr;
// }

// let abcd = [1,2,3,4,5];

// let newArr = cloneArr(abcd);
// newArr.pop();
// console.log(newArr);

// Method -3 ------------------------------------------------------------------------------------

function cloneArr(arr){
  return arr.map(function (e){
    return e;
  })
}

let newArr = cloneArr([1,2,3,4,]);
console.log(newArr);