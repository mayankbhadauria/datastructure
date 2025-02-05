// Date: 5th Jan 2025

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

}

class BinaryTreeTraversal {

    bfs(root) {

        if(!root) return false

        let queue = [], level=0, rightView=[]

        queue.push(root)

        while(queue.length>0) {

            level = queue.length
            let levelCollection=[]

            for(let i=0; i<level; i++) {
                
                let node = queue.shift()
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
                levelCollection.push(node.val)

            }
            if(levelCollection.length>0) rightView.push(levelCollection.pop())

        }
        return rightView
    }

    breadthFirstSearch(root) {
        if(!root) return []

        let q = [], res=[]
        q.push(root)

        while(q.length) {
            let node = q.shift()
            if(node.val) res.push(node.val)
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }

        return res
    }

    levelOrderBreadthFirstSearch(root) {
        if(!root) return 0

        let q = [], height=0

        q.push(root)

        while(q.length) {

            let level = q.length

            while(level>0) {

                let node = q.shift()
                if(node.left) q.push(node.left)
                if(node.right) q.push(node.right)

                level--
            }
            height++
        }
        return height
        
    }

    findLongestPath(root) {

        if(!root) return []

        let stack=[], cur = root, lv=null, res = [], max = 0 , path=0

        cur = root

        while(cur || stack.length) {

            while(cur) {
                path++
                stack.push(cur)
                cur = cur.left
            }

            let peek = stack[stack.length - 1]

            if(peek.right && lv !== peek.right) {
                path++
                cur = peek.right
            }
            else {
                let node = stack.pop()
                max = Math.max(max, path)
                res.push(node.val)
                lv = node
            }
        }

        return max
    }

}

// let arr = [1,2,3,4,5,6,7,8,9]
// let instance = new BinaryTree()
// console.log(instance.buildBinaryTree(arr, 0, arr.length-1))

let arr = [2,3,4,5]
let inst = new BinaryTree()
const root = inst.buildBinaryTree(arr, 0, arr.length-1)

//console.log('BST :', root)
let instTrav = new BinaryTreeTraversal()
console.log('Right Side view Traversal :', instTrav.bfs(root))

