
# The destination is at position target miles.

# A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.

# A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.

# If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.

# Return the number of different car fleets that will arrive at the destination.

from typing import List


class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        
        pos_sort = position
        pos_len = len(position)

        i = 0
        myDic = {}
        time = []
        fleet = 0

        for i, n in enumerate(position):
            myDic[n] = speed[i]

        pos_sort.sort(reverse=True)

        for i in range(pos_len):
            dis = target - pos_sort[i]
            sp = myDic[pos_sort[i]]
            time.append(int(dis/sp))

        time.reverse()
        top = time.pop()
        fleet = 1
      
        for n in range(pos_len-1):

            if top >= time[-1]:
                time.pop()
            else:
                fleet += 1
                top = time.pop()

        return fleet


    
solution = Solution()

target = 10 
position = [0,4,2]
speed=[2,1,3]

print(solution.carFleet(target, position, speed))