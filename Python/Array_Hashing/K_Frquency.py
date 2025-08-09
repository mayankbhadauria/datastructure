
#Given an integer array nums and an integer k, return the k most frequent elements within the array.

#The test cases are generated such that the answer is always unique.

#Input: nums = [1,2,2,3,3,3], k = 2

#Output: [2,3]

from typing import List

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        myDic = {}
        freq = [[]] * len(nums)
        data = []

        if len(nums) ==1:
            return nums

        for n in nums:

            if n in myDic:
                myDic[n] = myDic[n]+1
            else:
                myDic[n] = 1

        print(myDic)

        for d in myDic:
            if freq[myDic[d]]:
                freq[myDic[d]].append(d)
            else:
                freq[myDic[d]] = [d]

        print(freq)

        ln = len(nums)
        index = ln-1
        
        while k!=0 and ln!=0:
            if freq[index] != 0 and len(freq[index])>0:
                temp = freq[index].pop()
                data.append(temp)
                k -=1
            if freq[index]!=0 and len(freq[index])==0:
                ln -=1
                index -=1

        print(data)

    def topKFrequentOptimal(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[] for i in range(len(nums) + 1)]

        print(freq)

        for num in nums:
            count[num] = 1 + count.get(num, 0)

        print(count)

        for num, cnt in count.items():
            freq[cnt].append(num)

        print(freq)

        res = []
        for i in range(len(freq) - 1, 0, -1):
            for num in freq[i]:
                res.append(num)
                if len(res) == k:
                    return res        
   

solution = Solution()

nums = [1,2,2,3,3,3]

k = 2

test1 = solution.topKFrequentOptimal(nums, k)

print(test1)