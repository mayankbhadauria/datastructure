
# Longest Substring Without Repeating Characters
# Solved 
# Given a string s, find the length of the longest substring without duplicate characters.
# A substring is a contiguous sequence of characters within a string.


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
       
        l = 0
        mySet = set()
        m = 0

        for r in range(len(s)):

            if s[r] not in mySet:
                mySet.add(s[r])
                m = max(m, r-l+1)
            else:
                while s[r] in mySet:
                    mySet.remove(s[l])
                    l+=1

                mySet.add(s[r])
                m = max(m, r-l+1)

        return m
    
solution = Solution()
s = "xyzxyz"
print(solution.lengthOfLongestSubstring(s))