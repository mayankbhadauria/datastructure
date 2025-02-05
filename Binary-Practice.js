
//

class Node {
    constructor(val) {
        this.val=val
        this.left=null
        this.right=null
    }
}

class BinaryTree {

    buildBinaryTree(arr, left, right) {

        if(left>right) return null

        let mid = left + Math.floor((right-left)/2)

        let node = new Node(arr[mid])
        node.left = this.buildBinaryTree(arr, left, mid-1)
        node.right = this.buildBinaryTree(arr, mid+1, right)
        return node
    }
    // Is Given tree is Binary search Tree ?
    // In this approach we are traversing tree from left to right in Order
    // keep adding node in array , At the end array must be sorted for given tree to be BST
    // Time: O(n) Space: O(n) -- O(n) + O(h) = O(n) --> height of tree , Best Case: if tree is balance log(n) if not balance O(n)
    isBinartSearctTree(root) {
        if(!root) return true
        let listOfElm = this.inOrderTraversal(root)

        for(let i=0; i<listOfElm.length-1; i++) {
            if(listOfElm[i+1]<listOfElm[i]) return false
        }
        return true
    }

    inOrderTraversal(root, sortASC=[]) {

        if(root==null) return

        if(root.left) this.inOrderTraversal(root.left, sortASC)
        sortASC.push(root.val)
        if(root.right) this.inOrderTraversal(root.right, sortASC)
        return sortASC
    }
    // Q If given tree is Binary Search Tree or Not ?
    // this approach involves look left to right min to max element 
    // root.left < root.val < root.left
    // and this should be true for all subtree not just each node
    // Time: O(n) Space: O(h) -- height of tree , Best Case: if tree is balance log(n) if not balance O(n)
    isBST(root, min=Number.NEGATIVE_INFINITY, max=Number.POSITIVE_INFINITY) {
        
        if(!root) return true

        // check range min and max
        if(root.val < min || root.val > max) return false

        // Start from left to right
        return this.isBST(root.left, min, root.val) && this.isBST(root.right, root.val, max)
    }

    // Search Binary Search Tree , Third Attempt 
    // FAILED
    // 1) Missed return statement
    // 2) Just searching left and Right with checking if val is less  


    searchBST(root, target) {
        if(!root) return false

        if(root.val == target) return true
        else if(root.val > target) this.searchBST(root.left, target)
        else if(root.val < target) this.searchBST(root.right, target)
        else return false    
    }

    insertBST(root, target) {
        if(!root) return new Node(target)
        
        if(root.val > target) root.left = this.insertBST(root.left, target)
        else root.right = this.insertBST(root.right, target)

        return root
    }

    deleteNode(root, target) {
        let node = this.findNode(root, target)
        console.log('Find node: ', node)
        let minNode 

        if(node.left || node.right) { // At-least has one child 

            if(node.val >= root.val) { // find smallest in right sub tree
                minNode = this.findMin(node.right)
            }
            else { // find smallest in left sub tree
                minNode = this.findMin(root.left)
            }

            console.log('minNode :', minNode)

            node.val = minNode
            minNode = null

            console.log(root)
        }
        else { // No Child 
            node.val=null
        }
    }

    findMin(node) {
        
        if(node.left == null) return node

        return this.findMin(node.left)

    }

    findNode(root, target) {
        if(!root) return false

        if(root.val == target) return root
        else if(root.val > target) return this.findNode(root.left, target)
            else return this.findNode(root.right, target)
    }

    preOrderTraversal(root, preOrderArr=[]) {

        if(!root) preOrderArr

        preOrderArr.push(root.val)
        if(root.left) this.preOrderTraversal(root.left, preOrderArr)
        if(root.right) this.preOrderTraversal(root.right, preOrderArr)
        return preOrderArr
    }

}


let arr = [1,2,3,4,5,6,7,8,9]
let instance = new BinaryTree()
let bst = instance.buildBinaryTree(arr, 0, arr.length-1)
//console.log(bst)
//console.log(instance.isBinartSearctTree(bst))

//console.log(instance.searchBST(bst, 7))

console.log('pre Order', instance.preOrderTraversal(bst))

console.log('In Order',instance.inOrderTraversal(bst))

