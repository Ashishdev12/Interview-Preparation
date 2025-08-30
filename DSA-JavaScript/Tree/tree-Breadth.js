class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BTSTree {
  constructor() {
    this.root = null;
  }
  isEmptyTree() {
    return this.root === null;
  }
  makeTree(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (root.val > newNode.val) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    }else{
         if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  searchNode(root, val){
    if(root === null){
        return false
    } else if(root.val === val){
        return true
    } else if( root.val > val){
        return this.searchNode(root.left, val)
    }else {
        return this.searchNode(root.right, val)
    }

  }
  preOrder(root){
    if(root){
        console.log(root.val);
        this.preOrder(root.left)
        this.preOrder(root.right)
    }

  }

  // start with left most child
  inOrder(root){
    if(root){
        this.inOrder(root.left)
        console.log(root.val);
        this.inOrder(root.right)
    }
  }

  // post Order left, right and root
  postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right);
        console.log(root.val);
        
    }
  }

   breadthNode(){
    let queue = [];
    // psh root into the queue
    queue.push(this.root)
    // run till length of queue
    while(queue.length){
        // pop out single value's at a time.
        let current = queue.shift();
        if(current.left){
            queue.push(current.left)
        } 
            if(current.right){
                queue.push(current.right)
            }
            console.log(current.val);
            
    }
  }
}

let Bts = new BTSTree();
// console.log(Bts.isEmptyTree());
Bts.makeTree(20);
Bts.makeTree(10);
Bts.makeTree(5);
Bts.makeTree(11);
Bts.makeTree(30);
Bts.makeTree(23);
Bts.makeTree(40);
// Bts.insertNode(root, 100);
// Bts.searchNode(Bts.root, 5)
// console.log(Bts.searchNode(Bts.root, 5));
// Bts.preOrder(Bts.root)  // 20,10,5,11,30,23,40
// Bts.inOrder(Bts.root)   // 5,10,11,20,23,30,40
// Bts.postOrder(Bts.root)   // 5,11,10,23,40,30,20

Bts.breadthNode();


console.log(Bts);
