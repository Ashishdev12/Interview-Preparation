
/*Understand logic for reverse string with the stack
- Make Stack push and pop both operations
- Define string and convert to the array.
- Push and Pop string to stack.
- Get reverse string back from the stack */

let data = [];
let currentSize = data.length;

function push(newVal){
    data[currentSize] = newVal;
    currentSize+= 1

}

function pop(){
     lastRemovedItem = data[currentSize-1]
      currentSize-=1;
      data.length = currentSize
      return lastRemovedItem
}

function reverseString(item){
    for(let i = 0; i<item.length; i++){
        // console.log(item[i]);
        push(item[i])
    }

    for(let i = 0; i<item.length; i++){
        item[i] = pop()
    }

}

let str = 'Ashish'
str= str.split('')

reverseString(str)
console.log(str);


// console.log(data);
