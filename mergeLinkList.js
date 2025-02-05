// Merge Two Sorted Linked Lists
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

// The new list should be made up of nodes from list1 and list2.


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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        let dummy = new Node()

        let l1 = list1, l2 = list2, node = dummy

        while(l1 && l2) {

            if(l1.val < l2.val) {
                node.next = l1
                l1 = l1.next 
            }
            else {
                node.next = l2
                l2 = l2.next
            }
            node = node.next
        }
        
        (l1 == null)? node.next = l2: node.next = l1

        return dummy.next
    }
}

class Node {
    constructor() {
        this.next = null
    }
}
