// 56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.  

function division_string(num1, num2){
  if(num2 === 0){
    return "Error: Division by zero is not allowed.";
  }
  let result = num1 / num2;
  // format result with commas
  console.log(result);

  let formattedResult = result.toLocaleString(undefined, {maximumFractionDigits: 2});

  return formattedResult;

}

console.log(division_string(1000000, 107));