# You are given an integer n. Return all well-formed parentheses strings that you can generate with n pairs of parentheses.

# Example 1:
# Input: n = 1
# Output: ["()"]

# Example 2:
# Input: n = 2  
# Output: ["(())", "()()"]

from typing import List

class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        stack = []
        res = []
        self.step = 0
        
        def backtrack(openN, closedN, depth=0):
            self.step += 1
            indent = "  " * depth
            current = "".join(stack)
            
            print(f"{indent}Step {self.step}: stack='{current}', open={openN}, closed={closedN}")
            
            # Base case: found valid combination
            if openN == closedN == n:
                res.append("".join(stack))
                print(f"{indent}✓ Found valid: '{current}' -> Added to results")
                return

            # Try adding opening parenthesis
            if openN < n:
                print(f"{indent}→ Try adding '(' (open will be {openN + 1})")
                stack.append("(")
                backtrack(openN + 1, closedN, depth + 1)
                stack.pop()
                current_stack = "".join(stack)
                print(f"{indent}← Backtrack from '(', stack now: '{current_stack}'")
                
            # Try adding closing parenthesis
            if closedN < openN:
                print(f"{indent}→ Try adding ')' (closed will be {closedN + 1})")
                stack.append(")")
                backtrack(openN, closedN + 1, depth + 1)
                stack.pop()
                current_stack = "".join(stack)
                print(f"{indent}← Backtrack from ')', stack now: '{current_stack}'")

        print(f"\n=== Generating parentheses for n={n} ===")
        print("Legend: → = explore, ← = backtrack, ✓ = found valid")
        print("Rules: openN < n (can add '('), closedN < openN (can add ')')\n")
        backtrack(0, 0)
        return res

# Test with different values
solution = Solution()

print("\n" + "="*50)
print("EXAMPLE 1: n=1")
result1 = solution.generateParenthesis(1)
print(f"\nFinal result: {result1}")

print("\n" + "="*50)
print("EXAMPLE 2: n=2 (More complex)")
solution.step = 0  # Reset step counter
result2 = solution.generateParenthesis(2)
print(f"Final result: {result2}")