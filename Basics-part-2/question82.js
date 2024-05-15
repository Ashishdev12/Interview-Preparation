// 82. Write a JavaScript program to add two positive  integers without carrying.  

function addWithoutCurrying(num1, num2){
  let result = 0; // initiation 
  let x = 1 // place value

  while(num1 > 0 && num2 > 0){
    result += x *((num1 + num2) % 10);
    // console.log(result);
    num1 = Math.floor(num1 / 10)
    console.log(num1);
    num2 = Math.floor(num2 / 10)
    // console.log(num2);

    x *= 10;
    // console.log(x);

  }

  return result
}

console.log(addWithoutCurrying(222,911));
console.log(addWithoutCurrying(200,900));