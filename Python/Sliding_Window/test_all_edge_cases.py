from lengthOfLongestSubstring import Solution

def test_all_edge_cases():
    solution = Solution()
    
    print("=== COMPREHENSIVE EDGE CASE TESTING ===")
    
    test_cases = [
        # Basic edge cases
        ("", 0, "Empty string"),
        ("a", 1, "Single character"),
        ("ab", 2, "Two different chars"),
        ("aa", 1, "Two same chars"),
        
        # Repetitive patterns
        ("aaa", 1, "All same chars"),
        ("aaaa", 1, "Four same chars"),
        ("abababab", 2, "Alternating pattern"),
        ("abcabcabc", 3, "Repeating triplet"),
        
        # All unique
        ("abcdef", 6, "All different"),
        ("abcdefghijklmnopqrstuvwxyz", 26, "Full alphabet"),
        ("1234567890", 10, "All digits"),
        
        # Mixed patterns
        ("abcabcbb", 3, "Classic leetcode example"),
        ("bbbbb", 1, "All b's"),
        ("pwwkew", 3, "Mixed with duplicates"),
        ("dvdf", 3, "Complex case"),
        ("tmmzuxt", 5, "Random pattern"),
        
        # Special characters
        ("!@#$%^&*()", 10, "Special characters"),
        ("a!a", 2, "Special char between"),
        ("!!!", 1, "Repeated special"),
        
        # Numbers and letters
        ("a1b2c3", 6, "Alternating letters/numbers"),
        ("123321", 3, "Palindromic numbers"),
        ("abccba", 3, "Palindromic letters"),
        
        # Long strings with patterns
        ("abcdefghijklmnopqrstuvwxyzabcdef", 26, "Long with repeat"),
        ("aaabbbcccdddeee", 2, "Grouped repeats"),
        
        # Edge positioning
        ("abcdefga", 7, "Duplicate at end"),
        ("aabcdef", 6, "Duplicate at start"),
        ("abcadefg", 6, "Duplicate in middle"),
        
        # Whitespace and special cases
        (" ", 1, "Single space"),
        ("  ", 1, "Two spaces"),
        ("a b c", 5, "Spaces between chars"),
        ("a  b", 3, "Multiple spaces"),
        
        # Unicode (if supported)
        ("αβγαβγ", 3, "Greek letters"),
        ("🙂🙃🙂", 2, "Emojis"),
        
        # Very long repeating
        ("a" * 1000, 1, "1000 a's"),
        ("ab" * 500, 2, "500 ab's"),
        
        # Complex real-world cases
        ("programming", 7, "Real word"),
        ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 52, "Case sensitive"),
        ("HelloWorld", 10, "CamelCase"),
        ("hello world", 9, "With space"),
    ]
    
    passed = 0
    failed = 0
    
    for i, (input_str, expected, description) in enumerate(test_cases, 1):
        try:
            result = solution.lengthOfLongestSubstring(input_str)
            status = "✅ PASS" if result == expected else "❌ FAIL"
            if result != expected:
                failed += 1
                print(f"Test {i:2d}: {status} - {description}")
                print(f"         Input: '{input_str}' | Expected: {expected} | Got: {result}")
            else:
                passed += 1
                print(f"Test {i:2d}: {status} - {description}")
        except Exception as e:
            failed += 1
            print(f"Test {i:2d}: ❌ ERROR - {description}")
            print(f"         Input: '{input_str}' | Error: {e}")
    
    print(f"\n=== SUMMARY ===")
    print(f"Total Tests: {len(test_cases)}")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    print(f"Success Rate: {passed/len(test_cases)*100:.1f}%")

if __name__ == "__main__":
    test_all_edge_cases()