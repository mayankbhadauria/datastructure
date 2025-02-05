

// You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

// [3,4,5,6,1,2] if it was rotated 4 times.
// [1,2,3,4,5,6] if it was rotated 6 times.
// Notice that rotating the array 4 times moves the last four elements of the array to the beginning. Rotating the array 6 times produces the original array.

// Assuming all elements in the rotated sorted array nums are unique, return the minimum element of this array.

// A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

// Example 1:

// Input: nums = [3,4,5,6,1,2]

// Output: 1
// Example 2:

// Input: nums = [4,5,0,1,2,3]

// Output: 0
// Example 3:

// Input: nums = [4,5,6,7]

// Output: 4


class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        
        if(nums.length<2) return nums[0]
        
        let l = 0, r = nums.length-1
        let mid = l+Math.floor((r-l)/2)

        if(nums[mid] >= nums[l] && nums[mid] <= nums[r])//if nums is sorted and no rotation
            return nums[l] // Array is already sorted return left most element
        else 
            return this.findMinHelper(nums, l, r)
    }

    findMinHelper(nums, l, r, min=Number.POSITIVE_INFINITY) {

        if(l > r) return min
        
        let mid = l+Math.floor((r-l)/2)
        min = Math.min(min, nums[mid])

        if(nums[mid] >= nums[l]) { // If left is sorted
            min = Math.min(min, nums[l])
            return this.findMinHelper(nums, mid+1, r, min)// Look into right sub array
        }
        else {
            return this.findMinHelper(nums, l, mid, min)// Look into left sub array
        }

    }

}

let inst = new Solution();
let nums = [0]
console.log(inst.findMin(nums))
