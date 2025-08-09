#Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

#You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

#Return the answer with the smaller index first.

from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        myDic = {}

        for index, value in enumerate(nums):
            find = target - value
            if find in myDic:
                return [myDic[find], index]
            else:
                myDic[value] = index

        return False        



# nums = [3,4,5,6], target = 7

solution = Solution()

test1 = solution.twoSum([3,4,5,6], 12)

print(test1)
