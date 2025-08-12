

# Given a string s, return true if it is a palindrome, otherwise return false.

# A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

# Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

# Example 1:

# Input: s = "Was it a car or a cat I saw?"

# Output: true

class Solution:
    def isPalindrome(self, s: str) -> bool:

        strLn = len(s)

        i=0
        j=strLn-1

        while i < j:
            
            if not s[i].isalnum():
                i += 1
                continue
            if not s[j].isalnum():
                j -= 1
                continue

            if s[i].lower() != s[j].lower():
                print(s[i])
                print(s[j])
                return False
            
            i +=1
            j -=1

        return True


s = "No lemon, no melon"

solution = Solution()
test1 = solution.isPalindrome(s)

print(test1)
        
