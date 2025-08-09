'''
Products of Array Except Self
Solved 
Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

Each product is guaranteed to fit in a 32-bit integer.

Follow-up: Could you solve it in 
O(n) time without using the division operation?

Input: nums = [1,2,4,6]

Output: [48,24,12,8]
'''

from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        ln = len(nums)
        sf=[]*ln
        pf=[]
        psf=1
        ppf=1
        fp=[]

        for i, n in enumerate(nums):
            pf.append(ppf)
            ppf = ppf*n   

        for i, n in enumerate(nums[::-1]):
            sf.insert(0, psf)
            psf = psf*n

        for i in range(ln):
            nums[i].append(pf[i]*sf[i])

        return nums



solution = Solution()

strs = [-1,0,1,2,3]

test1 = solution.productExceptSelf(strs)

print(test1)

