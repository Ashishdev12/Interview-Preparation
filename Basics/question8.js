// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  



let winningNumber = Math.floor(Math.random() * 10);
console.log(winningNumber);

GuessNumber = prompt("Guess your Number");

if(winningNumber == GuessNumber){
  console.log( "Congratulation You Won!");
} else{
     console.log("Your wrong"); 
}


// Explanation 

/*This JavaScript code uses a for loop to iterate through the years from 2014 to 2050 (inclusive). For each year, it creates a Date object representing the 1st of January of that year and checks if the day of the week for that date is Sunday (where Sunday is represented by 0 in JavaScript's getDay method).

Here's a breakdown of the code:

for (var year = 2014; year <= 2050; year++): Initializes a variable year with the value 2014 and iterates through each subsequent year until 2050.

var d = new Date(year, 0, 1);: Creates a new Date object representing the 1st of January of the current year.

if (d.getDay() === 0): Checks if the day of the week for the date d is Sunday (0 represents Sunday in the getDay method).

If true, the code inside the if block is executed.
console.log("1st January is being a Sunday " + year);: If the 1st of January for the current year is a Sunday, it prints a message to the console indicating that the 1st of January is a Sunday for that particular year.

So, the purpose of this code is to identify and print the years between 2014 and 2050 where the 1st of January falls on a Sunday. It utilizes the Date object and the getDay method to determine the day of the week for each 1st of January in the specified range.*/