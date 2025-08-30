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



  breadthNode() {
    let queue = [];
    // psh root into the queue
    queue.push(this.root);
    // run till length of queue
    while (queue.length) {
      // pop out single value's at a time.
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      console.log(current.val);
    }
  }

   minValue(root){
        if(!root.left){
            return root.val
        } else{
            return this.maxValue(root.left)
        }

     }

      maxValue(root){
        if(!root.right){
            return root.val
        } else{
            return this.maxValue(root.right)
        }

     }


  removeNode(val) {
    this.root = this.deleteNode(this.root, val);
  }

  deleteNode(root, val) {
    if (root === null) {
      return null;
    }
    if (val < root.val) {
      root.left = this.deleteNode(root.left, val);
    } else if (val > root.val) {
      root.right = this.deleteNode(root.right, val);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.val = this.minValue(root.right);
      root.right = this.deleteNode(root.right, root.val);
    }
    return root
  }
}

let Bst = new BSTree();
Bst.makeTree(20);
Bst.makeTree(10);
Bst.makeTree(5);
Bst.makeTree(11);
Bst.makeTree(30);
Bst.makeTree(23);
Bst.makeTree(40);
// console.log(Bst.isTreEmpty());
Bst.removeNode(50);
Bst.breadthNode(Bst.root);

console.log(Bst);

// console.log(JSON.stringify(Bst, null,2));
