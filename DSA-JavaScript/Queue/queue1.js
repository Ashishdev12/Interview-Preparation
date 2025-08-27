/* Understand what is Queue. - Linear Data Structure - first in first out
Understand enqueue and dequeue operations.
Implement enqueue and dequeue functions for operations.- add item in enqueue(front) and remove item form dequeue(last )
Test Queue operations with console. */

let data = [];
let currentSize = data.length;
let maxValue = 5;

function queue(newVal) {
  if (currentSize >= maxValue) {
    alert("stack is overflow");
  } else {
    data[currentSize] = newVal;
    currentSize += 1;
  }
}

function dequeue() {
  if (currentSize > 0) {
    for (let i = 0; i < data.length; i++) {
      // console.log(data[i]);
      data[i] = data[i + 1];
    }
    currentSize--;
    data.length = currentSize;
  } else {
    alert("stack is empty");
  }
}

function display() {
  console.log(data);
}

queue(20);
queue(30);
queue(40);
queue(50)
queue(60)
// queue(70)
dequeue()
display();
