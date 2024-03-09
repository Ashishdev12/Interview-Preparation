
// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// lets get today's date
let today = new Date()

// get the day 
let day = today.getDay();

// get the day of week 0-6 where 0 - is sunday and 6 - saturday

let dayList =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("Today is : " + dayList[day] + ".");

// get current hours, minutes and seconds

let hour = today.getHours();
let  minute = today.getMinutes();
let seconds = today.getSeconds()

// Determine if it AM PM

let prepand = (hour >= 12)  ? 'PM' : 'AM';

// convert 24 hours  to 12 hours system
hour = (hour >= 12) ? hour - 12 : hour;

// check for special case's when the our is zero

if (hour === 0 && prepand === 'PM'){
  if(minute === 0 && seconds === 0){
    hour = 12;
    prepand = 'Noon';
  }else {
   hour = 12;
   prepand = 'PM'
  }
}

// check for special case's when the our is zero

if(hour === 0 && prepand === 'AM'){
  if(minute === 0 && seconds === 0){
    hour = 12;
    prepand = 'Midnight';
    } else {
      hour = 12;
      prepand = 'AM'
  }
}

console.log("Current Time: " + hour + prepand + " : " + minute +"m" + " : " + seconds +"s");