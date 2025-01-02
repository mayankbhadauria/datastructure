
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

// The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]

// Output: [[-1,-1,2],[-1,0,1]]


class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        let threeSum = []
        nums = nums.sort((a,b)=> a-b)
        let j = nums.length-1

        for(let i=0; i<nums.length; i++) {

            if(i > 0 && nums[i] == nums[i-1]) continue;
            
            let
            left = i+1,
            right = nums.length-1,
            target = - nums[i]

            while(left < right) {

                if(nums[left] + nums[right] == target) {
                    threeSum.push([nums[i], nums[left], nums[right]])
                    while(nums[left-1]==nums[left] && left<right) left++
                    while(nums[right-1]==nums[right] && left<right) right--
                }

                else if((nums[left] + nums[right]) > target) right--
                else left++

                console.log(threeSum, left, right)

            }
        }
        return threeSum
    }
    
}

let inst = new Solution();
console.log(inst.threeSum([-1, -1, 0, 0, 1, 2]))


