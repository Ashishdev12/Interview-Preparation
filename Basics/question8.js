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

