class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    }

    this.tail = this.head;
    this.size = 1;
 }

  appendNode(newNode){
    let newData = {
      value: newNode,
      next: null,
    };
    this.tail.next = newData;
    this.tail = newData;
    this.size += 1;
    return this;
  }

  deleteNode(index){
    let counter = 1;
    let currentNode = this.head;
    while(counter < index -1){

        currentNode = currentNode.next;
        counter++
    }
    let nextNode = currentNode.next.next
    currentNode.next = nextNode
    console.log(currentNode);
    

  }
}

let list = new List(100); 
list.appendNode(200); 
list.appendNode(300); // this is lead node
list.appendNode(400); // this got deleted
list.appendNode(500);
list.appendNode(600);
list.appendNode(700);
list.deleteNode(4);
console.log(list);
