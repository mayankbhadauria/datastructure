

#Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

#Please implement encode and decode

#Input: ["neet","code","love","you"]

#Output:["neet","code","love","you"]

from typing import List

class Solution:

    def encode(self, strs: List[str]) -> str:

        parts = []
        newStr = ''

        for n in strs:
            ln = len(n)
            formatLn= self.formatNum(ln)
            parts.append(formatLn+n)

        return ''.join(parts)

    def formatNum(self, num: int) -> str:
        if num < 10:
            return '00'+ str(num)
        if num < 100 and num >=10:
            return '0'+str(num)
        else:
            return str(num)

    def decode(self, s: str) -> List[str]:

        if len(s) == 0:
            return []
        
        fix=3
        sts=0
        ste=0
        stl=0
        newAr=[]

        while ste <len(s):
            stl= int(s[sts:sts+fix])
            ste= sts+fix+stl
            sts= sts+fix
            subStr = s[sts:ste]
            newAr.append(subStr)
            sts=ste

        return newAr
          

solution = Solution()

strs = ["neet","code","love","you"]

test1 = solution.encode(strs)

#test1 = solution.decode("004neet004code004love003you")

print(test1)
