// 34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive. 

function max_townums_range(x, y){ 
  if( (x >= 40) && (x <= 60) && (y >= 40 && y <= 60) ){
  if(x === y){
  return "Numbers are the same";
  }else if (x > y){
  return x;
  }else{
  return y;
  }
  }else{
  return "Numbers don't fit in range";
  }
  }
  ​
  console.log(max_townums_range(45, 60));
  console.log(max_townums_range(25, 60));
  console.log(max_townums_range(45, 80));