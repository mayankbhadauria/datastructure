// Given a binary tree, return true if it is height-balanced and false otherwise.

// A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    dfs(root) {
        if (!root) {
            return [1, 0];
        }

        const left = this.dfs(root.left);
        const right = this.dfs(root.right);

        const balanced =
            left[0] === 1 &&
            right[0] === 1 &&
            Math.abs(left[1] - right[1]) <= 1;
            
        const height = 1 + Math.max(left[1], right[1]);

        return [balanced ? 1 : 0, height];
    }
}


let inst = new Solution();

console.log(inst.isBalanced([]))