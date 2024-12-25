
/* 
You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
The input string s is valid if and only if:
Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.
*/
class Validate {
    isValidParentheses(s) {
        // Early return if string length is less than 2 or not even
        if (s.length < 2 && s.length % 2 !== 0) return false;

        // Map of opening brackets to their corresponding closing brackets
        const openToClose = {
            '(': ')',
            '{': '}',
            '[': ']'
        }

        // Stack to keep track of opening brackets
        const stack = [];

        // Loop through each character in the string
        for(const a of s) {
            if(a) {
                // If current character is an opening bracket
                if(openToClose[a]) {
                    // Push its corresponding closing bracket to stack
                    stack.push(openToClose[a])
                }
                else {
                    // If current character is a closing bracket
                    // Check if it matches the most recent expected closing bracket
                    if(stack.length > 0 && stack[stack.length-1] == a) {
                        stack.pop()
                    }
                    else return false
                }
            }
        }

        // Return true only if all brackets were properly closed (stack is empty)
        return (stack.length == 0)
    }
}

module.exports = Validate;

var s = "[]"
var valid = new Validate()
console.log(valid.isValidParentheses(s))