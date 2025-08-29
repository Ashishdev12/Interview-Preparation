/* A tree in JavaScript is a way to organize data in a hierarchy, with a main "root" and branches that lead to smaller "child" elements. It's like a family tree, where each person can have their own children.

Each node has a parent and can have children, creating a hierarchy.
We visit each node starting from the root using methods like depth-first or breadth-first. */

/* A Binary Tree Data Structure is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child. It is commonly used in computer science for efficient storage and retrieval of data, with various operations such as insertion, deletion, and traversal. */
// What is Tree DS
// What is Binary Tree
// What is Binary Search Tree
// Important Terminology for Trees

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null

    }
}

class BSTree{
   constructor(){
     this.root = null
   }
   isTreEmpty(){
    return this.root === null
   }
}

let Bst = new BSTree()
console.log(Bst.isTreEmpty());


