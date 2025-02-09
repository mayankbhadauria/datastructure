// Remove Node From End of Linked List
// You are given the beginning of a linked list head, and an integer n.

// Remove the nth node from the end of the list and return the beginning of the list.

// Example 1:
// Input: head = [1,2,3,4], n = 2
// Output: [1,2,4]

// Example 2:
// Input: head = [5], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 2
// Output: [2]

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        if(!head || n<=0) return head

        let pt1 = head, count=0

        // get length of link List
        while(pt1) {
            count++
            pt1 = pt1.next
        }

        //get nth element from start 
        nFromStart = (count - n) + 1

        pt1 = head, count=0

        if(nFromStart<=1) {
            head = pt1.next
            return head
        }

        // Remove nth from start
        while(pt1) {
            
            count++
            
            if((nFromStart-1) == count) {

                if(pt1.next) {
                    pt1.next = pt1.next.next
                }
                else head = pt1.next

                break
            }
            pt1 = pt1.next
        }

        return head

    }
}