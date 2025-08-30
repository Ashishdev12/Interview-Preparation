// Node factory function
function createNode(val) {
  return {
    value: val,
    left: null,
    right: null
  };
}

// BST factory function
function createBST() {
  let root = null;

  function isTreeEmpty() {
    return root === null;
  }

  function makeTree(val) {
    const newNode = createNode(val);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  }

  function insertNode(current, newNode) {
    if (newNode.value < current.value) {
      if (current.left === null) {
        current.left = newNode;
      } else {
        insertNode(current.left, newNode);
      }
    } else {
      if (current.right === null) {
        current.right = newNode;
      } else {
        insertNode(current.right, newNode);
      }
    }
  }

  function getRoot() {
    return root;
  }

  // expose methods
  return {
    isTreeEmpty,
    makeTree,
    getRoot
  };
}

// -------------------
const bst = createBST();
bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(30);
bst.makeTree(25);

console.log(JSON.stringify(bst.getRoot(), null, 2));