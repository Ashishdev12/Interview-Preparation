// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 

// JavaScript program to find the area of a triangle

let side1 = parseInt(prompt("Enter side 1"))
let side2 = parseInt(prompt("Enter side 2"))
let side3 = parseInt(prompt("Enter side 3"));

// calculate the semi-parameter

let  s = (side1 + side2 + side3 ) / 2;

// calculate the area

// let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

let area = Math.sqrt(s * (s - side1)  * (s - side2) * (s - side3));

console.log(`The are of the triangle is ${area}`);


