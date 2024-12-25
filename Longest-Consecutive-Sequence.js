// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.
// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.
// You must write an algorithm that runs in O(n) time.

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let hashMapNums = {}
        let seqLength = 0, length = 1;
        //create hash map
        for(let i=0; i<nums.length; i++) {
            hashMapNums[nums[i]] = i;
        }

        for(let i=0; i<nums.length; i++) {
            // Now look for if an element is first element of a sequence e.g. there is no element before given number
            if(!(hashMapNums[nums[i]-1]>-1)) {
                // if an element is first element of sequence than find next elements of sequence
                while(hashMapNums[nums[i]+length]>-1) {
                    length++;
                }
            }
            if(seqLength<length) seqLength=length;
            length=1;
        }
        return seqLength;
    }
}
// Space and time complexity of this solution is O(n)
// as each element is visited only once even we have while loop inside for loop

let inst = new Solution();
console.log(inst.longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]))