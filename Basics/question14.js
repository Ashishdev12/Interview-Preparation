// 14. Write a JavaScript exercise to get the filename extension. 

filename = 'system.php'
console.log(filename.split('.').pop());

filename = 'index.html';
console.log(filename.split(".").pop());




/// using functions
function getFileExtension(str)
{
let splittedStr = str.split('.')
return splittedStr[splittedStr.length - 1]
}

console.log(getFileExtension("system.php"))
console.log(getFileExtension("abc.js"))