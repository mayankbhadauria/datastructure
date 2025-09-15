# You are given an m x n 2-D integer array matrix and an integer target.

# Each row in matrix is sorted in non-decreasing order.
# The first integer of every row is greater than the last integer of the previous row.
# Return true if target exists within matrix or false otherwise.

# Can you write a solution that runs in O(log(m * n)) time?

from typing import List

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        
        R, C = len(matrix), len(matrix[0])
        ROW = -1

        for i in range(R):
            
            if matrix[i][0] <= target <= matrix[i][-1]:
                ROW = i
                break

        if ROW < 0:
            return False
        
        l = 0
        r = C-1

        while l <= r:

            mid = l + (r-l)//2

            if target < matrix[ROW][mid]:
                r = mid-1
            elif target > matrix[ROW][mid]:
                l = mid+1
            elif target == matrix[ROW][mid]:
                return True

        return False


solution = Solution()
matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]] 
target = 0
print(solution.searchMatrix(matrix, target))
