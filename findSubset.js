// Subsets
// Given an array nums of unique integers, return all possible subsets of nums.
// The solution set must not contain duplicate subsets. You may return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]

// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [7]

// Output: [[],[7]]

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let subset = [], curset = []
        this.helper(0, curset, subset, nums)
        return subset
    }

    helper(i, curset, subset, nums) {

        if(i >= nums.length) {
            subset.push(...curset)
            return
        }

        curset.push(nums[i])
        this.helper(i+1, curset, subset, nums)

        curset.pop()
        this.helper(i+1, curset, subset, nums)
    }
}

class Solution2 {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let subset = [], curset = []
        nums = nums.sort()
        this.helper(0, curset, subset, nums)
        return subset
    }

    helper(i, curset, subset, nums) {

        if(i >= nums.length) {
            subset.push([...curset])
            return
        }

        curset.push(nums[i])
        this.helper(i+1, curset, subset, nums)

        curset.pop()

        //Skip until you find duplicates
        while(i+1 < nums.length && nums[i]==nums[i+1]) {
            i++
        }

        this.helper(i+1, curset, subset, nums)
    }
}

let inst = new Solution();
console.log(inst.subsets([1,2,3]))
