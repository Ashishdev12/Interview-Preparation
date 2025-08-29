class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }

  isTreEmpty() {
    return this.root === null;
  }

  makeTree(val) {
    // use this Node class bcz it should have left and right with root
    let newNode = new Node(val);
    // if value is null
    if (this.root === null) {
      // then add value to root
      this.root = newNode;
    } else {
      // send both value one the complete the root and new value newNode.
      this.insertNode(this.root, newNode);
    }
  }

  // This fun is used to check if the val is greater then root or lesser accordingly push the value
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
}

let Bst = new BSTree();
Bst.makeTree(20);
Bst.makeTree(10);
Bst.makeTree(5);
Bst.makeTree(30);
Bst.makeTree(25);
// console.log(Bst.isTreEmpty());
console.log(Bst);

console.log(JSON.stringify(Bst, null,2));
