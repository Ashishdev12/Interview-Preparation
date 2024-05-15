// 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.  

function cityName(str){
  if(str.length >= 3 && (str.substring(0, 3) === 'Los') || (str.substring(0, 3) === 'New')){
    return str
  }
  return '';
}

console.log(cityName("New York"));
console.log(cityName("Los Angles"));
console.log(cityName("London"));