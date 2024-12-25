// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Test 1
// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]

// Test 2
// Input: nums = [7,7], k = 1

// Output: [7]

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let HashmapFrequency = {};
        let numsLength = nums.length;
        let bucket = {}
        let mostFrequent = []

        //Create a frequency with Hashmap
        for(var i=0; i<nums.length; i++) {
            if(HashmapFrequency[nums[i]]) {
                HashmapFrequency[nums[i]] = HashmapFrequency[nums[i]]+1
            }
            else {
                HashmapFrequency[nums[i]] = 1
            }
        }

        //Above you can also write 
        // HashmapFrequency[nums[i]] = (HashmapFrequency[nums[i]] || 0) + 1

        // Create empty buckets 
        // Consider creating frequency as Index of hashMap
        for(let i=1; i<numsLength+1; i++) {
            bucket[i] = []
        }


        for (const [key, value] of Object.entries(HashmapFrequency)) {
            bucket[value].push(key)
        }

        console.log(bucket)

        for(let i=numsLength; i>0; i--) {
            if(bucket[i].length>0) {
                mostFrequent.push(...bucket[i]) 
            }

            if(mostFrequent.length==k) break;
        }
        
        console.log(mostFrequent);

        return mostFrequent

    }
}

let inst = new Solution();

console.log(inst.topKFrequent([7,7],2));