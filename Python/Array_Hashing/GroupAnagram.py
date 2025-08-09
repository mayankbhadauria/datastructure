
#Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

#An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

#Example 1:

#Input: strs = ["act","pots","tops","cat","stop","hat"]

#Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

from collections import defaultdict
from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        myDic = {}
        anagram = []

        for st in strs:
            st_sort = "".join(sorted(st, key=str.lower))
            if st_sort in myDic:
                myDic.setdefault(st_sort, []).append(st)
            else:
                myDic[st_sort] = [st]

        for elm in myDic:
            anagram.append(myDic[elm])

        return anagram
    
    def groupAnagramsOptimal(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)
        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord('a')] += 1
            
            res[tuple(count)].append(s)

        return list(res.values())

    
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

strs = ["act","pots","tops","cat","stop","hat"]

#strs = ["x"]

test1 = solution.groupAnagramsOptimal(strs)

print(test1)
