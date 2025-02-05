// Construct Binary Tree from Preorder and Inorder Traversal
// You are given two integer arrays preorder and inorder.

// preorder is the preorder traversal of a binary tree
// inorder is the inorder traversal of the same tree
// Both arrays are of the same size and consist of unique values.
// Rebuild the binary tree from the preorder and inorder traversals and return its root.

inOrder (root) {

 //
 // visit root left
 // visit root
 // visit root right

}

preOrder (root) {

    // visit root
    // visit root left
    // visit root right
}

function initiateTree(inOrd, preOrd) {
    if(inOrd.length<=1) return inOrd
    // Create main root node from first elem of pre Order array
    
    let mid = inOrd.indexOf(preOrd[0])

    let left=0, right=inOrd.length-1

    let root = new Node(mid)
    root.left = this.buildTree(inOrd, left, mid-1)
    root.right = this.buildTree(inOrd, mid+1, right)
    
    return root
}

function buildBinaryTree(arr, left=0, right=arr.length-1, mainRoot=null) {

    let mid = Number.POSITIVE_INFINITY

    if(mainRoot!=null) {
        mid = mainRoot

    } else {
        mid = left+Math.floor((right-left)/2)
    }

    let node = new Node(arr[mid])
    
    node.left = buildBinaryTree(arr, left, mid-1, null)
    node.right = buildBinaryTree(arr, mid+1, right, null)
    return root

}
