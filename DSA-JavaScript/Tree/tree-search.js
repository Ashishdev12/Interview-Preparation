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
  // Empty Logic
  isEmptyTree() {
    return this.root === null;
  }
  // add root logic
  makeTree(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } 
    else {
      this.insertNode(this.root, newNode);
    }
  }
  // Insert Logic
  insertNode(root, newNode) {
    if (root.val > newNode.val) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  // search Logic
    searchNode(root, val){
        if(root === null){
            return false
        } else if(root.val === val){
            return true // we also return true.
        } else if(root.val > val){
            return this.searchNode(root.left, val)
        } else {
            return this.searchNode(root.right, val)
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
// console.log(Bts.searchNode(Bts.root, 5));
// console.log(JSON.stringify(Bts, null, 2));



console.log(Bts);
