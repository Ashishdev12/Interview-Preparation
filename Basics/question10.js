// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).

function multiplyBy () {
   num1 = document.querySelector('#firstNumber').value;
  num2 = document.querySelector('#secondNumber').value;
  document.getElementById('result').innerHTML = num1 * num2 
}

function divideBy () {
  num1 = document.querySelector('#firstNumber').value;
 num2 = document.querySelector('#secondNumber').value;
 document.getElementById('result').innerHTML = num1 / num2 
}

/* This JavaScript code defines two functions, multiplyBy and divideBy, which are likely designed to perform multiplication and division operations, respectively, based on input values from HTML elements.

Here's a breakdown of each function:

multiplyBy function:

Getting Input Values:

num1 = document.querySelector('#firstNumber').value;: Retrieves the value entered in the HTML element with the id 'firstNumber' and assigns it to the variable num1.
num2 = document.querySelector('#secondNumber').value;: Retrieves the value entered in the HTML element with the id 'secondNumber' and assigns it to the variable num2.

Performing Multiplication:

document.getElementById('result').innerHTML = num1 * num2;: Calculates the product of num1 and num2 and sets the inner HTML of the HTML element with the id 'result' to the result of the multiplication.

divideBy function:

Getting Input Values:

num1 = document.querySelector('#firstNumber').value;: Retrieves the value entered in the HTML element with the id 'firstNumber' and assigns it to the variable num1.
num2 = document.querySelector('#secondNumber').value;: Retrieves the value entered in the HTML element with the id 'secondNumber' and assigns it to the variable num2.

Performing Division:

document.getElementById('result').innerHTML = num1 / num2;: Calculates the result of dividing num1 by num2 and sets the inner HTML of the HTML element with the id 'result' to the result of the division.

 */