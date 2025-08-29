/* A linked list in JavaScript is a linear data structure composed of a sequence of nodes, where each node contains two primary components: 
Data (or Value): The actual information or element stored within the node.
Next Pointer (or Reference): A reference to the subsequent node in the sequence. The last node in the list has a null reference, signifying the end of the list. */

// Defines a class to represent a singly linked list.
class List {
  // When you create a new List, you must pass the first value.
  constructor(data) {
    // Creates the first node (an object with value and next) and sets it as the head of the list.
    this.head = {
      value: data,
      next: null,
    };

    // Since there’s only one node so far, head and tail are the same object.
    this.tail = this.head;
    this.size = 1;
  }

  // append Logic
  appendNode(newNode) {
    // Builds a node for the new value.
    let newData = {
      value: newNode,
      next: null,
    };
    // Links the current tail’s next to that new node.
    this.tail.next = newData; // link old tail -> new node
    this.tail = newData; //  advance tail to the new end
    this.size += 1;
    return this;
  }

  // Traversing Logic

  traversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      console.log(currentNode);
      currentNode = currentNode.next;

      counter++;
      // break;
    }
  }

  // Update Logic
  update(index, newVal) {
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;

      // console.log(currentNode);
      counter++;
    }

    currentNode.value = newVal;
    return true;
  }

  // Delete Logic
  deleteNode(index) {
    let counter = 1;
    let currentNode = this.head;
    while (counter < index - 1) {
      currentNode = currentNode.next;
      counter++;
    }
    let nextNode = currentNode.next.next;
    currentNode.next = nextNode;
    console.log(currentNode);
  }

  // inset Logic
  insertNode(index, newVal) {
    let counter = 0;
    let currentNode = this.head;
    while (counter < index - 1) {
      currentNode = currentNode.next; // current node 200
      counter++;
    }
    // take temp variable and insert current Node's next which we are inserting in this
    let nextNode = currentNode.next; // nextNode = 300
    currentNode.next = {
      value: newVal,
      next: nextNode,
    };

    // console.log(currentNode);

    return true;
  }
}

let list = new List(100); // head and tail both point at {100}
list.appendNode(200); // head.next now points to 200
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.appendNode(600);
list.appendNode(700);

console.log("Before update");
list.traversing();

console.log("after Update");
list.update(2, 999);

list.traversing();

// console.log(list);
