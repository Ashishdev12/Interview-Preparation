// 32. Write a JavaScript program to find the closest value to 100 from two numerical values. 

function closestValue(num1, num2){
  
  if(num1 != num2){
    if (Math.abs(100 - num1) < Math.abs(100 - num2)) {
      return num1;
    } else {
      return num2;
    } 
    return 0;
  }
  else {
    return "The Numbers are equal";
  }
  
}


console.log(closestValue(95, 94));

// number 2 method

function  closestNumber(a,b){
  if( a != b) {

  }
}