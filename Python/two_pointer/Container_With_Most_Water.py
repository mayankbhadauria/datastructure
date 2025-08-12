# Container With Most Water
# You are given an integer array heights where heights[i] represents the height of the ith bar

# You may choose any two bars to form a container. Return the maximum amount of water a container can store.

def mostWater(nums:list[int]) -> list[int]:

    i=0
    j=len(nums)-1

    maxWater=0

    while i<j:

        n = min(nums[i], nums[j])
        waterContain = n * (j-i)

        if nums[i] < nums[j]:
            i += 1
        elif nums[i] > nums[j]:
            j -= 1
        else:
            i += 1
        
        maxWater = max(maxWater, waterContain)

    return maxWater
        
nums =  [2,2,2]

test1 = mostWater(nums)

print(test1)
             

       

