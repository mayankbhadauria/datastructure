// Evaluate Reverse Polish Notation
// Solved 
// You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

// Return the integer that represents the evaluation of the expression.

// The operands may be integers or the results of other operations.
// The operators include '+', '-', '*', and '/'.
// Assume that division between integers always truncates toward zero.
// Example 1:

// Input: tokens = ["1","2","+","3","*","4","-"]

// Output: 5

// Explanation: ((1 + 2) * 3) - 4 = 5



class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

       let stack=[]
       let operator = ["+","-","*","/"]

       for(let i=0; i<tokens.length; i++) {

            if(operator.indexOf(tokens[i])>-1) {
                
                let
                b = stack.pop(),
                a = stack.pop(),
                result

                if(tokens[i] == "+") {
                    result = parseInt(a) + parseInt(b)
                }
                if(tokens[i] == "-") {
                    result = parseInt(a) - parseInt(b)
                }
                if(tokens[i] == "*") {
                    result = parseInt(a) * parseInt(b)
                }
                if(tokens[i] == "/") {
                    result = parseInt(a) / parseInt(b)
                }
                stack.push(result)
            }
            else stack.push(tokens[i])
       }
       return Math.floor(stack.pop())
    }
}


let inst = new Solution();
console.log(inst.evalRPN(["1","2","+","3","*","4","-"]))