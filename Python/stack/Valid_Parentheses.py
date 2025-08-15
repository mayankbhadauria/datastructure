
from typing import Dict

class Solution:

    def isValid(self, s: str) -> bool:

        brackets_map: Dict[str, str] = {
            '(':')',
            '{':'}',
            '[':']'
        }

        stack = []

        for n in s:
            if n in brackets_map:  # Opening bracket
                stack.append(brackets_map[n])
            elif stack and n == stack[-1]:  # Matching closing bracket
                stack.pop()
            else:  # Invalid: closing bracket with no match or empty stack
                return False
            
        return len(stack) == 0
            

# Test cases
test_cases = [
    ('()', True),       # Simple valid
    ('()[]{}', True),   # Multiple valid
    ('(]', False),      # Wrong type
    ('([)]', False),    # Wrong order
    ('{[]}', True),     # Nested valid
    ('', True),         # Empty string
    ('(((', False),     # Only opening
    (')))', False),     # Only closing
    ('[]', True),       # Simple brackets
    (')', False),       # Single closing
    ('(', False),       # Single opening
    ('([{}])', True),   # Complex nested
    (')(', False),      # Wrong order simple
]

solution = Solution()
print("Testing Valid Parentheses:")
for test_str, expected in test_cases:
    result = solution.isValid(test_str)
    status = "✓" if result == expected else "✗"
    print(f"{status} isValid('{test_str}') = {result} (expected {expected})")
             
                        


