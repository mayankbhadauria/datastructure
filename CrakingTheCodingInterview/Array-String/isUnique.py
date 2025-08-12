# implement an Algo if str has unique chars , without additional data structure

def isUnique(s: str) -> bool:
    if len(s) == 0:
        return True
        
    sorted_s = ''.join(sorted(s))
    
    for i in range(len(sorted_s) - 1):
        if sorted_s[i] == sorted_s[i + 1]:
            return False
    
    return True

# Test cases
test_cases = [
    ('abc', True),      # All unique
    ('adbca', False),   # 'a' repeats
    ('', True),         # Empty string
    ('a', True),        # Single char
    ('abcdef', True),   # All unique
    ('hello', False),   # 'l' repeats
    ('world', True),    # All unique: w-o-r-l-d
    ('python', True),   # All unique: p-y-t-h-o-n
    ('unique', False),  # 'u' and 'e' repeat
    ('abcdefg', True)   # All unique
]

for test_str, expected in test_cases:
    result = isUnique(test_str)
    status = "✓" if result == expected else "✗"
    print(f"{status} isUnique('{test_str}') = {result} (expected {expected})")