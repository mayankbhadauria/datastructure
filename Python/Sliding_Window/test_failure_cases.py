from longest_sequence import Solution

def test_failure_cases():
    solution = Solution()
    
    print("=== FAILURE CASES ===")
    
    # Case 1: Longest sequence at the end
    nums1 = [1, 2, 2, 2, 2]
    result1 = solution.longest_seq(nums1)
    expected1 = 4
    print(f"Case 1: {nums1}")
    print(f"Expected: {expected1}, Got: {result1}, {'✅ PASS' if result1 == expected1 else '❌ FAIL'}")
    
    # Case 2: Multiple sequences, longest in middle
    nums2 = [1, 1, 3, 3, 3, 3, 3, 2, 2]
    result2 = solution.longest_seq(nums2)
    expected2 = 5
    print(f"Case 2: {nums2}")
    print(f"Expected: {expected2}, Got: {result2}, {'✅ PASS' if result2 == expected2 else '❌ FAIL'}")
    
    # Case 3: Longest sequence at beginning
    nums3 = [7, 7, 7, 7, 1, 2, 3]
    result3 = solution.longest_seq(nums3)
    expected3 = 4
    print(f"Case 3: {nums3}")
    print(f"Expected: {expected3}, Got: {result3}, {'✅ PASS' if result3 == expected3 else '❌ FAIL'}")
    
    # Case 4: Empty array (edge case)
    try:
        nums4 = []
        result4 = solution.longest_seq(nums4)
        expected4 = 0
        print(f"Case 4: {nums4}")
        print(f"Expected: {expected4}, Got: {result4}, {'✅ PASS' if result4 == expected4 else '❌ FAIL'}")
    except:
        print("Case 4: [] -> ❌ CRASHES")
    
    # Case 5: Two element array with different elements
    nums5 = [1, 2]
    result5 = solution.longest_seq(nums5)
    expected5 = 1
    print(f"Case 5: {nums5}")
    print(f"Expected: {expected5}, Got: {result5}, {'✅ PASS' if result5 == expected5 else '❌ FAIL'}")

if __name__ == "__main__":
    test_failure_cases()