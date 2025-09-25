from max_profit import Solution

def test_specific_case():
    solution = Solution()
    
    # Manual calculation for [7,1,5,3,6,4]
    prices = [7,1,5,3,6,4]
    result = solution.maxProfit(prices)
    
    print(f"Input: {prices}")
    print(f"Result: {result}")
    
    # Manual verification:
    # Buy at 1 (index 1), sell at 6 (index 4) = profit 5
    # Buy at 1 (index 1), sell at 5 (index 2) = profit 4  
    # Buy at 3 (index 3), sell at 6 (index 4) = profit 3
    # Buy at 3 (index 3), sell at 4 (index 5) = profit 1
    
    print("\nPossible transactions:")
    print("Buy at 1, sell at 5: profit = 4")
    print("Buy at 1, sell at 6: profit = 5")
    print("Buy at 3, sell at 6: profit = 3") 
    print("Buy at 3, sell at 4: profit = 1")
    print("\nMaximum profit should be: 5")
    print(f"Your algorithm got: {result}")
    print(f"{'✅ CORRECT' if result == 5 else '❌ INCORRECT'}")

if __name__ == "__main__":
    test_specific_case()