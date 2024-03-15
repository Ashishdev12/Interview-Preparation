// 35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

function specifiedChar(str, char){
   if(str.length < 4){

    return false;
   }
   else {
     let secondChar = str.substring(1, 4);

     return secondChar.includes(char)
   }
    
   }

   console.log(specifiedChar("Phtoyn", "y"));
   console.log(specifiedChar("JavaScript", "a"));
   console.log(specifiedChar("Console", "o"));
   console.log(specifiedChar("ConCole", "C"));
   console.log(specifiedChar("Console", "e"));
   console.log(specifiedChar("JavaScript", "S"));
