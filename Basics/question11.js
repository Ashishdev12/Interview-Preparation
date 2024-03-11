/* 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C.*/

function  celsiusToFahrenheit(celsius){

  let celsiusTemp = celsius;
  let  fahrenheitTemp = celsiusTemp * 9/5 + 32;
  let message = celsiusTemp + '\xB0C is '+ fahrenheitTemp + '\xB0F.'; 
  console.log(message);
} 

function  fahrenheitToCelsius(fahrenheit) {
  let fahrenheitTemp = fahrenheit;
  let celsiusTemp = (fahrenheitTemp-32) * 5 / 9;
  let message = fahrenheit + "\xB0F is " + celsiusTemp + "\xB0C.";
  console.log(message);
}


celsiusToFahrenheit(60)
fahrenheitToCelsius(45)




// let temp = prompt("please enter the value: ")
// //let fahrenheit = prompt("please enter the fahrenheit value ")
// let formulaCtoF = temp * 9/5 + 32;
// let formulaFtoC = (temp - 32) * 5/9;
// console.log(`the temp in fahrenheit is ${formulaCtoF}`)
// console.log(`the temp in celsius is ${formulaFtoC}`)