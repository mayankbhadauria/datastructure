
class MinStack:

    def __init__(self):
        self.stack=[]
        self.min = float('inf')

    def push(self, val: int) -> None:
        
        if val < self.min:
            self.min = val

        self.stack.append(val)

    def pop(self) -> None:

        num = self.stack.pop()

        if num == self.min:
            self.findNewMin()

    def top(self) -> int:
        return self.stack[-1]
        
    def getMin(self) -> int:
        return self.min
    
    def findNewMin(self) -> None:
        self.min = float('inf')
        for n in self.stack:
            if n < self.min:
                self.min = n

     

# Test cases
print("Testing MinStack:")

# Test 1: Basic operations
print("\n--- Test 1: Basic Operations ---")
stack = MinStack()
stack.push(-2)
stack.push(0)
stack.push(-3)
print(f"getMin(): {stack.getMin()}")  # Should be -3
stack.pop()
print(f"top(): {stack.top()}")        # Should be 0
print(f"getMin(): {stack.getMin()}")  # Should be -2

# Test 2: Critical failure case - minimum element removal
print("\n--- Test 2: Minimum Element Removal ---")
stack2 = MinStack()
stack2.push(1)
stack2.push(2)
stack2.push(0)  # This becomes minimum
print(f"getMin(): {stack2.getMin()}")  # Should be 0
stack2.pop()  # Remove the minimum element
print(f"getMin(): {stack2.getMin()}")  # Should be 1, but your code will still return 0

# Test 3: Empty stack edge case
print("\n--- Test 3: Empty Stack ---")
stack3 = MinStack()
print(f"Initial min: {stack3.getMin()}")  # Returns -inf (wrong)

# Test 4: Duplicate minimums
print("\n--- Test 4: Duplicate Minimums ---")
stack4 = MinStack()
stack4.push(2)
stack4.push(1)
stack4.push(1)  # Duplicate minimum
print(f"getMin(): {stack4.getMin()}")  # Should be 1
stack4.pop()
print(f"getMin(): {stack4.getMin()}")  # Should still be 1
stack4.pop()
print(f"getMin(): {stack4.getMin()}")  # Should be 2, but your code returns 1