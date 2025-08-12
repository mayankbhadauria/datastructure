
# // Given an array of integers numbers that is sorted in non-decreasing order.

# // Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

# // There will always be exactly one valid solution.

# // Your solution must use O(1)
# // O(1) additional space.

# // Example 1:

# // Input: numbers = [1,2,3,4], target = 3

# // Output: [1,2]

from typing import List

class Solution:
    # this is T : O(n) and S : O(n) -- yo can do better with two pointers 
    def twoSum(self, numbers: List[int], target: int) -> List[int]:

        myDic = {}
       
        for i, n in enumerate(numbers):

            f = myDic.get(target-n, -1)    
            if f < 0:
                myDic[n] = i
            else:
                return [f+1, i+1]
            

s = [1,2,3,4]
target = 3

solution = Solution()
test1 = solution.twoSum(s, 3)

print(test1)
                


        
        
