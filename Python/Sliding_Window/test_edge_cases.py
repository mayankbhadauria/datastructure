from longest_sequence import Solution

def test_edge_cases():
    solution = Solution()
    
    print("=== CRITICAL FAILURE CASES ===")
    
    # Case 1: Array with length 1 but r starts at 1
    try:
        nums1 = [5]
        result1 = solution.longest_seq(nums1)
        print(f"Single element [5]: Got {result1}")
    except IndexError as e:
        print(f"Single element [5]: ❌ INDEX ERROR - {e}")
    
    # Case 2: Empty array
    try:
        nums2 = []
        result2 = solution.longest_seq(nums2)
        print(f"Empty array []: Got {result2}")
    except IndexError as e:
        print(f"Empty array []: ❌ INDEX ERROR - {e}")
    
    # Case 3: Sequence ending exactly at array end
    nums3 = [1, 5, 5, 5]
    result3 = solution.longest_seq(nums3)
    expected3 = 3
    print(f"End sequence [1,5,5,5]: Expected {expected3}, Got {result3}")
    
    # Case 4: All different elements
    nums4 = [1, 2, 3, 4, 5, 6]
    result4 = solution.longest_seq(nums4)
    expected4 = 1
    print(f"All different: Expected {expected4}, Got {result4}")

if __name__ == "__main__":
    test_edge_cases()