// Given an array of integers numbers that is sorted in non-decreasing order.

// Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

// There will always be exactly one valid solution.

// Your solution must use


class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {


        let i=0, j=numbers.length-1, a=numbers

        while(i<j) {

            if(a[j] < (target-a[i])) i++

            if(a[j] > (target-a[i])) j--
            
            if(a[j] == (target-a[i])) return [i+1,j+1]
        }

        return []
    }
}

let
numbers=[2,3,4]
target=9

let inst = new Solution();
console.log(inst.twoSum(numbers, target))

// Size of solution doesn't reflect journey 
// I struggled understanding words like 1-Indexed array

