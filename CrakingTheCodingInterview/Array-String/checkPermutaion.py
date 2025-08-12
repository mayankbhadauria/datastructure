
# given two string check if those are permutation of each other

def ifPermutaion(s1:str, s2: str) -> bool:

    if len(s1) != len(s2):
        return False
    
    if len(s1)==0:
        return True

    myDic = {}

    for n in s1:

        if n in myDic:
            myDic[n] = myDic[n]+1
        else:
            myDic[n] = 1

    for k in s2:

        if k in myDic:
            count = myDic[k]
            if count > 1:
                myDic[k] = myDic[k]-1
            else:
                myDic.pop(k)
        else:
            return False

    return len(myDic)==0
                       

# Test cases
test_cases = [
    ('abc', 'bca', True),      # Valid permutation
    ('abc', 'def', False),     # Different characters
    ('', '', True),            # Empty strings
    ('a', 'a', True),          # Single character match
    ('a', 'b', False),         # Single character no match
    ('abc', 'abcd', False),    # Different lengths
    ('listen', 'silent', True), # Valid permutation
    ('hello', 'bello', False), # Different characters
    ('aab', 'aba', True),      # Repeated characters
    ('aab', 'aaa', False),     # Different counts
]

print("Testing ifPermutaion function:")
for s1, s2, expected in test_cases:
    result = ifPermutaion(s1, s2)
    status = "✓" if result == expected else "✗"
    print(f"{status} ifPermutaion('{s1}', '{s2}') = {result} (expected {expected})")