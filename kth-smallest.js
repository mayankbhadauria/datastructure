// . Kth Smallest Element in a BST
//Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

class TreeNode {

    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }

}

class buildBinaryTree {

    bst(list, l, r) {

        if(r<1) return []

        if(l>r) return null

        let mid = l + Math.floor((r-l)/2)

        let root = new TreeNode(list[mid])
        root.left = this.bst(list, l, mid-1)
        root.right = this.bst(list, mid+1, r) 
        
        return root
    }

    inOrderTraversal(root, inOrd=[]) {
        if(!root) return null

        this.inOrderTraversal(root.left, inOrd)
        inOrd.push(root.val)
        this.inOrderTraversal(root.right, inOrd)

        return inOrd
    }

    findKthSmall(list, k) {

        let kth = null
        let bst = this.bst(list, 0, list.length-1)
        let inOrd = this.inOrderTraversal(bst)

        for(let i=0; i<=k-1; i++) {
            kth = inOrd[i]
        }

        return kth
    }

    findKthSmallV01() {

        

    }    

}

let arr = [1,2,3,4,5,6,7,8,9]

let instance = new buildBinaryTree()

let bst = instance.findKthSmall(arr, 1)

console.log('kth smallest', bst)
