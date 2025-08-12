# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

# The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

# Example 1:

# Input: nums = [-1,0,1,2,-1,-4]

# Output: [[-1,-1,2],[-1,0,1]]

from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:

        if len(nums)<3:
            return

        sorted_nums = sorted(nums)
        sum_3 = []

        for i, n in enumerate(sorted_nums):

            j = i+1
            k = len(nums)-1

            while j<k:

                target_sum = 0 - n

                if (sorted_nums[j] + sorted_nums[k]) < target_sum:
                    j += 1
                elif (sorted_nums[j] + sorted_nums[k]) > target_sum:
                    k -= 1
                else:
                    sum_3.append( [sorted_nums[i], sorted_nums[j], sorted_nums[k] ] )
                    break

        return sum_3   


nums =  [-1,0,1,2,-1,-4]

solution = Solution()
test1 = solution.threeSum(nums)

print(test1)
             
        