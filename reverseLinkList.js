// Given the beginning of a singly linked list head, 
// reverse the list, and return the new beginning of the list.

// Input: head = [0,1,2,3]
// Output: [3,2,1,0]


class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    reverseList(head) {

        let prev = null

        let cur = head

        while(cur) {
            let next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }

        head = prev

        return head
    }
}


let inst = new Solution();

console.log(inst.reverseList([0,1,2,3]))