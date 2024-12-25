//**
// Products of Array Except Self
// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in O(n)
// O(n) time without using the division operation?
//
// **//

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
        productExceptSelf(nums) {

            var product = 1;
            var countZero = 0;
            var productArray = []

            for(let i=0; i<nums.length; i++) {
                if(nums[i]!==0) {
                    product = product*nums[i]
                }
                else {
                    countZero+=1;
                    continue;
                }
            }

            for(let i=0; i<nums.length; i++) {

                if(countZero==0) { // No zero in array
                    productArray.push(product/nums[i])
                }
                else if(countZero>0) { //There is atleast one zero in array

                    //When there is only zero in nums array
                    if(countZero==1 && nums[i]!=0) {
                        productArray.push(0)
                    }
                    else if(countZero==1 && nums[i]==0) {
                        productArray.push(product)
                    }
                    //When there is only zero in nums array
                    if(countZero>1) {
                        productArray.push(0)
                    }
                }
            }

            return productArray;
        }
}

let inst = new Solution();

inst.productExceptSelf([-1,0,1,2,3]);