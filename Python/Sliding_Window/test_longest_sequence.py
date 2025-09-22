from longest_sequence import Solution

def test_longest_seq():
    solution = Solution()
    
    # Test case 1: Basic sequence
    nums1 = [1, 1, 1, 2, 2, 3, 3, 3, 3]
    result1 = solution.longest_seq(nums1)
    print(f"Test 1: {nums1} -> {result1}")
    
    # Test case 2: All same elements
    nums2 = [5, 5, 5, 5, 5]
    result2 = solution.longest_seq(nums2)
    print(f"Test 2: {nums2} -> {result2}")
    
    # Test case 3: No duplicates
    nums3 = [1, 2, 3, 4, 5]
    result3 = solution.longest_seq(nums3)
    print(f"Test 3: {nums3} -> {result3}")
    
    # Test case 4: Single element
    nums4 = [7]
    result4 = solution.longest_seq(nums4)
    print(f"Test 4: {nums4} -> {result4}")
    
    # Test case 5: Two elements same
    nums5 = [3, 3]
    result5 = solution.longest_seq(nums5)
    print(f"Test 5: {nums5} -> {result5}")

if __name__ == "__main__":
    test_longest_seq()