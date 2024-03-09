
// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// get Current Date

let today = new Date();

// Get the day of the month

let  day = today.getDate();

//Get the Month (adding 1 because  January is 0)
let mm = today.getMonth() + 1;

// Get the year

let yy = today.getFullYear();

// Add leading zero if the day less then 10

if(day < 10){
  day = '0' + day;
}

if(mm < 10){
  mm = '0' + mm;
}

// Format the date as mm-dd-yyyy and log it

today = mm  + '-' + day + '-' + yy;
console.log('Today\'s date in format MM-DD-YYYY: ', today);