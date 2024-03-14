// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise. 

function startString(element){
  if(element.startsWith('Java')){
    console.log("The string starts with 'Java'");
  } else {
    console.log("The string does not start with 'Java'");
  }
}

startString("JavaHello");
startString("Hello");
startString("Java");