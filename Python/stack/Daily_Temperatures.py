# Daily Temperatures
# Solved 
# You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

# Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

# Example 1:

# Input: temperatures = [30,38,30,36,35,40,28]

# Output: [1,4,1,2,1,0,0]
# Example 2:

# Input: temperatures = [22,21,20]

# Output: [0,0,0]


from typing import List


class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        
        # edge cases

        temp_len = len(temperatures)
        if temp_len <= 1:
            return [0]

        S1 = []
        S2 = []
        res = [0] * temp_len

        for i, n in enumerate(temperatures):

            if len(S1)>0:
                while S1 and n > S1[-1]:  
                    temp_index = S2[-1]
                    r = i - temp_index
                    res[temp_index] = r
                    S1.pop()
                    S2.pop()

                S1.append(n)
                S2.append(i)
                print(S1)
                
            else:
                S1.append(n)
                S2.append(i)

        return res
    
solution = Solution()

print(solution.dailyTemperatures([30,38,30,36,35,40,28]))

    