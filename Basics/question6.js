// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

function leapYear(year){
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapYear(2024));
console.log(leapYear(2025));

// Explanation
/*This JavaScript code defines a function named leapyear that determines whether a given year is a leap year. A leap year is a year that is evenly divisible by 4, except for years that are divisible by 100 but not divisible by 400.

Here's a breakdown of the code:

function leapyear(year) {: Declares a function named leapyear that takes a year parameter.

return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);: Returns a boolean value based on a ternary conditional (ternary) operator.

The condition (year % 100 === 0) checks if the year is divisible by 100.

If true, the inner condition (year % 400 === 0) checks if the year is divisible by 400.

If this inner condition is true, the entire expression evaluates to true, indicating a leap year.

If the inner condition is false, the expression evaluates to false.

If the outer condition is false (i.e., the year is not divisible by 100), the expression (year % 4 === 0) checks if the year is divisible by 4.

If true, the entire expression evaluates to true, indicating a leap year.

If false, the expression evaluates to false.

The use of the ternary operator allows the function to succinctly express the leap year conditions in a single line. The function will return true if the year meets the leap year criteria and false otherwise. */