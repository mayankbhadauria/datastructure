#find longest sequence 


from typing import List

class Solution:
    def longest_seq(self, num: List[int]) -> int:

        if len(num) < 1:
            return 0

        l, r = 0, 1
        s=1
        ls=1

        while r < len(num):

            if num[l] == num[r]:
                s+=1
                ls = max(s, ls)
            else:
                l=r
                s=1
            
            r+=1

        return ls
    
solution = Solution()
num = [7, 7, 7, 7, 1, 2, 3]
print(solution.longest_seq(num))