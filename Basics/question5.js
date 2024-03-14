// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  


function animate_string(id){
  
  //Get the HTML element by its id
  let  element = document.getElementById(id);
  console.log(element);

  // Access the text node inside the element(assuming no other children)
  let  node = element.childNodes[0];
  console.log(node);

  // Extract initial text content of the data
  let  initText = node.data;
  console.log(initText);

 // Set up an interval to rotate the characters in the text every 300 milliseconds
 setInterval(()=>{
     // move last character to the beginning of the string
     initText = initText[initText.length-1] + initText.substring(0, initText.length - 1);
   
       // Update the text content of the text node with the modified string

       node.data = initText;
      
    
 }, 300)
}