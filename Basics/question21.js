
// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  

function stringCheck (str){
  if(str === null || str === undefined || str.substring(0, 2) === 'py'){
    return str
  }else {
    return "py" + str
  }
}

console.log(stringCheck("python")); // Hello