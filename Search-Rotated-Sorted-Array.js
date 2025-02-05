
// You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

// [3,4,5,6,1,2] if it was rotated 4 times.
// [1,2,3,4,5,6] if it was rotated 6 times.
// Given the rotated sorted array nums and an integer target, return the index of target within nums, or -1 if it is not present.

// You may assume all elements in the sorted rotated array nums are unique,

// A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

// Example 1:
// Input: nums = [3,4,5,6,1,2], target = 1

// Output: 4
// Example 2:

// Input: nums = [3,5,6,0,1,2], target = 4

// Output: -1

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let l=0, r= nums.length-1;
        
        return this.searchHelper(nums, l, r, target)

    }

    searchHelper(nums, l, r, target) {

        if(l > r) return -1

        let mid = l + Math.floor((r-l)/2)

        if(nums[mid] == target) return mid

        // Sorted left
        if(nums[l] <= nums[mid]) {
            if((target >= nums[l] && target < nums[mid])) // and target in between sorted array
                return this.searchHelper(nums, l, mid-1, target)
            else
                return this.searchHelper(nums, mid+1, r, target) // If element is not in sorted array look into right array
        }
        else { // Assume Sorted right
             if((target > nums[mid] && target <= nums[r]))  // and target in between sorted array
                return this.searchHelper(nums, mid+1, r, target)
             else
                return this.searchHelper(nums, l, mid-1, target) // If element is not in sorted array look into right array
        }
        
    }
}


let nums = [9]
let instance = new Solution()
let index = instance.search(nums, 9)

console.log('Searched target with index : ', index)