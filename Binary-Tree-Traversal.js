

// 

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
}

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

let inst = new BinaryTree();
let traversalInst = new TreeTraversal();
let nums = [1,2,3,4,5,6,7,8,9]
const bst = inst.createBinaryTree(nums)
//console.log('BST :', bst)
console.log('inOrder Traversal :', traversalInst.inOrderTraversal(bst))
console.log('preOrder Traversal :', traversalInst.preOrderTraversal(bst))
console.log('postOrder Traversal :', traversalInst.postOrderTraversal(bst))

