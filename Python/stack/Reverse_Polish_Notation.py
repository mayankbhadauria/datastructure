# You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

# Return the integer that represents the evaluation of the expression.

# The operands may be integers or the results of other operations.
# The operators include '+', '-', '*', and '/'.
# Assume that division between integers always truncates toward zero.
# Example 1:

# Input: tokens = ["1","2","+","3","*","4","-"]

# Output: 5

# Explanation: ((1 + 2) * 3) - 4 = 5

import math


class Solution:

    def reverse_polish_notation(self, tokens: list[str]) -> int:

        if len(tokens) == 0:
            return 0  # or raise exception - empty input
        if len(tokens) == 1:
            return int(tokens[0])

        
        set_map = {
            '+': 'add',
            '-': 'minus',
            '*': 'multi',
            '/': 'div'
        }
        stack = []
        temp = None

        for n in tokens:

            if n not in set_map:
                stack.append(n)
            else:

                op1 = int(stack.pop())
                op2 = int(stack.pop())

                if set_map.get(n) == 'add':
                    temp = op1 + op2

                elif set_map.get(n) == 'minus':
                    temp = op2 - op1

                elif set_map.get(n) == 'multi':
                    temp = op1 * op2
                    
                elif set_map.get(n) == 'div':
                    if op1 == 0:
                        return None  # Division by zero
                    temp = int(op2/op1)  # Truncate toward zero
                else:
                    return False

                stack.append(temp)
                temp = None

        return stack[0] if len(stack) > 0 else None

# Comprehensive test cases
test_cases = [
    # Basic operations
    (["2", "1", "+", "3", "*"], 9),           # (2 + 1) * 3 = 9
    (["4", "13", "5", "/", "+"], 6),          # 4 + (13 / 5) = 4 + 2 = 6
    (["1", "2", "+", "3", "*", "4", "-"], 5), # ((1 + 2) * 3) - 4 = 5
    (["3", "4", "+"], 7),                      # 3 + 4 = 7
    
    # Single number
    (["5"], 5),                                 # Single number
    (["42"], 42),                               # Single number
    
    # Division cases
    (["6", "2", "/"], 3),                      # 6 / 2 = 3
    (["8", "3", "/"], 2),                      # 8 / 3 = 2 (truncate toward zero)
    (["-8", "3", "/"], -2),                   # -8 / 3 = -2 (truncate toward zero)
    (["8", "-3", "/"], -2),                   # 8 / -3 = -2 (truncate toward zero)
    (["-8", "-3", "/"], 2),                  # -8 / -3 = 2
    
    # Subtraction order
    (["5", "3", "-"], 2),                      # 5 - 3 = 2
    (["3", "5", "-"], -2),                     # 3 - 5 = -2
    
    # Complex expressions
    (["15", "7", "1", "1", "+", "/", "/", "3", "/", "2", "1", "1", "+", "+", "-", "1", "+"], 5),
    (["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"], 22),
    
    # Negative numbers
    (["-1", "2", "+"], 1),                    # -1 + 2 = 1
    (["0", "3", "/"], 0),                      # 0 / 3 = 0
    
    # Edge cases
    (["1", "1", "+", "2", "*"], 4),           # (1 + 1) * 2 = 4
    (["2", "3", "1", "*", "+", "9", "-"], -4), # 2 + (3 * 1) - 9 = -4
]

solution = Solution()
print("Testing Reverse Polish Notation Algorithm:")
print("=" * 50)

for i, (tokens, expected) in enumerate(test_cases, 1):
    try:
        result = solution.reverse_polish_notation(tokens)
        status = "✓" if result == expected else "✗"
        print(f"{status} Test {i:2d}: {str(tokens):40} = {result:3} (expected {expected})")
    except Exception as e:
        print(f"✗ Test {i:2d}: {str(tokens):40} = ERROR: {e}")

print("\n" + "=" * 50)
print("Summary: Algorithm correctness analysis")
