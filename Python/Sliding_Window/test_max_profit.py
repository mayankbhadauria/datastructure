from max_profit import Solution

def test_max_profit():
    solution = Solution()
    
    print("=== TESTING MAX PROFIT ===")
    
    # Example 1: Expected output 6
    prices1 = [10,1,5,6,7,1]
    result1 = solution.maxProfit(prices1)
    expected1 = 6
    print(f"Test 1: {prices1}")
    print(f"Expected: {expected1}, Got: {result1}, {'✅ PASS' if result1 == expected1 else '❌ FAIL'}")
    
    # Example 2: Expected output 0
    prices2 = [10,8,7,5,2]
    result2 = solution.maxProfit(prices2)
    expected2 = 0
    print(f"Test 2: {prices2}")
    print(f"Expected: {expected2}, Got: {result2}, {'✅ PASS' if result2 == expected2 else '❌ FAIL'}")
    
    # Edge case: Single element
    prices3 = [10]
    result3 = solution.maxProfit(prices3)
    expected3 = 0
    print(f"Test 3: {prices3}")
    print(f"Expected: {expected3}, Got: {result3}, {'✅ PASS' if result3 == expected3 else '❌ FAIL'}")
    
    # Edge case: Empty array
    prices4 = []
    result4 = solution.maxProfit(prices4)
    expected4 = 0
    print(f"Test 4: {prices4}")
    print(f"Expected: {expected4}, Got: {result4}, {'✅ PASS' if result4 == expected4 else '❌ FAIL'}")
    
    # Edge case: Two elements - profit possible
    prices5 = [1, 5]
    result5 = solution.maxProfit(prices5)
    expected5 = 4
    print(f"Test 5: {prices5}")
    print(f"Expected: {expected5}, Got: {result5}, {'✅ PASS' if result5 == expected5 else '❌ FAIL'}")
    
    # Edge case: Two elements - no profit
    prices6 = [5, 1]
    result6 = solution.maxProfit(prices6)
    expected6 = 0
    print(f"Test 6: {prices6}")
    print(f"Expected: {expected6}, Got: {result6}, {'✅ PASS' if result6 == expected6 else '❌ FAIL'}")

if __name__ == "__main__":
    test_max_profit()