from lengthOfLongestSubstring import Solution

def test_longest_substring():
    solution = Solution()
    
    print("=== TESTING LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS ===")
    
    # Test 1: Empty string
    s1 = ""
    result1 = solution.lengthOfLongestSubstring(s1)
    expected1 = 0
    print(f"Test 1 - Empty: '{s1}' -> Expected: {expected1}, Got: {result1}, {'✅' if result1 == expected1 else '❌'}")
    
    # Test 2: Single character
    s2 = "a"
    result2 = solution.lengthOfLongestSubstring(s2)
    expected2 = 1
    print(f"Test 2 - Single: '{s2}' -> Expected: {expected2}, Got: {result2}, {'✅' if result2 == expected2 else '❌'}")
    
    # Test 3: All same characters
    s3 = "aaaa"
    result3 = solution.lengthOfLongestSubstring(s3)
    expected3 = 1
    print(f"Test 3 - All same: '{s3}' -> Expected: {expected3}, Got: {result3}, {'✅' if result3 == expected3 else '❌'}")
    
    # Test 4: All different characters
    s4 = "abcdef"
    result4 = solution.lengthOfLongestSubstring(s4)
    expected4 = 6
    print(f"Test 4 - All different: '{s4}' -> Expected: {expected4}, Got: {result4}, {'✅' if result4 == expected4 else '❌'}")
    
    # Test 5: Classic example
    s5 = "abcabcbb"
    result5 = solution.lengthOfLongestSubstring(s5)
    expected5 = 3  # "abc"
    print(f"Test 5 - Classic: '{s5}' -> Expected: {expected5}, Got: {result5}, {'✅' if result5 == expected5 else '❌'}")
    
    # Test 6: Another classic
    s6 = "bbbbb"
    result6 = solution.lengthOfLongestSubstring(s6)
    expected6 = 1
    print(f"Test 6 - Repeating: '{s6}' -> Expected: {expected6}, Got: {result6}, {'✅' if result6 == expected6 else '❌'}")
    
    # Test 7: Mixed pattern
    s7 = "pwwkew"
    result7 = solution.lengthOfLongestSubstring(s7)
    expected7 = 3  # "wke"
    print(f"Test 7 - Mixed: '{s7}' -> Expected: {expected7}, Got: {result7}, {'✅' if result7 == expected7 else '❌'}")
    
    # Test 8: Two characters different
    s8 = "ab"
    result8 = solution.lengthOfLongestSubstring(s8)
    expected8 = 2
    print(f"Test 8 - Two diff: '{s8}' -> Expected: {expected8}, Got: {result8}, {'✅' if result8 == expected8 else '❌'}")
    
    # Test 9: Two characters same
    s9 = "aa"
    result9 = solution.lengthOfLongestSubstring(s9)
    expected9 = 1
    print(f"Test 9 - Two same: '{s9}' -> Expected: {expected9}, Got: {result9}, {'✅' if result9 == expected9 else '❌'}")
    
    # Test 10: Longest at end
    s10 = "abba"
    result10 = solution.lengthOfLongestSubstring(s10)
    expected10 = 2  # "ab" or "ba"
    print(f"Test 10 - End pattern: '{s10}' -> Expected: {expected10}, Got: {result10}, {'✅' if result10 == expected10 else '❌'}")
    
    # Test 11: Longest at beginning
    s11 = "abcabc"
    result11 = solution.lengthOfLongestSubstring(s11)
    expected11 = 3  # "abc"
    print(f"Test 11 - Begin pattern: '{s11}' -> Expected: {expected11}, Got: {result11}, {'✅' if result11 == expected11 else '❌'}")
    
    # Test 12: Complex case
    s12 = "dvdf"
    result12 = solution.lengthOfLongestSubstring(s12)
    expected12 = 3  # "vdf"
    print(f"Test 12 - Complex: '{s12}' -> Expected: {expected12}, Got: {result12}, {'✅' if result12 == expected12 else '❌'}")

if __name__ == "__main__":
    test_longest_substring()