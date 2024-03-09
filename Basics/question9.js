// 9. Write a JavaScript program to calculate the days left before Christmas.  


function  daysLeftBeforeChristmas(christmas) {
  let today = new Date();
  let christmasDate = new Date(christmas);
  let timeDiff = christmasDate - today;
  let daysLeft = Math.floor(timeDiff/(1000 * 3600 * 24));
return daysLeft;
}

let result = daysLeftBeforeChristmas("Dec 25 , 2024");
console.log(result + " days left for christmas");

// Explanation

/*This JavaScript function, named daysLeftBeforeChristmas, calculates the number of days left until Christmas based on the input parameter christmas, which is expected to be a valid date string.

Here's a breakdown of the code:

let today = new Date();: Creates a new Date object representing the current date and time when the function is called.

let christmasDate = new Date(christmas);: Creates a new Date object representing the date of Christmas. The christmas parameter is expected to be a valid date string.

let timeDiff = christmasDate - today;: Calculates the time difference between the Christmas date and the current date. The result is the difference in milliseconds.

let daysLeft = Math.floor(timeDiff / (1000 * 3600 * 24));: Converts the time difference from milliseconds to days by dividing by the number of milliseconds in a day (1000 * 3600 * 24). The result is then rounded down using Math.floor to ensure an integer value.

return daysLeft;: Returns the calculated number of days left until Christmas.

The function essentially determines the time difference between the current date and the specified Christmas date, converts it to days, and returns the remaining days until Christmas. The daysLeft variable holds the final result, which represents the number of days left until the provided Christmas date.*/