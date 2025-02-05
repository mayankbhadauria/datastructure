// 
// Binary Tree traversal with Iterative way 
// InOrder Traversal, Post Order Traversal, Pre Order Traversal
//

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    findKth(nums, k) {

        let l = 0, r=nums.length-1, find=-1

        while(l<=r) {

            let mid = l+Math.floor((r-l)/2)
            
            if(nums[mid] == k) { find = mid; break }

            if(k > nums[mid]) {
                l = mid+1
            }
            else {
                r = mid-1
            }
        }

        return find
    }

    preOrder(root) {
        if(!root) return []

        let stack=[], res=[]
        
        stack.push(root)

        while(stack.length > 0) {

            let node = stack.pop()

            res.push(node.val)

            if(node.right) stack.push(node.right)
            
            if(node.left) stack.push(node.left)    

        }

        return res
    }

    postOrder(root) {

        if (!root) return [];
        
        let stack = [];
        let result = [];
        let current = root;
        let lastVisited = null, peek
        
        while (current || stack.length > 0) {
            
            while(current) {
                stack.push(current)
                current = current.left
            }

            if(stack.length)
                peek = stack[stack.length-1]

            if(peek.right && lastVisited != peek.right) {
                current = peek.right
            }
            else {
                lastVisited = stack.pop()
                result.push(lastVisited.val)
            }
           
        }
        return result;
    }

    inOrder(root) {
        if (!root) return [];

        let cur=root, stack=[], result=[]

        while(cur || stack.length) {

            while(cur) {
                stack.push(cur)
                cur = cur.left
            }

            let node = stack.pop()
            result.push(node.val)

            if(node.right) {
                cur = node.right
            }
        }

        return result
    }
}

let inst = new Solution();
let nums = [1]
//console.log(inst.findMin(nums, 0, nums.length-1))

console.log(inst.findKth(nums, 1))