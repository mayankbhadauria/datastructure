// Linked List Cycle Detection
// Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.

// There is a cycle in a linked list if at least one node in the list that can be visited again by following the next pointer.

// Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.

// Note: index is not given to you as a parameter.


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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {

        let cur = head, hash = new Map()

        while(cur) {

            if(hash.has(cur)) {
                return true
            }
            else {
                hash.set(cur)
                cur = cur.next
            }
        }
        return false
    }
}

class Solution2 {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {

        if(head.next==null) return false

        let pt1 = head, pt2 = head

        while(pt1 && pt2) {
           
            pt1 = pt1.next
            pt2 = (pt2.next && pt2.next.next)? pt2.next.next : null

            if(pt1 == pt2) return true
            
        }

        return false
    }
}

class Node {
    constructor() {
        this.next = null
    }
}

