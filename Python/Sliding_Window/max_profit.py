
from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        l, r = 0 , 1
        lim = len(prices)
        mx = 0

        while r<lim:
            
            profit = prices[r] - prices[l]

            if profit > mx:
                mx = profit
            if prices[r] < prices[l]:
                l = r

            r +=1

        return mx   

solution = Solution()
prices = [7,1,5,3,6,4]
print(solution.maxProfit(prices))