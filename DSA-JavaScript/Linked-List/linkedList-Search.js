class List {
    constructor(data){
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.size = 1
    }
    appendNode(newVal){
        let newData = {
            value: newVal,
            next: null
        }
        this.size += 1
        this.tail.next = newData;
        this.tail = newData
        return this
    }

    searchNode(newData){
        let result = undefined;
        let currentNode = this.head;
        let loop = true // run loop until you find the value
        while(loop){
            currentNode = currentNode.next;
            // console.log(currentNode);
            
            loop = !!currentNode // if value is defined it return true else return false
            if(loop && currentNode.value === newData){
                loop = false // we got value make it false now
               result = currentNode
               
            }
        }
        console.log(result);
    }
}

let list = new List(100)
list.appendNode(200)
list.appendNode(300)
list.appendNode(400)
list.appendNode(500)
list.appendNode(600)
list.appendNode(700)

list.searchNode(900)
// console.log(list);
