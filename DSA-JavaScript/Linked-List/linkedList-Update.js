class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };

    this.tail = this.head;
    this.size = 1;
  }

  appendNode(newNode) {
    let newData = {
      value: newNode,
      next: null,
    };
    this.tail.next = newData;
    this.tail = newData;
    this.size += 1;
    return this;
  }

  // Update Logic
  updateNode(index, newVal) {
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;

      counter++;
    }

    currentNode.value = newVal;
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
list.updateNode(2,999)
list.traversing();

// console.log(list);
