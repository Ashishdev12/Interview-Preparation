// 98. Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case. Fox example "Write" will be write and "PHp" will be "PHP"

function changeTheCase(new_String){
  x = 0;
  y = 0; 

  for(let i = 0; i< new_String.length; i++){
    if(/[A-Z]/.test(new_String[i])){
      x++
    } else {
      y++;
    }
  }
  if(y > x){
    return new_String.toLowerCase();
  }  
    return new_String.toUpperCase();
  
}

console.log(changeTheCase("Write"));
console.log(changeTheCase("PHp"));