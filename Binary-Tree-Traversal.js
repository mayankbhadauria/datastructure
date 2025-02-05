

// 

class Node {
    constructor(val) {
        this.val=val
        this.left=null
        this.right=null
    }
}

class BinaryTree {  

    constructor() {
        this.root=null
    }

    createNode(val) {  
        return new Node(val)
    }

    createBinaryTree(arr, left=0, right=arr.length-1) {
        if(!arr || arr.length<1) return null
        this.root = this.buildBinaryTree(arr, left, right)
        return this.root
    }

    buildBinaryTree(arr, left, right) {

        if(left>right) return false

        let mid = left + Math.floor((right-left)/2)

        const root = this.createNode(arr[mid])
        root.left = this.buildBinaryTree(arr, left, mid-1)
        root.right = this.buildBinaryTree(arr, mid+1, right)
        
        return root
    }
}
class TreeTraversal {
    /**
     * @param {number[]} nums
     */
    // this solution is log(n) Time Complexity and log(n) space
    inOrderTraversal(root) {

        if(!root) return false
        this.inOrderTraversal(root.left)
        console.log(root.val)
        this.inOrderTraversal(root.right)
    }

    preOrderTraversal(root) {
        if(!root) return false
        console.log(root.val)
        this.inOrderTraversal(root.left)
        this.inOrderTraversal(root.right)
    }

    postOrderTraversal(root) {
        if(!root) return false
        this.inOrderTraversal(root.left)
        this.inOrderTraversal(root.right)
        console.log(root.val)
    }

    breadthFirst(root) {

        if(!root) return []

        let queue = [], level=0, levelElm = [], orderedArr =[]
        
        queue.push(root)

        while(queue.length>0) {
           
            level = queue.length

            for(let i=0; i<level; i++) {
                
                let node = queue.shift()

                if(node.val!=null) levelElm.push(node.val)
                
                if(node?.left != null) queue.push(node.left)
                if(node?.right != null) queue.push(node.right)
            }
            if(levelElm.length>0) orderedArr.push(levelElm)
            levelElm=[]
        }

        return orderedArr
    }

    rightSideView(root) {

        let levelArray = this.breadthFirst(root), rightView=[]
        
        for(let i=0; i<levelArray.length; i++) {
            let len = levelArray[i].length-1
            rightView.push(levelArray[i][len])
        }

        return rightView
    }

    rightSideViewCopied(root) {

        if (!root) return [];
        let result = [];
        let queue = [];
        queue.push(root)
        while (queue.length) {
            let values = []
            let n = queue.length;
            for (let i = 0; i < n; i++) {
                let node = queue.shift();
                if (root) {
                    if (node.left) queue.push(node.left);
                    if (node.right) queue.push(node.right);
                    values.push(node.val);
                }
            }
            console.log(values)
            result.push(values.pop());

        }
        return result;

    }
}



let inst = new BinaryTree();
let traversalInst = new TreeTraversal();
let nums = [1,2,3,4,5,6,7]
const bst = inst.createBinaryTree(nums)
//console.log('BST :', bst)
// console.log('inOrder Traversal :', traversalInst.inOrderTraversal(bst))
// console.log('preOrder Traversal :', traversalInst.preOrderTraversal(bst))
// console.log('postOrder Traversal :', traversalInst.postOrderTraversal(bst))
//console.log('Breadth First Traversal :', traversalInst.breadthFirst(bst))
let data = [2,3,4,5]
const root = inst.createBinaryTree(data)

console.log('BST :', root)
console.log('Right Side view Traversal :', traversalInst.rightSideView(root))
