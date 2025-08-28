class List{
  constructor(data){
    this.head = {
        value : data,
        next : null
    }
    this.tail = this.head
    this.size = 1
  }
  appendNode(newData){
    let newNode = {
        value : newData,
        next  : null
    }
    this.size += 1
    this.tail.next = newNode;
    this.tail = newNode
    return this
  }

  // Traversing Logic
  traversing(){
    let counter = 0;
    let currentNode = this.head
    while(counter < this.size){
        console.log(currentNode);
        currentNode = currentNode.next
        counter++

    }


  }
}

let list = new List(100)
list.appendNode(200)
list.appendNode(300)
list.appendNode(400)
list.appendNode(500)
list.appendNode(600)
list.appendNode(700)

list.traversing()
console.log(list);
