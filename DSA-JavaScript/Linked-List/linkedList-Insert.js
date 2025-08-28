class List{
    constructor(data){
        this.head = {
            value : data,
            next : null
        }
        this.tail = this.head
        this.size= 1
    }
    appendNode(newVal){
        let newData = {
            value: newVal,
            next : null
        }
        this.size+= 1
        this.tail.next = newData
        this.tail = newData
        return this
    }

    insertNode(index, newVal){
        let counter = 0;
        let currentNode = this.head;
        while(counter < index - 1 ){
            currentNode = currentNode.next; // current node 200            
            counter++
        }
        // take temp variable and insert current Node's next which we are inserting in this 
        let nextNode = currentNode.next;   // nextNode = 300   
        currentNode.next ={
            value: newVal,
            next: nextNode

        }
        
        // console.log(currentNode);
        
        
       
        
        return true
    }

}

let list = new List(100)

list.appendNode(200)
list.appendNode(300) 
list.appendNode(400)
list.appendNode(500)
list.appendNode(600)
list.appendNode(700)

list.insertNode(2, 999)
console.log(list);