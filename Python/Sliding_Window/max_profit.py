
from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:

       

        l, r = 0 , 1
        lim = len(prices)
        mx = 0

        if lim < 1:
            return mx 
        
        while r<lim:
            
            profit = prices[r] - prices[l]

            if profit > mx:
                mx = profit
            else:
                l = r

            r +=1

        return mx   

solution = Solution()
prices = [10]
print(solution.maxProfit(prices))