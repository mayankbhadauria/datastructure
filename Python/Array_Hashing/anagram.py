#Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

#An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        myDic = {}

        for st in s:
            if st in myDic:
                myDic[st] = myDic[st]+1
            else:
                myDic[st] = 1
        
        for tr in t:
            if tr in myDic:
                if myDic[tr] > 1:
                    myDic[tr] = myDic[tr]-1
                else:
                    myDic.pop(tr)
            else:
                return False
            
        if len(myDic):
            return False
        
        return True

solution = Solution()

result1 = solution.isAnagram("racecar", "carrace")

result2 = solution.isAnagram("jar", "jam")   

print(result2)