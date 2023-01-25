class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//         8
//        / \
//       3   10
//      / \     \
//     1   6     14
//        / \    /
//       4   7  13
 

class BST {
    constructor() {
        this.root = null;
    }

    addNode(val) {
        const node = new Node(val);
        if(!this.root) this.root = node;

        let currentNode = this.root;
        while(currentNode) {
            // check for duplicate
            if(currentNode.val === node.val) return; 
            let direction = node.val < currentNode.val ? "left" : "right";
            // placing node as child, if reached current node
            if(!currentNode[direction]) currentNode[direction] = node;
            // otherwise, move pointer
            currentNode = currentNode[direction];
        }
    }

    findMin() {
        if(!this.root) return;

        let min = +Infinity;
        const stack = [ this.root ];

        while(stack.length > 0) {
            const currentNode = stack.pop();

            if(currentNode.val < min) min = currentNode.val;

            if(currentNode.right) stack.push(currentNode.right);
            if(currentNode.left) stack.push(currentNode.left);
        }
        return min;
    }

    findMinRecursive() {

    }
}

const tree = new BST();
tree.addNode(8);
tree.addNode(3);
tree.addNode(10);
tree.addNode(1);
tree.addNode(6);
tree.addNode(14);
tree.addNode(4);
tree.addNode(7);
tree.addNode(13);
console.log(tree.findMin());
// console.log(tree.findMinRecursive());



console.log(JSON.stringify(tree,null,2))

