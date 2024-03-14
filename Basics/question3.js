
// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// get Current Date

let today = new Date();

// Get the day of the month

let  day = today.getDate();

//Get the Month (adding 1 because  January is 0)
let month = today.getMonth() + 1;

// Get the year

let year = today.getFullYear();

// Add leading zero if the day less then 10

if(day < 10){
  day = '0' + day;
}

if(month < 10){
  month = '0' + month;
}

// Format the date as mm-dd-yyyy and log it

today = month  + '-' + day + '-' + year;
console.log('Today\'s date in format MM-DD-YYYY: ', today);