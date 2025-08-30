// Breadth MinValue js

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BTSTree{
    constructor(){
        this.root = null
    }
    isEmptyTree(){
        return this.root === null
    }

    makeTree(val){
        let newNode = new Node(val);
        if(this.root === null){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode){
        if(root.val > newNode.val){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left, newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right, newNode)
            }
        }

    }
     maxValue(root){
        if(!root.right){
            return root.val
        } else{
            return this.maxValue(root.right)
        }

     }
}

let Bts = new BTSTree();
Bts.makeTree(20)
Bts.makeTree(10)
Bts.makeTree(5)
Bts.makeTree(11)
Bts.makeTree(30)
Bts.makeTree(23)
Bts.makeTree(40)

// Bts.minValue(Bts.root)
console.log(Bts.maxValue(Bts.root));


Bts.insertNode(Bts.root, 100)
console.log(Bts);
