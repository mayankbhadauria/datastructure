// Add Two Numbers
// You are given two non-empty linked lists, l1 and l2, where each represents a non-negative integer.

// The digits are stored in reverse order, e.g. the number 123 is represented as 3 -> 2 -> 1 -> in the linked list.

// Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Return the sum of the two numbers as a linked list

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        if(!l1) return l2
        if(!l2) return l1

        let cur1 = l1, cur2 = l2, mod = 0, carry = 0
        let dummy = new Node(null)
        let dummyCur = dummy
        
        while(cur1 || cur2 || carry) {  

            let cur1Val = cur1? cur1.val : 0
            let cur2Val = cur2? cur2.val : 0

            let sum = ((cur1Val + cur2Val) + carry)
 
            if(sum > 9) {
                mod = sum%10
                carry = Math.floor(sum/10)
            }
            else {
                carry = 0, mod = sum
            } 

            let node = new Node(mod)

            dummyCur.next = node

            dummyCur = dummyCur.next
            cur1 = cur1.next? cur1.next : 0
            cur2 = cur2.next? cur2.next : 0
        }

        return dummy.next
    }
}

class Node {
    constructor(val) {
        this.next = null
        if(val!=null) this.val = val
    }
}