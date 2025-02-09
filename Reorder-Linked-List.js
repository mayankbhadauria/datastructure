// Reorder Linked List
// You are given the head of a singly linked-list.

// The positions of a linked list of length = 7 for example, can intially be represented as:

// [0, 1, 2, 3, 4, 5, 6]

// Reorder the nodes of the linked list to be in the following order:

// [0, 6, 1, 5, 2, 4, 3]

// Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:

// [0, n-1, 1, n-2, 2, n-3, ...]

// You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

// Example 1:

// Input: head = [2,4,6,8]

// Output: [2,8,4,6]
// Example 2:

// Input: head = [2,4,6,8,10]

// Output: [2,10,4,8,6]


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
     * @return {void}
     */
    reorderList(head) {

        if (!head || !head.next) return head;

        let pt1 = head, pt2 = head

        while(pt2) {
            if(pt2.next) {
                if(pt2.next.next) {
                    pt1 = pt1.next
                    pt2 = pt2.next.next
                }
                else 
                    pt2 = pt2.next
            } else break
        }
        
        let revHead = this.reverseLinkList(pt1.next)

        pt1.next = null

        pt1 = head, pt2 = revHead

        while(pt1 && pt2) {

            let temp = pt1.next
            pt1.next = pt2

            let temp2 = pt2.next
            pt2.next = temp

            pt2 = temp2
            pt1 = temp1

        }

        return head

    }

    reverseLinkList(head) {

        let cur = head, prev = null

        while(cur) {
            let temp = cur.next
            cur.next = prev
            prev = cur
            cur = temp
        }
        return head = prev
    }
}
