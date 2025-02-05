// You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

// Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

// Your solution must run in O(logn) time.

// Example 1:

// Input: nums = [-1,0,2,4,6,8], target = 4
// Output: 3

// Example 2:
// Input: nums = [-1,0,2,4,6,8], target = 3

// Output: -1

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    // this solution is log(n) Time Complexity and log(n) space
    search(nums, target, left = 0, right = nums.length-1) {

        if(left > right) return -1

        let mid = left + Math.floor((right - left)/2)

        if(target == nums[mid]) return mid

        return (target > nums[mid])? this.search(nums, target, mid+1, right) :
            this.search(nums, target, left, mid-1)
        
    }

    searchWithLoop(nums, target) {
        
        let left = 0, right = nums.length-1

        while(left <= right) {
            let mid = left + Math.floor((right-left)/2)

            if(target > nums[mid]) {
                left = mid+1
            }
            if(target < nums[mid]) {
                right = mid-1
            }
            else {
                console.log(nums[mid])
                return mid 
            }
        }

        return false

    }
}

let inst = new Solution();
let nums = [-1,0,2,4,6,8], target = 0
console.log('Search :', inst.search(nums, target))
console.log('Search with loop :', inst.searchWithLoop(nums, target))











//  if (node.val <= min || node.val >= max) {


isBinarySearchTree(root) {
    // Helper function that checks if node's value is within valid range
    function isValidBST(node, min, max) {
        // Empty node is valid
        if (!node) return true;
        
        // Check if current node's value is within valid range
        if (node.val <= min || node.val >= max) {
            return false;
        }
        
        // Recursively check left and right subtrees
        // Left subtree values must be less than current node's value
        // Right subtree values must be greater than current node's value
        return isValidBST(node.left, min, node.val) && 
               isValidBST(node.right, node.val, max);
    }
    
    return isValidBST(root, -Infinity, Infinity);
}

