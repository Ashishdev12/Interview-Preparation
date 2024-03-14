// 18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  

function pairNumbers(num1 , num2){
  return ((num1 == 50 || num2 == 50) || (num1 + num2 == 50));
}

console.log(pairNumbers(20, 50));

/* <html>
<head>
<title>A JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50. </title>
<link href="/favicon.ico" type="image/x-icon" rel="icon"/>
</head>

<body>

<input type="text" id="enter">
<input type="text" id="enter2">
<button id="btn">Click</button>
Checks 2 given numbers and return true if one of the number is 50 or if their sum is 50.


<div id="demo"></div>

<script>

document.getElementById("btn").onclick = function(){

var x = document.getElementById("enter").value;
var y = document.getElementById("enter2").value;
var z = parseInt(document.getElementById("enter").value) + parseInt(document.getElementById("enter2").value);

if(x == 50 || y == 50){

document.getElementById("demo").innerHTML = "A 50 was selected = TRUE!";

} else if(z === 50){

document.getElementById("demo").innerHTML = "The 2 numbers add up to 50 = TRUE!";

} else {

document.getElementById("demo").innerHTML = "FALSE!";

}
}

</script>

</body>
</html> */