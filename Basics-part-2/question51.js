// 51. Write a JavaScript application that transforms a provided numerical value into hours and minutes. 

function  convertToHoursMinutes(num) {
  let hours = Math.floor(num/60);
  let minutes = num % 60

  return hours+" hour" + " : " + minutes + " minute";
}

console.log(convertToHoursMinutes(98));
console.log(convertToHoursMinutes(198));
console.log(convertToHoursMinutes(398));