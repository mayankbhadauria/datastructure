

class TreeNode {

    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }

}

class BinarySearchAlgo {

    insert(root, node) {
        
        if(root===null)
            root = new TreeNode(node)

        if(root.val > val)
            root.left = this.insert(root.left, val)

        if(root.val < node.val) 
            root.right = this.insert(root.right, val)

        return root
    }

    findMin(root) {

        let curr = root
        while(curr != null && curr.left != null) {
            curr = curr.left    
        }
        return curr
    }

    delete(root, val) {

        if(root == null) return root

        if(root.val < val) {
            root.right = this.delete(root.right, val)
        }
        else if(root.val > val) {
            root.left = this.delete(root.left, val)
        }
        else {
            if(root.left == null) return root.right
        else if(root.right == null) return root.left
        else {
            let min = this.findMin(root.right)
            root.val = min.val
            root.right = this.delete(root.right, min.val)
        }
        } 

        return root
    }
}